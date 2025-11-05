import React from 'react';
import PageHeader from '../components/PageHeader';
import AnimatedElement from '../components/AnimatedElement';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="About Us" subtitle="Discover the heart and soul behind the Stroke Art Institute." />

      <div className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedElement className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-bold text-brand-text mb-4">Our Mission & Philosophy</h2>
              <p className="text-lg text-brand-primary leading-relaxed mb-4">
                Our mission is to cultivate artistic talent by providing exceptional education and fostering a community grounded in creativity and collaboration. We believe that art has the power to transform lives and enrich society.
              </p>
              <p className="text-lg text-brand-primary leading-relaxed">
                We are committed to a hands-on, personalized approach to learning. Our philosophy emphasizes not just technical skill, but also conceptual development and the cultivation of a unique artistic voice for each student. We encourage experimentation, critical thinking, and a lifelong passion for the arts.
              </p>
            </AnimatedElement>
            <AnimatedElement delay={0.2} className="order-1 md:order-2">
              <img 
                src="https://picsum.photos/seed/about1/800/700" 
                alt="Inspiring art studio" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mt-16 md:mt-24">
             <AnimatedElement>
               <img 
                src="https://picsum.photos/seed/about2/600/600" 
                alt="Founder of the institute" 
                className="rounded-full shadow-xl w-full max-w-md mx-auto h-auto object-cover"
              />
             </AnimatedElement>
            <AnimatedElement delay={0.2} className="text-left">
              <h2 className="text-3xl font-serif font-bold text-brand-text mb-4">The Founder's Vision</h2>
              <p className="text-lg text-brand-primary leading-relaxed mb-4">
                Stroke Art Institute was founded by Eleanor Vance, a celebrated artist and educator with a vision to create a space where creativity could flourish without limits. Having spent decades in the art world, she saw a need for an institution that blended classical training with contemporary innovation.
              </p>
              <p className="text-lg text-brand-primary leading-relaxed">
                "I wanted to build more than just a school," says Eleanor. "I envisioned a sanctuary for artists—a place where they could feel safe to take risks, to fail, to grow, and ultimately, to find their own path. Art is a journey, and we are here to be the guides."
              </p>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;