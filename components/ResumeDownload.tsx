"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function ResumeDownload() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'Mehak_Saini_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <FileText size={20} className="group-hover:rotate-6 transition-transform" />
      <span>Download Resume</span>
      <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
    </motion.button>
  );
}
