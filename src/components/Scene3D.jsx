// src/components/Scene3D.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Dodecahedron } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Dodecahedron ref={meshRef} args={[1.5, 0]}>
      <meshStandardMaterial color="#0A2342" wireframe />
    </Dodecahedron>
  );
};

const Scene3D = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedShape />
    </Canvas>
  );
};

export default Scene3D;