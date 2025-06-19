
import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-lg border-b border-teal-100/50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
              <div className="relative">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              SOS AI
            </h1>
          </div>

          {/* Main Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a 
              href="#home" 
              className="text-slate-800 hover:text-teal-600 transition-all duration-300 font-semibold text-lg relative group"
            >
              Home
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 transform scale-x-100 transition-transform duration-300"></span>
            </a>
            <a 
              href="#about" 
              className="text-slate-700 hover:text-teal-600 transition-all duration-300 font-semibold text-lg relative group"
            >
              About
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-slate-700 hover:text-teal-600 transition-all duration-300 font-semibold text-lg relative group"
            >
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Get Started Button */}
          <div className="flex items-center">
            <Button className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 hover:from-teal-600 hover:via-blue-600 hover:to-purple-600 text-white px-8 py-3 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-slate-700 hover:text-teal-600 transition-colors duration-300 p-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
