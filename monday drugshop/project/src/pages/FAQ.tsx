import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { IMAGES, FAQS } from '../utils/constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div>
      <PageHeader title="Frequently Asked Questions" backgroundImage={IMAGES.FAQ_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Common Questions</h2>
            <p className="text-gray-600">
              Find answers to the most common questions about our services, appointments, and policies.
            </p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-blue-50 transition-colors duration-300"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-600" size={20} />
                  ) : (
                    <ChevronDown className="text-blue-600" size={20} />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 bg-blue-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Still Have Questions?</h3>
            <p className="text-gray-700 mb-4">
              If you couldn't find the answer to your question, please don't hesitate to contact us directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+256705451656" className="btn-secondary">
                Call Us
              </a>
              <a href="/contact" className="btn-primary">
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;