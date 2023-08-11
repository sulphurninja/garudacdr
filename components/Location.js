import React from 'react'
import { motion } from 'framer-motion'

export default function Location() {
  return (
    <div className=''>
     <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className=' cursor-pointer '>
        <img src='middle1.png' className='h-10 md:h-20 ' />
        </motion.div>
    </div>
  )
}
