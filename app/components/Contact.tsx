"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { Github, Gitlab, Linkedin, Twitter } from "lucide-react";

// Particles Component
function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles-contact"
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

// Contact Section
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_3g6yfss", 
        "template_i602tce", 
        formRef.current,
        "uGpIq4-XwJL1H6rOJ" 
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-gray-900 text-white overflow-hidden min-h-screen py-20 px-6 -mt-10"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-heading font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          className="flex flex-col gap-6 bg-gray-800 p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          ></textarea>
          <motion.button
            type="submit"
            className="bg-teal-500 text-gray-900 font-semibold py-3 rounded-md hover:bg-teal-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {status === "success" && <p className="mt-4 text-green-400">Message sent successfully!</p>}
        {status === "error" && <p className="mt-4 text-red-400">Failed to send message. Try again.</p>}

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <motion.a
            href="https://github.com/tarunguduru2811"
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <Github size={28} className="text-teal-400" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/TarunGuduru"
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <Linkedin size={28} className="text-teal-400" />
          </motion.a>
          <motion.a
            href="https://gitlab.com/Tarun2811"
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <Gitlab size={28} className="text-teal-400" />
          </motion.a>
        </div>
        <p className="text-sm sm:text-base mt-5 font-body">
          © {new Date().getFullYear()} Tarun Guduru. All rights reserved.
        </p>
      </div>
     
    </section>
  );
}
