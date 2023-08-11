import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Mobile() {
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState(null);
  const [profilePictureURL, setProfilePictureURL] = useState('');
  const [email, setEmail] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/mobile?phone=${phone}`);
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setResult({ error: 'An error occurred while fetching data from the API' });
    }
  };

  console.log(result);

  useEffect(() => {
    // Assuming you have the 'result' containing the user data, and it also has 'result.data[0].internetAddresses'
    if (result && result.data && result.data[0].internetAddresses) {
      // Find the internet address with service type 'email'
      const emailInternetAddress = result.data[0].internetAddresses.find(
        (address) => address.service === 'email'
      );

      if (emailInternetAddress) {
        setEmail(emailInternetAddress.id);
      }
    }
  }, [result]);

  

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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Mobile Number"
              className='bg-white  text-black font-mono border-4 border-gray-400 rounded-xl px-2 py-2 '
            />
            <button className='bg-white -400  font-bold font-mono hover:bg-green-200 -700 text-black   px-4 rounded-xl ' type="submit">Submit</button>
          </form>

        </motion.div>
        {/* TO be exported as a pdf */}
        {result && result.status && (
          <div className='printable-content bg-black mt-4 md:mt-0    rounded-xl border-2 border-white text-white font-mono    '>
            <button className=' bg-red-400  font-bold font-mono hover:bg-green-700 text-white  ml-52 md:ml-[60%]  px-6 rounded-xl ' >
              Export as PDF
            </button>
            <div className='flex'>
              <Link href='/'>
                <img src='/logo.png' className='garuda md:h-12  h-12  flex' />
              </Link>
              <h1 className='mx-2 headd pt-2 '>Garuda Analysis Report for {result.data[0].phones[0].e164Format}</h1>
            </div>
            {/* Display name */}
            <p className='text-center namee pt-2 font-bold md:text-2xl font-mono'>{result.data[0].name}</p>

            {/* Display image if available */}
            {result.data[0].image && (
              <img
                src={result.data[0].image}
                className='profile md:w-44 w-24 ml-32 mt-4 rounded-xl border-2 border-white'
                alt="User's profile"
              />
            )}
            {/* {profilePictureURL && (
              <img
                src={profilePictureURL}
                className='profile md:w-44 w-24 ml-32 mt-4 rounded-xl border-2 border-white'
                alt="User's profile"
              />
            )} */}
            {/* Display internetAddresses */}

            <ul className='mt-4 inter  text-sm md:text-lg mx-4'>
              {result.data[0].internetAddresses.map((address) => (
                <li className='font-bold' key={address.id}><span className='uppercase'>{address.service}</span>: {address.id}</li>
              ))}
            </ul>

            {/* Display carrier */}
            <p className=' carrier font-bold mx-4'><span className='underline  font-bold'>Carrier</span>: {result.data[0].phones[0].carrier}</p>
            <p className='phoneno font-bold mx-4' ><span className='underline  font-bold'>Phone No:</span>: {result.data[0].phones[0].e164Format}</p>
            <ul className='address  mx-4'>
              {result.data[0].addresses.map((addresses) => (
                <li className='font-bold' key={addresses.id}><span className=' underline  font-bold'>Address</span>: {addresses.address}</li>
              ))}
            </ul>

          </div>
        )}
      </div>
      {/* Updated Export as PDF button */}
      {/* Print button */}


    </div>
  );
}



