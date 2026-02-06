
'use client'
import React, { useState, useEffect, Suspense } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

const teamInfo = [
  {
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Tech Team',
    department: 'TECH',
    lead: { name: 'yeshu agarwal' },
    coLead: { name: 'jhalak sahgal' },
    responsibilities: ['Website Development', 'App Projects', 'Tech Workshops'],
    meetingSchedule: 'Weekly Leadership Meetings',
    role: 'Overall club management',
    bio: 'The Tech Team is the backbone of UX Club. They manage the club\'s website, develop and maintain any apps or tech projects, and conduct workshops to teach members about various technologies related to UX design. They ensure that the club stays at the forefront of technological advancements in the UX field.',
  },
  {
    img: 'https://images.unsplash.com/photo-1565350897149-38dfafa81d83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'PR Team',
    department: 'PR ',
    lead: { name: 'Yash Verma' },
    coLead: { name: 'Atherva Sahai' },
    responsibilities: ['Outreach', 'Sponsorships', 'Networking'],
    meetingSchedule: 'PR Planning Sessions',
    role: 'Public relations & communications',
    bio: 'The PR Team is the face of UX Club. They handle all external communications, manage social media channels, coordinate event promotions, and build relationships with sponsors and partners. They ensure that UX Club maintains a strong presence both on campus and in the wider UX community.',
  },
  {
    img: 'https://images.unsplash.com/photo-1690191794328-b2c75ebd86df?q=80&w=1348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Content Team',
    department: 'CONTENT',
    lead: { name: 'Yeshu Agarwal' },
    coLead: { name: 'Jhalak Sahgal' },
    responsibilities: ['Blog Writing', 'Documentation', 'Newsletter'],
    meetingSchedule: 'Weekly Dev Sprints',
    role: 'Content creation & curation',
    bio: 'The content team is responsible for creating and curating valuable content for UX Club. They write blog posts, manage documentation, produce newsletters, and create educational materials to help members stay informed and engaged with the latest in UX design.',
  },
  {
    img: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Design Team',
    department: 'DESIGN',
    lead: { name: 'Harsh Mahesh Math' },
    coLead: { name: 'Pranjali Sharma' },
    responsibilities: ['designing posters' , 'social media graphics' , 'ui/ux projects'],
    meetingSchedule: 'Weekly Editorial Meetings',
    role: 'Visual design & branding',
    bio: 'The design team crafts the visual identity of UX Club. They design event posters, social media graphics, and UI/UX projects, ensuring a consistent and engaging brand presence. They also conduct design workshops to upskill members in tools like Figma and Adobe Suite.',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Event Team',
    department: 'EVENTS',
    lead: { name: 'atharav sahai' },
    coLead: { name: 'Prateek' },
    responsibilities: ['Event Planning', 'Logistics', 'Speaker Coordination'],
    meetingSchedule: 'Bi-weekly Strategy Sessions',
    role: 'Event planning & management',
    bio: 'The Event Team builds bridges between UX Club and the outside world. They manage sponsor relationships, coordinate with other clubs, handle media outreach, recruit new members, and maintain relationships with alumni and industry professionals.',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1770077133854-1e173086b1c3?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Social Media Team',

    department: 'SOCIAL MEDIA',
    lead: { name: 'Nitin' },
    coLead: { name: 'Archisha Nigam' },
    responsibilities: ['Visual Design', 'UI/UX Projects', 'Brand Identity'],
    meetingSchedule: 'Weekly Design Critiques',
    role: 'Social media management & branding',
    bio: 'The Design Team is the creative heart of UX Club. They create stunning visuals for events, maintain brand consistency, design social media graphics, work on UI/UX projects, and conduct design workshops to upskill members in tools like Figma and Adobe Suite.',
  },
  
];


