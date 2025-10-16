"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Laptop, Sparkles, Zap, Heart, Users, Lightbulb, Target, Download } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { title } from "process";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: [
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Node.js", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Design & Collaboration",
    icon: Palette,
    items: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 85 },
      { name: "Canva", level: 90 },
      { name: "Spline", level: 75 },
      { name: "Wireframing", level: 95 },
      { name: "Miro Board", level: 85 },
    ],
  },
  {
    category: "Web Platforms & CMS",
    icon: Laptop,
    items: [
      { name: "WordPress", level: 90 },
      { name: "Shopify", level: 85 },
      { name: "Squarespace", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Cloud & Deployment",
    icon: Sparkles,
    items: [
      { name: "AWS", level: 80 },
      { name: "Google Cloud", level: 75 },
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Terraform", level: 70 },
    ],
  },
  {
    category: "AI Tools & Integration",
    icon: Zap,
    items: [
      { name: "Claude AI", level: 95 },
      { name: "Gemini CLI", level: 85 },
      { name: "AI Content Generation", level: 90 },
      { name: "Claude Code CLI", level: 90 },
    ],
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
    year: "August 2025 - Present",
    title: "MLE Para Educator - Kent Elementary",
    description: "Support 15+ multilingual learners (K–5) by creating inclusive and engaging classroom experiences, improving student participation by 30%. Collaborate with teachers to design and implement individualized learning plans, supporting academic and language growth. Foster a welcoming environment that promotes cultural awareness and confidence in communication.",
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "May 2025 – Present",
    title: "Freelance UX/UI & Web Designer",
    description: "MDM eCommerce Website – Designed a responsive online store with 5,000+ products, improving navigation, accessibility (WCAG), and secure payment workflows. Recovery Merch Project – Built a merchandise site blending storytelling with product design, showcasing the client's recovery journey and strengthening brand identity. Maggie's Café Website – Designed a clean, user-friendly café site with strong branding and a smooth ordering experience, using Figma and Canva.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    year: "January 2022 - June 2025",
    title: "IT Student Help Desk Lead - Green River College",
    description: "Led a team of 20–25 student technicians, maintaining a 95%+ customer satisfaction rate. Resolved 500+ IT support tickets while streamlining processes to improve resolution times by 25%. Created comprehensive training documentation to standardize procedures and support team knowledge. Conducted 10+ training sessions, enhancing team skills and overall service quality.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    year: "September 2021 - July 2025",
    title: "Bachelor's in Software Development - Green River College",
    description: "Coursework: Front-End Web Dev, Web Programming w/JavaScript, Web Dev Frameworks, Full Stack Web Dev, Cloud Application Deployment. Gained expertise in modern web technologies, cloud platforms (AWS, Google Cloud), database management, and UX/UI design principles.",
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
                I&apos;m a <span className="text-gray-900 dark:text-pink-50 font-semibold">UX/UI Designer and Software Developer</span> based in Seattle. I love turning ideas into clean, user-friendly digital experiences. I pick up new tools quickly and enjoy learning through hands-on problem solving. With experience in front-end design, cloud deployment, and full-stack development, I combine creativity and technical skill to build scalable, thoughtful products.
              </p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillSet, idx) => (
                <motion.div
                  key={skillSet.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="p-6 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-pink-500/20 hover:border-gray-300 dark:hover:border-pink-500/30 transition-all"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <skillSet.icon className="text-gray-700 dark:text-pink-300" size={20} />
                    <h3 className="font-semibold text-gray-900 dark:text-pink-50">{skillSet.category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {skillSet.items.map((skill) => (
                      <div key={skill.name} className="text-sm text-gray-600 dark:text-pink-100/80">
                        • {skill.name}
                      </div>
                    ))}
                  </div>
                </motion.div>
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
                  key={item.title}
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
            <motion.a
              href="/resume.pdf"
              download="Mehak_Saini_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-900 dark:border-pink-600 text-gray-900 dark:text-pink-50 rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-pink-600 dark:hover:text-pink-50 transition-all"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
