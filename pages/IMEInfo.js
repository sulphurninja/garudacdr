import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function IMEIInfo() {
    const [imei, setImei] = useState('');
    const [result, setResult] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/imei?imei=${imei}`);
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setResult({ error: 'An error occurred while fetching data from the API' });
    }
  };

  return (
    <div className="justify-center min-w-screen  ">
      <div className='flex md:ml-40 lg:ml-64 justify-evenly space-x-16 md:space-x-44  '>
        <Header />
        <div className=''>
          <Link href='/'>
            <img src='/logo.png' className='md:h-32  h-20   ' />
          </Link>
        </div>
      </div>

     <div className='md:flex justify-evenly '>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className=''
        >
          <form onSubmit={handleSubmit} className='justify-evenly  space-x-4 flex md:ml-18 mx-16 mt-20'>
          <input
            type="text"
            value={imei}
            onChange={(e) => setImei(e.target.value)}
            placeholder="Enter IMEI Info"
            className='bg-white  text-black font-mono border-4 border-gray-400 rounded-xl px-2 py-2 '
          />
          <button className='bg-white -400  font-bold font-mono hover:bg-green-200 -700 text-black   px-4 rounded-xl ' type="submit">Submit</button>
        </form>
      </motion.div>

      {result && (
        <div className='absolute text-white mt-[32%] leading-10 ml-[30%] font-mono font-bold text-2xl'>
          {result.error ? (
            <p className='text-red-600 font-bold animate-pulse'>⚠️ Error Occurred!!!</p>
          ) : (
            <div>
              <p className=' text-sm  text-green-400'> Brand Name: {result.response.brand_name}</p>
              <p className='text-md text-green-400'> Model Name: {result.response.model_name}</p>
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
}


