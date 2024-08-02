import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import './index.css';
import Hero from './Components/Hero/Hero.js';
import About from './Components/About/About.js';
import Skills from './Components/Skills/Skills.js';
import Services from './Components/Services/Services.js';
import MyWork from './Components/MyWork/MyWork.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';
import PdfView from './Components/PdfView/PdfView.js';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.js';

const App = () => {  
  const [isPdfVisible, setIsPdfVisible] = useState(false);

  const handlePdf = () => {
    if(isPdfVisible === false){
      setIsPdfVisible(true);
    }
    else{
      setIsPdfVisible(false);
    }
  };

  return (
    <>
    <ScrollToTop />
      <Navbar />
      <Hero handleClick={handlePdf} isPdfVisible={isPdfVisible} />
      {isPdfVisible && (
        <div style={{ display: 'block' }}>
          <PdfView />
        </div>
      )}
      <About />
      <Skills />
      {/* <Services /> */}
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
