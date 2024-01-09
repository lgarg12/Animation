'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
      <motion.div
        className='flex items-center justify-center rounded-full font-semibold bg-gray-800 text-white py-3 px-6 shadow-dark cursor-pointer absolute'
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        animate={{ x: inView ? x : 0, y: inView ? y : 0 }}
        transition={{ duration: 1.5 }}
        ref={ref}
      >
        {name}
      </motion.div>
    );
};

const Skills = () => {
  return (
    <div>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full'>
        <Skill name='HTML' x={'-5vw'} y={'-10vw'} />
        <Skill name='CSS' x={'-30vw'} y={'-3vw'} />
        <Skill name='Tailwind' x={'20vw'} y={'6vw'} />
        <Skill name='Postman' x={'0vw'} y={'12vw'} />
        <Skill name='Express.js' x={'-20vw'} y={'-15vw'} />
        <Skill name='Docker' x={'25vw'} y={'-15vw'} />
        <Skill name='Postgres' x={'32vw'} y={'-5vw'} />
        <Skill name='MongoDB' x={'0vw'} y={'-20vw'} />
        <Skill name='ReactJS' x={'5vw'} y={'-10vw'} />
        <Skill name='GraphQL' x={'2vw'} y={'2vw'} />
        <Skill name='TypeScript' x={'-20vw'} y={'6vw'} />
        <Skill name='Next.js' x={'-15vw'} y={'0vw'} />
        <Skill name='Framer Motion' x={'15vw'} y={'0vw'} />
      </div>
    </div>
  );
};

export default Skills;
