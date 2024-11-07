import React from 'react';
import bgimage from '../assets/Images/aboutus.png';
import aboveimg from '../assets/Images/aboveimg.png'

const About = () => {
  const sectionStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover', // Adjust to cover the entire section
    backgroundPosition: 'center', // Center the image
    height: '100vh', // Full viewport height, adjust as needed
    width:'100%',
    alignItems: 'center',
   position:'relative',
  };

  return (
    <div style={sectionStyle}>
      <div className='container min-h-[500px] relative z-10 p-11'>
        <h1 data-aos ="fade" className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>About Us</h1>
        <div className='bg-white p-10 my-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fuga doloribus blanditiis culpa ipsa autem! Quas in ut cumque 
        quo, eum ab ea inventore voluptatum at dignissimos repellat placeat 
        quaerat veniam fugit? Quasi quidem, saepe tenetur quam nihil 
        velit nobis eum ad hic odio mollitia itaque consectetur eaque unde 
        cumque possimus reprehenderit quas beatae praesentium consequatur? 
        Eum magni doloremque obcaecati necessitatibus soluta doloribus quos 
        temporibus aperiam, at harum earum, commodi, eligendi omnis fugiat 
        error exercitationem ullam labore culpa aliquam possimus pariatur?
         Atque repudiandae beatae animi ducimus voluptate minima temporibus 
         neque libero dolore ipsam, accusamus omnis ullam id aspernatur,
          quas fuga esse.
          <div className='pt-10 flex justify-center'>
          <button className='bg-pink-600 flex justify-center items-center rounded-md px-5 py-2 text-lg text-white'>
            <i className="fa fa-user mr-1" aria-hidden="true"></i>
            My Account
          </button> 
          </div>
          <div className='absolute top-0 right-3 w-full'>
            <img src={aboveimg} alt="" className='mx-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;