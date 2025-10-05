"use client";

import { motion } from "framer-motion";
import ClassyProjectCard from "@/components/ClassyProjectCard";
import AnimatedBackground from "@/components/AnimatedBackground";

const projects = [
  {
    title: "ShopMDM - E-commerce Platform",
    description: [
      "Developed and launched a full-featured e-commerce platform for mobile device management.",
      "Implemented secure payment processing, inventory management, and user authentication.",
      "Designed responsive UI/UX to ensure seamless shopping experience across all devices.",
    ],
    image: "/shopmdm.png",
    link: "https://shopmdm.com",
    isInteractive: true,
  },
  {
    title: "Spotify Pages Replication (Figma)",
    description: [
      "Recreated Spotify interface in Figma to showcase visual design and UX alignment.",
      "Designed interactive prototypes with smooth transitions and realistic user flows.",
      "Applied Figma's advanced features to simulate real product behavior and enhance presentation.",
    ],
    image: "/spotifly.png",
    link: "https://www.figma.com/proto/7uXEUlzlbU9EDs7VVwMCCm/Untitled?type=design&node-id=119-121&t=mzOiYZhbX5ABziIb-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=106%3A332&embed-host=share",
    isInteractive: true,
  },
  {
    title: "Capstone Website Design & Build",
    description: [
      "Co-designed website layout in Figma, aligning with client feedback and brand identity.",
      "Led UX strategy to create an intuitive interface, improving overall usability.",
      "Collaborated with developers to maintain design consistency throughout build and launch.",
    ],
    image: "/geo.png",
    link: "https://www.figma.com/proto/ZKW2v19DyQHU37M3wRitFN/anthropology?node-id=1-2&p=f&t=4YCTL0ghWFwml7qp-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=share",
    isInteractive: true,
  },
  {
    title: "Restaurant Website Design",
    description: [
      "Designed a modern, responsive restaurant website by applying self-taught web design skills.",
      "Focused on clean layout, visual hierarchy, and mobile-first design principles.",
      "Demonstrated initiative and independent learning through tutorial-based skill development.",
    ],
    image: "/green rest.png",
    link: "https://www.figma.com/proto/UsNShVB69RVgFqekcAeIbH/Food-web-app-design?node-id=6-250&starting-point-node-id=1%3A24&embed-host=share",
    isInteractive: true,
  },
  {
    title: "Simple Restaurant Website",
    description: [
      "Built a functional restaurant website based on LinkedIn Learning coursework.",
      "Emphasized clarity, accessibility, and usability in layout and navigation.",
      "Applied modern layout, spacing, and typography principles to enhance readability.",
    ],
    image: "/linkres.png",
    link: "https://www.figma.com/proto/PeeDFporGH5MpeWdlD5pqm/Untitled?t=E7mIh2Utc0diWwEt-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-3&starting-point-node-id=1%3A3&embed-host=share",
    isInteractive: true,
  },
];

export default function Portfolio() {
  return (
    <>
      <AnimatedBackground />

      <div className="relative min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-3">
              Selected Work
            </h1>
            <p className="text-lg text-gray-600">
              {projects.length} projects showcasing design & development
            </p>
          </motion.div>

          {/* Projects Grid - Modern Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ClassyProjectCard key={index} {...project} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-24 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Let's work together
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it.
            </p>
            <motion.a
              href="mailto:mehaksaini09@yahoo.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
