"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-pink-100/50 bg-white/80 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <span>© 2025 Mehak Saini</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
