import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='text-white mt-20'>
        <div data-aos ="fade-down" className=' ml-6 container bg-gradient-to-b from-pink-700 to-pink-950 rounded-t-3xl p-6'>
          <h1 className='py-10 text-center text-3xl font-semibold text-white'>Contact Us</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>
            <div className='text-center space-y-4'>
              <div>
                <i className="fa fa-map-marker text-4xl" aria-hidden="true"></i>
                <p className='text-white text-sm mt-2'>#92, 3rd Main, Virgo Nagar, Post,<br />
                  Seegehalli, Bengaluru, Karnataka 560049
                </p>
              </div>
            </div>
            <div className='text-center space-y-4'>
              <div>
                <i className="fa fa-envelope text-4xl" aria-hidden="true"></i>
                <p className='text-white text-sm mt-2'>info@goodfood.com<br />
                  hr@goodfood.com
                </p>
              </div>
            </div>
            <div className='text-center space-y-4'>
              <div>
                <i className="fa fa-phone text-4xl" aria-hidden="true"></i>
                <p className='text-white text-sm mt-2'>+91 9643224232 - Sales and Services<br />
                +91 9623423436 - Hiring Queries<br/>
                +91 2345232445 - Whatsapp
                </p>
              </div>
            </div>
          </div>
          <div className='border-t-0 border-white mx-9 mt-6'></div>
          <div className='flex justify-between mx-6 mt-4'>
            <p>© 2022 TCJ. All rights reserved</p>
            <p>Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;