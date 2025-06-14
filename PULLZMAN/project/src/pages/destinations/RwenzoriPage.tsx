import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Mountain, Thermometer, Calendar } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const RwenzoriPage = () => {
  const highlights = [
    "Snow-capped peaks and glaciers in Africa",
    "UNESCO World Heritage Site",
    "Unique alpine vegetation zones",
    "Margherita Peak (5,109m) - 3rd highest in Africa",
    "Multi-day mountaineering expeditions"
  ];

  const trekkingRoutes = [
    {
      name: "Central Circuit Trail",
      duration: "7-9 days",
      difficulty: "Challenging",
      summit: "Margherita Peak (5,109m)",
      description: "Classic route to the highest peak via Kitandara Lakes"
    },
    {
      name: "Kilembe Trail",
      duration: "8-10 days",
      difficulty: "Very Challenging", 
      summit: "Margherita Peak (5,109m)",
      description: "Scenic route through beautiful valleys and lakes"
    },
    {
      name: "Bukurungu Trail",
      duration: "6-8 days",
      difficulty: "Moderate to Challenging",
      summit: "Weismann Peak (4,620m)",
      description: "Less crowded route with stunning views"
    }
  ];

  const vegetationZones = [
    {
      zone: "Montane Forest",
      elevation: "1,000-2,500m",
      features: ["Dense tropical forest", "Primates and birds", "Waterfalls"]
    },
    {
      zone: "Bamboo Zone", 
      elevation: "2,500-3,000m",
      features: ["Bamboo thickets", "Elephant trails", "Cool temperatures"]
    },
    {
      zone: "Heather Zone",
      elevation: "3,000-4,000m",
      features: ["Giant heather trees", "Lobelia plants", "Mist and clouds"]
    },
    {
      zone: "Alpine Zone",
      elevation: "4,000-4,500m",
      features: ["Giant groundsels", "Everlasting flowers", "Rocky terrain"]
    },
    {
      zone: "Glacial Zone",
      elevation: "4,500m+",
      features: ["Snow and ice", "Glaciers", "Extreme conditions"]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Rwenzori Mountains National Park"
        subtitle="Mountains of the Moon - Snow-capped Peaks in Africa"
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
                The Rwenzori Mountains, known as the "Mountains of the Moon," are Africa's highest mountain range 
                and one of the most spectacular alpine environments on the continent. This UNESCO World Heritage Site 
                features snow-capped peaks, glaciers, and unique vegetation zones that create an otherworldly landscape.
              </p>
              <p className="text-gray-600 mb-6">
                Rising to 5,109 meters at Margherita Peak, the Rwenzoris offer some of the most challenging and 
                rewarding mountaineering experiences in Africa. The range spans the border between Uganda and 
                the Democratic Republic of Congo, with the Ugandan side protecting 996 square kilometers of pristine mountain wilderness.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Mountain className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">5,109m</p>
                  <p className="text-sm text-gray-600">Highest Peak</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Thermometer className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Glaciers</p>
                  <p className="text-sm text-gray-600">Snow & Ice</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">UNESCO</p>
                  <p className="text-sm text-gray-600">World Heritage</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">7-10 Days</p>
                  <p className="text-sm text-gray-600">Trek Duration</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Mountain Highlights</h3>
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
                    <span className="text-gray-600">Trek Cost:</span>
                    <span className="font-semibold text-green-600">From $650/person</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Dec-Feb, Jun-Aug</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">Challenging</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Kampala:</span>
                    <span className="font-medium">6-7 hours drive</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book Mountain Trek
                </Link>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Physical Requirements</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Excellent physical fitness required</li>
                  <li>• Previous hiking experience recommended</li>
                  <li>• Minimum age: 16 years</li>
                  <li>• Medical clearance advised</li>
                  <li>• Altitude acclimatization important</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trekking Routes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trekking Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trekkingRoutes.map((route, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{route.name}</h3>
                <p className="text-gray-600 mb-4">{route.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Duration:</span>
                    <span className="text-gray-600">{route.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Difficulty:</span>
                    <span className="text-gray-600">{route.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Summit:</span>
                    <span className="text-gray-600">{route.summit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vegetation Zones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vegetation Zones</h2>
          <div className="space-y-4">
            {vegetationZones.map((zone, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{zone.zone}</h3>
                    <p className="text-green-600 font-medium">{zone.elevation}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap gap-2">
                      {zone.features.map((feature, fIndex) => (
                        <span key={fIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Itinerary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample 8-Day Central Circuit Itinerary</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
                <div className="md:col-span-1 font-semibold text-green-600">Day 1</div>
                <div className="md:col-span-7">
                  <strong>Nyakalengija (1,615m) to Nyabitaba Hut (2,651m)</strong>
                  <p className="text-gray-600">5-6 hours trek through montane forest</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
                <div className="md:col-span-1 font-semibold text-green-600">Day 2</div>
                <div className="md:col-span-7">
                  <strong>Nyabitaba to John Matte Hut (3,414m)</strong>
                  <p className="text-gray-600">7-8 hours through bamboo and heather zones</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
                <div className="md:col-span-1 font-semibold text-green-600">Day 3</div>
                <div className="md:col-span-7">
                  <strong>John Matte to Bujuku Hut (3,962m)</strong>
                  <p className="text-gray-600">4-5 hours to alpine zone with stunning views</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
                <div className="md:col-span-1 font-semibold text-green-600">Day 4</div>
                <div className="md:col-span-7">
                  <strong>Bujuku to Elena Hut (4,541m)</strong>
                  <p className="text-gray-600">5-6 hours crossing Scott Elliot Pass</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
                <div className="md:col-span-1 font-semibold text-green-600">Day 5</div>
                <div className="md:col-span-7">
                  <strong>Summit Day - Margherita Peak (5,109m)</strong>
                  <p className="text-gray-600">Early start for summit attempt, return to Kitandara</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
                <div className="md:col-span-1 font-semibold text-green-600">Day 6-8</div>
                <div className="md:col-span-7">
                  <strong>Descent via Guy Yeoman and Nyabitaba</strong>
                  <p className="text-gray-600">Gradual descent back to Nyakalengija</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Included</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Professional mountain guides</li>
                <li>• Porters for equipment and food</li>
                <li>• All meals during the trek</li>
                <li>• Mountain hut accommodation</li>
                <li>• Park entrance fees</li>
                <li>• Rescue insurance</li>
                <li>• Basic climbing equipment</li>
                <li>• Transportation to/from trailhead</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Not Included</h3>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Personal climbing gear</li>
                <li>• Sleeping bags and mats</li>
                <li>• Travel insurance</li>
                <li>• Tips for guides and porters</li>
                <li>• Personal expenses</li>
                <li>• Accommodation before/after trek</li>
                <li>• International flights</li>
                <li>• Visa fees</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Essential Gear */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Gear</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Clothing</h3>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Waterproof jacket and pants</li>
                  <li>• Insulated jacket</li>
                  <li>• Thermal underwear</li>
                  <li>• Hiking pants and shorts</li>
                  <li>• Warm hat and sun hat</li>
                  <li>• Waterproof gloves</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Equipment</h3>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Mountaineering boots</li>
                  <li>• Crampons and ice axe</li>
                  <li>• Climbing harness</li>
                  <li>• Helmet</li>
                  <li>• Headlamp with extra batteries</li>
                  <li>• Trekking poles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Personal Items</h3>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Sleeping bag (-10°C rating)</li>
                  <li>• Sleeping mat</li>
                  <li>• Water bottles/hydration system</li>
                  <li>• Sunglasses and sunscreen</li>
                  <li>• First aid kit</li>
                  <li>• Camera and extra batteries</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Conquer Africa's Highest Mountain Range</h2>
          <p className="text-xl mb-6 opacity-90">
            Challenge yourself with an epic mountaineering adventure in the legendary Mountains of the Moon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Mountain Trek
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Detailed Info
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RwenzoriPage;