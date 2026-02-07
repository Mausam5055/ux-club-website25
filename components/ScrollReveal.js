"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  as: Tag = "span",
  children,
  scrollContainerRef,
  enableBlur = false,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 0,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  stagger = 0.12,
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, i) =>
      /^\s+$/.test(word) ? (
        word
      ) : (
        <span key={i} className="inline-block word">
          {word}
        </span>
      )
    );
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current ? scrollContainerRef.current : window;

    gsap.fromTo(
      el,
      { rotate: baseRotation, transformOrigin: "0% 50%" },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const words = el.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { opacity: baseOpacity },
      {
        opacity: 1,
        stagger: stagger,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 95%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        words,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: "blur(0px)",
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    blurStrength,
    rotationEnd,
    wordAnimationEnd,
    stagger,
  ]);

  return (
    <Tag ref={containerRef} className={`inline-block ${containerClassName}`}>
      <span className={textClassName}>{splitText}</span>
    </Tag>
  );
};

export default ScrollReveal;