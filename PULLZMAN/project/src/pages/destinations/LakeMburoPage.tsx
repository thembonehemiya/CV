import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Binary as Binoculars, Car, TreePine } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const LakeMburoPage = () => {
  const highlights = [
    "Closest national park to Kampala",
    "Walking safaris and horseback riding",
    "Zebras and impalas in Uganda",
    "Beautiful lake system with boat rides",
    "Cycling safaris through the park"
  ];

  const activities = [
    {
      name: "Walking Safari",
      description: "Guided walking safaris - the only park in Uganda where this is allowed",
      duration: "2-4 hours",
      difficulty: "Easy to Moderate",
      price: "$30 USD"
    },
    {
      name: "Game Drives",
      description: "Morning and evening game drives to spot zebras, impalas, and antelopes",
      duration: "2-3 hours",
      difficulty: "Easy",
      price: "$40 USD"
    },
    {
      name: "Boat Safari",
      description: "Boat cruise on Lake Mburo to see hippos, crocodiles, and water birds",
      duration: "2 hours",
      difficulty: "Easy",
      price: "$35 USD"
    },
    {
      name: "Cycling Safari",
      description: "Unique cycling experience through the park with wildlife viewing",
      duration: "3-4 hours",
      difficulty: "Moderate",
      price: "$25 USD"
    },
    {
      name: "Horseback Riding",
      description: "Horse riding safaris for a unique wildlife viewing experience",
      duration: "2-3 hours",
      difficulty: "Moderate",
      price: "$50 USD"
    },
    {
      name: "Night Game Drive",
      description: "Spot nocturnal animals including leopards, hyenas, and bush babies",
      duration: "2-3 hours",
      difficulty: "Easy",
      price: "$45 USD"
    }
  ];

  const wildlife = [
    "Zebras", "Impalas", "Elands", "Buffalos", "Hippos", "Crocodiles",
    "Leopards", "Hyenas", "Warthogs", "Bushbucks", "Topis", "Waterbucks"
  ];

  const accommodation = [
    {
      category: "Luxury",
      options: ["Mihingo Lodge", "Mantana Tented Camp"],
      priceRange: "$200-400/night"
    },
    {
      category: "Mid-range", 
      options: ["Rwakobo Rock", "Lake Mburo Safari Lodge"],
      priceRange: "$80-150/night"
    },
    {
      category: "Budget",
      options: ["Eagles Nest", "UWA Bandas"],
      priceRange: "$30-70/night"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Lake Mburo National Park"
        subtitle="Uganda's Closest Safari Destination - Walking Safaris & Zebras"
        backgroundImage="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
        showCTA={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Park Overview</h2>
              <p className="text-gray-600 mb-6">
                Lake Mburo National Park is Uganda's smallest savanna national park and the closest to Kampala, 
                making it perfect for weekend getaways and short safaris. Located in western Uganda, this compact 
                park offers a unique safari experience with activities not available elsewhere in the country.
              </p>
              <p className="text-gray-600 mb-6">
                The park is famous for being the only place in Uganda where you can see zebras and impalas in their 
                natural habitat. It's also the only national park in Uganda where walking safaris are permitted, 
                offering visitors a chance to experience wildlife on foot with armed ranger guides.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">370 km²</p>
                  <p className="text-sm text-gray-600">Park Area</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Car className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">3.5 Hours</p>
                  <p className="text-sm text-gray-600">From Kampala</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Walking</p>
                  <p className="text-sm text-gray-600">Safaris Allowed</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Zebras</p>
                  <p className="text-sm text-gray-600">Only in Uganda</p>
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
                    <span className="text-gray-600">Park Entry:</span>
                    <span className="font-semibold text-green-600">$35 USD/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Year-round</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Western Uganda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Kampala:</span>
                    <span className="font-medium">3.5 hours drive</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book Safari
                </Link>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Wildlife Spotting</h3>
                <div className="flex flex-wrap gap-2">
                  {wildlife.slice(0, 8).map((animal, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {animal}
                    </span>
                  ))}
                </div>
                <p className="text-blue-700 text-sm mt-2">+ many more species</p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Activities & Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{activity.name}</h3>
                  <span className="text-green-600 font-bold text-sm">{activity.price}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{activity.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
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

        {/* Unique Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Makes Lake Mburo Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Walking Safaris</h3>
              <p className="text-green-800 mb-4">
                Lake Mburo is the only national park in Uganda where walking safaris are permitted. 
                Accompanied by armed ranger guides, you can explore the savanna on foot and get 
                closer to nature than ever before.
              </p>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Armed ranger guide included</li>
                <li>• 2-4 hour guided walks</li>
                <li>• Close encounters with wildlife</li>
                <li>• Learn about tracks and signs</li>
                <li>• Photography opportunities</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Zebras in Uganda</h3>
              <p className="text-blue-800 mb-4">
                Lake Mburo is the only place in Uganda where you can see zebras in their natural habitat. 
                These beautiful striped animals roam freely across the savanna grasslands alongside 
                impalas, another species unique to this park in Uganda.
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Plains zebras (Burchell's zebras)</li>
                <li>• Large herds grazing in open areas</li>
                <li>• Best viewing in morning/evening</li>
                <li>• Great for photography</li>
                <li>• Often seen with impalas</li>
              </ul>
            </div>
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

        {/* Sample Itinerary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample 2-Day Itinerary</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 1: Arrival & Afternoon Activities</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Depart Kampala after breakfast (3.5-hour drive)</li>
                  <li>• Check-in at lodge and lunch</li>
                  <li>• Afternoon game drive to spot zebras and impalas</li>
                  <li>• Sunset boat cruise on Lake Mburo</li>
                  <li>• Dinner and overnight at lodge</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 2: Walking Safari & Departure</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Early morning walking safari with ranger guide</li>
                  <li>• Breakfast at lodge</li>
                  <li>• Optional cycling safari or horseback riding</li>
                  <li>• Lunch and check-out</li>
                  <li>• Depart for Kampala with game viewing en route</li>
                </ul>
              </div>
            </div>
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
                  From Kampala: 3.5 hours drive (240km) via Masaka-Lyantonde road to Sanga gate.
                </p>
                <p className="text-gray-600 mb-3">
                  Well-maintained tarmac road makes it accessible year-round.
                </p>
                <p className="text-gray-600">
                  Perfect for weekend trips and day visits from Kampala.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Park Gates</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Sanga Gate:</strong> Main entrance from Kampala</li>
                  <li><strong>Nshara Gate:</strong> Northern entrance</li>
                  <li><strong>Rwonyo Gate:</strong> Eastern entrance</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  All gates provide access to different areas of the park.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Experience Uganda's Most Accessible Safari</h2>
          <p className="text-xl mb-6 opacity-90">
            Perfect for weekend getaways, walking safaris, and seeing zebras in Uganda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Weekend Safari
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Plan Custom Trip
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LakeMburoPage;