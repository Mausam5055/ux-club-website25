'use client'
import React, { useState, useEffect } from 'react';

const items = [
  { name: 'Dog', img: 'https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg' },
  { name: 'Cat', img: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg' },
  { name: 'Counter Stool', img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format' },
  { name: 'Lamp', img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format' },
  { name: 'Table', img: 'https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg' },
  { name: 'Bookshelf', img: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg' },
  { name: 'Ottoman', img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format' },
  { name: 'Mirror', img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format' },
];

export default function ImagessPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = (idx: number) => {
    if (hoveredIdx !== null && hoveredIdx !== idx) {
      setIsTransitioning(true);
      setTimeout(() => {
        setHoveredIdx(idx);
        setIsTransitioning(false);
      }, 150);
    } else {
      setHoveredIdx(idx);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    setIsTransitioning(false);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center py-12 relative overflow-hidden"
      style={{ background: '#eceae5' }}
    >
      <h1 className="text-2xl font-bold mb-8">Members</h1>
      
      {hoveredIdx !== null && (
        <div
          className={`fixed z-50 pointer-events-none transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 80,
            transform: 'translate(0, 0)',
          }}
          id="hover-image"
        >
          <div className="relative">
            <img
              src={items[hoveredIdx].img}
              alt={items[hoveredIdx].name}
              className="w-72 h-72 object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                background: '#fff',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
              }}
            />
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-3 py-1 rounded-full text-2sm font-medium whitespace-nowrap">
              {items[hoveredIdx].name}
            </div>
          </div>
        </div>
      )}

      <div className="w-full z-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-full flex items-center justify-between px-3 py-3 mb-1 transition-all duration-500 ease-out cursor-pointer group"
            style={{ background: idx % 2 === 0 ? '#eceae5' : '#dddad1' }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="font-mono text-gray-700 transition-all duration-500 ease-out group-hover:text-white">
              {String(idx + 1).padStart(3, '0')}
            </span>
            <span className="mx-4 font-semibold transition-all duration-500 ease-out group-hover:text-white">
              {item.name}
            </span>
            {/* <div className="w-6 h-6 rounded-full bg-gray-300 transition-all duration-500 ease-out group-hover:bg-white opacity-60 group-hover:opacity-100"></div> */}
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #hover-image {
            left: 50% !important;
            top: 45% !important;
            transform: translate(-50%, -50%) !important;
          }
        }
        .group:hover {
          background: #000 !important;
          transform: translateX(8px);
        }
        
        .group {
          border-left: 3px solid transparent;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .group:hover {
          border-left-color: #fff;
        }
      `}</style>
    </div>
  );
}