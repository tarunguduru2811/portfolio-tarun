"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Express.js", icon: "/expressjs.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "PostgreSQL", icon: "/postgress.svg" },
  { name: "MySQL", icon: "/mysql.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "TailwindCSS", icon: "/tailwindcss.svg" },
  { name: "Docker", icon: "/docker.png" },
  { name: "Python", icon: "/python.png" },
];

function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles-skills"
      init={particlesInit}
      options={{
        background: { color: { value: "#1f2937" } }, // same as experience
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" }, resize: true },
          modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
        },
        particles: {
          color: { value: "#14b8a6" },
          links: {
            enable: true,
            color: "#14b8a6",
            distance: 150,
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          number: { value: 60 },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-gray-800 text-white py-24 overflow-hidden"
    >
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-teal-400 text-center mb-16"
        >
          Tech Stack
        </motion.h2>

        <div className="relative overflow-hidden px-14">
          <motion.div
            className="flex gap-14 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                
                {/* Full Circle */}
                <div
                  className="
                  w-28 h-28
                  rounded-full
                  bg-gray-900
                  border-2 border-gray-700
                  flex items-center justify-center
                  shadow-lg
                  transition-all duration-300
                  group-hover:border-teal-400
                  group-hover:shadow-teal-400/30
                  group-hover:scale-100
                  "
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Skill Name */}
                <p className="mt-4 font-heading font-semibold text-sm text-gray-300 group-hover:text-teal-400 transition">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
