// ✅ imports
import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import AppPromo from "./components/AppPromo";
import FeaturedDestinations from "./components/FeaturedDestinations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TravelYourWay from "./components/TravelYourWay";
import TrekDetailsPage from "./components/TrekDetailsPage";
import TripStylesPage from "./components/TripStylesPage";
import WhyUs from "./components/WhyUs";
import type { Trek } from "./data/treks";
import { treks } from "./data/treks";

export type Page = "home";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // ✅ Normalizer for consistent search
  const normalize = (value: string): string =>
    value?.toLowerCase().replace(/[^a-z0-9]/g, "") || "";

  // ✅ Find trek ONLY by Trek_Points
  const findTrekBySearchTerm = (term: string): Trek | undefined => {
    const q = normalize(term);
    console.log("🔍 Searching for trek point:", q);

    for (const t of treks) {
      // support multiple possible key names just in case
      const trekPoints: string[] =
        (t.Trek_Points ||
          (t as any).trek_points ||
          (t as any).TrekPoints ||
          (t as any).trekpoints ||
          []) as string[];

      for (const point of trekPoints) {
        if (normalize(point).includes(q)) {
          console.log("✅ Matched Trek:", t.name, "via trek point:", point);
          return t;
        }
      }
    }

    console.log("❌ No trek matched for trek point:", q);
    return undefined;
  };

  // ✅ Search handler (called from Hero, FeaturedDestinations, etc.)
  const handleSearch = (term: string) => {
    setIsSearching(true);
    setSearchQuery(term);
    console.log("Searching for:", term);

    const match = findTrekBySearchTerm(term);

    if (match) {
      // 🔗 IMPORTANT: matches <Route path="/trek/:trekId" ... />
      navigate(`/trek/${match.id}`);
    } else {
      alert(`No trek found for trek point "${term}".`);
    }

    setTimeout(() => setIsSearching(false), 300);
  };

  return (
    <>
      <Header onNavigate={navigateTo} currentPage={currentPage} />

      <main className="bg-white text-brand-dark font-sans antialiased">
        {/* Hero with Search */}
        <Hero onSearch={handleSearch} isSearching={isSearching} />

        {/* Main Sections */}
        <FeaturedDestinations onTrekClick={handleSearch} initialCount={8} />
        <TravelYourWay />
        <TripStylesPage />
        <WhyUs />
        <AppPromo />
      </main>

      <Footer onNavigate={navigateTo} />
    </>
  );
};

// ✅ Router Wrapper (Only 2 routes needed)
const AppWrapper: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<App />} />

        {/* Dynamic Trek Page */}
        <Route path="/trek/:trekId" element={<TrekDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default AppWrapper;
