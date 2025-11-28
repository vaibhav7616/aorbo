import React from "react";
import { useNavigate } from "react-router-dom";
import type { Trek } from "../data/treks";

interface TrekDetailsProps {
  trek: Trek;
  onClose?: () => void;
  onViewTrek?: (trekId: string) => void;
}

const TrekDetails: React.FC<TrekDetailsProps> = ({ trek, onClose, onViewTrek }) => {
  const navigate = useNavigate();

  // ✅ Handle Related Treks navigation (slugify names properly)
  const handleRelatedTrekView = (relatedName: string) => {
    const slug = relatedName
      .toLowerCase()
      .replace(/\s*\+\s*/g, "-") // replace "+" with "-"
      .replace(/\s*&\s*/g, "-") // replace "&" with "-"
      .replace(/\s+/g, "-") // replace spaces with "-"
      .trim();

    if (onViewTrek) onViewTrek(slug);
    else navigate(`/trek/${slug}`);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow p-6 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{trek.name}</h1>
        <button
          onClick={onClose || (() => navigate(-1))}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-1 rounded-full shadow-sm"
        >
          ← Back
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Image + Related Treks */}
        <div className="md:w-1/2 w-full">
          <img
            src={trek.imageUrl}
            alt={trek.name}
            className="rounded-xl w-full h-[450px] object-cover"
          />

          {/* Related Treks */}
          {Array.isArray(trek.Related_Treks) && trek.Related_Treks.length > 0 && (
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-gray-800 mb-3">
                Related Treks
              </h2>
              <div className="space-y-3">
                {trek.Related_Treks.map((related) => (
                  <div
                    key={related}
                    className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
                  >
                    <span className="text-gray-700">{related}</span>
                    <button
                      onClick={() => handleRelatedTrekView(related)}
                      className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition"
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Info */}
        <div className="md:w-1/2 w-full">
          {/* Description */}
          <p className="text-gray-600 mb-6">{trek.short_desc}</p>

          {/* Price */}
          <div className="bg-gray-50 rounded-lg px-5 py-3 mb-6">
            <span className="text-orange-600 font-bold text-xl">
              ₹{trek.price_start}
            </span>
            <span className="text-gray-500 ml-2 text-base">onwards</span>
          </div>

          {/* Operators */}
          {Array.isArray(trek.operators) && trek.operators.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Operators
              </h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                {trek.operators.map((op, i) => (
                  <li key={i}>{op}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Trek Points */}
          {Array.isArray(trek.Trek_Points) && trek.Trek_Points.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Trek Points
              </h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                {trek.Trek_Points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Activities (no View button now) */}
          {Array.isArray(trek.Activites) && trek.Activites.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Activities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {trek.Activites.map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrekDetails;
