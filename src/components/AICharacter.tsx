
import React from 'react';

const AICharacter = () => {
  return (
    <div className="flex justify-center mb-8 animate-fade-in-up">
      <div className="relative">
        {/* Main robot body */}
        <div className="w-48 h-48 bg-gradient-to-br from-teal-200 via-blue-200 to-purple-200 rounded-3xl relative shadow-2xl">
          {/* Robot face */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            {/* Eyes */}
            <div className="flex space-x-4 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full animate-pulse"></div>
              <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full animate-pulse"></div>
            </div>
            {/* Smile */}
            <div className="w-8 h-4 border-b-4 border-gray-600 rounded-b-full"></div>
          </div>
          
          {/* Robot antennas */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <div className="w-1 h-6 bg-teal-500 rounded-full"></div>
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Robot body details */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-8 bg-gradient-to-br from-teal-300 to-blue-300 rounded-lg"></div>
          </div>
        </div>
        
        {/* Floating elements around the robot */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 -right-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default AICharacter;
