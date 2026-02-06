"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { blogData } from './blogData';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-transparent overflow-hidden    ">
      
      <div className='block'>
        <h1  className='font-[Neue] mb-3 text-xl text-[#ECEAE5]'>{blog.categories}</h1>
        </div>
      <div className="relative h-80  lg:h-[60vh] lg:w-96 sm overflow-hidden  sm:h-[50vh] md:h-[60vh] lg:px-0 sm:px-5 ">
        
        <img 
          src={blog.image} 
          alt={blog.subtitle}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 "
        />
      </div>
     
      <div className="bg-transparent py-2 h-[200px] relative  lg:text-justify sm:h-[180px] md:h-[180px] ">
        
        <h2 className="font-medium font-[Neue] text-[12px] text-[#ECEAE5] mb-2 ">
          {blog.Date}
        </h2>
        <h3 className="text-2xl font-bold font-[Neue] text-[#ECEAE5] mb-3">
          {blog.subtitle}
        </h3>
        <p className="text-sm text-[#ECEAE5] font-[Neue] overflow-hidden leading-relaxed mb-4">
          {blog.preview}
        </p>
     <Link href={`/Blog/openblog/${blog.id}`}>
        <div className='bg-[#ECEAE5] h-[40px] my-5 flex justify-center  align-center overflow-hidden w-[110px]'>
          
          <button className='text-black cursor-pointer font-[Neue]'>Read more</button></div>
      </Link>
        <div className="absolute hidden sm:block bottom-4 right-4">
          
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className="text-[#ECEAE5] hover:text-white cursor-pointer transition-colors duration-200" 
            size="lg"
            
          />
          
        </div>
      </div>
      
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="py-4 px-8 sm:px-6 lg:px-6  bg-gray-900">
      <div className="max-w-[1450px] mx-auto">
        <h1 className='font-[Neue] text-2xl mb-8 lg:px-0 sm:px-6 text-[#ECEAE5]'>Categories</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-40 lg:gap-y-12 gap-y-8">
          {blogData.blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
