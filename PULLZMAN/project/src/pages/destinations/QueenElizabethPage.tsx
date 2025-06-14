import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Binary as Binoculars, Ship, TreePine } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const QueenElizabethPage = () => {
  const highlights = [
    "Tree-climbing lions in Ishasha sector",
    "Kazinga Channel boat safari",
    "Chimpanzee trekking in Kyambura Gorge",
    "Over 600 bird species",
    "Crater lakes and volcanic landscapes"
  ];

  const sectors = [
    {
      name: "Mweya Peninsula",
      description: "Main tourist hub with stunning views of Kazinga Channel",
      activities: ["Game drives", "Boat cruises", "Bird watching", "Nature walks"]
    },
    {
      name: "Kazinga Channel",
      description: "32km natural channel connecting Lakes Edward and George",
      activities: ["Boat safari", "Hippo viewing", "Bird watching", "Sunset cruises"]
    },
    {
      name: "Ishasha Sector",
      description: "Southern sector famous for tree-climbing lions",
      activities: ["Lion tracking", "Game drives", "Photography", "Bush walks"]
    },
    {
      name: "Kyambura Gorge",
      description: "Underground forest perfect for chimpanzee trekking",
      activities: ["Chimp trekking", "Forest walks", "Bird watching", "Photography"]
    }
  ];

  const wildlife = [
    "Tree-climbing Lions", "Elephants", "Buffalos", "Leopards", "Hippos",
    "Chimpanzees", "Uganda Kob", "Warthogs", "Waterbucks", "Topi",
    "Over 600 bird species", "Nile Crocodiles"
  ];

  const accommodation = [
    {
      category: "Luxury",
      options: ["Mweya Safari Lodge", "Katara Lodge", "Kyambura Gorge Lodge"],
      priceRange: "$300-600/night"
    },
    {
      category: "Mid-range",
      options: ["Park View Safari Lodge", "Bush Lodge", "Enganzi Game Lodge"],
      priceRange: "$120-250/night"
    },
    {
      category: "Budget",
      options: ["Mweya Hostel", "Simba Safari Camp", "UWA Bandas"],
      priceRange: "$30-80/night"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Queen Elizabeth National Park"
        subtitle="Home to Tree-climbing Lions and Kazinga Channel Boat Safari"
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
                Queen Elizabeth National Park is Uganda's most popular savanna park and most diverse protected area. 
                Located in western Uganda, the park spans the equator and offers spectacular game viewing, 
                boat cruises on the Kazinga Channel, and the unique opportunity to see tree-climbing lions.
              </p>
              <p className="text-gray-600 mb-6">
                Covering 1,978 square kilometers, the park is known for its diverse ecosystems including savanna, 
                wetlands, lowland forest, and crater lakes. It's home to over 95 mammal species and more than 600 bird species, 
                making it a premier destination for wildlife enthusiasts and bird watchers.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">1,978 km²</p>
                  <p className="text-sm text-gray-600">Area</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">95+</p>
                  <p className="text-sm text-gray-600">Mammal Species</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Camera className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">600+</p>
                  <p className="text-sm text-gray-600">Bird Species</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Equator</p>
                  <p className="text-sm text-gray-600">Crosses Park</p>
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
                    <span className="font-semibold text-green-600">$40 USD/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Dec-Feb, Jun-Sep</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Western Uganda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Kampala:</span>
                    <span className="font-medium">5-6 hours drive</span>
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

        {/* Park Sectors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Park Sectors & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{sector.name}</h3>
                <p className="text-gray-600 mb-4">{sector.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sector.activities.map((activity, actIndex) => (
                      <span key={actIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {activity}
                      </span>
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

        {/* Best Time to Visit */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Time to Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Dry Season (Dec-Feb, Jun-Sep)</h3>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• Best for game viewing as animals gather around water sources</li>
                <li>• Easier road access and clear weather</li>
                <li>• Perfect for photography with excellent visibility</li>
                <li>• Ideal for boat cruises on Kazinga Channel</li>
                <li>• Tree-climbing lions more easily spotted</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Wet Season (Mar-May, Oct-Nov)</h3>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• Lush green landscapes and beautiful scenery</li>
                <li>• Peak bird watching season with migratory species</li>
                <li>• Animals give birth during this period</li>
                <li>• Fewer crowds and lower accommodation rates</li>
                <li>• Some roads may be challenging</li>
              </ul>
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
                  From Kampala: 5-6 hours drive (420km) via Masaka-Mbarara highway to Katunguru gate.
                </p>
                <p className="text-gray-600 mb-3">
                  Alternative routes: Via Fort Portal (6-7 hours) for those combining with Kibale Forest.
                </p>
                <p className="text-gray-600">
                  All-weather roads make the park accessible year-round.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">By Air</h3>
                <p className="text-gray-600 mb-3">
                  Scheduled flights from Entebbe to Kasese Airfield (1.5 hours), then 2-hour drive to park.
                </p>
                <p className="text-gray-600 mb-3">
                  Charter flights available to Mweya Airfield within the park.
                </p>
                <p className="text-gray-600">
                  Flight transfers significantly reduce travel time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Experience Queen Elizabeth National Park</h2>
          <p className="text-xl mb-6 opacity-90">
            Witness tree-climbing lions, enjoy boat safaris, and explore Uganda's most diverse wildlife sanctuary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Safari
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Plan Custom Tour
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QueenElizabethPage;