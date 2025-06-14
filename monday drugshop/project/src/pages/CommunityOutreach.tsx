import React from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar, Users, HeartPulse, MapPin } from 'lucide-react';
import { IMAGES } from '../utils/constants';

const CommunityOutreach: React.FC = () => {
  const upcomingEvents = [
    {
      title: "Free Health Check-up Camp",
      date: "June 15, 2025",
      location: "Kasambya Village, Mubende",
      description: "Join us for a free health screening including blood pressure, blood sugar, and basic health check-ups."
    },
    {
      title: "HIV/AIDS Awareness Workshop",
      date: "July 10, 2025",
      location: "Kibalinga Community Center",
      description: "Educational workshop focused on HIV prevention, testing, and breaking stigma in the community."
    },
    {
      title: "Maternal Health Outreach",
      date: "Oct 5, 2025",
      location: "Madudu Sub-county",
      description: "Prenatal care, nutrition guidance, and health education for expectant mothers in rural areas."
    }
  ];
  
  const pastProjects = [
    {
      title: "Sickle Cell Screening Initiative",
      year: "2024",
      impact: "Screened over 500 residents and provided education on sickle cell disease management.",
      image: IMAGES.OUTREACH_1
    },
    {
      title: "Community Health Worker Training",
      year: "2023",
      impact: "Trained 25 local community health workers to provide basic healthcare support in remote villages.",
      image: IMAGES.OUTREACH_2
    }
  ];
  
  return (
    <div>
      <PageHeader title="Community Outreach" backgroundImage={IMAGES.OUTREACH_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Our Commitment to the Community</h2>
                <p className="mb-4 text-gray-700">
                  At Dove Medical Services, we believe that healthcare should extend beyond our clinic walls. Our community outreach programs are designed to bring essential medical services to underserved areas in and around Mubende district.
                </p>
                <p className="mb-4 text-gray-700">
                  Through health education, preventive care, and accessible services, we aim to improve the overall health and wellbeing of our community, especially for those who face barriers to accessing quality healthcare.
                </p>
                <p className="text-gray-700">
                  Our dedicated team regularly conducts outreach activities including health camps, awareness programs, and specialized services for vulnerable populations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img 
                  src={IMAGES.OUTREACH_1} 
                  alt="Community health camp" 
                  className="rounded-lg shadow-md h-full object-cover"
                />
                <div className="grid grid-rows-2 gap-4">
                  <img 
                    src={IMAGES.OUTREACH_2} 
                    alt="Health education session" 
                    className="rounded-lg shadow-md h-full object-cover"
                  />
                  <img 
                    src={IMAGES.OUTREACH_2}  
                    alt="Medical checkup" 
                    className="rounded-lg shadow-md h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="section-title text-center">Upcoming Outreach Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center mb-4 text-blue-600">
                    <Calendar size={20} className="mr-2" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">{event.title}</h3>
                  
                  <div className="flex items-start mb-4 text-gray-600">
                    <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <button className="btn-secondary w-full">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Past Projects */}
          <div className="mb-16">
            <h2 className="section-title text-center">Past Outreach Projects</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {pastProjects.map((project, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-lg overflow-hidden">
                  <div className="md:w-2/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:w-3/5">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                      {project.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.impact}</p>
                    <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                      View Project Details <span className="ml-1">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Get Involved */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">Get Involved in Our Community Efforts</h2>
              <p className="text-gray-700 mb-6">
                We welcome volunteers, partners, and sponsors who share our mission to improve healthcare access in our community. Your support can make a significant difference in the lives of those we serve.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">
                  Volunteer With Us
                </button>
                <button className="btn-secondary">
                  Support Our Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityOutreach;