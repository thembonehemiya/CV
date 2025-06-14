import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Ship, TreePine, Waves } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const SseseIslandsPage = () => {
  const highlights = [
    "84 tropical islands on Lake Victoria",
    "White sand beaches and palm trees",
    "Peaceful retreat from city life",
    "Fishing tours and water sports",
    "Rich Buganda cultural heritage"
  ];

  const activities = [
    {
      name: "Beach Relaxation",
      description: "Unwind on pristine white sand beaches with crystal clear waters",
      duration: "Flexible",
      difficulty: "Easy",
      highlights: ["White sand beaches", "Swimming", "Sunbathing", "Beach walks"]
    },
    {
      name: "Fishing Tours",
      description: "Try your luck catching the legendary Nile perch and tilapia",
      duration: "Half/Full day",
      difficulty: "Easy",
      highlights: ["Nile perch", "Traditional fishing", "Local guides", "Fresh catch"]
    },
    {
      name: "Island Hopping",
      description: "Explore multiple islands by boat and discover hidden gems",
      duration: "Full day",
      difficulty: "Easy",
      highlights: ["Multiple islands", "Scenic boat rides", "Local communities", "Photography"]
    },
    {
      name: "Forest Walks",
      description: "Explore tropical forests home to monkeys and exotic birds",
      duration: "2-4 hours",
      difficulty: "Easy to Moderate",
      highlights: ["Tropical forest", "Primates", "Bird watching", "Nature trails"]
    },
    {
      name: "Cultural Tours",
      description: "Visit local communities and learn about Buganda traditions",
      duration: "Half day",
      difficulty: "Easy",
      highlights: ["Local villages", "Traditional crafts", "Cultural stories", "Community interaction"]
    },
    {
      name: "Water Sports",
      description: "Kayaking, canoeing, and other water-based activities",
      duration: "2-4 hours",
      difficulty: "Easy to Moderate",
      highlights: ["Kayaking", "Canoeing", "Swimming", "Water games"]
    }
  ];

  const islands = [
    {
      name: "Kalangala Island",
      description: "Main island with the largest town and best infrastructure",
      features: ["Main ferry terminal", "Accommodation options", "Restaurants", "Local markets"]
    },
    {
      name: "Bukasa Island",
      description: "Popular for its beautiful beaches and resorts",
      features: ["White sand beaches", "Luxury resorts", "Water sports", "Romantic getaways"]
    },
    {
      name: "Bulago Island",
      description: "Private island with exclusive resorts and pristine nature",
      features: ["Private resorts", "Exclusive access", "Pristine beaches", "Wildlife"]
    },
    {
      name: "Banda Island",
      description: "Historic island with cultural significance and natural beauty",
      features: ["Historical sites", "Cultural heritage", "Scenic views", "Traditional fishing"]
    }
  ];

  const accommodation = [
    {
      category: "Luxury Resorts",
      options: ["Brovad Sands Lodge", "Ssese Islands Beach Hotel", "Mirembe Resort"],
      priceRange: "$150-400/night",
      features: ["Beachfront location", "Full board options", "Water sports", "Spa services"]
    },
    {
      category: "Mid-range Lodges",
      options: ["Kalangala Palm Beach", "Ssese Habitat Resort", "Islands Club Resort"],
      priceRange: "$60-150/night",
      features: ["Comfortable rooms", "Restaurant", "Beach access", "Boat transfers"]
    },
    {
      category: "Budget Options",
      options: ["Guesthouses", "Camping sites", "Community lodges"],
      priceRange: "$20-60/night",
      features: ["Basic accommodation", "Shared facilities", "Local experience", "Budget-friendly"]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Ssese Islands"
        subtitle="Tropical Paradise on Lake Victoria - 84 Islands of Tranquility"
        backgroundImage="https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg"
        showCTA={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Islands Overview</h2>
              <p className="text-gray-600 mb-6">
                The Ssese Islands are a group of 84 lush, tropical islands scattered across the northwestern 
                corner of Lake Victoria, Africa's largest lake. These islands offer a perfect escape from the 
                hustle and bustle of city life, with pristine white sand beaches, crystal-clear waters, and 
                a laid-back atmosphere that makes them Uganda's premier beach destination.
              </p>
              <p className="text-gray-600 mb-6">
                Rich in both natural beauty and cultural heritage, the Ssese Islands are home to friendly 
                local communities who maintain traditional fishing and farming practices. The islands offer 
                a unique blend of relaxation and adventure, from peaceful beach days to exciting fishing 
                expeditions and cultural encounters with the Buganda people.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">84</p>
                  <p className="text-sm text-gray-600">Islands</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Waves className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">Beaches</p>
                  <p className="text-sm text-gray-600">White Sand</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Ship className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">Ferry</p>
                  <p className="text-sm text-gray-600">Access</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">Tropical</p>
                  <p className="text-sm text-gray-600">Paradise</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Island Highlights</h3>
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
                    <span className="text-gray-600">Ferry Cost:</span>
                    <span className="font-semibold text-blue-600">$5-10 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Year-round</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Lake Victoria</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Kampala:</span>
                    <span className="font-medium">2 hours + ferry</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book Island Getaway
                </Link>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Perfect For</h3>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>• Romantic getaways</li>
                  <li>• Family beach holidays</li>
                  <li>• Weekend escapes</li>
                  <li>• Honeymoon destinations</li>
                  <li>• Stress relief retreats</li>
                  <li>• Photography tours</li>
                </ul>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{activity.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{activity.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div>
                    <span className="font-semibold text-gray-900">Duration:</span>
                    <p className="text-gray-600">{activity.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Difficulty:</span>
                    <p className="text-gray-600">{activity.difficulty}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {activity.highlights.map((highlight, hIndex) => (
                      <span key={hIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Islands */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Main Islands to Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {islands.map((island, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{island.name}</h3>
                <p className="text-gray-600 mb-4">{island.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {island.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
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
                <p className="text-blue-600 font-semibold mb-4">{acc.priceRange}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Options:</h4>
                  <ul className="space-y-1">
                    {acc.options.map((option, optIndex) => (
                      <li key={optIndex} className="text-gray-600 text-sm">• {option}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {acc.features.map((feature, fIndex) => (
                      <span key={fIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Itineraries */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample Itineraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Weekend Getaway (2 Days)</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-900">Day 1: Arrival & Beach Time</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Morning ferry from Entebbe/Bukakata</li>
                    <li>• Check-in at beach resort</li>
                    <li>• Afternoon beach relaxation</li>
                    <li>• Sunset fishing trip</li>
                    <li>• Beachside dinner</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-900">Day 2: Island Exploration</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Morning forest walk</li>
                    <li>• Cultural village visit</li>
                    <li>• Lunch at local restaurant</li>
                    <li>• Afternoon ferry back</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Extended Stay (4 Days)</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-900">Day 1-2: Kalangala Island</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Arrival and orientation</li>
                    <li>• Beach activities and relaxation</li>
                    <li>• Local market visits</li>
                    <li>• Traditional fishing experience</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-900">Day 3-4: Island Hopping</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Visit Bukasa Island</li>
                    <li>• Explore Banda Island</li>
                    <li>• Water sports activities</li>
                    <li>• Cultural performances</li>
                  </ul>
                </div>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Via Entebbe (Nakiwogo)</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Route:</strong> Kampala → Entebbe → Nakiwogo Ferry Terminal
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 45 minutes drive from Kampala to Nakiwogo</li>
                  <li>• Ferry departs: 2:00 PM daily</li>
                  <li>• Journey time: 3.5 hours to Kalangala</li>
                  <li>• Cost: $8-10 USD per person</li>
                  <li>• Vehicle transport available</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Via Bukakata</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Route:</strong> Kampala → Masaka → Bukakata Ferry Terminal
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 2 hours drive from Kampala to Bukakata</li>
                  <li>• Multiple ferries daily</li>
                  <li>• Journey time: 45 minutes to Kalangala</li>
                  <li>• Cost: $5-7 USD per person</li>
                  <li>• More frequent departures</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Ferry Tips:</h4>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Book ferry tickets in advance during peak seasons</li>
                <li>• Arrive at ferry terminal 30 minutes before departure</li>
                <li>• Bring snacks and water for the journey</li>
                <li>• Check weather conditions before traveling</li>
                <li>• Consider staying overnight if arriving late</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What to Pack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Pack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Beach Essentials</h3>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Swimwear and beach towels</li>
                <li>• Sunscreen (high SPF)</li>
                <li>• Sunglasses and sun hat</li>
                <li>• Beach sandals/flip-flops</li>
                <li>• Waterproof bag</li>
                <li>• Beach games/books</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Clothing</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Light, breathable clothing</li>
                <li>• Long sleeves for evenings</li>
                <li>• Comfortable walking shoes</li>
                <li>• Rain jacket (wet season)</li>
                <li>• Modest clothing for villages</li>
                <li>• Warm layer for boat trips</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Other Items</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Camera and extra batteries</li>
                <li>• Insect repellent</li>
                <li>• Personal medications</li>
                <li>• Cash (limited ATMs)</li>
                <li>• Power bank/charger</li>
                <li>• Snorkeling gear (optional)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Escape to Paradise</h2>
          <p className="text-xl mb-6 opacity-90">
            Discover the tranquil beauty of Ssese Islands - Uganda's tropical beach destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Island Getaway
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Plan Custom Trip
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SseseIslandsPage;