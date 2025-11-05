import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import { PORTFOLIO_DATA } from '../constants.ts';
import type { PortfolioItem } from '../types.ts';
import AnimatedElement from '../components/AnimatedElement.tsx';

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={item.imageUrl} alt={`Artwork by ${item.artist}`} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-300 group-hover:from-black/70"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
      <h3 className="text-2xl font-serif font-bold transition-transform duration-300 transform translate-y-8 group-hover:translate-y-0">{item.artist}</h3>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 transform translate-y-8 group-hover:translate-y-0 delay-100">{item.description}</p>
    </div>
  </div>
);

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Faculty & Alumni Portfolio" subtitle="A showcase of exceptional work from the talented individuals who form our community." />

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.map((item, index) => (
              <AnimatedElement key={item.id} delay={index * 0.1}>
                 <PortfolioCard item={item} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;