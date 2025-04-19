import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const Stars = (props) => {
  const ref = useRef();

  // Reduce number of stars for better performance
  const numStars = 2000; // Reduced from 5000

  // Use useMemo to avoid recreating positions on every render
  const positions = useMemo(() => {
    const positions = new Float32Array(numStars * 3);
    for (let i = 0; i < numStars; i++) {
      positions[i * 3] = Math.random() * 2 - 1;
      positions[i * 3 + 1] = Math.random() * 2 - 1;
      positions[i * 3 + 2] = Math.random() * 2 - 1;
    }
    return positions;
  }, [numStars]);

  // Use a slower animation for better performance
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30; // Slower rotation
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} frustumCulled={true} {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    // Use Intersection Observer to only render when visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "300px 0px", // Increased to preload earlier
      }
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
    <div ref={canvasRef} className="w-full h-auto absolute inset-0 z-[-1]">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 1] }}
          dpr={[1, 1.5]}
          gl={{
            powerPreference: "high-performance",
            antialias: false,
          }}
        >
          <Stars />
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
