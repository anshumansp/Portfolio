import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Float,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

// Create a floating card model
const ContactCard = ({
  position,
  rotation,
  scale,
  icon,
  label,
  link,
  color,
}) => {
  const meshRef = useRef();

  // Simple animation
  useFrame((state) => {
    meshRef.current.rotation.y =
      Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group
        position={position}
        rotation={rotation}
        scale={scale}
        ref={meshRef}
      >
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1, 0.5, 0.05]} />
          <meshStandardMaterial
            color={color || "#915eff"}
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>

        <Text
          position={[0, 0, 0.03]}
          fontSize={0.1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
};

const ContactInfo3D = () => {
  return (
    <group>
      <ContactCard
        position={[-1.5, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}
        label="GitHub"
        link="https://github.com/anshumansp/"
        color="#333333"
      />
      <ContactCard
        position={[-0.5, 0.2, 0]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}
        label="LinkedIn"
        link="https://www.linkedin.com/in/anshuman-parmar-757666219/"
        color="#0077b5"
      />
      <ContactCard
        position={[0.5, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}
        label="YouTube"
        link="https://www.youtube.com/@thepixelizesolution"
        color="#FF0000"
      />
      <ContactCard
        position={[1.5, 0.2, 0]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}
        label="Email"
        link="mailto:anshumansp16@gmail.com"
        color="#4285F4"
      />
      <ContactCard
        position={[0, -0.5, 0]}
        rotation={[0, 0, 0]}
        scale={[1.5, 1, 1]}
        label="Pixelize Solution"
        link="https://pixelizesolution.com"
        color="#915eff"
      />
    </group>
  );
};

const ContactInfo3DCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <ContactInfo3D />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ContactInfo3DCanvas;
