import React from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    imageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, imageUrl }) => {
    return (
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white text-center">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
            <div className="relative z-10 px-6">
                <h1 className="text-4xl md:text-5xl font-bold font-display shadow-text opacity-0 animate-fadeInUp" style={{ animationDelay: '0s' }}>
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90 shadow-text opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
