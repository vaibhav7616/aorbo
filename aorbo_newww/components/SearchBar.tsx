import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { treks as TREKS } from "../data/treks";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const navigate = useNavigate();

  // Normalize string for flexible search
  const normalize = (text: string) =>
    text?.toLowerCase().replace(/[^a-z0-9]/g, "") || "";

  // 🔍 Generate suggestions while typing
  const handleInput = (value: string) => {
    setQuery(value);
    const searchKey = normalize(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const found: any[] = [];

    TREKS.forEach((trek) => {
      // Match trek name
      if (normalize(trek.name).includes(searchKey)) {
        found.push({ label: trek.name, sub: trek.state, id: trek.id });
      }

      // Match state
      if (normalize(trek.state).includes(searchKey)) {
        found.push({ label: trek.state, sub: trek.name, id: trek.id });
      }

      // Match Trek Points
      trek.Trek_Points?.forEach((point) => {
        if (normalize(point).includes(searchKey)) {
          found.push({ label: point, sub: trek.name, id: trek.id });
        }
      });

      // Match Activities
      trek.Activites?.forEach((activity) => {
        if (normalize(activity).includes(searchKey)) {
          found.push({ label: activity, sub: trek.name, id: trek.id });
        }
      });

      // Match Related Treks
      trek.Related_Treks?.forEach((related) => {
        if (normalize(related).includes(searchKey)) {
          found.push({ label: related, sub: trek.name, id: trek.id });
        }
      });
    });

    // Remove duplicates & limit to 10 results
    const unique = Array.from(
      new Map(found.map((item) => [item.id + item.label, item])).values()
    );
    setSuggestions(unique.slice(0, 10));
  };

  // Navigate to selected trek
  const handleSelect = (trekId: string) => {
    navigate(`/trek/${trekId}`);
    setQuery("");
    setSuggestions([]);
  };

  // Press Enter to search directly
  const handleSearch = () => {
    const normalized = normalize(query);

    if (suggestions.length > 0) {
      handleSelect(suggestions[0].id);
      return;
    }

    const directMatch = TREKS.find((trek) => {
      return (
        normalize(trek.name).includes(normalized) ||
        normalize(trek.state).includes(normalized) ||
        trek.Trek_Points?.some((p) => normalize(p).includes(normalized)) ||
        trek.Activites?.some((a) => normalize(a).includes(normalized)) ||
        trek.Related_Treks?.some((r) => normalize(r).includes(normalized))
      );
    });

    if (directMatch) {
      handleSelect(directMatch.id);
    } else {
      alert(`No trek found for "${query}"`);
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto mb-6">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search for a destination, trek point or activity..."
          value={query}
          onChange={(e) => handleInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-2 border z-50 max-h-64 overflow-y-auto">
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(s.id)}
              className="px-4 py-2 hover:bg-orange-50 cursor-pointer"
            >
              <p className="font-medium">{s.label}</p>
              <p className="text-sm text-gray-500">{s.sub}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
