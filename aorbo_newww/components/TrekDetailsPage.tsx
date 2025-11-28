import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { treks } from "../data/treks";

const TrekDetailsPage: React.FC = () => {
  const { trekId } = useParams();
  const navigate = useNavigate();

  const trek = treks.find((t) => t.id === trekId);

  if (!trek) {
    return (
      <div className="text-center py-10 text-gray-600 text-lg">
        Trek not found.
      </div>
    );
  }

  const handleRelatedTrekClick = (relatedName: string) => {
    const related = treks.find(
      (t) =>
        t.name.toLowerCase().replace(/\s+/g, "-") ===
        relatedName.toLowerCase().replace(/\s+/g, "-")
    );
    if (related) navigate(`/trek/${related.id}`);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-6 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{trek.name}</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-1 rounded-full shadow-sm"
        >
          ← Back
        </button>
      </div>

      {/* Image */}
      <img
        src={trek.hero_image || trek.imageUrl}
        alt={trek.name}
        className="rounded-xl w-full h-[450px] object-cover mb-6"
      />

      {/* Description */}
      <p className="text-gray-700 mb-6 text-base leading-relaxed">
        {trek.short_desc}
      </p>

      {/* Price */}
      <div className="bg-gray-50 rounded-lg px-5 py-3 mb-6">
        <span className="text-orange-600 font-bold text-xl">
          ₹{trek.price_start.toLocaleString()}
        </span>
        <span className="text-gray-500 ml-2 text-base">onwards</span>
      </div>

      {/* 🧍‍♂️ Operators */}
      {trek.operators && trek.operators.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Trek Operators
          </h3>
          <div className="flex flex-wrap gap-2">
            {trek.operators.map((op, i) => (
              <span
                key={i}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100"
              >
                {op}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Trek Points */}
      {trek.Trek_Points && trek.Trek_Points.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Trek Points
          </h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            {trek.Trek_Points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Activities */}
      {trek.Activites && trek.Activites.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Activities
          </h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            {trek.Activites.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Related Treks */}
      {trek.Related_Treks && trek.Related_Treks.length > 0 && (
        <div className="mt-6">
          <h2 className="font-semibold text-lg text-gray-800 mb-3">
            Related Treks
          </h2>
          <div className="space-y-3">
            {trek.Related_Treks.map((r, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
              >
                <span className="text-gray-700">{r}</span>
                <button
                  onClick={() => handleRelatedTrekClick(r)}
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
  );
};

export default TrekDetailsPage;
