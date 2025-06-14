import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PageHeader from '../components/common/PageHeader';

const doctors = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Pediatrician" },
  { id: 2, name: "Dr. Michael Chen", specialty: "Family Medicine" },
  { id: 3, name: "Dr. Emily Rodriguez", specialty: "Obstetrician/Gynecologist" },
  { id: 4, name: "Dr. James Wilson", specialty: "General Surgeon" },
  { id: 5, name: "Dr. Lisa Thompson", specialty: "Internal Medicine" },
  { id: 6, name: "Dr. Robert Davis", specialty: "Psychiatrist" }
];

const services = [
  { id: 1, name: "General Checkup" },
  { id: 2, name: "Child Wellness Visit" },
  { id: 3, name: "Laboratory Testing" },
  { id: 4, name: "Family Planning Consultation" },
  { id: 5, name: "Prenatal Care" },
  { id: 6, name: "Minor Surgery" },
  { id: 7, name: "HIV Testing & Counseling" },
  { id: 8, name: "Mental Health Consultation" }
];

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  date: Yup.date().required('Date is required').min(new Date(), 'Date cannot be in the past'),
  time: Yup.string().required('Time is required'),
  doctor: Yup.string().required('Please select a doctor'),
  service: Yup.string().required('Please select a service'),
  reason: Yup.string().required('Please provide a reason for your visit')
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  doctor: '',
  service: '',
  reason: '',
  isNewPatient: false
};

const AppointmentPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [appointmentData, setAppointmentData] = useState<any>(null);

  useEffect(() => {
    document.title = 'Book an Appointment | Dave Community Clinic';
  }, []);

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    // In a real application, this would be an API call to save the appointment
    console.log('Appointment form submitted:', values);
    setAppointmentData(values);
    setSubmitted(true);
    resetForm();
    
    // Scroll to top to show confirmation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <PageHeader 
        title="Book an Appointment" 
        subtitle="Schedule your visit with our healthcare professionals"
        backgroundImage="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      />
      
      <section className="section">
        <div className="container">
          {submitted ? (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm p-4 mb-5">
                  <div className="card-body text-center">
                    <div className="mb-4">
                      <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center\" style={{ width: '80px', height: '80px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                      </div>
                    </div>
                    <h2 className="mb-3">Appointment Scheduled Successfully!</h2>
                    <p className="lead mb-4">
                      Thank you for scheduling an appointment with Dave Community Clinic. We look forward to seeing you soon.
                    </p>
                    {appointmentData && (
                      <div className="card bg-light p-4 text-start mb-4">
                        <h3 className="h5 mb-3">Appointment Details:</h3>
                        <ul className="list-unstyled">
                          <li className="mb-2"><strong>Name:</strong> {appointmentData.name}</li>
                          <li className="mb-2"><strong>Date:</strong> {new Date(appointmentData.date).toLocaleDateString()}</li>
                          <li className="mb-2"><strong>Time:</strong> {appointmentData.time}</li>
                          <li className="mb-2">
                            <strong>Doctor:</strong> {doctors.find(d => d.id === parseInt(appointmentData.doctor))?.name || appointmentData.doctor}
                          </li>
                          <li className="mb-2">
                            <strong>Service:</strong> {services.find(s => s.id === parseInt(appointmentData.service))?.name || appointmentData.service}
                          </li>
                        </ul>
                      </div>
                    )}
                    <p className="mb-4">
                      A confirmation email has been sent to your email address. If you need to reschedule or cancel your appointment, please contact us at (123) 456-7890.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <button onClick={() => setSubmitted(false)} className="btn btn-primary">
                        Book Another Appointment
                      </button>
                      <a href="/" className="btn btn-outline-primary">
                        Return to Home
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div>
                  <h2 className="mb-4">Schedule Your Visit</h2>
                  <p className="lead mb-4">
                    Fill out the form to schedule an appointment with one of our healthcare professionals.
                  </p>
                  
                  <div className="card bg-light border-0 p-4 mb-4">
                    <h3 className="h5 mb-3">Why Choose Dave Community Clinic?</h3>
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '36px', height: '36px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                          </svg>
                        </div>
                        <span>Convenient online scheduling</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '36px', height: '36px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                        </div>
                        <span>Expert medical professionals</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '36px', height: '36px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                          </svg>
                        </div>
                        <span>Minimal waiting times</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '36px', height: '36px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hospital" viewBox="0 0 16 16">
                            <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"/>
                            <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"/>
                          </svg>
                        </div>
                        <span>Comprehensive care under one roof</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary text-white p-4 rounded">
                    <h3 className="h5 mb-3">Need Immediate Assistance?</h3>
                    <p className="mb-3">Call our appointment line directly:</p>
                    <div className="d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                      <span className="fw-bold">(123) 456-7890</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-7">
                <div className="appointment-form">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting, touched, errors }) => (
                      <Form>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                              placeholder="Enter your full name"
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
                          
                          <div className="col-md-6 mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <Field
                              type="tel"
                              id="phone"
                              name="phone"
                              className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                              placeholder="Enter your phone number"
                            />
                            <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                          </div>
                          
                          <div className="col-md-6 mb-3">
                            <label htmlFor="date" className="form-label">Preferred Date</label>
                            <Field
                              type="date"
                              id="date"
                              name="date"
                              className={`form-control ${touched.date && errors.date ? 'is-invalid' : ''}`}
                              min={new Date().toISOString().split('T')[0]}
                            />
                            <ErrorMessage name="date" component="div" className="invalid-feedback" />
                          </div>
                          
                          <div className="col-md-6 mb-3">
                            <label htmlFor="time" className="form-label">Preferred Time</label>
                            <Field
                              as="select"
                              id="time"
                              name="time"
                              className={`form-select ${touched.time && errors.time ? 'is-invalid' : ''}`}
                            >
                              <option value="">Select a time</option>
                              <option value="09:00 AM">09:00 AM</option>
                              <option value="10:00 AM">10:00 AM</option>
                              <option value="11:00 AM">11:00 AM</option>
                              <option value="12:00 PM">12:00 PM</option>
                              <option value="01:00 PM">01:00 PM</option>
                              <option value="02:00 PM">02:00 PM</option>
                              <option value="03:00 PM">03:00 PM</option>
                              <option value="04:00 PM">04:00 PM</option>
                            </Field>
                            <ErrorMessage name="time" component="div" className="invalid-feedback" />
                          </div>
                          
                          <div className="col-md-6 mb-3">
                            <label htmlFor="doctor" className="form-label">Preferred Doctor</label>
                            <Field
                              as="select"
                              id="doctor"
                              name="doctor"
                              className={`form-select ${touched.doctor && errors.doctor ? 'is-invalid' : ''}`}
                            >
                              <option value="">Select a doctor</option>
                              {doctors.map(doctor => (
                                <option key={doctor.id} value={doctor.id}>
                                  {doctor.name} - {doctor.specialty}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage name="doctor" component="div" className="invalid-feedback" />
                          </div>
                          
                          <div className="col-md-6 mb-3">
                            <label htmlFor="service" className="form-label">Service</label>
                            <Field
                              as="select"
                              id="service"
                              name="service"
                              className={`form-select ${touched.service && errors.service ? 'is-invalid' : ''}`}
                            >
                              <option value="">Select a service</option>
                              {services.map(service => (
                                <option key={service.id} value={service.id}>
                                  {service.name}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage name="service" component="div" className="invalid-feedback" />
                          </div>
                          
                          <div className="col-md-12 mb-3">
                            <label htmlFor="reason" className="form-label">Reason for Visit</label>
                            <Field
                              as="textarea"
                              id="reason"
                              name="reason"
                              rows="3"
                              className={`form-control ${touched.reason && errors.reason ? 'is-invalid' : ''}`}
                              placeholder="Please briefly describe the reason for your visit"
                            />
                            <ErrorMessage name="reason" component="div" className="invalid-feedback" />
                          </div>
                          
                          <div className="col-md-12 mb-4">
                            <div className="form-check">
                              <Field
                                type="checkbox"
                                id="isNewPatient"
                                name="isNewPatient"
                                className="form-check-input"
                              />
                              <label className="form-check-label" htmlFor="isNewPatient">
                                I am a new patient
                              </label>
                            </div>
                          </div>
                          
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="btn btn-primary w-100 py-3"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AppointmentPage;