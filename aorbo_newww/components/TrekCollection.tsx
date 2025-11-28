import React from 'react';
import TrekCard from './TrekCard';
import type { Trek } from '../data/treks';
import { ArrowRightIcon } from './icons/Icons';

interface TrekCollectionProps {
    title: string;
    subtitle: string;
    treks: Trek[];
    onTrekClick: (trekName: string, imageUrl: string) => void;
    viewAllLink?: () => void;
}

const TrekCollection: React.FC<TrekCollectionProps> = ({ title, subtitle, treks, onTrekClick, viewAllLink }) => {
    if (treks.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">{title}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {treks.map((trek, index) => (
                        <div 
                            key={trek.id} 
                            className="h-[480px] animate-on-scroll"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                             <TrekCard 
                                trek={trek}
                                onClick={() => onTrekClick(trek.name, trek.imageUrl)}
                            />
                        </div>
                    ))}
                </div>
                {viewAllLink && (
                     <div className="mt-12 text-center animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                        <button 
                            onClick={viewAllLink}
                            className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            Explore More
                            <ArrowRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TrekCollection;
