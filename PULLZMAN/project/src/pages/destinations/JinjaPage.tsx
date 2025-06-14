import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Waves, Zap, TreePine } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const JinjaPage = () => {
  const highlights = [
    "Source of the River Nile - historic discovery site",
    "World-class white-water rafting adventures",
    "Bungee jumping from 44-meter high platform",
    "Boat cruises and sunset trips on the Nile",
    "Adventure capital of East Africa"
  ];

  const activities = [
    {
      name: "White-water Rafting",
      description: "Grade 5 rapids on the mighty River Nile - world's best rafting experience",
      duration: "Full day",
      difficulty: "Moderate to Challenging",
      price: "$125 USD",
      season: "Year-round"
    },
    {
      name: "Bungee Jumping",
      description: "44-meter jump over the Nile from the historic Jinja Bridge",
      duration: "2-3 hours",
      difficulty: "Extreme",
      price: "$115 USD",
      season: "Year-round"
    },
    {
      name: "Source of the Nile Tour",
      description: "Boat trip to the exact point where the Nile begins its journey",
      duration: "2-3 hours",
      difficulty: "Easy",
      price: "$35 USD",
      season: "Year-round"
    },
    {
      name: "Kayaking",
      description: "Peaceful kayaking on calm sections of the Nile",
      duration: "Half day",
      difficulty: "Easy to Moderate",
      price: "$45 USD",
      season: "Year-round"
    },
    {
      name: "Quad Biking",
      description: "ATV adventures through villages and countryside around Jinja",
      duration: "2-4 hours",
      difficulty: "Moderate",
      price: "$65 USD",
      season: "Dry season preferred"
    },
    {
      name: "Horseback Riding",
      description: "Scenic horse rides along the Nile banks and through local communities",
      duration: "2-3 hours",
      difficulty: "Easy to Moderate",
      price: "$55 USD",
      season: "Year-round"
    }
  ];

  const raftingGrades = [
    {
      grade: "Grade 3",
      name: "Big Brother",
      description: "Perfect warm-up rapid with big waves"
    },
    {
      grade: "Grade 4",
      name: "Bubugo",
      description: "Technical rapid requiring precise navigation"
    },
    {
      grade: "Grade 5",
      name: "The Bad Place",
      description: "Massive hydraulic - the ultimate challenge"
    },
    {
      grade: "Grade 5",
      name: "Overtime",
      description: "Continuous action with multiple drops"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Source of the Nile - Jinja"
        subtitle="Adventure Capital of East Africa - White-water Rafting & Extreme Sports"
        backgroundImage="https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg"
        showCTA={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Adventure Overview</h2>
              <p className="text-gray-600 mb-6">
                Jinja, located on the shores of Lake Victoria, is globally recognized as the source of the River Nile 
                and has earned its reputation as the adventure capital of East Africa. This historic town offers some 
                of the world's best white-water rafting, along with bungee jumping, kayaking, and numerous other adrenaline-pumping activities.
              </p>
              <p className="text-gray-600 mb-6">
                The Nile's powerful rapids, created by the river's dramatic descent from Lake Victoria, provide 
                Grade 3-5 white-water experiences that attract adventure seekers from around the globe. Beyond the thrills, 
                Jinja offers cultural experiences, scenic boat trips, and the chance to stand at the historic source of the world's longest river.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Waves className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">Grade 5</p>
                  <p className="text-sm text-gray-600">Rapids</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">44m</p>
                  <p className="text-sm text-gray-600">Bungee Jump</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">Source</p>
                  <p className="text-sm text-gray-600">Of River Nile</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">2 Hours</p>
                  <p className="text-sm text-gray-600">From Kampala</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Adventure Highlights</h3>
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
                    <span className="text-gray-600">Rafting:</span>
                    <span className="font-semibold text-blue-600">$125 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Year-round</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Eastern Uganda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Kampala:</span>
                    <span className="font-medium">2 hours drive</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book Adventure
                </Link>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Safety First</h3>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Professional safety guides</li>
                  <li>• International safety standards</li>
                  <li>• Quality safety equipment</li>
                  <li>• Medical support on standby</li>
                  <li>• Comprehensive safety briefings</li>
                  <li>• Insurance coverage included</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adventure Activities</h2>
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
                <div className="text-xs">
                  <span className="font-semibold text-gray-900">Season:</span>
                  <span className="text-gray-600 ml-1">{activity.season}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* White-water Rafting Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">White-water Rafting on the Nile</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">What to Expect</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• 8-10 major rapids over 25km stretch</li>
                  <li>• Professional guides with international certification</li>
                  <li>• Safety kayakers accompanying each raft</li>
                  <li>• Riverside lunch included</li>
                  <li>• Transport to/from Kampala available</li>
                  <li>• Photos and videos of your adventure</li>
                  <li>• Certificate of completion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Famous Rapids</h3>
                <div className="space-y-3">
                  {raftingGrades.map((rapid, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold text-blue-900">{rapid.name}</h4>
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">{rapid.grade}</span>
                      </div>
                      <p className="text-blue-700 text-sm">{rapid.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Full Day Rafting Itinerary</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <strong>8:00 AM:</strong> Pickup from Kampala
                </div>
                <div>
                  <strong>10:30 AM:</strong> Safety briefing & equipment
                </div>
                <div>
                  <strong>11:00 AM:</strong> Start rafting adventure
                </div>
                <div>
                  <strong>1:00 PM:</strong> Riverside lunch break
                </div>
                <div>
                  <strong>2:00 PM:</strong> Continue rafting
                </div>
                <div>
                  <strong>5:00 PM:</strong> End point celebration
                </div>
                <div>
                  <strong>6:00 PM:</strong> Return to Kampala
                </div>
                <div>
                  <strong>8:30 PM:</strong> Arrive Kampala
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Source of the Nile */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Source of the Nile Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Historical Significance</h3>
              <p className="text-green-800 mb-4">
                The source of the Nile was "discovered" by British explorer John Hanning Speke in 1862, 
                though local communities had known of it for centuries. This historic site marks the beginning 
                of the world's longest river's 6,650km journey to the Mediterranean Sea.
              </p>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Monument marking the exact source point</li>
                <li>• Speke Memorial and historical information</li>
                <li>• Beautiful gardens and walking paths</li>
                <li>• Boat trips to the source point</li>
                <li>• Cultural significance to local communities</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Boat Trip Details</h3>
              <p className="text-blue-800 mb-4">
                Take a peaceful boat cruise to the exact point where the Nile begins its epic journey. 
                The trip offers stunning views of Lake Victoria and the chance to see local birdlife 
                and fishing communities.
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• 2-3 hour boat excursion</li>
                <li>• Visit to the source monument</li>
                <li>• Bird watching opportunities</li>
                <li>• Local fishing village visits</li>
                <li>• Sunset trips available</li>
                <li>• Photography opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accommodation & Dining */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Where to Stay & Eat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Accommodation Options</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">Luxury</h4>
                  <p className="text-gray-600 text-sm">Wildwaters Lodge, Jinja Nile Resort ($150-300/night)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mid-range</h4>
                  <p className="text-gray-600 text-sm">Nile River Camp, 2 Friends Hotel ($50-120/night)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Budget</h4>
                  <p className="text-gray-600 text-sm">Backpackers hostels, guesthouses ($15-40/night)</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dining</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>The Source Café:</strong> International cuisine with Nile views</li>
                <li>• <strong>Jinja Sailing Club:</strong> Waterfront dining and drinks</li>
                <li>• <strong>Local restaurants:</strong> Traditional Ugandan dishes</li>
                <li>• <strong>Riverside bars:</strong> Sunset drinks by the Nile</li>
                <li>• <strong>Street food:</strong> Rolex, samosas, fresh fruit</li>
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
                  From Kampala: 2 hours drive (80km) via Mukono-Jinja highway.
                </p>
                <p className="text-gray-600 mb-3">
                  Excellent tarmac road makes it easily accessible year-round.
                </p>
                <p className="text-gray-600">
                  Most adventure companies provide transport from Kampala.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Public Transport</h3>
                <p className="text-gray-600 mb-3">
                  Regular matatu (shared taxi) services from Kampala to Jinja.
                </p>
                <p className="text-gray-600 mb-3">
                  Journey takes 2.5-3 hours depending on traffic.
                </p>
                <p className="text-gray-600">
                  Boda-bodas available for local transport in Jinja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready for the Ultimate Adventure?</h2>
          <p className="text-xl mb-6 opacity-90">
            Experience world-class white-water rafting and extreme sports at the source of the mighty Nile
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
              Get More Info
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JinjaPage;