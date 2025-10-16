"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Code2, Palette, Sparkles, Download } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const skills = [
  { icon: Code2, name: "Web Development", color: "from-cyan-400 to-blue-500" },
  { icon: Palette, name: "UX/UI Design", color: "from-purple-400 to-pink-500" },
  { icon: Sparkles, name: "Figma Prototyping", color: "from-yellow-400 to-orange-500" },
];

export default function Home() {
  return (
    <>
      <AnimatedBackground />

      <div className="relative min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Layout with Side Profile Picture */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
            {/* Left Side - Profile Picture (Smaller) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                <div className="absolute -inset-3 bg-gradient-to-tr from-pink-500 via-purple-500 to-rose-500 rounded-full blur-xl opacity-20" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full rounded-full overflow-hidden border-3 border-white/60 dark:border-pink-200/30 shadow-xl"
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
            <div className="space-y-6 flex-1">
              {/* Name & Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-3"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 dark:text-pink-50">
                  Mehak Saini
                </h1>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                  <p className="text-lg md:text-xl text-gray-600 dark:text-pink-100/80 font-medium">
                    UX/UI & Web Designer
                  </p>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <p className="text-base md:text-lg text-gray-600 dark:text-pink-100/80 leading-relaxed">
                  UX/UI Designer crafting user-centered digital experiences.
                  Combining design aesthetics with technical expertise from my Software Development background.
                  Passionate about leveraging AI tools to enhance design workflows and create innovative solutions. I believe creativity is magic.
                </p>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="px-4 py-2 text-sm text-gray-700 dark:text-pink-100 bg-gray-100 dark:bg-pink-900/30 rounded-full hover:bg-pink-50 dark:hover:bg-pink-800/50 hover:text-pink-600 dark:hover:text-pink-200 transition-colors duration-300"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-3 bg-gray-900 dark:bg-pink-600 text-white dark:text-pink-50 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-pink-700 transition-colors duration-300"
                  >
                    <span className="flex items-center gap-2">
                      View Portfolio
                      <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <motion.a
                  href="/resume.pdf"
                  download="Mehak_Saini_Resume.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-8 py-3 border-2 border-gray-200 dark:border-pink-700 text-gray-700 dark:text-pink-100 rounded-lg font-medium hover:border-gray-300 dark:hover:border-pink-600 hover:bg-gray-50 dark:hover:bg-pink-900/30 transition-all duration-300"
                >
                  <Download size={18} />
                  Resume
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex gap-4"
              >
                <a
                  href="https://www.linkedin.com/in/mehak-s-597349243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:mehaksaini09@yahoo.com"
                  className="text-gray-400 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  <Mail size={22} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Featured Work Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-pink-50 mb-3">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-pink-100/80">Recent projects showcasing design & development</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {/* Featured Project 1 */}
            <Link href="/portfolio">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-pink-800 hover:border-gray-300 dark:hover:border-pink-700 transition-all bg-white dark:bg-pink-950/30 shadow-sm hover:shadow-md"
              >
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="text-pink-400" size={40} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-pink-50 mb-1">Shopify E-commerce</h3>
                  <p className="text-sm text-gray-600 dark:text-pink-200/80">Custom online store with payment integration</p>
                </div>
              </motion.div>
            </Link>

            {/* Featured Project 2 */}
            <Link href="/portfolio">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-pink-800 hover:border-gray-300 dark:hover:border-pink-700 transition-all bg-white dark:bg-pink-950/30 shadow-sm hover:shadow-md"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="text-blue-400" size={40} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-pink-50 mb-1">ShopMDM Platform</h3>
                  <p className="text-sm text-gray-600 dark:text-pink-200/80">E-commerce site for mobile device management</p>
                </div>
              </motion.div>
            </Link>

            {/* Featured Project 3 */}
            <Link href="/portfolio">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.45 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-pink-800 hover:border-gray-300 dark:hover:border-pink-700 transition-all bg-white dark:bg-pink-950/30 shadow-sm hover:shadow-md"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Palette className="text-purple-400" size={40} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-pink-50 mb-1">Spotify UI Design</h3>
                  <p className="text-sm text-gray-600 dark:text-pink-200/80">Figma prototype with interactive elements</p>
                </div>
              </motion.div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="text-center"
          >
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-pink-100 hover:text-gray-900 dark:hover:text-pink-50 font-medium border border-gray-200 dark:border-pink-700 rounded-lg hover:border-gray-300 dark:hover:border-pink-600 hover:bg-gray-50 dark:hover:bg-pink-900/30 transition-all"
              >
                View All Projects
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Quick Stats Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.55 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/50 dark:to-purple-950/50 border border-pink-200 dark:border-pink-800 cursor-pointer"
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-pink-50 mb-1">7+</div>
              <div className="text-sm text-gray-600 dark:text-pink-200/80">Projects Completed</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border border-blue-200 dark:border-blue-800 cursor-pointer"
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-pink-50 mb-1">3+</div>
              <div className="text-sm text-gray-600 dark:text-pink-200/80">Years Experience</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border border-purple-200 dark:border-purple-800 cursor-pointer"
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-pink-50 mb-1">5+</div>
              <div className="text-sm text-gray-600 dark:text-pink-200/80">Design Tools</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border border-green-200 dark:border-green-800 cursor-pointer"
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-pink-50 mb-1">100%</div>
              <div className="text-sm text-gray-600 dark:text-pink-200/80">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </>
  );
}
