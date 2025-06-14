import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Waves, Mountain, TreePine } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const LakeBunyonyiPage = () => {
  const highlights = [
    "Switzerland of Africa - stunning scenery",
    "29 islands scattered across the lake",
    "Safe swimming - no bilharzia or crocodiles",
    "Terraced hillsides and misty mountains",
    "Rich cultural heritage and local traditions"
  ];

  const activities = [
    {
      name: "Canoeing",
      description: "Paddle across calm waters in traditional dugout canoes",
      duration: "1-4 hours",
      difficulty: "Easy",
      price: "$10-25 USD",
      highlights: ["Traditional dugouts", "Island visits", "Peaceful experience"]
    },
    {
      name: "Island Hopping",
      description: "Visit historical and cultural islands with unique stories",
      duration: "Half/Full day",
      difficulty: "Easy",
      price: "$20-40 USD",
      highlights: ["Punishment Island", "Bushara Island", "Cultural stories"]
    },
    {
      name: "Swimming",
      description: "Safe swimming in bilharzia-free and crocodile-free waters",
      duration: "Flexible",
      difficulty: "Easy",
      price: "Free",
      highlights: ["Safe waters", "Refreshing swim", "Beautiful setting"]
    },
    {
      name: "Nature Walks",
      description: "Explore terraced hillsides and local villages",
      duration: "2-4 hours",
      difficulty: "Moderate",
      price: "$15-30 USD",
      highlights: ["Terraced landscapes", "Village visits", "Scenic views"]
    },
    {
      name: "Bird Watching",
      description: "Spot over 200 bird species around the lake",
      duration: "2-3 hours",
      difficulty: "Easy",
      price: "$20 USD",
      highlights: ["200+ species", "Water birds", "Forest birds"]
    },
    {
      name: "Cultural Tours",
      description: "Learn about Bakiga culture and traditional practices",
      duration: "Half day",
      difficulty: "Easy",
      price: "$25 USD",
      highlights: ["Bakiga culture", "Traditional crafts", "Local stories"]
    }
  ];

  const islands = [
    {
      name: "Punishment Island",
      description: "Historical island where unmarried pregnant girls were abandoned",
      significance: "Cultural heritage site with tragic history",
      activities: ["Historical tour", "Cultural education", "Photography"]
    },
    {
      name: "Bushara Island",
      description: "Eco-tourism island with accommodation and activities",
      significance: "Community-run conservation project",
      activities: ["Accommodation", "Nature walks", "Bird watching"]
    },
    {
      name: "Akampene Island",
      description: "Upside-down island that appears to float on water",
      significance: "Optical illusion and photography spot",
      activities: ["Photography", "Scenic viewing", "Canoeing"]
    },
    {
      name: "Bwama Island",
      description: "Island with a small community and traditional lifestyle",
      significance: "Living culture and traditional practices",
      activities: ["Cultural visits", "Community interaction", "Traditional crafts"]
    }
  ];

  const accommodation = [
    {
      category: "Luxury",
      options: ["BirdNest Resort", "Crater Bay Cottages", "Bunyonyi Overland Resort"],
      priceRange: "$100-250/night",
      features: ["Lake views", "Full board", "Activities included", "Spa services"]
    },
    {
      category: "Mid-range",
      options: ["Lake Bunyonyi Rock Resort", "Bushara Island Camp", "Arcadia Cottages"],
      priceRange: "$40-100/night",
      features: ["Comfortable rooms", "Restaurant", "Lake access", "Guided activities"]
    },
    {
      category: "Budget",
      options: ["Backpackers hostels", "Community lodges", "Camping sites"],
      priceRange: "$10-40/night",
      features: ["Basic accommodation", "Shared facilities", "Budget meals", "Local experience"]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Lake Bunyonyi"
        subtitle="Switzerland of Africa - Uganda's Most Scenic Lake"
        backgroundImage="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
        showCTA={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Lake Overview</h2>
              <p className="text-gray-600 mb-6">
                Lake Bunyonyi, often called the "Switzerland of Africa," is Uganda's most scenic lake and one of 
                the deepest in Africa. Located in southwestern Uganda near the border with Rwanda, this stunning 
                lake is dotted with 29 islands and surrounded by terraced hillsides that create a breathtaking 
                landscape reminiscent of European alpine scenery.
              </p>
              <p className="text-gray-600 mb-6">
                The lake's name "Bunyonyi" means "place of many little birds" in the local language, reflecting 
                its rich birdlife with over 200 species. What makes Lake Bunyonyi special is its safety for swimming - 
                it's free from bilharzia, crocodiles, and hippos, making it one of the few African lakes where 
                visitors can safely enjoy water activities.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Mountain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">1,962m</p>
                  <p className="text-sm text-gray-600">Altitude</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Waves className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">29</p>
                  <p className="text-sm text-gray-600">Islands</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">900m</p>
                  <p className="text-sm text-gray-600">Max Depth</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">Safe</p>
                  <p className="text-sm text-gray-600">Swimming</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Lake Highlights</h3>
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
                    <span className="text-gray-600">Canoeing:</span>
                    <span className="font-semibold text-blue-600">$10-25 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Year-round</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">SW Uganda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Kampala:</span>
                    <span className="font-medium">6-7 hours drive</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book Lake Experience
                </Link>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Perfect For</h3>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>• Romantic getaways</li>
                  <li>• Relaxation and wellness</li>
                  <li>• Photography enthusiasts</li>
                  <li>• Cultural experiences</li>
                  <li>• Family holidays</li>
                  <li>• Post-safari relaxation</li>
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
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{activity.name}</h3>
                  <span className="text-blue-600 font-bold text-sm">{activity.price}</span>
                </div>
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

        {/* Islands Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Notable Islands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {islands.map((island, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{island.name}</h3>
                <p className="text-gray-600 mb-3">{island.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Significance:</h4>
                  <p className="text-gray-700 text-sm">{island.significance}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {island.activities.map((activity, aIndex) => (
                      <span key={aIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Heritage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cultural Heritage</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">Bakiga Culture</h3>
                <p className="text-yellow-800 mb-4">
                  The Bakiga people have lived around Lake Bunyonyi for centuries, developing a rich culture 
                  adapted to the mountainous terrain. They're known for their terraced farming, traditional 
                  crafts, and strong community bonds.
                </p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Terraced agriculture on steep hillsides</li>
                  <li>• Traditional basket weaving and crafts</li>
                  <li>• Folk stories and oral traditions</li>
                  <li>• Traditional music and dance</li>
                  <li>• Community-based tourism initiatives</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">Historical Sites</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-900">Punishment Island</h4>
                    <p className="text-yellow-700 text-sm">
                      Historical site where unmarried pregnant girls were abandoned as punishment
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-900">Traditional Villages</h4>
                    <p className="text-yellow-700 text-sm">
                      Authentic communities maintaining traditional Bakiga lifestyle
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-900">Terraced Landscapes</h4>
                    <p className="text-yellow-700 text-sm">
                      Ancient agricultural terraces carved into mountainsides
                    </p>
                  </div>
                </div>
              </div>
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
              <h3 className="text-xl font-semibold text-blue-900 mb-4">2-Day Relaxation Retreat</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-900">Day 1: Arrival & Lake Activities</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Arrive and check-in at lakeside lodge</li>
                    <li>• Afternoon canoeing to nearby islands</li>
                    <li>• Swimming in safe lake waters</li>
                    <li>• Sunset viewing from lodge terrace</li>
                    <li>• Traditional dinner with local entertainment</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-900">Day 2: Culture & Nature</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Morning bird watching walk</li>
                    <li>• Visit to Punishment Island</li>
                    <li>• Cultural tour of local village</li>
                    <li>• Lunch with lake views</li>
                    <li>• Departure or extend stay</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">3-Day Cultural Immersion</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-900">Day 1: Lake Exploration</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Island hopping by dugout canoe</li>
                    <li>• Visit Bushara Island eco-camp</li>
                    <li>• Swimming and relaxation</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-900">Day 2: Cultural Activities</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Village walks through terraced hills</li>
                    <li>• Traditional craft workshops</li>
                    <li>• Community interaction and stories</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-900">Day 3: Nature & Departure</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Early morning bird watching</li>
                    <li>• Nature walk to viewpoints</li>
                    <li>• Final lake activities and departure</li>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">From Kampala</h3>
                <p className="text-gray-600 mb-3">
                  Drive southwest for 6-7 hours (420km) via Masaka-Mbarara-Kabale route.
                </p>
                <p className="text-gray-600 mb-3">
                  Good tarmac road to Kabale, then 8km on murram road to the lake.
                </p>
                <p className="text-gray-600">
                  Public transport available via Kabale town.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Combined with Other Destinations</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Bwindi:</strong> 1-2 hours drive - perfect combination</li>
                  <li><strong>Queen Elizabeth:</strong> 3-4 hours via Ishasha</li>
                  <li><strong>Rwanda:</strong> 2 hours to Kigali via Katuna border</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  Often included in southwestern Uganda safari circuits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Experience Uganda's Switzerland</h2>
          <p className="text-xl mb-6 opacity-90">
            Discover the serene beauty of Lake Bunyonyi - perfect for relaxation, culture, and stunning scenery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Lake Experience
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

export default LakeBunyonyiPage;