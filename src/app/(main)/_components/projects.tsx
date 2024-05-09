'use client';

import ProjectCard from './project-card';
import Divider from './divider';
import StacksCarousel from './carousell';

import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.section
      className='text-zinc-500 w-full'
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
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { delay: 0.1 } },
        }}
      >
        <Divider title='WORKS' className='py-5' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <ProjectCard
            projectUrl='/sams'
            videoUrl='/videos/sams.mov'
            title='Sports Aviation Management System'
            description='CMS'
          />
        </div>
        <Divider title='HOBBY' className='py-5' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <ProjectCard image='/vercel.svg' title='CV GPT' description='CV Generator with AI' />
        </div>
        <Divider title='STACKS' className='md:py-5 py-0' />
        <div className='relative h-[100px] md:h-[115px] w-full'>
          <StacksCarousel />
        </div>
      </motion.div>
    </motion.section>
  );
}
