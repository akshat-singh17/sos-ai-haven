
import React from 'react';
import FeatureCard from './FeatureCard';
import { Clock, Shield, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 support whenever you need it. No waiting, no scheduling - your AI companion is ready to help at any moment."
    },
    {
      icon: Shield,
      title: "Supportive & Safe",
      description: "Experience a judgment-free space where you can express yourself freely. Your privacy and emotional wellbeing are our top priorities."
    },
    {
      icon: Zap,
      title: "Easy to Connect",
      description: "Simple, intuitive interface that gets you talking right away. No complex setup - just authentic conversation when you need it."
    }
  ];

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Why Choose SOS AI?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the features that make SOS AI your perfect companion for support and understanding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up" 
              style={{animationDelay: `${0.2 * (index + 1)}s`}}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
