import React from 'react';
import backgroundimg from '../assets/Images/background.png';
import foodimg from '../assets/Images/food.png';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Hero = () => {


  const handleClick = () => {
    console.log("Button clicked!"); // Debugging line
    alert("Button clicked! Navigating now...");
    navigate('/vegetables');
  };
  return (
    <div
      className='relative z-[-1]'
      style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px', // adjust the height as needed
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-14">
          <div className='space-y-7 text-black order-2 sm:order-1'>
            <h1 data-aos="fade-up" className='text-5xl pl-10'>
              Fresh & Healthy Meal Plan 
              <br />
              <span className="font-dancing text-teal-400">Delivery</span> in Miami
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className='pl-10 text-lg'>Delicious Meal Delivered to Your Door From $13.95 per week</p>
            <div data-aos="fade-up" data-aos-delay="500" className='pl-10 flex items-center group'>
           
            <button className='bg-pink-600 text-white p-2' onClick={handleClick}>
                 Choose Your Meal Plan
          </button>
             
              <FaArrowRight className="text-white inline-block group-hover:translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-pink-800" />
            </div>
          </div>
          <div data-aos ="zoom-in" data-aos-delay="500"  className="flex justify-center">
            <img src={foodimg} alt="Delicious food" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;