

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import {useRef,useEffect} from 'react';
import { gsap } from 'gsap';

export default function UpcomingEvent() {


    return (
        <div className='overflow-x-hidden bg-black lg:space-y-20'>
            <div className='bg-black min-h-fit w-full lg:flex justify-between px-4 py-5 space-y-6 lg:space-y-0 lg:gap-6 lg:px-6'>
                <div   className='flex flex-col w-full lg:w-[42%]'>
                    <div className='bg-white lg:h-[581.475px] h-[50vh] w-full mx-auto relative'>
                        <Link href="/team">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Upcoming Event"
                            fill
                            className='object-cover'
                        />
                        </Link>
                    </div>
                    <div className='text-xs font-bold pt-2 text-slate-100 font-[Neue] flex justify-between w-full mx-auto'>
                        <h1>
                            {/* <ScrollReveal as="span" > */}
                               
                            001 / M_013
                            {/* </ScrollReveal> */}
                        </h1>

                        <h1>
                            {/* <ScrollReveal as="span"> */}
                            TEAM
                            {/* </ScrollReveal> */}
                            
                        </h1>
                    </div>
                </div>
                <div  className='flex flex-col w-full lg:w-[55%]'>
                    <div className='bg-white h-[60vh] lg:h-[900px] w-full mx-auto relative'>
                        <Link href="/card-stack/imagess">
                        <Image
                            src="https://images.pexels.com/photos/2337838/pexels-photo-2337838.jpeg"
                            alt="Upcoming Event"
                            fill
                            className='object-cover'
                        />
                        </Link>
                    </div>
                    <div className='text-xs font-bold pt-2 text-slate-100 font-[Neue] flex justify-between w-full mx-auto'>
                        <h1>
                            {/* <ScrollReveal as="span"> */}
                            002 / M_001
                            {/* </ScrollReveal> */}
                        </h1>

                        <h1>
                            {/* <ScrollReveal as="span"> */}
                            MEMBERS
                            {/* </ScrollReveal> */}
                        </h1>
                    </div>
                </div>
            </div>

            {/* another two divs */}
            <div  className='bg-black min-h-fit w-full lg:flex justify-between px-4 py-5 space-y-6 lg:space-y-0 lg:gap-6 lg:px-6'>
                <div className='flex flex-col w-full lg:w-[70%]'>
                    <div className='bg-white lg:h-[599.438px] h-[32vh] w-full mx-auto relative'>
                        <Link href="/card-stack/teacher">
                        <Image
                            src="https://images.pexels.com/photos/9393611/pexels-photo-9393611.jpeg"
                            alt="Upcoming Event"
                            fill
                            className='object-cover'
                        />
                        </Link>
                    </div>
                    <div className='text-xs font-bold pt-2 text-slate-100 font-[Neue] flex justify-between w-full mx-auto'>
                        <h1>
                            {/* <ScrollReveal as="span"> */}
                            001 / M_013
                            {/* </ScrollReveal> */}
                        </h1>

                        <h1>
                            {/* <ScrollReveal as="span"> */}
                            TEACHER
                            {/* </ScrollReveal> */}
                        </h1>
                    </div>
                </div>
                <div  className='flex flex-col w-full lg:w-[28%]'>
                    <div className='bg-white h-[60vh] lg:h-[377.038px] w-full mx-auto relative'>
                        <Link href="/card-stack/students">
                            
                        <Image
                            src="https://images.pexels.com/photos/8879768/pexels-photo-8879768.jpeg"
                            alt="Upcoming Event"
                            fill
                            className='object-cover'
                        />
                    
                        </Link>
                    </div>
                    <div className='text-xs font-bold pt-2 text-slate-100 font-[Neue] flex justify-between w-full mx-auto'>
                        <h1>
                            {/* <ScrollReveal as="span"> */}
                            002 / M_001
                            {/* </ScrollReveal> */}
                        </h1>

                        <h1>
                            {/* <ScrollReveal as="span"> */}
                            STUDENTS
                            {/* </ScrollReveal> */}
                        </h1>
                    </div>
                </div>


            </div>
        </div>
    )
}