// src/components/Header.tsx
import React, { useEffect, useRef, useState } from "react";
import type { Page } from "../App";

interface HeaderProps {
  onNavigate: (page: Page, payload?: any) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderHeight(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (page: Page) => onNavigate(page);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 pointer-events-none transition-all duration-200 ${
          scrolled ? "backdrop-blur-sm bg-white/90 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-auto flex items-center justify-between h-16">
            
            {/* 🏔️ Logo */}
            <button
              onClick={() => nav("home")}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary rounded"
              aria-label="AORBO TREKS Home"
            >
              <img
                src="/assets/_/assets/Logo.png"
                alt="AORBO TREKS Logo"
                className="h-12 w-auto object-contain"
              />
            </button>

            {/* 🧭 Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => nav("home")}
                className={`text-sm font-medium focus:outline-none ${
                  currentPage === "home"
                    ? "text-brand-primary"
                    : "text-gray-700"
                }`}
              >
                Home
              </button>
            </nav>

            {/* 📱 Mobile Menu */}
            <div className="md:hidden">
              <button
                onClick={() => nav("home")}
                aria-label="Open menu"
                className="p-2 rounded-md bg-white/90 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 🧱 Spacer to prevent layout shift */}
      {headerHeight ? (
        <div style={{ height: headerHeight }} aria-hidden="true" />
      ) : (
        <div className="h-16" aria-hidden="true" />
      )}
    </>
  );
};

export default Header;
