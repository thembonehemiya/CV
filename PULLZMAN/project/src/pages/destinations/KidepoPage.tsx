import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Mountain, TreePine, Binary as Binoculars } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const KidepoPage = () => {
  const highlights = [
    "Uganda's most remote and pristine wilderness",
    "Spectacular savanna landscapes and mountains",
    "Unique wildlife species not found elsewhere in Uganda",
    "Cultural encounters with Karamojong people",
    "Excellent game viewing with minimal crowds"
  ];

  const uniqueWildlife = [
    "Cheetahs", "Bat-eared foxes", "Caracals", "Aardwolves", 
    "Ostriches", "Secretary birds", "Kori bustards", "Carmine bee-eaters"
  ];

  const activities = [
    {
      name: "Game Drives",
      description: "Explore Narus and Kidepo valleys for diverse wildlife viewing",
      duration: "3-4 hours",
      difficulty: "Easy",
      highlights: ["Big cats", "Large herds", "Scenic landscapes"]
    },
    {
      name: "Cultural Visits",
      description: "Meet the Karamojong people and learn about their pastoral lifestyle",
      duration: "Half day",
      difficulty: "Easy",
      highlights: ["Traditional homesteads", "Cattle culture", "Local crafts"]
    },
    {
      name: "Nature Walks",
      description: "Guided walks in the park with armed rangers",
      duration: "2-3 hours",
      difficulty: "Moderate",
      highlights: ["Flora identification", "Animal tracking", "Bird watching"]
    },
    {
      name: "Mountain Hiking",
      description: "Hike to Morungole Mountain for panoramic views",
      duration: "Full day",
      difficulty: "Challenging",
      highlights: ["Summit views", "Unique vegetation", "Photography"]
    }
  ];

  const seasons = [
    {
      season: "Dry Season (Dec-Mar, Jun-Sep)",
      wildlife: "Excellent - animals concentrate around water sources",
      roads: "Good accessibility, clear weather",
      vegetation: "Sparse, excellent visibility",
      temperature: "Hot days (30-35°C), cool nights"
    },
    {
      season: "Wet Season (Apr-May, Oct-Nov)",
      wildlife: "Good - animals dispersed, young animals present",
      roads: "Some roads may be challenging",
      vegetation: "Lush and green, beautiful landscapes",
      temperature: "Moderate (25-30°C), occasional rains"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Kidepo Valley National Park"
        subtitle="Uganda's Remote Wilderness - Pristine Savanna & Unique Wildlife"
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
                Kidepo Valley National Park is Uganda's most remote and arguably most spectacular national park. 
                Located in the rugged, semi-arid valleys between Uganda's borders with Sudan and Kenya, this pristine wilderness 
                offers a safari experience unlike anywhere else in Uganda, with vast savanna landscapes reminiscent of the great East African plains.
              </p>
              <p className="text-gray-600 mb-6">
                Covering 1,442 square kilometers, Kidepo is home to wildlife species found nowhere else in Uganda, 
                including cheetahs, bat-eared foxes, and ostriches. The park's isolation has preserved its wild character, 
                offering visitors an authentic African wilderness experience with minimal human impact and exceptional game viewing opportunities.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">1,442 km²</p>
                  <p className="text-sm text-gray-600">Park Area</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Mountain className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Remote</p>
                  <p className="text-sm text-gray-600">Wilderness</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Binoculars className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">77</p>
                  <p className="text-sm text-gray-600">Mammal Species</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">475+</p>
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
                    <span className="text-gray-600">Park Entry:</span>
                    <span className="font-semibold text-green-600">$40 USD/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Dec-Mar, Jun-Sep</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Northern Uganda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Kampala:</span>
                    <span className="font-medium">10-12 hours drive</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book Safari
                </Link>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Unique Wildlife</h3>
                <p className="text-orange-800 text-sm mb-3">
                  Species found only in Kidepo within Uganda:
                </p>
                <div className="flex flex-wrap gap-2">
                  {uniqueWildlife.slice(0, 6).map((animal, index) => (
                    <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {animal}
                    </span>
                  ))}
                </div>
                <p className="text-orange-700 text-sm mt-2">+ many more unique species</p>
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
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
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
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight, hIndex) => (
                      <span key={hIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Park Sectors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Park Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Narus Valley</h3>
              <p className="text-blue-800 mb-4">
                The main game viewing area with permanent water sources that attract large concentrations of wildlife, 
                especially during the dry season. This is where most game drives take place.
              </p>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• <strong>Wildlife:</strong> Lions, elephants, buffalos, zebras, giraffes</li>
                <li>• <strong>Features:</strong> Narus River, seasonal swamps</li>
                <li>• <strong>Best for:</strong> Game drives, wildlife photography</li>
                <li>• <strong>Distance:</strong> 5km from Apoka headquarters</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Kidepo Valley</h3>
              <p className="text-green-800 mb-4">
                A more remote and seasonal area that offers spectacular scenery and unique wildlife experiences. 
                The Kidepo River flows only during the rainy season.
              </p>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• <strong>Wildlife:</strong> Ostriches, cheetahs, bat-eared foxes</li>
                <li>• <strong>Features:</strong> Hot springs, seasonal river</li>
                <li>• <strong>Best for:</strong> Scenic drives, unique species</li>
                <li>• <strong>Distance:</strong> 40km from Apoka headquarters</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Karamojong Culture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Karamojong Cultural Experience</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">The Karamojong People</h3>
                <p className="text-yellow-800 mb-4">
                  The Karamojong are a pastoral people who have lived in this region for centuries, maintaining 
                  their traditional lifestyle centered around cattle herding. They are known for their distinctive 
                  culture, colorful dress, and strong warrior traditions.
                </p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Traditional homestead visits</li>
                  <li>• Cattle herding demonstrations</li>
                  <li>• Traditional dance performances</li>
                  <li>• Local craft making workshops</li>
                  <li>• Storytelling sessions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">Cultural Activities</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-900">Manyatta Visits</h4>
                    <p className="text-yellow-700 text-sm">Visit traditional homesteads and learn about daily life</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-900">Traditional Dances</h4>
                    <p className="text-yellow-700 text-sm">Experience energetic warrior dances and ceremonies</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-900">Craft Making</h4>
                    <p className="text-yellow-700 text-sm">Learn traditional beadwork and pottery techniques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">When to Visit</h2>
          <div className="space-y-6">
            {seasons.map((season, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{season.season}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Wildlife Viewing</h4>
                    <p className="text-gray-600 text-sm">{season.wildlife}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Road Conditions</h4>
                    <p className="text-gray-600 text-sm">{season.roads}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Vegetation</h4>
                    <p className="text-gray-600 text-sm">{season.vegetation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Temperature</h4>
                    <p className="text-gray-600 text-sm">{season.temperature}</p>
                  </div>
                </div>
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
                  From Kampala: 10-12 hours drive (700km) via Gulu-Kitgum route.
                </p>
                <p className="text-gray-600 mb-3">
                  Alternative route via Mbale-Moroto (slightly longer but scenic).
                </p>
                <p className="text-gray-600">
                  4WD vehicle essential, especially in wet season.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">By Air</h3>
                <p className="text-gray-600 mb-3">
                  Charter flights available from Entebbe to Kidepo airstrip (2 hours).
                </p>
                <p className="text-gray-600 mb-3">
                  Scheduled flights operate during peak season.
                </p>
                <p className="text-gray-600">
                  Flying significantly reduces travel time and fatigue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Accommodation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury</h3>
              <p className="text-green-600 font-semibold mb-4">$400-800/night</p>
              <ul className="space-y-2 text-sm">
                <li>• Apoka Safari Lodge</li>
                <li>• Kidepo Savannah Lodge</li>
                <li>• Private conservancy lodges</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mid-range</h3>
              <p className="text-green-600 font-semibold mb-4">$100-250/night</p>
              <ul className="space-y-2 text-sm">
                <li>• Nga'Moru Wilderness Camp</li>
                <li>• Kidepo River Camp</li>
                <li>• Tented camps</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Budget</h3>
              <p className="text-green-600 font-semibold mb-4">$30-80/night</p>
              <ul className="space-y-2 text-sm">
                <li>• UWA Apoka Bandas</li>
                <li>• Camping sites</li>
                <li>• Community lodges</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Discover Uganda's Hidden Gem</h2>
          <p className="text-xl mb-6 opacity-90">
            Experience pristine wilderness, unique wildlife, and authentic culture in Africa's last frontier
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Kidepo Safari
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Plan Custom Adventure
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KidepoPage;