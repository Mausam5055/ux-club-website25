"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollReveal = ({ children, className = "", as: Tag = "span", ...props }) => {
  const element = useRef(null);
  
  // Track scroll progress of the element within the viewport
  // "start 0.9" -> Starts when element top hits 90% of viewport (entering from bottom)
  // "start 0.25" -> Ends when element top hits 25% of viewport (fully visible/read)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const text = typeof children === "string" ? children : "";
  // Split by spaces but preserve them in the mapping effectively
  const words = text.split(" ");

  if (!text) return null;

  return (
    <Tag ref={element} className={`inline-block leading-tight ${className}`} {...props}>
      {words.map((word, i) => {
        // Calculate the valid range for this specific word
        // e.g., first word animates from 0.0 to 0.1 of the scroll range
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </Tag>
  );
};

const Word = ({ children, progress, range }) => {
  // Map the scroll progress range [start, end] to opacity [0.2, 1]
  const opacity = useTransform(progress, range, [0.1, 1]);
  
  return (
    <span className="relative mr-[0.3em] inline-block">
      {/* Background 'ghost' word for the dimmed effect */}
      <span className="absolute opacity-[0.2] pointer-events-none">{children}</span>
      
      {/* Foreground word that animates opacity */}
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default ScrollReveal;
