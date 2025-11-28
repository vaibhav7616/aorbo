import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { treks } from "../data/treks";
import type { Trek } from "../data/treks";


interface FeaturedDestinationsProps {
  onTrekClick: (term: string) => void;
  initialCount: number;
}

const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({
  onTrekClick,
  initialCount,
}) => {
  const navigate = useNavigate();

  const handleViewTrek = (trek: Trek) => {
    navigate(`/trek/${trek.id}`, { state: { trek } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {treks.slice(0, initialCount).map((trek) => (
        <div
          key={trek.id}
          className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition"
        >
          <img
            src={trek.imageUrl}
            alt={trek.name}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h2 className="text-lg font-semibold mb-1">{trek.name}</h2>
          <p className="text-gray-600 text-sm mb-2">{trek.short_desc.slice(0, 90)}...</p>
          <button
            onClick={() => handleViewTrek(trek)}
            className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition"
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedDestinations;
