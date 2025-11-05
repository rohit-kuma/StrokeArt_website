
export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'Portraits' | 'Abstract' | 'Nature';
}

export interface Exhibition {
    id: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    type: 'upcoming' | 'past';
}

export interface PortfolioItem {
    id: number;
    artist: string;
    description: string;
    imageUrl: string;
}
