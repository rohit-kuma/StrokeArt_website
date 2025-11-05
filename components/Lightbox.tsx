
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  imageUrl: string;
  altText: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, altText, onClose, onPrev, onNext, isFirst, isLast }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={altText} className="object-contain max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" />

        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 md:top-2 md:right-2 text-white bg-brand-text/50 hover:bg-brand-text rounded-full p-2 transition-colors"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        {!isFirst && (
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white bg-brand-text/50 hover:bg-brand-text rounded-full p-2 transition-colors hidden md:block"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
        )}
        
        {!isLast && (
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white bg-brand-text/50 hover:bg-brand-text rounded-full p-2 transition-colors hidden md:block"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
