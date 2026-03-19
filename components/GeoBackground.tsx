"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function GeoBackground() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -80]);
  const y2 = useTransform(scrollY, [0, 500], [0, 60]);
  const y3 = useTransform(scrollY, [0, 500], [0, -40]);
  const y4 = useTransform(scrollY, [0, 500], [0, 100]);
  const y5 = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute w-80 h-80 rounded-full bg-yellow-300 opacity-15 -top-20 -right-16"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute w-48 h-48 rounded-full bg-violet-700 opacity-10 bottom-20 -left-14"
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute w-14 h-14 bg-violet-200 opacity-20 top-44 right-24"
        animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: y4 }}
        className="absolute w-10 h-10 bg-yellow-300 opacity-25 bottom-48 right-52"
        animate={{ rotate: [12, 45, 12], y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: y5 }}
        className="absolute w-20 h-20 bg-yellow-200 opacity-15 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.08, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}