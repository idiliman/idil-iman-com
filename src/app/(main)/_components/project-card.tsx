import { cn } from '@/lib/utils';
import Image from 'next/image';
import Video from './video';
import { Suspense } from 'react';

type Props = {
  image?: string | undefined;
  title: string;
  description: string;
  height?: string | undefined;
  width?: string | undefined;
  videoUrl?: string | undefined;
};
export default function ProjectCard({
  description = 'Description',
  height,
  image,
  title = 'Title',
  width,
  videoUrl,
}: Props) {
  return (
    <div className='cursor-pointer flex flex-col space-y-2 flex-1'>
      <div
        className={cn(
          'border shadow-sm hover:shadow-lg rounded-md hover:-translate-y-1 transition aspect-square flex items-center justify-center bg-zinc-50',
          height ? `h-[${height}]` : 'h-auto',
          width ? `w-[${height}]` : 'w-auto'
        )}
      >
        {videoUrl ? (
          <Suspense fallback={<>Loading...</>}>
            <div className='p-4'>
              <Video url={videoUrl} />
            </div>
          </Suspense>
        ) : (
          <Image alt={title} src={image ?? ''} width={200} height={200} />
        )}
      </div>
      <div className='text-sm'>
        <h1 className='text-zinc-600'>{title}</h1>
        <p className='text-zinc-400'>{description}</p>
      </div>
    </div>
  );
}