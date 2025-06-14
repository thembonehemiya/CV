import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { FileText, ClipboardList, CreditCard, UserPlus, BookOpen } from 'lucide-react';
import { IMAGES } from '../utils/constants';

const PatientInfo: React.FC = () => {
  const infoCards = [
    {
      title: "Admission Process",
      icon: <FileText className="text-blue-600" size={24} />,
      description: "Learn about our step-by-step admission process for inpatient care.",
      link: "/patient-info/admission-process"
    },
    {
      title: "Discharge Process",
      icon: <ClipboardList className="text-blue-600\" size={24} />,
      description: "Information about completing your treatment and returning home.",
      link: "/patient-info/discharge-process"
    },
    {
      title: "Billing Process",
      icon: <CreditCard className="text-blue-600" size={24} />,
      description: "Details about our payment options, insurance, and financial assistance.",
      link: "/patient-info/billing-process"
    },
    {
      title: "Patient Registration",
      icon: <UserPlus className="text-blue-600\" size={24} />,
      description: "How to register as a new patient at our medical facility.",
      link: "/patient-info/patient-registration"
    },
    {
      title: "Pre-Counselling",
      icon: <BookOpen className="text-blue-600" size={24} />,
      description: "Information about our pre-treatment counseling services.",
      link: "/patient-info/pre-counselling"
    }
  ];

  return (
    <div>
      <PageHeader title="Patient Information" backgroundImage={IMAGES.PATIENT_INFO_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Important Information for Patients</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We strive to make your experience at Dove Medical Services as smooth as possible. 
              This page contains all the information you need as a patient at our facility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoCards.map((card, index) => (
              <Link 
                to={card.link} 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </span>
              </Link>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Patient Rights and Responsibilities</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-700">Your Rights as a Patient</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Receive considerate and respectful care
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Be informed about your diagnosis and treatment
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Participate in decisions about your care
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Privacy and confidentiality of your health information
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Access your medical records
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-700">Your Responsibilities as a Patient</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Provide accurate and complete information
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Follow the treatment plan recommended by your healthcare provider
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Be respectful of healthcare staff and other patients
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Provide timely payment for services
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Inform us if you cannot keep an appointment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientInfo;