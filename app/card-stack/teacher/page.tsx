
'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
 
const facultyMembers = [
  {
    img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format',
    name: 'Dr. Ananya Sharma',
    designation: 'Faculty Advisor – UX Club',
    department: 'D&I',
    expertise: ['User Experience Design', 'Human–Computer Interaction', 'Design Thinking'],
    availability: 'Weekly Mentorship Sessions',
    role: 'Guides club strategy ',
    affiliation: 'College Faculty',
    bio:
      'Provides academic guidance and mentorship to UX Club members, helping bridge design theory with practical, industry-relevant applications.',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg',
    name: 'Prof. Rahul Verma',
    designation: 'Faculty Coordinator',
    department: 'IT',
    expertise: ['Frontend Development', 'Web Technologies', 'Accessibility'],
    availability: 'Bi-weekly Technical Sessions',
    role: 'technical initiatives',
    affiliation: 'College Faculty',
    bio:
      'Supports frontend and technical learning within the club, ensuring best practices in modern web development and accessibility standards.',
  },
  {
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500&auto=format',
    name: 'Dr. Neha Iyer',
    designation: 'Mentor – Product & Research',
    department: 'MENTOR',
    expertise: ['User Research', 'Product Strategy', 'Usability Testing'],
    availability: 'Project-based Mentorship',
    role: 'Mentor student activities',
    affiliation: 'College Faculty',
    bio:
      'Mentors student-led projects and hackathons, focusing on research-driven design decisions and creating strong, portfolio-ready outcomes.',
  },
];


