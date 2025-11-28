
import React from 'react';
import { ShieldCheckIcon, GlobeAltIcon, UserGroupIcon } from './icons/Icons';

const features = [
  {
    icon: <ShieldCheckIcon className="h-10 w-10" />,
    title: 'Verified Local Operators',
    description: 'Every trek is led by trusted, certified local experts who ensure your safety and provide an authentic experience.'
  },
  {
    icon: <GlobeAltIcon className="h-10 w-10" />,
    title: 'Unmatched Trek Variety',
    description: 'From serene weekend getaways to challenging Himalayan expeditions, find the perfect trail for your adventure style.'
  },
  {
    icon: <UserGroupIcon className="h-10 w-10" />,
    title: 'Community & Support',
    description: 'Join a community of passionate adventurers with 24/7 support from a team that lives and breathes the outdoors.'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">Why Trek With AORBO?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We're more than a platform; we are your trusted partner in adventure, committed to making every journey safe, seamless, and unforgettable.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <div 
                    key={index} 
                    className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center animate-on-scroll transform transition-transform duration-300 hover:-translate-y-2"
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    <div className="flex-shrink-0 bg-orange-100 text-brand-primary rounded-full p-5 mb-5">
                        {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark font-display mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
