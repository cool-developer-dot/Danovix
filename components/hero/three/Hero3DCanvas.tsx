"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Hero3DScene } from "./Hero3DScene";

type Hero3DCanvasProps = {
  active: boolean;
};

export function Hero3DCanvas({ active }: Hero3DCanvasProps) {
  if (!active) return null;

  return (
    <Canvas
      className="absolute inset-0"
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      frameloop="demand"
      camera={{ position: [0, 0, 4], fov: 35 }}
    >
      <Suspense fallback={null}>
        <Hero3DScene />
      </Suspense>
    </Canvas>
  );
}
