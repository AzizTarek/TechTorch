import React from 'react';
import { SiAndroidstudio, SiClerk, SiCsharp, SiFirebase, SiJetpackcompose, SiKnexdotjs, SiKotlin, SiMongodb, SiPostman, SiReact, SiShadcnui, SiSpringboot, SiTailwindcss, SiTypescript, SiUnity } from 'react-icons/si';
import GradientUnderline from './ui/gradient-underline';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from './ui/direction-aware-hover';



export default function Projects() {
    const projects=[
        {
            title: "Productivity Tool (FlowHive)",
            tech : [SiKnexdotjs, SiTypescript, SiReact, SiTailwindcss, SiShadcnui,SiClerk],
            link: "https://github.com/AzizTarek/FlowHive",
            cover: "/img/flowhive.png",
            background: "bg-orange-500/[0.3]",
        },  
        {
            title: "Movie Reviews App",
            tech : [SiReact, SiSpringboot, SiMongodb,SiPostman],
            link: "https://github.com/AzizTarek/Movie-Reviews",
            cover: "/img/moviereviews.png",
            background: "bg-red-500/[0.3]",
        },  
        {
            title: "VR Meditation (Zenscape)",
            tech : [SiUnity,SiCsharp],
            link: "https://github.com/AzizTarek/ZenScape-VR-Meditation-",
            cover: "/img/meditation.png",
            background: "bg-yellow-500/[0.3]",
        }, 
         {
            title: "Health Mobile App (RespFit)",
            tech : [SiKotlin,SiJetpackcompose,SiAndroidstudio,SiFirebase],
            link: "https://github.com/AzizTarek/RespFit",
            cover: "/img/respfit.png",
            background: "bg-slate-500/[0.3]",
        },

    ]
    return (
        <div className='py-10 p-5 sm:p-0 max-w-3xl mx-auto '>
            <div className=" flex flex-col text-center justify-center md:mt-20 ">
                <h1 className="text-2xl md:text-4xl  font-bold">Projects</h1>
                <GradientUnderline />
            </div>
            <div className='grid grid-cols-1  sm:grid-cols-2 pt-20 gap-5 '>
                {projects.map((project,index)=>{
                    return <Link href={project.link} key={index}> 
                     <div className={cn("p-2 rounded-lg ",project.background)}>
                        <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                            <div className='space-y-5'>
                                <h1 className='text-xl font-bold'>{project.title}</h1>
                                <div className='flex items-center gap-5'>
                                    {project.tech.map((Icon,index)=>{
                                        return <Icon className="w-7 h-7" key={index}/>
                                    })}
                                </div>
                            </div>
                        </DirectionAwareHover>

                     </div>
                    </Link>
                })}
            </div>
        </div>
    );
}