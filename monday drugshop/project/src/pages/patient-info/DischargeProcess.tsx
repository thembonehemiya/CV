import React from 'react';
import PageHeader from '../../components/PageHeader';
import { IMAGES } from '../../utils/constants';

const DischargeProcess: React.FC = () => {
  return (
    <div>
      <PageHeader title="Discharge Process" backgroundImage={IMAGES.PATIENT_INFO_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Guide to Being Discharged from Our Facility</h2>
            <p className="text-gray-600">
              Understanding the discharge process helps ensure a smooth transition from our care back to your home environment.
            </p>
          </div>
          
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-24 flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">1</div>
                <div className="flex-grow border-r-2 border-blue-200 mx-auto w-0 my-2"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Discharge Decision</h3>
                <p className="text-gray-700 mb-4">
                  Your healthcare provider will determine when you're ready for discharge based on your medical condition and progress. This decision is made with your health and safety as the primary considerations.
                </p>
                <p className="text-gray-700">
                  You'll be informed about the discharge plan in advance to allow time for any necessary arrangements.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-24 flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">2</div>
                <div className="flex-grow border-r-2 border-blue-200 mx-auto w-0 my-2"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Discharge Instructions</h3>
                <p className="text-gray-700 mb-4">
                  Before leaving, you'll receive detailed discharge instructions that include:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Information about your diagnosis and treatment
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Medication schedule and instructions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Activity restrictions or recommendations
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Follow-up appointment details
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Signs and symptoms that may indicate a need to seek medical attention
                  </li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2">Important:</h4>
                  <p className="text-gray-700">
                    Please review your discharge instructions carefully and ask questions if anything is unclear. Understanding your post-discharge care is crucial to your continued recovery.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-24 flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">3</div>
                <div className="flex-grow border-r-2 border-blue-200 mx-auto w-0 my-2"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Medication Management</h3>
                <p className="text-gray-700 mb-4">
                  If you're prescribed medications to take at home, our pharmacy will prepare them for you. A healthcare provider will explain:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    The purpose of each medication
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    How and when to take them
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Possible side effects to watch for
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Interactions with other medications or foods
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
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Follow-up Care</h3>
                <p className="text-gray-700 mb-4">
                  Before discharge, we'll schedule any necessary follow-up appointments with your healthcare provider or specialists.
                </p>
                <p className="text-gray-700">
                  The timing of follow-up appointments depends on your condition and treatment plan. We'll make sure you understand when and where to go for continued care.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-24 flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">5</div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Administrative Procedures</h3>
                <p className="text-gray-700 mb-4">
                  Before leaving, please stop by our administrative office to:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Complete any remaining paperwork
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Understand and settle your bill or payment plan
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Receive copies of relevant medical documents
                  </li>
                </ul>
                
                <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    If you have any concerns about returning home or need special assistance, please speak with your nurse or doctor before discharge. We can help arrange for additional support services if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg text-center">
            <h3 className="font-semibold text-xl mb-3 text-blue-800">After Your Discharge</h3>
            <p className="text-gray-700 mb-4">
              Our care doesn't end when you leave our facility. If you have questions or concerns after your discharge, please don't hesitate to contact us.
            </p>
            <a href="tel:+256705451656" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DischargeProcess;