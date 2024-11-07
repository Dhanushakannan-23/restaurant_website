import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/Images/logo.jpg';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom


const Navbar = ({HandlePopup}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };





  return (
    <div data-aos="fade" className='bg-white shadow-sm  text-black px-4 md:px-8 lg:px-16'>
      <div className='container py-4 flex justify-between items-center'>
      <div className='flex items-center'>
          <img src={logo} alt="Logo" className='w-14 h-14 mr-2' /> {/* Added margin-right */}
          <span className=' mt-4 font-bold text-black text-3xl font-dancing hover:text-pink-400'>Cusain</span>
        </div>

        {/* Navigation Links */}
        <div className='flex-1 md:flex-none flex font-semibold justify-center md:justify-start space-x-6 text-sm md:text-lg'>
          <a href="#Home" className='hover:text-pink-400 transition duration-300'>Home</a>
          <a href="#about" className='hover:text-pink-400 transition duration-300'>About</a>
          <a href="#features" className='hover:text-pink-400 transition duration-300'>Features</a>
          <a href="#contact" className='hover:text-pink-400 transition duration-300'>Contact</a>

          {/* Dropdown for Categories */}
          <div className="relative inline-block text-left">
            <div>
              <button 
                onClick={toggleDropdown} 
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:bg-gray-50 focus:outline-none"
              >
                Categories
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.04 1.08l-4.25 3.63a.75.75 0 01-1.06 0l-4.25-3.63a.75.75 0 010-1.08z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#vegitables" className="block px-4 py-2 text-sm text-black hover:bg-pink-300" role="menuitem">Vegitables </a>
                  <a href="#grains" className="block px-4 py-2 text-sm text-black hover:bg-pink-300" role="menuitem">Grains</a>
                  <a href="#fruits" className="block px-4 py-2 text-sm text-black hover:bg-pink-300" role="menuitem">Fruits</a>
                </div>
              </div>
            )}
          </div>
        {/* My Account Button with Link */}

            <button className="bg-teal-400 flex items-center rounded-md p-2 text-sm text-white" onClick={HandlePopup}>
              <i className="fa fa-user mr-1" aria-hidden="true"></i>
              My Account
            </button>
  
          </div>
      </div>


    </div>
  );
};

export default Navbar;