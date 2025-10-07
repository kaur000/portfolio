"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "Figma", size: "large", color: "pink" },
  { name: "UI/UX Design", size: "large", color: "purple" },
  { name: "WordPress", size: "large", color: "rose" },
  { name: "Shopify", size: "medium", color: "pink" },
  { name: "React", size: "medium", color: "purple" },
  { name: "Wireframing", size: "large", color: "rose" },
  { name: "Prototyping", size: "large", color: "pink" },
  { name: "Adobe XD", size: "medium", color: "purple" },
  { name: "Canva", size: "medium", color: "rose" },
  { name: "TypeScript", size: "small", color: "pink" },
  { name: "Next.js", size: "medium", color: "purple" },
  { name: "Tailwind CSS", size: "medium", color: "rose" },
  { name: "User Research", size: "medium", color: "pink" },
  { name: "Responsive Design", size: "large", color: "purple" },
  { name: "WooCommerce", size: "small", color: "rose" },
  { name: "Elementor Pro", size: "small", color: "pink" },
  { name: "Squarespace", size: "small", color: "purple" },
  { name: "Adobe Photoshop", size: "medium", color: "rose" },
  { name: "HTML/CSS", size: "medium", color: "pink" },
  { name: "JavaScript", size: "medium", color: "purple" },
];

const sizeStyles = {
  small: "text-sm px-4 py-2",
  medium: "text-base px-5 py-2.5",
  large: "text-lg px-6 py-3",
};

const colorStyles = {
  pink: {
    light: "bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200 hover:border-pink-300",
    dark: "dark:bg-pink-900/30 dark:text-pink-200 dark:border-pink-500/30 dark:hover:bg-pink-800/40 dark:hover:border-pink-400/50",
  },
  purple: {
    light: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200 hover:border-purple-300",
    dark: "dark:bg-purple-900/30 dark:text-purple-200 dark:border-purple-500/30 dark:hover:bg-purple-800/40 dark:hover:border-purple-400/50",
  },
  rose: {
    light: "bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200 hover:border-rose-300",
    dark: "dark:bg-rose-900/30 dark:text-rose-200 dark:border-rose-500/30 dark:hover:bg-rose-800/40 dark:hover:border-rose-400/50",
  },
};

export default function SkillsCloud() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.button
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.03,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
            className={`
              ${sizeStyles[skill.size]}
              ${colorStyles[skill.color].light}
              ${colorStyles[skill.color].dark}
              rounded-full border-2 font-medium
              transition-all duration-300 cursor-pointer
              ${activeSkill === skill.name ? "ring-4 ring-pink-300 dark:ring-pink-500/50 shadow-lg" : ""}
            `}
          >
            {skill.name}
          </motion.button>
        ))}
      </div>

      {/* Active Skill Display */}
      {activeSkill && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="mt-8 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 border border-pink-200 dark:border-pink-500/30">
            <p className="text-sm text-gray-600 dark:text-pink-200/70 mb-1">Currently viewing:</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-pink-50">{activeSkill}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
