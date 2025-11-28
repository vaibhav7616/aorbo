import React, { useState } from "react";
import TrekCard from "./TrekCard";
import { treks } from "../data/treks";
import { useNavigate } from "react-router-dom";

interface FeaturedDestinationsProps {
  onTrekClick?: (term: string) => void;
  initialCount?: number;
}

const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({
  onTrekClick,
  initialCount = 8,
}) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const handleViewDetails = (trekId: string) => {
    navigate(`/trek/${trekId}`);
  };

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {treks.slice(0, visibleCount).map((trek) => (
          <div key={trek.id} className="relative">
            <TrekCard trek={trek} onClick={() => onTrekClick?.(trek.name)} />

            {/* View Button */}
            <button
              onClick={() => handleViewDetails(trek.id)}
              className="absolute bottom-3 right-3 bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {visibleCount < treks.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            + More
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedDestinations;
