import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import FaqSection from "./components/FaqSection";
import TeamSection from "./components/TeamSection";
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection />
      <FaqSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default App;
