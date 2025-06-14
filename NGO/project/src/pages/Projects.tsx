import React from 'react';
import { Leaf, Target, Users, Flower, Coffee, TreePine } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-forest-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Conservation Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we're restoring the Rwenzori Mountains ecosystem while creating sustainable opportunities for local communities.
            </p>
          </div>
        </div>
      </section>

      {/* Reforestation Project */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <TreePine className="h-8 w-8 text-forest-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Reforestation & Tree Nurseries</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our comprehensive reforestation program focuses on establishing nurseries for indigenous trees, bamboo, and cocoa plants. We work directly with local communities to restore degraded landscapes and enhance climate resilience throughout the Rwenzori region.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Leaf className="h-5 w-5 text-forest-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Native Riverine Trees</h4>
                    <p className="text-gray-600">Restoring riverbank ecosystems with indigenous species</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Leaf className="h-5 w-5 text-forest-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bamboo Cultivation</h4>
                    <p className="text-gray-600">Fast-growing bamboo for erosion control and income</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Coffee className="h-5 w-5 text-forest-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cocoa & Coffee Programs</h4>
                    <p className="text-gray-600">Sustainable agroforestry with economic benefits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-forest-50 to-forest-100 p-8 rounded-2xl">
              <img 
                src="src/images/ad.jpg"  
                alt="Tree nursery"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-forest-600">200+</div>
                  <div className="text-sm text-gray-600">Trees Planted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-forest-600">1,000+</div>
                  <div className="text-sm text-gray-600">Seedlings Distributed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apiary Project */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <Flower className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Community Apiary Program</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our beekeeping initiative enhances biodiversity while providing sustainable income for local families. The bees provide essential pollination services for crops and native plants, while honey production creates economic opportunities for the community.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Honey Production</h4>
                    <p className="text-gray-600">High-quality honey for local and regional markets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pollination Services</h4>
                    <p className="text-gray-600">Supporting crop yields and native plant reproduction</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Training & Support</h4>
                    <p className="text-gray-600">Comprehensive beekeeping education for participants</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-1 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <img 
                src="src/images/mib.jpg"  
                alt="Beekeeping project"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">120</div>
                  <div className="text-sm text-gray-600">Active Apiaries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">over 70</div>
                  <div className="text-sm text-gray-600">Families Benefiting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Training */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-earth-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Women's Skills Training</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We empower young mothers and women in the community through comprehensive vocational skills training programs. These initiatives focus on sustainable self-employment opportunities that complement our conservation efforts.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-earth-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tailoring & Handicrafts</h4>
                    <p className="text-gray-600">Creating marketable products from local materials</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-earth-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Soap Making</h4>
                    <p className="text-gray-600">Natural soap production using local ingredients</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-earth-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mushroom Cultivation</h4>
                    <p className="text-gray-600">Sustainable protein production and income generation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-earth-50 to-earth-100 p-8 rounded-2xl">
              <img 
                src="src/images/meb.jpg"  
                alt="Women's training session"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="mt-6 text-center">
                <div className="text-2xl font-bold text-earth-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Women Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Timeline</h2>
            <p className="text-xl text-forest-100 max-w-2xl mx-auto">
              Our conservation journey since 2016 and plans for the future
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">2016</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Foundation & First Steps</h3>
                <p className="text-forest-100">Established RMCI and began initial community engagement in Kyatsi II Village</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">2018</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Nursery Development</h3>
                <p className="text-forest-100">Established first tree nurseries and began reforestation activities</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">2020</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community Apiary Launch</h3>
                <p className="text-forest-100">Successfully launched beekeeping program with first honey harvest</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">2024</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Skills Training Expansion</h3>
                <p className="text-forest-100">Launched comprehensive vocational training programs for women</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-earth-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">2025</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Future Goals</h3>
                <p className="text-forest-100">Build environmental education center and expand market linkages</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;