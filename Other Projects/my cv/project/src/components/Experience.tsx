import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      period: 'Jan 2022 - Present',
      position: 'Customer Experience Specialist',
      company: 'MTN Uganda',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      description: 'Responsible for enhancing customer satisfaction and managing customer relationships across various touchpoints.',
      achievements: [
        'Handled diverse customer queries and complaints',
        'Maintained high customer satisfaction ratings',
        'Collaborated with cross-functional teams',
        'Completed multiple professional development programs'
      ]
    },
    {
      period: 'Aug 18-21, 2020',
      position: 'Data Clerk',
      company: 'Ministry of Health',
      location: 'Uganda',
      type: 'Contract',
      description: 'Short-term contract position focusing on data management and entry for health-related projects.',
      achievements: [
        'Accurately processed and entered health data',
        'Maintained data integrity and confidentiality',
        'Met strict deadlines for data collection projects',
        'Supported health information management systems'
      ]
    },
    {
      period: '2017 - 2019',
      position: 'IT Technician & Network Support',
      company: 'KIARD IT Solutions',
      location: 'Uganda',
      type: 'Full-time',
      description: 'Specialized in computer hardware maintenance and network support as part of the technical team.',
      achievements: [
        'Diagnosed and repaired computer hardware issues',
        'Provided network configuration and maintenance',
        'Supported clients with technical troubleshooting',
        'Gained hands-on experience with enterprise networking'
      ]
    }
  ];

  const trainingHistory = [
    {
      period: 'June - July 2019',
      title: 'Advanced IT Systems Training',
      topics: ['Computer software systems', 'Network administrator and configurations', 'Android application development', 'Basic computer troubleshooting', 'Content management systems and websites']
    },
    {
      period: 'June 4 - July 27, 2018',
      title: 'Industrial Training Program',
      topics: ['Computer networking', 'Hardware maintenance', 'Entrepreneurship', 'Web application development', 'Dynamic website development']
    },
    {
      period: 'Nov 27 - Dec 30, 2017',
      title: 'Computer Literacy Workshop',
      topics: ['Introduction to computers, networks and internet', 'ICT for developments', 'Green ICT', 'Web Applications', 'Ethical computing']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey showcasing hands-on experience in IT support, customer service, and technical training.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Work History</h3>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-6 h-6 text-blue-700" />
                      <h4 className="text-xl font-bold text-gray-900">{job.position}</h4>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <span className="font-semibold text-blue-700">{job.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 mt-4 lg:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{job.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-teal-600" />
                    Key Achievements
                  </h5>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training History */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Additional Training</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingHistory.map((training, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{training.period}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">{training.title}</h4>
                <ul className="space-y-2">
                  {training.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;