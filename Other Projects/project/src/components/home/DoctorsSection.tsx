import React from 'react';
import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    image: "https://images.pexels.com/photos/5214969/pexels-photo-5214969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Family Medicine",
    image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Obstetrician/Gynecologist",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "General Surgeon",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const DoctorsSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Meet Our Doctors</h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Our team of skilled and compassionate medical professionals is dedicated to providing the highest quality care.
          </p>
        </div>
        
        <div className="row">
          {doctors.map(doctor => (
            <div key={doctor.id} className="col-md-6 col-lg-3 mb-4">
              <div className="card doctor-card h-100">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="doctor-img"
                />
                <div className="card-body">
                  <h3 className="h5 mb-1">{doctor.name}</h3>
                  <p className="text-primary mb-3">{doctor.specialty}</p>
                  <Link to={`/doctors#doctor-${doctor.id}`} className="btn btn-outline-primary btn-sm">View Profile</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <Link to="/doctors" className="btn btn-primary">View All Doctors</Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;