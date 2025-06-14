import React from 'react';
import PageHeader from '../../components/PageHeader';
import { IMAGES } from '../../utils/constants';

const BillingProcess: React.FC = () => {
  return (
    <div>
      <PageHeader title="Billing Process" backgroundImage={IMAGES.PATIENT_INFO_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Understanding Our Billing Process</h2>
            <p className="text-gray-600">
              We strive to make our billing process as transparent and straightforward as possible. This guide will help you understand how our billing works and what to expect.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="section-subtitle">Payment Methods</h3>
            <p className="text-gray-700 mb-4">
              At Dove Medical Services, we offer several payment options for your convenience:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-md text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-3 text-blue-600" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                <h4 className="font-medium">Cash Payments</h4>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-3 text-blue-600" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                <h4 className="font-medium">Debit/Credit Cards</h4>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-3 text-blue-600" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                </svg>
                <h4 className="font-medium">Mobile Money</h4>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400 mb-8">
              <h4 className="font-medium mb-2">Important Note:</h4>
              <p className="text-gray-700">
                Payment is typically expected at the time of service for outpatient visits. For inpatient care, we offer payment plans and will discuss financial arrangements during the admission process.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="section-subtitle">Insurance Information</h3>
            <p className="text-gray-700 mb-4">
              We work with several insurance providers to help you get the coverage you need. If you have health insurance, please bring your insurance card to your appointment.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Insurance Process</h4>
              <ol className="space-y-3">
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-medium">Verification</p>
                    <p className="text-gray-600">We'll verify your insurance coverage and benefits before your visit.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-medium">Pre-authorization</p>
                    <p className="text-gray-600">Some procedures may require pre-authorization from your insurance company.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-medium">Claim Submission</p>
                    <p className="text-gray-600">We'll submit claims to your insurance company on your behalf.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="font-medium">Patient Responsibility</p>
                    <p className="text-gray-600">You'll be responsible for any deductibles, co-payments, or non-covered services as determined by your insurance plan.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="section-subtitle">Understanding Your Bill</h3>
            <p className="text-gray-700 mb-4">
              Your bill may include charges for various services provided during your visit:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-gray-200 rounded-md">
                <h4 className="font-medium mb-2">For Outpatient Visits</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Consultation fees
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Diagnostic tests
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Procedures performed
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Medications dispensed
                  </li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-md">
                <h4 className="font-medium mb-2">For Inpatient Care</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Room and board
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Nursing care
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Medications administered
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Laboratory and diagnostic services
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Medical supplies
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="section-subtitle">Financial Assistance</h3>
            <p className="text-gray-700 mb-4">
              We understand that medical expenses can be challenging. Dove Medical Services is committed to providing care to all patients, regardless of their ability to pay.
            </p>
            <p className="text-gray-700 mb-6">
              If you're experiencing financial hardship, please speak with our financial counselor to learn about:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-medium mb-2 text-blue-800">Payment Plans</h4>
                <p className="text-gray-600">
                  We offer flexible payment plans that allow you to pay your medical bills over time.
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-medium mb-2 text-blue-800">Sliding Fee Scale</h4>
                <p className="text-gray-600">
                  Based on your income and family size, you may qualify for reduced fees.
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-md border-l-4 border-yellow-400">
              <h4 className="font-semibold mb-2">Have Questions About Your Bill?</h4>
              <p className="text-gray-700 mb-4">
                Our billing department is available to answer any questions you may have about your bill or payment options.
              </p>
              <p className="font-medium">
                Contact our billing office:
                <br />
                <a href="tel:+256705451656" className="text-blue-600 hover:text-blue-800">{IMAGES.CONTACT_INFO}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillingProcess;