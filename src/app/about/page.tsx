import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import laptop from '../../../public/Laptop.jpg'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
import Skills from '@/components/Skills'


const About = () => { // Changed from 'about' to 'About' for component naming convention
  return (
    <div className='min-h-screen bg-white text-black'>
    <div className='w-11/12 py-2 mx-auto flex flex-col gap-10'>
      <NavBar />
        <div className='text-4xl lg:text-8xl text-center'>Passion Fuels Purpose!</div>
        <div className='flex flex-col lg:flex-row gap-5 items-center'>
          <div className='flex flex-col gap-4 lg:w-1/2 xl:w-1/3'>
            <div className='uppercase font-semibold text-2xl lg:text-3xl'>Biography</div>
            <div className='text-sm lg:text-base'>
              I am a fervent technophile, deeply immersed in the intricacies of web development. My proficiency revolves around React.js and its associated animation libraries, such as Framer Motion. Specializing in frontend technologies, particularly Next.js, I meticulously engineer seamless and performant user interfaces with server-side rendering and a component-based architecture.
            </div>
            <div className='text-sm lg:text-base'>
              On the backend, I am a seasoned developer with a formidable command of the Express framework, excelling in both GraphQL and RESTful API design. Docker is an indispensable component of my toolkit, facilitating the efficient containerization of applications for streamlined deployment.
            </div>
            <div className='text-sm lg:text-base'>
              My passion extends to algorithmic problem-solving, exemplified by the successful resolution of approximately 500 questions on platforms like LeetCode. This robust foundation in data structures and algorithms empowers me to intricately optimize code for efficiency and scalability.
            </div>
          </div>
          <div className='border-4 border-solid border-gray-800 p-3 mt-5 lg:mt-0 inline-block'>
            <div className='border-4 border-solid border-white p-3'>
              <Image src={laptop} alt='laptop' className='h-[300px] lg:h-[600px] w-full object-cover' />
            </div>
          </div>
        </div>
        <Skills/>
      <Footer />
    </div>
    </div>
  );
};

export default About;
