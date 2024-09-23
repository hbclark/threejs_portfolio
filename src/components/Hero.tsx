"use client";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "./HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "./loading";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/constants";
import Target from "./Target";
import ReactLogo from "./ReactLogo";
import Cube from "./Cube";
import Rings from "./Rings";
import * as THREE from "three";
import HeroCamera from "./HeroCamera";
import Link from "next/link";
import Button from "./Button";

const Hero = () => {
  // const x = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
      className="min-h-screen w-full flex-col relative text-white scroll-smooth-30"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white c-space gap-3 text-center ">
          Hi I am Clark <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient mt-10 sm:mt-14">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva hidden />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            {/* <axesHelper args={[5]} /> */}
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                // scale={0.07}
                position={new THREE.Vector3(...sizes.deskPosition)}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <Target position={new THREE.Vector3(...sizes.targetPosition)} />
              <ReactLogo
                position={new THREE.Vector3(...sizes.reactLogoPosition)}
              />
              <Cube position={new THREE.Vector3(...sizes.cubePosition)} />
              <Rings position={new THREE.Vector3(...sizes.ringPosition)} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />

            {/* <OrbitControls /> */}
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute  bottom-7 left-0 right-0 w-full z-10 c-space ">
        <Link href="#contact" className="w-fit">
          <Button
            name="Les't work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-96"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
