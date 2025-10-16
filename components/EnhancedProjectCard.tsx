"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Sparkles, Heart } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string[];
  image: string;
  link: string;
  index: number;
}

export default function EnhancedProjectCard({
  title,
  description,
  image,
  link,
  index,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        bounce: 0.4,
      }}
      className="perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT SIDE */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/40 dark:to-purple-900/40 backdrop-blur-xl border-2 border-pink-300/50 dark:border-pink-500/30 shadow-2xl">
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-0"
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              style={{
                background:
                  "radial-gradient(circle at center, rgba(236,72,153,0.4), transparent 70%)",
              }}
            />

            {/* Image with parallax */}
            <motion.div
              className="relative h-56 sm:h-64 md:h-72 overflow-hidden"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 via-purple-500/40 to-transparent" />

              {/* Floating hearts on hover */}
              {isHovered && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl"
                      initial={{ opacity: 0, y: 50, x: Math.random() * 100 }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: [50, -100],
                        x: Math.random() * 200,
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                      style={{
                        left: `${20 + i * 15}%`,
                        bottom: "20%",
                      }}
                    >
                      💕
                    </motion.div>
                  ))}
                </>
              )}

              {/* Sparkle corner */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="text-yellow-300 w-8 h-8 drop-shadow-lg" />
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="p-6">
              <motion.h3
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: isHovered ? ["0%", "100%"] : "0%",
                }}
                transition={{ duration: 2 }}
              >
                {title}
              </motion.h3>

              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="text-pink-500 fill-pink-500 w-5 h-5" />
                </motion.div>
                <span className="text-sm text-purple-600 dark:text-purple-300 font-semibold">
                  Click to see details
                </span>
              </div>

              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-full text-white font-semibold shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236,72,153,0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={18} />
                Flip Card
              </motion.div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-pink-400/50 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-400/50 rounded-br-3xl" />

            {/* Floating sparkles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                style={{
                  top: `${30 + i * 20}%`,
                  right: `${10 + i * 5}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* BACK SIDE */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 p-8 shadow-2xl">
            {/* Animated pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
            </div>

            <div className="relative h-full flex flex-col justify-between">
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 20 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-white mb-6 flex items-center gap-2"
                >
                  <Sparkles className="w-8 h-8" />
                  {title}
                </motion.h3>

                <ul className="space-y-4 mb-6">
                  {description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: isFlipped ? 1 : 0,
                        x: isFlipped ? 0 : -20,
                      }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start text-white"
                    >
                      <motion.span
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        className="text-yellow-300 mr-3 text-2xl"
                      >
                        ✨
                      </motion.span>
                      <span className="flex-1 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isFlipped ? 1 : 0,
                    y: isFlipped ? 0 : 20,
                  }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Prototype
                  <ExternalLink size={20} />
                </motion.a>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ delay: 0.6 }}
                  className="block w-full text-white/80 text-sm hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(false);
                  }}
                >
                  ← Click to flip back
                </motion.button>
              </div>
            </div>

            {/* Decorative hearts */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/20 text-3xl"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${10 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                💖
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outer glow */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl opacity-0 blur-xl -z-10"
          animate={{
            opacity: isHovered ? 0.4 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
