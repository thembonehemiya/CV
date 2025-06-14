import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'California, USA',
      service: 'Gorilla Trekking Safari',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The gorilla trekking experience in Bwindi was absolutely life-changing! Our guide James was incredibly knowledgeable and made sure we felt safe throughout the trek. Seeing the mountain gorillas up close was an emotional and unforgettable experience. Pullman Safaris organized everything perfectly - from accommodation to transportation. I cannot recommend them highly enough!',
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'David Mukasa',
      location: 'Kampala, Uganda',
      service: 'Corporate Car Rental',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'We have been using Pullman Safaris for our company\'s transportation needs for over two years now. Their vehicles are always clean, well-maintained, and their drivers are professional and punctual. The monthly rental rates are very competitive, and their customer service is excellent. They have become our trusted partner for all corporate transportation.',
      date: 'February 2024'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'London, UK',
      service: 'Queen Elizabeth National Park Safari',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Our 4-day safari to Queen Elizabeth National Park exceeded all expectations! We saw the famous tree-climbing lions, enjoyed a fantastic boat cruise on Kazinga Channel, and stayed at beautiful lodges. The organization was flawless, and our guide Paul was fantastic - his knowledge of wildlife and passion for conservation really enhanced our experience.',
      date: 'January 2024'
    },
    {
      id: 4,
      name: 'Michael Chen',
      location: 'Singapore',
      service: 'Murchison Falls Safari',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The 3-day Murchison Falls package was incredible value for money. The highlight was definitely the boat cruise to the base of the falls and seeing hippos and crocodiles in their natural habitat. The game drives were productive with sightings of lions, elephants, and giraffes. The accommodation at Murchison River Lodge was comfortable with great views.',
      date: 'December 2023'
    },
    {
      id: 5,
      name: 'Fatima Al-Rashid',
      location: 'Dubai, UAE',
      service: 'Kenya-Uganda Combined Safari',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The 9-day Kenya-Uganda safari was the trip of a lifetime! From the Maasai Mara\'s great migration to Uganda\'s incredible wildlife, every day brought new adventures. The coordination between countries was seamless, and ending with relaxation in Mombasa was perfect. Pullman Safaris\' attention to detail and professional service made this an unforgettable experience.',
      date: 'November 2023'
    },
    {
      id: 6,
      name: 'Robert Smith',
      location: 'Toronto, Canada',
      service: 'Self-Drive Car Rental',
      rating: 4,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Rented a Toyota Land Cruiser for a self-drive adventure around Uganda. The vehicle was in excellent condition, and the GPS system was very helpful. The pickup and drop-off process was smooth, and the 24/7 support gave us peace of mind during our journey. Had one minor issue with a flat tire, but roadside assistance arrived quickly. Great service overall!',
      date: 'October 2023'
    },
    {
      id: 7,
      name: 'Grace Nakiwala',
      location: 'Jinja, Uganda',
      service: 'Wedding Car Rental',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Pullman Safaris provided the most beautiful Mercedes-Benz S-Class for our wedding day. The car was immaculately decorated with flowers and ribbons exactly as we requested. The chauffeur was professionally dressed and very courteous. Everything was perfect, and they helped make our special day even more memorable. Thank you so much!',
      date: 'September 2023'
    },
    {
      id: 8,
      name: 'Jean-Pierre Dubois',
      location: 'Paris, France',
      service: 'Kibale Forest Chimpanzee Trekking',
      rating: 5,
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The chimpanzee trekking experience in Kibale Forest was absolutely magical! Watching these intelligent primates in their natural habitat was fascinating. Our guide was extremely knowledgeable about primate behavior and forest ecology. The trek itself was challenging but rewarding, and the accommodation at the nearby lodge was comfortable with excellent food.',
      date: 'August 2023'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const averageRating = testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Read what our satisfied customers have to say 
            about their safari experiences and car rental services with Pullman Safaris.
          </p>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center bg-green-50 px-6 py-3 rounded-lg">
            <div className="flex items-center mr-4">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-green-600">{averageRating.toFixed(1)}/5.0</div>
              <div className="text-sm text-gray-600">Based on {totalReviews} reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 relative">
              <Quote className="absolute top-4 right-4 text-green-200" size={32} />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-2">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
              </div>

              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs inline-block mb-4">
                {testimonial.service}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.testimonial}"
              </p>

              <div className="text-sm text-gray-500">
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-green-600 text-white p-8 rounded-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-green-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1,200+</div>
              <div className="text-green-200">Safari Adventures</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-green-200">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-200">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Review Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Clients Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600 text-sm">
                Professional, knowledgeable guides with years of experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-green-600" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Quality Service</h3>
              <p className="text-gray-600 text-sm">
                Consistently high-quality service and attention to detail
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-green-600" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Reliable</h3>
              <p className="text-gray-600 text-sm">
                Dependable service with punctual pickups and well-maintained vehicles
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-green-600" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 18.5l-3.5-2.5L12 13.5l3.5 2.5L12 18.5z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Value for Money</h3>
              <p className="text-gray-600 text-sm">
                Competitive pricing with excellent value and no hidden costs
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Story?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Join hundreds of satisfied customers who have experienced the best of Uganda with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
              Book Your Safari
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors">
              Get Free Quote
            </button>
          </div>
        </div>

        {/* TripAdvisor Style Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Find Us On</h3>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center">
              <div className="bg-green-600 text-white px-4 py-2 rounded">
                TripAdvisor
              </div>
              <div className="ml-3">
                <div className="flex items-center">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-gray-600">Certificate of Excellence</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 text-white px-4 py-2 rounded">
                Google
              </div>
              <div className="ml-3">
                <div className="flex items-center">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-gray-600">4.9/5 Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;