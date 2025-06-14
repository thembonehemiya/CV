import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../utils/constants';

const PreCounselling: React.FC = () => {
  return (
    <div>
      <PageHeader title="Pre-Counselling Services" backgroundImage={IMAGES.PATIENT_INFO_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Pre-Counselling Approach</h2>
            <p className="text-gray-600">
              At Dove Medical Services, we believe that comprehensive healthcare includes mental and emotional support. 
              Our pre-counselling services help prepare you for treatments, procedures, or lifestyle changes related to your health.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="section-subtitle">What is Pre-Counselling?</h3>
            <p className="text-gray-700 mb-4">
              Pre-counselling is a supportive process that takes place before medical procedures, diagnoses, or treatments. It helps patients understand what to expect and develop coping strategies for managing health challenges.
            </p>
            <p className="text-gray-700 mb-4">
              Our counselors provide a safe, confidential space where you can discuss concerns, ask questions, and receive emotional support and practical guidance.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="font-semibold mb-3 text-blue-800">Benefits of Pre-Counselling:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Reduced anxiety and fear
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Better understanding of treatment
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Improved coping strategies
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Enhanced treatment compliance
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Emotional preparation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Improved recovery outcomes
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="section-subtitle">Types of Pre-Counselling Services</h3>
            <p className="text-gray-700 mb-6">
              We offer specialized pre-counselling for various medical situations:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <h4 className="font-semibold text-lg mb-3 text-blue-800">HIV/AIDS Counselling</h4>
                <p className="text-gray-700 mb-3">
                  Confidential support before and after HIV testing, including education about the virus, transmission, prevention, and management options.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Risk assessment and prevention strategies
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Emotional support for testing anxiety
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Information about treatment and living positively
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <h4 className="font-semibold text-lg mb-3 text-blue-800">Family Planning Counselling</h4>
                <p className="text-gray-700 mb-3">
                  Information and guidance about contraceptive options, fertility awareness, and reproductive health decisions.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Discussion of available contraceptive methods
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Education about effectiveness and side effects
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Support for making informed choices
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <h4 className="font-semibold text-lg mb-3 text-blue-800">Chronic Disease Management Counselling</h4>
                <p className="text-gray-700 mb-3">
                  Support for patients diagnosed with chronic conditions like diabetes, hypertension, or asthma.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Understanding your condition
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Medication adherence strategies
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Lifestyle adjustments and self-management
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <h4 className="font-semibold text-lg mb-3 text-blue-800">Sickle Cell Disease Counselling</h4>
                <p className="text-gray-700 mb-3">
                  Support for patients and families affected by sickle cell disease, including education, management strategies, and emotional support.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Understanding genetic implications
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Pain management techniques
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Crisis prevention strategies
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="section-subtitle">What to Expect During Pre-Counselling</h3>
            <p className="text-gray-700 mb-6">
              Our pre-counselling sessions are designed to be informative, supportive, and tailored to your specific needs:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Initial Assessment</h4>
                  <p className="text-gray-700">
                    Your counselor will gather information about your medical history, current concerns, and emotional state to tailor the counseling approach to your needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-gray-700">
                    You'll receive clear information about your condition, treatment options, and what to expect during procedures or therapies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Addressing Concerns</h4>
                  <p className="text-gray-700">
                    You'll have the opportunity to ask questions and express any worries or fears you might have.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.73 18.35 20 16.76a4 4 0 0 0-5.28 0l-1.72 1.59a4 4 0 0 1-5.28 0l-1.73-1.6a4 4 0 0 0-5.28 0"></path>
                    <path d="m2 2 20 20"></path>
                    <path d="M7.5 15.5A4 4 0 0 0 11 14l1-1 1 1a4 4 0 0 0 3.5 1.5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Coping Strategies</h4>
                  <p className="text-gray-700">
                    Your counselor will help you develop practical strategies for managing stress, anxiety, and other emotions related to your healthcare journey.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Follow-up Planning</h4>
                  <p className="text-gray-700">
                    The session will include discussion of next steps, additional support resources, and arrangements for any follow-up counseling that may be needed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-xl mb-3 text-blue-800">Schedule a Pre-Counselling Session</h3>
              <p className="text-gray-700 mb-6">
                If you're preparing for a medical procedure, have been newly diagnosed with a condition, or need support making healthcare decisions, our counselors are here to help.
              </p>
              <Link to="/book-appointment" className="btn-primary">
                Book a Counselling Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreCounselling;