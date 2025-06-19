
import React from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-teal-100/50 dark:border-teal-800/50 shadow-lg sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-xl relative overflow-hidden">
              {/* AI Core */}
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center relative">
                <div className="w-4 h-4 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full animate-pulse"></div>
                {/* Neural network lines */}
                <div className="absolute inset-0">
                  <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
                  <div className="absolute bottom-1 right-1 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-purple-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
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
              className="text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-semibold text-lg relative group"
            >
              Home
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 transform scale-x-100 transition-transform duration-300"></span>
            </a>
            <a 
              href="#about" 
              className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-semibold text-lg relative group"
            >
              About
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-semibold text-lg relative group"
            >
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 hover:from-teal-600 hover:via-blue-600 hover:to-purple-600 text-white px-8 py-3 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 p-2">
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
