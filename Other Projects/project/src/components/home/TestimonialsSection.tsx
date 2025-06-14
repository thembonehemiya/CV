import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Davis",
    text: "The care I received at Dave Community Clinic was exceptional. The doctors were attentive and the staff was friendly and professional.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Maria Garcia",
    text: "I'm grateful for the compassionate care provided to my son at the Young Child Clinic. The pediatric team is amazing with children!",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Robert Williams",
    text: "The laboratory services are prompt and efficient. Results are communicated clearly, and the staff takes time to explain everything.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">What Our Patients Say</h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Hear from patients who have experienced our care and services.
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                  >
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-5 text-center">
                        <div className="mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="rounded-circle shadow-sm"
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                          />
                        </div>
                        <p className="lead mb-4">{testimonial.text}</p>
                        <h5 className="mb-1">{testimonial.name}</h5>
                        <p className="text-primary">Patient</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" onClick={prevTestimonial}>
                <span className="carousel-control-prev-icon bg-primary rounded-circle p-3" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" onClick={nextTestimonial}>
                <span className="carousel-control-next-icon bg-primary rounded-circle p-3" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;