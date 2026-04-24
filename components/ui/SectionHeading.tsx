"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  center = true,
  className,
}: SectionHeadingProps) {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(center ? "text-center" : "text-left", className)}
    >
      {eyebrow && (
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FF8C21] mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={itemVariants}
        className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#F5F0E8]"
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient">{titleHighlight}</span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={cn(
            "mt-5 text-lg text-[#9A8E7F] leading-relaxed",
            center ? "max-w-2xl mx-auto" : "max-w-xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
