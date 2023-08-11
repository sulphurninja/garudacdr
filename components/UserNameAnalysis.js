import React from 'react'
import { motion } from 'framer-motion'

export default function UserNameAnalysis() {
  return (
    <div className=''>
      <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className=''>
        <img src='username.png' className='h-40 md:h-56 ' />
      </motion.div>
    </div>

  )
}
