import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Infoblock from '../components/Infoblock';
import SocialMedia from '../components/SocialMedia';


const  MainPage = () => {
  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
    
      <Navbar />
      <Infoblock/>
      {/* <SocialMedia/> */}
      <Footer />
      
    </div>
  );
}

export default MainPage;
