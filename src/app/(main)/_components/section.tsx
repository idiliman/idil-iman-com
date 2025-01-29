"use client";

import { Badge } from "@/components/ui/badge";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const fadeIn = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function Section({ title, description, children, className }: SectionProps) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={cn("w-full py-12", className)}
    >
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
        {title && (
          <motion.div variants={fadeIn}>
            <Badge className="mb-4 text-zinc-400 bg-zinc-100 hover:bg-zinc-200">{title}</Badge>
          </motion.div>
        )}
        {description && (
          <motion.p
            variants={fadeIn}
            className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-[700px]"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          variants={fadeIn}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
