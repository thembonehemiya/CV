import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Target, 
  Lightbulb, 
  Shield, 
  Cpu, 
  Network, 
  Globe,
  Database,
  Smartphone
} from 'lucide-react';

const Skills = () => {
  const softSkills = [
    {
      icon: MessageSquare,
      title: 'Communication Skills',
      description: 'Ability to liaise effectively with stakeholders across different levels'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach to working with diverse teams and cultures'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analytical thinking and innovative solutions to complex challenges'
    },
    {
      icon: Lightbulb,
      title: 'Entrepreneurial Spirit',
      description: 'Self-driven with ability to motivate and lead fast-paced teams'
    }
  ];

  const technicalSkills = [
    {
      icon: Network,
      title: 'Computer Networking',
      level: 85,
      description: 'CCNA certified, network configuration and maintenance'
    },
    {
      icon: Cpu,
      title: 'Hardware Maintenance',
      level: 90,
      description: 'Computer repair, troubleshooting, and system optimization'
    },
    {
      icon: Globe,
      title: 'Web Development',
      level: 75,
      description: 'Dynamic websites, web applications, and CMS'
    },
    {
      icon: Database,
      title: 'Data Management',
      level: 80,
      description: 'Database administration and data processing'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      level: 70,
      description: 'Android application development and mobile technologies'
    },
    {
      icon: Shield,
      title: 'IT Security',
      level: 75,
      description: 'Security awareness, ransomware protection, and compliance'
    }
  ];

  const additionalSkills = [
    'Negotiation Skills',
    'Work Ethics',
    'Flexibility and Stress Management',
    'Planning and Organization',
    'Innovation and Multi-tasking',
    'High Level of Accuracy',
    'Attention to Detail',
    'Proactive Work Approach',
    'Minimal Supervision',
    'Self-management',
    'Deadline Management'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive blend of technical expertise and soft skills developed through years of professional experience.
          </p>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-700 rounded-full flex items-center justify-center">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{skill.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <skill.icon className="w-6 h-6 text-teal-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{skill.title}</h4>
                    <span className="text-sm text-gray-500">{skill.level}% Proficiency</span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Additional Competencies</h3>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;