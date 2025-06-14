import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    education: "MD, University of California",
    experience: "12 years",
    certifications: ["American Board of Pediatrics", "Pediatric Advanced Life Support"],
    bio: "Dr. Johnson specializes in pediatric care with a focus on early childhood development. She is passionate about preventive care and educating families on childhood health.",
    image: "https://images.pexels.com/photos/5214969/pexels-photo-5214969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    schedule: "Mon, Wed, Fri: 9AM - 5PM"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Family Medicine",
    education: "MD, Johns Hopkins University",
    experience: "15 years",
    certifications: ["American Board of Family Medicine", "Advanced Cardiac Life Support"],
    bio: "Dr. Chen provides comprehensive care for patients of all ages. He focuses on building long-term relationships with families and emphasizes preventive healthcare.",
    image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    schedule: "Tue, Thu: 8AM - 6PM, Sat: 9AM - 1PM"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Obstetrician/Gynecologist",
    education: "MD, Stanford University",
    experience: "10 years",
    certifications: ["American Board of Obstetrics and Gynecology", "Advanced Life Support in Obstetrics"],
    bio: "Dr. Rodriguez specializes in women's health, including prenatal care, family planning, and reproductive health. She is dedicated to providing compassionate and comprehensive care to women of all ages.",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    schedule: "Mon, Wed, Thu: 8AM - 4PM"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "General Surgeon",
    education: "MD, Harvard Medical School",
    experience: "18 years",
    certifications: ["American Board of Surgery", "Advanced Trauma Life Support"],
    bio: "Dr. Wilson is an experienced general surgeon specializing in minimally invasive procedures. His expertise includes abdominal surgery, hernia repair, and minor surgical procedures.",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    schedule: "Tue, Fri: 9AM - 5PM"
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Internal Medicine",
    education: "MD, Yale University",
    experience: "14 years",
    certifications: ["American Board of Internal Medicine", "Critical Care Medicine"],
    bio: "Dr. Thompson specializes in adult medicine and managing chronic conditions. She takes a holistic approach to patient care and focuses on preventive strategies.",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    schedule: "Mon, Tue, Thu: 8AM - 5PM"
  },
  {
    id: 6,
    name: "Dr. Robert Davis",
    specialty: "Psychiatrist",
    education: "MD, Columbia University",
    experience: "11 years",
    certifications: ["American Board of Psychiatry", "Cognitive Behavioral Therapy Certification"],
    bio: "Dr. Davis specializes in mental health counseling and psychiatric care. He helps patients manage anxiety, depression, and other mental health concerns with compassion and expertise.",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    schedule: "Wed, Fri: 9AM - 6PM"
  }
];

const DoctorsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Doctors | Dave Community Clinic';
    
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
  
  return (
    <>
      <PageHeader 
        title="Our Medical Team" 
        subtitle="Meet our experienced and dedicated healthcare professionals"
        backgroundImage="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      />
      
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Meet Our Specialist Doctors</h2>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
              Our team of qualified medical specialists is dedicated to providing exceptional care to all our patients.
            </p>
          </div>
          
          <div className="row">
            {doctors.map(doctor => (
              <div key={doctor.id} className="col-lg-6 mb-5" id={`doctor-${doctor.id}`}>
                <div className="card border-0 shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="img-fluid rounded-start"
                        style={{ height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h3 className="card-title h4 mb-1">{doctor.name}</h3>
                        <p className="text-primary mb-3">{doctor.specialty}</p>
                        <p className="card-text mb-3">{doctor.bio}</p>
                        
                        <div className="mb-3">
                          <strong>Education:</strong> {doctor.education}
                        </div>
                        
                        <div className="mb-3">
                          <strong>Experience:</strong> {doctor.experience}
                        </div>
                        
                        <div className="mb-3">
                          <strong>Schedule:</strong> {doctor.schedule}
                        </div>
                        
                        <div className="mb-3">
                          <strong>Certifications:</strong>
                          <ul className="list-unstyled mt-1">
                            {doctor.certifications.map((cert, index) => (
                              <li key={index} className="d-flex align-items-center mb-1">
                                <div className="bg-primary rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                                {cert}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <a href="/appointment" className="btn btn-primary">Book Appointment</a>
                      </div>
                    </div>
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

export default DoctorsPage;