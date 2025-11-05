import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_IMAGES, COURSES_DATA, TESTIMONIALS_DATA } from '../constants';
import { ArrowRight, Brush, Heart, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  'https://picsum.photos/seed/hero1/1920/1080',
  'https://picsum.photos/seed/hero2/1920/1080',
  'https://picsum.photos/seed/hero3/1920/1080',
  'https://picsum.photos/seed/hero4/1920/1080',
];

const HomePage: React.FC = () => {
  const featuredImages = GALLERY_IMAGES.slice(0, 4);
  const featuredCourses = COURSES_DATA.slice(0, 3);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // FIX: Replaced NodeJS.Timeout with ReturnType<typeof setTimeout> for browser compatibility.
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentImageIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        ),
      4000 // Image changes every 4 seconds for a better user experience
    );

    return () => {
      resetTimeout();
    };
  }, [currentImageIndex]);

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="h-screen bg-black relative flex items-center justify-center text-white overflow-hidden"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Slider Controls */}
         <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous Image"
        >
            <ChevronLeft size={32} />
        </button>
        <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next Image"
        >
            <ChevronRight size={32} />
        </button>


        <div className="text-center z-10 p-4">
          <AnimatedElement>
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Stroke Art Institute</h1>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <p className="mt-4 text-lg md:text-2xl font-light max-w-2xl mx-auto">Nurturing Creativity, One Stroke at a Time. Discover your potential in a community that inspires.</p>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <Link 
              to="/courses" 
              className="mt-8 inline-flex items-center gap-2 bg-brand-accent text-white hover:bg-opacity-90 px-8 py-3 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              Explore Our Courses <ArrowRight size={20} />
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedElement className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-brand-text">Why Choose Stroke Art Institute?</h2>
              <p className="mt-4 text-lg text-brand-primary leading-relaxed">
                We are more than just a school; we are a vibrant community dedicated to fostering artistic growth and passion.
              </p>
            </AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-center">
              <AnimatedElement delay={0.2}>
                <div className="p-8 bg-white rounded-lg shadow-sm">
                  <Brush className="mx-auto text-brand-accent" size={40} />
                  <h3 className="mt-4 text-xl font-serif font-semibold text-brand-text">Expert Instructors</h3>
                  <p className="mt-2 text-brand-primary">Learn from celebrated artists and dedicated educators who are masters of their craft.</p>
                </div>
              </AnimatedElement>
              <AnimatedElement delay={0.4}>
                 <div className="p-8 bg-white rounded-lg shadow-sm">
                  <Heart className="mx-auto text-brand-accent" size={40} />
                  <h3 className="mt-4 text-xl font-serif font-semibold text-brand-text">Inspiring Environment</h3>
                  <p className="mt-2 text-brand-primary">Our state-of-the-art studios provide the perfect sanctuary to explore your creativity.</p>
                </div>
              </AnimatedElement>
               <AnimatedElement delay={0.6}>
                 <div className="p-8 bg-white rounded-lg shadow-sm">
                  <Users className="mx-auto text-brand-accent" size={40} />
                  <h3 className="mt-4 text-xl font-serif font-semibold text-brand-text">Creative Community</h3>
                  <p className="mt-2 text-brand-primary">Connect and collaborate with fellow artists in a supportive, inclusive network.</p>
                </div>
              </AnimatedElement>
            </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-16 md:py-24 bg-brand-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-serif text-center text-brand-text mb-12">From Our Gallery</h2>
          </AnimatedElement>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredImages.map((image, index) => (
              <AnimatedElement key={image.id} delay={index * 0.1} className="group overflow-hidden rounded-lg shadow-lg">
                <Link to="/galleries">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </Link>
              </AnimatedElement>
            ))}
          </div>
          <AnimatedElement className="text-center mt-12">
            <Link 
              to="/galleries" 
              className="font-semibold text-brand-accent hover:text-brand-text transition-colors duration-300 inline-flex items-center gap-2"
            >
              View Full Gallery <ArrowRight size={20} />
            </Link>
          </AnimatedElement>
        </div>
      </section>

       {/* Featured Courses */}
      <section className="py-16 md:py-24 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-serif text-center text-brand-text mb-12">Popular Courses</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <AnimatedElement key={course.id} delay={index * 0.2}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-2 h-full">
                  <div className="overflow-hidden">
                    <img src={course.imageUrl} alt={course.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-serif font-bold text-brand-text mb-2">{course.title}</h3>
                    <p className="text-brand-primary mb-4 flex-grow">{course.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm font-semibold text-brand-accent">{course.duration}</span>
                      <Link to="/courses" className="font-semibold text-brand-primary hover:text-brand-text text-sm">Learn More</Link>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
           <AnimatedElement className="text-center mt-12">
            <Link 
              to="/courses" 
              className="font-semibold text-brand-accent hover:text-brand-text transition-colors duration-300 inline-flex items-center gap-2"
            >
              Browse All Courses <ArrowRight size={20} />
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-brand-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-serif text-center text-brand-text mb-12">What Our Students Say</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <AnimatedElement key={testimonial.id} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                  </div>
                  <p className="text-brand-primary italic flex-grow">"{testimonial.quote}"</p>
                  <div className="mt-4">
                    <p className="font-bold text-brand-text">{testimonial.author}</p>
                    <p className="text-sm text-brand-accent">{testimonial.course}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;