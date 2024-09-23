"use client";
import React, { useState } from "react";
import Image from "next/image";
import Globe from "react-globe.gl";
import Button from "@/components/Button";
import toast from "react-hot-toast";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("skla2003@hotmail.com");
    toast.success("Email Copied to Clipboard");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20 scroll-smooth-30" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className=" col-span-1  ">
          <div className="grid-container relative">
            <div className="h-[340px]">
              <Image
                layout="responsive"
                width={100}
                height={100}
                src="/assets/grid1.png"
                alt="grid1"
                className="w-full sm:h-[340px] "
              />
            </div>
            <div>
              <p className="grid-headtext">Hi I&apos;m Clark</p>
              <p className="grid-subtext">
                With 2 years of experience in the field of web development, I
                have honed my skills in frontend and backend development, with a
                focus in Next.js.
              </p>
            </div>
          </div>
        </div>
        <div className="  col-span-1 ">
          <div className="grid-container relative">
            <div className="md:h-[340px]">
              <Image
                layout="responsive"
                width={100}
                height={100}
                src="/assets/grid2.png"
                alt="grid1"
                className="w-full sm:h-[340px] "
              />
            </div>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript, Typescript, React, Next.js, Tailwind
                CSS.
              </p>
            </div>
          </div>
        </div>
        <div className="  col-span-1 ">
          <div className="grid-container relative">
            <div className="h-[340px] rounded-3xl w-full flex justify-center items-center">
              <Globe
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                height={326}
                width={326}
                // backgroundImageOpacity={0.5} // Removed as it's not a valid property
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I can work remotely across most timezone.
              </p>
              <p className="grid-subtext">
                I am a quick learner and I am always looking to learn new
                technologies.
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="  col-span-1 ">
          <div className="grid-container relative">
            <div className="md:h-[340px] flex justify-center items-center">
              <Image
                layout="responsive"
                width={100}
                height={100}
                src="/assets/grid3.png"
                alt="grid3"
                className="w-full sm:h-[340px] "
              />
            </div>
            <div>
              <p className="grid-headtext">My Passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building products that make a
                difference.
              </p>
            </div>
          </div>
        </div>
        <div className="  col-span-1 ">
          <div className="grid-container relative">
            <div className="sm:h-[340px]">
              <Image
                layout="responsive"
                width={100}
                height={100}
                src="/assets/grid4.png"
                alt="grid4"
                className="w-full sm:h-[340px] "
              />
            </div>
            <div>
              <p className="grid-headtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <Image
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy pic"
                  width={20}
                  height={20}
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  skla2003@hotmail.com
                </p>
              </div>
              <p className="grid-subtext"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
