import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would normally submit to a backend
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-blue-50 py-12">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 max-w-lg mx-auto">Stay updated with the latest health tips, services, and special offers from Dove Medical Services.</p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-grow">
                <input
                  type="email"
                  className="input-field"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              <button
                type="submit"
                className="btn-primary flex items-center justify-center whitespace-nowrap"
              >
                Subscribe <Send size={16} className="ml-2" />
              </button>
            </div>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-md text-center animate-fadeIn">
              Thank you for subscribing to our newsletter!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;