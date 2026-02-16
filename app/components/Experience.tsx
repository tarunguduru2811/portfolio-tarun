"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { workExperienceData, educationData } from "../utils/data";
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";

interface WorkItem {
  id: string;
  logo: StaticImageData | string;
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
  technologies?: string[];
}

interface EducationItem {
  id: string;
  institute: string;
  degree: string;
  duration: string;
  location: string;
  gpa: string;
  logo?: string;
}

// Timeline Item for Work Experience
const WorkTimelineItem: React.FC<{ item: WorkItem; isLast: boolean }> = ({ item, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="relative flex gap-8 mb-8 z-10">
        {/* Icon + Line */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 flex items-center justify-center bg-gray-900 border-2 border-teal-500 rounded-full z-10">
            <Briefcase size={22} className="text-teal-400" />
          </div>
          {!isLast && <div className="w-[3px] bg-teal-500 flex-1 mt-2" />}
        </div>
  
        {/* Card */}
        <div
          className="flex-1 bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-teal-500/20 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-start gap-4">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src={item.logo}
                alt={item.company}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold font-heading">{item.role}</h4>
              <p className="text-teal-400 text-sm font-body">{item.company}</p>
              <div className="flex items-center gap-4 font-body text-gray-400 text-sm mt-1">
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="text-teal-400" /> {item.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-teal-400" /> {item.location}
                </span>
              </div>
            </div>
            {isOpen ? (
              <ChevronUp size={24} className="text-teal-400 ml-2 mt-1" />
            ) : (
              <ChevronDown size={24} className="text-teal-400 ml-2 mt-1" />
            )}
          </div>
  
          {/* Smooth Accordion */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="mt-4 text-gray-300 flex font-body flex-col gap-2"
              >
                <h5 className="font-medium">Key Responsibilities:</h5>
                <ul className="list-disc list-inside">
                  {item.responsibilities.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
                {item.technologies && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-teal-500/20 text-teal-400 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

// Timeline Item for Education
const EducationTimelineItem: React.FC<{ item: EducationItem; isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative flex gap-8 mb-8 z-10">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 flex items-center justify-center bg-gray-900 border-2 border-teal-500 rounded-full z-10">
        <GraduationCap size={20} className="text-teal-400" />
      </div>
      {!isLast && <div className="w-[2px] bg-teal-500 flex-1 mt-2" />}
    </div>

    <div className="flex-1 bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-6">
      <div className="flex items-start gap-4">
        {item.logo && (
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image src={item.logo} alt={item.institute} fill className="object-contain rounded-md" />
          </div>
        )}
        <div>
          <h4 className="text-lg font-semibold font-heading">{item.degree}</h4>
          <p className="text-teal-400 text-sm font-body">{item.institute}</p>
          <div className="flex font-body items-center gap-4 text-gray-400 text-sm mt-1">
            <span className="flex items-center gap-1 ">
              <Calendar size={14} className="text-teal-400 font-body" /> {item.duration}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-teal-400 font-body" /> {item.location}
            </span>
          </div>
          <p className="text-gray-300 mt-2 font-body">GPA: {item.gpa}</p>
        </div>
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-gray-800 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-400 text-center mb-12">My Journey</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">Work Experience</h3>
            {workExperienceData.map((item, idx) => (
              <WorkTimelineItem key={item.id} item={item} isLast={idx === workExperienceData.length - 1} />
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">Education</h3>
            {educationData.map((item, idx) => (
              <EducationTimelineItem key={item.id} item={item} isLast={idx === educationData.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
