import Link from "next/link";
import React from "react";
import { SparklesCore } from "./sparkles";
import { MovingBorderBtn } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div className=" relative min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center  justify-between">
      <div className="space-y-10 text-center lg:text-left  md:mx-40 p-5 z-10">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hi there! <br/>I`&apos;`m Aziz Alexandros Tarek
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          Engineer of elegant and efficient digital ecosystems, specializing in
          immersive user experiences across web, mobile, and virtual realms.
        </p>
        <Link href={"mailto:tarekaziz12343@gmail.com"} className="inline-block group">
          <div>
              <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
                <h1 className="group-hover:text-orange-500 text-lg">Contact me</h1>
              </MovingBorderBtn>
          </div>
        </Link>
      </div>
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={120}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative ">{/* torch */}</div>
    </div>
  );
}
