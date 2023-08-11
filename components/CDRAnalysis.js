import React, { useState } from 'react'
import { parseCSV, smartSaveToExcel, fullSaveToExcel, findMaxSMS, findCommonCaller, findCommonIMEI, findMaxDurationCallers } from './../utils/csvParser';
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import { FiCloudLightning, FiCode, FiCpu, FiPower } from 'react-icons/fi'
import { Swipeable } from 'react-swipeable';
import Modal from './Modal';

export default function CDRAnalysis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [commonCaller, setCommonCaller] = useState(null);
  const [longDurationCaller, setLongDurationCaller] = useState(null);
  const [commonIMEI, setCommonIMEI] = useState(null);
  const [maxSMS, setMaxSMS] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [csvData, setCsvData] = useState(null); // Add state for csvData
  const totalSlides = 5;


  const Router = useRouter();



  const pageReload = () => {

    Router.reload()


  }

  const sheetNames = ['Common Callers', 'Max Duration Callers', 'Common IMEI', 'Max SMS'];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setParsedData(null); // Reset parsedData state before uploading new file
    handleUpload(file); // Call handleUpload when file is selected
  };

  const handleUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const csvData = event.target.result;
        setCsvData(csvData); // Save the csvData in state
        const parsedData = parseCSV(csvData);
        setIsLoading(true);
        setTimeout(() => {
          console.log('Parsed Data:', parsedData);
          setParsedData(parsedData);
          setCommonCaller(findCommonCaller(parsedData));
          setLongDurationCaller(findMaxDurationCallers(parsedData));
          setMaxSMS(findMaxSMS(parsedData));
          setCommonIMEI(findCommonIMEI(parsedData));
          setIsLoading(false);
        }, 2000);
        setShowModal(true);
      };
      reader.readAsText(file);
    }
  };

  const handleDownloadExcel = () => {
    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/[-:]/g, '').replace('T', '_').slice(0, -5);

    // Use the formatted date as the file name
    const fileName = `${formattedDate}.xlsx`;

    if (parsedData) {
      smartSaveToExcel(csvData, sheetNames, fileName);
    }
  };

  const handleFullDownloadExcel = () => {
    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/[-:]/g, '').replace('T', '_').slice(0, -5);

    // Use the formatted date as the file name
    const fileName = `${formattedDate}.xlsx`;

    if (parsedData) {
      fullSaveToExcel(csvData, sheetNames, fileName);
    }
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousSlide = () => {
    setActiveSlideIndex((prevIndex) => prevIndex - 1);
  };





  const renderSlideContent = () => {
    switch (activeSlideIndex) {
      case 0:
        return (
          <div className="  ">



            {/**/}
            {/* 
                    {/* {index === 0 && (
                      <h1 className="text-xs    text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
                    )} */}
            {/* */}
            {/* </div> */}
            {/* ))} */}
            {/* </div> */}
            {/* // ) : (
            //   <p>{commonCaller}</p>
            // )} */}
          </div>
        );
      case 1:
        return (
          <div className=" rounded-xl  absolute h-[40%] w-[95%] ml-[18%]   md:w-[70%] md:h-[80%] md:ml-[55%] md:mt-[18%] mt-[100%] z-50  ">

            <img src="/3.png" className="h-[100%] w-[100%] rounded-2xl " />

            {Array.isArray(longDurationCaller) ? (
              <div className="grid grid-cols-1 w-[80%] ml-[8%] h-[70%] md:overflow-visible overflow-y-scroll  lg:mt-[-49%] md:ml-[15%] mt-[-70%]">
                {longDurationCaller.map((caller, index) => (
                  <div key={index} className="flex">
                    {/* {index === 0 && (
                      <h1 className="text-2xl absolute w-full -mt-14 ml-[200%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
                    )} */}
                    <p className="text-xs md:text-xl text-white font-bold mb-2">{caller.number}</p>
                    <p className="text-[10px] text-green-500 pl-4 font-bold ">Duration: {caller.duration}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>{longDurationCaller}</p>
            )}
          </div>
        );
      case 2:
        return (
          <div className=" rounded-xl  absolute h-[40%] w-[95%] ml-[18%]   md:w-[70%] md:h-[80%] md:ml-[55%] md:mt-[18%] mt-[100%] z-50  ">

            <img src="/4.png" className="h-[100%] w-[100%] rounded-2xl " />
            {Array.isArray(commonIMEI) ? (
              <div className="grid grid-cols-1 w-[80%] ml-[8%] h-[70%] md:overflow-visible overflow-y-scroll  lg:mt-[-49%] md:ml-[15%] mt-[-70%]">
                {commonIMEI.map((caller, index) => (
                  <div key={index} className="flex">
                    {/* {index === 0 && (
                      <h1 className="text-2xl absolute w-full -mt-14 ml-[130%] text-yellow-200 font-bold font-mono">{`📱 ${caller} `}</h1>
                    )} */}
                    <p className="text-xs md:text-xl text-white font-bold mb-2">{caller.imei}</p>
                    <p className="text-[10px] text-green-500 pl-4 font-bold ">Count: {caller.count}</p>

                  </div>
                ))}
              </div>
            ) : (
              <p>{commonIMEI}</p>
            )}
          </div>
        );
      case 3:
        return (
          <div className=" rounded-xl  absolute h-[40%] w-[95%] ml-[18%]   md:w-[70%] md:h-[80%] md:ml-[55%] md:mt-[18%] mt-[100%] z-50  ">

            <img src="/6.png" className="h-[100%] w-[100%] rounded-2xl " />
            {Array.isArray(maxSMS) ? (
              <div className="grid grid-cols-1 w-[80%] ml-[8%] h-[70%] md:overflow-visible overflow-y-scroll  lg:mt-[-49%] md:ml-[15%] mt-[-70%]">
                {maxSMS.map((caller, index) => (
                  <div key={index} className="flex">
                    {/* {index === 0 && (
                      <h1 className="text-2xl absolute w-full -mt-14 ml-[130%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
                    )} */}

                    <p className="text-xs md:text-xl text-white font-bold mb-2">{caller.number}</p>
                    <p className="text-xs text-green-500 pl-4 font-bold ">Count: {caller.count}</p>


                  </div>
                ))}
              </div>
            ) : (
              <p>{longDurationCaller}</p>
            )}
          </div>
        )
      //   case 4:
      //     return (
      //       <div className="opacity-95 rounded-xl w-[90%] h-screen">
      //         <div className="h-[65%] w-[65%] bg-black mt-12">
      //           <img src="/5.png" className="absolute h-[80%] w-[80%] md:-mt-20" />
      //         </div>
      //         {Array.isArray(longDurationCaller) ? (
      //           <div className="grid grid-cols-1 -mt-80 ml-80 absolute">
      //             {longDurationCaller.map((caller, index) => (
      //               <div key={index} className="flex">
      //                 {index === 0 && (
      //                   <h1 className="text-2xl absolute w-full -mt-14 ml-[130%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
      //                 )}
      //                 <p className="text-2xl text-white font-bold mb-2">{caller.number}</p>
      //                 <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Count: {caller.count}</p>
      //                 <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Incoming: {caller.incoming}</p>
      //                 <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Outgoing: {caller.outgoing}</p>
      //               </div>
      //             ))}
      //           </div>
      //         ) : (
      //           <p>{longDurationCaller}</p>
      //         )}
      //       </div>
      //     )

      //   
    }
  };

  return (
    <div className='cursor-pointer'>

      <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className=''>

        <label className='cursor-pointer'>

          <img src='cdr.png' className='md:h-24 h-12' />

          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}

          />
        </label>

      </motion.div>


      {parsedData && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inset-0 absolute flex items-center h-[100%] w-[100%]  justify-center "
        >


          {/* Slide content */}

          <div className=' h-screen  w-screen'>
            <div className=' w-full '>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)} parsedData={parsedData} />
              {renderSlideContent()}
              <div className='md:ml-[80%] ml-[60%] mt-[2%]  fixed z-50 '>
                <button className='text-black font-mono font-bold text-xl' onClick={handleDownloadExcel}>
                  <div className='flex gap-2 bg-white rounded-lg px-2 hover:bg-green-500'>
                    <FiCpu className='mt-1' />
                    <h1 className=''>Smart Report</h1>
                  </div>
                  </button>
                  <button className='text-black font-mono font-bold text-xl' onClick={handleFullDownloadExcel}>
                  <div className='flex gap-2 bg-white rounded-lg mt-4 px-2 hover:bg-green-500'>
                    <FiCode className='mt-1' />
                    <h1 className=''>Full Analysis</h1>

                  </div>

                </button>
              </div>
            </div>
            {/* */}
          </div>
          {/* <button className='bg-red-500 h-6 -ml-12 w-6 z-50 mt-2 text-white rounded-lg'
              onClick={() => {
                setSelectedFile(null);
                setCommonCaller(null);
                setLongDurationCaller(null);
                setCommonIMEI(null);
                setParsedData(null);
                setActiveSlideIndex(0);
                pageReload();
              }}>X
              </button> */}
          {/* Navigation buttons */}

          {/*  */}
          {/* </div> */}
        </motion.div>
      )}
    </div>
  )
}
