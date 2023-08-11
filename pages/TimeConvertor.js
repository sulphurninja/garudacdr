import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion'
import Link from 'next/link';

function TimeZoneConverter() {
    const [istTime, setIstTime] = useState('');
    const [utcTime, setUtcTime] = useState('');

    const handleIstTimeChange = (e) => {
        const istTime = e.target.value;
        setIstTime(istTime);

        // Convert IST to UTC
        const [time, period] = istTime.split(' ');
        const [hours, minutes] = time.split(':');
        let utcHours = parseInt(hours);
        let utcMinutes = parseInt(minutes);
        if (utcHours !== 12) {
            utcHours += 12;
        } else if (utcHours === 12) {
            utcHours = 0;
        }
        utcHours += 6;
        utcMinutes += 30;
        if (utcMinutes >= 60) {
            utcHours += Math.floor(utcMinutes / 60);
            utcMinutes %= 60;
        }
        if (utcHours >= 24) {
            utcHours %= 24;
        }
        const utcTime = `${utcHours.toString().padStart(2, '0')}:${utcMinutes.toString().padStart(2, '0')}`;
        setUtcTime(utcTime);
    };

    const handleUtcTimeChange = (e) => {
        const utcTime = e.target.value;
        setUtcTime(utcTime);

        // Convert UTC to IST
        const [hours, minutes] = utcTime.split(':');
        let istHours = parseInt(hours);
        let istMinutes = parseInt(minutes);
        istHours -= 6;
        istMinutes -= 30;
        if (istMinutes < 0) {
            istHours -= 1;
            istMinutes += 60;
        }
        if (istHours < 0) {
            istHours += 24;
        }

        if (istHours >= 12) {

            if (istHours > 12) {
                istHours -= 12;
            }
        }
        if (istHours === 0) {
            istHours = 12;
        }
        const istTime = `${istHours.toString().padStart(2, '0')}:${istMinutes.toString().padStart(2, '0')} `;
        setIstTime(istTime);
    };
    return (
        <div className='h-screen w-screen'>

            <video autoPlay muted className="absolute inset-0 object-cover w-full h-full">  {/** Background Video */}
                <source src="/bg.mp4" type="video/mp4" />
                Update your system atleast!
            </video>
            <div className='h-[10%] w-[20%] md:w-[10%] md:h-[20%] absolute  '>

                <Link href='/'>
                    <img src='/logo.png' className='h-full w-full' />
                </Link>

            </div>
            <div className='h-[5%] absolute md:mt-[-8%]  mt-[-22%] w-full'>
                <Header />
            </div>




            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='mt-[15%] w-[50%]  ml-[25%] text-center absolute'
            >
                {/*<img src='/convert.png' className='absolute rounded-3xl' />*/}

                <div className='md:mt-[30%] mt-[70%] text-white md:w-[50%] w-[150%] flex absolute md:ml-[22%] ml-[-22%]'>
                    <label className='font-bold text-2xl pt-2 font-mono' htmlFor="utcTime">UTC:</label>
                    <input
                        type="text"
                        id="utcTime"
                        value={utcTime}
                        onChange={handleUtcTimeChange}
                        className='w-full text-black font-mono h-12 rounded-xl px-4'
                        placeholder="Enter time in UTC (hh:mm)"
                    />
                </div>
                <div className='md:mt-[10%] mt-[30%] text-white md:w-[50%] w-[150%] flex absolute md:ml-[22%] ml-[-22%]'>
                    <label className='font-bold text-2xl pt-2 font-mono ' htmlFor="istTime">IST:</label>
                    <input
                        type="text"
                        id="istTime"
                        value={istTime}
                        onChange={handleIstTimeChange}
                        className='w-full h-12 text-black font-mono rounded-xl px-4'
                        placeholder="Enter time in IST (hh:mm )"
                    />
                </div>
            </motion.div>
        </div>
    );
}

export default TimeZoneConverter;
