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
          <Video url='/videos/sams.mov' />
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
          title='Apple'
          description='Modern'
          paragraphs={[
            <p key={1}>
              This CMS is designed specifically for managing content for phone apps. I&apos;ve developed a robust
              Content Management System (CMS) tailored to empower businesses in efficiently and securely managing their
              digital content. Let&apos;s delve into its key features:
            </p>,
            <p key={2}>
              <strong>Role-Based Access Control (RBAC):</strong> Implementing RBAC ensures that users navigate the CMS
              with tailored permissions, accessing only the features and content pertinent to their roles. This enhances
              security and streamlines workflows.
            </p>,
            <p key={3}>
              <strong>Intuitive Content Management:</strong> Seamless content creation, editing, and management through
              intuitive interfaces. From text to multimedia elements like images, videos, and documents, every aspect of
              content is easily maneuvered within the CMS.
            </p>,
            <p key={4}>
              <strong>Scheduled Content Publication:</strong>
              Flexibility is key. Users can schedule content for publication at specific dates and times, or choose to
              publish and unpublish content on demand. This feature empowers strategic content deployment, aligning with
              marketing campaigns and audience engagement strategies.
            </p>,
            <p key={5}>
              <strong>Integrated Analytics:</strong>
              Gain valuable insights into content performance and user engagement with integrated analytics. Track key
              metrics to refine content strategies and optimize digital experiences.
            </p>,
            <p key={6}>
              <strong>Dynamic Report Generation:</strong>
              Generate comprehensive reports effortlessly, offering actionable insights into content effectiveness and
              user behavior. These reports serve as invaluable tools for informed decision-making and continuous
              improvement.
            </p>,
          ]}
          tools={['Next.js (App Router)', 'TypeScript', 'Zod', 'Tailwind CSS', 'NextAuth.js', 'Prisma', 'PostgreSQL']}
        />
      </motion.div>
    </motion.section>
  );
}
