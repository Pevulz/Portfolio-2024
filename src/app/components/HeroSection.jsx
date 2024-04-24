"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between">
        <div className=" place-self-center text-center md:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              Hello, I'm{" "}
            </span>
            <br></br>
            Tony
          </h1>

          <TypeAnimation
            className="col-span-5 text-[#ADB7BE] text-lg lg:text-xl"
            sequence={[
              "Brooklyn College alumni with a bachelor degree in Computer Science.",
              1000,
              "Excited to learn new things to improve my coding skills.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/avatar.png"
              alt="hero image"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
