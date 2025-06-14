import React from 'react';
import { Star, Quote, Users, Award, ThumbsUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United States",
      rating: 5,
      date: "March 2024",
      experience: "Gorilla Trekking - Bwindi",
      review: "Absolutely incredible experience! The gorilla trekking in Bwindi was a once-in-a-lifetime adventure. Our guide was knowledgeable and the entire team at Pullman Safaris made sure every detail was perfect. The accommodation was comfortable and the food was excellent. Highly recommend!",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
    },
    {
      id: 2,
      name: "James Mitchell",
      location: "United Kingdom",
      rating: 5,
      date: "February 2024",
      experience: "Queen Elizabeth National Park Safari",
      review: "The tree-climbing lions were amazing to see! The boat cruise on Kazinga Channel was peaceful and we saw so many hippos and elephants. The Land Cruiser was in excellent condition and our driver David was fantastic. Will definitely book with Pullman again.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      location: "Spain",
      rating: 5,
      date: "January 2024",
      experience: "Murchison Falls 3-Day Safari",
      review: "What an adventure! The Murchison Falls were breathtaking and the game drives exceeded our expectations. We saw lions, giraffes, elephants, and so much more. The Nile cruise was the highlight - seeing crocodiles and hippos up close was incredible. Professional service throughout.",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
    },
    {
      id: 4,
      name: "Robert Chen",
      location: "Canada",
      rating: 5,
      date: "December 2023",
      experience: "Car Rental - Self Drive",
      review: "Rented a Toyota RAV4 for our family trip around Uganda. The car was in perfect condition, clean, and well-maintained. The pickup process was smooth and the staff explained everything clearly. Great value for money and excellent customer service.",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg"
    },
    {
      id: 5,
      name: "Emma Thompson",
      location: "Australia",
      rating: 5,
      date: "November 2023",
      experience: "Kenya Safari Package",
      review: "The 9-day Kenya safari was perfectly organized. From Maasai Mara to the beautiful beaches of Mombasa, every moment was magical. The accommodations were excellent and the train journey was a unique experience. Thank you Pullman Safaris for an unforgettable trip!",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
    },
    {
      id: 6,
      name: "Michael O'Connor",
      location: "Ireland",
      rating: 5,
      date: "October 2023",
      experience: "Chimpanzee Trekking - Kibale",
      review: "Seeing the chimpanzees in their natural habitat was extraordinary. The guides were very knowledgeable about the primates and the forest. The whole experience was well-organized and safe. Pullman Safaris really knows how to deliver quality experiences.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Clients" },
    { icon: <Star className="w-8 h-8" />, number: "4.9/5", label: "Average Rating" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Years Experience" },
    { icon: <ThumbsUp className="w-8 h-8" />, number: "98%", label: "Satisfaction Rate" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div>
      <HeroSection 
        title="Client Testimonials"
        subtitle="Hear from our satisfied customers about their African adventures"
        backgroundImage="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
        showCTA={false}
      />

      {/* Stats Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="flex justify-center mb-4 text-green-200">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from real travelers who have explored Africa with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cover bg-center rounded-full mr-4" 
                         style={{ backgroundImage: `url(${testimonial.image})` }}>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm text-gray-600">{testimonial.date}</span>
                  </div>

                  <div className="mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.experience}
                    </span>
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-green-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6">
                      "{testimonial.review}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us On Review Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out our reviews on popular travel platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TripAdvisor</h3>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-600">4.9/5 based on 150+ reviews</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Reviews</h3>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-600">4.8/5 based on 200+ reviews</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SafariBookings</h3>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-600">4.9/5 based on 80+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied travelers who have experienced the magic of Africa with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Your Adventure
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Traveled With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We'd love to hear about your experience! Your feedback helps us improve and helps other travelers make informed decisions.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Leave us a review on:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                TripAdvisor
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Google Reviews
              </a>
              <a href="#" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                SafariBookings
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;