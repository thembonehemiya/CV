import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentCTA: React.FC = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <h2 className="mb-3">Ready to Schedule Your Appointment?</h2>
            <p className="lead mb-0">
              Book your appointment online or call us at (123) 456-7890 for immediate assistance.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link to="/appointment" className="btn btn-light btn-lg">Book Appointment</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;