import CDRAnalysis from '../components/CDRAnalysis'
import IPDRAnalysis from '../components/IPDRAnalysis'
import DUMPAnalysis from '../components/DUMPAnalysis'
import Location from '../components/Location'
import Header from '../components/Header'
import React, { useEffect } from 'react'
import SocialAnalyzer from '../components/SocialAnalyzer'
import UPIFinder from '../components/UPIFinder'
import Vehicle from '../components/Vehicle'
import CourtCheck from '../components/CourtCheck'
import { motion } from 'framer-motion'
import Fastag from '../components/Fastag'
import GPRSCDRAnalysis from '../components/GPRSCDRAnalysis'
import SDRAnalysis from '../components/SDRAnalysis'
import GasConnection from '../components/GasConnection'
import TimeConvertor from '../components/TimeConvertor'
import IMEIInfo from '../components/IMEIInfo'
import CellIDTracker from '../components/CellIDTracker'
import CyberSecurityUpdates from '../components/CyberSecurityUpdates'
import { Howl } from 'howler';
import Link from 'next/link'
import DomainTrace from '../components/Domain'
import FaceDetection from '../components/FaceDetection'
import ImageForensics from '../components/ImageForensics'
import CyberThreat from '../components/CyberThreat'
import YoutubeDelete from '../components/YoutubeDelete'
import UrlUnshorten from '../components/UrlUnshorten'

export default function Home() {
  return (
    <div className="justify-center min-h-screen overflow-hidden  ">
    <Head>
      <title>Home - Garuda</title>
    </Head>
      <div className='flex md:ml-40 lg:ml-64 justify-evenly space-x-16 lg:space-x-44  '>
        <Header />
        <div className=''>
          <Link href='/'>
            <img src='/logo.png' className='md:h-32  h-20   ' />
          </Link>
        </div>
      </div>

      <div className='grid  grid-cols-4 lg:grid-cols-4 mt-8 md:pl-10  lg:pl-24 mx-2 md:mx-0    gap-2  '>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <CDRAnalysis />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <IPDRAnalysis />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <DUMPAnalysis />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <GPRSCDRAnalysis />
        </motion.div>

      </div>
      <div className='lg:flex mt-8  lg:mx-0 justify-evenly'>
        <div className='grid grid-cols-3 md:grid-cols-3 mx-4 md:mx-0 lg:mx-0  lg:grid-cols-1 mt-10 lg:mt-4 md:pl-12 lg:pl-0  gap-4    '>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 3.2, ease: 'easeInOut' }}>
            <DomainTrace />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 3.8, ease: 'easeInOut' }}>
            <ImageForensics />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 4.2, ease: 'easeInOut' }}>
            <FaceDetection />
          </motion.div>

        </div>
        <div className='grid lg:grid-cols-1 grid-cols-3 md:pl-12 mx-4 md:mx-0 lg:mx-0  gap-4 lg:mt-4 mt-10  '>
          <Link href='/IMEInfo'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 4.6, ease: 'easeInOut' }}>
              <IMEIInfo />
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 5.0, ease: 'easeInOut' }}>
            <CellIDTracker />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 5.6, ease: 'easeInOut' }}>
            <CyberSecurityUpdates />
          </motion.div>

        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 ml-12  lg:ml-0 md:pl-12    lg:gap-10 gap-6 lg:mt-4 mt-10  '>
          <Link href='/SocialAnalyzer'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.01, ease: 'easeInOut' }}>
              <SocialAnalyzer />
            </motion.div>
          </Link>
          <Link href='/Location'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}>
              <Location />
            </motion.div>
          </Link>
          <Link href='/UPIFinder'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}>
              <UPIFinder />
            </motion.div>
          </Link>
          <Link href='/VehicleSearch'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 2.1, ease: 'easeInOut' }}>
              <Vehicle />
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}>
            <CourtCheck />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2.8, ease: 'easeInOut' }}>
            <Fastag />
          </motion.div>
        </div>

        <div className='grid grid-cols-3 lg:grid-cols-1 mx-4 md:mx-0 lg:mx-0 mt-10 lg:mt-4  md:pl-12  gap-4    '>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 3.2, ease: 'easeInOut' }}>
            <SDRAnalysis />
          </motion.div>

          <Link href='/TimeConvertor'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 3.8, ease: 'easeInOut' }}>
              <TimeConvertor />
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 4.2, ease: 'easeInOut' }}>
            <GasConnection />
          </motion.div>

        </div>
        <div className='grid grid-cols-3 lg:grid-cols-1 mx-4 md:mx-0 lg:mx-0 mt-10 lg:mt-4 md:pl-12   gap-4    '>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 3.2, ease: 'easeInOut' }}>
            <CyberThreat />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 3.8, ease: 'easeInOut' }}>
            <YoutubeDelete />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 4.2, ease: 'easeInOut' }}>
            <UrlUnshorten />
          </motion.div>

        </div>
      </div>
      <div className='text-center mt-16 hidden md:block lg:text-xl font-mono'>
        <h1 className='text-white'>© Garuda Intelligence Software - A3M NextGen Pvt.Ltd</h1>
      </div>
      {/* */}
    </div>
  )
}
