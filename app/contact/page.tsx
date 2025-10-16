"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ContactPage() {
  return (
    <>
      <AnimatedBackground />

      <div className="relative min-h-screen pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 dark:text-pink-50 mb-4">
              Let&apos;s Connect
            </h1>
            <p className="text-lg text-gray-600 dark:text-pink-100/80 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <motion.a
              href="mailto:mehaksaini09@yahoo.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/50 dark:to-purple-950/50 border-2 border-pink-200 dark:border-pink-800 hover:border-pink-300 dark:hover:border-pink-700 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-pink-50 mb-2">
                    Email Me
                  </h3>
                  <p className="text-gray-600 dark:text-pink-100/80 mb-2">
                    Best way to reach me is by Email
                  </p>
                  <p className="text-pink-600 dark:text-pink-400 font-medium group-hover:underline">
                    mehaksaini09@yahoo.com
                  </p>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/mehak-s-597349243/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform">
                  <Linkedin className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-pink-50 mb-2">
                    Connect on LinkedIn
                  </h3>
                  <p className="text-gray-600 dark:text-pink-100/80 mb-2">
                    Let&apos;s connect professionally
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                    View Profile →
                  </p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Additional Info */}
          <div className="flex justify-center">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-pink-500/20 w-full max-w-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <MapPin className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-pink-50 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-pink-100/80">
                    Seattle, Washington
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
