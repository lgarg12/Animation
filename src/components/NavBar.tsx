'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

const NavBar = () => {
  const router = usePathname();
  const Variants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
    className='flex justify-between items-center mt-5'
    initial='initial'
    animate='animate'
    variants={Variants} 
    >
      <div className='flex gap-3'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/projects'}>Projects</Link>
      </div>
      <div>
        LAKSHAY GARG
      </div>
    </motion.div>
  );
};

export default NavBar;
