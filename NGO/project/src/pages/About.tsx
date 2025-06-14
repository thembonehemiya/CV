import React from 'react';
import { Target, Eye, Award, Users, Leaf, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About RMCI</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since 2016, we've been working in Kyatsi II Village, Kitholhu County, Kasese District, to create lasting positive change for both the environment and local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-forest-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To conserve and restore the unique ecosystems of the Rwenzori Mountains while empowering local communities—especially women and youth—through sustainable land use, nature-based livelihoods, and self-employment skills training.
              </p>
            </div>
            <div className="bg-gradient-to-br from-forest-50 to-forest-100 p-8 rounded-2xl">
              <img 
                src="src/images/hero.jpg"
                alt="Community conservation work"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A thriving, biodiverse, and climate-resilient Rwenzori region where nature and communities—especially women and youth—flourish together.
              </p>
            </div>
            <div className="lg:order-1 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <img 
                src="src/images/ad.jpg" 
                alt="Rwenzori Mountains landscape"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Goals</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five key areas of focus that guide our conservation and community development work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ecological Integrity</h3>
              <p className="text-sm text-gray-600">Restore and protect the Rwenzori landscape</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sustainable Livelihoods</h3>
              <p className="text-sm text-gray-600">Promote nature-based income opportunities</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-earth-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Youth Empowerment</h3>
              <p className="text-sm text-gray-600">Vocational skills for young mothers</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Community Awareness</h3>
              <p className="text-sm text-gray-600">Environmental education and stewardship</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Poverty Reduction</h3>
              <p className="text-sm text-gray-600">Environmentally friendly income generation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tangible results from our community-centered conservation approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-forest-50 to-forest-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Leaf className="h-6 w-6 text-forest-600 mr-2" />
                Environmental Conservation
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Established nurseries for bamboo, cocoa, and native riverine trees
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Restored riverbank ecosystems with native vegetation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Distributed over 1,000 coffee seedlings to local farmers
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary-600 mr-2" />
                Community Impact
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Launched successful community apiary programs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Initiated vocational training for young mothers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Enhanced biodiversity and sustainable income opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-xl mb-8 text-forest-100 leading-relaxed">
            Join us in creating a sustainable future for the Rwenzori Mountains and its communities. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-forest-600 text-white px-8 py-4 rounded-full hover:bg-forest-700 transition-colors font-medium text-lg inline-flex items-center justify-center"
            >
              Support Our Mission
              <Heart className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-forest-900 transition-colors font-medium text-lg inline-flex items-center justify-center"
            >
              Get in Touch
              <Users className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;