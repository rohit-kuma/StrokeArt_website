import type { Course, GalleryImage, Exhibition, PortfolioItem } from './types';

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  course: string;
}

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Galleries', path: '/galleries' },
  { name: 'Exhibitions', path: '/exhibitions' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export const COURSES_DATA: Course[] = [
  { id: 1, title: 'Introduction to Oil Painting', description: 'Master the fundamentals of oil painting, from color mixing to brush techniques.', duration: '8 Weeks', imageUrl: 'https://picsum.photos/seed/course1/800/600' },
  { id: 2, title: 'Modern Abstract Art', description: 'Explore your creativity through abstract forms, textures, and compositions.', duration: '6 Weeks', imageUrl: 'https://picsum.photos/seed/course2/800/600' },
  { id: 3, title: 'Life Drawing & Anatomy', description: 'Develop your skills in capturing the human form with precision and expression.', duration: '10 Weeks', imageUrl: 'https://picsum.photos/seed/course3/800/600' },
  { id: 4, title: 'Digital Illustration', description: 'Learn to create stunning digital art using modern software and techniques.', duration: '8 Weeks', imageUrl: 'https://picsum.photos/seed/course4/800/600' },
  { id: 5, title: 'Sculpture & 3D Design', description: 'Bring your ideas to life in three dimensions using various materials and methods.', duration: '12 Weeks', imageUrl: 'https://picsum.photos/seed/course5/800/600' },
  { id: 6, title: 'Watercolor Landscapes', description: 'Capture the beauty of nature with the delicate and vibrant medium of watercolor.', duration: '6 Weeks', imageUrl: 'https://picsum.photos/seed/course6/800/600' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/seed/portrait1/600/800', alt: 'Evocative portrait of a woman', category: 'Portraits' },
  { id: 2, src: 'https://picsum.photos/seed/abstract1/600/800', alt: 'Vibrant abstract composition in red and blue', category: 'Abstract' },
  { id: 3, src: 'https://picsum.photos/seed/nature1/600/800', alt: 'Serene landscape of a misty forest', category: 'Nature' },
  { id: 4, src: 'https://picsum.photos/seed/portrait2/600/800', alt: 'Black and white portrait of a man', category: 'Portraits' },
  { id: 5, src: 'https://picsum.photos/seed/abstract2/600/800', alt: 'Geometric abstract art with sharp lines', category: 'Abstract' },
  { id: 6, src: 'https://picsum.photos/seed/nature2/600/800', alt: 'Close-up of a dew-covered flower', category: 'Nature' },
  { id: 7, src: 'https://picsum.photos/seed/portrait3/600/800', alt: 'Colorful portrait with expressive brushstrokes', category: 'Portraits' },
  { id: 8, src: 'https://picsum.photos/seed/abstract3/600/800', alt: 'Flowing abstract painting with soft gradients', category: 'Abstract' },
  { id: 9, src: 'https://picsum.photos/seed/nature3/600/800', alt: 'Dramatic seascape with crashing waves', category: 'Nature' },
];

export const EXHIBITIONS_DATA: Exhibition[] = [
  { id: 1, title: 'Horizons: New Perspectives', date: 'October 15 - November 30, 2024', description: 'An upcoming showcase of groundbreaking work from our most promising emerging artists.', imageUrl: 'https://picsum.photos/seed/exhibit1/800/600', type: 'upcoming' },
  { id: 2, title: 'The Digital Canvas', date: 'December 5, 2024 - January 15, 2025', description: 'Exploring the intersection of art and technology, featuring digital paintings, animations, and interactive installations.', imageUrl: 'https://picsum.photos/seed/exhibit2/800/600', type: 'upcoming' },
  { id: 3, title: 'Retrospective: A Decade of Art', date: 'August 1 - September 15, 2024', description: 'A look back at the most influential pieces created at our institute over the last ten years.', imageUrl: 'https://picsum.photos/seed/exhibit3/800/600', type: 'past' },
  { id: 4, title: 'Monochrome Minds', date: 'June 10 - July 20, 2024', description: 'A powerful exploration of light, shadow, and form through black and white photography and drawing.', imageUrl: 'https://picsum.photos/seed/exhibit4/800/600', type: 'past' },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  { id: 1, artist: 'Eleanor Vance', description: 'Faculty Head - Her work explores the relationship between memory and landscape.', imageUrl: 'https://picsum.photos/seed/portfolio1/600/800' },
  { id: 2, artist: 'Marcus Thorne', description: 'Alumni - Known for his dynamic, large-scale abstract sculptures.', imageUrl: 'https://picsum.photos/seed/portfolio2/600/800' },
  { id: 3, artist: 'Clara Chen', description: 'Alumni - A digital artist whose illustrations blend fantasy and reality.', imageUrl: 'https://picsum.photos/seed/portfolio3/600/800' },
  { id: 4, artist: 'Samuel Jones', description: 'Faculty - A master of portraiture, capturing the soul of his subjects.', imageUrl: 'https://picsum.photos/seed/portfolio4/600/800' },
  { id: 5, artist: 'Isabella Rossi', description: 'Faculty - Specializes in experimental photography and mixed media.', imageUrl: 'https://picsum.photos/seed/portfolio5/600/800' },
  { id: 6, artist: 'Leo Kim', description: 'Alumni - Creates intricate watercolor pieces inspired by urban environments.', imageUrl: 'https://picsum.photos/seed/portfolio6/600/800' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: 1, quote: "The instructors are incredibly supportive and talented. I've learned more in 8 weeks than I did in years of practicing on my own.", author: 'Jane Doe', course: 'Introduction to Oil Painting' },
  { id: 2, quote: "A truly inspiring environment. The institute helped me find my unique artistic voice. I couldn't be more grateful.", author: 'John Smith', course: 'Modern Abstract Art' },
  { id: 3, quote: "The community here is amazing. It's a place where you can freely experiment and grow alongside passionate peers.", author: 'Emily White', course: 'Life Drawing & Anatomy' },
];