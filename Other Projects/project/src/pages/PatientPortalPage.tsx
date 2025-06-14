import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PageHeader from '../components/common/PageHeader';

const loginValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const registerValidationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
  phone: Yup.string().required('Phone number is required')
});

const PatientPortalPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    document.title = 'Patient Portal | Dave Community Clinic';
  }, []);
  
  const handleLogin = (values: any) => {
    console.log('Login submitted:', values);
    // In a real application, this would be an API call to authenticate
    setIsLoggedIn(true);
  };
  
  const handleRegister = (values: any) => {
    console.log('Registration submitted:', values);
    // In a real application, this would be an API call to register
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <>
      <PageHeader 
        title="Patient Portal" 
        subtitle="Access your medical records and manage your healthcare"
        backgroundImage="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      />
      
      <section className="section">
        <div className="container">
          {isLoggedIn ? (
            <div className="row">
              <div className="col-lg-3 mb-4 mb-lg-0">
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center\" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                        JD
                      </div>
                    </div>
                    <h3 className="h5 mb-1">John Doe</h3>
                    <p className="text-muted mb-3">Patient ID: 12345678</p>
                    <button onClick={handleLogout} className="btn btn-outline-primary w-100">
                      Log Out
                    </button>
                  </div>
                </div>
                
                <div className="list-group shadow-sm">
                  <a href="#" className="list-group-item list-group-item-action active">
                    <i className="bi bi-house-door me-2"></i> Dashboard
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    <i className="bi bi-calendar me-2"></i> Appointments
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    <i className="bi bi-file-medical me-2"></i> Medical Records
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    <i className="bi bi-capsule me-2"></i> Prescriptions
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    <i className="bi bi-chat me-2"></i> Messages
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    <i className="bi bi-credit-card me-2"></i> Billing
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    <i className="bi bi-gear me-2"></i> Settings
                  </a>
                </div>
              </div>
              
              <div className="col-lg-9">
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h2 className="h4 mb-4">Welcome Back, John!</h2>
                    
                    <div className="row mb-4">
                      <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card bg-primary text-white h-100">
                          <div className="card-body p-3">
                            <h3 className="h6 mb-2">Upcoming Appointment</h3>
                            <p className="mb-0 fw-bold">May 15, 2025 - 10:00 AM</p>
                            <p className="mb-0">Dr. Sarah Johnson</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card bg-success text-white h-100">
                          <div className="card-body p-3">
                            <h3 className="h6 mb-2">Prescription Refills</h3>
                            <p className="mb-0 fw-bold">2 Available</p>
                            <a href="#" className="text-white text-decoration-underline">Request Refill</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-info text-white h-100">
                          <div className="card-body p-3">
                            <h3 className="h6 mb-2">Unread Messages</h3>
                            <p className="mb-0 fw-bold">1 New Message</p>
                            <a href="#" className="text-white text-decoration-underline">View Messages</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="h5 mb-3">Your Recent Visits</h3>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="table-light">
                          <tr>
                            <th>Date</th>
                            <th>Provider</th>
                            <th>Reason</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Apr 10, 2025</td>
                            <td>Dr. Michael Chen</td>
                            <td>Annual Checkup</td>
                            <td><a href="#" className="btn btn-sm btn-outline-primary">View</a></td>
                          </tr>
                          <tr>
                            <td>Feb 15, 2025</td>
                            <td>Dr. Lisa Thompson</td>
                            <td>Flu Symptoms</td>
                            <td><a href="#" className="btn btn-sm btn-outline-primary">View</a></td>
                          </tr>
                          <tr>
                            <td>Jan 05, 2025</td>
                            <td>Dr. James Wilson</td>
                            <td>Minor Surgery Follow-up</td>
                            <td><a href="#" className="btn btn-sm btn-outline-primary">View</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3 className="h5 mb-0">Upcoming Appointments</h3>
                      <a href="/appointment" className="btn btn-primary btn-sm">Schedule New</a>
                    </div>
                    
                    <div className="card mb-3">
                      <div className="card-body p-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h4 className="h6 mb-0">General Checkup</h4>
                          <span className="badge bg-primary">Upcoming</span>
                        </div>
                        <p className="text-muted mb-1">May 15, 2025 - 10:00 AM</p>
                        <p className="mb-0">Dr. Sarah Johnson - Pediatrician</p>
                        <div className="mt-3">
                          <a href="#" className="btn btn-sm btn-outline-primary me-2">Reschedule</a>
                          <a href="#" className="btn btn-sm btn-outline-danger">Cancel</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card">
                      <div className="card-body p-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h4 className="h6 mb-0">Lab Results Review</h4>
                          <span className="badge bg-primary">Upcoming</span>
                        </div>
                        <p className="text-muted mb-1">June 03, 2025 - 02:30 PM</p>
                        <p className="mb-0">Dr. Michael Chen - Family Medicine</p>
                        <div className="mt-3">
                          <a href="#" className="btn btn-sm btn-outline-primary me-2">Reschedule</a>
                          <a href="#" className="btn btn-sm btn-outline-danger">Cancel</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4 p-lg-5">
                    <ul className="nav nav-tabs mb-4">
                      <li className="nav-item">
                        <button 
                          className={`nav-link ${isLogin ? 'active' : ''}`}
                          onClick={() => setIsLogin(true)}
                        >
                          Login
                        </button>
                      </li>
                      <li className="nav-item">
                        <button 
                          className={`nav-link ${!isLogin ? 'active' : ''}`}
                          onClick={() => setIsLogin(false)}
                        >
                          Register
                        </button>
                      </li>
                    </ul>
                    
                    {isLogin ? (
                      <div>
                        <h2 className="h4 mb-4">Login to Your Account</h2>
                        <Formik
                          initialValues={{ email: '', password: '' }}
                          validationSchema={loginValidationSchema}
                          onSubmit={handleLogin}
                        >
                          {({ isSubmitting, touched, errors }) => (
                            <Form>
                              <div className="mb-3">
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
                              
                              <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field
                                  type="password"
                                  id="password"
                                  name="password"
                                  className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                                  placeholder="Enter your password"
                                />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                              </div>
                              
                              <div className="mb-4">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rememberMe"
                                  />
                                  <label className="form-check-label" htmlFor="rememberMe">
                                    Remember me
                                  </label>
                                </div>
                              </div>
                              
                              <button
                                type="submit"
                                className="btn btn-primary w-100 py-2"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                              </button>
                              
                              <div className="text-center mt-3">
                                <a href="#" className="text-decoration-none">Forgot your password?</a>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    ) : (
                      <div>
                        <h2 className="h4 mb-4">Create a New Account</h2>
                        <Formik
                          initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            dateOfBirth: '',
                            phone: ''
                          }}
                          validationSchema={registerValidationSchema}
                          onSubmit={handleRegister}
                        >
                          {({ isSubmitting, touched, errors }) => (
                            <Form>
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="firstName" className="form-label">First Name</label>
                                  <Field
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className={`form-control ${touched.firstName && errors.firstName ? 'is-invalid' : ''}`}
                                    placeholder="Enter first name"
                                  />
                                  <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                </div>
                                
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="lastName" className="form-label">Last Name</label>
                                  <Field
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
                                    placeholder="Enter last name"
                                  />
                                  <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                </div>
                              </div>
                              
                              <div className="mb-3">
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
                              
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="password" className="form-label">Password</label>
                                  <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Create a password"
                                  />
                                  <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>
                                
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                  <Field
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className={`form-control ${touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : ''}`}
                                    placeholder="Confirm your password"
                                  />
                                  <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                </div>
                              </div>
                              
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                                  <Field
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    className={`form-control ${touched.dateOfBirth && errors.dateOfBirth ? 'is-invalid' : ''}`}
                                  />
                                  <ErrorMessage name="dateOfBirth" component="div" className="invalid-feedback" />
                                </div>
                                
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="phone" className="form-label">Phone Number</label>
                                  <Field
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                                    placeholder="Enter phone number"
                                  />
                                  <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                                </div>
                              </div>
                              
                              <div className="mb-4">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="termsAgreement"
                                    required
                                  />
                                  <label className="form-check-label" htmlFor="termsAgreement">
                                    I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                                  </label>
                                </div>
                              </div>
                              
                              <button
                                type="submit"
                                className="btn btn-primary w-100 py-2"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? 'Creating Account...' : 'Create Account'}
                              </button>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PatientPortalPage;