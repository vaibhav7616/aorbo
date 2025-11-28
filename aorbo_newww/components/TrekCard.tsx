import React from "react";
import { ClockIcon, RupeeIcon, MapPinIcon } from "./icons/Icons";
import type { Trek } from "../data/treks";

interface TrekCardProps {
  trek: Trek;
  onClick: () => void;
}

const TrekCard: React.FC<TrekCardProps> = ({ trek, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
    >
      {/* Trek Image */}
      <img
        src={trek.imageUrl}
        alt={trek.name}
        className="w-full h-52 object-cover"
      />

      {/* Trek Info */}
      <div className="p-4">
        {/* Name + State */}
        <h3 className="text-lg font-bold text-brand-dark mb-1">{trek.name}</h3>
        <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
          <MapPinIcon className="w-4 h-4 text-gray-400" /> {trek.state}
        </p>

        {/* 🕒 Duration, 📅 Departure, 💰 Price */}
        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-lg">🕒</span>
            <span className="font-medium">{trek.duration_days || "Duration info unavailable"}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg">📅</span>
            <span>{trek.operating_days || "Departure days not specified"}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className="text-orange-600 font-bold text-base">
              ₹{trek.price_start?.toLocaleString() || "N/A"}
            </span>
            <span className="text-gray-500 text-sm">onwards</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekCard;
