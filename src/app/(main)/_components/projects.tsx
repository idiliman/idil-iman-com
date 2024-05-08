'use client';

import ProjectCard from './project-card';
import Divider from './divider';
import StacksCarousel from './carousell';

import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.section
      className='text-zinc-500'
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      initial='hidden'
      animate='show'
    >
      <Divider title='WORKS' className='py-5' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <ProjectCard image='/note-icon.png' title='Apple' description='Notes' />
        <ProjectCard videoUrl='/videos/sams.mov' title='Video' description='Video' />
      </div>
      <Divider title='HOBBY' className='py-5' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <ProjectCard image='/note-icon.png' title='Apple' description='Notes' />
        <ProjectCard videoUrl='/videos/sams.mov' title='Video' description='Video' />
      </div>
      <Divider title='STACKS' className='md:py-5 py-0' />
      <div className='relative h-[100px] md:h-[115px] w-full'>
        <StacksCarousel />
      </div>
    </motion.section>
  );
}
