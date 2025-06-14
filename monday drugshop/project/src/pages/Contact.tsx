import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../utils/constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message and reset form
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setErrors({});
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <div>
      <PageHeader title="Contact Us" backgroundImage={IMAGES.CONTACT_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                We're here to help with any questions you may have about our services. Reach out to us using the form or contact details below.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-gray-600">{CONTACT_INFO.ADDRESS}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href={`tel:${CONTACT_INFO.PHONE}`} className="text-gray-600 hover:text-blue-600">
                      {CONTACT_INFO.PHONE}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-gray-600 hover:text-blue-600">
                      {CONTACT_INFO.EMAIL}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <p className="text-gray-600">{CONTACT_INFO.HOURS}</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps placeholder */}
              <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Google Maps would be embedded here</p>
                </div>
                {/* In a real implementation, you would embed Google Maps here */}
                {/* <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63795.39744201025!2d31.3343937!3d0.5955609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177da518ada9b4eb%3A0xf2baefd823e28da6!2sMubende!5e0!3m2!1sen!2sug!4v1620000000000!5m2!1sen!2sug" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dove Medical Services location"
                ></iframe> */}
              </div>
            </div>
            
            <div>
              <h2 className="section-title">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded animate-fadeIn">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We have received your inquiry and will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        className="input-field"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <select 
                        id="subject"
                        name="subject"
                        className="input-field"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Please select</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Appointment Question">Appointment Question</option>
                        <option value="Service Information">Service Information</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message *</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5}
                      className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <div className="mt-6">
                    <button type="submit" className="btn-primary w-full md:w-auto">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;