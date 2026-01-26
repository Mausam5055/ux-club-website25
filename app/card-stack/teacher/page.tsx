// // w-full max-w-xs
// 'use client'
// import React, { useState } from 'react';

// const products = [
//   {
//     img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format',
//     model: 'M_013',
//     type: 'Dining_Chair',
//     dimensions: 'W56 D40 H71cm',
//     leadTime: '10-12 Weeks',
//     origin: 'Mexico',
//     materials: ['White Oak', 'Walnut'],
//     weight: '28kg',
//     designer: 'Monolith Studio',
//     about: 'Sculpted with bold curvature, the M_013 Dining Chair merges soft volumes with a stark, intersecting silhouette. The striking form, defined by its low T-shaped backrest, is both solid and airy, using negative space to create a dynamic interplay of balance and support.',
//   },
//   {
//     img: 'https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg',
//     model: 'M_014',
//     type: 'Side_Table',
//     dimensions: 'W40 D40 H50cm',
//     leadTime: '8-10 Weeks',
//     origin: 'Italy',
//     materials: ['Walnut'],
//     weight: '12kg',
//     designer: 'Studio Roma',
//     about: 'A minimal side table crafted from premium walnut, designed for both function and elegance in modern interiors.',
//   },
//   // Add more products as needed
// ];

// export default function ProductDetail() {
//   const [current, setCurrent] = useState(0);
//   const prod = products[current];

//   const prev = () => setCurrent((i) => (i === 0 ? products.length - 1 : i - 1));
//   const next = () => setCurrent((i) => (i === products.length - 1 ? 0 : i + 1));

//   return (
//     <div className="min-h-screen w-full bg-[#eceae5] flex flex-col items-center px-4 py-6 font-sans">
//       {/* Image + Close Button */}
//       <div className="w-full flex justify-center relative mb-4">
//         <img
//           src={prod.img}
//           alt={prod.type}
//           className="w-[375px] h-[375px] rounded-lg object-cover"
//         />
//         <span className="absolute top-2 right-2 text-gray-600 font-bold text-lg cursor-pointer select-none">Close</span>
//       </div>
//       {/* Title Row + Slider Controls */}
//       <div className="flex justify-between items-center w-[375px] mb-2">
//         <span className="font-bold text-lg tracking-wide">{prod.model}</span>
//         <span className="font-bold text-lg tracking-wide">{prod.type}</span>
//       </div>
//       <div className="flex items-center w-full max-w-xs mb-2">
//         <span className="text-xs text-gray-600">{current + 1}/{products.length}</span>
//         <div className="ml-auto flex gap-2">
//           <button
//             onClick={prev}
//             className="px-2 py-1 text-lg text-gray-700 border border-gray-400 rounded hover:bg-black hover:text-white transition"
//             aria-label="Previous"
//           >←</button>
//           <button
//             onClick={next}
//             className="px-2 py-1 text-lg text-gray-700 border border-gray-400 rounded hover:bg-black hover:text-white transition"
//             aria-label="Next"
//           >→</button>
//         </div>
//       </div>
//       <hr className="w-full max-w-xs border-t border-black mb-2" />
//       {/* About Product */}
//       <div className="w-full max-w-xs mb-2">
//         <span className="uppercase text-xs font-mono text-gray-700">(About_Product)</span>
//         <p className="mt-1 text-sm font-semibold text-black">{prod.about}</p>
//       </div>
//       <hr className="w-full max-w-xs border-t border-black mb-2" />
//       {/* Info List */}
//       <div className="w-full max-w-xs space-y-2">
//         <div>
//           <span className="uppercase text-xs font-mono text-gray-700">(Model)</span>
//           <div className="font-bold text-lg">{prod.model}</div>
//         </div>
//         <hr className="border-t border-black" />
//         <div>
//           <span className="uppercase text-xs font-mono text-gray-700">(Dimensions)</span>
//           <div className="font-bold text-lg">{prod.dimensions}</div>
//         </div>
//         <hr className="border-t border-black" />
//         <div>
//           <span className="uppercase text-xs font-mono text-gray-700">(Lead Time)</span>
//           <div className="font-bold text-lg">{prod.leadTime}</div>
//         </div>
//         <hr className="border-t border-black" />
//         <div>
//           <span className="uppercase text-xs font-mono text-gray-700">(Place of Origin)</span>
//           <div className="font-bold text-lg">{prod.origin}</div>
//         </div>
//         <hr className="border-t border-black" />
//         <div>
//           <span className="uppercase text-xs font-mono text-gray-700">(Materials)</span>
//           <div className="font-bold text-lg">
//             {prod.materials[0]}{' '}
//             {prod.materials[1] && <span className="text-gray-400 font-normal">{prod.materials[1]}</span>}
//           </div>
//         </div>
//         <hr className="border-t border-black" />
//         <div>
//           <span className="uppercase text-xs font-mono text-gray-700">(Weight)</span>
//           <div className="font-bold text-lg">{prod.weight}</div>
//         </div>
//         <hr className="border-t border-black" />
//         <div>
//           <span className="uppercase text-xs font-mono text-gray-700">(Designed By)</span>
//           <div className="font-bold text-lg">{prod.designer}</div>
//         </div>
//       </div>
//       {/* Material Selector */}
//       <div className="w-full max-w-xs mt-4 mb-2">
//         <div className="bg-black text-white px-4 py-2 rounded flex justify-between items-center font-mono text-sm">
//           <span>MATERIAL</span>
//           <span>{prod.materials[0]} ▼</span>
//         </div>
//       </div>
//       {/* Inquiry Button */}
//       <button className="w-full max-w-xs border border-black px-4 py-2 mt-2 text-black font-mono text-sm bg-transparent">
//         INQUIRE ABOUT PRODUCT
//       </button>
//     </div>
//   );
// }
'use client'
import React, { useState, useEffect } from 'react';

