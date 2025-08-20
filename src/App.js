import React from 'react';
// import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatWeDo from './components/WhatWeDo';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App component
 * Composes all sections of the website together to form a single page
 * application. Each imported component represents a distinct
 * section inspired by the original Propertyplus website.
 */
function App() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;