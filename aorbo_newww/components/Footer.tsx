import React, { useState } from 'react';
import Logo from './Logo';
import { TwitterIcon, InstagramIcon, FacebookIcon } from './icons/Icons';
import type { Page } from '../App';
import ContactPopup from './ContactPopup';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const FooterLink: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({
  onClick,
  children,
}) => (
  <li>
    <button
      onClick={onClick}
      className="hover:text-brand-primary transition-colors duration-300"
    >
      {children}
    </button>
  </li>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand Info */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className="mb-6">
              <Logo onClick={() => onNavigate('home')} />
            </div>

            <p className="text-gray-400 mb-8 max-w-md">
              The ultimate platform for discovering and booking unique treks with trusted
              local operators. Your next adventure is just a click away.
            </p>
          </div>

          {/* Spacer */}
          <div className="md:col-span-1 lg:col-span-2"></div>

          {/* Explore Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="font-bold text-white text-lg mb-4">Explore</h4>
            <ul className="space-y-3">
              {/* <FooterLink onClick={() => onNavigate('explore')}>All Treks</FooterLink>
              <FooterLink onClick={() => onNavigate('styles')}>Trip Styles</FooterLink> */}
              {/* Inspiration Removed */}
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="font-bold text-white text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {/* <FooterLink onClick={() => onNavigate('about')}>About Us</FooterLink> */}

              <li>
                <a className="hover:text-brand-primary transition-colors duration-300">
                  For Operators
                </a>
              </li>

              <li>
                <a className="hover:text-brand-primary transition-colors duration-300">
                  Blog
                </a>
              </li>

              <li
                className="hover:text-brand-primary transition-colors duration-300 cursor-pointer"
                onClick={() => setShowContact(true)}
              >
                Contact
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AORBO TREKS. All Rights Reserved.
          </p>

          <div className="flex space-x-5 mt-4 sm:mt-0">
            <a className="text-gray-400 hover:text-white transition-colors duration-300">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-400 hover:text-white transition-colors duration-300">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-400 hover:text-white transition-colors duration-300">
              <FacebookIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

      </div>

      {/* Contact Popup */}
      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </footer>
  );
};

export default Footer;
