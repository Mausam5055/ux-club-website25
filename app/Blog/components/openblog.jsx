"use client";

import React, { useState } from 'react'
import { faSun, faMoon, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { blogData, getBlogById } from './blogData'

function OpenBlog({ blog }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Use default blog if none provided
  const currentBlog = blog || {
    id: 1,
    Date: "# DATE: 25/09/25",
    subtitle: "M_001",
    description: "",
    image: "https://images.unsplash.com/photo-1655669357124-394d107b3aaf?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Get related blogs (excluding current one)
  const relatedBlogs = blogData.blogs.filter(b => b.id !== currentBlog.id).slice(0, 5);

  return (
    <>
      <section className={`w-full pt-10 min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Navigation bar */}
        <nav className={`flex justify-between items-center px-4 lg:px-5 xl:px-6 py-4 shadow-sm border-b transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 ' : 'bg-white border-gray-200'}`}>
          <div className='flex items-center gap-4'>
            <h1 className={`font-[Neue] font-medium text-base transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>BLOG PAGE</h1>
          </div>
          <div className='flex items-center gap-4'>
            <button
              onClick={toggleDarkMode}
              className={` px-3 py-1 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-gray-200 hover:bg-gray-200 text-gray-700'}`}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="base" />
            </button>
            {/* <h1 className={`font-sans font-medium text-base ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>	&#9679; Menu</h1> */}
          </div>
        </nav>

        <div className='max-w-[1450px] mx-auto px-4 py-6'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

            {/* Main Content Area */}
            <div className='lg:col-span-2'>
              <div className={`w-full relative overflow-hidden  mb-4 transition-colors duration-300 h-[60vh] lg:h-[65vh] sm:h-[35vh] md:h-[25vh]  object-cover ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>

                <Link href="/Blog">
                  <h2 className="text-black absolute right-5 top-3 font-bold font-[Neue] text-xl ">Close</h2>
                </Link>
                <img
                  src={currentBlog.image}
                  alt={currentBlog.Date}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='mb-4 px-1 '>
                <h1 className={`text-2xl   font-bold mb-2 transition-colors font-[Neue] duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentBlog.subtitle}</h1>
                
              
                <div className='text-sm mb-4'>
                  <div className='flex items-center justify-between'>
                    <span className={`transition-colors duration-300 text-[12px] font-bold font-[Neue] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{currentBlog.Date}</span>

                    <span className={`transition-colors text-[13px] duration-300 font-bold font-[Neue] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>5 min ago</span>
                  </div>
                </div>
              </div>
              <hr className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              {/* Blog Content */}
              <div className=''>

                <div 
                  className={`space-y-4 leading-relaxed transition-colors font-[Neue] duration-300 text-justify ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
                  dangerouslySetInnerHTML={{ __html: currentBlog.description }}
                />
                <br />
                <hr className={` py-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                <div className={`py-5 mb-6 transition-colors duration-300   ${isDarkMode ? 'bg-transparent' : 'bg-transparent'}`}>
                  <p className={`text-sm mb-2 transition-colors duration-300 font-[Neue] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{currentBlog.name} BY STUDENT NAME</p>
                  <p className={`text-sm transition-colors  duration-300 font-[Neue] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Student details</p>
                </div>
              </div>
            </div>

            {/* Right side related blog posts */}
            <div className='hidden sm:block'>
              <div className=''>
                {relatedBlogs.map((relatedBlog) => (
                  <Link 
                    key={relatedBlog.id}
                    href={`/Blog/openblog/${relatedBlog.id}`}
                  >
                    <div className={`flex relative cursor-pointer p-2 transition-colors duration-300 w-[30vw] ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                      <img
                        src={relatedBlog.image}
                        alt="Related article"
                        className='w-full h-48 object-cover'
                      />
                      <div className="absolute bottom-4 right-4">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-gray-100 hover:text-gray-900 cursor-pointer transition-colors duration-200"
                          size="lg" 
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OpenBlog
