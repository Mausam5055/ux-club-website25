"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons'
import { motion } from 'framer-motion'

function Hero() {
  
  const images = [
    "https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1716034353162-bbdf0bc75ef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1666174933349-9327dc92addf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1663814232828-f3392b8a0001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1652550808231-aababe6cf419?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1674065309627-ac695abefb47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb29yJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1663814232828-f3392b8a0001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <main className='bg-gray-900'>
      <nav className='flex justify-between px-4 sm:px-8 py-15'>
        <h1 className='font-[Neue] font-medium lg:text-base sm:text-base mix-blend-difference text-white'>BLOG PAGE</h1>
        
      </nav>
      
      <section className='flex justify-center px-2 sm:px-0'>
       
        {/* Auto-scrolling images */}
        <div className='hidden sm:block relative overflow-hidden max-w-[90rem] mx-auto w-full'>
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -window.innerWidth * 0.96 * images.length - (16 * images.length)] 
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "restart",
                duration: 80, 
                ease: "linear",
              },
            }}
          >
            {duplicatedImages.map((imageSrc, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                whileHover={{ 
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src={imageSrc} 
                  alt={`gallery image ${index + 1}`} 
                  className='h-[90vh] w-[96vw] px-2 py-2 object-cover object-center' 
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </main>
  )
}

export default Hero
