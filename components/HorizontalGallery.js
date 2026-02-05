"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const items = [
  {
    id: 2,
    name: "Bazzigar",
    date: "2025",
    img: "/bazzigar1.jpeg",
  },
  {
    id: 3,
    name: "Bazzigar",
    date: "2023",
    img: "/bazzigar3.jpeg",
  },
  {
    id: 4,
    name: "Reflux",
    date: "2024",
    img: "/bazzigar2.jpeg",
  },
  {
    id: 5,
    name: "unleased",
    date: "2022",
    img: "/unleased2.jpeg",
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
    <div className="w-full  bg-black text-[#eceae5] font-[Neue] overflow-hidden relative flex flex-col ">
      
      <div className="flex justify-between items-start w-full z-20 relative">
        <div className='xl:px-7 lg:px-7 px-5 xl:py-6 lg:py-6 py-2  '>
           <h1 className="font-[Neue] absolute font-semibold lg:text-7xl xl:text-7xl text-lg tracking-none lg:tracking-none xl:tracking-none">
             Our <br/><span className="">
              Gallery
              </span>
           </h1>
           
        </div>
      
      </div>

      {/* <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[2vw] font-light opacity-20 pointer-events-none z-0">
        +
      </div> */}

      <div className="flex-1 w-full flex items-end justify-center xl:gap-[48vw] lg:gap-[46vw] gap-[18vw] relative z-10 xl:pb-15 lg:pb-15 pb-8">
        
        {/* Left Image Container */}
        <div className="relative group xl:w-[18vw] lg:w-[19vw] xl:h-[50vh] lg:h-[38vh] w-[27vw] h-[16vh] aspect-[3/4] ">
           
           <div className="absolute inset-0 z-30 md:hidden" onClick={handlePrev}></div>
           
           <div className="hidden md:block absolute -top-[1.5vw] left-0 text-[0.8vw] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               ( Prev )
           </div>

           <AnimatePresence mode="popLayout" custom={direction} initial={false}>
             <motion.div
               key={activeItem.id}
               layoutId={`card-${activeItem.id}`}
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
             </motion.div>
           </AnimatePresence>
           <motion.div 
              className="absolute -bottom-6 mt-2 w-full flex justify-between  text-xs md:text-[0.9vw] text-[#eceae5] font-bold "
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
           >
               <span className="">{activeItem.name}</span>
               <div className="leading-tight">
                 <div className=" ">{activeItem.date}</div>
               </div>
           </motion.div>
           
        </div>


        {/* Right Image Container (Square aspect ratio) */}
        <div className="relative group xl:w-[31vw] lg:w-[31vw] w-[45vw] xl:h-[81vh] lg:h-[71vh] h-[27vh] aspect-[1/1] shrink-0">
           
           <div className="absolute inset-0 z-30 md:hidden" onClick={handleNext}></div>
           
           <div className="hidden md:block absolute -top-[1.5vw] right-0 text-[0.8vw] font-bold pointer-events-none">
               05_Images
           </div>

           <AnimatePresence mode="popLayout" custom={direction} initial={false}>
             <motion.div
               key={nextItem.id}
               layoutId={`card-${nextItem.id}`}
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
             </motion.div>
           </AnimatePresence>

           <motion.div 
              className="absolute xl:-bottom-8 lg:-bottom-8 -bottom-6 mt-2 w-full flex justify-between text-xs md:text-[1.1vw] text-[#eceae5] font-bold"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
           >
                <span className="">{nextItem.name}</span>
               <div className=" leading-snug">
                 <div className="tracking-snug">{nextItem.date}</div>
               </div>
           </motion.div>
        </div>

      </div>
    </div>
  );
}
