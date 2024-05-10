import { Skeleton } from './ui/skeleton';

type Props = {
  url: string;
};

export default function Video({ url }: Props) {
  return (
    <video
      aria-label='Video player'
      autoPlay
      loop
      muted
      className='h-full w-full'
      disablePictureInPicture
      playsInline
      controls={false}
    >
      <source src={url} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
}

export const VideoSkeleton = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <Skeleton className='h-[200px] w-[250px]' />
    </div>
  );
};