function TeamDetailContent() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const searchParams = useSearchParams();
  const nameParam = searchParams.get('name');
  
  // Find the team index based on the name parameter
  const initialIndex = nameParam 
    ? teamInfo.findIndex(t => t.name === decodeURIComponent(nameParam))
    : 0;
  
  const [current, setCurrent] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [scrollY, setScrollY] = useState(0);
  const team = teamInfo[current];

  // Update current when URL parameter changes
  useEffect(() => {
    if (nameParam) {
      const index = teamInfo.findIndex(t => t.name === decodeURIComponent(nameParam));
      if (index >= 0) setCurrent(index);
    }
  }, [nameParam]);

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === 'ArrowRight') {
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [current]);

  const getClipPath = () => {
    const startReveal = 0.85;
    const progress = Math.max(0, (scrollY - startReveal) / (1 - startReveal));
    const clipValue = 100 - (Math.min(progress, 1) * 100);
    return `inset(${clipValue}% 0 0 0)`;
  };

  const prev = () => setCurrent((i) => (i === 0 ? teamInfo.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === teamInfo.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen w-full bg-black text-[#ECEAE5] font-[Neue] ">
      <div className="w-full px-3.5 pt-15 pb-1">
        {/* Image Slider Section */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <img
              src={team.img}
              alt={team.name}
              className="w-[375px] h-[375px] md:w-[625px] md:h-[625px] object-cover"
            />
            {/* Detail View button */}
            <div className="absolute bottom-4 right-4">
              <button className="border border-[#ECEAE5] bg-black text-[#ECEAE5] px-3 py-1 text-xs font-[Neue] hover:bg-[#ECEAE5] hover:text-black transition">
                (TEAM OVERVIEW)
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Below Image */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#ECEAE5]">{current + 1}/{teamInfo.length}</span>
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
              <h1 className="hidden lg:block xl:text-5xl lg:text-5xl md:text-5xl  font-bold leading-tight">
                {team.name}
              </h1>
              <h1 className="lg:hidden text-xl md:text-4xl font-semibold leading-tight">
                {team.name}
              </h1>
            </div>
            <div className="text-right">
              <h2 className="lg:hidden text-xl md:text-4xl font-semibold text-[#ECEAE5]">
                {team.department}
              </h2>
              <h2 className="hidden lg:block xl:text-5xl lg:text-5xl  font-semibold text-[#ECEAE5]">
                {team.department}
              </h2>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Bio in left side */}
              <div className="mb-8">
                <p className='text-xs mb-2'>( What We Do )</p>
                <p className="hidden lg:block text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold">
                  {team.bio}
                </p>
                <p className="lg:hidden text-sm leading-snug md:text-xl font-semibold">
                  {team.bio} 
                </p>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold mb-2">(TEAM LEAD)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(TEAM LEAD)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                <div className="text-right">
                  <span className="hidden lg:block text-3xl md:text-4xl font-bold">{team.lead.name}</span>
                  <span className="lg:hidden text-xl md:text-4xl font-bold">{team.lead.name}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold mb-2">(CO-LEAD)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(CO-LEAD)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.3, ease: "easeInOut" }}
                />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{team.coLead.name}</span>
                  <span className="lg:hidden text-xl md:text-3xl font-bold">{team.coLead.name}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold mb-2">(MEETING SCHEDULE)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(MEETING SCHEDULE)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{team.meetingSchedule}</span>
                  <span className="lg:hidden text-xl md:text-3xl font-bold">{team.meetingSchedule}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold mb-2">(PRIMARY ROLE)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(PRIMARY ROLE)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{team.role}</span>
                  <span className="lg:hidden text-xl md:text-3xl font-bold">{team.role}</span>
                </div>
                
              </div>
              
            </div>
            

            {/* Center Column - Vertical Line */}
            <div className="hidden lg:flex justify-center">
              <div className="w-[1px] h-full bg-white" />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-white text-black px-4 py-4">
                <span className="font-mono text-sm font-bold block mb-3">KEY RESPONSIBILITIES</span>
                <div className="space-y-2">
                  {team.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs">→</span>
                      <span className="text-sm font-semibold">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
               
              <motion.button
                className="relative w-full overflow-hidden border border-[#ECEAE5] px-6 py-4 font-mono text-sm text-[#ECEAE5] bg-transparent"
                initial="rest"
                whileHover="hover"
                animate="rest"
                onClick={() => setShowJoinModal(true)}
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
                  JOIN THIS TEAM
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showJoinModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={() => setShowJoinModal(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="w-full max-w-md rounded-2xl border border-[#ECEAE5] bg-[#0e0e0e] p-6 text-center text-[#ECEAE5] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold">
                Joining team page is coming soon!
              </h2>
              <p className="mt-2 text-sm text-[#cfcac2]">
                Meanwhile, you can reach out to the team leads to join the team.
              </p>
              <button
                onClick={() => setShowJoinModal(false)}
                className="mt-5 rounded-lg border border-[#ECEAE5] px-4 py-2 text-sm font-mono text-[#ECEAE5] transition hover:bg-[#ECEAE5] hover:text-black"
              >
                Okay
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Footer */}
      {/* <div 
        className="fixed bottom-0 left-0 w-full bg-[#0e0e0e] py-6 px-8 md:py-9 md:px-12 transition-all duration-700 ease-out"
        style={{
          clipPath: getClipPath(),
          transform: `translateY(${scrollY < 0.85 ? '100%' : '0'})`,
          opacity: scrollY < 0.85 ? 0 : 1
        }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto"> */}
          {/* Previous Section */}
          {/* <button 
            onClick={prev}
            className="flex items-center gap-4 md:gap-8 text-white hover:opacity-80 transition-opacity"
          >
            <span className="text-xl md:text-4xl font-light">Prev</span>
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-200">
              <img
                src={teamInfo[(current === 0 ? teamInfo.length - 1 : current - 1)].img}
                alt="Previous team"
                className="w-full h-full object-cover"
              />
            </div>
          </button> */}

          {/* Next Section */}
          {/* <button 
            onClick={next}
            className="flex items-center gap-4 md:gap-8 text-white hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-200">
              <img
                src={teamInfo[(current === teamInfo.length - 1 ? 0 : current + 1)].img}
                alt="Next team"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl md:text-4xl font-light">Next</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default function TeamDetail() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
      <TeamDetailContent />
    </Suspense>
  );
}
