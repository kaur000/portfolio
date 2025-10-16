"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Figma, Code2, Sparkles, X } from "lucide-react";

interface FallingIcon {
  id: number;
  x: number;
  Icon: any;
  color: string;
}

export default function MiniGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [fallingIcons, setFallingIcons] = useState<FallingIcon[]>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(0);

  const icons = [
    { Icon: Palette, color: "text-pink-500" },
    { Icon: Figma, color: "text-purple-500" },
    { Icon: Code2, color: "text-blue-500" },
    { Icon: Sparkles, color: "text-yellow-500" },
  ];

  useEffect(() => {
    if (!gameActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive]);

  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      const randomX = Math.random() * 80 + 10; // 10% to 90% width

      setFallingIcons((prev) => [
        ...prev,
        {
          id: nextIdRef.current++,
          x: randomX,
          Icon: randomIcon.Icon,
          color: randomIcon.color,
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, [gameActive]);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(30);
    setFallingIcons([]);
    nextIdRef.current = 0;
  };

  const catchIcon = (id: number) => {
    setScore((prev) => prev + 10);
    setFallingIcons((prev) => prev.filter((icon) => icon.id !== id));
  };

  const removeIcon = (id: number) => {
    setFallingIcons((prev) => prev.filter((icon) => icon.id !== id));
  };

  return (
    <>
      {/* Floating Game Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <Sparkles size={24} />
        </motion.button>
      )}

      {/* Game Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <X size={20} className="text-gray-600 dark:text-gray-300" />
              </button>

              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-pink-50 mb-2">
                  Catch the Design Icons!
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-pink-100/80">
                  Click on falling icons to catch them. You have 30 seconds!
                </p>
              </div>

              {/* Game Stats */}
              <div className="px-6 py-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 flex justify-between items-center">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-pink-200/70">Score</div>
                  <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{score}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-pink-200/70">Time Left</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{timeLeft}s</div>
                </div>
              </div>

              {/* Game Area */}
              <div
                ref={gameAreaRef}
                className="relative h-96 bg-gradient-to-br from-pink-100/50 to-purple-100/50 dark:from-pink-950/30 dark:to-purple-950/30 overflow-hidden"
              >
                {!gameActive && timeLeft === 30 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={startGame}
                      className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      Start Game
                    </motion.button>
                  </div>
                )}

                {!gameActive && timeLeft === 0 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-pink-50 mb-2">
                        Game Over!
                      </h3>
                      <p className="text-xl text-gray-700 dark:text-pink-100/80 mb-4">
                        Final Score: <span className="font-bold text-pink-600 dark:text-pink-400">{score}</span>
                      </p>
                      <p className="text-gray-600 dark:text-pink-100/70 mb-6">
                        {score >= 200 ? "Amazing! 🎉" : score >= 100 ? "Great job! 👏" : "Keep practicing! 💪"}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={startGame}
                      className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      Play Again
                    </motion.button>
                  </div>
                )}

                {/* Falling Icons */}
                <AnimatePresence>
                  {fallingIcons.map((item) => (
                    <motion.button
                      key={item.id}
                      initial={{ y: -50, x: `${item.x}%`, opacity: 1 }}
                      animate={{ y: 450 }}
                      transition={{ duration: 4, ease: "linear" }}
                      onAnimationComplete={() => removeIcon(item.id)}
                      onClick={() => catchIcon(item.id)}
                      className={`absolute ${item.color} hover:scale-125 transition-transform cursor-pointer`}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <item.Icon size={32} />
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>

              {/* Instructions */}
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 text-center text-sm text-gray-600 dark:text-pink-100/70">
                💡 Tip: Click icons quickly to score more points!
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
