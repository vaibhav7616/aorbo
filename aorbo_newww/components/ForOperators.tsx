import React from 'react';

const ForOperators: React.FC = () => {
  return (
    <section id="operators" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">Grow Your Trekking Business</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Join our curated marketplace to connect with a global community of adventurers and simplify your bookings.</p>
        <a href="#" className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 inline-block shadow-lg hover:shadow-xl">
          List Your Trips
        </a>
      </div>
    </section>
  );
};

export default ForOperators;