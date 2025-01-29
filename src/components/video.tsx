"use client";

import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type Props = {
  url: string;
  initialPlaybackRate?: number;
  className?: string;
};

export default function Video({ url, initialPlaybackRate = 1, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.playbackRate = initialPlaybackRate;
    }
  }, [initialPlaybackRate]);

  return (
    <div className={cn("w-full h-[450px]", className)}>
      <video
        ref={ref}
        aria-label="Video player"
        autoPlay
        loop
        muted
        className="h-full w-full"
        disablePictureInPicture
        playsInline
        controls={false}
      >
        <source
          src={url}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export const VideoSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Skeleton className="h-[200px] w-[250px]" />
    </div>
  );
};
