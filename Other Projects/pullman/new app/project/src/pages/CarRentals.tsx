import React, { useState } from 'react';
import { Car, Users, Fuel, Settings, Shield, Clock } from 'lucide-react';

const CarRentals = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const vehicles = [
    {
      id: 'sedan',
      category: 'saloon',
      name: 'Toyota Camry',
      type: 'Saloon Car',
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuel: 'Petrol',
      dailyRate: '$45',
      weeklyRate: '$280',
      monthlyRate: '$1,100',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Air Conditioning', 'Power Steering', 'Radio/CD', 'Central Locking']
    },
    {
      id: 'suv',
      category: 'suv',
      name: 'Toyota Land Cruiser V8',
      type: 'Safari SUV',
      passengers: 7,
      luggage: 5,
      transmission: 'Manual/Automatic',
      fuel: 'Diesel',
      dailyRate: '$120',
      weeklyRate: '$780',
      monthlyRate: '$3,000',
      image: 'https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['4x4 Drive', 'Pop-up Roof', 'Game Viewing Windows', 'Refrigerator']
    },
    {
      id: 'van',
      category: 'van',
      name: 'Toyota Hiace Super Custom',
      type: 'Passenger Van',
      passengers: 14,
      luggage: 8,
      transmission: 'Manual',
      fuel: 'Diesel',
      dailyRate: '$85',
      weeklyRate: '$550',
      monthlyRate: '$2,100',
      image: 'https://images.pexels.com/photos/1131556/pexels-photo-1131556.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Air Conditioning', 'Comfortable Seats', 'Music System', 'Large Luggage Space']
    },
    {
      id: 'pickup',
      category: 'pickup',
      name: 'Toyota Hilux Double Cab',
      type: 'Pickup Truck',
      passengers: 5,
      luggage: 'Open Bed',
      transmission: 'Manual/Automatic',
      fuel: 'Diesel',
      dailyRate: '$65',
      weeklyRate: '$420',
      monthlyRate: '$1,600',
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['4x4 Drive', 'Power Steering', 'Air Conditioning', 'Tow Capacity']
    },
    {
      id: 'bus',
      category: 'bus',
      name: 'Isuzu NPR Bus',
      type: 'Passenger Bus',
      passengers: 30,
      luggage: 'Large Compartment',
      transmission: 'Manual',
      fuel: 'Diesel',
      dailyRate: '$150',
      weeklyRate: '$980',
      monthlyRate: '$3,800',
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Air Conditioning', 'Reclining Seats', 'PA System', 'Large Windows']
    },
    {
      id: 'bridal',
      category: 'luxury',
      name: 'Mercedes-Benz S-Class',
      type: 'Luxury/Bridal Car',
      passengers: 5,
      luggage: 4,
      transmission: 'Automatic',
      fuel: 'Petrol',
      dailyRate: '$200',
      weeklyRate: '$1,300',
      monthlyRate: '$5,000',
      image: 'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Leather Interior', 'Premium Sound', 'Climate Control', 'Luxury Finish']
    }
  ];

  const services = [
    {
      title: 'Self-Drive Rentals',
      description: 'Perfect for independent travelers who prefer to explore at their own pace.',
      features: ['Valid driving license required', '24/7 roadside assistance', 'GPS navigation available', 'Fuel-efficient vehicles'],
      icon: <Car className="text-green-600" size={32} />
    },
    {
      title: 'Chauffeur Services',
      description: 'Professional drivers for a comfortable and stress-free journey.',
      features: ['Experienced local drivers', 'English-speaking chauffeurs', 'Airport transfers', 'City tours'],
      icon: <Users className="text-green-600\" size={32} />
    },
    {
      title: 'Corporate Rentals',
      description: 'Reliable transportation solutions for business clients and organizations.',
      features: ['Fleet management', 'Monthly contracts', 'Invoice billing', 'Priority support'],
      icon: <Shield className="text-green-600" size={32} />
    },
    {
      title: 'Event Transportation',
      description: 'Special occasion vehicles including weddings, conferences, and group events.',
      features: ['Wedding car decoration', 'Group transportation', 'Event coordination', 'Flexible scheduling'],
      icon: <Clock className="text-green-600\" size={32} />
    }
  ];

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Premium Car Rental Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From economy cars to luxury vehicles and safari land cruisers, we have the perfect 
            vehicle for every occasion. Professional service with competitive rates.
          </p>
        </div>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Vehicle Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Vehicles
          </button>
          <button
            onClick={() => setSelectedCategory('saloon')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'saloon'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Saloon Cars
          </button>
          <button
            onClick={() => setSelectedCategory('suv')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'suv'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Safari SUVs
          </button>
          <button
            onClick={() => setSelectedCategory('van')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'van'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Vans & Buses
          </button>
          <button
            onClick={() => setSelectedCategory('luxury')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'luxury'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Luxury Cars
          </button>
        </div>

        {/* Vehicle Fleet */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vehicle Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{vehicle.name}</h3>
                      <p className="text-gray-600">{vehicle.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{vehicle.dailyRate}</div>
                      <div className="text-sm text-gray-500">per day</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Users size={16} className="text-green-600 mr-2" />
                      <span>{vehicle.passengers} passengers</span>
                    </div>
                    <div className="flex items-center">
                      <Settings size={16} className="text-green-600 mr-2" />
                      <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center">
                      <Fuel size={16} className="text-green-600 mr-2" />
                      <span>{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center">
                      <Car size={16} className="text-green-600 mr-2" />
                      <span>{vehicle.luggage} luggage</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">{vehicle.dailyRate}</div>
                      <div className="text-gray-500">Daily</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{vehicle.weeklyRate}</div>
                      <div className="text-gray-500">Weekly</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{vehicle.monthlyRate}</div>
                      <div className="text-gray-500">Monthly</div>
                    </div>
                  </div>

                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Book This Vehicle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rental Terms */}
        <section className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Rental Terms & Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-600">Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Valid driving license (International for non-residents)</li>
                <li>• Minimum age: 23 years (25 for luxury vehicles)</li>
                <li>• Valid passport or national ID</li>
                <li>• Credit card for security deposit</li>
                <li>• Minimum rental period: 1 day</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-600">What's Included</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive insurance coverage</li>
                <li>• 24/7 roadside assistance</li>
                <li>• Basic maintenance and repairs</li>
                <li>• Airport pickup/drop-off (within Kampala)</li>
                <li>• GPS navigation system (on request)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-green-800">Weekly Discount</h3>
              <p className="text-green-600 text-3xl font-bold mb-2">15% OFF</p>
              <p className="text-gray-600">On rentals of 7 days or more</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-blue-800">Monthly Rates</h3>
              <p className="text-blue-600 text-3xl font-bold mb-2">30% OFF</p>
              <p className="text-gray-600">Special corporate and long-term rates</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-yellow-800">Early Bird</h3>
              <p className="text-yellow-600 text-3xl font-bold mb-2">10% OFF</p>
              <p className="text-gray-600">Book 30 days in advance</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="text-center bg-green-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h2>
          <p className="text-xl mb-6">
            Contact us for personalized quotes and vehicle availability. 
            We're here to make your journey comfortable and memorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors">
              Get Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Call Now: +256 702 551 090
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentals;