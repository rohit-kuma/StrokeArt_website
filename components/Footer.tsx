
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary text-brand-primary mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-serif font-bold text-brand-text mb-2">Stroke Art Institute</h3>
            <p className="text-sm">Nurturing creativity, one stroke at a time.</p>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-brand-text mb-2">Contact Us</h3>
            <p className="text-sm">123 Art Avenue, Creativity City, 10101</p>
            <p className="text-sm">contact@strokeart.edu | (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-brand-text mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-brand-text transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-text transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-text transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-brand-primary/20 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Stroke Art Institute. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
