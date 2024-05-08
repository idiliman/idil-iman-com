'use client';

import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import ProjectCard from './project-card';

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
      <div className='mb-4'>
        <Separator className='my-4' />
        <h1 className='text-xs'>PROJECTS</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6'>
        <ProjectCard image='/note-icon.png' title='Apple' description='Notes' />
        <ProjectCard image='/note-icon.png' title='Apple' description='Notes' />
        <ProjectCard image='/note-icon.png' title='Apple' description='Notes' />
        <ProjectCard videoUrl='/videos/sams.mov' title='Video' description='Video' />
      </div>
    </motion.section>
  );
}
