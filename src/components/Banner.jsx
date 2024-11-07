import React from 'react';
import apple from '../assets/Images/apple.jpg';
import lemon from '../assets/Images/lemon.jpg';
import kiwi from '../assets/Images/kiwi.jpg';
import leaf from '../assets/Images/leaf.png';
import tomato from '../assets/Images/tomato.png';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  return (
    <>
     <div className='container py-14 relative ml-9'>
        <div className='relative z-20'>
            <h1  data-aos = "fade-up" data-aos-delay="500" className='py-8 tracking-wider text-2xl font-semibold text-black text-center'>Taste the healthy difference</h1>
            <div  className='space-y-10'>
              <div  data-aos = "fade-up" data-aos-delay="500" className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 mt-5'>
                <div>
                  <p className='mt-14'>
                    {" "} We know that <span className='text-pink-500'>time </span>is the greatest value in the 
                    modern world.Our healthy meal plan delivery service Good Food in 
                    Miami is the answer for those who want to eat healthily, saving 
                    time for buying food and preparing delicious, healthy meals.
                  </p>
                </div>
                <div></div>
              </div>

              <div data-aos = "fade-up" data-aos-delay="500"  className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
              <div></div>
                <div>
                  <p>
                    {" "} We know that <span className='text-pink-500'>time </span>is the greatest value in the 
                    modern world.Our healthy meal plan delivery service Good Food in 
                    Miami is the answer for those who want to eat healthily, saving 
                    time for buying food and preparing delicious, healthy meals.
                  </p>
                </div>

              </div>
              {/* button section */}
              <div data-aos = "fade-up" data-aos-delay="500" data-aos-offset ="0"
              className='flex justify-center mt-10'>
              <div className='pl-10 flex items-center group'>
              <button className='bg-pink-600 text-white flex items-center p-2'>
                Choose Your Meal Plan
              </button>
              <FaArrowRight className="text-white inline-block group-hover:translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-pink-800" />
            </div>
              </div>
              {/* fruits img */}
              <div data-aos="fade-right" className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                <img data-aos="fade-right" src={leaf} alt=""  className='max-w-28'/>
              </div>
              <div data-aos="fade-right" className='absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                <img data-aos="fade-right" src={tomato} alt=""  className='max-w-40'/>
              </div>
              <div data-aos="fade-right" className='absolute top-10 -right-16 sm:right-20  opacity-50 sm:opacity-100'>
                <img data-aos="fade-right" src={lemon} alt=""  className='max-w-48'/>
              </div>
              <div data-aos="fade-right" className='absolute -bottom-20 -right-16 sm:bottom-0 sm:right-0 opacity-50 sm:opacity-100'>
                <img data-aos="fade-right" src={apple} alt=""  className='max-w-36 '/>
              </div>
              <div data-aos="fade-right" className='absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100'>
                <img data-aos="fade-right" src={kiwi} alt=""  className='max-w-40'/>
              </div>
            </div>
        </div>

     </div>
    </>
   
  )
}

export default Banner