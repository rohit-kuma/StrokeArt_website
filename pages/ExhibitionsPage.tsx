import React from 'react';
import PageHeader from '../components/PageHeader';
import { EXHIBITIONS_DATA } from '../constants';
import type { Exhibition } from '../types';
import AnimatedElement from '../components/AnimatedElement';

const ExhibitionCard: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => (
  <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-md overflow-hidden">
    <div className="w-full md:w-1/3 overflow-hidden rounded-md">
       <img 
        src={exhibition.imageUrl} 
        alt={exhibition.title} 
        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-serif font-bold text-brand-text">{exhibition.title}</h3>
      <p className="text-brand-accent font-semibold my-2">{exhibition.date}</p>
      <p className="text-brand-primary">{exhibition.description}</p>
    </div>
  </div>
);

const ExhibitionsPage: React.FC = () => {
  const upcomingExhibitions = EXHIBITIONS_DATA.filter(e => e.type === 'upcoming');
  const pastExhibitions = EXHIBITIONS_DATA.filter(e => e.type === 'past');

  return (
    <div>
      <PageHeader title="Exhibitions" subtitle="Join us for our upcoming showcases and browse through our memorable past events." />

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section>
            <AnimatedElement>
              <h2 className="text-3xl font-serif text-center text-brand-text mb-12">Upcoming Exhibitions</h2>
            </AnimatedElement>
            <div className="space-y-12">
              {upcomingExhibitions.map((exhibition, index) => (
                <AnimatedElement key={exhibition.id} delay={index * 0.2}>
                  <ExhibitionCard exhibition={exhibition} />
                </AnimatedElement>
              ))}
            </div>
          </section>

          <section className="mt-20">
             <AnimatedElement>
              <h2 className="text-3xl font-serif text-center text-brand-text mb-12">Past Exhibitions</h2>
            </AnimatedElement>
            <div className="space-y-12">
              {pastExhibitions.map((exhibition, index) => (
                <AnimatedElement key={exhibition.id} delay={index * 0.2}>
                  <ExhibitionCard exhibition={exhibition} />
                </AnimatedElement>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionsPage;