import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Footer from './components/Footer';
import Vegitables from './components/Vegitables';
import AOS from 'aos';
import "aos/dist/aos.css";
import LoginPage from './components/LoginPage';


const App = () => {
  const [showpopup, setShowpopup] = useState(false);
  const HandlePopup = () => {
    setShowpopup(true);
  }

  // Close the popup/modal
   const closeModal = () => {
      setShowpopup(false);
    };

  React.useEffect(() =>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[]);
  return (

      <div className='overflow-hidden'>
        <Navbar HandlePopup={HandlePopup} />
            {/* Conditionally render the LoginPage modal above the Hero section */}
      {showpopup && <LoginPage closeModal={closeModal} />}
        <Hero />
        <Banner />
        <WhyChooseUs />
        <About  HandlePopup={HandlePopup}/>
        <Banner />
        <Footer />
       
      </div>

  );
}

export default App