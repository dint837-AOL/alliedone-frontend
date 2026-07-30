"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * A reusable wrapper component that animates its children fading in 
 * and sliding up when they scroll into the viewport.
 * Uses Framer Motion for scroll-based animations.
 * 
 * @param {FadeInSectionProps} props - Component props containing children, className, and optional delay.
 * @returns {JSX.Element} The animated motion.div wrapper.
 */
export default function FadeInSection({ children, className = "", delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
