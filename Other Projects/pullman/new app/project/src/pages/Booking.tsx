import React, { useState } from 'react';
import { Calendar, Users, Car, MapPin, Phone, Mail, User } from 'lucide-react';

const Booking = () => {
  const [bookingType, setBookingType] = useState('safari');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    serviceType: 'safari',
    destination: '',
    vehicle: '',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
    accommodation: 'mid-range',
    specialRequests: '',
    budget: '',
    hearAboutUs: ''
  });

  const safariDestinations = [
    'Bwindi Impenetrable National Park',
    'Queen Elizabeth National Park',
    'Murchison Falls National Park',
    'Kibale Forest National Park',
    'Kidepo Valley National Park',
    'Lake Bunyonyi',
    'Rwenzori Mountains',
    'Lake Mburo National Park',
    'Mount Elgon National Park',
    'Ssese Islands',
    'Source of the Nile - Jinja',
    'Custom Safari Package'
  ];

  const vehicleTypes = [
    'Toyota Camry (Saloon)',
    'Toyota Land Cruiser V8 (Safari SUV)',
    'Toyota Hiace (Van)',
    'Toyota Hilux (Pickup)',
    'Isuzu NPR (Bus)',
    'Mercedes-Benz S-Class (Luxury)',
    'Other - Please Specify'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Book Your Adventure</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore Uganda or need a reliable vehicle? Fill out our booking form 
            and we'll create a customized experience just for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Service Type Selection */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">What service are you interested in?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-lg border-2 cursor-pointer transition-colors ${
                  bookingType === 'safari'
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
                onClick={() => {
                  setBookingType('safari');
                  setFormData(prev => ({ ...prev, serviceType: 'safari' }));
                }}
              >
                <div className="flex items-center mb-3">
                  <MapPin className="text-green-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold">Safari Experience</h3>
                </div>
                <p className="text-gray-600">
                  Gorilla trekking, wildlife safaris, cultural tours, and adventure experiences 
                  across Uganda's national parks and attractions.
                </p>
              </div>

              <div
                className={`p-6 rounded-lg border-2 cursor-pointer transition-colors ${
                  bookingType === 'rental'
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
                onClick={() => {
                  setBookingType('rental');
                  setFormData(prev => ({ ...prev, serviceType: 'rental' }));
                }}
              >
                <div className="flex items-center mb-3">
                  <Car className="text-green-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold">Car Rental</h3>
                </div>
                <p className="text-gray-600">
                  Self-drive or chauffeur services with our diverse fleet of vehicles 
                  for business, leisure, or special occasions.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <section>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <User className="mr-2 text-green-600" size={20} />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Service Details */}
              <section>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  {bookingType === 'safari' ? (
                    <MapPin className="mr-2 text-green-600\" size={20} />
                  ) : (
                    <Car className="mr-2 text-green-600" size={20} />
                  )}
                  Service Details
                </h3>

                {bookingType === 'safari' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Destination *
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select a destination</option>
                        {safariDestinations.map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Accommodation Preference
                      </label>
                      <select
                        name="accommodation"
                        value={formData.accommodation}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="budget">Budget ($50-100/night)</option>
                        <option value="mid-range">Mid-range ($100-250/night)</option>
                        <option value="luxury">Luxury ($250+/night)</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Type *
                      </label>
                      <select
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select a vehicle</option>
                        {vehicleTypes.map((vehicle) => (
                          <option key={vehicle} value={vehicle}>
                            {vehicle}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select
                        name="rentalType"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="self-drive">Self-Drive</option>
                        <option value="chauffeur">With Chauffeur</option>
                        <option value="airport-transfer">Airport Transfer</option>
                        <option value="corporate">Corporate Rental</option>
                      </select>
                    </div>
                  </div>
                )}
              </section>

              {/* Travel Details */}
              <section>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="mr-2 text-green-600" size={20} />
                  Travel Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date *
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adults
                    </label>
                    <select
                      name="adults"
                      value={formData.adults}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Children (0-12)
                    </label>
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>

              {/* Additional Information */}
              <section>
                <h3 className="text-xl font-bold mb-4">Additional Information</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Budget (USD)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-3000">$2,000 - $3,000</option>
                      <option value="3000-5000">$3,000 - $5,000</option>
                      <option value="over-5000">Over $5,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Please select</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Friend/Family Referral</option>
                      <option value="travel-agent">Travel Agent</option>
                      <option value="previous-client">Previous Client</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests or Questions
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific interests..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Submit Inquiry
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll respond to your inquiry within 24 hours with a detailed quote and itinerary.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Prefer to speak directly?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="mx-auto mb-3 text-green-600" size={32} />
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-gray-600">+256 702 551 090</p>
                <p className="text-sm text-gray-500">9 AM - 6 PM EAT</p>
              </div>
              <div>
                <Mail className="mx-auto mb-3 text-green-600" size={32} />
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-gray-600">info@pullmansafaris.com</p>
                <p className="text-sm text-gray-500">24-hour response</p>
              </div>
              <div>
                <svg className="mx-auto mb-3 text-green-600" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <h3 className="font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-600">+256 702 551 090</p>
                <p className="text-sm text-gray-500">Instant messaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;