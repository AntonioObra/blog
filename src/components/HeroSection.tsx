// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";

// * Importing shaders
import portalVertexShader from "../shaders/vertex.glsl";
import portalFragmentShader from "../shaders/fragment.glsl";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { useTheme } from "next-themes";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#2563eb"),
    uColorEnd: new THREE.Color("#ffffff"),
  },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });

const HeroSection = () => {
  const portalMaterialRef = useRef();
  const { viewport, size } = useThree();
  const { theme, systemTheme } = useTheme();

  useFrame((state, delta) => {
    portalMaterialRef.current.uTime += delta * 2.5;
  });

  useEffect(() => {
    let isDark =
      theme === "dark" || (theme === "system" && systemTheme === "dark");
    portalMaterialRef.current.uniforms.uColorEnd.value.set(
      isDark ? "#050505" : "#ffffff"
    );
  }, [portalMaterialRef, theme, systemTheme]);

  return (
    <>
      <color args={["#050505"]} attach="background" />

      {/* // * Portal */}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />

        <portalMaterial
          ref={portalMaterialRef}
          resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        />
      </mesh>
    </>
  );
};

export default HeroSection;
