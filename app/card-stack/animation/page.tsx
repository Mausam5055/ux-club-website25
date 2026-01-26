'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollVideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const handleVideoLoad = () => {
      setIsVideoLoaded(true);
      setVideoDuration(video.duration);
      video.pause();
      video.currentTime = 0;
    };

    const handleScroll = () => {
      if (!isVideoLoaded || !videoDuration) return;

      const containerRect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrolled = Math.max(0, windowHeight - containerRect.top);
      const maxScroll = containerHeight;
      
      let progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
      
      // Apply easing for smoother scrubbing
      progress = easeInOutCubic(progress);
      
      setCurrentProgress(progress);
      
      const targetTime = progress * videoDuration;
      video.currentTime = targetTime;
      
      if (video.seekable.length > 0) {
        const seekableStart = video.seekable.start(0);
        const seekableEnd = video.seekable.end(0);
        const clampedTime = Math.max(seekableStart, Math.min(targetTime, seekableEnd));
        
        if (Math.abs(video.currentTime - clampedTime) > 0.016) {
          video.currentTime = clampedTime;
        }
      }
    };

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    video.addEventListener('loadedmetadata', handleVideoLoad);
    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('canplay', handleVideoLoad);
    
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    if (video.readyState >= 2) {
      handleVideoLoad();
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleVideoLoad);
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('canplay', handleVideoLoad);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isVideoLoaded, videoDuration]);

  return (
    <div className="relative">
      <div 
        ref={containerRef}
        className="relative w-full"
        style={{ height: '500vh' }}
      >
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
          >
            <source src="/lottie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-10">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-30 mb-6 mx-auto">
                  <div className="rounded-full h-12 w-12 border-t-4 border-white mt-2 ml-2"></div>
                </div>
                <p className="text-xl font-medium">Loading Video...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}