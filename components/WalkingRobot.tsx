"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Star } from "lucide-react";

export default function WalkingRobot() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isExcited, setIsExcited] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [actionType, setActionType] = useState<"jump" | "fall" | "spin" | "none">("none");

  const messages = [
    "Hi! I'm your AI buddy! 👋",
    "I love helping with design! 🎨",
    "Let's create something amazing! ✨",
    "Click me again! 💜",
    "Beep boop! I'm excited! 🤖",
  ];

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

  const handleClick = () => {
    const randomAction = Math.random();

    setIsExcited(true);
    setShowMessage(true);
    setClickCount((prev) => (prev + 1) % messages.length);

    // Random actions: jump, fall, or spin
    if (randomAction < 0.33) {
      setActionType("jump");
    } else if (randomAction < 0.66) {
      setActionType("fall");
    } else {
      setActionType("spin");
    }

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    // Reset excited state and action type after animation
    setTimeout(() => {
      setIsExcited(false);
      setActionType("none");
    }, 1500);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-8 z-50"
        style={{
          left: `${position}px`,
          transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)",
        }}
      >
        <motion.div
          animate={{
            y:
              actionType === "jump" ? [0, -60, -70, 0] :
              actionType === "fall" ? [0, 5, 20, 10, 0] :
              isExcited ? [0, -20, 0] : [0, -2, 0],
            rotate: actionType === "spin" ? [0, 360] : 0,
            scale: isExcited && actionType !== "fall" ? [1, 1.2, 1] : actionType === "fall" ? [1, 0.9, 1] : 1,
          }}
          transition={{
            duration:
              actionType === "jump" ? 1.2 :
              actionType === "fall" ? 0.8 :
              actionType === "spin" ? 1 :
              isExcited ? 0.5 : 0.3,
            repeat: isExcited ? 0 : Infinity,
            ease: actionType === "fall" ? "easeIn" : actionType === "jump" ? "easeOut" : "easeInOut",
          }}
          onClick={handleClick}
          className="cursor-pointer pointer-events-auto hover:scale-110 transition-transform"
        >
          {/* Cute custom robot SVG */}
          <svg
            width="40"
            height="50"
            viewBox="0 0 40 50"
            className="drop-shadow-lg hover:drop-shadow-2xl transition-all"
          >
          {/* Antenna */}
          <motion.circle
            cx="20"
            cy="3"
            r="2"
            fill={isExcited ? "#fbbf24" : "#ec4899"}
            animate={{
              scale: isExcited ? [1, 1.5, 1] : [1, 1.3, 1],
            }}
            transition={{
              duration: isExcited ? 0.3 : 1,
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

        {/* Sparkle effects when clicked */}
        <AnimatePresence>
          {isExcited && (
            <>
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-4 -right-4"
              >
                <Sparkles className="text-yellow-400" size={20} />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -360 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute -top-2 -left-4"
              >
                <Star className="text-pink-400" size={16} />
              </motion.div>
              <motion.div
                initial={{ scale: 0, y: 0 }}
                animate={{ scale: [0, 1, 1, 0], y: [0, -20, -30, -40] }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-1/2 -translate-x-1/2"
              >
                <Heart className="text-red-400 fill-red-400" size={12} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>

      {/* Speech bubble message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${position + 50}px`,
              bottom: "100px",
            }}
          >
            <div className="bg-white px-4 py-2 rounded-2xl shadow-lg border-2 border-pink-200 relative">
              <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
                {messages[clickCount]}
              </p>
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-r-2 border-b-2 border-pink-200 transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
