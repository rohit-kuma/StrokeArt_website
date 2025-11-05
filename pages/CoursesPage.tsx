import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import { COURSES_DATA } from '../constants.ts';
import type { Course } from '../types.ts';
import AnimatedElement from '../components/AnimatedElement.tsx';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-2 h-full">
    <div className="overflow-hidden">
      <img src={course.imageUrl} alt={course.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-serif font-bold text-brand-text mb-2">{course.title}</h3>
      <p className="text-brand-primary mb-4 flex-grow">{course.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-sm font-semibold text-brand-accent">{course.duration}</span>
        <button className="bg-brand-primary text-white hover:bg-brand-text px-4 py-2 rounded-md transition-colors duration-300 text-sm font-semibold">
          Details
        </button>
      </div>
    </div>
  </div>
);


const CoursesPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Our Courses" subtitle="From foundational skills to advanced techniques, find the perfect course to ignite your artistic journey." />
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES_DATA.map((course, index) => (
              <AnimatedElement key={course.id} delay={index * 0.1}>
                 <CourseCard course={course} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;