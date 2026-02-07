"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "../components/Home";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [count, setCount] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const contentRef = useRef(null);

  const preloaderImages = [
    "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=1000&auto=format&fit=crop",
  ];

  // Rotate images rapidly in preloader
  useEffect(() => {
    if (showPreloader) {
      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % preloaderImages.length);
      }, 150);
      return () => clearInterval(imageInterval);
    }
  }, [showPreloader]);

  // Initialize Lenis for smooth scrolling only after preloader
  useEffect(() => {
    if (!showPreloader) {
      window.history.scrollRestoration = "manual";
      const lenis = new Lenis();

      // Sync ScrollTrigger with Lenis
      lenis.on('scroll', ScrollTrigger.update);
      
      // Use GSAP ticker for smooth animation loop with stable reference
      const update = (time) => {
        lenis.raf(time * 1000);
      };
      
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      // Robustly set initial scroll position to the middle copy
      const jumpToMiddle = () => {
        const height = contentRef.current?.offsetHeight || 0;
        if (height > 0) {
           window.scrollTo(0, height);
           lenis.scrollTo(height, { immediate: true });
           ScrollTrigger.refresh(); // Ensure triggers update after jump
        }
      };

      // Attempt jump immediately and after a short delay to ensure layout is ready
      jumpToMiddle();
      const timer = setTimeout(() => {
          jumpToMiddle();
      }, 50);

      lenis.on('scroll', ({ scroll }) => {
        const height = contentRef.current?.offsetHeight || 0;
        if (height > 0) {
          if (scroll < 10) { 
             // Scroll Up Loop: Near top of first copy -> Jump to top of second copy
             if (scroll <= 0) {
                lenis.scrollTo(height + scroll, { immediate: true });
             }
          } else if (scroll >= 2 * height) {
            // Scroll Down Loop: Jump to start of second copy (end of first)
            lenis.scrollTo(scroll - height, { immediate: true });
          }
        }
      });
      
      return () => {
        clearTimeout(timer);
        gsap.ticker.remove(update); 
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
            className="fixed h-[100dvh] w-full bg-[#eceae5] top-0 left-0 text-[#0e0e0e] z-[60] flex flex-col items-center justify-center font-[Neue]"
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
                  className="h-[20vh] relative overflow-hidden"
                >
                    <Image 
                        src={preloaderImages[currentImageIndex]}
                        alt="Preloader Image"
                        fill
                        className="object-cover transition-opacity duration-100"
                        priority
                    />
                </motion.div>
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
      {!showPreloader && (
        <>
          <div ref={contentRef}>
            <Home />
          </div>
          <Home />
          <Home />
        </>
      )}
    </main>
  );
}