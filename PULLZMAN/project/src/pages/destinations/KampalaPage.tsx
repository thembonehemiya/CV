import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Building, Car, TreePine } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const KampalaPage = () => {
  const highlights = [
    "Uganda Museum and cultural heritage sites",
    "Kasubi Tombs - UNESCO World Heritage Site", 
    "Vibrant markets and craft centers",
    "Religious sites and architectural landmarks",
    "Bustling nightlife and entertainment"
  ];

  const attractions = [
    {
      name: "Kasubi Tombs",
      description: "UNESCO World Heritage Site and burial ground of Buganda kings",
      duration: "2-3 hours",
      category: "Cultural Heritage",
      highlights: ["Royal burial site", "Traditional architecture", "Buganda history"]
    },
    {
      name: "Uganda Museum",
      description: "National museum showcasing Uganda's cultural and natural heritage",
      duration: "2-3 hours", 
      category: "Museum",
      highlights: ["Archaeological artifacts", "Cultural exhibits", "Natural history"]
    },
    {
      name: "Kabaka's Palace",
      description: "Official residence of the King of Buganda with guided tours",
      duration: "1-2 hours",
      category: "Royal Site",
      highlights: ["Royal residence", "Buganda parliament", "Traditional ceremonies"]
    },
    {
      name: "Owino Market",
      description: "Largest market in East Africa with everything from crafts to food",
      duration: "2-4 hours",
      category: "Shopping",
      highlights: ["Local crafts", "Fresh produce", "Cultural immersion"]
    },
    {
      name: "Namirembe Cathedral",
      description: "Historic Anglican cathedral with panoramic city views",
      duration: "1 hour",
      category: "Religious Site",
      highlights: ["Historic architecture", "City views", "Religious significance"]
    },
    {
      name: "Rubaga Cathedral",
      description: "Catholic cathedral and seat of the Archbishop of Kampala",
      duration: "1 hour",
      category: "Religious Site", 
      highlights: ["Catholic heritage", "Beautiful architecture", "Spiritual significance"]
    }
  ];

  const neighborhoods = [
    {
      name: "Old Kampala",
      description: "Historic heart with colonial architecture and cultural sites",
      highlights: ["Kasubi Tombs", "Old Fort", "Traditional markets"]
    },
    {
      name: "Nakasero",
      description: "Upscale area with government buildings and hotels",
      highlights: ["Parliament", "Hotels", "Restaurants"]
    },
    {
      name: "Kololo",
      description: "Diplomatic quarter with embassies and upscale residences",
      highlights: ["Embassies", "Golf course", "International schools"]
    },
    {
      name: "Industrial Area",
      description: "Business district with markets and commercial activities",
      highlights: ["Owino Market", "Business centers", "Transport hubs"]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Kampala City Tours"
        subtitle="Discover Uganda's Vibrant Capital - Culture, History & Urban Life"
        backgroundImage="https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg"
        showCTA={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">City Overview</h2>
              <p className="text-gray-600 mb-6">
                Kampala, Uganda's vibrant capital city, is built on seven hills and serves as the country's 
                political, economic, and cultural center. With a rich history dating back to the Buganda Kingdom, 
                the city offers a fascinating blend of traditional African culture and modern urban life.
              </p>
              <p className="text-gray-600 mb-6">
                From the UNESCO World Heritage Kasubi Tombs to bustling markets like Owino, Kampala provides 
                visitors with authentic cultural experiences, historical insights, and a taste of contemporary 
                East African city life. The city is also the perfect starting point for safaris to Uganda's national parks.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Building className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">1.5M+</p>
                  <p className="text-sm text-gray-600">Population</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">7 Hills</p>
                  <p className="text-sm text-gray-600">City Built On</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">UNESCO</p>
                  <p className="text-sm text-gray-600">Heritage Sites</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Car className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Gateway</p>
                  <p className="text-sm text-gray-600">To Safaris</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">City Highlights</h3>
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
                    <span className="text-gray-600">City Tour:</span>
                    <span className="font-semibold text-green-600">From $35/person</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Year-round</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">English, Luganda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Currency:</span>
                    <span className="font-medium">Ugandan Shilling</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book City Tour
                </Link>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Tour Options</h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>• Half-day cultural tour</li>
                  <li>• Full-day comprehensive tour</li>
                  <li>• Walking tours of specific areas</li>
                  <li>• Night life and entertainment tours</li>
                  <li>• Food and market tours</li>
                  <li>• Religious and spiritual tours</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Main Attractions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Main Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{attraction.name}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    {attraction.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{attraction.description}</p>
                <div className="mb-3">
                  <span className="font-semibold text-gray-900 text-sm">Duration: </span>
                  <span className="text-gray-600 text-sm">{attraction.duration}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {attraction.highlights.map((highlight, hIndex) => (
                      <span key={hIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">City Neighborhoods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{neighborhood.name}</h3>
                <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight, hIndex) => (
                      <span key={hIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {highlight}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample City Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Half-Day Cultural Tour (4 hours)</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-green-900">Kasubi Tombs</h4>
                    <p className="text-green-700 text-sm">UNESCO World Heritage Site and royal burial grounds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-green-900">Uganda Museum</h4>
                    <p className="text-green-700 text-sm">National museum with cultural and historical exhibits</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-green-900">Craft Market</h4>
                    <p className="text-green-700 text-sm">Local crafts and souvenir shopping</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-green-800 font-semibold">Price: $35 per person</p>
                <p className="text-green-700 text-sm">Includes: Transport, guide, entrance fees</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Full-Day Comprehensive Tour (8 hours)</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Morning: Cultural Sites</h4>
                    <p className="text-blue-700 text-sm">Kasubi Tombs, Kabaka's Palace, Uganda Museum</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Lunch Break</h4>
                    <p className="text-blue-700 text-sm">Traditional Ugandan lunch at local restaurant</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Afternoon: Markets & Religious Sites</h4>
                    <p className="text-blue-700 text-sm">Owino Market, Namirembe & Rubaga Cathedrals</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-blue-800 font-semibold">Price: $65 per person</p>
                <p className="text-blue-700 text-sm">Includes: Transport, guide, lunch, entrance fees</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Getting Around</h3>
              <ul className="text-yellow-800 text-sm space-y-2">
                <li>• Boda-bodas (motorcycle taxis)</li>
                <li>• Matatus (shared minibuses)</li>
                <li>• Private taxis and Uber</li>
                <li>• Walking in city center</li>
                <li>• Organized tour vehicles</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Safety Tips</h3>
              <ul className="text-red-800 text-sm space-y-2">
                <li>• Stay aware of surroundings</li>
                <li>• Don't display valuable items</li>
                <li>• Use reputable transport</li>
                <li>• Travel with a guide in markets</li>
                <li>• Keep copies of documents</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">What to Bring</h3>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• Comfortable walking shoes</li>
                <li>• Light, modest clothing</li>
                <li>• Camera and extra batteries</li>
                <li>• Small backpack</li>
                <li>• Cash in small denominations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Food & Shopping */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Food & Shopping</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Local Cuisine</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Matooke:</strong> Steamed green bananas (national dish)</li>
                  <li>• <strong>Posho:</strong> Maize flour staple</li>
                  <li>• <strong>Groundnut sauce:</strong> Peanut-based stew</li>
                  <li>• <strong>Rolex:</strong> Popular street food (egg roll)</li>
                  <li>• <strong>Fresh tropical fruits:</strong> Mangoes, pineapples, passion fruit</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Shopping</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Owino Market:</strong> Largest market in East Africa</li>
                  <li>• <strong>Craft markets:</strong> Traditional crafts and souvenirs</li>
                  <li>• <strong>Nakasero Market:</strong> Fresh produce and local goods</li>
                  <li>• <strong>Shopping malls:</strong> Garden City, Acacia Mall</li>
                  <li>• <strong>Art galleries:</strong> Local contemporary art</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Explore Uganda's Vibrant Capital</h2>
          <p className="text-xl mb-6 opacity-90">
            Discover the rich culture, history, and urban energy of Kampala with our expert local guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book City Tour
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Customize Tour
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KampalaPage;