'use client';

import LinkText from '@/components/link-text';
import ProjectDetails from '../../_components/project-details';
import Video, { VideoSkeleton } from '@/components/video';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Suspense } from 'react';

export default function CaloriesTrackerAiClient() {
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
          <Video url='/videos/calories-tracker.mov' className='h-[300px] lg:h-[450px]' initialPlaybackRate={1.5} />
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
              Calories Tracker AI is a web app that uses OpenAI GPT4O to detect calories and macronutrients from the
              image provided by the user.
            </p>,
            <p key={1}>
              This project use{' '}
              <LinkText text='vercel AI sdk' href='https://sdk.vercel.ai/docs/ai-sdk-rsc/streaming-react-components' />{' '}
              with streaming UI.
            </p>,
          ]}
          tools={['Next.js (App Router)', 'TypeScript', 'OpenAI API (GPT4O)', 'Tailwind CSS']}
        />
      </motion.div>
    </motion.section>
  );
}
