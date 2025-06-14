import React, { useState } from 'react';
import { Users, Heart, Handshake, Mail, Phone, MapPin } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    message: ''
  });

  const [partnerForm, setPartnerForm] = useState({
    organization: '',
    contactName: '',
    email: '',
    type: '',
    message: ''
  });

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle volunteer form submission
    alert('Thank you for your interest in volunteering! We will contact you soon.');
    setVolunteerForm({
      name: '',
      email: '',
      phone: '',
      skills: '',
      availability: '',
      message: ''
    });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle partnership form submission
    alert('Thank you for your partnership interest! We will be in touch.');
    setPartnerForm({
      organization: '',
      contactName: '',
      email: '',
      type: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Involved</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our mission to conserve the Rwenzori Mountains and empower local communities. There are many ways you can make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ways to Support Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose how you'd like to contribute to our conservation and community empowerment efforts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-forest-50 to-forest-100 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Share your skills and time to directly support our conservation projects and community programs.
              </p>
              <a href="#volunteer" className="bg-forest-600 text-white px-6 py-3 rounded-full hover:bg-forest-700 transition-colors font-medium">
                Volunteer Now
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Make a financial contribution to support our ongoing conservation and community development work.
              </p>
              <a href="/donate" className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors font-medium">
                Donate Today
              </a>
            </div>

            <div className="bg-gradient-to-br from-earth-50 to-earth-100 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-earth-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partner</h3>
              <p className="text-gray-600 mb-6">
                Collaborate with us as an organization or business to amplify our conservation impact.
              </p>
              <a href="#partner" className="bg-earth-600 text-white px-6 py-3 rounded-full hover:bg-earth-700 transition-colors font-medium">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="volunteer" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Volunteer Opportunities</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We welcome volunteers with diverse skills and backgrounds. Whether you can help for a day, a week, or longer, your contribution makes a difference.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">Environmental Education</h4>
                  <p className="text-gray-600">Help teach community members about conservation practices and sustainable living.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">Tree Planting & Nursery Work</h4>
                  <p className="text-gray-600">Participate in reforestation activities and help maintain our tree nurseries.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">Skills Training Support</h4>
                  <p className="text-gray-600">Assist with vocational training programs for women and youth in the community.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Application</h3>
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    value={volunteerForm.name}
                    onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    value={volunteerForm.phone}
                    onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skills & Experience</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    value={volunteerForm.skills}
                    onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    value={volunteerForm.availability}
                    onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                  >
                    <option value="">Select availability</option>
                    <option value="weekend">Weekends only</option>
                    <option value="weekday">Weekdays</option>
                    <option value="flexible">Flexible schedule</option>
                    <option value="long-term">Long-term commitment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    value={volunteerForm.message}
                    onChange={(e) => setVolunteerForm({...volunteerForm, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-forest-600 text-white py-3 px-6 rounded-lg hover:bg-forest-700 transition-colors font-medium"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partner" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-earth-50 to-earth-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Application</h3>
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                    value={partnerForm.organization}
                    onChange={(e) => setPartnerForm({...partnerForm, organization: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                    value={partnerForm.contactName}
                    onChange={(e) => setPartnerForm({...partnerForm, contactName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                    value={partnerForm.type}
                    onChange={(e) => setPartnerForm({...partnerForm, type: e.target.value})}
                  >
                    <option value="">Select partnership type</option>
                    <option value="funding">Funding Partner</option>
                    <option value="technical">Technical Support</option>
                    <option value="implementation">Implementation Partner</option>
                    <option value="research">Research Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Proposal</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm({...partnerForm, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-earth-600 text-white py-3 px-6 rounded-lg hover:bg-earth-700 transition-colors font-medium"
                >
                  Submit Partnership Proposal
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We collaborate with organizations, businesses, and institutions that share our commitment to environmental conservation and community empowerment.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-earth-600 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Funding Partners</h4>
                  <p className="text-gray-600">Support our projects financially and help us expand our impact in the Rwenzori region.</p>
                </div>
                <div className="border-l-4 border-earth-600 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Technical Partners</h4>
                  <p className="text-gray-600">Provide expertise in conservation, agriculture, or community development.</p>
                </div>
                <div className="border-l-4 border-earth-600 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Implementation Partners</h4>
                  <p className="text-gray-600">Work with us on the ground to implement conservation and community programs.</p>
                </div>
                <div className="border-l-4 border-earth-600 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Research Partners</h4>
                  <p className="text-gray-600">Collaborate on research projects related to conservation and sustainable development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 text-forest-100 leading-relaxed">
            Contact us directly to discuss how you can contribute to our conservation mission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-forest-300 mb-4" />
              <h4 className="font-bold mb-2">Call Us</h4>
              <p className="text-forest-100">+256 786 263 701</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-forest-300 mb-4" />
              <h4 className="font-bold mb-2">Email Us</h4>
              <p className="text-forest-100">info@rmci-uganda.org</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-forest-300 mb-4" />
              <h4 className="font-bold mb-2">Visit Us</h4>
              <p className="text-forest-100">Kyatsi II Village, Kasese District</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;