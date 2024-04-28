import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiReaddotcv } from "react-icons/si";
import GradientUnderline from "./ui/gradient-underline";
import { cn } from "@/lib/utils";

export default function Navbar({className} : {className?:string}) {
  const socials = [
    {
      Link: "https://linkedin.com/in/alexandrostarek",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      Link: "https://github.com/AzizTarek?tab=repositories",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://drive.google.com/file/d/1z5t6J3WsRKDASZrAPEUnv7sex0-NxRt5/view?usp=sharing",
      Label: "CV.pdf",
      Icon: SiReaddotcv,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center",className)}>
      <div>
      <h1 className="text-2xl font-bold ">TechTorch Tarek</h1>
        <GradientUnderline/>
      </div>
  
      <div className="flex items-center gap-6">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label} >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
