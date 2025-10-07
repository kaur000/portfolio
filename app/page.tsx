"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Code2, Palette, Sparkles } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ResumeDownload from "@/components/ResumeDownload";

const skills = [
  { icon: Code2, name: "Web Development", color: "from-cyan-400 to-blue-500" },
  { icon: Palette, name: "UX/UI Design", color: "from-purple-400 to-pink-500" },
  { icon: Sparkles, name: "Figma Prototyping", color: "from-yellow-400 to-orange-500" },
];

export default function Home() {
  return (
    <>
      <AnimatedBackground />

      <div className="relative min-h-screen pt-20 pb-20 overflow-hidden">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-500/30 dark:to-purple-500/30 rounded-full blur-3xl opacity-30 dark:opacity-50"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full blur-3xl opacity-30 dark:opacity-50"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-40 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-200 to-rose-200 dark:from-pink-600/30 dark:to-rose-600/30 rounded-full blur-2xl opacity-20 dark:opacity-40"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-32 right-1/3 w-28 h-28 bg-gradient-to-br from-yellow-200 to-orange-200 dark:from-purple-600/30 dark:to-pink-600/30 rounded-full blur-2xl opacity-20 dark:opacity-40"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Content with Image on Top */}
          <div className="max-w-4xl mx-auto">
            {/* Glass Card Container */}
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-900/60 rounded-3xl shadow-2xl border border-white/50 dark:border-pink-500/20 p-8 md:p-12">
              {/* Profile Picture - Centered */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative flex justify-center mb-8"
              >
                <div className="relative w-56 h-56 md:w-64 md:h-64">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500 via-purple-500 to-rose-500 rounded-full blur-2xl opacity-20" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/70 shadow-2xl"
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

              {/* Content - Centered */}
              <div className="space-y-5 text-center">
              {/* Name & Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-pink-200 dark:via-purple-200 dark:to-pink-200">
                  Mehak Saini
                </h1>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-1 w-12 md:w-16 bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-400 dark:to-purple-400 rounded-full" />
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-pink-100 font-medium">
                    UX/UI & Web Designer
                  </p>
                  <div className="h-1 w-12 md:w-16 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full" />
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl mx-auto"
              >
                <p className="text-lg text-gray-600 dark:text-pink-50/90 leading-relaxed">
                  UX/UI Designer crafting user-centered digital experiences.
                  Combining design aesthetics with technical expertise from my Software Development background.
                  Passionate about leveraging AI tools to enhance design workflows and create innovative solutions.
                </p>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-2"
              >
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="px-4 py-2 text-sm text-gray-700 dark:text-pink-100 bg-gray-100 dark:bg-pink-500/20 rounded-full hover:bg-pink-50 dark:hover:bg-pink-500/30 hover:text-pink-600 dark:hover:text-pink-50 transition-colors duration-300"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3 pt-4"
              >
                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="flex items-center gap-2">
                      View Portfolio
                      <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <ResumeDownload />

                <motion.a
                  href="mailto:mehaksaini09@yahoo.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  Get in Touch
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex justify-center gap-4 pt-2"
              >
                <a
                  href="https://www.linkedin.com/in/mehak-s-597349243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-pink-200/60 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:mehaksaini09@yahoo.com"
                  className="text-gray-400 dark:text-pink-200/60 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  <Mail size={22} />
                </a>
              </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Work Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-pink-50 mb-3">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-pink-100/80">Recent projects showcasing design & development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Featured Project 1 */}
            <Link href="/portfolio">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
              >
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="text-pink-400 dark:text-pink-300" size={40} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-pink-50 mb-1">Shopify E-commerce</h3>
                  <p className="text-sm text-gray-600 dark:text-pink-100/70">Custom online store with payment integration</p>
                </div>
              </motion.div>
            </Link>

            {/* Featured Project 2 */}
            <Link href="/portfolio">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="text-blue-400 dark:text-blue-300" size={40} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-pink-50 mb-1">ShopMDM Platform</h3>
                  <p className="text-sm text-gray-600 dark:text-pink-100/70">E-commerce site for mobile device management</p>
                </div>
              </motion.div>
            </Link>

            {/* Featured Project 3 */}
            <Link href="/portfolio">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Palette className="text-purple-400 dark:text-purple-300" size={40} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-pink-50 mb-1">Spotify UI Design</h3>
                  <p className="text-sm text-gray-600 dark:text-pink-100/70">Figma prototype with interactive elements</p>
                </div>
              </motion.div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center"
          >
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
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
            transition={{ duration: 0.5, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 border border-pink-200 dark:border-pink-500/30 cursor-pointer"
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-pink-50 mb-1">6+</div>
              <div className="text-sm text-gray-600 dark:text-pink-100/80">Projects Completed</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-200 dark:border-blue-500/30 cursor-pointer"
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-pink-50 mb-1">3+</div>
              <div className="text-sm text-gray-600 dark:text-pink-100/80">Years Experience</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-500/30 cursor-pointer"
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-pink-50 mb-1">5+</div>
              <div className="text-sm text-gray-600 dark:text-pink-100/80">Design Tools</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-500/30 cursor-pointer"
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-pink-50 mb-1">100%</div>
              <div className="text-sm text-gray-600 dark:text-pink-100/80">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </>
  );
}
