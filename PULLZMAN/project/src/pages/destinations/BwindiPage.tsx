import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Binary as Binoculars, Mountain, TreePine } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const BwindiPage = () => {
  const highlights = [
    "Mountain Gorilla Trekking Experience",
    "UNESCO World Heritage Site",
    "Over 400 bird species",
    "Cultural visits to Batwa communities",
    "Forest walks and nature trails"
  ];

  const activities = [
    {
      name: "Gorilla Tracking",
      description: "The main attraction - spend an hour with mountain gorilla families",
      duration: "4-8 hours",
      difficulty: "Moderate to Challenging"
    },
    {
      name: "Bird Watching",
      description: "Over 400 bird species including 23 Albertine Rift endemics",
      duration: "2-4 hours",
      difficulty: "Easy to Moderate"
    },
    {
      name: "Forest Walks",
      description: "Guided nature walks through the impenetrable forest",
      duration: "2-6 hours",
      difficulty: "Easy to Moderate"
    },
    {
      name: "Batwa Cultural Experience",
      description: "Learn about the indigenous Batwa people and their forest culture",
      duration: "3-4 hours",
      difficulty: "Easy"
    }
  ];

  const accommodation = [
    {
      category: "Luxury",
      options: ["Buhoma Lodge", "Mahogany Springs", "Sanctuary Gorilla Forest Camp"],
      priceRange: "$400-800/night"
    },
    {
      category: "Mid-range",
      options: ["Silverback Lodge", "Gorilla Mist Camp", "Buhoma Haven Lodge"],
      priceRange: "$150-300/night"
    },
    {
      category: "Budget",
      options: ["Buhoma Community Rest Camp", "Gorilla Conservation Camp"],
      priceRange: "$50-120/night"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Bwindi Impenetrable National Park"
        subtitle="Home to Mountain Gorillas - UNESCO World Heritage Site"
        backgroundImage="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
        showCTA={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Park Overview</h2>
              <p className="text-gray-600 mb-6">
                Bwindi Impenetrable National Park is one of Uganda's most visited national parks and a UNESCO World Heritage Site. 
                Located in southwestern Uganda, this ancient rainforest is home to approximately half of the world's remaining 
                mountain gorillas, making it one of the most important conservation areas on Earth.
              </p>
              <p className="text-gray-600 mb-6">
                The park covers 331 square kilometers of rugged terrain characterized by steep hills, deep valleys, and dense vegetation. 
                Beyond gorillas, Bwindi is home to over 400 bird species, 200 butterfly species, and numerous other primates, 
                making it a biodiversity hotspot of global significance.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Mountain className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">1,160-2,607m</p>
                  <p className="text-sm text-gray-600">Elevation</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">331 km²</p>
                  <p className="text-sm text-gray-600">Area</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">~459</p>
                  <p className="text-sm text-gray-600">Mountain Gorillas</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">UNESCO</p>
                  <p className="text-sm text-gray-600">World Heritage</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Park Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-amber-700">
                      <Camera className="w-4 h-4 mr-2" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gorilla Permit:</span>
                    <span className="font-semibold text-green-600">$700 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Dec-Feb, Jun-Sep</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">SW Uganda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Kampala:</span>
                    <span className="font-medium">8-9 hours drive</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book Gorilla Trek
                </Link>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Gorilla Families</h3>
                <p className="text-blue-700 text-sm mb-3">
                  20 habituated gorilla families are available for tourism across four sectors:
                </p>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Buhoma Sector (4 families)</li>
                  <li>• Ruhija Sector (4 families)</li>
                  <li>• Rushaga Sector (8 families)</li>
                  <li>• Nkuringo Sector (4 families)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Activities & Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.name}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Duration:</span>
                    <p className="text-gray-600">{activity.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Difficulty:</span>
                    <p className="text-gray-600">{activity.difficulty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Accommodation Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accommodation.map((acc, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{acc.category}</h3>
                <p className="text-green-600 font-semibold mb-4">{acc.priceRange}</p>
                <ul className="space-y-2">
                  {acc.options.map((option, optIndex) => (
                    <li key={optIndex} className="text-gray-600 text-sm">• {option}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Getting There */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting There</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">By Road</h3>
                <p className="text-gray-600 mb-3">
                  From Kampala: 8-9 hours drive (460km) via Masaka-Mbarara highway to Buhoma sector.
                </p>
                <p className="text-gray-600 mb-3">
                  Alternative routes to different sectors: Ruhija (via Kabale), Rushaga and Nkuringo (via Kisoro).
                </p>
                <p className="text-gray-600">
                  4WD vehicle recommended, especially in rainy season.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">By Air</h3>
                <p className="text-gray-600 mb-3">
                  Scheduled flights from Entebbe to Kihihi Airfield (1.5 hours), then 1-hour drive to Buhoma.
                </p>
                <p className="text-gray-600 mb-3">
                  Charter flights available to Kisoro Airfield for Rushaga and Nkuringo sectors.
                </p>
                <p className="text-gray-600">
                  Flight + ground transfer takes about 3-4 hours total.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">What to Bring</h3>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Sturdy hiking boots</li>
                <li>• Long-sleeved shirts and pants</li>
                <li>• Rain jacket and hat</li>
                <li>• Gardening gloves (for grabbing vegetation)</li>
                <li>• Camera with extra batteries</li>
                <li>• Insect repellent</li>
                <li>• Walking stick (available at park)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Health Requirements</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Yellow fever vaccination certificate required</li>
                <li>• Malaria prophylaxis recommended</li>
                <li>• Must be in good physical condition</li>
                <li>• Minimum age: 15 years</li>
                <li>• Cannot trek if you have flu/cold symptoms</li>
                <li>• Travel insurance highly recommended</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Gorilla Encounter?</h2>
          <p className="text-xl mb-6 opacity-90">
            Experience one of the world's most incredible wildlife encounters in the heart of Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Gorilla Trek
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get More Info
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BwindiPage;