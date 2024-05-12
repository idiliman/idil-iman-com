'use client';

import ProjectDetails from '../../_components/project-details';
import Video, { VideoSkeleton } from '@/components/video';

import { motion } from 'framer-motion';
import { Suspense } from 'react';

export default function CvGptClient() {
  return (
    <motion.section
      className='flex flex-col items-center justify-center space-y-9 flex-1'
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
        className='px-[40px] py-[20px] bg-zinc-50 h-full
         w-full'
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { delay: 0.1 } },
        }}
      >
        <Suspense fallback={<VideoSkeleton />}>
          <Video url='/videos/cvgpt.mov' />
        </Suspense>
      </motion.div>
      <motion.div
        className='px-6 md:px-0 text-sm md:text-base w-full h-full'
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { delay: 0.1 } },
        }}
      >
        <ProjectDetails
          className='max-w-3xl h-full mx-auto '
          title='CV GPT'
          description=''
          paragraphs={[
            <p key={1}>
              CV GPT is a web app that generates a cover letter based on the user&apos;s input. The app uses the OpenAI
              API to generate the content.
            </p>,
            <p key={1}>
              This is a hobby project that I built to learn how to use the OpenAI API and to experiment with it. I also
              add some features like rate limiting using Upstash (Redis) to prevent abuse of the API.
            </p>,
          ]}
          tools={[
            'Next.js (App Router)',
            'TypeScript',
            'Upstash (Redis) - Rate limiting',
            'OpenAI API',
            'Tailwind CSS',
          ]}
        />
      </motion.div>
    </motion.section>
  );
}
