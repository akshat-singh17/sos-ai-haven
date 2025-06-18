
import React from 'react';
import FloatingShapes from '@/components/FloatingShapes';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen pastel-gradient relative overflow-hidden">
      <FloatingShapes />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
