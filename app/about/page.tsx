"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Figma, Laptop, GraduationCap, Award, Sparkles, Zap, Heart, Users, Lightbulb, Target } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const skills = [
  {
    category: "Design Tools",
    icon: Palette,
    items: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 85 },
      { name: "Adobe Photoshop", level: 80 },
      { name: "Canva", level: 90 },
    ],
  },
  {
    category: "UX/UI Skills",
    icon: Sparkles,
    items: [
      { name: "User Research", level: 90 },
      { name: "Wireframing", level: 95 },
      { name: "Prototyping", level: 95 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    category: "Web Platforms",
    icon: Code2,
    items: [
      { name: "WordPress", level: 90 },
      { name: "Shopify", level: 85 },
      { name: "Squarespace", level: 80 },
      { name: "Elementor Pro", level: 85 },
    ],
  },
];

const achievements = [
  {
    icon: GraduationCap,
    title: "Software Development Degree",
    description: "Green River College (2021-2025) - Front-end, Full Stack, Cloud Deployment",
  },
  {
    icon: Award,
    title: "IT Help Desk Lead",
    description: "Led team of 20-25 students, streamlined processes and enhanced service delivery",
  },
  {
    icon: Laptop,
    title: "Web Developer Intern - ShopMDM",
    description: "Built responsive e-commerce site with WordPress, WooCommerce integration for mobile device management",
  },
  {
    icon: Code2,
    title: "E-commerce Specialist",
    description: "Built multiple online stores using Shopify, WordPress, and WooCommerce platforms",
  },
  {
    icon: Sparkles,
    title: "Self-Taught Designer",
    description: "Mastered Figma, Adobe XD, and modern design principles through online courses and practice",
  },
  {
    icon: Zap,
    title: "Fast Learner & Problem Solver",
    description: "Quickly adapts to new technologies and frameworks, from Squarespace to Elementor Pro",
  },
];

const softSkills = [
  {
    icon: Heart,
    title: "Passionate Learner",
    description: "Always eager to learn new design trends, tools, and technologies",
  },
  {
    icon: Sparkles,
    title: "AI Enthusiast",
    description: "Excited about AI tools like Claude, ChatGPT, and Canva AI to enhance design workflow",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Strong collaboration skills developed through leading IT teams and working with clients",
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solver",
    description: "Approaches challenges with innovative solutions and user-centered thinking",
  },
  {
    icon: Target,
    title: "Detail-Oriented",
    description: "Meticulous attention to design details and user experience optimization",
  },
];

const journey = [
  {
    year: "Present",
    title: "MLE Para Educator - Kent Elementary",
    description: "Supporting multilingual learners in elementary education, fostering inclusive learning environments and student success",
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "Oct 2025",
    title: "Freelance Shopify Developer",
    description: "Built custom Shopify e-commerce store with product catalog, payment integration, and inventory management for online retail client",
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "Mar-Jul 2025",
    title: "Web Developer Intern - ShopMDM",
    description: "Developed responsive e-commerce website (shopmdm.com) using WordPress and Elementor Pro, integrated WooCommerce for mobile device management sales",
    color: "from-cyan-500 to-blue-500",
  },
  {
    year: "May-Jun 2024",
    title: "Freelance Web Developer",
    description: "Built custom Squarespace website for childcare school, designed logo and brand kit using Canva AI",
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2024",
    title: "Full Stack Projects",
    description: "Developed Meta Direct (music/books/movies integration) and replicated Spotify UI in Figma",
    color: "from-yellow-500 to-orange-500",
  },
  {
    year: "Jan 2022-Jun 2025",
    title: "IT Student Help Desk Lead - Green River College",
    description: "Led team of 20-25 students ensuring smooth operations and high-quality customer service. Developed documentation, conducted training sessions, and streamlined onboarding processes. Utilized ticketing systems to track and resolve complex IT issues",
    color: "from-blue-500 to-indigo-500",
  },
  {
    year: "2021-2025",
    title: "Green River College",
    description: "Software Development degree with focus on web development, full stack, and cloud deployment",
    color: "from-green-500 to-emerald-500",
  },
];

export default function AboutPage() {
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
            className="mb-16 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 dark:text-pink-50 mb-6">
              About
            </h1>
            <div className="space-y-4 text-lg text-gray-600 dark:text-pink-100/80 leading-relaxed">
              <p>
                I&apos;m a <span className="text-gray-900 dark:text-pink-50 font-semibold">UX/UI Designer and Software Developer</span> based in Seattle, passionate about building user-friendly websites, prototypes, and full-stack applications.
              </p>
              <p>
                With experience in front-end technologies, cloud deployment, and team leadership, I combine technical expertise with design aesthetics to create exceptional digital experiences. I&apos;m excited about AI tools like Claude, ChatGPT, and Canva AI, using them to streamline my design process and unlock creative possibilities.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-pink-50 mb-8">Experience & Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-xl border border-gray-200 dark:border-pink-500/20 hover:border-gray-300 dark:hover:border-pink-500/30 transition-colors bg-white dark:bg-gray-800/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50">
                      <achievement.icon className="text-gray-700 dark:text-pink-300" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-pink-50 mb-1">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-pink-100/80 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-pink-50 mb-8">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillSet, idx) => (
                <div key={skillSet.category}>
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <skillSet.icon className="text-gray-700 dark:text-pink-300" size={18} />
                    <h3 className="font-semibold text-gray-900 dark:text-pink-50">{skillSet.category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {skillSet.items.map((skill) => (
                      <div key={skill.name} className="text-sm text-gray-600 dark:text-pink-100/80">
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-pink-50 mb-8">What Makes Me Different</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-pink-500/20 hover:border-pink-200 dark:hover:border-pink-500/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30">
                      <skill.icon className="text-pink-600 dark:text-pink-300" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-pink-50 mb-2">{skill.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-pink-100/80 leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-pink-50 mb-8">Journey</h2>

            <div className="space-y-8">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-gray-200 dark:border-pink-500/20"
                >
                  <div className="absolute left-0 top-1 w-3 h-3 -ml-[7px] rounded-full bg-gray-900 dark:bg-pink-400" />
                  <div className="mb-1 text-sm font-medium text-gray-500 dark:text-pink-200/70">{item.year}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-pink-50 mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-pink-100/80 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-lg text-gray-600 dark:text-pink-100/80 mb-6">
              Interested in collaborating? Let&apos;s talk.
            </p>
            <motion.a
              href="mailto:mehaksaini09@yahoo.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 bg-gray-900 dark:bg-pink-600 text-white dark:text-pink-50 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-pink-700 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
