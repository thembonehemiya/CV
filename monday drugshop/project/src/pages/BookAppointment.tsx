import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import PageHeader from '../components/PageHeader';
import { IMAGES } from '../utils/constants';
import { addDays, isWeekend, setHours, setMinutes } from 'date-fns';

const BookAppointment: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    notes: '',
    isNewPatient: false
  });
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    if (!selectedDate) newErrors.date = 'Please select a date and time';
    
    return newErrors;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Appointment form submitted:', { ...formData, appointmentDate: selectedDate });
    
    // Show success message and reset form
    setIsSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceType: '',
      notes: '',
      isNewPatient: false
    });
    setSelectedDate(null);
    setErrors({});
    
    // Scroll to top to see confirmation message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Filter available appointment times (9am to 5pm, no weekends)
  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    
    return currentDate.getTime() < selectedDate.getTime();
  };
  
  const isWeekday = (date: Date) => {
    return !isWeekend(date);
  };
  
  const getAvailableTimes = () => {
    const times = [];
    let startHour = 9; // 9 AM
    let endHour = 17; // 5 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      times.push(setHours(setMinutes(new Date(), 0), hour));
      times.push(setHours(setMinutes(new Date(), 30), hour));
    }
    
    return times;
  };
  
  return (
    <div>
      <PageHeader title="Book an Appointment" backgroundImage={IMAGES.APPOINTMENT_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          {isSubmitted ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-green-800 mb-2">Appointment Request Received!</h2>
              <p className="mb-4">Thank you for booking an appointment with Dove Medical Services. We will confirm your appointment shortly via email or phone.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="section-title">Schedule Your Visit</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below to request an appointment with our healthcare team. We'll confirm your appointment shortly.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-lg mb-3 text-blue-800">Before Your Visit</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Please arrive 15 minutes before your scheduled appointment.
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Bring any relevant medical records or test results.
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    If you need to cancel or reschedule, please give at least 24 hours notice.
                  </li>
                </ul>
              </div>
              
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName"
                      className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
                
                <div className="form-group mb-4">
                  <label htmlFor="serviceType" className="form-label">Service Type *</label>
                  <select 
                    id="serviceType"
                    name="serviceType"
                    className={`input-field ${errors.serviceType ? 'border-red-500' : ''}`}
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Consultation</option>
                    <option value="child-clinic">Young Child Clinic</option>
                    <option value="family-planning">Family Planning</option>
                    <option value="counselling">Guidance & Counselling</option>
                    <option value="hiv-testing">HIV Testing & Screening</option>
                    <option value="reproductive">Reproductive Health</option>
                    <option value="laboratory">Laboratory Services</option>
                    <option value="sickle-cell">Sickle Cell Services</option>
                  </select>
                  {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
                </div>
                
                <div className="form-group mb-4">
                  <label className="form-label">Preferred Date & Time *</label>
                  <div className={errors.date ? 'border border-red-500 rounded-md p-1' : ''}>
                    <DatePicker
                      selected={selectedDate}
                      onChange={date => setSelectedDate(date)}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      minDate={new Date()}
                      maxDate={addDays(new Date(), 30)}
                      filterDate={isWeekday}
                      filterTime={filterPassedTime}
                      placeholderText="Select date and time"
                      className="input-field"
                      includeTimes={getAvailableTimes()}
                      inline
                    />
                  </div>
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>
                
                <div className="form-group mb-4">
                  <label htmlFor="notes" className="form-label">Additional Notes</label>
                  <textarea 
                    id="notes"
                    name="notes"
                    rows={3}
                    className="input-field resize-none"
                    placeholder="Please share any specific concerns or questions you have..."
                    value={formData.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div className="form-group mb-6">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="isNewPatient"
                      name="isNewPatient"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={formData.isNewPatient}
                      onChange={handleChange}
                    />
                    <label htmlFor="isNewPatient" className="ml-2 block text-gray-700">
                      I am a new patient
                    </label>
                  </div>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Book Appointment
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to our appointment policy. We'll confirm your appointment via email or phone.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;