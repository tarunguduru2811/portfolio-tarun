"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { title } from "process";
import { image } from "framer-motion/client";

// Projects Data
const projects = [
    {
        title:"Pingify Chat",
        description:"A sleek, real-time chat app built with React, Socket.IO, and Node.js. Join public rooms or have private chats with typing indicators, online user tracking, and browser notifications.",
        tech:["React","Node.js","Express","MongoDB","SocketIO"],
        github:"https://github.com/tarunguduru2811/pingify-chat",
        live:"https://pingifychat.netlify.app/",
        image:"/pingifychat.png"
    },
    {
        title:"Weather App",
        description:"A simple weather application that displays the current weather based on your location or searched city. This app uses IP-based geolocation to detect your approximate location and fetch weather data from the OpenWeatherMap API.",
        tech:["HTML","CSS","Javascript"],
        github:"https://github.com/tarunguduru2811/weather-App",
        live:"https://weather-app-cmqs.onrender.com/",
        image:"/weatherApp.png"
    },
    {
        title:"Finora",
        description:"Finance Tracker is a modern web application designed to help users manage their personal finances with ease and clarity. It allows users to track income, expenses, and savings while providing insightful visualizations and summaries of financial health over time",
        tech:["Next.js","Node.js","Express.js","PostgreSQL","Prisma","TailwindCSS"],
        github:"https://gitlab.com/frappe6220827/finance-tracker",
        live:"https://finora-one-rouge.vercel.app/",
        image:"/2026-02-16-144827_screenshot.png"
    }
]

// Particles Component
function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles-projects"
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


export default function Projects(){
  const [selectedProject,setSelectedProject] = useState<number | null>(null);
  return(
    <section id="projects" className=" bg-gray-800 text-white overflow-hidden min-h-screen ">
      <ParticlesBackground/>

      {/* Projects Content */}
      <div className="relative z-10 py-20 px-6 text-center">
          <motion.h2 
          className="text-3xl font-heading font-bold mb-12"
          initial={{opacity:0,y:-20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          >
            My Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {
              projects.map((project,index)=>(
                  <motion.div 
                  key={index}
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer border-2 border-gray-700"
                  initial={{opacity:0,y:20}}
                  whileInView={{opacity:1,y:0}}
                  whileHover={{scale:1.05,boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)"}}
                  transition={{delay:index*0.1,duration:0.6}}
                  onClick={()=>setSelectedProject(index)}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-48 w-48 object-cover"
                      whileHover={{scale:1.1}}
                      transition={{duration:0.3}}
                    />

                    <div className="p-6">
                        <h3 className="text-xl font-body font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4 font-body">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {
                            project.tech.map((tech,i)=>(
                              <span key={i}
                              className="bg-teal-500 font-body text-gray-900 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))
                          }
                        </div>
                        <div className="flex justify-between font-body">
                            <a href={project.github} target="_blank" className="text-teal-400 hover:underline">
                              Github
                            </a>
                            <a href={project.live} target="_blank" className="text-teal-400 hover:underline">
                              Live
                            </a>
                        </div>
                    </div>
                
                  </motion.div>
              ))
            }

          </div>
      </div>
    </section>
  )
}

