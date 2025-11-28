import React from 'react';
import PageHero from './PageHero';
import Testimonials from './Testimonials';

const articles = [
  {
    title: "Top 10 Monsoon Treks in India",
    summary: "Discover the magic of the Indian monsoon with these breathtakingly lush and vibrant trails.",
    image: "assets/_/assets/manali.png"
  },
  {
    title: "Best Winter Treks for Beginners",
    summary: "Your guide to starting your snow trekking journey with accessible yet stunning Himalayan trails.",
    image: "assets/_/assets/manali.png"
  },
  {
    title: "Waterfall Treks You Must Try",
    summary: "Chase the thunderous beauty of cascading water with these unforgettable waterfall treks.",
    image: "assets/_/assets/manali.png"
  },
  {
    title: "Himalayan Treks for First Timers",
    summary: "Ready for the high mountains? These treks are the perfect introduction to the majestic Himalayas.",
    image: "assets/_/assets/manali.png"
  }
];

const destinations = [
  { name: "Himachal", image: "assets/_/assets/manali.png" },
  { name: "Kerala", image: "assets/_/assets/manali.png" },
  { name: "Goa", image: "assets/_/assets/manali.png"},
  { name: "Uttarakhand", image: "assets/_/assets/manali.png" }
];

const InspirationPage: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="Find Your Next Adventure"
        subtitle="Stories, guides, and ideas to spark your inner explorer. The world is waiting."
        imageUrl="assets/_/assets/manali.png"
      />
      
      {/* Articles Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">
              Guides & Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert advice and captivating tales from the trail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-display text-brand-dark mb-2 leading-tight flex-grow">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.summary}</p>

                  {/* Removed Read More */}
                  <div className="mt-auto h-5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">
              Featured Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the diverse landscapes of India, one state at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, index) => (
              <div 
                key={index} 
                className="relative h-96 rounded-xl overflow-hidden shadow-lg group animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative h-full flex items-end justify-start p-6">
                  <h3 className="text-3xl font-bold text-white font-display shadow-text">
                    {dest.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default InspirationPage;