const products = [
  {
    img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format',
    model: 'M_013',
    type: 'Dining_Chair',
    dimensions: 'W56 D40 H71cm',
    leadTime: '10-12 Weeks',
    origin: 'Mexico',
    materials: ['White Oak', 'Walnut'],
    weight: '28kg',
    designer: 'Monolith Studio',
    about: 'Sculpted with bold curvature, the M_013 Dining Chair merges soft volumes with a stark, intersecting silhouette. The striking form, defined by its low T-shaped backrest, is both solid and airy, using negative space to create a dynamic interplay of balance and support.',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg',
    model: 'M_014',
    type: 'Side_Table',
    dimensions: 'W40 D40 H50cm',
    leadTime: '8-10 Weeks',
    origin: 'Italy',
    materials: ['Walnut'],
    weight: '12kg',
    designer: 'Studio Roma',
    about: 'A minimal side table crafted from premium walnut, designed for both function and elegance in modern interiors.',
  },
  {
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500&auto=format',
    model: 'M_005',
    type: 'Bench',
    dimensions: 'L132 D40 H40cm',
    leadTime: '6-8 Weeks',
    origin: 'Italy',
    materials: ['Lava Rock'],
    weight: '45kg',
    designer: 'Monolith Studio',
    about: 'Crafted from 3 precisely carved blocks, the curved figure of the M_005 Bench emphasizes the connection between its parts. Its soft curves playfully bend the structure, its engineering reflecting the architectural elegance of a simple bridge. Suitable for indoor / outdoor use. Customization available upon request.',
  },
];

export default function ProductDetail() {
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const prod = products[current];

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

  const prev = () => setCurrent((i) => (i === 0 ? products.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === products.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen w-full bg-[#eceae5] font-sans pb-24">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Image Slider Section */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <img
              src={prod.img}
              alt={prod.type}
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
              <button className="border border-black bg-white bg-opacity-90 px-3 py-1 text-xs font-mono hover:bg-black hover:text-white transition">
                (DETAIL VIEW)
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Below Image */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{current + 1}/{products.length}</span>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="px-3 py-2 text-xl text-gray-700 border border-gray-400 rounded hover:bg-black hover:text-white transition"
                aria-label="Previous"
              >←</button>
              <button
                onClick={next}
                className="px-3 py-2 text-xl text-gray-700 border border-gray-400 rounded hover:bg-black hover:text-white transition"
                aria-label="Next"
              >→</button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          {/* Title Row */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {prod.model}
              </h1>
            </div>
            <div className="text-right">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
                {prod.type}
              </h2>
              {/* Plus icon */}
              <div className="mt-8">
                <span className="text-4xl font-light">+</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-12">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
              {prod.about}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(MODEL)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-3xl md:text-4xl font-bold">{prod.model}</span>
                </div>
              </div>

              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(DIMENSIONS)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{prod.dimensions}</span>
                </div>
              </div>

              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(LEAD TIME)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{prod.leadTime}</span>
                </div>
              </div>

              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(PLACE OF ORIGIN)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{prod.origin}</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(MATERIALS)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{prod.materials[0]}</span>
                  {prod.materials[1] && (
                    <span className="text-xl text-gray-400 font-normal ml-2">{prod.materials[1]}</span>
                  )}
                </div>
              </div>

              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(WEIGHT)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{prod.weight}</span>
                </div>
              </div>

              <div>
                <span className="uppercase text-sm font-mono text-gray-700 block mb-2">(DESIGNED BY)</span>
                <hr className="border-t border-black mb-4" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold">{prod.designer}</span>
                </div>
              </div>

              {/* Material Selector & Inquiry Button */}
              <div className="space-y-4 mt-16">
                <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
                  <span className="font-mono text-sm font-bold">MATERIAL</span>
                  <span className="text-lg font-bold">{prod.materials[0]} ▼</span>
                </div>
                
                <button className="w-full border border-black px-6 py-4 text-black font-mono text-sm bg-transparent hover:bg-black hover:text-white transition-colors">
                  INQUIRE ABOUT PRODUCT
                </button>
              </div>
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
                src={products[(current === 0 ? products.length - 1 : current - 1)].img}
                alt="Previous product"
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
                src={products[(current === products.length - 1 ? 0 : current + 1)].img}
                alt="Next product"
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