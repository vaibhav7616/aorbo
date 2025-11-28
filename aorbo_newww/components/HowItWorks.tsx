import React from 'react';
import { SearchIcon, DownloadIcon, CheckCircleIcon, UploadIcon, DocumentTextIcon, ChartBarIcon } from './icons/Icons';

const trekkerSteps = [
  { icon: <SearchIcon className="h-8 w-8" />, title: 'Discover', description: 'Explore thousands of treks from hundreds of trusted operators.' },
  { icon: <DownloadIcon className="h-8 w-8" />, title: 'Download the App', description: 'Get our feature-rich app for seamless booking and communication.' },
  { icon: <CheckCircleIcon className="h-8 w-8" />, title: 'Book Securely', description: 'Book your dream trek with confidence and ease, all within the app.' },
];

const operatorSteps = [
  { icon: <UploadIcon className="h-8 w-8" />, title: 'Sign Up', description: 'Create your operator profile in minutes and get verified by our team.' },
  { icon: <DocumentTextIcon className="h-8 w-8" />, title: 'List Your Treks', description: 'Easily upload your trekking packages with our intuitive portal.' },
  { icon: <ChartBarIcon className="h-8 w-8" />, title: 'Get Bookings', description: 'Reach a global audience of passionate trekkers and grow your business.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display text-center mb-12 animate-on-scroll">How It Works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Trekkers */}
          <div className="bg-brand-light p-8 rounded-xl shadow-lg animate-on-scroll">
            <h3 className="text-2xl font-bold text-brand-dark font-display mb-6 text-center">For Trekkers</h3>
            <div className="relative space-y-8">
              {trekkerSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 relative">
                  {index < trekkerSteps.length - 1 && (
                    <div className="absolute left-6 top-14 h-full w-px bg-orange-300 border-l-2 border-dashed border-orange-400"></div>
                  )}
                  <div className="flex-shrink-0 bg-brand-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl z-10">{index + 1}</div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-dark">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* For Operators */}
          <div className="bg-brand-light p-8 rounded-xl shadow-lg animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-2xl font-bold text-brand-dark font-display mb-6 text-center">For Operators</h3>
            <div className="relative space-y-8">
              {operatorSteps.map((step, index) => (
                 <div key={index} className="flex items-start space-x-4 relative">
                    {index < operatorSteps.length - 1 && (
                      <div className="absolute left-6 top-14 h-full w-px bg-gray-300 border-l-2 border-dashed border-gray-400"></div>
                    )}
                    <div className="flex-shrink-0 bg-brand-dark text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl z-10">{index + 1}</div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-dark">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;