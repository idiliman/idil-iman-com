import Video, { VideoSkeleton } from '@/components/video';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Suspense, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Link2 } from 'lucide-react';

type Props = {
  image?: string | undefined;
  title: string;
  description: string;
  height?: string | undefined;
  width?: string | undefined;
  videoUrl?: string | undefined;
  hoverItems?: JSX.Element[] | undefined;
  initialPlaybackRate?: number;
};
export default function ProjectCard({
  description = 'Description',
  height,
  image,
  title = 'Title',
  width,
  videoUrl,
  hoverItems,
  initialPlaybackRate,
}: Props) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className='flex flex-col space-y-2 flex-1'
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      onClick={() => setShowOverlay(!showOverlay)}
    >
      <div
        className={cn(
          'relative border shadow-sm hover:shadow-lg rounded-md hover:-translate-y-1 transition aspect-square flex items-center justify-center bg-zinc-50 w-full h-full'
        )}
      >
        {videoUrl ? (
          <Suspense fallback={<VideoSkeleton />}>
            <Video url={videoUrl} initialPlaybackRate={initialPlaybackRate} className='h-[90%] w-full' />
          </Suspense>
        ) : (
          <Image alt={title} src={image ?? ''} width={200} height={200} />
        )}

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
              <div className='space-x-2 flex'>{hoverItems}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='text-sm'>
        <h1 className='text-zinc-600'>{title}</h1>
        <p className='text-zinc-400'>{description}</p>
      </div>
    </motion.div>
  );
}
