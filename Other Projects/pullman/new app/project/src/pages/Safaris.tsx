import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Camera } from 'lucide-react';

const Safaris = () => {
  const [selectedDestination, setSelectedDestination] = useState('all');

  const destinations = [
    {
      id: 'bwindi',
      name: 'Bwindi Impenetrable National Park',
      location: 'Southwestern Uganda',
      highlight: 'Mountain Gorilla Trekking (UNESCO World Heritage Site)',
      image: 'https://images.pexels.com/photos/162275/gorilla-silverback-animal-silvery-162275.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Gorilla tracking', 'Birding', 'Forest walks', 'Cultural visits to Batwa communities'],
      duration: '2-3 days',
      difficulty: 'Moderate to Challenging',
      bestTime: 'June-August, December-February'
    },
    {
      id: 'queen-elizabeth',
      name: 'Queen Elizabeth National Park',
      location: 'Western Uganda',
      highlight: 'Tree-climbing lions & Kazinga Channel boat safari',
      image: 'https://images.pexels.com/photos/271171/pexels-photo-271171.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Game drives', 'Boat cruises', 'Chimp trekking in Kyambura Gorge'],
      duration: '2-4 days',
      difficulty: 'Easy to Moderate',
      bestTime: 'December-February, June-September'
    },
    {
      id: 'murchison',
      name: 'Murchison Falls National Park',
      location: 'Northern Uganda',
      highlight: 'Spectacular waterfalls & Nile river cruises',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Game drives', 'Nile boat cruises', 'Hiking to falls top', 'Rhino tracking at Ziwa'],
      duration: '3 days',
      difficulty: 'Easy to Moderate',
      bestTime: 'December-March, June-September'
    },
    {
      id: 'kibale',
      name: 'Kibale Forest National Park',
      location: 'Near Fort Portal',
      highlight: 'Chimpanzee tracking',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Primate watching (13 species!)', 'Birding', 'Nature walks'],
      duration: '1-2 days',
      difficulty: 'Easy to Moderate',
      bestTime: 'February-May, September-November'
    },
    {
      id: 'kidepo',
      name: 'Kidepo Valley National Park',
      location: 'Northeastern Uganda',
      highlight: 'Remote and untouched wilderness',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Game drives', 'Cultural tours (Karamojong)', 'Scenic landscapes'],
      duration: '3-4 days',
      difficulty: 'Moderate',
      bestTime: 'September-March'
    },
    {
      id: 'lake-bunyonyi',
      name: 'Lake Bunyonyi',
      location: 'Near Kabale, Southwestern Uganda',
      highlight: 'Uganda\'s most scenic lake - "Switzerland of Africa"',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Canoeing', 'Island hopping', 'Swimming', 'Birdwatching', 'Cultural tours'],
      duration: '1-2 days',
      difficulty: 'Easy',
      bestTime: 'Year-round'
    }
  ];

  const packages = [
    {
      id: 'murchison-3day',
      name: '3 Days Murchison Falls National Park',
      price: '$850',
      duration: '3 days / 2 nights',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Visit Ziwa Rhino Sanctuary',
        'Visit Devils Cauldron (Murchison Falls)',
        'Launch Cruise on the Nile',
        'Game drives with big five viewing',
        'Scenic viewing and beautiful Flora and Fauna'
      ],
      includes: [
        '2 nights\' accommodation with meal plan',
        '1 Game drives and 1 launch cruise',
        'Park entrance charges',
        'Water throughout the trip',
        'Lunch on first day of safari'
      ],
      excludes: [
        'Personal spending money',
        'Alcohol and soft drinks',
        'Tips to the driver/guide',
        'International and domestic air tickets',
        'Optional activities'
      ]
    },
    {
      id: 'kenya-9day',
      name: '9 Days Nairobi/Sweetwaters/Nakuru/Naivasha/Maasai Mara and Mombasa',
      price: '$1,556',
      duration: '9 days / 8 nights',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Sweetwaters Game Reserve - closest to Nairobi',
        'Lake Nakuru - bird lover\'s hub with flamingos',
        'Maasai Mara - great migration and big five',
        'Lake Naivasha - boat rides and cycling',
        'Mombasa beach holiday'
      ],
      includes: [
        'Accommodation at lodges and beach apartments',
        'Transport in Safari Land cruiser',
        'Game drives and boat cruises',
        'Return train tickets to Mombasa',
        'Meals as specified',
        'Park entrance fees',
        'Government taxes'
      ],
      excludes: [
        'Travel Insurance',
        'Tips',
        'Optional activities',
        'Items of personal use'
      ]
    }
  ];

  const filteredDestinations = selectedDestination === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.id === selectedDestination);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Uganda Safari Experiences</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Uganda's incredible wildlife, from mountain gorillas to tree-climbing lions. 
            Each destination offers unique experiences in the Pearl of Africa.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedDestination('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedDestination === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Destinations
          </button>
          <button
            onClick={() => setSelectedDestination('bwindi')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedDestination === 'bwindi'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Gorilla Trekking
          </button>
          <button
            onClick={() => setSelectedDestination('queen-elizabeth')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedDestination === 'queen-elizabeth'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Big Five Safari
          </button>
          <button
            onClick={() => setSelectedDestination('murchison')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedDestination === 'murchison'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Waterfalls & Nile
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span>{destination.location}</span>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block mb-4">
                  {destination.highlight}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Clock size={14} className="mr-1" />
                      <span>Duration: {destination.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users size={14} className="mr-1" />
                      <span>Difficulty: {destination.difficulty}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">
                      <strong>Best Time:</strong> {destination.bestTime}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.activities.map((activity, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Book This Destination
                  
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Safari Packages</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Clock size={16} className="mr-1" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{pkg.price}</div>
                      <div className="text-sm text-gray-500">per person sharing</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Star size={16} className="mr-1 text-yellow-500" />
                      Highlights:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-green-600 mb-2">Price Includes:</h5>
                      <ul className="text-gray-600 space-y-1">
                        {pkg.includes.slice(0, 3).map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                        {pkg.includes.length > 3 && (
                          <li className="text-green-600">+ {pkg.includes.length - 3} more...</li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-600 mb-2">Price Excludes:</h5>
                      <ul className="text-gray-600 space-y-1">
                        {pkg.excludes.slice(0, 3).map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                        {pkg.excludes.length > 3 && (
                          <li className="text-red-600">+ {pkg.excludes.length - 3} more...</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Book Now
                    </button>
                    <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Destinations */}
        <section className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">More Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-2">Ssese Islands</h4>
                <p className="text-sm text-gray-600">Tropical retreat on Lake Victoria with beaches and fishing</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-2">Source of the Nile - Jinja</h4>
                <p className="text-sm text-gray-600">White-water rafting and adventure sports</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-2">Rwenzori Mountains</h4>
                <p className="text-sm text-gray-600">Snow-capped peaks and glacier hiking</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-2">Lake Mburo National Park</h4>
                <p className="text-sm text-gray-600">Zebras, antelope, and walking safaris</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-2">Mount Elgon National Park</h4>
                <p className="text-sm text-gray-600">Extinct volcano with world's largest caldera</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-2">Ziwa Rhino Sanctuary</h4>
                <p className="text-sm text-gray-600">Track Uganda's only wild rhinos on foot</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-green-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Uganda?</h2>
          <p className="text-xl mb-6">
            Let us create a customized safari experience that matches your interests and budget.
          </p>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors">
            Plan My Safari
          </button>
        </div>
      </div>
    </div>
  );
};

export default Safaris;