export default function ProductDetail() {
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const prod = facultyMembers[current];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollTop / (documentHeight - windowHeight);
      setScrollY(scrollProgress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getClipPath = () => {
    const startReveal = 0.85;
    const progress = Math.max(0, (scrollY - startReveal) / (1 - startReveal));
    const clipValue = 100 - (Math.min(progress, 1) * 100);
    return `inset(${clipValue}% 0 0 0)`;
  };

  const prev = () => setCurrent((i) => (i === 0 ? facultyMembers.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === facultyMembers.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen w-full bg-black text-[#ECEAE5] font-[Neue] pb-24">
      <div className="w-full  px-3.5 py-15">
        {/* Image Slider Section */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <img
              src={prod.img}
              alt={prod.name}
              className="w-[375px] h-[375px] md:w-[625px] md:h-[625px] object-cover"
            />
            {/* Close button */}
            {/* <div className="absolute top-4 right-4">
              <span className="text-white bg-black bg-opacity-50 px-2 py-1 text-sm cursor-pointer hover:bg-opacity-75 transition">
                Close
              </span>
            </div> */}
            {/* Detail View button */}
            <div className="absolute bottom-4 right-4">
              <button className="border border-[#ECEAE5] bg-black text-[#ECEAE5] px-3 py-1 text-xs font-[Neue] hover:bg-[#ECEAE5] hover:text-black transition">
                (DETAIL VIEW)
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Below Image */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#ECEAE5]">{current + 1}/{facultyMembers.length}</span>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="px-3 py-2 text-xl text-gray-300 border border-gray-400 rounded hover:bg-white hover:text-black transition"
                aria-label="Previous"
              >←</button>
              <button
                onClick={next}
                className="px-3 py-2 text-xl text-gray-300 border border-gray-400 rounded hover:bg-white hover:text-black transition"
                aria-label="Next"
              >→</button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          {/* Title Row */}
          <div className="flex justify-between items-start mb-5">
            <div className="flex-1">
              <h1 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {prod.name}
              </h1>
              <h1 className="lg:hidden text-xl   font-semibold leading-tight">
                {prod.name}
              </h1>
            </div>
            <div className="text-right">
              <h2 className="lg:hidden text-xl md:text-3xl font-semibold text-[#ECEAE5]">
                {prod.department}
              </h2>
              <h2 className="hidden lg:block text-2xl md:text-3xl font-semibold text-[#ECEAE5]">
                {prod.department}
              </h2>
              {/* Plus icon */}
              {/* <div className="mt-8">
                <span className="text-4xl font-light">+</span>
              </div> */}
            </div>
          </div>

          {/* About Section */}
          {/* <div className="mb-12">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
              {prod.bio}
            </p>
          </div> */}

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Bio in left side */}
              <div className="mb-8">
                <p className='text-xs mb-2'>( About )</p>
                <p className="hidden lg:block text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold">
                  {prod.bio}
                </p>
                <p className="lg:hidden text-sm  leading-snug md:text-xl font-semibold">
                  {prod.bio} 
                </p>
              </div>
              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold  mb-2">(NAME)</span>
                
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(NAME)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                <div className="text-right">
                  <span className="hidden lg:block text-3xl md:text-4xl font-bold">{prod.name}</span>

                  <span className="lg:hidden text-xl md:text-4xl font-bold">{prod.name}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold  mb-2">(designation)</span>

                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(designation)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.3, ease: "easeInOut" }} />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{prod.designation}</span>

                  <span className="lg:hidden text-xl md:text-3xl font-bold">{prod.designation}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold  mb-2">(AVAILABILITY)</span>

                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(AVAILABILITY)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.4, ease: "easeInOut" }} />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{prod.availability}</span>

                  <span className="lg:hidden text-xl md:text-3xl font-bold">{prod.availability}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold  mb-2">(AFFILIATION)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(AFFILIATION)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }} />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{prod.affiliation}</span>
                  <span className="lg:hidden text-xl md:text-3xl font-bold">{prod.affiliation}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold  mb-2">(ROLE)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(ROLE)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.6, ease: "easeInOut" }} />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{prod.role}</span>
                  <span className="lg:hidden text-xl md:text-3xl font-bold">{prod.role}</span>
                </div>
              </div>
            </div>

            {/* Center Column - Vertical Line */}
            <div className="hidden lg:flex justify-center">
              <div className="w-[1px] h-full bg-white" />

            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-white text-black px-4 py-4 flex justify-between items-center">
                <span className="font-mono text-sm font-bold">EXPERTISE</span>
                <span className="hidden lg:block  text-lg font-bold">{prod.expertise[0]} ▼</span>

                <span className="lg:hidden text-base font-bold">{prod.expertise[0]} ▼</span>
              </div>
              
               <motion.button
      className="relative w-full overflow-hidden border border-[#ECEAE5] px-6 py-4 font-mono text-sm text-[#ECEAE5] bg-transparent"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Sliding background */}
      <motion.div
        className="absolute inset-0 bg-[#ECEAE5]"
        variants={{
          rest: { x: '-100%' },
          hover: { x: '0%' },
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      />
      {/* Button text */}
      <motion.span
        className="relative z-10"
        variants={{
          rest: { color: '#ECEAE5' },
          hover: { color: '#000000' },
        }}
        transition={{ duration: 0.3 }}
      >
        INQUIRE ABOUT FACULTY
      </motion.span>
    </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div 
        className="fixed bottom-0 left-0 w-full bg-[#0e0e0e] py-6 px-8 md:py-9 md:px-12 transition-all duration-700 ease-out"
        style={{
          clipPath: getClipPath(),
          transform: `translateY(${scrollY < 0.85 ? '100%' : '0'})`,
          opacity: scrollY < 0.85 ? 0 : 1
        }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Previous Section */}
          <button 
            onClick={prev}
            className="flex items-center gap-4 md:gap-8 text-white hover:opacity-80 transition-opacity"
          >
            <span className="text-xl md:text-4xl font-light">Prev</span>
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-200">
              <img
                src={facultyMembers[(current === 0 ? facultyMembers.length - 1 : current - 1)].img}
                alt="Previous faculty"
                className="w-full h-full object-cover"
              />
            </div>
          </button>

          {/* Next Section */}
          <button 
            onClick={next}
            className="flex items-center gap-4 md:gap-8 text-white hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-200">
              <img
                src={facultyMembers[(current === facultyMembers.length - 1 ? 0 : current + 1)].img}
                alt="Next faculty"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl md:text-4xl font-light">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}