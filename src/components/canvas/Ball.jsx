import React, { Suspense, useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const { imgUrl } = props;
  const meshRef = useRef();

  // Load textures more efficiently
  const decal = useTexture(imgUrl);

  // Use useFrame for more controlled animations
  useFrame((state) => {
    if (meshRef.current) {
      // Slower, more efficient rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow scale={2.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#d0d2d9"
        emissive="#d0d2d9"
        emissiveIntensity={0.8} // Reduced emissive intensity
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        metalness={0.2} // Added for better performance
        roughness={0.8} // Added for better performance
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal}
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    // Use Intersection Observer to only render when visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);

  return (
    <div ref={canvasRef} className="w-full h-full">
      {isVisible && (
        <Canvas
          frameloop="demand"
          dpr={[1, 1.5]}
          gl={{
            preserveDrawingBuffer: true,
            powerPreference: "high-performance",
            antialias: false,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              enableRotate={false} // Disable rotation as we're controlling it manually
              enableDamping={false}
            />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all={false} />
        </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;
