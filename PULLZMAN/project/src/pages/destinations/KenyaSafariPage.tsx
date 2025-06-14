import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Plane, Ship, TreePine } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const KenyaSafariPage = () => {
  const highlights = [
    "Maasai Mara - witness the Great Migration",
    "Lake Nakuru - flamingo paradise and rhino sanctuary",
    "Sweetwaters - chimpanzee sanctuary and Big Five",
    "Mombasa beaches - Indian Ocean relaxation",
    "SGR train journey - modern railway experience"
  ];

  const itinerary = [
    {
      day: 1,
      title: "Nairobi to Sweetwaters Game Reserve",
      description: "Pick up at airport and depart for Sweetwaters, home to all Big Five and chimpanzee sanctuary. Afternoon game drive and visit to chimp sanctuary.",
      accommodation: "Serena Sweetwaters Tented Camp",
      meals: "Lunch, Dinner",
      activities: ["Airport pickup", "Game drive", "Chimpanzee sanctuary visit", "Waterhole viewing"]
    },
    {
      day: 2,
      title: "Sweetwaters to Lake Nakuru National Park",
      description: "Depart for Nakuru via Thomson Falls. Lake Nakuru is famous for flamingos and over 400 bird species, plus endangered rhinos and Rothschild's giraffes.",
      accommodation: "Lake Nakuru Sopa Lodge",
      meals: "Breakfast, Lunch, Dinner",
      activities: ["Thomson Falls visit", "Game drive", "Flamingo viewing", "Rhino spotting"]
    },
    {
      day: 3,
      title: "Lake Nakuru to Maasai Mara",
      description: "Depart for the world-famous Maasai Mara, home to the Great Migration and Big Five. Afternoon game drive in this spectacular reserve.",
      accommodation: "Mara Simba Lodge",
      meals: "Breakfast, Lunch, Dinner",
      activities: ["Travel to Mara", "Afternoon game drive", "Wildlife viewing", "Sunset in the Mara"]
    },
    {
      day: 4,
      title: "Full Day Maasai Mara",
      description: "Full day exploring Maasai Mara with morning and afternoon game drives. Witness incredible wildlife diversity and possibly the Great Migration.",
      accommodation: "Mara Simba Lodge",
      meals: "Breakfast, Lunch, Dinner",
      activities: ["Morning game drive", "Picnic lunch", "Afternoon game drive", "Big Five viewing"]
    },
    {
      day: 5,
      title: "Maasai Mara to Lake Naivasha",
      description: "Depart Mara for Lake Naivasha. Optional activities include boat rides, Crescent Island visit, or Hell's Gate cycling.",
      accommodation: "Lake Naivasha Sopa Lodge",
      meals: "Breakfast, Lunch, Dinner",
      activities: ["En route game drive", "Optional boat ride", "Optional Hell's Gate", "Relaxation"]
    },
    {
      day: 6,
      title: "Naivasha to Nairobi - SGR Train to Mombasa",
      description: "Return to Nairobi and board the modern SGR train to Mombasa. Experience Kenya's impressive railway system.",
      accommodation: "Cowrie Shell Beach Apartments",
      meals: "Breakfast",
      activities: ["Return to Nairobi", "SGR train journey", "Arrival in Mombasa", "Beach transfer"]
    },
    {
      day: 7,
      title: "Mombasa Beach Day",
      description: "Relax on beautiful Indian Ocean beaches. Optional activities include snorkeling, city tours, or Malindi day trips.",
      accommodation: "Cowrie Shell Beach Apartments",
      meals: "Bed only",
      activities: ["Beach relaxation", "Swimming", "Optional activities", "Sunset viewing"]
    },
    {
      day: 8,
      title: "Mombasa Beach Day",
      description: "Another day to enjoy the coastal paradise. Explore local markets, enjoy water sports, or simply relax by the ocean.",
      accommodation: "Cowrie Shell Beach Apartments",
      meals: "Bed only",
      activities: ["Beach activities", "Water sports", "Local exploration", "Relaxation"]
    },
    {
      day: 9,
      title: "Departure",
      description: "Morning transfer to SGR station for train back to Nairobi, then transfer to Jomo Kenyatta Airport for departure.",
      accommodation: "End of tour",
      meals: "Breakfast",
      activities: ["SGR train to Nairobi", "Airport transfer", "Departure"]
    }
  ];

  const destinations = [
    {
      name: "Sweetwaters Game Reserve",
      highlights: ["Big Five viewing", "Chimpanzee sanctuary", "Mount Kenya views", "Floodlit waterhole"],
      wildlife: ["Lions", "Elephants", "Rhinos", "Chimpanzees", "Giraffes"]
    },
    {
      name: "Lake Nakuru National Park",
      highlights: ["Flamingo spectacle", "Rhino sanctuary", "Bird paradise", "Rothschild's giraffes"],
      wildlife: ["Flamingos", "Rhinos", "Lions", "Leopards", "400+ bird species"]
    },
    {
      name: "Maasai Mara National Reserve",
      highlights: ["Great Migration", "Big Five", "Maasai culture", "Endless plains"],
      wildlife: ["Wildebeest", "Lions", "Cheetahs", "Elephants", "Zebras"]
    },
    {
      name: "Mombasa Coast",
      highlights: ["White sand beaches", "Indian Ocean", "Swahili culture", "Water sports"],
      wildlife: ["Marine life", "Dolphins", "Sea turtles", "Tropical fish"]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="9 Days Kenya Safari & Coast"
        subtitle="Maasai Mara, Lake Nakuru, Sweetwaters & Mombasa Beach"
        backgroundImage="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
        showCTA={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safari Overview</h2>
              <p className="text-gray-600 mb-6">
                Experience the best of Kenya with this comprehensive 9-day safari and beach holiday. From the 
                world-famous Maasai Mara and its Great Migration to the flamingo-filled Lake Nakuru, the Big Five 
                at Sweetwaters, and finally relaxing on Mombasa's pristine beaches, this tour offers the perfect 
                blend of wildlife adventure and coastal relaxation.
              </p>
              <p className="text-gray-600 mb-6">
                Travel in comfort with our modern safari vehicles, stay in carefully selected accommodations, 
                and experience Kenya's impressive SGR (Standard Gauge Railway) train system. This tour combines 
                Kenya's greatest wildlife spectacles with cultural experiences and beach relaxation for the 
                ultimate East African adventure.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold">9 Days</p>
                  <p className="text-sm text-gray-600">Duration</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold">2+ People</p>
                  <p className="text-sm text-gray-600">Group Size</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold">4.9/5</p>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold">Kenya</p>
                  <p className="text-sm text-gray-600">Destination</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Tour Highlights</h3>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tour Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-orange-600">$1,556/person</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Jul-Oct, Dec-Mar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accommodation:</span>
                    <span className="font-medium">Mid-range Lodges</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transport:</span>
                    <span className="font-medium">Safari Vehicle + SGR</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book This Safari
                </Link>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">What's Included</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• All accommodation as specified</li>
                  <li>• Safari vehicle with pop-up roof</li>
                  <li>• Professional driver-guide</li>
                  <li>• All meals as indicated</li>
                  <li>• Park entrance fees</li>
                  <li>• SGR train tickets (both ways)</li>
                  <li>• Airport transfers</li>
                  <li>• Government taxes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Itinerary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Day-by-Day Itinerary</h2>
          <div className="space-y-6">
            {itinerary.map((day, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{day.title}</h3>
                    <p className="text-gray-600 mb-4">{day.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Accommodation:</h4>
                        <p className="text-gray-600 text-sm">{day.accommodation}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Meals:</h4>
                        <p className="text-gray-600 text-sm">{day.meals}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {day.activities.map((activity, actIndex) => (
                            <span key={actIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Destinations Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Destinations Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{destination.name}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {destination.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Wildlife:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.wildlife.map((animal, wIndex) => (
                      <span key={wIndex} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {animal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SGR Train Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">SGR Train Experience</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Modern Railway Journey</h3>
                <p className="text-blue-800 mb-4">
                  Experience Kenya's impressive Standard Gauge Railway (SGR), a modern train system connecting 
                  Nairobi to Mombasa. This comfortable journey offers scenic views of the Kenyan landscape 
                  and represents a significant infrastructure achievement.
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Modern, air-conditioned trains</li>
                  <li>• Comfortable seating with scenic views</li>
                  <li>• Onboard catering services</li>
                  <li>• 4.5-hour journey Nairobi to Mombasa</li>
                  <li>• Spectacular views of Tsavo landscape</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Journey Highlights</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Departure</h4>
                    <p className="text-blue-700 text-sm">Modern Nairobi Terminus with efficient check-in</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Scenic Route</h4>
                    <p className="text-blue-700 text-sm">Views of Tsavo National Park and rural Kenya</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Arrival</h4>
                    <p className="text-blue-700 text-sm">Mombasa Terminus with easy coastal access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Inclusions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing & What's Included</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                <TreePine className="w-6 h-6 mr-2" />
                Price Includes ($1,556 per person sharing)
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  All accommodation as specified in itinerary
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Transport in safari Land Cruiser with pop-up roof
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Professional English-speaking driver-guide
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  All game drives as per itinerary
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  All meals as indicated in the program
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  All park entrance fees
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Return SGR train tickets (Nairobi-Mombasa-Nairobi)
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Beach apartment accommodation in Mombasa
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Airport transfers
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Government taxes and service charges
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                <Plane className="w-6 h-6 mr-2" />
                Price Excludes
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-red-800">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  International flights to/from Kenya
                </li>
                <li className="flex items-center text-red-800">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Kenya visa fees ($50 USD)
                </li>
                <li className="flex items-center text-red-800">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Travel insurance (highly recommended)
                </li>
                <li className="flex items-center text-red-800">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Tips for driver-guide and hotel staff
                </li>
                <li className="flex items-center text-red-800">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Optional activities (balloon safari, cultural visits)
                </li>
                <li className="flex items-center text-red-800">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Personal expenses and souvenirs
                </li>
                <li className="flex items-center text-red-800">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Alcoholic beverages and soft drinks
                </li>
                <li className="flex items-center text-red-800">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Items of personal use
                </li>
                <li className="flex items-center text-red-800">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Any services not mentioned in inclusions
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Time to Visit Kenya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Peak Season (July-October)</h3>
              <ul className="text-yellow-800 text-sm space-y-2">
                <li>• Great Migration in Maasai Mara (July-September)</li>
                <li>• Dry weather with excellent game viewing</li>
                <li>• Clear skies perfect for photography</li>
                <li>• Higher accommodation rates</li>
                <li>• Advance booking essential</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Dry Season (December-March)</h3>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• Excellent weather with minimal rainfall</li>
                <li>• Good game viewing as animals gather at water</li>
                <li>• Perfect beach weather on the coast</li>
                <li>• Calving season for wildebeest (January-February)</li>
                <li>• Lower rates than peak season</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Experience the Best of Kenya</h2>
          <p className="text-xl mb-6 opacity-90">
            From the Great Migration to pristine beaches - discover Kenya's incredible diversity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book This Safari
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Customize Tour
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KenyaSafariPage;