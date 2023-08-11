import React from 'react'
import { motion } from 'framer-motion'

export default function SDRAnalysis() {
  return (
    <div className=''>
    <motion.div whileHover={{
         scale: 1.05,
         transition: { duration: 0.2 },
       }} className=' cursor-pointer '>
         <img src='call1.png' className='md:h-12 h-8' />
         </motion.div>
     </div>
 
  )
}
