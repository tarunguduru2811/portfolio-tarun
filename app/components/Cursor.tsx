"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Motion values for smooth trailing
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX - 8); // offset to center the dot
      y.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      {/* Main glowing dot */}
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
        }}
        className="
          pointer-events-none
          fixed
          w-4 h-4
          rounded-full
          bg-teal-400
          shadow-lg
          z-50
          mix-blend-screen
        "
      />
    </>
  );
}
