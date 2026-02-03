"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ 
  value, 
  suffix = "", 
  duration = 2,
  className = ""
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  // Check if value is numeric
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const isNumeric = !isNaN(numericValue) && numericValue > 0;
  const prefix = value.startsWith("¥") ? "¥" : "";
  
  useEffect(() => {
    if (!isInView || !isNumeric) {
      if (!isNumeric) setDisplayValue(value);
      return;
    }
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * numericValue);
      
      setDisplayValue(prefix + currentValue.toLocaleString());
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value, numericValue, duration, prefix, isNumeric]);
  
  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {displayValue}{suffix}
    </motion.span>
  );
}
