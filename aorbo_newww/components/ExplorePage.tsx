import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { treks } from "../data/treks";

const ExplorePage: React.FC = () => {
  const navigate = useNavigate();

  // 🧭 When user searches a trek name or trek point
  const handleTrekClick = (name: string, imageUrl?: string) => {
    const searchTerm = name.trim().toLowerCase();

    // 1️⃣ Match by Trek Name
    let matchedTrek = treks.find((t) =>
      t.name.toLowerCase().includes(searchTerm)
    );

    // 2️⃣ Match by Trek Points
    if (!matchedTrek) {
      matchedTrek = treks.find((t) =>
        (t.Trek_Points || []).some((p) =>
          p.toLowerCase().includes(searchTerm)
        )
      );
    }

    // 3️⃣ Match by Related Treks
    if (!matchedTrek) {
      matchedTrek = treks.find((t) =>
        (t.Related_Treks || []).some((r) =>
          r.toLowerCase().includes(searchTerm)
        )
      );
    }

    // 4️⃣ Match by Activities
    if (!matchedTrek) {
      matchedTrek = treks.find((t) =>
        (t.Activites || []).some((a) =>
          a.toLowerCase().includes(searchTerm)
        )
      );
    }

    // 5️⃣ Match by Tags or State
    if (!matchedTrek) {
      matchedTrek = treks.find(
        (t) =>
          (t.tags || []).some((tag) => tag.toLowerCase().includes(searchTerm)) ||
          t.state.toLowerCase().includes(searchTerm)
      );
    }

    // ✅ Redirect to trek page if found
    if (matchedTrek) {
      navigate(`/trek/${matchedTrek.id}`);
    } else {
      // 🚩 Redirect to admin for missing trek/point
      navigate(`/admin?missingPlace=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="pt-24 px-6">

      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold text-brand-dark mb-4">
          Explore Treks Across India
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Search by trek name, trek point, or destination to explore full trek details.
        </p>
      </div>
    </div>
  );
};

export default ExplorePage;
