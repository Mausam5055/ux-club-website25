"use client";
import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const items = [
  {
    id: 2,
    model: "M_002",
    name: "Side_Table",
    img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    model: "M_008",
    name: "Console",
    img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    model: "M_004",
    name: "Object",
    img: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    model: "M_019",
    name: "Chair",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000&auto=format&fit=crop",
  },
];

const transition = {
  duration: 0.6,
  ease: [0.32, 0.72, 0, 1],
};

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 1,
  }),
};

export default function HorizontalGallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const uniqueId = useId();

  const activeItem = items[index % items.length];
  const nextItem = items[(index + 1) % items.length];

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    // CHANGED: Reduced height from h-[80vw] to h-[60vw]
    <div className="w-full h-[60vw] bg-black text-[#eceae5] font-[Neue] overflow-hidden relative flex flex-col px-[3vw]">
      
      <div className="flex justify-between items-start w-full z-20 relative shrink-0">
        <div>
           <h1 className="font-[Neue] font-semibold text-[#ECEAE5] text-[6vw] leading-[0.8] tracking-tight">
             Activities <br />
           </h1>
        </div>
        {/* <div className="hidden sm:flex gap-[3vw] text-[0.7vw] font-bold text-gray-500 mt-[1vw]">
            <span>14 22</span>
            <span>New York, NY</span>
            <span>77%</span>
        </div> */}
      </div>

      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[2vw] font-light opacity-20 pointer-events-none z-0">
        +
      </div>

      <div className="flex-1 w-full flex items-end justify-center gap-[15vw] relative z-10 pb-[4vw]">
        
        {/* Left Image Container */}
        <div className="relative group w-[18vw] aspect-[3/4] shrink-0">
           
           <div className="absolute inset-0 z-30 md:hidden" onClick={handlePrev}></div>
           
           <div className="hidden md:block absolute -top-[3vw] left-0 text-[0.8vw] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               ( Prev )
           </div>

           <AnimatePresence mode="popLayout" custom={direction} initial={false}>
             <motion.div
               key={activeItem.id}
               layoutId={`card-${activeItem.id}-${uniqueId}`}
               className="absolute inset-0 bg-[#1a1a1a] cursor-pointer overflow-hidden"
               onClick={handlePrev}
               custom={direction}
               variants={variants}
               initial={direction === -1 ? "enter" : false} 
               animate="center"
               exit={direction === 1 ? "exit" : undefined}
               transition={transition}
             >
                <Image 
                   src={activeItem.img} 
                   alt={activeItem.name} 
                   fill 
                   priority
                   className="object-cover"
                   sizes="20vw"
                />
                
                <motion.div 
                   className="absolute -bottom-[3vw] left-0 w-full flex justify-between text-[0.9vw] text-[#eceae5] font-bold"
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                >
                    <span className="hidden md:inline">00{activeItem.id} / {activeItem.model}</span>
                    <span className="md:hidden">{activeItem.model}</span>
                    <span className="uppercase">{activeItem.name}</span>
                </motion.div>
             </motion.div>
           </AnimatePresence>
        </div>


        {/* Right Image Container (Square aspect ratio) */}
        <div className="relative group w-[36vw] aspect-[1/1] shrink-0">
           
           <div className="absolute inset-0 z-30 md:hidden" onClick={handleNext}></div>
           
           <div className="hidden md:block absolute -top-[3vw] right-0 text-[0.8vw] font-bold pointer-events-none">
               05_Images
           </div>

           <AnimatePresence mode="popLayout" custom={direction} initial={false}>
             <motion.div
               key={nextItem.id}
               layoutId={`card-${nextItem.id}-${uniqueId}`}
               className="absolute inset-0 bg-[#1a1a1a] cursor-pointer overflow-hidden shadow-2xl"
               onClick={handleNext}
               custom={direction}
               variants={variants}
               initial={direction === 1 ? "enter" : false}
               animate="center"
               exit={direction === -1 ? "exit" : undefined}
               transition={transition}
             >
                <Image 
                   src={nextItem.img} 
                   alt={nextItem.name} 
                   fill 
                   priority
                   className="object-cover"
                   sizes="50vw"
                />

                <motion.div 
                   className="absolute -bottom-[3vw] left-0 w-full flex justify-between text-[1.1vw] text-[#eceae5] font-bold"
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                >
                     <span className="hidden md:inline">00{nextItem.id} / {nextItem.model}</span>
                     <span className="md:hidden">{nextItem.model}</span>
                    <span className="uppercase tracking-widest">{nextItem.name}</span>
                </motion.div>
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </div>
  );
}