// src/components/TravelYourWay.tsx
import React from "react";
import { MountainIcon, SunIcon, UmbrellaIcon, HeartIcon, TreePineIcon, TentIcon } from "lucide-react";

const styles = [
  { name: "Adventure Treks", icon: <MountainIcon className="w-6 h-6 text-orange-500" />, desc: "For thrill-seekers and explorers who crave a challenge." },
  { name: "Weekend Getaways", icon: <SunIcon className="w-6 h-6 text-yellow-500" />, desc: "Perfect short escapes to unwind and recharge." },
  { name: "Nature Escapes", icon: <TreePineIcon className="w-6 h-6 text-green-500" />, desc: "Reconnect with nature through calm and scenic trails." },
  { name: "Beach Trails", icon: <UmbrellaIcon className="w-6 h-6 text-blue-500" />, desc: "Walk along the coast, enjoy sunsets, and feel the sea breeze." },
  { name: "Spiritual Journeys", icon: <HeartIcon className="w-6 h-6 text-pink-500" />, desc: "Find peace and purpose through sacred trails." },
  { name: "Camping & Bonfire", icon: <TentIcon className="w-6 h-6 text-amber-600" />, desc: "Experience starlit nights and warm bonfires in the wild." },
];

const TravelYourWay: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF8F2]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-dark mb-3">
          Travel Your Way
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you seek adventure, peace, or a quick weekend escape, find the journey that fits your style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {styles.map((style, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-4">{style.icon}</div>
              <h3 className="font-bold text-lg text-brand-dark mb-2">{style.name}</h3>
              <p className="text-gray-500 text-sm">{style.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelYourWay;
