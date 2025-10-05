"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Code2, Palette, Sparkles } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import MagneticButton from "@/components/MagneticButton";
import { useRef } from "react";

const skills = [
  { icon: Code2, name: "Web Development", color: "from-cyan-400 to-blue-500" },
  { icon: Palette, name: "UX/UI Design", color: "from-purple-400 to-pink-500" },
  { icon: Sparkles, name: "Figma Prototyping", color: "from-yellow-400 to-orange-500" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <>
      <AnimatedBackground />

      <div ref={containerRef} className="relative min-h-screen pt-28 pb-20">
        <motion.div
          style={{ opacity, scale, y }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Split Layout - Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500 via-purple-500 to-rose-500 rounded-full blur-2xl opacity-20" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-2xl"
                >
                  <Image
                    src="/mypic.JPG"
                    alt="Mehak Saini"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <div className="space-y-6 lg:pl-8">
              {/* Name & Title */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-gray-900">
                  Mehak Saini
                </h1>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                  <p className="text-xl md:text-2xl text-gray-600 font-medium">
                    UX/UI & Web Designer
                  </p>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  UX/UI Designer crafting user-centered digital experiences.
                  Combining design aesthetics with technical expertise from my Software Development background.
                </p>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-pink-50 hover:text-pink-600 transition-colors duration-300"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    <span className="flex items-center gap-2">
                      View Portfolio
                      <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <motion.a
                  href="mailto:mehaksaini09@yahoo.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                >
                  Get in Touch
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4 pt-2"
              >
                <a
                  href="https://www.linkedin.com/in/mehak-s-597349243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:mehaksaini09@yahoo.com"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <Mail size={22} />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Featured Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
              Featured Work
            </h2>
            <p className="text-gray-600">Live interactive preview</p>
          </div>

          {/* Live Figma Embed */}
          <div className="mb-12">
            <div className="rounded-2xl border-2 border-gray-200 overflow-hidden bg-gray-50 shadow-lg">
              <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-600 font-medium">Spotify UI - Figma Prototype</span>
                </div>
              </div>
              <div className="aspect-video bg-white">
                <iframe
                  className="w-full h-full"
                  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/7uXEUlzlbU9EDs7VVwMCCm/Untitled?type=design&node-id=119-121&t=mzOiYZhbX5ABziIb-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=106%3A332"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured Project 1 */}
            <Link href="/portfolio">
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all bg-white"
              >
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="text-pink-400" size={40} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Spotify UI Replication</h3>
                  <p className="text-sm text-gray-600">Figma Design & Prototyping</p>
                </div>
              </motion.div>
            </Link>

            {/* Featured Project 2 */}
            <Link href="/portfolio">
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all bg-white"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="text-blue-400" size={40} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Meta Direct</h3>
                  <p className="text-sm text-gray-600">Full Stack Web Application</p>
                </div>
              </motion.div>
            </Link>

            {/* Featured Project 3 */}
            <Link href="/portfolio">
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all bg-white"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Palette className="text-purple-400" size={40} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Restaurant Website</h3>
                  <p className="text-sm text-gray-600">UI/UX Design Project</p>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="text-gray-600 hover:text-gray-900 font-medium inline-flex items-center gap-2"
              >
                View All Projects
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
