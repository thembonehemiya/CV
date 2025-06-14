import React from 'react';
import { ArrowRight, Leaf, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-forest-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Conserving Nature,
              <span className="text-forest-600 block">Empowering Communities</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We protect the unique ecosystems of the Rwenzori Mountains while empowering local communities—especially women and youth—through sustainable livelihoods and environmental education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-forest-600 text-white px-8 py-4 rounded-full hover:bg-forest-700 transition-colors font-medium text-lg inline-flex items-center justify-center"
              >
                Support Our Mission
                <Heart className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-forest-600 text-forest-600 px-8 py-4 rounded-full hover:bg-forest-50 transition-colors font-medium text-lg inline-flex items-center justify-center"
              >
                See Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating lasting impact through community-centered conservation initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-forest-50 to-forest-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reforestation & Nurseries</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Establishing nurseries for bamboo, cocoa, and native riverine trees to restore the Rwenzori landscape and enhance climate resilience.
              </p>
              <Link to="/projects" className="text-forest-600 font-medium inline-flex items-center hover:text-forest-700">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Apiary</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Supporting biodiversity and sustainable income through community beekeeping programs that provide honey and essential pollination services.
              </p>
              <Link to="/projects" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-earth-50 to-earth-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-earth-600 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Women's Skills Training</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Empowering young mothers with vocational skills like tailoring, soap making, and handicrafts for sustainable self-employment.
              </p>
              <Link to="/get-involved" className="text-earth-600 font-medium inline-flex items-center hover:text-earth-700">
                Get Involved <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact Since 2016</h2>
            <p className="text-xl text-forest-100 max-w-2xl mx-auto">
              Measurable progress in conservation and community empowerment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-forest-300 mb-2">1,000+</div>
              <div className="text-forest-100">Coffee Seedlings Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-forest-300 mb-2">5</div>
              <div className="text-forest-100">Community Apiaries Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-forest-300 mb-2">200+</div>
              <div className="text-forest-100">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-forest-300 mb-2">8</div>
              <div className="text-forest-100">Years of Conservation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about our recent conservation activities and community impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="src/images/mib.jpg" 
                alt="Community training session"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">New Vocational Training Program Launched</h3>
                <p className="text-gray-600 mb-4">
                  We've launched our latest skills training program for young mothers, focusing on sustainable handicraft production.
                </p>
                <Link to="/blog" className="text-forest-600 font-medium inline-flex items-center hover:text-forest-700">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="src/images/meb.jpg" 
                alt="Beekeeping project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Honey Harvest Success Story</h3>
                <p className="text-gray-600 mb-4">
                  Our community apiary project has produced its largest honey harvest to date, benefiting 25 local families.
                </p>
                <Link to="/blog" className="text-forest-600 font-medium inline-flex items-center hover:text-forest-700">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="src/images/mt.jpg" 
                alt="Tree planting initiative"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Riverbank Restoration Complete</h3>
                <p className="text-gray-600 mb-4">
                  Our latest riverbank restoration project using native vegetation has been successfully completed.
                </p>
                <Link to="/blog" className="text-forest-600 font-medium inline-flex items-center hover:text-forest-700">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Conservation Mission</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Together, we can create a thriving, biodiverse, and climate-resilient Rwenzori region where nature and communities flourish together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center"
            >
              Make a Donation
              <Heart className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/get-involved"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary-600 transition-colors font-medium text-lg inline-flex items-center justify-center"
            >
              Volunteer With Us
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;