"use client";

import { ContactShadows, Environment, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  DoubleSide,
  Group,
  MeshStandardMaterial,
  PlaneGeometry,
  SRGBColorSpace,
  type Mesh,
} from "three";

type Product3DCanvasProps = {
  imageSrc: string;
  autoRotate: boolean;
  zoom: number;
};

function ProductMesh({
  imageSrc,
  autoRotate,
  zoom,
}: Product3DCanvasProps) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture(imageSrc);
  const geometry = useMemo(() => new PlaneGeometry(1.35, 1.55), []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability -- GPU texture setup
    texture.colorSpace = SRGBColorSpace;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
    return () => texture.dispose();
  }, [texture]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.06,
        side: DoubleSide,
        metalness: 0.18,
        roughness: 0.42,
        envMapIntensity: 0.85,
      }),
    [texture],
  );

  useEffect(() => () => material.dispose(), [material]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    group.scale.setScalar(zoom);
    if (autoRotate) {
      group.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.15, 0]}>
      <mesh ref={meshRef} geometry={geometry} material={material} />
    </group>
  );
}

export function Product3DCanvas({
  imageSrc,
  autoRotate,
  zoom,
}: Product3DCanvasProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.2, 3.2], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
      aria-label="Interactive 3D product viewer"
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.15} />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} />
      <Environment preset="warehouse" environmentIntensity={0.35} />
      <ProductMesh imageSrc={imageSrc} autoRotate={autoRotate} zoom={zoom} />
      <ContactShadows
        position={[0, -0.85, 0]}
        opacity={0.45}
        scale={8}
        blur={2.6}
        far={4}
      />
      <OrbitControls
        enablePan={false}
        minDistance={2.2}
        maxDistance={4.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.7}
        autoRotate={false}
      />
    </Canvas>
  );
}
