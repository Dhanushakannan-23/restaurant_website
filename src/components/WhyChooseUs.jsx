import React from 'react';
import { FaBus } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <>
    <div className='py-14 md:py-28 bg-gray-50'>
        <div className="container">
        <h1 data-aos ="fade" className='pb-16 tracking-wider text-2xl text-center font-semibold text-black'>Why Choose Us</h1>
        {/* card section */}
        <div data-aos ="fade" data-aos-delay="300">
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-14 sm:gap-4'>
            {/* first card */}
            <div className='text-center  flex justify-center items-center flex-col gap-5 px-2'>
                <p className='text-black font-semibold'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                <p className='text-2xl rotate-90 text-pink-500 text-center translate-x-5'>. . . . . .</p>
                <FaBus className='text-pink-500 text-5xl'/>
            </div>
            <div className='text-center  flex justify-center items-center flex-col gap-5 px-2'>
            <FaBus className='text-teal-400 text-5xl'/>
            <p className='text-2xl rotate-90 text-teal-400 text-center translate-x-5'>. . . . . .</p>
                <p className='text-black font-semibold'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>  
            </div>
            <div className='text-center  flex justify-center items-center flex-col gap-5 px-2'>
                <p className='text-black font-semibold'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                <p className='text-2xl rotate-90 text-pink-500 text-center translate-x-5'>. . . . . .</p>
                <FaBus className='text-pink-500 text-5xl'/>
            </div>
            <div className='text-center  flex justify-center items-center flex-col gap-5 px-2'>
            <FaBus className='text-teal-400 text-5xl'/>
            <p className='text-2xl rotate-90 text-teal-400 text-center translate-x-5'>. . . . . .</p>
                <p className='text-black font-semibold'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>  
            </div>
            </div>
        </div>
        </div>
        </div>
    </>
    
  )
}

export default WhyChooseUs