import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Infoblock from './components/Infoblock';
import Footer from './components/Footer';
import Block from './components/block';
import Roof from './components/Roof';
import GptPage from './components/GptPage';
import Choose from './components/Choose';
import Ingredient from './components/Ingredient';


function App() {

  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <div>
        <Navbar />
        <GptPage/>
        
        {/* <Choose /> */}
        {/* <Ingredient/> */}
        {/* <Infoblock />
        <Block />
        <Roof /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App
