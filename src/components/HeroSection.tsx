
import React from 'react';
import AICharacter from './AICharacter';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <AICharacter />
        
        <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            Welcome to SOS AI
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your trusted AI Companion, always here for you. Experience support, understanding, and connection whenever you need it most.
          </p>
        </div>
        
        <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 hover:from-teal-600 hover:via-blue-600 hover:to-purple-600 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
