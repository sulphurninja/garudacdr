import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DomainTrace() {
  return (
    <div className=''>
    <Link href='https://crt.sh/'>
    <motion.div whileHover={{
         scale: 1.05,
         transition: { duration: 0.2 },
       }} className=' cursor-pointer '>
         <img src='domain.png' className=' h-6 md:h-10' />
         </motion.div>
         </Link>
     </div>
 
  )
}
