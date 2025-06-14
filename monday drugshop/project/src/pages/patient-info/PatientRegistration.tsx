import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../utils/constants';

const PatientRegistration: React.FC = () => {
  return (
    <div>
      <PageHeader title="Patient Registration" backgroundImage={IMAGES.PATIENT_INFO_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">New Patient Registration Process</h2>
            <p className="text-gray-600">
              We're delighted that you've chosen Dove Medical Services for your healthcare needs. 
              Below is information about our registration process to help you get started as a patient at our facility.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="section-subtitle">Registration Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-3 text-blue-800">In-Person Registration</h4>
                <p className="text-gray-700 mb-4">
                  You can register as a new patient by visiting our facility during our operating hours. Our friendly staff will assist you with completing the necessary forms.
                </p>
                <p className="font-medium">What to bring:</p>
                <ul className="space-y-1 mt-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Valid identification (ID card, passport, etc.)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Insurance information (if applicable)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    List of current medications
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Medical history information
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-3 text-blue-800">Online Pre-Registration</h4>
                <p className="text-gray-700 mb-4">
                  To save time during your first visit, you can pre-register online by downloading and completing our registration forms.
                </p>
                <p className="text-gray-700 mb-4">
                  Bring the completed forms with you to your first appointment. You'll still need to provide identification and verify your information when you arrive.
                </p>
                <Link to="/book-appointment" className="btn-primary inline-block">
                  Start Pre-Registration
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="section-subtitle">Registration Forms</h3>
            <p className="text-gray-700 mb-6">
              During registration, you'll need to complete several forms that collect important information for your healthcare:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 border border-gray-200 rounded-md">
                <h4 className="font-medium mb-2">Patient Information Form</h4>
                <p className="text-gray-600">Collects your basic demographic and contact information.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-md">
                <h4 className="font-medium mb-2">Medical History Questionnaire</h4>
                <p className="text-gray-600">Provides us with a comprehensive view of your past and current health status.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-md">
                <h4 className="font-medium mb-2">Consent for Treatment</h4>
                <p className="text-gray-600">Gives us permission to provide medical care.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-md">
                <h4 className="font-medium mb-2">Privacy Practices Acknowledgment</h4>
                <p className="text-gray-600">Confirms you understand how we protect and use your health information.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-md">
                <h4 className="font-medium mb-2">Financial Policy Agreement</h4>
                <p className="text-gray-600">Outlines our payment policies and your financial responsibilities.</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
              <h4 className="font-medium mb-2">Assistance Available</h4>
              <p className="text-gray-700">
                If you need help completing the registration forms or have questions about the required information, our staff is ready to assist you. Don't hesitate to ask for help.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="section-subtitle">After Registration</h3>
            <p className="text-gray-700 mb-4">
              Once you've completed the registration process:
            </p>
            
            <ol className="space-y-4 mb-6">
              <li className="flex">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">1</span>
                <div>
                  <p className="font-medium">Patient Record Creation</p>
                  <p className="text-gray-600">We'll create your electronic medical record in our system.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">2</span>
                <div>
                  <p className="font-medium">Patient Card Issuance</p>
                  <p className="text-gray-600">You'll receive a patient identification card to bring to all future visits.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">3</span>
                <div>
                  <p className="font-medium">Initial Consultation</p>
                  <p className="text-gray-600">You'll meet with a healthcare provider for your first appointment and assessment.</p>
                </div>
              </li>
            </ol>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-xl mb-3 text-blue-800">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">
                Begin your healthcare journey with Dove Medical Services today. We look forward to providing you with excellent care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/book-appointment" className="btn-primary">
                  Book Your First Appointment
                </Link>
                <a href="tel:+256705451656" className="btn-secondary">
                  Call for Registration Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientRegistration;