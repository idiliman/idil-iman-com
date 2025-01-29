"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function Projects() {
  const projects = [
    // {
    //   title: "CMS",
    //   description: "Content Management System",
    //   year: "2023",
    //   image: undefined,
    //   link: "/projects/sams",
    // },
    {
      title: "Calories Tracker AI",
      description: "Utilizing OpenAI GPT-4o",
      year: "2024",
      image: undefined,
      link: "/projects/calories-tracker-ai",
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
        />
      ))}
    </motion.div>
  );
}
