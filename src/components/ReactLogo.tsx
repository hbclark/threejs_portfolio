import { Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface ReactLogoProps {
  // other props...
}

interface ReactLogoProps {
  position: THREE.Vector3;
  // ... other props
}

const ReactLogo: React.FC<ReactLogoProps> = (props) => {
  const { nodes, materials } = useGLTF("models/react.glb");

  return (
    <Float floatIntensity={1}>
      <group scale={0.3} {...props} dispose={null}>
        <mesh
          geometry={(nodes["React-Logo_Material002_0"] as THREE.Mesh).geometry}
          material={materials["Material.002"]}
          position={props.position}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("models/react.glb");

export default ReactLogo;
