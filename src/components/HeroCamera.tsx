import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { easing } from "maath";
const HeroCamera = ({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (groupRef.current) {
      // The following code uses the `easing.damp3` function to smoothly transition the camera's position to [0, 0, 20] over time.
      // The `easing.dampE` function is used to smoothly transition the rotation of the group referenced by `groupRef` based on the mouse pointer's position.
      // The rotation is only applied if the `isMobile` flag is false, meaning the device is not a mobile device.
      // The `delta` parameter represents the time elapsed since the last frame, ensuring smooth animations.
      easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
      if (!isMobile) {
        easing.dampE(
          groupRef.current.rotation,
          [-state.pointer.y / 3, state.pointer.x / 5, 0],
          0.25,
          delta
        );
      }
    }
  });
  return (
    <group ref={groupRef} scale={0.9}>
      {children}
    </group>
  );
};

export default HeroCamera;
