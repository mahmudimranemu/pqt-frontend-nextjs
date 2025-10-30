"use client";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeaderProps {
  title: string;
  backgroundImage: string;
  description: string;
}
const PageHeader: React.FC<HeaderProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  // Track scroll position
  const { scrollY } = useScroll();
  // Map scroll position to background position for parallax
  const y = useTransform(scrollY, [0, 300], [0, 100]); // moves background 100px as you scroll

  return (
    <motion.header
      style={{
        backgroundImage: `url(${backgroundImage})`,
        y, // apply parallax motion
      }}
      className='w-full h-[70vh] bg-cover bg-center items-end pb-20 flex justify-center relative overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/80'></div>
      <div className='flex flex-col gap-3 lg:max-w-7xl z-10'>
        {/* Title animation */}
        <motion.h1
          className='relative text-white text-4xl md:text-6xl font-bold text-center px-4'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          {title}
        </motion.h1>
        <p className='text-white/70 max-w-3xl text-center'>{description}</p>
      </div>
    </motion.header>
  );
};

export default PageHeader;
