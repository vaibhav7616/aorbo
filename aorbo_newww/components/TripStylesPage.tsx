import React from "react";
import { useParams } from "react-router-dom";
import { treks } from "../data/treks";
import type { Trek } from "../data/treks";
import { MapPinIcon, CalendarIcon, ClockIcon, RupeeIcon } from "../components/icons/Icons";

const TrekPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const trek: Trek | undefined = treks.find((t) => t.id === id);

  // ❌ Removed Trek Not Found UI
  if (!trek) return null; // (optional) can replace with navigate("/") or custom message

  return (
    <section className="py-20 px-6 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* 🖼️ LEFT — Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={trek.hero_image || trek.imageUrl}
            alt={trek.name}
            className="w-full h-[420px] object-cover"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.src = "/images/fallback-hero.png";
            }}
          />
        </div>

        {/* 📄 RIGHT — Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
              {trek.name}
            </h1>
            <p className="text-gray-600 mb-4">{trek.state}</p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {trek.long_desc || trek.short_desc || "No description available."}
            </p>

            {/* 🚩 Trek Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FFF8F3] p-5 rounded-xl border border-orange-100 shadow-sm mb-6">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-brand-primary" />
                <span>{trek.duration_days || "Duration not specified"}</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-brand-primary" />
                <span>{trek.operating_days || "Flexible departures"}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-brand-primary" />
                <span>{trek.state || "Unknown location"}</span>
              </div>

              <div className="flex items-center gap-2">
                <RupeeIcon className="w-5 h-5 text-brand-primary" />
                <span>
                  ₹{trek.price_start?.toLocaleString()}{" "}
                  <span className="text-gray-500 text-sm">onwards</span>
                </span>
              </div>
            </div>

            {/* 🌄 Trek Points */}
            {trek.Trek_Points?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-brand-dark">
                  Trek Points
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {trek.Trek_Points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 🎯 Activities */}
            {trek.Activites?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-brand-dark">
                  Activities
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {trek.Activites.map((act, idx) => (
                    <li key={idx}>{act}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 🔗 Related Treks */}
            {trek.Related_Treks?.length > 0 && (
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm mt-8">
                <h3 className="font-semibold text-lg mb-3 text-brand-dark">
                  Related Treks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trek.Related_Treks.map((r, i) => (
                    <span
                      key={i}
                      className="bg-orange-100 text-brand-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrekPage;
