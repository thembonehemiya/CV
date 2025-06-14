import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, TreePine, Binary as Binoculars } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const KibalePage = () => {
  const highlights = [
    "Chimpanzee tracking experience",
    "13 primate species in one forest",
    "Over 370 bird species",
    "Bigodi Wetland Sanctuary",
    "Night walks and forest hikes"
  ];

  const primates = [
    "Chimpanzees", "Red Colobus Monkeys", "L'Hoest's Monkeys", 
    "Blue Monkeys", "Red-tailed Monkeys", "Grey-cheeked Mangabeys",
    "Olive Baboons", "Vervet Monkeys", "Black and White Colobus"
  ];

  const activities = [
    {
      name: "Chimpanzee Tracking",
      description: "Track habituated chimpanzee communities in their natural habitat",
      duration: "2-5 hours",
      difficulty: "Moderate",
      price: "$200 USD"
    },
    {
      name: "Chimpanzee Habituation",
      description: "Full day experience with researchers and chimpanzees",
      duration: "Full day",
      difficulty: "Challenging",
      price: "$250 USD"
    },
    {
      name: "Bigodi Wetland Walk",
      description: "Community-run swamp walk for birds and primates",
      duration: "2-3 hours",
      difficulty: "Easy",
      price: "$30 USD"
    },
    {
      name: "Night Forest Walk",
      description: "Spot nocturnal primates and forest creatures",
      duration: "2-3 hours",
      difficulty: "Moderate",
      price: "$40 USD"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Kibale Forest National Park"
        subtitle="Primate Capital of the World - Home to Chimpanzees"
        backgroundImage="https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg"
        showCTA={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Park Overview</h2>
              <p className="text-gray-600 mb-6">
                Kibale Forest National Park is renowned as the primate capital of the world, protecting one of the 
                most diverse and accessible primate populations on Earth. Located in western Uganda near Fort Portal, 
                this 795-square-kilometer park is home to 13 primate species, including our closest relatives - the chimpanzees.
              </p>
              <p className="text-gray-600 mb-6">
                The park's tropical rainforest creates the perfect habitat for over 1,500 chimpanzees, making it 
                one of the best places in Africa for chimpanzee tracking. Beyond primates, Kibale hosts over 370 bird species 
                and numerous other wildlife, making it a biodiversity hotspot of global significance.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">795 km²</p>
                  <p className="text-sm text-gray-600">Forest Area</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">1,500+</p>
                  <p className="text-sm text-gray-600">Chimpanzees</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Camera className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">13</p>
                  <p className="text-sm text-gray-600">Primate Species</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Binoculars className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">370+</p>
                  <p className="text-sm text-gray-600">Bird Species</p>
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
                    <span className="text-gray-600">Chimp Permit:</span>
                    <span className="font-semibold text-green-600">$200 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Year-round</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Near Fort Portal</span>
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
                  Book Chimp Trek
                </Link>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Primate Species</h3>
                <div className="flex flex-wrap gap-2">
                  {primates.slice(0, 6).map((primate, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {primate}
                    </span>
                  ))}
                </div>
                <p className="text-blue-700 text-sm mt-2">+ {primates.length - 6} more species</p>
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
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{activity.name}</h3>
                  <span className="text-green-600 font-bold">{activity.price}</span>
                </div>
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

        {/* Chimpanzee Tracking Info */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Chimpanzee Tracking Experience</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What to Expect</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Early morning briefing at Kanyanchu Visitor Center</li>
                  <li>• 2-5 hour forest trek with experienced guides</li>
                  <li>• 1 hour with chimpanzees once located</li>
                  <li>• Small groups of maximum 6 people</li>
                  <li>• 90% success rate of finding chimpanzees</li>
                  <li>• Photography allowed (no flash)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Chimpanzee Communities</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Kanyanchu Community</h4>
                    <p className="text-sm text-gray-600">Main tracking group with 120+ individuals</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Sebitoli Community</h4>
                    <p className="text-sm text-gray-600">Northern sector with 80+ chimpanzees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Time to Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Dry Season (Dec-Feb, Jun-Sep)</h3>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• Easier forest trekking with less mud</li>
                <li>• Better road access to the park</li>
                <li>• Chimpanzees easier to spot and photograph</li>
                <li>• Ideal weather for forest walks</li>
                <li>• Peak tourist season - book in advance</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Wet Season (Mar-May, Oct-Nov)</h3>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• Lush green forest with beautiful scenery</li>
                <li>• Peak fruiting season - active chimpanzees</li>
                <li>• Excellent bird watching opportunities</li>
                <li>• Fewer crowds and lower accommodation rates</li>
                <li>• Forest trails can be muddy and slippery</li>
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
                  From Kampala: 5-6 hours drive (320km) via Mubende to Fort Portal, then 40km to Kanyanchu.
                </p>
                <p className="text-gray-600 mb-3">
                  Alternative route via Masaka-Mbarara-Kamwenge (longer but scenic).
                </p>
                <p className="text-gray-600">
                  Good tarmac roads make the park accessible year-round.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">By Air</h3>
                <p className="text-gray-600 mb-3">
                  Charter flights available from Entebbe to Kasese Airfield (1 hour), then 2-hour drive.
                </p>
                <p className="text-gray-600 mb-3">
                  Scheduled flights to Fort Portal airstrip when operational.
                </p>
                <p className="text-gray-600">
                  Air transfers reduce travel time significantly.
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
                <li>• Sturdy hiking boots with good grip</li>
                <li>• Long-sleeved shirts and long pants</li>
                <li>• Rain jacket and hat</li>
                <li>• Gardening gloves for grabbing branches</li>
                <li>• Camera with extra batteries</li>
                <li>• Insect repellent and sunscreen</li>
                <li>• Walking stick (available at park)</li>
                <li>• Plenty of water and snacks</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Rules & Regulations</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Minimum age: 12 years</li>
                <li>• Maximum 6 people per chimpanzee group</li>
                <li>• Maintain 8-meter distance from chimps</li>
                <li>• No flash photography</li>
                <li>• No eating or drinking near chimps</li>
                <li>• Cannot track if you have flu/cold</li>
                <li>• Follow guide instructions at all times</li>
                <li>• Permits must be booked in advance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Meet Our Closest Relatives?</h2>
          <p className="text-xl mb-6 opacity-90">
            Experience the thrill of encountering chimpanzees in their natural forest home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Chimp Trek
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

export default KibalePage;