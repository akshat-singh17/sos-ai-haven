
import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="bg-slate-50 border-b border-slate-200/50 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
              SOS AI
            </h1>
          </div>

          {/* Main Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-slate-700 hover:text-teal-600 transition-colors duration-300 font-medium border-b-2 border-teal-600 text-teal-600"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-slate-700 hover:text-teal-600 transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-slate-700 hover:text-teal-600 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
            <a 
              href="#privacy" 
              className="text-slate-700 hover:text-teal-600 transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </a>
          </div>

          {/* Get Started Button */}
          <div className="flex items-center">
            <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-2 font-semibold rounded-full shadow-lg hover:shadow-teal-500/30 transition-all duration-300 hover:transform hover:-translate-y-0.5">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button (placeholder for future mobile menu) */}
          <div className="md:hidden">
            <button className="text-slate-700 hover:text-teal-600 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
