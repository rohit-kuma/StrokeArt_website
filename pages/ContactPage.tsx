import React, { useState } from 'react';
import PageHeader from '../components/PageHeader.tsx';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COURSES_DATA } from '../constants.ts';
import AnimatedElement from '../components/AnimatedElement.tsx';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // IMPORTANT: Replace this with your actual Google Apps Script Webhook URL
    const webhookUrl = 'https://script.google.com/macros/s/YOUR_WEBHOOK_ID/exec';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for Apps Script webhooks
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Since 'no-cors' mode doesn't allow reading the response, we assume success if the request doesn't throw.
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', courseInterest: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };


  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you. Reach out with any questions or inquiries." />
      
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedElement className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-serif font-bold text-brand-text">Get in Touch</h2>
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-brand-text">Our Address</h3>
                  <p className="text-brand-primary">123 Art Avenue, Creativity City, 10101</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-brand-text">Email Us</h3>
                  <p className="text-brand-primary">contact@strokeart.edu</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-brand-text">Call Us</h3>
                  <p className="text-brand-primary">(555) 123-4567</p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.2} className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-text mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-brand-secondary rounded-md focus:ring-brand-accent focus:border-brand-accent" />
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-brand-secondary rounded-md focus:ring-brand-accent focus:border-brand-accent" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="tel" name="phone" placeholder="Your Phone (Optional)" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-brand-secondary rounded-md focus:ring-brand-accent focus:border-brand-accent" />
                  <select name="courseInterest" value={formData.courseInterest} onChange={handleChange} className="w-full p-3 border border-brand-secondary rounded-md focus:ring-brand-accent focus:border-brand-accent bg-white">
                    <option value="">Select a Course Interest...</option>
                    {COURSES_DATA.map(course => <option key={course.id} value={course.title}>{course.title}</option>)}
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} required className="w-full p-3 border border-brand-secondary rounded-md focus:ring-brand-accent focus:border-brand-accent"></textarea>
                <button type="submit" disabled={status === 'loading'} className="bg-brand-primary text-white hover:bg-brand-text px-6 py-3 rounded-md transition-colors duration-300 disabled:bg-gray-400">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <p className="text-green-600">Thank you! Your message has been sent.</p>}
                {status === 'error' && <p className="text-red-600">Something went wrong. Please try again later.</p>}
              </form>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;