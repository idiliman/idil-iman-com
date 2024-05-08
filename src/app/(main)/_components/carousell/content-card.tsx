import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import Image from 'next/image';

type Props = {
  imgUrl: string;
  label: string;
};

export default function ContentCard({ imgUrl, label }: Props) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className='relative overflow-hidden h-[100px] min-w-[100px] rounded-xl flex justify-center items-center'
      key={imgUrl}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      {/* Hover overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className='absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full' />
            <motion.h1
              className='bg-white font-semibold text-sm z-10 p-1 rounded-full flex items-center gap-[0.5ch] hover:opacity-75'
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>{label}</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image src={imgUrl} alt={label} fill style={{ objectFit: 'contain' }} />
    </motion.div>
  );
}
