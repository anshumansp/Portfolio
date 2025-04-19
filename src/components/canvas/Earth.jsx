import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Pre-load model
useGLTF.preload("./planet/scene.gltf");

const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf", true);
  const earthRef = useRef();

  return (
    <primitive
      ref={earthRef}
      object={scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
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
          shadows
          frameloop="demand"
          dpr={[1, 1.5]}
          gl={{
            preserveDrawingBuffer: true,
            powerPreference: "high-performance",
            antialias: false,
          }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              autoRotateSpeed={0.5} // Reduced rotation speed
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minDistance={Math.PI / 2}
              enableDamping={false}
            />
            <Earth />
          </Suspense>
          <Preload all={false} />
        </Canvas>
      )}
    </div>
  );
};

export default EarthCanvas;
