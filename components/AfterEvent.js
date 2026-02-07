'use client';
import { useEffect, useRef } from "react";
import ScrollReveal from './ScrollReveal';
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
export default function AfterEvent() {

    //      const textRef = useRef(null);

    //   useEffect(() => {
    //     gsap.fromTo(
    //       textRef.current,
    //       { opacity: 0, y: 30 },
    //       {
    //         opacity: 1,
    //         y: 0,
    //         scrollTrigger: {
    //           trigger: textRef.current,
    //           start: "top 80%",
    //           end: "+=230",
    //           scrub: 1,
    //         },
    //       }
    //     );
    //   }, []);

    return (
        <>
            <div
                className=" bg-black lg:px-5 px-4 lg:pt-25 pt-5 pb-10 ">
                <motion.hr className="h-px  border-white origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                <motion.h1 className=" font-[Neue] lg:text-base font-semibold text-sm text-white mt-3"

                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    (About Our Club)
                </motion.h1>
                <div className='flex justify-between bg-black lg:text-8xl text-white font-sans font-bold tracking-normal mt-5 cursor-pointer'
                // initial={{ opacity: 0, y: 40 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: false, amount: 0.3 }}
                // transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <h1 className='flex justify-center font-[Neue]  lg:text-7xl xl:text-8xl text-xl  items-center gap-x-3'>
                        <ScrollReveal as="span">
                        See Our Past Events
                        </ScrollReveal>
                        <span
                            className="hover:scale-75 transition-ease-in-out duration-300">

                            <svg

                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 lg:w-12 lg:h-12"
                            >
                                <path d="M13 5H19V11" />
                                <path d="M19 5L5 19" />
                            </svg>

                        </span>

                    </h1>
                    <h1 className="lg:text-7xl xl:text-8xl">
                        <ScrollReveal as="span">
                            0_19
                        </ScrollReveal>
                    </h1>
                </div>
                <div
                    className="bg-black mt-6 lg:pt-10 pt-5 text-white"
                // initial={{ opacity: 0, y: 40 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: false, amount: 0.3 }}
                // transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* bigger screen ke liye */}
                    <div className="hidden lg:block">
                        <h1 className="lg:flex gap-x-20 tracking-wide font-semibold font-[Neue] lg:justify-start lg:items-center">
                            <span className='text-base pb-1'>
                                <ScrollReveal as="span">
                                    (About uxclub)
                                </ScrollReveal></span>

                            <span className="lg:text-3xl xl:text-4xl  text-sm leading-snug font-bold font-[Neue] tracking-normal ">
                                <ScrollReveal as="span" stagger={0.02} delay={0.1} >
                                   Student-driven community for UX and design thinking.
                                </ScrollReveal>
                            </span>
                        </h1>

                        <h1 className="flex gap-x-20 font-semibold font-[Neue]">
                            <span className="lg:text-3xl xl:text-4xl  text-sm font-bold font-[Neue] tracking-normal text-left leading-snug">
                                <ScrollReveal as="span" stagger={0.05} delay={0.2} >
                                    UXClub focuses on building UX/UI design, product thinking, and digital creativity skills, bringing together designers, developers, and innovators through workshops, design sprints, hackathons, and speaker sessions to promote collaboration, innovation, and real-world problem solving on campus.
                                </ScrollReveal>
                            </span>
                        </h1>
                    </div>


                    {/* Mobile layout ke liye */}
                    <div className='lg:hidden'>
                        {/* //  initial={{ opacity: 0, y: 40 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: false, amount: 0.3 }}
                    // transition={{ duration: 0.8, ease: "easeInOut" }} */}

                        <p className='tracking-normal font-[Neue] text-sm mb-2 md:text-lg'>
                            (About_uxclub)
                        </p>
                        <p className="text-[14px] md:text-2xl text-justify leading-none font-[Neue] tracking-normal mt-4 font-semibold">
                            <ScrollReveal as="span">
                            UXClub focuses on building UX/UI design, product thinking, and digital creativity skills, bringing together designers, developers, and innovators through workshops, design sprints, hackathons, and speaker sessions to promote collaboration, innovation, and real-world problem solving on campus.
                            </ScrollReveal>
                        </p>
                    </div>
                </div>
                <motion.div className="bg-black flex justify-between mt-6 lg:pt-10 pt-5 text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className='hidden  lg:relative xl:relative tracking-tight leading-tight lg:block space-y-5 font-[Neue] w-full font-bold  lg:w-[60%] xl:w-[60%] '>
                        <h1 className=" lg:absolute xl:leading-tight xl:tracking-tight xl:absolute lg:left-[20rem] xl:text-xs xl:left-[28rem] text-xs ">
                            <ScrollReveal as="span">
                                Founded at VIT Bhopal University, UXClub builds a creative design community, uniting designers and developers through UX/UI learning, collaborative projects, workshops, and events, guided by strong design thinking principles.
                            </ScrollReveal>
                        </h1>
                        <h1 className=" lg:absolute xl:absolute xl:leading-tight xl:tracking-tight xl:left-[28rem] xl:top-[4rem] lg:left-[20rem] lg:top-[5rem] text-xs xl:text-xs ">
                            <ScrollReveal as="span">
                                UXClub creates experiences that are practical, creative, educational, and culturally meaningful designs.
                            </ScrollReveal>
                        </h1>
                    </div>

                    <div className='hidden  lg:block lg:w-[27%]'>
                        <ul className=' font-[Neue] font-semibold text-sm tracking-wider'>
                            <li className='mb-5'>
                                Site links:
                            </li>
                            <li >
                                <motion.div className="border-t border-b py-3 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-white origin-left"
                                        variants={{
                                            initial: { scaleX: 0 },
                                            hover: { scaleX: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    />
                                    <motion.button className="z-10"
                                        variants={{
                                            initial: { color: "#ffffff", marginLeft: "0px" },
                                            hover: { color: "#000000", marginLeft: "15px" },
                                        }}
                                        transition={{ duration: 0.25 }}>
                                        Recruitment
                                    </motion.button>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 lg:w-5 lg:h-5 z-10"
                                        variants={{
                                            initial: { color: "#ffffff", marginRight: "0px" },
                                            hover: { color: "#000000", marginRight: "15px" },
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <path d="M13 5H19V11" />
                                        <path d="M19 5L5 19" />
                                    </motion.svg>
                                </motion.div>


                            </li>
                            <li>
                                <motion.div className="border-t border-b py-3 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-white origin-left"
                                        variants={{
                                            initial: { scaleX: 0 },
                                            hover: { scaleX: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    />
                                    <motion.button className="z-10"
                                        variants={{
                                            initial: { color: "#ffffff", marginLeft: "0px" },
                                            hover: { color: "#000000", marginLeft: "15px" },
                                        }}
                                        transition={{ duration: 0.25 }}>
                                        Contact us
                                    </motion.button>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 lg:w-5 lg:h-5 z-10"
                                        variants={{
                                            initial: { color: "#ffffff", marginRight: "0px" },
                                            hover: { color: "#000000", marginRight: "15px" },
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <path d="M13 5H19V11" />
                                        <path d="M19 5L5 19" />
                                    </motion.svg>
                                </motion.div>

                            </li>
                            <li>
                                <motion.div className="border-t border-b py-3 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-white origin-left"
                                        variants={{
                                            initial: { scaleX: 0 },
                                            hover: { scaleX: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    />
                                    <motion.button className="z-10"
                                        variants={{
                                            initial: { color: "#ffffff", marginLeft: "0px" },
                                            hover: { color: "#000000", marginLeft: "15px" },
                                        }}
                                        transition={{ duration: 0.25 }}>
                                        Instagram
                                    </motion.button>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 lg:w-5 lg:h-5 z-10"
                                        variants={{
                                            initial: { color: "#ffffff", marginRight: "0px" },
                                            hover: { color: "#000000", marginRight: "15px" },
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <path d="M13 5H19V11" />
                                        <path d="M19 5L5 19" />
                                    </motion.svg>
                                </motion.div>

                            </li>
                        </ul>
                    </div>

                    <div className='lg:hidden'>
                        <p className='tracking-tight font-[Neue] leading-none text-justify text-sm md:text-2xl  mb-2 font-semibold'>
                            <ScrollReveal as="span">
                            Founded at VIT Bhopal University, UXClub builds a creative design community, uniting designers and developers through UX/UI learning, collaborative projects, workshops, and events, guided by strong design thinking principles.
                            </ScrollReveal>
                        </p>
                        <p className="text-sm md:text-2xl tracking-tight font-[Neue] text-justify leading-none  font-semibold  mt-4">
                            <ScrollReveal as="span">
                            UXClub creates experiences that are practical, creative, educational, and culturally meaningful designs.
                            </ScrollReveal>
                        </p>
                    </div>
                </motion.div>

                {/* smaller devices ke liye */}
                <motion.div className="lg:hidden  mt-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <ul className=' md:space-y-8 font-[Neue] text-sm w-70 sm:w-[25rem] md:w-[40rem] sm:text-medium md:h-[23rem] md:text-3xl font-semibold tracking-normal text-white'>
                        <li className='mb-3'>
                            Site links:
                        </li>
                        <li>
                            <motion.div className="border-t border-b py-2 md:py-4 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                initial="initial"
                                whileHover="hover"
                                whileTap="hover"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-white origin-left"
                                    variants={{
                                        initial: { scaleX: 0 },
                                        hover: { scaleX: 1 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                                <motion.button className="z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginLeft: "0px" },
                                        hover: { color: "#000000", marginLeft: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}>
                                    Recruitment
                                </motion.button>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 z-10 md:w-8 md:h-8"
                                    variants={{
                                        initial: { color: "#ffffff", marginRight: "0px" },
                                        hover: { color: "#000000", marginRight: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                </motion.svg>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div className="border-t border-b py-2 md:py-4 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                initial="initial"
                                whileHover="hover"
                                whileTap="hover"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-white origin-left"
                                    variants={{
                                        initial: { scaleX: 0 },
                                        hover: { scaleX: 1 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                                <motion.button className="z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginLeft: "0px" },
                                        hover: { color: "#000000", marginLeft: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}>
                                    Contact us
                                </motion.button>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginRight: "0px" },
                                        hover: { color: "#000000", marginRight: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                </motion.svg>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div className="border-t border-b py-2 md:py-4 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                initial="initial"
                                whileHover="hover"
                                whileTap="hover"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-white origin-left"
                                    variants={{
                                        initial: { scaleX: 0 },
                                        hover: { scaleX: 1 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                                <motion.button className="z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginLeft: "0px" },
                                        hover: { color: "#000000", marginLeft: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}>
                                    Instagram
                                </motion.button>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginRight: "0px" },
                                        hover: { color: "#000000", marginRight: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                </motion.svg>
                            </motion.div>
                        </li>
                    </ul>
                </motion.div>

            </div>
        </>
    )
}