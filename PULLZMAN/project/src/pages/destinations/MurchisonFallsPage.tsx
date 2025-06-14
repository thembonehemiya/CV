import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Binary as Binoculars, Ship, Car } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

const MurchisonFallsPage = () => {
  const itinerary = [
    {
      day: 1,
      title: "Departure to Murchison Falls via Ziwa Rhino Sanctuary",
      description: "After an early breakfast, drive to Murchison Falls National Park. Stop at Ziwa Rhino Sanctuary in Nakitoma for rhino rehabilitation experience. Lunch at Kabalega's Dinner, then visit Boma communities to discover local livelihoods.",
      activities: ["Rhino tracking", "Cultural visit", "Community interaction"],
      accommodation: "Murchison River Lodge (Mid-range) / Para Lodge (Luxury)"
    },
    {
      day: 2,
      title: "Game Drive & Nile Cruise Adventure",
      description: "Early morning game drive on the Bulge, Albert or Queens tracks north of river Nile. Afternoon Nile cruise for close-quarter game viewing. Hike to the top of magnificent Murchison Falls.",
      activities: ["Game drive", "Nile cruise", "Murchison Falls hike", "Wildlife viewing"],
      accommodation: "Murchison River Lodge (Mid-range) / Para Safari Lodge (Luxury)"
    },
    {
      day: 3,
      title: "Return to Kampala",
      description: "Early check out at 6:30am and depart for Kampala with wonderful memories of Uganda's most beautiful protected area.",
      activities: ["Departure", "Journey back"],
      accommodation: "End of tour"
    }
  ];

  const highlights = [
    "Visit Ziwa Rhino Sanctuary",
    "Visit Devils Cauldron (Murchison Falls)",
    "Launch Cruise on the Nile",
    "Game drives with Big Five viewing",
    "Scenic viewing of beautiful flora and fauna"
  ];

  const wildlife = [
    "Lions", "Rothschild's Giraffes", "Elephants", "Hippos", 
    "Nile Crocodiles", "Buffalos", "Hyenas", "Warthogs", 
    "Uganda Kob", "Waterbucks", "Various bird species"
  ];

  const included = [
    "2 nights accommodation with meals",
    "1 Game drive and 1 launch cruise",
    "Park entrance charges",
    "Water throughout the trip",
    "Lunch on first day of safari"
  ];

  const excluded = [
    "Personal spending money",
    "Alcohol and soft drinks",
    "Tips to driver/guide",
    "International and domestic air tickets",
    "Optional activities"
  ];

  return (
    <div>
      <HeroSection 
        title="Murchison Falls National Park"
        subtitle="3 Days Safari - Uganda's Most Beautiful Protected Area"
        backgroundImage="https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg"
        showCTA={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safari Overview</h2>
              <p className="text-gray-600 mb-6">
                Experience the magnificent Murchison Falls National Park on this 3-day safari adventure. 
                Witness the powerful Nile River as it thunders through a narrow gorge, creating one of 
                the world's most spectacular waterfalls. This comprehensive tour includes game drives, 
                a Nile cruise, rhino tracking at Ziwa Sanctuary, and cultural encounters.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">3 Days</p>
                  <p className="text-sm text-gray-600">Duration</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">2-15 People</p>
                  <p className="text-sm text-gray-600">Group Size</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">4.7/5</p>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Northern Uganda</p>
                  <p className="text-sm text-gray-600">Location</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Safari Highlights</h3>
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
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-green-600">From $385/person</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Dec-Feb, Jun-Sep</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accommodation:</span>
                    <span className="font-medium">Mid-range/Luxury</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transport:</span>
                    <span className="font-medium">4WD Safari Vehicle</span>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6 block text-center"
                >
                  Book This Safari
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

        {/* Day by Day Itinerary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Day by Day Itinerary</h2>
          <div className="space-y-8">
            {itinerary.map((day, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{day.title}</h3>
                    <p className="text-gray-600 mb-4">{day.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {day.activities.map((activity, actIndex) => (
                            <span key={actIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Accommodation:</h4>
                        <p className="text-gray-600 text-sm">{day.accommodation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing & Inclusions */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                <Binoculars className="w-6 h-6 mr-2" />
                Price Includes
              </h3>
              <ul className="space-y-2">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center text-green-800">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                <Car className="w-6 h-6 mr-2" />
                Price Excludes
              </h3>
              <ul className="space-y-2">
                {excluded.map((item, index) => (
                  <li key={index} className="flex items-center text-red-800">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
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
                  Murchison Falls National Park is approximately 305km (5-6 hours drive) from Kampala. 
                  The route goes through Masindi town and includes a stop at Ziwa Rhino Sanctuary.
                </p>
                <p className="text-gray-600">
                  We recommend using a 4WD vehicle for the game tracks within the park.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">By Air</h3>
                <p className="text-gray-600 mb-3">
                  Charter flights are available from Entebbe International Airport to Pakuba Airfield 
                  within the park (1-hour flight).
                </p>
                <p className="text-gray-600">
                  Air transfers can be arranged for an additional cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Murchison Falls Adventure?</h2>
          <p className="text-xl mb-6 opacity-90">
            Experience the power of the Nile and witness incredible wildlife in Uganda's most spectacular park
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book This Safari
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

export default MurchisonFallsPage;