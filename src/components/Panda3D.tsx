import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function Panda() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
    }
  });

  return (
    <group ref={ref} position={[0, -0.3, 0]}>
      {/* Body */}
      <mesh position={[0, -0.6, 0]}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Belly */}
      <mesh position={[0, -0.55, 0.5]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.78, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Ears */}
      {[-0.55, 0.55].map((x) => (
        <mesh key={x} position={[x, 1.15, -0.05]}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      ))}
      {/* Eye patches */}
      {[-0.28, 0.28].map((x) => (
        <mesh key={x} position={[x, 0.55, 0.55]} rotation={[0, 0, x > 0 ? -0.3 : 0.3]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      ))}
      {/* Eyes */}
      {[-0.28, 0.28].map((x) => (
        <mesh key={`e${x}`} position={[x, 0.58, 0.7]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      ))}
      {/* Nose */}
      <mesh position={[0, 0.35, 0.75]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Arms raised */}
      <mesh position={[-0.85, 0.2, 0.1]} rotation={[0, 0, 0.9]}>
        <capsuleGeometry args={[0.2, 0.7, 8, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.85, 0.2, 0.1]} rotation={[0, 0, -0.9]}>
        <capsuleGeometry args={[0.2, 0.7, 8, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.3, -1.35, 0.1]}>
        <sphereGeometry args={[0.28, 24, 24]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.3, -1.35, 0.1]}>
        <sphereGeometry args={[0.28, 24, 24]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
}

function YellowDisk() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.3;
  });
  return (
    <mesh ref={ref} position={[0, 0, -1.5]}>
      <circleGeometry args={[2.4, 64]} />
      <meshBasicMaterial color="#FFED00" />
    </mesh>
  );
}

export function Panda3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <directionalLight position={[-3, 2, 2]} intensity={0.4} color="#FFED00" />
      <YellowDisk />
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <Panda />
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
