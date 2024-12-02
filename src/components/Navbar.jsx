import React from 'react';
import MobileMenu from './MobileMenu';
import FAQItem from './FAQItems';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center overflow-hidden">
            <img src="/Images/logo.png" alt="Logo" className="w-auto h-auto max-w-full max-h-16 md:max-h-20 object-contain"/>
            <span className="text-xl font-bold text-green-600">Ahmad School & Academy System</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
            >
              <span className="block w-6 h-0.5 bg-current mb-1"></span>
              <span className="block w-6 h-0.5 bg-current mb-1"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;