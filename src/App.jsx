import React from 'react'
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow'; 
import Pricing from './components/Pricing'; 
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
const App = () => {
  return (
   <div className="font-body bg-gradient-to-b from-black via-green-950 to-black">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />

    </div >
  )
}

export default App
//<div className="font-body bg-gradient-to-b from-black via-green-950 to-black">