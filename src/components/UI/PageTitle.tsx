import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 animate-fade-in">
      <h1 className="font-heading font-bold text-3xl sm:text-4xl text-primary-800 mb-2">{title}</h1>
      {subtitle && (
        <p className="font-body text-lg text-gray-600 max-w-3xl">{subtitle}</p>
      )}
      <div className="h-1 w-20 bg-accent-500 rounded mt-4"></div>
    </div>
  );
};

export default PageTitle;