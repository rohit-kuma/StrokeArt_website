
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
  <div className="bg-brand-secondary py-12 text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">{title}</h1>
      {subtitle && <p className="mt-2 text-lg text-brand-primary max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </div>
);

export default PageHeader;
