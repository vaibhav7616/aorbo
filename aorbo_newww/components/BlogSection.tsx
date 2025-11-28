import React from 'react';

const posts = [
  {
    title: "Hot Mess? Try Hot Chai on a Cold Cliff",
    description: "A story of messy minds, misty mornings, and mugs that mend.",
    image: "https://images.unsplash.com/photo-1601823281972-7e21c6a2976d?q=80&w=800&auto=format&fit=crop",
    authorImage: "https://picsum.photos/100/100?random=30",
    date: "August 20, 2025"
  },
  {
    title: "Maps Don't Know This Feeling",
    description: "Some journeys can’t be pinned on a map – they’re felt, not found. This is about the magic...",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop",
    authorImage: "https://picsum.photos/100/100?random=31",
    date: "August 02, 2025"
  },
  {
    title: "Beyond the Selfie Point",
    description: "Beyond the selfie spot lies the real hike — messy, quiet, and deeply human.",
    image: "https://images.unsplash.com/photo-1458442310124-dde6edb43d10?q=80&w=800&auto=format&fit=crop",
    authorImage: "https://picsum.photos/100/100?random=32",
    date: "August 02, 2025"
  },
  {
    title: "My Heart Took a Hike — and it hasn't come back since.",
    description: "Trekking isn’t about escaping the world—it’s about finding the part of yourself that was waitin...",
    image: "https://images.unsplash.com/photo-1520175480921-4edfa69363e7?q=80&w=800&auto=format&fit=crop",
    authorImage: "https://picsum.photos/100/100?random=33",
    date: "August 02, 2025"
  },
];


const BlogSection: React.FC = () => {
    return (
      <section id="blog" className="py-20 bg-brand-light">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display text-center mb-12 animate-on-scroll">Inspiration For Your Next Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-4">
                        <img src={post.authorImage} alt="Author" className="h-10 w-10 rounded-full mr-3" />
                        <div className="text-sm">
                            <p className="font-semibold text-brand-dark">AORBO Team</p>
                            <p className="text-gray-500">{post.date}</p>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold font-display text-brand-dark mb-2 leading-tight flex-grow">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogSection;