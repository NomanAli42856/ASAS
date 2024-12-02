import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-300 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Ahmad School & Academy System
        </h1>
        <p className="text-xl mb-8">
          Great Place to Learn
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;