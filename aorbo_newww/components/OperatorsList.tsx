"use client";
import React, { useState } from "react";


interface OperatorsListProps {
  operators: string[];
}

const OperatorsList: React.FC<OperatorsListProps> = ({ operators }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleOperators = showAll ? operators : operators.slice(0, 1);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Operators</h2>

      <ul className="space-y-2">
        {visibleOperators.map((op, index) => (
          <li key={index} className="text-gray-800 font-medium">
            {op}
          </li>
        ))}
      </ul>

      {operators.length > 1 && (
        <button
          className="mt-2 text-blue-600 font-semibold"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "...more operators"}
        </button>
      )}
    </div>
  );
};

export default OperatorsList;
