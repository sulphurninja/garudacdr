import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import UserNameAnalysis from '../components/UserNameAnalysis'
import {motion} from 'framer-motion'
import MobileNumberAnalysis from '../components/MobileNumberAnalysis'

export default function SocialAnalyzer() {
  return (
    <div className="justify-center min-h-screen overflow-hidden  ">

      <div className='flex md:ml-40 lg:ml-64 justify-evenly space-x-16 md:space-x-44  '>
        <Header />
        <div className=''>
          <Link href='/'>
            <img src='/logo.png' className='md:h-32  h-20   ' />
          </Link>
        </div>
      </div>
      <div className=' justify-evenly flex'>
      <Link href='http://109.106.255.65:9797'>
      <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <UserNameAnalysis/>
        </motion.div>
        </Link>
        <Link href='/Mobile'>
      <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <MobileNumberAnalysis/>
        </motion.div>
        </Link>
        </div>
    </div>
  )
}
