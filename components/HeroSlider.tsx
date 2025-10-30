"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalDuration = 6000;

    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalDuration);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {slides.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt='property background'
          fill
          priority={index === 0}
          className={`
            absolute inset-0 block
            object-cover 
            ken-burns-image 
            
            ${
              index === current ? "opacity-100 animate-ken-burns" : "opacity-0" // Inactive: Just fades out. It relies on the animation's 'forwards' state and the transition from the previous slide.
            }
          `}
          // CRUCIAL ADDITION: We explicitly define the scale for the non-current slides
          style={{
            transform:
              index !== current ? "scale(1.15) translateY(-5%)" : undefined,
            transitionDuration: "1500ms", // Match fade duration for smooth scale reset
            transitionProperty:
              index !== current ? "opacity, transform" : "opacity",
          }}
        />
      ))}

      {/* ... (rest of the component) ... */}
    </div>
  );
}
