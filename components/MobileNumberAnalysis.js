import React from 'react'
import { motion } from 'framer-motion'

export default function MobileNumberAnalysis() {
  return (
    <div className=''>
      <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className=''>
        <img src='mobile.png' className='md:h-56 h-40  ' />
      </motion.div>
    </div>

  )
}
