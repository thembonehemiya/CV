import React from 'react';
import PageHeader from '../../components/PageHeader';
import { IMAGES } from '../../utils/constants';

const AdmissionProcess: React.FC = () => {
  return (
    <div>
      <PageHeader title="Admission Process" backgroundImage={IMAGES.PATIENT_INFO_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Understanding Our Admission Process</h2>
            <p className="text-gray-600">
              At Dove Medical Services, we've designed our admission process to be as smooth and stress-free as possible. 
              Below you'll find a step-by-step guide to what you can expect when being admitted for inpatient care.
            </p>
          </div>
          
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-24 flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">1</div>
                <div className="flex-grow border-r-2 border-blue-200 mx-auto w-0 my-2"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Physician Referral or Emergency Admission</h3>
                <p className="text-gray-700 mb-4">
                  Admission typically begins with a referral from your primary care physician or specialist, or through our emergency department if you require immediate care.
                </p>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2">What to bring:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Identification documents
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Referral letter (if applicable)
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
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-24 flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">2</div>
                <div className="flex-grow border-r-2 border-blue-200 mx-auto w-0 my-2"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Registration and Paperwork</h3>
                <p className="text-gray-700 mb-4">
                  Upon arrival, you'll complete registration forms that include your personal information, medical history, and consent for treatment.
                </p>
                <p className="text-gray-700">
                  Our administrative staff will assist you with the paperwork and answer any questions you might have about costs, insurance coverage, or payment options.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-24 flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">3</div>
                <div className="flex-grow border-r-2 border-blue-200 mx-auto w-0 my-2"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Medical Assessment</h3>
                <p className="text-gray-700 mb-4">
                  A healthcare provider will conduct an initial assessment of your condition, which may include:
                </p>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Vital signs check (temperature, blood pressure, pulse, respiratory rate)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Review of your medical history
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Physical examination
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Initial diagnostic tests as needed
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-24 flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">4</div>
                <div className="flex-grow border-r-2 border-blue-200 mx-auto w-0 my-2"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Room Assignment and Orientation</h3>
                <p className="text-gray-700 mb-4">
                  Once the initial assessment is complete, you'll be assigned to an appropriate room based on your care needs and room availability.
                </p>
                <p className="text-gray-700">
                  A nurse will orient you to your room, explain how to use the call button, meal schedules, visiting hours, and other important information about your stay.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-24 flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">5</div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Care Plan Development</h3>
                <p className="text-gray-700 mb-4">
                  Your healthcare team will develop a personalized care plan based on your condition and needs.
                </p>
                <p className="text-gray-700 mb-4">
                  This plan will be discussed with you and may include medications, treatments, procedures, and expected outcomes.
                </p>
                <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                  <h4 className="font-medium mb-2 text-yellow-800">Important Note:</h4>
                  <p className="text-gray-700">
                    Please inform your healthcare providers of any allergies, current medications, or specific health concerns you have to ensure you receive the safest and most effective care.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-xl mb-4 text-blue-800">Need Assistance?</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about the admission process or need help preparing for your stay, please don't hesitate to contact us.
            </p>
            <a href="tel:+256705451656" className="btn-primary">
              Call for Assistance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcess;