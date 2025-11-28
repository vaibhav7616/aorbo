import React, { useState, useEffect, useRef } from "react";
import { SearchIcon, SpinnerIcon } from "./icons/Icons";
import { allTreks } from "../data/treks";
import type { Trek } from "../data/treks";



// Props from App.tsx
interface HeroProps {
  onSearch: (searchTerm: string, imageUrl?: string) => void;
  isSearching: boolean;
}

// ⭐ FIX: The only suggestion type (imageUrl included)
interface Suggestion {
  name: string;
  state: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ onSearch, isSearching }) => {
  const [query, setQuery] = useState("");

  // ⭐ FIX: This forces TypeScript to allow imageUrl
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Filter treks based on search query
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 1) {
      const filtered: Suggestion[] = (allTreks as Trek[])
  .filter((t: Trek) =>
    t.name.toLowerCase().includes(query.toLowerCase())
  )
  .map((t: Trek) => ({
    name: t.name,
    state: t.state,
    imageUrl: t.imageUrl,
  }));


        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
      } else {
        setFilteredSuggestions([]);
        setShowSuggestions(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Suggestion click handler
  const handleSuggestionClick = (name: string, img: string) => {
    setQuery(name);
    setShowSuggestions(false);
    onSearch(name, img);
  };

  return (
    <div
      className="w-full h-[550px] bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/assets/_/assets/backgorund.jpeg')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-20 text-center text-white px-4 max-w-3xl">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Discover Your Adventure.
        </h1>

        {/* Search container */}
        <div
          ref={searchContainerRef}
          className="relative w-full max-w-xl mx-auto mt-6"
        >
          <div className="flex bg-white rounded-full px-5 py-3 shadow-lg items-center">
            <input
              type="text"
              className="flex-1 text-black outline-none"
              placeholder="Search for a destination or trek..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {isSearching ? (
              <SpinnerIcon className="animate-spin text-orange-500 w-6 h-6" />
            ) : (
              // Wrap icon inside clickable div to avoid TS error
              <div onClick={() => onSearch(query)}>
                <SearchIcon className="text-orange-500 w-6 h-6 cursor-pointer" />
              </div>
            )}
          </div>

          {/* Suggestions dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className="absolute w-full bg-white shadow-xl rounded-xl mt-2 z-30 max-h-64 overflow-y-auto">
              {filteredSuggestions.map((s, idx) => (
                <li
                  key={idx}
                  className="px-4 py-3 cursor-pointer hover:bg-gray-100 text-black"
                  onClick={() => handleSuggestionClick(s.name, s.imageUrl)}
                >
                  {s.name}{" "}
                  <span className="text-gray-500 text-sm">({s.state})</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
