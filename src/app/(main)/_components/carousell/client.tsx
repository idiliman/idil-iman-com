'use client';

import ContentCard from './content-card';

import { useEffect, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

export default function StacksCarouselClient() {
  const images = [
    { imgUrl: '/stacks/nodejs.svg', label: 'Node.js' },
    { imgUrl: '/stacks/react.svg', label: 'React' },
    { imgUrl: '/stacks/react-query.svg', label: 'React Query' },
    { imgUrl: '/stacks/nextjs.svg', label: 'Next.js' },
    { imgUrl: '/stacks/postgres.svg', label: 'Postgres' },
    { imgUrl: '/stacks/prisma.svg', label: 'Prisma' },
    { imgUrl: '/stacks/tailwindcss.svg', label: 'Tailwind CSS' },
    { imgUrl: '/stacks/postman.svg', label: 'Postman' },
    { imgUrl: '/stacks/docker.svg', label: 'Docker' },
    { imgUrl: '/stacks/redis.svg', label: 'Redis' },
  ];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width, mustFinish]);

  return (
    <div>
      <motion.div
        className='inset-x-0 flex gap-4 z-0 absolute w-full items-center justify-center'
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {images.map((item) => (
          <ContentCard key={item.imgUrl} imgUrl={`${item.imgUrl}`} label={item.label} />
        ))}
      </motion.div>
    </div>
  );
}
