import React from 'react';

const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4">
      <a href="#features" className="block py-2 text-gray-600 hover:text-blue-600">Features</a>
      <a href="#faq" className="block py-2 text-gray-600 hover:text-blue-600">FAQ</a>
      <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
    </div>
  );
};

export default MobileMenu;