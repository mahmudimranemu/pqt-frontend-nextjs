"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; // Import X for close button

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type LightboxProps = {
  src: string;
  onClose: () => void;
  onNext: (e: any) => void;
  onPrev: (e: any) => void;
  hasMultiple?: boolean;
};

// Define the Lightbox component directly in this file for simplicity,
// or put it in components/Lightbox.tsx
const Lightbox = ({
  src,
  onClose,
  onNext,
  onPrev,
  hasMultiple,
}: LightboxProps) => (
  <div
    className='fixed inset-0 z-[500] bg-black/90 flex items-center justify-center p-4'
    onClick={onClose}>
    <div
      className='relative h-full max-h-[90vh] w-full max-w-5xl'
      onClick={(e) => e.stopPropagation()}>
      {/* Close Button */}
      <Button
        variant='ghost'
        size='icon'
        className='absolute top-4 right-4 z-50 bg-white/30 hover:bg-white/50 text-white rounded-full p-2'
        onClick={onClose}>
        <X className='h-6 w-6' />
      </Button>

      {/* Main Image in Lightbox */}
      <div className='relative w-full h-full bg-gray-800'>
        <Image
          src={src}
          alt='Lightbox view'
          fill
          objectFit='contain' // Use contain to show the full image within the screen
          className='cursor-default'
        />
      </div>

      {/* Navigation Buttons (Optional, only show if more than one image exists) */}
      {hasMultiple && (
        <>
          <Button
            variant='ghost'
            size='icon'
            className='absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/30 hover:bg-white/50 text-white rounded-full'
            onClick={onPrev}>
            <ChevronLeft className='h-8 w-8' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/30 hover:bg-white/50 text-white rounded-full'
            onClick={onNext}>
            <ChevronRight className='h-8 w-8' />
          </Button>
        </>
      )}
    </div>
  </div>
);

export default function PropertyImageSlider({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // NEW STATE: To control the visibility of the lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // ... (goToPrevious, goToNext, selectImage functions remain the same) ...
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Lightbox-specific handlers
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Handlers for lightbox navigation
  const lightboxGoToPrevious = (e: any) => {
    e.stopPropagation(); // Prevent closing the lightbox
    goToPrevious();
  };

  const lightboxGoToNext = (e: any) => {
    e.stopPropagation(); // Prevent closing the lightbox
    goToNext();
  };

  // Effect: Auto-slide feature cleanup (added pause when lightbox is open)
  useEffect(() => {
    if (isLightboxOpen) return; // Pause auto-slide when lightbox is open

    const interval = setInterval(
      () => setCurrentImageIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, [images.length, isLightboxOpen]); // Added isLightboxOpen to dependencies

  if (!images || images.length === 0) {
    return (
      <div className='text-center p-8 text-gray-500'>
        No property images to display.
      </div>
    );
  }

  // Current image URL for both slider and lightbox
  const currentImageUrl = images[currentImageIndex];

  return (
    <>
      {/* 1. Main Image Slider */}
      <div
        className='relative w-full h-[800px] bg-gray-200 overflow-hidden flex items-center justify-center cursor-pointer'
        onClick={openLightbox} // CLICKABLE AREA
      >
        <Image
          src={currentImageUrl}
          alt={`Main image ${currentImageIndex + 1}`}
          fill
          sizes='(max-width: 768px) 100vw, 80vw'
          objectFit='cover'
          className='object-cover transition-opacity duration-1000'
        />

        {/* Navigation Buttons (Prevent lightbox from opening when clicking buttons) */}
        <Button
          variant='ghost'
          size='icon'
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-gray-800 z-10' // Added z-10
          onClick={(e) => {
            e.stopPropagation(); // CRUCIAL: Stop event from bubbling to openLightbox
            goToPrevious();
          }}>
          <ChevronLeft className='h-6 w-6' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-gray-800 z-10' // Added z-10
          onClick={(e) => {
            e.stopPropagation(); // CRUCIAL: Stop event from bubbling to openLightbox
            goToNext();
          }}>
          <ChevronRight className='h-6 w-6' />
        </Button>
      </div>

      {/* 2. Thumbnail Preview (remains the same) */}
      <div className='flex'>
        {images.map((image, index) => (
          <div
            key={index}
            // ... (Thumbnail classes and onClick logic) ...
            className={cn(
              "relative w-full h-20 cursor-pointer overflow-hidden border-2 transition-all duration-200 opacity-50",
              currentImageIndex === index
                ? "border-blue-500 shadow-md rounded-md opacity-100"
                : "border-transparent hover:border-gray-300"
            )}
            onClick={() => selectImage(index)}>
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes='100px'
              objectFit='cover'
              className='brightness-90 hover:brightness-100 transition-brightness duration-200'
            />
          </div>
        ))}
      </div>

      {/* 3. Lightbox Conditional Render */}
      {isLightboxOpen && (
        <Lightbox
          src={currentImageUrl}
          onClose={closeLightbox}
          onNext={lightboxGoToNext}
          onPrev={lightboxGoToPrevious}
          hasMultiple={images.length > 1}
        />
      )}
    </>
  );
}
