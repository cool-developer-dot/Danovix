"use client";

/* eslint-disable react-hooks/immutability -- Three.js render-target / scene overrides are intentionally mutable */

/**
 * Same visual ContactShadows as @react-three/drei (resolution/blur/opacity),
 * but rebakes only when the bag pose changes enough to alter the soft shadow.
 * Sub-pixel scrub + idle float reuse the previous bake — identical look, far less GPU.
 */

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  Color,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  OrthographicCamera,
  PlaneGeometry,
  ShaderMaterial,
  WebGLRenderTarget,
} from "three";
import { HorizontalBlurShader, VerticalBlurShader } from "three-stdlib";

import { productJourneyState } from "@/lib/product-journey/store";
import { isoIs } from "@/lib/diagnostics/iso";

type JourneyContactShadowsProps = {
  resolution: number;
  opacity?: number;
  scale?: number;
  blur?: number;
  far?: number;
  color?: string;
};

/** Viewport-normalized — soft blur hides smaller deltas. */
const POS_EPS = 0.0045;
const SCALE_EPS = 0.02;
const ROT_EPS = 1.35; // degrees

export function JourneyContactShadows({
  resolution,
  opacity = 0.5,
  scale = 3.5,
  blur = 2.6,
  far = 2.5,
  color = "#000000",
}: JourneyContactShadowsProps) {
  const groupRef = useRef<Group>(null);
  const cameraRef = useRef<OrthographicCamera>(null);
  const scene = useThree((s) => s.scene);
  const gl = useThree((s) => s.gl);

  const width = scale;
  const height = scale;

  const resources = useMemo(() => {
    const renderTarget = new WebGLRenderTarget(resolution, resolution);
    const renderTargetBlur = new WebGLRenderTarget(resolution, resolution);
    renderTarget.texture.generateMipmaps = false;
    renderTargetBlur.texture.generateMipmaps = false;

    const planeGeometry = new PlaneGeometry(width, height).rotateX(Math.PI / 2);
    const blurPlane = new Mesh(planeGeometry);

    const depthMaterial = new MeshDepthMaterial();
    depthMaterial.depthTest = false;
    depthMaterial.depthWrite = false;
    depthMaterial.onBeforeCompile = (shader) => {
      shader.uniforms = {
        ...shader.uniforms,
        ucolor: { value: new Color(color) },
      };
      shader.fragmentShader = shader.fragmentShader.replace(
        `void main() {`,
        `uniform vec3 ucolor;
           void main() {
          `,
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "vec4( vec3( 1.0 - fragCoordZ ), opacity );",
        "vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );",
      );
    };

    const horizontalBlurMaterial = new ShaderMaterial(HorizontalBlurShader);
    const verticalBlurMaterial = new ShaderMaterial(VerticalBlurShader);
    horizontalBlurMaterial.depthTest = false;
    verticalBlurMaterial.depthTest = false;

    const planeMaterial = new MeshBasicMaterial({
      map: renderTarget.texture,
      transparent: true,
      opacity,
      depthWrite: false,
    });

    return {
      renderTarget,
      renderTargetBlur,
      planeGeometry,
      blurPlane,
      depthMaterial,
      horizontalBlurMaterial,
      verticalBlurMaterial,
      planeMaterial,
    };
  }, [resolution, width, height, color, opacity]);

  useEffect(
    () => () => {
      resources.renderTarget.dispose();
      resources.renderTargetBlur.dispose();
      resources.planeGeometry.dispose();
      resources.depthMaterial.dispose();
      resources.horizontalBlurMaterial.dispose();
      resources.verticalBlurMaterial.dispose();
      resources.planeMaterial.dispose();
    },
    [resources],
  );

  const lastBakeRef = useRef({
    x: Number.NaN,
    y: Number.NaN,
    scale: Number.NaN,
    rot: Number.NaN,
    baked: false,
  });
  const statsRef = useRef({ frames: 0, bakes: 0 });

  useFrame(() => {
    if (isoIs("shadows")) return;

    const group = groupRef.current;
    const shadowCamera = cameraRef.current;
    if (!group || !shadowCamera) return;

    const state = productJourneyState;
    const active =
      state.canvasVisible && state.revealed && state.shadowOpacity > 0.05;
    group.visible = active;
    if (!active) {
      lastBakeRef.current.baked = false;
      return;
    }

    statsRef.current.frames += 1;

    const rot =
      state.rotateY +
      state.idleRotateY +
      (state.interactiveEnabled ? state.interactiveYaw * (180 / Math.PI) : 0);

    const last = lastBakeRef.current;
    const needsBake =
      !last.baked ||
      Math.abs(state.x - last.x) > POS_EPS ||
      Math.abs(state.y - last.y) > POS_EPS ||
      Math.abs(state.scale - last.scale) > SCALE_EPS ||
      Math.abs(rot - last.rot) > ROT_EPS;

    if (!needsBake) {
      (
        window as Window & {
          __JOURNEY_SHADOW__?: { frames: number; bakes: number };
        }
      ).__JOURNEY_SHADOW__ = { ...statsRef.current };
      return;
    }

    statsRef.current.bakes += 1;
    last.x = state.x;
    last.y = state.y;
    last.scale = state.scale;
    last.rot = rot;
    last.baked = true;

    const {
      renderTarget,
      renderTargetBlur,
      blurPlane,
      depthMaterial,
      horizontalBlurMaterial,
      verticalBlurMaterial,
    } = resources;

    const blurShadows = (amount: number) => {
      blurPlane.visible = true;
      blurPlane.material = horizontalBlurMaterial;
      horizontalBlurMaterial.uniforms.tDiffuse.value = renderTarget.texture;
      horizontalBlurMaterial.uniforms.h.value = amount / 256;
      gl.setRenderTarget(renderTargetBlur);
      gl.render(blurPlane, shadowCamera);

      blurPlane.material = verticalBlurMaterial;
      verticalBlurMaterial.uniforms.tDiffuse.value = renderTargetBlur.texture;
      verticalBlurMaterial.uniforms.v.value = amount / 256;
      gl.setRenderTarget(renderTarget);
      gl.render(blurPlane, shadowCamera);
      blurPlane.visible = false;
    };

    const initialBackground = scene.background;
    const initialOverrideMaterial = scene.overrideMaterial;

    group.visible = false;
    scene.background = null;
    scene.overrideMaterial = depthMaterial;
    gl.setRenderTarget(renderTarget);
    gl.render(scene, shadowCamera);
    blurShadows(blur);
    blurShadows(blur * 0.4);
    gl.setRenderTarget(null);
    group.visible = true;
    scene.overrideMaterial = initialOverrideMaterial;
    scene.background = initialBackground;

    (
      window as Window & {
        __JOURNEY_SHADOW__?: { frames: number; bakes: number };
      }
    ).__JOURNEY_SHADOW__ = { ...statsRef.current };
  });

  return (
    <group ref={groupRef} rotation-x={Math.PI / 2}>
      <mesh
        geometry={resources.planeGeometry}
        material={resources.planeMaterial}
        scale={[1, -1, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <orthographicCamera
        ref={cameraRef}
        args={[-width / 2, width / 2, height / 2, -height / 2, 0, far]}
      />
    </group>
  );
}
