import React from 'react';
import { AppleIcon, GooglePlayIcon } from './icons/Icons';

const AppPromo: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-dark to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Phone Images */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=400&auto=format&fit=crop"
              alt="App screenshot"
              className="rounded-2xl shadow-2xl transform rotate-3 w-64 h-[400px] object-cover animate-float"
              style={{ animationDelay: '0s' }}
            />
            <img
              src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format&fit=crop"
              alt="App screenshot"
              className="rounded-2xl shadow-2xl transform -rotate-3 w-64 -ml-12 hidden sm:block h-[400px] object-cover animate-float"
              style={{ animationDelay: '0.5s' }}
            />
          </div>

          {/* Text Content */}
          <div
            className="lg:w-1/2 text-center lg:text-left animate-on-scroll"
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Your Adventure in Your Pocket
            </h2>

            <p className="text-lg text-white mb-8">
              Seamless booking, direct chat with operators, offline maps,
              and more. The AORBO TREKS app is your ultimate travel companion.
            </p>

            {/* Download Buttons */}
            <div className="flex justify-center lg:justify-start space-x-4">

              {/* App Store Button */}
              <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors transform hover:scale-105"
              >
                <AppleIcon className="h-8 w-8 mr-3" />
                <div className="text-white">
                  <p className="text-xs text-white">Download on the</p>
                  <p className="text-xl font-semibold text-white">App Store</p>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors transform hover:scale-105"
              >
                <GooglePlayIcon className="h-8 w-8 mr-3" />
                <div className="text-white">
                  <p className="text-xs text-white">GET IT ON</p>
                  <p className="text-xl font-semibold text-white">Google Play</p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppPromo;
