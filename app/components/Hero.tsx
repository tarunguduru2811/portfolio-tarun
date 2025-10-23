"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 overflow-hidden">
      {/* Particles behind content */}
      <ParticlesBackground />

      {/* Hero Content */}
      <motion.h1
        className="text-5xl md:text-7xl font-heading font-bold mb-4 text-center z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-teal-400">Tarun Guduru</span>
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl font-body font-light text-gray-300 mb-6 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Software Developer @ FlyingFox Labs · MERN Stack Developer
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl text-gray-400 mb-8 z-10 font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        I build scalable full-stack web applications that deliver smooth user
        experiences. Passionate about writing clean code and crafting interactive interfaces.
      </motion.p>

      <motion.div
        className="flex gap-4 z-10 font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a
          href="#skills"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition"
        >
          View My Skills <ArrowRight size={18} />
        </a>

        <a
          href="#contact"
          className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-6 py-3 rounded-full font-medium transition"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
