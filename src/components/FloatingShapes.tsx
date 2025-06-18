
import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className="floating-shape w-64 h-64 bg-pastel-lavender top-10 left-10 animate-float" />
      <div className="floating-shape w-48 h-48 bg-pastel-pink top-32 right-20 animate-float-delayed" />
      <div className="floating-shape w-32 h-32 bg-pastel-blue bottom-40 left-32 animate-float" />
      <div className="floating-shape w-56 h-56 bg-pastel-purple bottom-20 right-10 animate-float-delayed" />
      <div className="floating-shape w-40 h-40 bg-pastel-lavender top-1/2 left-1/4 animate-float" />
      <div className="floating-shape w-24 h-24 bg-pastel-pink top-3/4 right-1/3 animate-float-delayed" />
    </div>
  );
};

export default FloatingShapes;
