"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Lock,
} from "lucide-react";
import Logo from "@/components/Logo";
import LoginModal from "@/components/LoginModal";
import { SiteSettings, DEFAULT_SETTINGS } from "@/types/settings";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Portfolio" },
  { href: "/process", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface NavbarProps {
  settings?: SiteSettings;
}

export default function Navbar({ settings = DEFAULT_SETTINGS }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close mobile menu when navigating to a new route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#090D16]/95 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-[#090D16]/80 backdrop-blur-md border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Top-Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-xl transition-transform hover:scale-[1.01]"
            aria-label={`${settings.company_name} Home`}
          >
            <Logo size="md" variant="full" priority alt={settings.company_name} />
          </Link>

          {/* Horizontal Desktop Navigation: Services, Portfolio, Insights, About */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/[0.1] shadow-sm font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#06B6D4] rounded-full shadow-[0_0_8px_#06B6D4]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Sign In Trigger Button (Desktop/Tablet) */}
            <a
              href="/admin"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sign In</span>
            </a>

            {/* "Get Started" CTA button (hidden on very small mobile to prevent header crowding) */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex relative group px-5 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:from-[#60A5FA] hover:to-[#22D3EE] shadow-[0_0_20px_rgba(6,182,212,0.45)] hover:shadow-[0_0_28px_rgba(6,182,212,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden relative z-50 min-w-[44px] min-h-[44px] rounded-xl border border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.1] active:bg-white/[0.18] flex items-center justify-center text-slate-200 hover:text-white transition-all cursor-pointer touch-manipulation select-none flex-shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white pointer-events-none" />
              ) : (
                <Menu className="w-5 h-5 text-slate-200 pointer-events-none" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer & Backdrop */}
        {mobileMenuOpen && (
          <>
            {/* Semi-transparent Backdrop for outside-tap dismissal */}
            <div
              className="lg:hidden fixed inset-0 top-[65px] sm:top-[73px] bg-black/75 backdrop-blur-sm z-30 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Navigation Drawer */}
            <div className="lg:hidden relative z-40 border-t border-b border-white/[0.1] bg-[#0A0F1D] px-5 pt-4 pb-8 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.95)] max-h-[calc(100vh-80px)] overflow-y-auto animate-fadeIn">
              <div className="flex flex-col gap-1.5">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "text-white bg-white/[0.1] font-semibold border border-cyan-400/30 text-cyan-300"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-50 text-cyan-400" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/[0.08] grid grid-cols-2 gap-3">
                <a
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Sign In</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-[0.98] transition-all"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Login Modal Overlay */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </>
  );
}
