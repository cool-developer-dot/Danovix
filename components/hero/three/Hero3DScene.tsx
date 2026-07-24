"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import type { Group, Object3D } from "three";

import { HERO_3D_MODEL_PATH } from "@/lib/hero-3d";

function disposeObject(root: Object3D) {
  root.traverse((obj) => {
    const mesh = obj as Object3D & {
      geometry?: { dispose: () => void };
      material?: { dispose: () => void } | Array<{ dispose: () => void }>;
    };
    mesh.geometry?.dispose();
    if (Array.isArray(mesh.material)) {
      mesh.material.forEach((m) => m.dispose());
    } else {
      mesh.material?.dispose();
    }
  });
}

export function Hero3DScene() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(HERO_3D_MODEL_PATH);
  const invalidate = useThree((s) => s.invalidate);

  const cloned = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    useGLTF.preload(HERO_3D_MODEL_PATH);
    return () => {
      disposeObject(cloned);
    };
  }, [cloned]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15;
    invalidate();
  });

  return (
    <group ref={groupRef} scale={1.2} position={[0, -0.4, 0]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} />
      <primitive object={cloned} />
    </group>
  );
}
