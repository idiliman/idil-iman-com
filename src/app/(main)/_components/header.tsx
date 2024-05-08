'use client';

import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

export default function Header() {
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
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{
          delay: 0.1,
          ease: 'easeOut',
          type: 'spring',
        }}
      >
        <p className='text-4xl'>Hello there,...</p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{
          delay: 0.1,
          ease: 'easeOut',
        }}
      >
        <h2>...</h2>
      </motion.div>
    </motion.section>
  );
}
