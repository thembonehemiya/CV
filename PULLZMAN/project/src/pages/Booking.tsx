import React, { useState } from 'react';
import { Calendar, Users, MapPin, Car, Send, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Booking = () => {
  const [bookingType, setBookingType] = useState('safari');
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    
    // Booking Details
    serviceType: 'safari',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
    
    // Safari specific
    destination: '',
    accommodation: '',
    
    // Car rental specific
    vehicleType: '',
    pickupLocation: '',
    dropoffLocation: '',
    
    // Additional
    specialRequests: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Booking submitted:', formData);
    // You can integrate with your backend or booking system here
  };

  const safariDestinations = [
    'Bwindi Impenetrable National Park',
    'Queen Elizabeth National Park',
    'Murchison Falls National Park',
    'Kibale Forest National Park',
    'Rwenzori Mountains National Park',
    'Lake Mburo National Park',
    'Kidepo Valley National Park',
    'Kenya Safari Package',
    'Custom Safari Package'
  ];

  const vehicleTypes = [
    'Economy Car',
    'SUV/4WD',
    'Safari Land Cruiser',
    'Van/Minibus',
    'Luxury Car',
    'Bridal Car',
    'Bus/Coach'
  ];

  const accommodationTypes = [
    'Budget (Under $100/night)',
    'Mid-range ($100-300/night)',
    'Luxury ($300-600/night)',
    'Ultra-luxury ($600+/night)',
    'Camping',
    'Mix of categories'
  ];

  return (
    <div>
      <HeroSection 
        title="Book Your Adventure"
        subtitle="Start planning your perfect African experience today"
        backgroundImage="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
        showCTA={false}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Type Selection */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What would you like to book?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  setBookingType('safari');
                  setFormData({...formData, serviceType: 'safari'});
                }}
                className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                  bookingType === 'safari' 
                    ? 'border-green-500 bg-green-50 text-green-700' 
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Safari Package</h3>
                <p className="text-sm">Wildlife tours, gorilla trekking, and adventure experiences</p>
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setBookingType('car-rental');
                  setFormData({...formData, serviceType: 'car-rental'});
                }}
                className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                  bookingType === 'car-rental' 
                    ? 'border-green-500 bg-green-50 text-green-700' 
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <Car className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Car Rental</h3>
                <p className="text-sm">Self-drive or chauffeur-driven vehicles</p>
              </button>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {bookingType === 'safari' ? 'Safari Booking Details' : 'Car Rental Booking Details'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality *
                    </label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      required
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Travel Dates and Group Size */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Travel Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      required
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                      End Date *
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      required
                      value={formData.endDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-2">
                      Adults *
                    </label>
                    <select
                      id="adults"
                      name="adults"
                      required
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-2">
                      Children
                    </label>
                    <select
                      id="children"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {[0,1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Specific Details */}
              {bookingType === 'safari' ? (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Safari Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Destination *
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        required
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select destination</option>
                        {safariDestinations.map(dest => (
                          <option key={dest} value={dest}>{dest}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="accommodation" className="block text-sm font-medium text-gray-700 mb-2">
                        Accommodation Preference
                      </label>
                      <select
                        id="accommodation"
                        name="accommodation"
                        value={formData.accommodation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select accommodation type</option>
                        {accommodationTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Car Rental Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Type *
                      </label>
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        required
                        value={formData.vehicleType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select vehicle type</option>
                        {vehicleTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Location *
                      </label>
                      <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        required
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        placeholder="e.g., Entebbe Airport"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700 mb-2">
                        Drop-off Location
                      </label>
                      <input
                        type="text"
                        id="dropoffLocation"
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleChange}
                        placeholder="Same as pickup"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Budget and Special Requests */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range (USD)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="over-10000">Over $10,000</option>
                    </select>
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={4}
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Dietary requirements, accessibility needs, special occasions, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center mx-auto"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Booking Request
                </button>
                <p className="text-sm text-gray-600 mt-3">
                  We'll respond to your booking request within 2 hours during business hours
                </p>
              </div>
            </form>
          </div>

          {/* What Happens Next */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              What Happens Next?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
              <div>
                <strong>1. Confirmation</strong>
                <p>We'll confirm receipt of your booking within 1 hour</p>
              </div>
              <div>
                <strong>2. Proposal</strong>
                <p>Detailed itinerary and quote sent within 24 hours</p>
              </div>
              <div>
                <strong>3. Booking</strong>
                <p>Secure your booking with a deposit payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;