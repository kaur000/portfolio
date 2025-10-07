"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    let lastTime = Date.now();
    const throttleDelay = 30; // Create particle every 30ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();

      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      const newParticle: Particle = {
        id: nextIdRef.current,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);
      nextIdRef.current += 1;

      // Remove particle after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: particle.x - 4, 
              y: particle.y - 4,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              scale: 0,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
            style={{
              boxShadow: "0 0 10px rgba(236, 72, 153, 0.5)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
