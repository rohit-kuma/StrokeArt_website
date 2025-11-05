import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader.tsx';
import { GALLERY_IMAGES } from '../constants.ts';
import Lightbox from '../components/Lightbox.tsx';
import AnimatedElement from '../components/AnimatedElement.tsx';
import { motion } from 'framer-motion';

const categories = ['All', 'Portraits', 'Abstract', 'Nature'];

const GalleriesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return GALLERY_IMAGES;
    }
    return GALLERY_IMAGES.filter(image => image.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  const showNextImage = () => {
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((prevIndex) => (prevIndex! + 1) % filteredImages.length);
    }
  };

  const showPrevImage = () => {
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((prevIndex) => (prevIndex! - 1 + filteredImages.length) % filteredImages.length);
    }
  };
  
  const currentImage = lightboxImageIndex !== null ? filteredImages[lightboxImageIndex] : null;

  return (
    <div>
      <PageHeader title="Student Galleries" subtitle="Explore a stunning collection of work from our talented students and recent exhibitions." />
      
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement className="flex justify-center mb-12">
            <div className="flex space-x-2 md:space-x-4 bg-brand-secondary p-2 rounded-full">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-brand-primary text-white shadow'
                      : 'text-brand-primary hover:bg-brand-accent/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedElement>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
               <motion.div 
                 layout
                 key={image.id} 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.8 }}
                 transition={{ duration: 0.4 }}
                 className="group cursor-pointer overflow-hidden rounded-lg relative" 
                 onClick={() => openLightbox(index)}
               >
                <img src={image.src} alt={image.alt} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white text-lg font-semibold text-center p-4">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {currentImage && (
        <Lightbox
          imageUrl={currentImage.src}
          altText={currentImage.alt}
          onClose={closeLightbox}
          onPrev={showPrevImage}
          onNext={showNextImage}
          isFirst={lightboxImageIndex === 0}
          isLast={lightboxImageIndex === filteredImages.length - 1}
        />
      )}
    </div>
  );
};

export default GalleriesPage;