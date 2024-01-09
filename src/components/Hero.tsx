'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
    const headingWords = 'Turning Vision Into Reality With Code And Design';
    const HeroVariants = {
      initial: { y: -20, opacity: 0},
      animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };
  
    const headingVariants = {
      initial: {y: 20 , opacity: 0},
      animate: {y: 0, opacity: 1, transition: { duration: 1, delay: 0.5,staggerChildren: 0.08 }}
    }
    return (
      <motion.div className='flex flex-col lg:flex-row justify-between items-center lg:flex-wrap' initial='initial'
      animate='animate'
      variants={HeroVariants}>
        <div className='min-h-[300px] lg:min-h-[600px] w-full lg:w-1/3 bg-white rounded-2xl mb-4 lg:mb-0'/>
        <div className='flex flex-col gap-2 w-full lg:w-1/3'>
          <motion.span
          initial='initial'
          animate='animate'
          variants={headingVariants}
          className='text-4xl lg:text-5xl'
          >
            {
              headingWords.split(" ").map((word,i) => (
                <motion.span
                key={i}
                className='inline-block'
                >
                  {word}&nbsp;
                </motion.span>
              ))
            }
          </motion.span>
          <span className='text-sm lg:text-base'>
            I am a passionate and results-driven full-stack developer with a strong foundation in both front-end and back-end technologies. My journey in the world of development started with a fascination for creating seamless and engaging user interfaces, and over time, I evolved into a versatile developer comfortable working on all aspects of a project.
          </span>
          <div className='flex self-start gap-5'>
            <Link href='/dummy.pdf' target={'_blank'} className='border-1 bg-white text-black font-semibold p-3 rounded-2xl hover:scale-110 transition-all duration-150 onclick'>Resume</Link>
            <Link href='garg.target@gmail.com' target={'_blank'} className='border-1 bg-white text-black font-semibold p-3 rounded-2xl hover:scale-110 transition-all duration-150'>Contact</Link>
          </div>
        </div>
      </motion.div>
    );
};

export default Hero;