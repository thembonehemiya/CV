import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="header-image d-flex align-items-center justify-content-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="header-content text-center">
        <h1 className="display-4 fw-bold mb-3">{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;