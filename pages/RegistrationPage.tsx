import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { COURSES_DATA } from '../constants';
import AnimatedElement from '../components/AnimatedElement';

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedCourse: '',
    startDate: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // IMPORTANT: Replace this with your actual Google Apps Script Webhook URL for registrations
    const webhookUrl = 'https://script.google.com/macros/s/YOUR_REGISTRATION_WEBHOOK_ID/exec';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', selectedCourse: '', startDate: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div>
      <PageHeader title="Course Registration" subtitle="Begin your creative journey by enrolling in one of our acclaimed courses." />

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <AnimatedElement>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-text mb-6">Registration Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-primary mb-1">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-brand-secondary rounded-md focus:ring-brand-accent focus:border-brand-accent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-primary mb-1">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-brand-secondary rounded-md focus:ring-brand-accent focus:border-brand-accent" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-primary mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-3 border border-brand-secondary rounded-md focus:ring-brand-accent focus:border-brand-accent" />
                </div>

                <div>
                  <label htmlFor="selectedCourse" className="block text-sm font-medium text-brand-primary mb-1">Select Course</label>
                  <select id="selectedCourse" name="selectedCourse" value={formData.selectedCourse} onChange={handleChange} required className="w-full p-3 border border-brand-secondary rounded-md focus:ring-brand-accent focus:border-brand-accent bg-white">
                    <option value="">Please select a course</option>
                    {COURSES_DATA.map(course => <option key={course.id} value={course.title}>{course.title}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-brand-primary mb-1">Preferred Start Date</label>
                  <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required className="w-full p-3 border border-brand-secondary rounded-md focus:ring-brand-accent focus:border-brand-accent" />
                </div>

                <button type="submit" disabled={status === 'loading'} className="w-full bg-brand-primary text-white hover:bg-brand-text px-6 py-3 rounded-md transition-colors duration-300 disabled:bg-gray-400">
                  {status === 'loading' ? 'Submitting...' : 'Submit Registration'}
                </button>
                
                {status === 'success' && <p className="text-green-600 text-center">Thank you for registering! We will be in touch shortly.</p>}
                {status === 'error' && <p className="text-red-600 text-center">An error occurred. Please try again.</p>}
              </form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;