import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Shield, TreePine, Binary as Binoculars } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const ZiwaRhinoPage = () => {
  const highlights = [
    "Uganda's only wild rhino sanctuary",
    "Rhino tracking on foot with guides",
    "Over 300 bird species including shoebill",
    "Conservation success story",
    "En route to Murchison Falls"
  ];

  const activities = [
    {
      name: "Rhino Tracking",
      description: "Walk with armed guides to observe white rhinos in their natural habitat",
      duration: "1-3 hours",
      difficulty: "Easy to Moderate",
      price: "$30 USD",
      highlights: ["Close rhino encounters", "Conservation education", "Photography"]
    },
    {
      name: "Bird Watching",
      description: "Spot over 300 bird species including the rare shoebill stork",
      duration: "2-4 hours",
      difficulty: "Easy",
      price: "$25 USD",
      highlights: ["Shoebill stork", "Wetland birds", "Forest species"]
    },
    {
      name: "Nature Walks",
      description: "Guided walks through different habitats within the sanctuary",
      duration: "1-2 hours",
      difficulty: "Easy",
      price: "$15 USD",
      highlights: ["Diverse habitats", "Wildlife spotting", "Plant identification"]
    },
    {
      name: "Night Walks",
      description: "Discover nocturnal wildlife with spotlight guided walks",
      duration: "2 hours",
      difficulty: "Moderate",
      price: "$35 USD",
      highlights: ["Nocturnal animals", "Night sounds", "Unique experience"]
    },
    {
      name: "Canoe Rides",
      description: "Peaceful canoe trips on the sanctuary's waterways",
      duration: "1-2 hours",
      difficulty: "Easy",
      price: "$20 USD",
      highlights: ["Water birds", "Peaceful experience", "Different perspective"]
    }
  ];

  const rhinoFacts = [
    {
      fact: "Population Growth",
      detail: "From 6 rhinos in 2005 to 30+ today"
    },
    {
      fact: "Species",
      detail: "Southern white rhinos (Ceratotherium simum)"
    },
    {
      fact: "Breeding Success",
      detail: "Multiple successful births in the wild"
    },
    {
      fact: "Future Goal",
      detail: "Reintroduce rhinos to Uganda's national parks"
    }
  ];

  const birdSpecies = [
    "Shoebill Stork", "Grey Crowned Crane", "African Fish Eagle", 
    "Marabou Stork", "Yellow-billed Stork", "Sacred Ibis",
    "Various Herons", "Kingfishers", "Bee-eaters", "Hornbills"
  ];

  return (
    <div>
      <HeroSection 
        title="Ziwa Rhino Sanctuary"
        subtitle="Uganda's Only Wild Rhino Sanctuary - Conservation in Action"
        backgroundImage="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
        showCTA={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sanctuary Overview</h2>
              <p className="text-gray-600 mb-6">
                Ziwa Rhino Sanctuary is Uganda's only home to wild rhinos and represents one of Africa's most 
                successful conservation stories. Located in Nakitoma, Nakasongola District, this 7,000-hectare 
                sanctuary was established in 2005 as part of the Rhino Fund Uganda's mission to reintroduce 
                rhinos to Uganda after they were declared extinct in the country in 1983.
              </p>
              <p className="text-gray-600 mb-6">
                The sanctuary is home to over 30 southern white rhinos that roam freely in a natural environment 
                protected by dedicated rangers. Beyond rhinos, the sanctuary hosts over 300 bird species, 
                including the rare shoebill stork, making it an excellent birding destination. The facility 
                serves as both a conservation center and an educational hub for wildlife protection.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">30+</p>
                  <p className="text-sm text-gray-600">White Rhinos</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">7,000</p>
                  <p className="text-sm text-gray-600">Hectares</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Binoculars className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">300+</p>
                  <p className="text-sm text-gray-600">Bird Species</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">2005</p>
                  <p className="text-sm text-gray-600">Established</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Sanctuary Highlights</h3>
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
                    <span className="text-gray-600">Rhino Tracking:</span>
                    <span className="font-semibold text-green-600">$30 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Year-round</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Nakasongola</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Kampala:</span>
                    <span className="font-medium">3 hours drive</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book Rhino Tracking
                </Link>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Conservation Success</h3>
                <div className="space-y-2">
                  {rhinoFacts.map((fact, index) => (
                    <div key={index} className="bg-blue-100 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-900 text-sm">{fact.fact}</h4>
                      <p className="text-blue-700 text-xs">{fact.detail}</p>
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
                      <span key={hIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rhino Tracking Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Rhino Tracking Experience</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-4">What to Expect</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Safety briefing before the tracking begins</li>
                  <li>• Accompanied by armed ranger guides</li>
                  <li>• Walk through different habitats to find rhinos</li>
                  <li>• Maintain safe distance (minimum 5 meters)</li>
                  <li>• Learn about rhino behavior and conservation</li>
                  <li>• Photography opportunities (no flash)</li>
                  <li>• Duration varies based on rhino location</li>
                  <li>• 95% success rate of rhino sightings</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-4">Rhino Behavior</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900">Feeding Habits</h4>
                    <p className="text-green-700 text-sm">Rhinos are grazers, spending most of their day eating grass and resting in shade</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900">Social Structure</h4>
                    <p className="text-green-700 text-sm">Generally solitary, except mothers with calves and during mating</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900">Daily Routine</h4>
                    <p className="text-green-700 text-sm">Most active in early morning and late afternoon, resting during hot midday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bird Watching */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bird Watching Paradise</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Birding Highlights</h3>
                <p className="text-blue-800 mb-4">
                  Ziwa Rhino Sanctuary is a birder's paradise with over 300 recorded species. 
                  The diverse habitats - from wetlands to woodlands - support an incredible variety of birdlife.
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• <strong>Shoebill Stork:</strong> The sanctuary's star bird species</li>
                  <li>• <strong>Wetland species:</strong> Herons, storks, and ibises</li>
                  <li>• <strong>Raptors:</strong> Fish eagles and various hawks</li>
                  <li>• <strong>Forest birds:</strong> Hornbills and bee-eaters</li>
                  <li>• <strong>Best time:</strong> Early morning and late afternoon</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Notable Species</h3>
                <div className="flex flex-wrap gap-2">
                  {birdSpecies.map((bird, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {bird}
                    </span>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Shoebill Stork</h4>
                  <p className="text-blue-700 text-sm">
                    The prehistoric-looking shoebill is one of Africa's most sought-after birds. 
                    Ziwa offers excellent chances to see this magnificent species in its natural wetland habitat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conservation Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Conservation Success Story</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-2xl">0</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1983</h3>
                <p className="text-gray-600 text-sm">Rhinos declared extinct in Uganda due to poaching and civil unrest</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 font-bold text-2xl">6</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2005</h3>
                <p className="text-gray-600 text-sm">Ziwa Rhino Sanctuary established with 6 rhinos from Kenya and USA</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-2xl">30+</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2024</h3>
                <p className="text-gray-600 text-sm">Thriving population with multiple generations born in the wild</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future Goals</h3>
              <p className="text-gray-600 mb-4">
                The ultimate goal is to reintroduce rhinos to Uganda's national parks once the population 
                reaches sustainable levels. This will mark the complete restoration of Uganda's "Big Five" wildlife.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Reach population of 50+ rhinos</li>
                <li>• Establish breeding groups in national parks</li>
                <li>• Continue community education programs</li>
                <li>• Maintain genetic diversity through careful breeding</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">What to Bring</h3>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Comfortable walking shoes</li>
                <li>• Long pants and long sleeves</li>
                <li>• Hat and sunscreen</li>
                <li>• Insect repellent</li>
                <li>• Camera with zoom lens</li>
                <li>• Binoculars for bird watching</li>
                <li>• Water bottle</li>
                
                <li>• Rain jacket (wet season)</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Rules & Guidelines</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Maintain minimum 5-meter distance from rhinos</li>
                <li>• No sudden movements or loud noises</li>
                <li>• Follow guide instructions at all times</li>
                <li>• No flash photography</li>
                <li>• No smoking in the sanctuary</li>
                <li>• Stay with your group</li>
                <li>• Respect wildlife and their habitat</li>
                <li>• Support conservation efforts</li>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">From Kampala</h3>
                <p className="text-gray-600 mb-3">
                  Drive north on Kampala-Gulu highway for 176km (3 hours) to Nakitoma trading center.
                </p>
                <p className="text-gray-600 mb-3">
                  Turn left at Nakitoma and drive 7km to the sanctuary entrance.
                </p>
                <p className="text-gray-600">
                  Good tarmac road makes it accessible year-round.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">En Route to Murchison Falls</h3>
                <p className="text-gray-600 mb-3">
                  Perfect stopover when traveling to Murchison Falls National Park.
                </p>
                <p className="text-gray-600 mb-3">
                  Add 2-3 hours to your journey for rhino tracking experience.
                </p>
                <p className="text-gray-600">
                  Many safari operators include Ziwa in Murchison Falls packages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Support Rhino Conservation</h2>
          <p className="text-xl mb-6 opacity-90">
            Visit Ziwa Rhino Sanctuary and be part of Uganda's greatest conservation success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Rhino Tracking
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZiwaRhinoPage;