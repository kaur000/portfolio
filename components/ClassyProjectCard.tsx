"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string[];
  image: string;
  link: string;
  index: number;
  isInteractive?: boolean;
}

const cardShapes = [
  "rounded-[3rem]", // Super rounded
  "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl", // Diagonal curves
  "rounded-[2.5rem]", // Elegant rounded
  "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl", // Asymmetric
];

export default function ClassyProjectCard({
  title,
  description,
  image,
  link,
  index,
  isInteractive = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shapeClass = cardShapes[index % cardShapes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full flex flex-col hover:shadow-lg">
        {/* Preview Section - Interactive or Static */}
        <div className="relative h-80 overflow-hidden flex-shrink-0 bg-gray-50">
          {isInteractive ? (
            // Interactive iframe preview for live websites
            <>
              <div className="absolute inset-0 p-4">
                <div className="relative w-full h-full bg-white rounded-lg shadow-inner overflow-hidden border border-gray-200">
                  <iframe
                    src={link}
                    className="w-full h-full pointer-events-auto"
                    title={title}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Device frame overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full" />
              </div>
            </>
          ) : (
            // Static image preview for Figma prototypes
            <>
              <motion.div
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </motion.div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-display font-semibold mb-3 text-gray-900 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <ul className="space-y-2 mb-4 flex-1">
            {description.map((item, i) => (
              <li
                key={i}
                className="flex items-start text-gray-600 leading-relaxed text-sm"
              >
                <span className="inline-block w-1 h-1 rounded-full bg-gray-400 mt-2 mr-2.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ gap: "0.75rem" }}
            className="inline-flex items-center gap-2 text-gray-900 font-medium group hover:text-pink-600 transition-colors w-fit"
          >
            {isInteractive ? "View Full Site" : "View Project"}
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
