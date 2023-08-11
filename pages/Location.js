import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import shortenURL from './api/shorten';
import Coordinates from '../components/Coordinates';

export default function Location() {
  const [originalURL, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedURL] = useState('');




  const handleSubmit = async () => {
    event.preventDefault();
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: originalURL }),
      });

      const data = await response.json();
      console.log('Shortened URL:', data);
      // Do something with the shortened URL response, e.g., update state, display it on the page

      setShortenedURL(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log(shortenedUrl, "WOWOWOWOWOW")

  return (
    <div className=" h-screen w-screen absolute ">

      <video autoPlay muted className="absolute  object-cover   w-full h-full">  {/** Background Video */}
        <source src="/bg.mp4" type="video/mp4" />
        Update your system atleast!
      </video>
      <div className='h-[10%] w-[20%] md:w-[10%] md:h-[20%] absolute  '>
        <Link href='/'>
          <img src='/logo.png' className='h-full w-full' />
        </Link>
      </div>

      <div className='h-[5%] absolute md:mt-[-8%]  mt-[-18%] w-full'>
        <Header />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className='mt-[65%] md:mt-[15%] w-[10%] h-[50%] md:w-[50%] md:h-[60%] absolute md:ml-[25%]   ml-[10%] text-center'
      >
      <h1 className='text-white text-sm font-mono font-bold '>Copy the following link into the shortner:</h1>
      <h1 className='text-white font-mono font-bold pt-4 '>https://garudacdr.vercel.app/Attack</h1>
        {/* <img src='/rto.png' className='h-full w-full md:block hidden rounded-3xl' /> */}
        <form className='-mt-12' onSubmit={handleSubmit}>
          <input
            type="text"
            value={originalURL}
            onChange={(e) => setOriginalUrl(e.target.value)}

            className='bg-white absolute h-12 md:h-14 px-4 text-black font-mono border-4 border-green-400 md:mt-[10%] md:ml-[-20%]  rounded-xl  '
          />
          <button className='bg-blue-400 font-bold font-mono hover:bg-blue-700 text-white   rounded-xl absolute mt-[200%] md:mt-[10%] md:ml-[20%] md:p-4  px-4' type="submit">Submit</button>
        </form>
        {shortenedUrl && (
        <div className='absolute text-white md:mt-[25%] md:ml-[30%] md:w-[50%] mt-[102%] leading-10 ml-[5%] font-mono font-bold md:text-2xl text-sm'>
          {shortenedUrl.error ? (
            <p className='text-red-600 font-bold animate-pulse'>⚠️ Error Occurred!!!</p>
          ) : (
            <div className='text-sm grid text-white  grid-cols-2 gap-x-4'>
            {shortenedUrl.result_url}
            </div>
          )}
        </div>
      )}
     
      </motion.div>


    </div>
  );
}


