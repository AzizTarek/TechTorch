"use client";
import React from "react";
import GradientUnderline from "./ui/gradient-underline";
import { HoverEffect } from "./ui/card-hover-effect";
import { SiBootstrap, SiCsharp, SiJavascript, SiJquery, SiKotlin, SiMongodb, SiNextdotjs, SiPhp, SiPython, SiReact, SiSpringboot, SiTailwindcss, SiTypescript, SiUnity } from "react-icons/si";

export default function Skills() {
  const skills = [
    { text: "React", Icon: SiReact },
    { text: "JavaScript", Icon: SiJavascript },
    { text: "NextJs", Icon: SiNextdotjs },
    { text: "TypeScript", Icon: SiTypescript },

    { text: "Tailwind", Icon: SiTailwindcss },
    { text: "PHP", Icon: SiPhp },
    { text: "Bootstrap", Icon: SiBootstrap },
    { text: "JQuery", Icon: SiJquery},
    { text: "MongoDB", Icon: SiMongodb},
    
    { text: "Unity", Icon: SiUnity },
    { text: "Python", Icon: SiPython },
    { text: "Kotlin", Icon: SiKotlin },

];
  return (
    <div className="max-w-3xl mx-auto px-10">
      <div className="flex flex-col text-center justify-center mt-20 ">
        <h1 className="text-2xl md:text-4xl  font-bold">Skills</h1>
        <GradientUnderline />
      </div>
      <HoverEffect items={skills} />
    </div>
  );
}
