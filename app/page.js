"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "../components/Home";

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [count, setCount] = useState(0);

  // Initialize Lenis for smooth scrolling only after preloader
  useEffect(() => {
    if (!showPreloader) {
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      return () => {
        lenis.destroy();
      };
    }
  }, [showPreloader]);

  // Handle preloader counter
  useEffect(() => {
    if (showPreloader) {
      setCount(0); // Reset count when preloader shows
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < 100) return prev + 1;
          return 100;
        });
      }, 16); // ~60fps
      return () => clearInterval(interval);
    }
  }, [showPreloader]);

  // Hide preloader when count reaches 100
  useEffect(() => {
    if (count === 100) {
      setTimeout(() => setShowPreloader(false), 500);
    }
  }, [count]);

  // Disable scrolling when preloader is visible
  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [showPreloader]);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            className="fixed h-[100dvh] w-full bg-[#eceae5] top-0 left-0 text-[#0e0e0e] z-40 flex flex-col items-center justify-center font-[Neue]"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="mb-8 font-[Socilo]"
            >
              <div className="flex items-center gap-2">
                <h1 className="text-5xl">U</h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "15vh" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  exit={{ width: 0 }}
                  className="h-[15vh] bg-[#0e0e0e]"
                ></motion.div>
                <h1 className="text-5xl">X</h1>
              </div>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.2 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="bottom-2 absolute w-full"
            >
              <div className="flex items-center justify-between w-full px-5 font-bold">
                <div className="text-xs">( Loading )</div>
                <div className="text-xs">{count}%</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Render Home content only when preloader is hidden */}
      {!showPreloader && <Home />}
    </main>
  );
}