import React from 'react';
import { HeartPulse } from 'lucide-react';

interface DoveLogoProps {
  className?: string;
}

const DoveLogo: React.FC<DoveLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <HeartPulse className="text-blue-700" size={32} />
    </div>
  );
};

export default DoveLogo;