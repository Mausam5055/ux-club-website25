'use client'
import React, { useState, useEffect } from 'react';

// Multiple images for the same product (M_013 Dining Chair)
const productImages = [
  'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format',
  'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=500&auto=format',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500&auto=format'
];

const product = {
  model: 'UX Club',
  type: 'ABC',
  dimensions: ':)',
  leadTime: '10-12 Weeks',
  origin: 'Mexico',
  materials: ['White Oak', 'Walnut'],
  weight: '28kg',
  designer: 'Monolith Studio',
  about: 'Sculpted with bold curvature, the M_013 Dining Chair merges soft volumes with a stark, intersecting silhouette. The striking form, defined by its low T-shaped backrest, is both solid and airy, using negative space to create a dynamic interplay of balance and support.',
};

export default function ProductDetail() {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const getClipPath = () => {
    const startReveal = 0.85;
    const progress = Math.max(0, (scrollY - startReveal) / (1 - startReveal));
    const clipValue = 100 - (Math.min(progress, 1) * 100);
    return `inset(${clipValue}% 0 0 0)`;
  };

  return (
    <div className="min-h-screen w-full bg-[#eceae5] font-sans pb-24">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideInfinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .slide-infinite {
            animation: slideInfinite 15s linear infinite;
          }
        `
      }} />
      
      <div className="w-full px-4 py-8">
        {/* Mobile Image View */}
        <div className="block md:hidden">
          <div className="flex justify-center mb-4 relative">
            <div className="relative">
              <img
                src={productImages[currentImageIndex]}
                alt={product.type}
                className="w-[375px] h-[375px] object-cover"
              />
            </div>
          </div>
          
          {/* Navigation buttons outside image */}
          <div className="flex items-center justify-between mb-8 px-4">
            {/* Image counter */}
            <div className="text-sm font-medium text-gray-600">
              {currentImageIndex + 1}/{productImages.length}
            </div>
            
            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              {/* Previous button */}
              <button
                onClick={prevImage}
                className="p-1 transition-all duration-200"
                disabled={currentImageIndex === 0}
              >
                <span className={`text-3xl ${currentImageIndex === 0 ? 'text-gray-300' : 'text-black'}`}>
                  ←
                </span>
              </button>
              
              {/* Next button */}
              <button
                onClick={nextImage}
                className="p-1 transition-all duration-200"
                disabled={currentImageIndex === productImages.length - 1}
              >
                <span className={`text-3xl ${currentImageIndex === productImages.length - 1 ? 'text-gray-300' : 'text-black'}`}>
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Image Slider Section */}
        <div className="hidden md:block w-full mb-8 relative overflow-hidden h-[400px] md:h-[600px]">
          <div 
            className="flex slide-infinite"
            style={{
              width: `${productImages.length * 200}%`
            }}
          >
            {/* Duplicate images for seamless loop */}
            {[...productImages, ...productImages, ...productImages].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.type} view ${(index % productImages.length) + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
                style={{ width: `${100 / (productImages.length * 3)}%` }}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          {/* Title Row */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {product.model}
              </h1>
            </div>
            <div className="text-right">
              <h1 className="text-2xl md:text-3xl font-medium text-gray-600">
                {product.type}
              </h1>
              {/* Plus icon */}
              {/* <div className="mt-8">
                <span className="text-4xl font-light">+</span>
              </div> */}
            </div>
          </div>

          {/* About Section */}
          <div className="mb-12">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
              {product.about}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-8 mb-12 relative">
            {/* Vertical separator line - only visible on md+ screens */}
            <div className="hidden md:block absolute left-[62.5%] top-0 bottom-0 w-px bg-black transform -translate-x-1/2"></div>
            
            {/* Left Column - 5/8 width */}
            <div className="space-y-8 md:col-span-5 md:pr-18">
              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(MODEL)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-3xl md:text-4xl font-bold">{product.model}</span>
                </div>
              </div>

              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(DIMENSIONS)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{product.dimensions}</span>
                </div>
              </div>

              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(LEAD TIME)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{product.leadTime}</span>
                </div>
              </div>

              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(PLACE OF ORIGIN)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{product.origin}</span>
                </div>
              </div>
              
              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(MATERIALS)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{product.materials[0]}</span>
                  {product.materials[1] && (
                    <span className="text-xl text-gray-400 font-normal ml-2">{product.materials[1]}</span>
                  )}
                </div>
              </div>

              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(WEIGHT)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{product.weight}</span>
                </div>
              </div>

              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(DESIGNED BY)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{product.designer}</span>
                </div>
              </div>
            </div>

            {/* Right Column - 3/8 width */}
            <div className="space-y-8 md:col-span-3 md:pl-16">
              {/* Material Selector */}
              <div className="bg-[#2a2a2a] text-white px-6 py-4 flex justify-between items-center">
                <span className="font-mono text-sm font-bold tracking-wider">MATERIAL</span>
                <span className="text-lg font-bold">Travertine ▼</span>
              </div>
              
              {/* Inquiry Button */}
              <button className="w-full border border-gray-400 px-6 py-4 text-gray-700 font-mono text-sm bg-[#e8e6e1] relative overflow-hidden group transition-colors duration-900">
                <span className="relative z-10 group-hover:text-white transition-colors duration-900 tracking-wider">
                  INQUIRE ABOUT PRODUCT
                </span>
                <div className="absolute inset-0 bg-[#2a2a2a] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1100 ease-[cubic-bezier(0.584,_0.006,_0,_0.998)]"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer with Navigation */}
      <div 
        className="fixed bottom-0 left-0 w-full bg-[#0e0e0e] py-6 px-8 md:py-9 md:px-12 transition-all duration-700 ease-out"
        style={{
          clipPath: getClipPath(),
          transform: `translateY(${scrollY < 0.85 ? '100%' : '0'})`,
          opacity: scrollY < 0.85 ? 0 : 1
        }}
      >
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-sm overflow-hidden">
                <img
                  src={productImages[0]}
                  alt="Product view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-light">{product.model}</div>
                <div className="text-sm text-gray-400">{product.type}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}