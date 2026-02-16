"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Monitor } from "lucide-react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

// Skills Data
const skills = [
    {name:"React",icon:"/react.svg",level:90},
    {name:"Next.js",icon:"/nextjs.svg",level:85},
    {name:"Node.js",icon:"/nodejs.svg",level:85},
    {name:"Express.js",icon:"/expressjs.svg",level:80},
    {name:"MongoDB",icon:"/mongodb.svg",level:85},
    {name:"PostgreSQL",icon:"/postgress.svg",level:80},
    {name:"MySQL",icon:"/mysql.svg",level:85},
    {name:"Javascript",icon:"/javascript.svg",level:90},
    {name:"TailwindCSS",icon:"/tailwindcss.svg",level:80},
    {name:"Docker",icon:"/docker.png",level:80},
    {name:"Python",icon:"/python.png",level:80}
]
// Particles Component
function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles-skills"
      init={particlesInit}
      options={{
        background: { color: { value: "#0f172a" } },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          color: { value: "#00ADB5" },
          links: { enable: true, color: "#00ADB5", distance: 150, opacity: 0.4, width: 1 },
          move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
          number: { value: 60, density: { enable: true, area: 900 } },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
}

export default function Skills(){
    return (
        <section className="relative bg-gray-900 text-white overflow-hidden min-h-screen" id="skills">
            <ParticlesBackground/>

            {/* Skills Content */}
            <div className="relative z-10 py-20 px-6 text-center">
                <motion.h2 className="text-3xl font-heading font-bold mb-12">
                    My Skills
                </motion.h2>
 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {
                        skills.map((skill,index)=>(
                            <motion.div key={index}
                            className="bg-gray-800 p-6 rounded-xl flex flex-col items-start gap-4 hover:scale-105 transition cursor-pointer  border-2 border-gray-700"
                            initial={{opacity:0,y:20}}
                            whileInView={{opacity:1,y:0}}
                            transition={{delay:index*0.1,duration:0.6}}
                            >
                                <div className="flex items-center gap-3 w-full">
                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                                    <div className="font-body font-medium text-lg">{skill.name}</div>
                                </div>

                                <div className="w-full bg-gray-700 h-3 rounded-full mt-2">
                                    <motion.div
                                    className="bg-teal-500 h-3 rounded-full"
                                    initial={{width:0}}
                                    whileInView={{width:`${skill.level}%`}}
                                    transition={{duration:1}}
                                    />
                                </div>
                            </motion.div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}