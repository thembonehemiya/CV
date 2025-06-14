import React from 'react';
import { Award, BookOpen, Trophy, Clock } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'MTN DATA LITERACY FOR ALL',
      issuer: 'MTN Uganda',
      type: 'Professional Development',
      status: 'Completed',
      icon: Award
    },
    {
      title: 'DELIGHTING CUSTOMERS WITH DESIGN THINKING',
      issuer: 'MTN Uganda',
      type: 'Customer Experience',
      status: 'Completed',
      icon: Trophy
    },
    {
      title: 'Anti-Money Laundering (AML)',
      issuer: 'MTN Uganda',
      type: 'Compliance',
      status: 'Completed',
      icon: Award
    },
    {
      title: 'Work Ethics',
      issuer: 'MTN Uganda',
      type: 'Professional Development',
      status: 'Completed',
      icon: Trophy
    },
    {
      title: 'SECURITY AWARENESS ON RANSOMWARE',
      issuer: 'MTN Uganda',
      type: 'Cybersecurity',
      status: 'Completed',
      icon: Award
    },
    {
      title: 'BUSINESS EMAIL COMPROMISE',
      issuer: 'MTN Uganda',
      type: 'Cybersecurity',
      status: 'Completed',
      icon: Trophy
    }
  ];

  const ongoingCertification = {
    title: 'CCNA - Cisco Certified Network Associate',
    issuer: 'Cisco Networking Academy',
    type: 'Technical Certification',
    status: 'In Progress',
    description: 'Comprehensive networking certification covering routing, switching, network security, and troubleshooting.',
    progress: 75
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Professional Development':
        return 'bg-blue-100 text-blue-800';
      case 'Customer Experience':
        return 'bg-teal-100 text-teal-800';
      case 'Compliance':
        return 'bg-purple-100 text-purple-800';
      case 'Cybersecurity':
        return 'bg-red-100 text-red-800';
      case 'Technical Certification':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Awards</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications and training programs that demonstrate my commitment to continuous learning and skill development.
          </p>
        </div>

        {/* Ongoing Certification - Featured */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 rounded-2xl text-white mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">{ongoingCertification.title}</h3>
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {ongoingCertification.status}
                  </span>
                </div>
                <p className="text-orange-100 mb-4">{ongoingCertification.issuer}</p>
                <p className="text-white opacity-90 leading-relaxed">{ongoingCertification.description}</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm font-medium">{ongoingCertification.progress}%</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${ongoingCertification.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Completed Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Completed Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <cert.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {cert.status}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {cert.title}
                </h4>
                
                <p className="text-gray-600 mb-4 font-medium">{cert.issuer}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(cert.type)}`}>
                  {cert.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-700 mb-2">{certifications.length}</div>
              <div className="text-gray-600 font-medium">Completed Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
              <div className="text-gray-600 font-medium">Ongoing Certification</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Skill Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;