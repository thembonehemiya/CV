import React from 'react';
import { User, Calendar, MapPin, Globe } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Full Name', value: 'Thembo Nehemiya' },
    { icon: Calendar, label: 'Date of Birth', value: 'April 14, 1995' },
    { icon: MapPin, label: 'Place of Birth', value: 'Kanyatsi II, Kasese District' },
    { icon: Globe, label: 'Nationality', value: 'Ugandan' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A dedicated IT professional with a Bachelor's degree in Information Technology and extensive experience 
            in computer networking, software systems, and customer experience management. Currently working at MTN Uganda 
            while pursuing advanced certifications in networking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h3>
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <info.icon className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{info.label}</p>
                  <p className="text-lg font-semibold text-gray-900">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                With over 5 years of experience in the IT industry, I specialize in computer networking, 
                hardware maintenance, and customer experience management. My journey began with foundational 
                training in computer literacy and has evolved to encompass advanced networking concepts and 
                enterprise-level customer service.
              </p>
              <p>
                Currently employed at MTN Uganda in the Customer Experience department, I bring a unique 
                blend of technical expertise and customer service excellence. My continuous learning approach 
                is demonstrated through my ongoing CCNA certification studies at the Cisco Networking Academy.
              </p>
              <p>
                I am passionate about leveraging technology to solve real-world problems and am always eager 
                to take on new challenges that push the boundaries of my technical knowledge and professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;