import React from 'react';

const Footer = () => {
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+923134908623';
  };

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Logo and School Information */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          {/* School Logo */}
          <img 
            src="/Images/logo.png" 
            alt="School Logo" 
            className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full bg-white p-1 flex-shrink-0"
          />
          
          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl font-bold">Ahmad School & Academy System</h3>
            <p className="text-xs md:text-sm">Hafiz Town, Sharaqpur Sharif, Sheikhpura, Punjab</p>
            <p className="text-xs md:text-sm">Contact: (+92) 313-4908623</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 flex-shrink-0">
          <button 
            onClick={handlePhoneCall}
            className="hover:bg-green-600 p-2 rounded-full transition-colors"
            aria-label="Call Us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
          </button>
          <button 
            onClick={() => handleSocialClick('https://facebook.com/asas.sqp')}
            className="hover:bg-blue-700 p-2 rounded-full transition-colors"
            aria-label="Facebook Page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </button>
          <button 
            onClick={() => handleSocialClick('https://youtube.com/@asassqp')}
            className="hover:bg-red-600 p-2 rounded-full transition-colors"
            aria-label="YouTube Channel"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.265-.007-7.831.437a2.506 2.506 0 0 0-1.762 1.766C2 8.776 2 12 2 12s0 3.224.407 4.797a2.506 2.506 0 0 0 1.762 1.766c1.566.443 7.831.437 7.831.437s6.265.007 7.831-.437a2.506 2.506 0 0 0 1.762-1.766C22 15.224 22 12 22 12s0-3.224-.407-4.797zM9.525 15.000V9.000l5.184 3.000l-5.184 3z"/>
            </svg>
          </button>
          <button 
            onClick={() => handleSocialClick('https://tiktok.com/@asas.sqp')}
            className="hover:bg-black p-2 rounded-full transition-colors"
            aria-label="TikTok Account"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64v-3.4a6.28 6.28 0 0 0-6.28 6.28c0 3.47 2.81 6.28 6.28 6.28 3.47 0 6.28-2.81 6.28-6.28V8.46a8.32 8.32 0 0 0 4.85 1.52V6.69h-.01z"/>
            </svg>
          </button>
          <button 
            onClick={() => handleSocialClick('mailto:asas.sqp@gmail.com')}
            className="hover:bg-red-500 p-2 rounded-full transition-colors"
            aria-label="Email Us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-4 border-t border-blue-700 pt-4">
        © {new Date().getFullYear()} Ahmad School & Academy System. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;