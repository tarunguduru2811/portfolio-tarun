"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Lottie from "lottie-react"
import devAnimation from "../../public/assets/avatar.json"


export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center py-20 px-6 bg-gray-800 text-white -mt-20"
    >
      {/* Image / Avatar with hover animation */}
  
         <div className="w-64 h-64 mb-8 md:mb-0 md:mr-12 rounded-full overflow-hidden border-4 border-teal-400 cursor-pointer z-10">
            <div className="w-full h-full">
              <Lottie
                animationData={devAnimation}
                loop={true}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

      {/* Text Content */}
      <motion.div
        className="max-w-xl z-10 font-body"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-heading font-bold mb-4">About Me</h2>
        <p className="text-gray-300 mb-4">
          I’m Tarun Guduru, a Software Developer at <strong>FlyingFox Labs Pvt Ltd</strong> in Hyderabad. I specialize in building scalable full-stack web applications using the MERN Stack. I’m passionate about clean code, interactive UI, and delivering smooth user experiences.
        </p>
        <p className="text-gray-300 mb-6">
          Outside of coding, I enjoy learning new technologies, contributing to open-source projects, and improving my frontend design skills. I’m always excited to collaborate on challenging projects and build impactful software.
        </p>

        {/* Quick Facts */}
        <div className="flex flex-wrap gap-4 mb-6">
          <motion.div
            className="bg-gray-700 px-4 py-2 rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Experience: 1+ year
          </motion.div>
          <motion.div
            className="bg-gray-700 px-4 py-2 rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Tech Stack: MERN
          </motion.div>
          <motion.div
            className="bg-gray-700 px-4 py-2 rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Location: Hyderabad
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1FG7RFQw5PixQGFYQlOtr0jb1MiCnBa_Y/view?usp=sharing" // Replace with your actual resume file
          target="_blank"
          className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full font-medium transition"
          whileHover={{ scale: 1.05 }}
        >
          <Download size={18} /> Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
