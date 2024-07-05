'use client';

import HoverItems from '@/app/(main)/_components/hover-items';
import ProjectDetails from '../../_components/project-details';
import Video, { VideoSkeleton } from '@/components/video';

import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, useState } from 'react';
import { GithubIcon, Link2, MoreHorizontal } from 'lucide-react';

export default function CvGptClient() {
  const [showOverlay, setShowOverlay] = useState(false);

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
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <div
          className={
            'relative border shadow-sm hover:shadow-lg rounded-md hover:-translate-y-1 transition aspect-square flex items-center justify-center bg-zinc-50 h-[500px] w-full overflow-hidden'
          }
        >
          <Suspense fallback={<VideoSkeleton />}>
            <Video url='/videos/cvgpt.mov' className='h-[300px] lg:h-[450px]' />
          </Suspense>
          {/* Hover overlay */}
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                className='absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className='absolute bg-slate-800/50 pointer-events-none opacity-50 h-full w-full' />
                <div className='space-x-2 flex'>
                  <HoverItems key={1} icon={<Link2 className='w-5 h-5' />} url='https://cv-gpt.vercel.app/' />,
                  <HoverItems key={2} icon={<MoreHorizontal className='w-5 h-5' />} url='/cv-gpt' blogUrl />,
                  <HoverItems
                    key={3}
                    icon={<GithubIcon className='w-5 h-5' />}
                    url='https://github.com/idiliman/cv-gpt'
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
