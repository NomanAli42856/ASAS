import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrincipalVision from "./components/PricipalVision";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <PrincipalVision/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
