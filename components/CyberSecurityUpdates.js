import React from 'react'
import { motion } from 'framer-motion'

export default function CyberSecurityUpdates() {
  return (
    <div className=''>
    <motion.div whileHover={{
         scale: 1.05,
         transition: { duration: 0.2 },
       }} className=' cursor-pointer '>
         <img src='call6.png' className='h-8 md:h-12 ' />
         </motion.div>
     </div>
 
  )
}
