import React from 'react'
import { motion } from 'framer-motion';

export default function Header() {
  const variants = {
    initial: { opacity: 0, translateY: '-100%' },
    animate: { opacity: 1, translateY: '0%' }
  };

  return (
    <div className=' -mt-5' >
      <motion.div
        className=' '
        initial='initial'
        animate='animate'
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <img src="/header.png" alt="Header Image" className="md:h-36  h-24   " />
      </motion.div>
    </div>
  );
}
