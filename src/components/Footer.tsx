
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/60 backdrop-blur-sm border-t border-white/50 py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SOS AI
            </h3>
            <p className="text-gray-600 mt-2">Your trusted AI Companion</p>
          </div>
          
          <div className="flex flex-wrap gap-8 justify-center md:justify-end">
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium">
              Contact
            </a>
            <a href="#privacy" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium">
              Privacy Policy
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 SOS AI. All rights reserved. Made with ❤️ for your wellbeing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
