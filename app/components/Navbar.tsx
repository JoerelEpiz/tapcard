"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#plan" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
          aria-label="TapCard homepage"
        >
          Tap<span className="text-brand">Card</span>
        </Link>

        <nav aria-label="Main navigation" className="relative">
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-graphite transition hover:text-brand"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#plan"
              className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
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
            <div
              id="mobile-navigation"
              className="absolute right-0 top-14 z-50 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-xl md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-graphite transition hover:bg-mint hover:text-brand"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Get Started */}
              <a
                href="#plan"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 block rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Get Started
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}