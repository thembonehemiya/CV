import React from 'react';

interface PageHeaderProps {
  title: string;
  backgroundImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backgroundImage }) => {
  return (
    <div 
      className="relative bg-center bg-cover h-[30vh] flex items-center justify-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` 
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;