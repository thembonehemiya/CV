import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Baby, 
  Heart, 
  Users, 
  Microscope, 
  UserCheck,
  BedDouble
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <BedDouble size={40} color="#1A73E8" />,
    title: "Inpatient Care",
    description: "Our 20-bed facility provides comprehensive inpatient care for patients requiring overnight medical attention."
  },
  {
    id: 2,
    icon: <Stethoscope size={40} color="#1A73E8" />,
    title: "Outpatient Services",
    description: "Convenient outpatient care for routine check-ups, follow-up visits, and non-emergency treatments."
  },
  {
    id: 3,
    icon: <Microscope size={40} color="#1A73E8" />,
    title: "Laboratory Services",
    description: "State-of-the-art laboratory testing services for accurate diagnosis and effective treatment planning."
  },
  {
    id: 4,
    icon: <Baby size={40} color="#1A73E8" />,
    title: "Young Child Clinic",
    description: "Specialized care for infants and young children, including vaccinations, development tracking, and wellness visits."
  },
  {
    id: 5,
    icon: <Users size={40} color="#1A73E8" />,
    title: "Family Planning",
    description: "Comprehensive family planning services and counseling to help you make informed reproductive health decisions."
  },
  {
    id: 6,
    icon: <UserCheck size={40} color="#1A73E8" />,
    title: "Guidance & Counseling",
    description: "Professional guidance and mental health counseling services to support your overall wellbeing."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Our Services</h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Dave Community Clinic offers a wide range of healthcare services to meet the needs of our diverse community.
          </p>
        </div>
        
        <div className="row">
          {services.map(service => (
            <div key={service.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card service-card h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    {service.icon}
                  </div>
                  <h3 className="h4 mb-3">{service.title}</h3>
                  <p className="text-secondary mb-3">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;