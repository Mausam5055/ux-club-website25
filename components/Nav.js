"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

// Ported Original Nav for Mobile
function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { y: "-100%" },
    visible: {
      y: 0,
      transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] },
    },
    exit: {
      y: "-100%",
      transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
    },
  };

  const bigTextAnimation = (delay) => ({
    initial: { y: 50 },
    animate: { y: 0, transition: { delay, ease: [0.77, 0, 0.175, 1], duration: 1.5 } },
  });

  const smallTextAnimation = (delay) => ({
    initial: { y: 25 },
    animate: { y: 0, transition: { delay, ease: [0.77, 0, 0.175, 1], duration: 1.5 } },
  });

  const underlineAnimation = (delay) => ({
    initial: { width: 0 },
    animate: { width: "100%", transition: { delay, duration: 1, ease: "easeInOut" } },
  });

  return (
    <>
      <div className="text-xs flex items-center justify-between font-medium fixed w-full px-4 pt-4 pb-2 z-50 bg-transparent text-[#eceae5] mix-blend-difference">
         {/* Added mix-blend-difference and padding adjustments for visibility on mobile if needed, 
             but sticking to original structure mostly. Original had explicit colors based on menu state.
         */}
        <div className="flex items-center gap-10">
          <h1
            className={`uppercase ${
              isMenuOpen ? "text-[#0e0e0e]" : "text-[#eceae5]"
            } transition-colors duration-300`}
          >
            Design
          </h1>
          {isMenuOpen ? (
            <div className="text-[#0e0e0e]">Bhopal, India</div>
          ) : (
            <div>00%</div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <div className="text-[#0e0e0e] transition-colors duration-300 underline">
                Close
              </div>
            ) : (
              <div className="text-[#eceae5] transition-colors duration-300">
                Menu
              </div>
            )}
          </button>
          <div
            className={`h-2 w-2 rounded-full ${
              isMenuOpen ? "bg-[#0e0e0e]" : "bg-[#eceae5]"
            } transition-colors duration-300`}
          ></div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-[100dvh] bg-[#eceae5] z-40 text-[#0e0e0e] text-xs flex flex-col"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="w-full pt-20 flex-1">
              <div className="w-full px-4">
                <div className="w-full">
                  <div className="overflow-hidden">
                    <motion.h2
                      {...smallTextAnimation(1)}
                      className="pb-2 text-zinc-500 font-medium"
                    >
                      (Navigation)
                    </motion.h2>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.05)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden">
                      <motion.div {...bigTextAnimation(1.1)}>
                        <Link
                          href="/"
                          className={`text-4xl ${
                            pathname === "/" ? "text-[#0e0e0e]" : "text-zinc-500"
                          }`}
                        >
                          Home
                        </Link>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        {...bigTextAnimation(1.2)}
                        className={`text-4xl ${
                          pathname === "/" ? "text-[#0e0e0e]" : "text-zinc-500"
                        }`}
                      >
                        01
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.25)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden">
                      <motion.div {...bigTextAnimation(1.3)}>
                        <Link
                          href="/events"
                          className={`text-4xl ${
                            pathname === "/events"
                              ? "text-[#0e0e0e]"
                              : "text-zinc-500"
                          }`}
                        >
                          Events
                        </Link>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        {...bigTextAnimation(1.4)}
                        className={`text-4xl ${
                          pathname === "/events"
                            ? "text-[#0e0e0e]"
                            : "text-zinc-500"
                        }`}
                      >
                        02
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.45)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden">
                      <motion.div {...bigTextAnimation(1.5)}>
                        <Link
                          href="/members"
                          className={`text-4xl ${
                            pathname === "/members"
                              ? "text-[#0e0e0e]"
                              : "text-zinc-500"
                          }`}
                        >
                          Members
                        </Link>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        {...bigTextAnimation(1.6)}
                        className={`text-4xl ${
                          pathname === "/members"
                            ? "text-[#0e0e0e]"
                            : "text-zinc-500"
                        }`}
                      >
                        03
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.65)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 pb-4">
              <div className="overflow-hidden">
                <motion.div {...smallTextAnimation(1.7)}>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    Instagram
                    <GoArrowUpRight />
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <div className="overflow-hidden">
                  <motion.div
                    {...smallTextAnimation(1.8)}
                    className="flex flex-col leading-none"
                  >
                    <h1>Collectible Furniture</h1>
                    <h1>and Objects</h1>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    {...smallTextAnimation(1.8)}
                    className="flex flex-col leading-none"
                  >
                    <h1>Designed by</h1>
                    <h1>UX Club, VIT Bhopal</h1>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DesktopNav({ isMenuOpen, setIsMenuOpen }) {
  const [time, setTime] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Clock
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Scroll Progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll).toFixed(2) * 100); // 0-100
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const panelVariants = {
    closed: { 
      height: 0, 
      opacity: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    open: {
      height: "60vh",
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div className="fixed top-0 left-0 w-full z-50 font-[Neue]">
      {/* Expandable Beige Panel (Now on Top) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full bg-[#eceae5] text-[#0e0e0e] overflow-hidden relative border-b border-[#0e0e0e]/10"
          >
            {/* Close Button Inside Panel */}
             <div className="absolute top-6 right-8 z-10">
                <button 
                    onClick={toggleMenu}
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity uppercase text-sm font-medium"
                >
                    <span className="text-xl font-light">+</span> (Close)
                </button>
            </div>

            <div className="w-full h-full flex p-12 pt-16">
                {/* Column 1: About */}
                <div className="w-1/3 pr-12 flex flex-col justify-between">
                    <div>
                        <div className="text-xs text-zinc-500 mb-4 uppercase">(About_UX_Club)</div>
                        <p className="text-xl leading-relaxed text-zinc-800 font-medium max-w-md">
                            UX Club is a design community focused on creating exceptional user experiences. We explore the intersection of design, technology, and human interaction through workshops, projects, and collaboration.
                        </p>
                    </div>
                    
                     {/* Footer Links (Left) */}
                     <div className="flex justify-between text-xs font-semibold uppercase tracking-wide mt-auto">
                        <div className="flex flex-col gap-1">
                            <span>User Experience</span>
                            <span>and Design</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span>Designed by</span>
                            <span>UX Club, VIT Bhopal</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Finishes */}
                <div className="w-1/3 flex flex-col justify-between border-l border-[#0e0e0e]/10 pl-12">
                   <div>
                        <div className="text-xs text-zinc-500 mb-4 uppercase">Departments</div>
                        <ul className="text-sm font-semibold space-y-2">
                            <li className="cursor-pointer hover:underline">Design</li>
                            <li className="cursor-pointer hover:underline">Technical</li>
                            <li className="cursor-pointer hover:underline">Content</li>
                            <li className="cursor-pointer hover:underline">Events</li>
                        </ul>
                   </div>

                    {/* Footer Links (Center) */}
                    <div className="flex justify-between text-xs font-semibold uppercase tracking-wide mt-auto">
                         <div className="flex flex-col gap-1">
                            <span>Contact</span>
                            <a href="mailto:uxclub@vitbhopal.ac.in" className="hover:underline">uxclub@vitbhopal.ac.in</a>
                        </div>
                         <div className="flex flex-col gap-1">
                            <a href="#" className="flex items-center gap-1 hover:underline">
                                Instagram <GoArrowUpRight/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Column 3: Image */}
                <div className="w-1/3 relative h-full pl-12">
                    <div className="relative w-full h-full bg-zinc-200">
                         {/* Placeholder or Generated Image */}
                         <Image 
                            src="/nav_chair.png" 
                            alt="UX Club" 
                            fill 
                            className="object-cover"
                         />
                    </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Black Top Bar (Now Below Panel) */}
      <div className="w-full bg-transparent mix-blend-difference text-[#eceae5] h-[60px] px-8 flex items-center justify-between xl:text-sm lg:text-xs uppercase tracking-wide z-50 relative">
        {/* Left: Logo */}
        <div className="font-bold xl:text-lg lg:text-sm tracking-tighter w-1/7">UX CLUB</div>

        {/* Center-Left: Info */}
        <div className="flex items-center gap-12 w-1/4">
            <span className="opacity-50  xl:text-base lg:text-[14px]">{time}</span>
            <span className="font-semibold">BHOPAL , IN</span>
        </div>

        {/* Center: Scroll */}
        <div className="w-1/4 text-center">
            <span className="font-[Neue] text-[#ECEAE5] font-semibold lg:text-xs xl:text-[15px]">
                {Math.round(scrollProgress).toString().padStart(2, '0')}%
            </span>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex items-center justify-end gap-10 w-1/2">
          <div className="flex gap-6 xl:text-[14px] lg:text-[11px] font-semibold text-[#ECEAE5]">
            <Link href="/" className="hover:text-white transition-colors"><span className=' xl:text-[14px] lg:text-[12px] text-[#838383]'>1.</span> Home</Link>
            <Link href="/team" className="hover:text-white  transition-colors"><span className=' xl:text-[14px] lg:text-[12px] text-[#838383]'>2.</span> Index</Link>
            <button 
                onClick={toggleMenu} 
                className={`hover:text-white transition-colors ${isMenuOpen ? "text-[#ECEAE5]" : ""}`}
            >
                <span className=' xl:text-[14px] lg:text-[12px] text-[#838383]'>3.</span> INFORMATION
            </button>
          </div>
          {/* Status Dot */}
          <div className={`w-2.5 h-2.5 rounded-full ${isMenuOpen ? "bg-white" : "bg-[#eceae5]"}`}></div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Nav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <DesktopNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </>
  );
}
