import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PageHeader from '../components/common/PageHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Dave Community Clinic';
  }, []);
  
  const handleSubmit = (values: any, { resetForm }: any) => {
    // In a real application, this would be an API call to send the message
    console.log('Contact form submitted:', values);
    alert('Thank you for your message. We will get back to you soon!');
    resetForm();
  };
  
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help and answer any questions you might have"
        backgroundImage="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      />
      
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h2 className="mb-4">Get in Touch</h2>
              <p className="lead mb-4">
                Have questions about our services or need to schedule an appointment? Contact us today and our friendly staff will be happy to assist you.
              </p>
              
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="h5 mb-2">Our Location</h3>
                      <p className="mb-0">123 Healthcare Avenue, Medical District,<br />City, Country</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="h5 mb-2">Phone Number</h3>
                      <p className="mb-0">Main Line: +1 (123) 456-7890</p>
                      <p className="mb-0">Emergency: +1 (123) 456-7899</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="h5 mb-2">Email Address</h3>
                      <p className="mb-0">info@daveclinic.com</p>
                      <p className="mb-0">appointments@daveclinic.com</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start">
                    <div className="bg-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="h5 mb-2">Working Hours</h3>
                      <p className="mb-0">Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p className="mb-0">Saturday - Sunday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card border-0 bg-primary text-white shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 mb-3">Emergency Services</h3>
                  <p className="mb-3">
                    For medical emergencies, please call our emergency line or visit our clinic immediately.
                  </p>
                  <div className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <span className="fw-bold">Emergency: +1 (123) 456-7899</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4 p-lg-5">
                  <h2 className="mb-4">Send Us a Message</h2>
                  <Formik
                    initialValues={{ name: '', email: '', subject: '', message: '' }}
                    validationSchema={contactValidationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting, touched, errors }) => (
                      <Form>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                              placeholder="Enter your name"
                            />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                          </div>
                          
                          <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                              placeholder="Enter your email"
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label">Subject</label>
                          <Field
                            type="text"
                            id="subject"
                            name="subject"
                            className={`form-control ${touched.subject && errors.subject ? 'is-invalid' : ''}`}
                            placeholder="Enter message subject"
                          />
                          <ErrorMessage name="subject" component="div" className="invalid-feedback" />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="message" className="form-label">Message</label>
                          <Field
                            as="textarea"
                            id="message"
                            name="message"
                            rows="5"
                            className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                            placeholder="Type your message here"
                          />
                          <ErrorMessage name="message" component="div" className="invalid-feedback" />
                        </div>
                        
                        <button
                          type="submit"
                          className="btn btn-primary py-2 px-4"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  {/* In a real application, this would be a Google Maps embed */}
                  <div className="ratio ratio-16x9">
                    <img 
                      src="https://images.pexels.com/photos/244482/pexels-photo-244482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Map location of Dave Community Clinic" 
                      className="img-fluid"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;