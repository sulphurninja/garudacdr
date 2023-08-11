import React from 'react'
import { motion } from 'framer-motion'

export default function DUMPAnalysis() {
  return (
    <div>
    <motion.div whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }} className=''>

      <label className='cursor-pointer'>

<img src='dump.png' className='md:h-24 h-12' />

<input
    type="file"
    className="hidden"
  />

</label>
        </motion.div>
    </div>
  )
}
