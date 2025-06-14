import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Heart, Microscope, Baby, Users, BrainCircuit, Activity, Brush as Virus, BedDouble } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <BedDouble size={40} color="#1A73E8" />,
    title: "Inpatient Services",
    description: "Our 20-bed facility provides comprehensive inpatient care for patients requiring overnight medical attention. Our skilled nursing staff provides round-the-clock care to ensure patient comfort and recovery.",
    features: [
      "24/7 nursing care",
      "Private and semi-private rooms",
      "Specialized care plans",
      "Daily physician visits"
    ]
  },
  {
    id: 2,
    icon: <Activity size={40} color="#1A73E8" />,
    title: "Outpatient Services",
    description: "Our outpatient department offers convenient care for routine check-ups, follow-up visits, and non-emergency treatments. Schedule appointments with our specialists without the need for hospital admission.",
    features: [
      "Flexible scheduling",
      "Short waiting times",
      "Follow-up care",
      "Specialist consultations"
    ]
  },
  {
    id: 3,
    icon: <Microscope size={40} color="#1A73E8" />,
    title: "Laboratory Services",
    description: "Our state-of-the-art laboratory provides accurate diagnostic testing to help identify health issues and guide treatment decisions. Quick turnaround times ensure you get results promptly.",
    features: [
      "Blood tests",
      "Urinalysis",
      "Microbiology testing",
      "Rapid diagnostic tests"
    ]
  },
  {
    id: 4,
    icon: <Baby size={40} color="#1A73E8" />,
    title: "Young Child Clinic",
    description: "Our pediatric specialists provide comprehensive care for infants and young children. From routine check-ups to developmental assessments, we ensure your child's health and well-being.",
    features: [
      "Immunizations",
      "Growth monitoring",
      "Developmental screenings",
      "Pediatric consultations"
    ]
  },
  {
    id: 5,
    icon: <Users size={40} color="#1A73E8" />,
    title: "Family Planning",
    description: "Our family planning services provide education, counseling, and various contraceptive options to help individuals and couples make informed decisions about their reproductive health.",
    features: [
      "Contraceptive counseling",
      "Fertility awareness",
      "Preconception health",
      "Reproductive health education"
    ]
  },
  {
    id: 6,
    icon: <BrainCircuit size={40} color="#1A73E8" />,
    title: "Guidance & Counseling",
    description: "Our professional counselors provide support for mental health issues, relationship challenges, and life transitions. We offer a safe space to discuss concerns and develop coping strategies.",
    features: [
      "Individual counseling",
      "Family therapy",
      "Stress management",
      "Behavioral health support"
    ]
  },
  {
    id: 7,
    icon: <Virus size={40} color="#1A73E8" />,
    title: "HIV Screening & Testing",
    description: "We offer confidential HIV screening and testing services in a supportive environment. Early detection is crucial for effective management and treatment of HIV/AIDS.",
    features: [
      "Rapid HIV testing",
      "Pre and post-test counseling",
      "Referral services",
      "Ongoing support"
    ]
  },
  {
    id: 8,
    icon: <Heart size={40} color="#1A73E8" />,
    title: "Reproductive Health",
    description: "Our reproductive health services address a wide range of women's and men's health issues, ensuring comprehensive care for reproductive well-being.",
    features: [
      "Prenatal care",
      "Gynecological exams",
      "STI screening and treatment",
      "Reproductive health education"
    ]
  }
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | Dave Community Clinic';
  }, []);
  
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive healthcare services for you and your family"
        backgroundImage="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      />
      
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Comprehensive Healthcare Services</h2>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
              At Dave Community Clinic, we offer a wide range of medical services to meet the diverse needs of our community.
            </p>
          </div>
          
          <div className="row">
            {services.map(service => (
              <div key={service.id} className="col-lg-6 mb-4">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-3">
                        {service.icon}
                      </div>
                      <h3 className="h4 mb-0">{service.title}</h3>
                    </div>
                    <p className="mb-4">{service.description}</p>
                    <h4 className="h5 mb-3">What we offer:</h4>
                    <ul className="list-group list-group-flush">
                      {service.features.map((feature, index) => (
                        <li key={index} className="list-group-item px-0 py-2 border-0">
                          <div className="d-flex align-items-center">
                            <div className="bg-primary rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                            {feature}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;