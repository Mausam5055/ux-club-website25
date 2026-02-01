'use client';
import HorizontalGallery from "./HorizontalGallery";
import { useEffect, useState } from "react";
import { motion} from "framer-motion";

export default function Footer() {
    return (
        <div>
            <HorizontalGallery />
            {/* <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{duration: 0.8, ease: "easeInOut" }}
        className="font-[Socilo] lg:text-[20vw] sm:text-[30vw] md:text-[24vw] text-[40vw] leading-none text-center">
            Ux
        </motion.h1> */}

        <div 
        // initial={{opacity:0,y:40}}
        // whileInView={{opacity:1,y:0}}
        // viewport={{once:false,amount:0.3}}
        // transition={{duration:0.8, ease:"easeInOut"}}
        className="lg:hidden flex justify-between px-3 mt-10 lg:text-lg sm:text-sm md:text-md text-xs font-semibold bg-black ">
            <div className="block">
                <ul >
                    <li className='font-[Neue]'>
                        Contact
                    </li>
                    <li className='font-[Neue]'>
                        info@uxclub.com
                    </li>
                </ul>
                <ul className="mt-4">
                    <li className='font-[Neue]'>
                        Contact
                    </li>
                    <li className='font-[Neue]'>
                        info@uxclub.com
                    </li>
                </ul>
            </div>
            <div className="block text-right mt-1  ">
                <ul className='flex gap-1 justify-end items-center'>
                    <li className='text-lg font-[Neue]' >
                        Instagram
                    </li>
                    <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3 h-3 "
                            >
                                <path d="M13 5H19V11" />
                                <path d="M19 5L5 19" />
                            </svg>

                    
                </ul>
                <ul className="mt-4">
                    <li className='text-sm font-[Neue]'>
                        UXCLUB
                    </li>
                    <li>
                        All Rights Reserved © 2026
                    </li>
                </ul>
            </div>
        </div>
        </div>
        
    )
}