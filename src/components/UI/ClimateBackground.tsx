import React from 'react';
import { Earth, Sun, CloudRain, Leaf } from 'lucide-react';

interface ClimateBackgroundProps {
  className?: string;
}

const ClimateBackground: React.FC<ClimateBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none -z-10 ${className}`}>
      {/* Earth Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50/10">
        <div className="absolute inset-0 opacity-5">
          <Earth className="h-64 w-64 text-cyan-200 absolute -left-16 -top-16" />
          <Sun className="h-48 w-48 text-yellow-200 absolute right-16 -bottom-16" />
          <CloudRain className="h-40 w-40 text-blue-200 absolute left-1/2 -top-20" />
          <Leaf className="h-32 w-32 text-green-200 absolute right-1/2 -bottom-20" />
        </div>
      </div>

      {/* Subtle Climate Patterns */}
      <div className="absolute inset-0 bg-[url('/images/climate-pattern.svg')] bg-repeat opacity-5" />
    </div>
  );
};

export default ClimateBackground;
