import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Kyatsi II Village, Kitholhu County, Kasese District, Western Uganda',
      color: 'forest'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+256 786 263 701',
      color: 'primary'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@rmci-uganda.org',
      color: 'earth'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM',
      color: 'green'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'volunteer', label: 'Volunteer Opportunities' },
    { value: 'partnership', label: 'Partnership/Collaboration' },
    { value: 'donation', label: 'Donation Information' },
    { value: 'media', label: 'Media/Press Inquiry' },
    { value: 'research', label: 'Research Collaboration' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-forest-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our conservation work or want to get involved? We'd love to hear from you. Reach out to our team in Kasese District, Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className={`bg-gradient-to-br from-${info.color}-50 to-${info.color}-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow`}>
                  <div className={`w-16 h-16 bg-${info.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{info.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      value={formData.inquiryType}
                      onChange={handleChange}
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you or how you'd like to get involved..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-forest-600 text-white py-3 px-6 rounded-lg hover:bg-forest-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium inline-flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us</h3>
                <div className="w-full h-64 bg-gradient-to-br from-forest-100 to-forest-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-forest-600 mx-auto mb-2" />
                    <p className="text-forest-700 font-medium">Kyatsi II Village</p>
                    <p className="text-forest-600 text-sm">Kitholhu County, Kasese District</p>
                    <p className="text-forest-600 text-sm">Western Uganda</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Our main office is located in Kyatsi II Village, where our conservation and community programs are based. We welcome visitors by appointment.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+256786263701"
                    className="flex items-center p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-900 font-medium">Call Us Now</span>
                  </a>
                  <a
                    href="mailto:info@rmci-uganda.org"
                    className="flex items-center p-3 bg-earth-50 rounded-lg hover:bg-earth-100 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-earth-600 mr-3" />
                    <span className="text-gray-900 font-medium">Send Email</span>
                  </a>
                  <a
                    href="https://wa.me/256786263701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-900 font-medium">WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Our Work</h3>
                <p className="text-gray-600 mb-4">
                  Stay connected with our conservation efforts and community impact through social media.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our conservation work and how to get involved
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">How can I visit your projects in person?</h4>
              <p className="text-gray-600">
                We welcome visitors to our conservation sites in Kyatsi II Village. Please contact us in advance to arrange a visit and ensure our team can provide proper guidance during your trip.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">What volunteer opportunities are available?</h4>
              <p className="text-gray-600">
                We offer various volunteer roles including environmental education, tree planting, nursery management, and skills training support. Both short-term and long-term volunteers are welcome.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">How do donations support your work?</h4>
              <p className="text-gray-600">
                Donations directly fund our conservation projects, community training programs, and operational costs. We provide detailed reports showing how your contribution creates measurable impact.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">Can organizations partner with RMCI?</h4>
              <p className="text-gray-600">
                Yes! We actively seek partnerships with NGOs, corporations, research institutions, and government agencies that share our conservation and community development goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;