import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants.ts';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = isScrolled
    ? 'bg-brand-background/90 backdrop-blur-lg shadow-md'
    : 'bg-transparent';
  
  const textColor = isScrolled || isOpen ? 'text-brand-text' : 'text-white';


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className={`text-2xl font-serif font-bold transition-colors duration-300 ${textColor}`}>
              Stroke Art Institute
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 relative group ${isActive ? (isScrolled ? 'text-brand-text' : 'text-white') : (isScrolled ? 'text-brand-primary hover:text-brand-text' : 'text-gray-200 hover:text-white')}`
                }
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}></span>
              </NavLink>
            ))}
             <NavLink to="/register" className="bg-brand-primary text-white hover:bg-brand-text px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-sm">Register Now</NavLink>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 ${textColor}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-background absolute w-full shadow-lg">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive ? 'bg-brand-secondary text-brand-text' : 'text-brand-primary hover:bg-brand-secondary/50 hover:text-brand-text'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/register" className="block text-center w-full mt-2 bg-brand-primary text-white hover:bg-brand-text px-4 py-2 rounded-md transition-colors duration-300">Register Now</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;