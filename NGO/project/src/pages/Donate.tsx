import React, { useState } from 'react';
import { Heart, TreePine, Users, Target, Flower, Check, Gift, Star, Globe } from 'lucide-react';

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationPurpose, setDonationPurpose] = useState('general');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    anonymous: false
  });

  const presetAmounts = [
    { amount: 25, impact: 'Plants 5 native trees' },
    { amount: 50, impact: 'Supports one beehive for a month' },
    { amount: 100, impact: 'Trains one young mother in vocational skills' },
    { amount: 250, impact: 'Funds a complete nursery setup' },
    { amount: 500, impact: 'Supports apiary program for 3 months' },
    { amount: 1000, impact: 'Sponsors full environmental education program' }
  ];

  const donationPurposes = [
    {
      id: 'reforestation',
      title: 'Reforestation Program',
      icon: TreePine,
      description: 'Fund tree nurseries, seedling distribution, and riverbank restoration',
      raised: 15750,
      goal: 25000,
      color: 'forest'
    },
    {
      id: 'womens-training',
      title: 'Women\'s Skills Training',
      icon: Users,
      description: 'Empower young mothers with vocational skills for self-employment',
      raised: 8900,
      goal: 15000,
      color: 'earth'
    },
    {
      id: 'apiary',
      title: 'Community Apiary',
      icon: Flower,
      description: 'Expand beekeeping programs and enhance biodiversity',
      raised: 12300,
      goal: 20000,
      color: 'primary'
    },
    {
      id: 'general',
      title: 'General Conservation Fund',
      icon: Target,
      description: 'Support all RMCI programs and urgent conservation needs',
      raised: 31200,
      goal: 50000,
      color: 'forest'
    }
  ];

  const recognitionLevels = [
    {
      name: 'Seedling Supporter',
      min: 25,
      max: 99,
      benefits: ['Thank you email', 'Quarterly updates'],
      icon: '🌱'
    },
    {
      name: 'Tree Guardian',
      min: 100,
      max: 499,
      benefits: ['All previous benefits', 'Annual impact report', 'Recognition on website'],
      icon: '🌳'
    },
    {
      name: 'Forest Champion',
      min: 500,
      max: 999,
      benefits: ['All previous benefits', 'Personalized thank you', 'Project photos'],
      icon: '🏞️'
    },
    {
      name: 'Conservation Hero',
      min: 1000,
      max: null,
      benefits: ['All previous benefits', 'Site visit invitation', 'Personal project updates'],
      icon: '🏆'
    }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  const getRecognitionLevel = (amount: number) => {
    return recognitionLevels.find(level => 
      amount >= level.min && (level.max === null || amount <= level.max)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    alert('Thank you for your generous donation! You will receive a confirmation email shortly.');
  };

  const selectedPurpose = donationPurposes.find(p => p.id === donationPurpose);
  const currentAmount = getCurrentAmount();
  const recognitionLevel = getRecognitionLevel(currentAmount);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-forest-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your donation directly supports conservation efforts and community empowerment in the Rwenzori Mountains. Every contribution makes a tangible difference in preserving this unique ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Purposes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select a specific program to support or contribute to our general conservation fund
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationPurposes.map((purpose) => {
              const Icon = purpose.icon;
              const progressPercent = (purpose.raised / purpose.goal) * 100;
              const isSelected = donationPurpose === purpose.id;
              
              return (
                <div
                  key={purpose.id}
                  onClick={() => setDonationPurpose(purpose.id)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                    isSelected
                      ? `border-${purpose.color}-600 bg-${purpose.color}-50`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 bg-${purpose.color}-100 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 text-${purpose.color}-600`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{purpose.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{purpose.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Raised</span>
                      <span className="font-medium">${purpose.raised.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-${purpose.color}-600 h-2 rounded-full`}
                        style={{ width: `${Math.min(progressPercent, 100)}%` }}
                      />
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      Goal: ${purpose.goal.toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Amount Selection */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Donation Amount</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {presetAmounts.map(({ amount, impact }) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        selectedAmount === amount
                          ? 'border-forest-600 bg-forest-50'
                          : 'border-gray-200 hover:border-forest-300'
                      }`}
                    >
                      <div className="text-xl font-bold text-gray-900">${amount}</div>
                      <div className="text-sm text-gray-600">{impact}</div>
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="1"
                      placeholder="0"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                    />
                  </div>
                </div>

                {/* Recognition Level */}
                {currentAmount > 0 && recognitionLevel && (
                  <div className="bg-gradient-to-br from-forest-50 to-forest-100 p-4 rounded-xl mb-6">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{recognitionLevel.icon}</span>
                      <h4 className="font-bold text-gray-900">{recognitionLevel.name}</h4>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {recognitionLevel.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-forest-600 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Donor Information & Payment */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="anonymous"
                      className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-gray-300 rounded"
                      checked={donorInfo.anonymous}
                      onChange={(e) => setDonorInfo({...donorInfo, anonymous: e.target.checked})}
                    />
                    <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                      Make this donation anonymous
                    </label>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-4">Payment Method</h4>
                <div className="space-y-3 mb-6">
                  {[
                    { id: 'paypal', name: 'PayPal', icon: Globe },
                    { id: 'mobile-money', name: 'Mobile Money (MTN/Airtel)', icon: Heart },
                    { id: 'bank-transfer', name: 'Bank Transfer', icon: Target }
                  ].map(({ id, name, icon: Icon }) => (
                    <label key={id} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value={id}
                        required
                        className="h-4 w-4 text-forest-600 focus:ring-forest-500"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <Icon className="h-5 w-5 text-gray-500 mx-3" />
                      <span className="text-gray-900">{name}</span>
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={currentAmount === 0 || !paymentMethod}
                  className="w-full bg-forest-600 text-white py-4 px-6 rounded-lg hover:bg-forest-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium text-lg"
                >
                  Donate ${getCurrentAmount().toFixed(2)}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Donation Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how your contribution creates lasting change in the Rwenzori Mountains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TreePine className="h-10 w-10 text-forest-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Restoration</h3>
              <p className="text-gray-600 leading-relaxed">
                Every $5 plants a native tree, helping restore riverbank ecosystems and combat climate change in the Rwenzori region.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-earth-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">
                Your support enables young mothers to learn vocational skills, creating sustainable income and breaking cycles of poverty.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flower className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Biodiversity Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Community apiaries funded by donations enhance biodiversity while providing honey income for local families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Other Ways to Support</h2>
          <p className="text-xl mb-8 text-forest-100 leading-relaxed">
            Can't donate right now? There are other meaningful ways to support our conservation mission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-forest-800 p-6 rounded-xl">
              <Users className="h-8 w-8 text-forest-300 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Volunteer</h4>
              <p className="text-forest-100 text-sm mb-4">Join our conservation efforts on the ground</p>
              <a href="/get-involved" className="text-forest-300 hover:text-white font-medium">Learn More</a>
            </div>
            
            <div className="bg-forest-800 p-6 rounded-xl">
              <Globe className="h-8 w-8 text-forest-300 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Spread Awareness</h4>
              <p className="text-forest-100 text-sm mb-4">Share our mission on social media</p>
              <a href="#" className="text-forest-300 hover:text-white font-medium">Share Now</a>
            </div>
            
            <div className="bg-forest-800 p-6 rounded-xl">
              <Gift className="h-8 w-8 text-forest-300 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Corporate Partnership</h4>
              <p className="text-forest-100 text-sm mb-4">Partner with us for greater impact</p>
              <a href="/get-involved" className="text-forest-300 hover:text-white font-medium">Partner With Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;