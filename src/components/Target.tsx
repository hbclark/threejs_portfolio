import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { Mesh } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";

interface TargetProps {
  position: THREE.Vector3;
  // other props...
}

const Target: React.FC<TargetProps> = (props) => {
  const targetRef = useRef<Mesh>(null);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );
  useGSAP(() => {
    if (targetRef.current) {
      // Add null check
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  });
  return (
    <mesh
      ref={targetRef}
      {...props}
      rotation={[0, Math.PI / 5, 0]}
      position={props.position}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
