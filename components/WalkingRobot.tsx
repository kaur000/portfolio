"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WalkingRobot() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const moveRobot = () => {
      const screenWidth = window.innerWidth;

      if (direction === "right") {
        if (position >= screenWidth - 60) {
          setDirection("left");
        } else {
          setPosition((prev) => prev + 1.5);
        }
      } else {
        if (position <= 0) {
          setDirection("right");
        } else {
          setPosition((prev) => prev - 1.5);
        }
      }
    };

    const interval = setInterval(moveRobot, 30);
    return () => clearInterval(interval);
  }, [position, direction]);

  return (
    <motion.div
      className="fixed bottom-8 z-50 pointer-events-none"
      style={{
        left: `${position}px`,
        transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)",
      }}
    >
      <motion.div
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Cute custom robot SVG */}
        <svg
          width="40"
          height="50"
          viewBox="0 0 40 50"
          className="drop-shadow-lg"
        >
          {/* Antenna */}
          <motion.circle
            cx="20"
            cy="3"
            r="2"
            fill="#ec4899"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
          <line x1="20" y1="5" x2="20" y2="10" stroke="#a855f7" strokeWidth="2" />

          {/* Head */}
          <rect x="10" y="10" width="20" height="18" rx="4" fill="#c084fc" />

          {/* Eyes */}
          <motion.circle
            cx="15"
            cy="17"
            r="2"
            fill="#ffffff"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <motion.circle
            cx="25"
            cy="17"
            r="2"
            fill="#ffffff"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />

          {/* Smile */}
          <path
            d="M 15 22 Q 20 25 25 22"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Body */}
          <rect x="12" y="28" width="16" height="14" rx="3" fill="#a855f7" />

          {/* Heart on chest */}
          <path
            d="M 20 35 L 18 33 Q 17 32 18 31 Q 19 30 20 31 Q 21 30 22 31 Q 23 32 22 33 Z"
            fill="#ec4899"
          />

          {/* Arms */}
          <motion.rect
            x="6"
            y="30"
            width="6"
            height="3"
            rx="1.5"
            fill="#c084fc"
            animate={{
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
            }}
            style={{ transformOrigin: "12px 31.5px" }}
          />
          <motion.rect
            x="28"
            y="30"
            width="6"
            height="3"
            rx="1.5"
            fill="#c084fc"
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
            }}
            style={{ transformOrigin: "28px 31.5px" }}
          />

          {/* Legs */}
          <motion.rect
            x="14"
            y="42"
            width="4"
            height="6"
            rx="2"
            fill="#c084fc"
            animate={{
              height: [6, 5, 6],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
            }}
          />
          <motion.rect
            x="22"
            y="42"
            width="4"
            height="6"
            rx="2"
            fill="#c084fc"
            animate={{
              height: [5, 6, 5],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
            }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
