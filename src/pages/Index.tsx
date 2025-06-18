
import React from 'react';
import Navigation from '@/components/Navigation';
import FloatingShapes from '@/components/FloatingShapes';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pastel-gradient relative overflow-hidden">
        <FloatingShapes />
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
