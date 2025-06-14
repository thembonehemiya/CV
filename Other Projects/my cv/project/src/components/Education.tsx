import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      period: '2017 - 2020',
      institution: 'Kampala International University',
      degree: 'Bachelor in Information Technology',
      level: 'University',
      description: 'Comprehensive study of IT fundamentals, software development, networking, and systems analysis.',
    },
    {
      period: '2013 - 2014',
      institution: 'Rwenzori High School',
      degree: 'Advanced Level Certificate',
      level: 'A-Level',
      description: 'Advanced secondary education with focus on sciences and mathematics.',
    },
    {
      period: '2009 - 2012',
      institution: 'Maliba Secondary School',
      degree: 'Ordinary Level Certificate',
      level: 'O-Level',
      description: 'Secondary education covering core subjects and foundational knowledge.',
    },
    {
      period: '2001 - 2008',
      institution: 'Ikobero Primary School',
      degree: 'Primary Education Certificate',
      level: 'Primary',
      description: 'Primary education providing fundamental literacy and numeracy skills.',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'University':
        return 'bg-blue-100 text-blue-800';
      case 'A-Level':
        return 'bg-teal-100 text-teal-800';
      case 'O-Level':
        return 'bg-orange-100 text-orange-800';
      case 'Primary':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My educational journey spanning from primary school to university, building a strong foundation in technology and academics.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                      <Calendar className="w-5 h-5 text-blue-700" />
                      <span className="text-blue-700 font-semibold">{edu.period}</span>
                    </div>
                    
                    <div className={`mb-4 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(edu.level)} mb-3`}>
                        {edu.level}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <h4 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5" />
                        {edu.institution}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="w-full lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;