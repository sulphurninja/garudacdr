import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ImageForensics() {
  return (
    <div className=''>
    <Link href='https://29a.ch/photo-forensics/#forensic-magnifier'>
    <motion.div whileHover={{
         scale: 1.05,
         transition: { duration: 0.2 },
       }} className=' cursor-pointer '>
         <img src='imageforensics.png' className=' h-6 md:h-10' />
         </motion.div>
         </Link>
     </div>
 
  )
}
