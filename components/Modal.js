import { useState } from 'react';
import { findMaxSMS, findCommonCaller, findCommonIMEI, findMaxDurationCallers } from './../utils/csvParser';
import { useRouter } from 'next/router';

const Modal = ({ isOpen, onClose, parsedData }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [commonCaller, setCommonCaller] = useState(null);
    const [longDurationCaller, setLongDurationCaller] = useState(null);
    const [commonIMEI, setCommonIMEI] = useState(null);
    const [maxSMS, setMaxSMS] = useState(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const totalSlides = 4;
    const imageSources = ['/3.png', '/2.png', '/4.png',  '/6.png'];


    const handleBackgroundClick = () => {
        if (!isClosing) {
            setIsClosing(true);
            setTimeout(() => {
                onClose();
            }, 300);
        }
    };

    const handleModalClick = (event) => {
        event.stopPropagation();
    };


    setTimeout(() => {
        console.log('Parsed Data:', parsedData);
        setCommonCaller(findCommonCaller(parsedData));
        setLongDurationCaller(findMaxDurationCallers(parsedData));
        setMaxSMS(findMaxSMS(parsedData));
        setCommonIMEI(findCommonIMEI(parsedData));
    }, 2000);

    const handleNextSlide = () => {
        setActiveSlideIndex((prevIndex) => prevIndex + 1);
    };

    const handlePreviousSlide = () => {
        setActiveSlideIndex((prevIndex) => prevIndex - 1);
    };

    const Router = useRouter();

    const pageReload = () => {

        Router.reload()


    }


    const renderSlides = () => {

        switch (activeSlideIndex) {
            case 0:
                return (
                    <div>
                        {
                            Array.isArray(longDurationCaller) ? (
                                <div className="grid grid-cols-1 md:h-[65%] md:mt-24 lg:mt-32 md:ml-56    overflow-y-scroll md:overflow-visible fixed mt-12  ml-10 h-[15%] ">
                                    {longDurationCaller.map((caller, index) => (
                                        <div key={index} className="flex">
                                            {/* {index === 0 && (
                <h1 className="text-2xl absolute w-full -mt-14 ml-[200%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
              )} */}
                                            <p className="text-sm md:text-xl lg:text-4xl text-white font-bold ">{caller.number}</p>
                                            <p className="text-sm md:text-xl lg:text-4xl text-green-500 pl-4 font-bold ">Duration: {caller.duration} sec</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>{longDurationCaller}</p>
                            )
                        }
                    </div>
                );
            case 1:
                return (
                    <div>
                        {
                            Array.isArray(commonCaller) ? (
                                <div className="grid grid-cols-1 md:h-[65%] md:mt-24 lg:mt-32 md:ml-56    overflow-y-scroll md:overflow-visible fixed mt-12  ml-2 h-[15%] ">
                                    {commonCaller.map((caller, index) => (
                                        <div key={index} className="flex">
                                            {/* {index === 0 && (
                    <h1 className="text-2xl absolute w-full -mt-14 ml-[200%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
                  )} */}
                                            <p className="text-xs md:text-xl lg:text-4xl text-white font-bold ">{caller.number}</p>
                                            <p className="text-xs md:text-xl lg:text-4xl text-green-500 pl-4 font-bold ">Count: {caller.count} </p>
                                            <p className="text-xs md:text-xl lg:text-4xl text-green-500 pl-2 font-bold ">Incoming: {caller.incoming} </p> <p className="text-xs md:text-xl lg:text-4xl text-green-500 pl-2 font-bold ">Outgoing: {caller.outgoing} </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>{commonCaller}</p>
                            )
                        }
                    </div>
                );

            case 2:
                return (
                    <div>
                        {
                            Array.isArray(commonIMEI) ? (
                                <div className="grid grid-cols-1 md:h-[65%] md:mt-24 lg:mt-32 md:ml-56    overflow-y-scroll md:overflow-visible fixed mt-12  ml-10 h-[15%] ">
                                    {commonIMEI.map((caller, index) => (
                                        <div key={index} className="flex">
                                            {/* {index === 0 && (
                <h1 className="text-2xl absolute w-full -mt-14 ml-[200%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
              )} */}
                                            <p className="text-sm md:text-xl lg:text-4xl text-white font-bold ">{caller.imei}</p>
                                            <p className="text-sm md:text-xl lg:text-4xl text-green-500 pl-4 font-bold ">Count: {caller.count} </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>{commonIMEI}</p>
                            )
                        }
                    </div>
                );
            case 3:
                return (
                    <div>
                        {
                            Array.isArray(maxSMS) ? (
                                <div className="grid md:grid-cols-2 md:h-[65%] md:mt-24 lg:mt-32 md:ml-64    overflow-y-scroll md:overflow-visible fixed mt-12  ml-10 h-[15%] ">
                                    {maxSMS.map((caller, index) => (
                                        <div key={index} className="flex">
                                            {/* {index === 0 && (
        <h1 className="text-2xl absolute w-full -mt-14 ml-[200%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
      )} */}
                                            <p className="text-sm md:text-xl lg:text-4xl text-white font-bold md:pl-4 ">{caller.number}</p>
                                            <p className="text-sm md:text-xl lg:text-4xl text-green-500 pl-4 font-bold ">Count:  {caller.count} </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>{longDurationCaller}</p>
                            )
                        }
                    </div>
                );
                
            default:
                return null;
        }
    };

    return (
        <div className={`fixed z-50 inset-0 min-h-screen max-w-screen-2xl    ${isOpen ? '' : 'hidden'}`}>
            <div className=" z-50 fixed  px-2   text-right">
                <button
                    className="text-2xl font-medium text-white rounded-md bg-red-500 w-12 h-12   mb-4 hover:text-gray-600 transition duration-150 ease-in-out"
                    onClick={() => {
                        setIsClosing(true);
                        setTimeout(() => {
                            onClose();
                        }, 300);
                        setCommonCaller(null);
                        setLongDurationCaller(null);
                        setCommonIMEI(null);
                        setActiveSlideIndex(0);
                        pageReload();
                    }}
                >
                    X
                </button>
                
            </div>
            <div className="flex items-center   justify-center min-h-screen">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={handleBackgroundClick}></div>
                <div className="relative bg-black   rounded-md shadow-lg" onClick={handleModalClick}>
                    {parsedData && (
                        <div className="md:p-4 p-2 text-lg  ">
                            {renderSlides()}
                            <div className='bottom-4  fixed  md:space-x-96  space-x-16 ml-20 md:ml-96  justify-evenly '>
                                {activeSlideIndex > 0 && (
                                    <button
                                        className="  text-4xl   py-2  text-white rounded-lg"
                                        onClick={handlePreviousSlide}
                                    >
                                        ⬅️
                                    </button>
                                )}
                                {activeSlideIndex < totalSlides - 1 && (
                                    <button
                                        className="   text-4xl    text-white rounded-lg "
                                        onClick={handleNextSlide}
                                    >
                                        ➡️
                                    </button>
                                )}
                            </div>
                            <img src={imageSources[activeSlideIndex]} className="h-[100%] w-[100%] rounded-2xl " />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
