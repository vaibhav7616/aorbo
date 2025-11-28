import React, { useEffect, useState } from "react";
import {
  MapPinIcon,
  ArrowLeftIcon,
  ClockIcon,
  CalendarIcon,
  RupeeIcon,
} from "./icons/Icons";
import type { Trek } from "../data/treks";
import { treks } from "../data/treks";
import TrekDetails from "./TrekDetails"; // ✅ Import TrekDetails modal

interface SearchResultsProps {
  results: {
    image: string;
    details: {
      brief?: string;
      famous_places?: string[];
      price_start?: number;
      currency?: string;
      operators?: string[];
      state?: string;
      duration_days?: string;
      operating_days?: string;
      short_desc?: string;
      highlights?: string[];
      Trek_Points?: string[];
      Activites?: string[];
      Related_Treks?: string[];
    };
    related: Trek[];
  } | null;
  error: string | null;
  onClose: () => void;
  searchTerm: string;
  onTrekClick: (trekName: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  error,
  onClose,
  searchTerm,
  onTrekClick,
}) => {
  const [showAllOperators, setShowAllOperators] = useState(false);
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null); // ✅ New state

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (error) {
    return (
      <section className="bg-brand-light pt-24 pb-16">
        <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[50vh]">
          <h3 className="text-2xl font-bold text-red-600 font-display">
            Oops! Adventure Not Found
          </h3>
          <p className="text-gray-700 mt-2 max-w-md">{error}</p>
          <button
            onClick={onClose}
            className="mt-8 bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105"
          >
            Try Another Search
          </button>
        </div>
      </section>
    );
  }

  if (!results || !results.details) return null;
  const d = results.details;
  const operatorsToShow = showAllOperators ? d.operators : d.operators?.slice(0, 3);

  return (
    <section className="bg-white pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex-grow">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-dark text-left">
              {searchTerm}
            </h2>
            <p className="text-gray-500 mt-1">
              Complete trek information & details
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-white hover:bg-gray-100 text-brand-dark font-bold py-2 px-6 rounded-lg shadow-sm border flex items-center gap-2"
          >
            <ArrowLeftIcon className="h-5 w-5" /> Back
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* IMAGE */}
          <img
            src={results.image}
            alt={searchTerm}
            className="w-full h-80 lg:h-full object-cover rounded-2xl shadow-xl"
          />

          {/* RIGHT SIDE DETAILS */}
          <div className="w-full">
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {d.brief || d.short_desc || "No description available."}
            </p>

            <div className="bg-[#FFFBF5] p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
              {d.state && (
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-brand-primary" />
                  <span className="font-semibold text-brand-dark">
                    {d.state}
                  </span>
                </div>
              )}

              {d.duration_days && (
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-brand-primary" />
                  <span className="text-gray-700 font-medium">
                    {d.duration_days}
                  </span>
                </div>
              )}

              {d.operating_days && (
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-brand-primary" />
                  <span className="text-gray-700 font-medium">
                    Departure Days: {d.operating_days}
                  </span>
                </div>
              )}

              {d.price_start && (
                <div className="flex items-center gap-2">
                  <RupeeIcon className="h-5 w-5 text-brand-primary" />
                  <span className="text-gray-700 font-semibold text-lg">
                    ₹{d.price_start.toLocaleString()}{" "}
                    <span className="text-gray-500 text-sm">onwards</span>
                  </span>
                </div>
              )}

              {/* OPERATORS */}
              {d.operators && d.operators.length > 0 && (
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">
                    Trusted Operators
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {operatorsToShow?.map((op, i) => (
                      <span
                        key={i}
                        className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full"
                      >
                        {op}
                      </span>
                    ))}
                    {d.operators.length > 3 && (
                      <button
                        onClick={() => setShowAllOperators(!showAllOperators)}
                        className="text-brand-primary font-semibold text-sm underline ml-2"
                      >
                        {showAllOperators
                          ? "Show Less"
                          : `+${d.operators.length - 3} more`}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ACTIVITIES & TREK POINTS */}
            <div className="mt-8 bg-white rounded-2xl border p-6 shadow-md">
              <h3 className="font-bold text-xl text-brand-dark mb-4">
                Activities & Trek Points
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Trek Points
                  </h4>
                  {d.Trek_Points && d.Trek_Points.length > 0 && (
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                      {d.Trek_Points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Activities
                  </h4>
                  {d.Activites && d.Activites.length > 0 && (
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                      {d.Activites.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* RELATED TREKS */}
            {d.Related_Treks && d.Related_Treks.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-lg mt-10 border">
                <h3 className="font-bold text-xl text-brand-dark mb-4">
                  Related Treks
                </h3>
                <ul className="space-y-3">
                  {d.Related_Treks.map((name, i) => (
                    <li
                      key={i}
                      className="p-3 bg-gray-50 rounded-md hover:bg-orange-50 transition flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold text-brand-dark">{name}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPinIcon className="h-4 w-4" />
                          {d.state}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          const related = treks.find(
                            (t) =>
                              t.name.toLowerCase() === name.toLowerCase()
                          );
                          if (related) setSelectedTrek(related);
                        }}
                        className="text-brand-primary font-semibold text-sm hover:underline"
                      >
                        View
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Modal to show trek details inline */}
      {selectedTrek && (
        <TrekDetails
          trek={selectedTrek}
          onClose={() => setSelectedTrek(null)}
          onViewTrek={(trekId) => {
            const relatedTrek = treks.find((t) => t.id === trekId);
            if (relatedTrek) setSelectedTrek(relatedTrek);
          }}
        />
      )}
    </section>
  );
};

export default SearchResults;
