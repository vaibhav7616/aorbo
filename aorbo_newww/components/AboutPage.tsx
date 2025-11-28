import React, { useState } from 'react';
import PageHero from './PageHero';
import { ChevronDownIcon, DocumentTextIcon, FacebookIcon, InstagramIcon, ShieldCheckIcon, TwitterIcon, UserGroupIcon } from './icons/Icons';

const teamMembers = [
  { name: 'Rohan Mehta', role: 'Founder & CEO', image: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Aditi Rao', role: 'Head of Operations', image: 'https://i.pravatar.cc/150?img=12' },
  { name: 'Vikram Singh', role: 'Lead Tech Architect', image: 'https://i.pravatar.cc/150?img=14' },
  { name: 'Sunita Sharma', role: 'Community Manager', image: 'https://i.pravatar.cc/150?img=15' },
];

const faqItems = [
  { question: 'How do you verify your trek operators?', answer: 'Every operator on AORBO TREKS undergoes a rigorous verification process. We check for proper registration, safety certifications, guide qualifications, and reviews from past trekkers. We prioritize operators who follow sustainable and responsible tourism practices.' },
  { question: 'What is your cancellation policy?', answer: 'Cancellation policies vary by operator and are clearly stated on each trek booking page. We encourage flexible options and provide a platform for direct communication with the operator for any specific requests.' },
  { question: 'Is it safe to trek with your operators?', answer: 'Safety is our number one priority. We only partner with operators who have a proven track record of high safety standards, experienced guides, and emergency response protocols. Our in-app features also provide an additional layer of support.' },
  { question: 'How does AORBO TREKS support local communities?', answer: 'We believe in tourism that benefits everyone. We partner exclusively with local operators, ensuring that the revenue from treks directly supports the local economy. We also encourage and feature operators who employ local guides and staff.' },
];

const AccordionItem: React.FC<{ q: string; a: string; isOpen: boolean; onClick: () => void }> = ({ q, a, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left text-lg font-semibold text-brand-dark">
      <span>{q}</span>
      <ChevronDownIcon className="h-6 w-6 text-brand-primary flex-shrink-0" open={isOpen} />
    </button>
    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
            <p className="pt-2 text-gray-600">{a}</p>
        </div>
    </div>
  </div>
);


const AboutPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    return null
    return (
        <div>
            <PageHero 
                title="About AORBO TREKS"
                subtitle="Your trusted trek companion."
                imageUrl="assets/_/assets/conoor.png"
            />

            {/* Who We Are */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">Who We Are</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        AORBO TREKS aims to make adventure accessible, safe, and memorable. We collaborate with verified local operators, maintain transparent pricing, and are a team of passionate trekkers dedicated to ensuring you have the best trekking experience.
                    </p>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-20 bg-brand-light">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-on-scroll">
                        <img src="assets/_/assets/conoor.png" alt="Trekker looking at a map" className="rounded-xl shadow-2xl w-full" />
                    </div>
                    <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            To empower adventurers to explore with confidence by connecting them with the best local expertise. We aim to build a sustainable ecosystem where travelers can have authentic experiences, and local operators can thrive by showcasing the beauty of their region.
                        </p>
                    </div>
                </div>
            </section>

             {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="animate-on-scroll">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">Why Choose Us?</h2>
                         <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">We're more than a booking site. We're your partner in adventure.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: <ShieldCheckIcon className="h-12 w-12 text-brand-primary" />, title: 'Verified Operators & Pro Guides', desc: '100% of our local operators are verified. We ensure they have professional, certified guides to lead your adventure.' },
                            { icon: <DocumentTextIcon className="h-12 w-12 text-brand-primary" />, title: 'Safety & Transparent Pricing', desc: 'With a safety-first approach to all trek planning and completely transparent prices, you can book with confidence. No hidden fees, ever.' },
                            { icon: <UserGroupIcon className="h-12 w-12 text-brand-primary" />, title: 'Dedicated Support', desc: 'From real-time updates via our app to dedicated customer support, we are with you at every step of your journey.' }
                        ].map((feature, index) => (
                            <div key={index} className="flex flex-col items-center p-6 transition-transform duration-300 group animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="mb-4 bg-orange-100 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2 font-display">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Team Section */}
            <section className="py-20 bg-brand-light">
                 <div className="container mx-auto px-6 text-center">
                    <div className="animate-on-scroll">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">Our Team</h2>
                        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">The passionate explorers behind AORBO TREKS.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4 shadow-lg" />
                                <h3 className="font-bold text-brand-dark text-lg">{member.name}</h3>
                                <p className="text-brand-primary font-semibold">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-12 animate-on-scroll">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="animate-on-scroll">
                        {faqItems.map((item, index) => (
                            <AccordionItem 
                                key={index} 
                                q={item.question} 
                                a={item.answer} 
                                isOpen={openFaq === index} 
                                onClick={() => setOpenFaq(openFaq === index ? null : index)} 
                            />
                        ))}
                    </div>
                </div>
            </section>

             {/* Contact */}
            <section className="py-20 bg-brand-dark text-white">
                <div className="container mx-auto px-6 text-center animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Have a question or want to partner with us? We’d love to hear from you.</p>
                    <a href="mailto:hello@aorbotreks.com" className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 inline-block shadow-lg hover:shadow-xl">
                        hello@aorbotreks.com
                    </a>
                    <div className="flex justify-center space-x-6 mt-8">
                        <a href="#" className="hover:text-brand-primary transition-colors duration-300 transform hover:scale-110"><TwitterIcon className="h-7 w-7" /></a>
                        <a href="#" className="hover:text-brand-primary transition-colors duration-300 transform hover:scale-110"><InstagramIcon className="h-7 w-7" /></a>
                        <a href="#" className="hover:text-brand-primary transition-colors duration-300 transform hover:scale-110"><FacebookIcon className="h-7 w-7" /></a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;