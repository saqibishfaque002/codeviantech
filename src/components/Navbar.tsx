"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Logo from "@/components/Logo";
import { SiteSettings, DEFAULT_SETTINGS } from "@/types/settings";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/process", label: "How We Work" },
  { href: "/contact", label: "Contact" },
];

interface NavbarProps {
  settings?: SiteSettings;
}

export default function Navbar({ settings = DEFAULT_SETTINGS }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#081326]/90 backdrop-blur-xl border-b border-brand-line/60 py-3 shadow-lg"
          : "bg-[#081326]/60 backdrop-blur-md border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-blue/50 rounded-xl transition-all duration-200 hover:opacity-95"
          aria-label={`${settings.company_name} Home`}
        >
          <Logo size="md" variant="full" mode="auto" priority alt={settings.company_name} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[0.92rem]">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white bg-slate-800/60 shadow-sm"
                    : "text-brand-muted hover:text-white hover:bg-slate-800/30"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Customer Call-To-Action */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-[#3467e2] hover:from-[#6292ff] hover:to-[#4274ee] shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl border border-brand-line bg-brand-panel flex items-center justify-center text-white hover:border-brand-blue transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-brand-line bg-[#09152b] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-slate-800/80 font-semibold"
                      : "text-brand-muted hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-[#3467e2] shadow-lg shadow-brand-blue/25"
            >
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span>Start a Project</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
