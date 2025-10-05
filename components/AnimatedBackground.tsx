"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Subtle gradient orbs - PROFESSIONAL & CLASSY */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[900px] h-[900px] rounded-full blur-3xl opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(249,168,212,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -50, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Elegant grid pattern - very subtle */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(236,72,153,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236,72,153,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: "linear-gradient(45deg, transparent 40%, rgba(236,72,153,0.1) 50%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
