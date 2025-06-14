import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Mountain, Droplets, TreePine } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const MountElgonPage = () => {
  const highlights = [
    "World's largest volcanic caldera (40km diameter)",
    "Spectacular waterfalls including Sipi Falls",
    "Ancient caves with salt mining elephants",
    "Unique montane vegetation and wildlife",
    "Cultural encounters with Bagisu people"
  ];

  const activities = [
    {
      name: "Sipi Falls Hike",
      description: "Visit the famous three-tier Sipi Falls with stunning views",
      duration: "Half day",
      difficulty: "Easy to Moderate",
      price: "$25 USD"
    },
    {
      name: "Caldera Rim Hike",
      description: "Multi-day trek to Wagagai Peak (4,321m) and caldera rim",
      duration: "4-6 days",
      difficulty: "Challenging",
      price: "$300-500 USD"
    },
    {
      name: "Cave Exploration",
      description: "Explore ancient caves where elephants come to mine salt",
      duration: "2-3 hours",
      difficulty: "Moderate",
      price: "$30 USD"
    },
    {
      name: "Coffee Tours",
      description: "Learn about coffee growing and processing in Sipi area",
      duration: "2-3 hours",
      difficulty: "Easy",
      price: "$20 USD"
    },
    {
      name: "Cultural Visits",
      description: "Meet the Bagisu people and learn about circumcision ceremonies",
      duration: "Half day",
      difficulty: "Easy",
      price: "$35 USD"
    },
    {
      name: "Rock Climbing",
      description: "Rock climbing on the volcanic cliffs around Sipi Falls",
      duration: "Half day",
      difficulty: "Moderate to Challenging",
      price: "$40 USD"
    }
  ];

  const waterfalls = [
    {
      name: "Sipi Falls",
      height: "100m (main fall)",
      description: "Three-tier waterfall system, most famous in Uganda"
    },
    {
      name: "Chebonet Falls",
      height: "80m",
      description: "Hidden gem with swimming opportunities"
    },
    {
      name: "Kapkwai Falls",
      height: "60m",
      description: "Accessible waterfall with forest walks"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Mount Elgon National Park"
        subtitle="Ancient Volcano with World's Largest Caldera & Sipi Falls"
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
                Mount Elgon National Park protects an ancient extinct volcano that straddles the Uganda-Kenya border. 
                At 4,000 square kilometers, it's one of Uganda's largest parks and home to the world's largest volcanic caldera, 
                measuring 40 kilometers in diameter. The mountain's highest peak, Wagagai, rises to 4,321 meters.
              </p>
              <p className="text-gray-600 mb-6">
                The park is famous for the spectacular Sipi Falls, ancient caves where elephants mine salt, 
                and diverse ecosystems ranging from montane forest to alpine moorland. The area is also culturally 
                significant to the Bagisu people, who consider Mount Elgon sacred and perform traditional circumcision 
                ceremonies on its slopes.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Mountain className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">4,321m</p>
                  <p className="text-sm text-gray-600">Wagagai Peak</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">40km</p>
                  <p className="text-sm text-gray-600">Caldera Diameter</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Droplets className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Sipi Falls</p>
                  <p className="text-sm text-gray-600">Famous Waterfalls</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">4,000 km²</p>
                  <p className="text-sm text-gray-600">Park Area</p>
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
                    <span className="font-medium">Dec-Mar, Jun-Aug</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Eastern Uganda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Kampala:</span>
                    <span className="font-medium">4-5 hours drive</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book Adventure
                </Link>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Famous Waterfalls</h3>
                <div className="space-y-2">
                  {waterfalls.map((fall, index) => (
                    <div key={index} className="bg-blue-100 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-900">{fall.name}</h4>
                      <p className="text-blue-700 text-sm">{fall.height}</p>
                      <p className="text-blue-600 text-xs">{fall.description}</p>
                    </div>
                  ))}
                </div>
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

        {/* Sipi Falls Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sipi Falls - Uganda's Most Beautiful Waterfalls</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">The Three Falls</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Main Fall (100m)</h4>
                    <p className="text-gray-600 text-sm">The highest and most spectacular fall, perfect for photography</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Middle Fall (85m)</h4>
                    <p className="text-gray-600 text-sm">Accessible fall with swimming pool at the base</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Lower Fall (75m)</h4>
                    <p className="text-gray-600 text-sm">Easiest to reach with beautiful surrounding vegetation</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Hiking Options</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>Half Day Hike:</strong> Visit all three falls (4-5 hours)</li>
                  <li>• <strong>Full Day Trek:</strong> Extended hike with lunch by the falls</li>
                  <li>• <strong>Sunrise Hike:</strong> Early morning trek for best lighting</li>
                  <li>• <strong>Photography Tour:</strong> Guided tour for best photo spots</li>
                  <li>• <strong>Swimming Experience:</strong> Cool off in natural pools</li>
                </ul>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">What to Bring:</h4>
                  <p className="text-gray-600 text-sm">Hiking boots, rain jacket, camera, swimwear, snacks, and water</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mount Elgon Trekking */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mount Elgon Trekking Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Sasa Trail (4 days)</h3>
              <p className="text-green-800 mb-3">
                The shortest and steepest route to Wagagai Peak, passing through all vegetation zones.
              </p>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Day 1: Budadiri to Sasa River Camp (2,900m)</li>
                <li>• Day 2: Sasa to Mude Cave Camp (3,500m)</li>
                <li>• Day 3: Summit Wagagai Peak (4,321m)</li>
                <li>• Day 4: Descent to Budadiri</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Sipi Trail (6 days)</h3>
              <p className="text-blue-800 mb-3">
                Longer, more scenic route starting from Sipi Falls with gradual ascent.
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Day 1: Sipi to Tutum Cave (2,667m)</li>
                <li>• Day 2: Tutum to Kajeri Camp (3,383m)</li>
                <li>• Day 3: Kajeri to Mude Cave (3,500m)</li>
                <li>• Day 4: Summit attempt and return</li>
                <li>• Day 5-6: Descent via different route</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cultural Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural Experiences</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Bagisu Culture</h3>
                <p className="text-yellow-800 mb-3">
                  The Bagisu people consider Mount Elgon sacred and have lived on its slopes for centuries. 
                  They're famous for their traditional circumcision ceremonies called "Imbalu."
                </p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Traditional dance performances</li>
                  <li>• Coffee farming demonstrations</li>
                  <li>• Local craft making workshops</li>
                  <li>• Traditional medicine tours</li>
                  <li>• Homestay experiences available</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Coffee Tours</h3>
                <p className="text-yellow-800 mb-3">
                  The slopes of Mount Elgon produce some of Uganda's finest Arabica coffee. 
                  Learn about the entire process from bean to cup.
                </p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Visit coffee plantations</li>
                  <li>• Learn harvesting techniques</li>
                  <li>• Processing and roasting demonstrations</li>
                  <li>• Coffee tasting sessions</li>
                  <li>• Purchase fresh coffee beans</li>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">To Sipi Falls</h3>
                <p className="text-gray-600 mb-3">
                  From Kampala: 4-5 hours drive (280km) via Jinja-Mbale road to Sipi.
                </p>
                <p className="text-gray-600 mb-3">
                  Good tarmac road to Mbale, then 45km on murram road to Sipi Falls.
                </p>
                <p className="text-gray-600">
                  Public transport available via Mbale town.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">To Budadiri (Sasa Trail)</h3>
                <p className="text-gray-600 mb-3">
                  From Mbale: 45 minutes drive to Budadiri town, the starting point for Sasa trail.
                </p>
                <p className="text-gray-600 mb-3">
                  Park headquarters and guide services available in Budadiri.
                </p>
                <p className="text-gray-600">
                  4WD vehicle recommended for final approach to trailhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Discover Uganda's Ancient Volcano</h2>
          <p className="text-xl mb-6 opacity-90">
            Experience spectacular waterfalls, ancient caves, and the world's largest volcanic caldera
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Adventure
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Plan Custom Trek
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MountElgonPage;