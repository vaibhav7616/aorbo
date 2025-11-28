

import React from 'react';
import { QuoteIcon } from './icons/Icons';

const testimonials = [
  {
    quote: "Booking with AORBO was the best decision. The local operator was fantastic, and the entire trek was seamless. I felt safe, supported, and truly immersed in the Himalayas.",
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "The app is a game-changer. Offline maps, direct chat with our guide... it had everything. The trek to Dudhsagar was breathtaking, and AORBO made it effortless.",
    name: "Aarav Singh",
    location: "Delhi, India",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    quote: "As a solo female traveler, safety is my priority. The vetting process for operators gave me peace of mind. My Coorg trek was magical. Highly recommend!",
    name: "Ananya Reddy",
    location: "Bangalore, India",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">Stories from the Trail</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Hear from fellow adventurers who found their path with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-left flex flex-col justify-between animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <QuoteIcon className="h-8 w-8 text-brand-primary mb-4" />
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-brand-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
