import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Medical team at Dave Community Clinic" 
              className="img-fluid rounded shadow-lg"
              style={{ objectFit: 'cover', height: '500px', width: '100%' }}
            />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="mb-4">
              <h2>About Dave Community Clinic</h2>
              <div className="d-inline-block bg-primary" style={{ height: '3px', width: '50px' }}></div>
            </div>
            <p className="lead mb-4">
              We're committed to providing comprehensive, accessible healthcare services to our community.
            </p>
            <p className="mb-4">
              Founded with a mission to serve, Dave Community Clinic has grown into a trusted healthcare provider in the region. 
              Our facility includes a 20-bed inpatient unit, state-of-the-art laboratory, and specialized clinics for various healthcare needs.
            </p>
            <p className="mb-4">
              Our team of dedicated healthcare professionals works tirelessly to ensure that every patient receives 
              personalized care in a comfortable and supportive environment.
            </p>
            <div className="row mt-5">
              <div className="col-6 col-md-4 mb-4">
                <div className="d-flex align-items-center">
                  <div className="display-4 text-primary fw-bold me-2">20</div>
                  <div>Inpatient Beds</div>
                </div>
              </div>
              <div className="col-6 col-md-4 mb-4">
                <div className="d-flex align-items-center">
                  <div className="display-4 text-primary fw-bold me-2">15+</div>
                  <div>Medical Specialists</div>
                </div>
              </div>
              <div className="col-6 col-md-4 mb-4">
                <div className="d-flex align-items-center">
                  <div className="display-4 text-primary fw-bold me-2">24/7</div>
                  <div>Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;