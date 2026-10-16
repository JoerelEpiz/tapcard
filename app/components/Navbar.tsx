"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="relative">
      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-graphite hover:text-brand"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isMenuOpen}
        className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-brand bg-white text-brand md:hidden"
      >
        {isMenuOpen ? (
          <span className="text-2xl font-bold" aria-hidden="true">
            ×
          </span>
        ) : (
          <span className="text-2xl font-bold" aria-hidden="true">
            ☰
          </span>
        )}
      </button>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute right-0 top-14 z-[100] w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-graphite hover:bg-mint hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}