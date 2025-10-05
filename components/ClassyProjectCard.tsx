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

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Delay iframe loading for better performance
            setTimeout(() => setShouldLoadIframe(true), 300);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

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
      <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full flex flex-col hover:shadow-lg">
        {/* Preview Section - Consistent Browser Window Look */}
        <div className="relative h-80 overflow-hidden flex-shrink-0 bg-gray-100">
          {/* Browser Window Frame */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-gray-200 z-10 flex items-center px-4 gap-2">
            {/* Window Buttons */}
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            {/* URL Bar */}
            <div className="flex-1 ml-4 flex items-center">
              <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-500 truncate">
                {link}
              </div>
            </div>
          </div>

          {/* Preview Content Area */}
          <div className="absolute inset-0 top-10 bg-white overflow-hidden">
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
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <div className="text-gray-400 text-sm">Loading preview...</div>
                  </div>
                )}
              </div>
            ) : (
              // Static image preview with hover effect
              <motion.div
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )}
          </div>
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
