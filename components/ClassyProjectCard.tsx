"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const shapeClass = cardShapes[index % cardShapes.length];

  // Intersection Observer for lazy loading - optimized
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Delay iframe loading for better performance (longer delay)
            if (isInteractive) {
              setTimeout(() => setShouldLoadIframe(true), 500);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isInteractive]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      <div className="relative overflow-hidden bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-pink-500/20 hover:border-gray-300 dark:hover:border-pink-500/30 transition-all duration-300 h-full flex flex-col hover:shadow-lg">
        {/* Preview Section - Enhanced Browser Window */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {/* Browser Window Frame */}
          <div className="absolute top-0 left-0 right-0 h-11 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/80 border-b border-gray-200 dark:border-pink-500/20 z-10 flex items-center px-4 gap-2 shadow-sm">
            {/* Window Buttons */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-sm"></div>
            </div>
            {/* URL Bar */}
            <div className="flex-1 ml-4 flex items-center">
              <div className="flex-1 bg-gray-100 dark:bg-gray-700/50 rounded-lg px-3 py-1.5 text-xs text-gray-500 dark:text-pink-200/70 truncate border border-gray-200 dark:border-gray-600">
                {link}
              </div>
            </div>
          </div>

          {/* Preview Content Area */}
          <div className="absolute inset-0 top-11 bg-white dark:bg-gray-900 overflow-hidden">
            {isInteractive ? (
              // Interactive iframe preview for live websites
              <div className="w-full h-full">
                {shouldLoadIframe ? (
                  <iframe
                    src={link}
                    className="w-full h-full pointer-events-auto"
                    title={title}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <div className="flex flex-col items-center gap-3">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
                      <div className="text-gray-400 dark:text-pink-200/70 text-sm">Loading preview...</div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Static image preview with enhanced hover effect
              <motion.div
                animate={{ scale: isHovered ? 1.08 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover object-top"
                  priority={index < 2}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Enhanced overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-display font-semibold mb-3 text-gray-900 dark:text-pink-50 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <ul className="space-y-2 mb-4 flex-1">
            {description.map((item, i) => (
              <li
                key={i}
                className="flex items-start text-gray-600 dark:text-pink-100/80 leading-relaxed text-sm"
              >
                <span className="inline-block w-1 h-1 rounded-full bg-gray-400 dark:bg-pink-300 mt-2 mr-2.5 flex-shrink-0" />
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
            className="inline-flex items-center gap-2 text-gray-900 dark:text-pink-50 font-medium group hover:text-pink-600 dark:hover:text-pink-200 transition-colors w-fit"
          >
            {isInteractive ? "View Full Site" : "View Project"}
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
