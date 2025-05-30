"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.section
      className="text-zinc-500 sticky top-0 hidden lg:flex"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{
          delay: 0.1,
          ease: "easeOut",
          type: "spring",
        }}
      >
        {/* <p className='text-4xl'>Fullstack Developer</p> */}
        <h1>Header</h1>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{
          delay: 0.1,
          ease: "easeOut",
        }}
      >
        {/* <h2>Lets keep those pixels popping !!</h2> */}
      </motion.div>
    </motion.section>
  );
}
