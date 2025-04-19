import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// Pre-load the model to avoid multiple loading instances
useGLTF.preload("/desktop_pc/scene.gltf");

const Computers = ({ isMobile }) => {
  // Set up DRACO loader for better compression
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(
    "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
  );

  // Load with caching enabled
  const { scene } = useGLTF("/desktop_pc/scene.gltf", true);

  // Reference for animation optimizations
  const meshRef = useRef();

  return (
    <mesh ref={meshRef}>
      {/* Reduced light intensity for better performance */}
      <hemisphereLight intensity={1.5} groundColor="#000000" />
      <pointLight intensity={0.8} position={[0, 0, 0]} />
      <spotLight
        position={[-20, 60, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.8}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={scene}
        scale={isMobile ? 0.45 : 0.75}
        position={isMobile ? [0, -3, -1.5] : [0, -2.8, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef();

  // Optimize mobile detection
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setisMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setisMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange, {
      passive: true,
    });

    // Use Intersection Observer to only render when visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "300px 0px", // Increased from default to preload earlier
      }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
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
          shadows
          dpr={[1, 1.5]} // Reduced DPR for better performance
          camera={{
            position: isMobile ? [15, 3, 5] : [20, 3.5, 5],
            fov: isMobile ? 20 : 25,
          }}
          gl={{
            preserveDrawingBuffer: true,
            powerPreference: "high-performance",
            antialias: false, // Disable antialiasing for better performance
          }}
          style={{ height: "100%" }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enableDamping={false} // Disable damping for better performance
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all={false} /> {/* Only preload necessary assets */}
        </Canvas>
      )}
    </div>
  );
};

export default ComputersCanvas;
