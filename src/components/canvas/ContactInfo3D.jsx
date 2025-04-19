import React, { useRef, useState, Suspense, useEffect } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Text, Float, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Loader";

const ContactCard = ({ position, rotation, scale, label, link, color }) => {
  const cardRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Add hover effect
  const onHover = () => setHovered(true);
  const onUnhover = () => setHovered(false);

  // Make the card clickable
  const onClick = () => {
    window.open(link, "_blank");
  };

  return (
    <group
      position={position}
      rotation={rotation}
      scale={scale}
      ref={cardRef}
      onPointerOver={onHover}
      onPointerOut={onUnhover}
      onClick={onClick}
    >
      <mesh>
        <boxGeometry args={[1, 0.5, 0.05]} />
        <meshStandardMaterial
          color={hovered ? "#ffffff" : color}
          metalness={0.5}
          roughness={0.5}
          emissive={hovered ? color : "#000000"}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </mesh>
      <Text
        position={[0, 0, 0.03]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

// This is the inner component that uses useFrame - needs to be inside Canvas
const ContactInfo3D = () => {
  const groupRef = useRef();

  // Rotate the entire group slowly
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* GitHub */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <ContactCard
          position={[1, 0.5, 0]}
          rotation={[0, 0, 0]}
          scale={[1.5, 1, 1]}
          label="GitHub"
          link="https://github.com/anshumansp/"
          color="#333333"
        />
      </Float>

      {/* LinkedIn */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <ContactCard
          position={[-1, 0.5, 0]}
          rotation={[0, 0, 0]}
          scale={[1.5, 1, 1]}
          label="LinkedIn"
          link="https://www.linkedin.com/in/anshuman-parmar-757666219/"
          color="#0077b5"
        />
      </Float>

      {/* YouTube */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <ContactCard
          position={[0, 1.5, 0]}
          rotation={[0, 0, 0]}
          scale={[1.5, 1, 1]}
          label="YouTube"
          link="https://www.youtube.com/@thepixelizesolution"
          color="#FF0000"
        />
      </Float>

      {/* Email */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <ContactCard
          position={[0, 0.5, 1]}
          rotation={[0, 0, 0]}
          scale={[1.5, 1, 1]}
          label="Email"
          link="mailto:anshumansp16@gmail.com"
          color="#4285F4"
        />
      </Float>
    </group>
  );
};

// This is the wrapper component that provides the Canvas
const ContactInfo3DCanvas = () => {
  const [isError, setIsError] = useState(false);
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
        rootMargin: "300px 0px", // Preload when within 300px of viewport
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

  // Handle errors in the 3D rendering
  const handleError = () => {
    console.log("Error in ContactInfo3D Canvas - providing fallback");
    setIsError(true);
  };

  // If there's an error, show a simple fallback
  if (isError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-lg">
        <p className="text-white text-center">
          3D view unavailable
          <br />
          Please check my contact info on the left
        </p>
      </div>
    );
  }

  return (
    <div ref={canvasRef} className="w-full h-full">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          onError={handleError}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ContactInfo3D />
            <OrbitControls
              enableZoom={false}
              rotateSpeed={0.5}
              enablePan={false}
              enableDamping={true}
              dampingFactor={0.1}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default ContactInfo3DCanvas;
