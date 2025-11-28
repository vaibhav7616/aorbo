import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { treks } from "../data/treks";
import TrekDetails from "./TrekDetails";
import type { Trek } from "../data/treks";

const TrekPage: React.FC = () => {
  const { trekId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Try to find trek either from location.state or from list
  const trek: Trek | undefined =
    (location.state && (location.state as any).trek) ||
    treks.find((t) => t.id.toLowerCase() === trekId?.toLowerCase());

  // ✅ If no trek found, automatically redirect to home instead of showing error
  useEffect(() => {
    if (!trek) {
      navigate("/", { replace: true });
    }
  }, [trek, navigate]);

  if (!trek) return null; // 👈 prevent rendering anything while redirecting

  return (
    <TrekDetails
      trek={trek}
      onClose={() => navigate(-1)}
      onViewTrek={(trekId) => navigate(`/trek/${trekId}`)}
    />
  );
};

export default TrekPage;
