import React from 'react'
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import {useRef,useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function UpcomingEvent() {

     const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "+=200",
          scrub: 1.5,
        },
      }
    );
  }, []);

    return (
        <div className='overflow-x-hidden bg-black lg:space-y-20'>
            <div className='bg-black min-h-fit w-full lg:flex justify-between px-4 py-5 space-y-6 lg:space-y-0 lg:gap-6 lg:px-6'>
                <div  ref={textRef} className='flex flex-col w-full lg:w-[42%]'>
                    <div className='bg-white lg:h-[581.475px] h-[50vh] w-full mx-auto relative'>
                        <Image
                            src="https://images.pexels.com/photos/9189263/pexels-photo-9189263.jpeg"
                            alt="Upcoming Event"
                            fill
                            className='object-cover'
                        />
                    </div>
                    <div className='text-medium font-bold pt-2 text-slate-100 font-[Neue] flex justify-between w-full mx-auto'>
                        <h1>
                            <ScrollReveal as="span" >
                               
                            001 / M_013
                            </ScrollReveal>
                        </h1>

                        <h1>
                            <ScrollReveal as="span">
                            DINING CHAIR
                            </ScrollReveal>
                            
                        </h1>
                    </div>
                </div>
                <div  ref={textRef} className='flex flex-col w-full lg:w-[55%]'>
                    <div className='bg-white h-[60vh] lg:h-[900px] w-full mx-auto relative'>
                        <Image
                            src="https://images.pexels.com/photos/2337838/pexels-photo-2337838.jpeg"
                            alt="Upcoming Event"
                            fill
                            className='object-cover'
                        />
                    </div>
                    <div className='text-medium font-bold pt-2 text-slate-100 font-[Neue] flex justify-between w-full mx-auto'>
                        <h1>
                            <ScrollReveal as="span">
                            002 / M_001
                            </ScrollReveal>
                        </h1>

                        <h1>
                            <ScrollReveal as="span">
                            CHAIR
                            </ScrollReveal>
                        </h1>
                    </div>
                </div>
            </div>

            {/* another two divs */}
            <div  ref={textRef} className='bg-black min-h-fit w-full lg:flex justify-between px-4 py-5 space-y-6 lg:space-y-0 lg:gap-6 lg:px-6'>
                <div className='flex flex-col w-full lg:w-[70%]'>
                    <div className='bg-white lg:h-[599.438px] h-[32vh] w-full mx-auto relative'>
                        <Image
                            src="https://images.pexels.com/photos/9393611/pexels-photo-9393611.jpeg"
                            alt="Upcoming Event"
                            fill
                            className='object-cover'
                        />
                    </div>
                    <div className='text-medium font-bold pt-2 text-slate-100 font-[Neue] flex justify-between w-full mx-auto'>
                        <h1>
                            <ScrollReveal as="span">
                            001 / M_013
                            </ScrollReveal>
                        </h1>

                        <h1>
                            <ScrollReveal as="span">
                            DINING CHAIR
                            </ScrollReveal>
                        </h1>
                    </div>
                </div>
                <div  ref={textRef} className='flex flex-col w-full lg:w-[28%]'>
                    <div className='bg-white h-[60vh] lg:h-[377.038px] w-full mx-auto relative'>
                        <Image
                            ref={textRef}
                            src="https://images.pexels.com/photos/8879768/pexels-photo-8879768.jpeg"
                            alt="Upcoming Event"
                            fill
                            className='object-cover'
                        />
                    </div>
                    <div className='text-medium font-bold pt-2 text-slate-100 font-[Neue] flex justify-between w-full mx-auto'>
                        <h1>
                            <ScrollReveal as="span">
                            002 / M_001
                            </ScrollReveal>
                        </h1>

                        <h1>
                            <ScrollReveal as="span">
                            CHAIR
                            </ScrollReveal>
                        </h1>
                    </div>
                </div>


            </div>
        </div>
    )
}