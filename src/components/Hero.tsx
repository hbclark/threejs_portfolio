"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "./HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "./loading";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/constants";
import Target from "./Target";
import ReactLogo from "./ReactLogo";

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
    <section className="min-h-screen w-full flex-col relative text-white">
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

            <HackerRoom
              // scale={0.07}
              position={[
                sizes.deskPosition[0],
                sizes.deskPosition[1],
                sizes.deskPosition[2],
              ]}
              rotation={[0, -Math.PI, 0]}
              scale={sizes.deskScale}
            />
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />

            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
