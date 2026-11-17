import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Logo from "@/components/Logo";
import { SiteSettings, DEFAULT_SETTINGS } from "@/types/settings";

interface FooterProps {
  settings?: SiteSettings;
}

export default function Footer({ settings = DEFAULT_SETTINGS }: FooterProps) {
  const phoneClean = settings.contact_phone.replace(/[^0-9+]/g, "");

  return (
    <footer className="border-t border-white/[0.08] bg-[#070B14] text-brand-muted relative overflow-hidden">
      {/* Subtle top edge specular highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      {/* Ambient background glow */}
      <div className="ambient-glow w-96 h-96 -bottom-48 -left-48 bg-blue-600/10 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center group transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
              aria-label={`${settings.company_name} Home`}
            >
              <Logo size="md" variant="full" mode="dark" alt={settings.company_name} />
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
              {settings.footer_tagline || DEFAULT_SETTINGS.footer_tagline}
            </p>

            {/* Live Infrastructure Status */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>All Systems Operational</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-2.5 pt-2">
              {settings.social_github && (
                <a
                  href={settings.social_github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:border-blue-500/40 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  aria-label="GitHub Repository"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}
              {settings.social_linkedin && (
                <a
                  href={settings.social_linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:border-blue-500/40 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              {settings.social_twitter && (
                <a
                  href={settings.social_twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:border-blue-500/40 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  aria-label="Twitter / X"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3.5">
            <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-150">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors duration-150">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors duration-150">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors duration-150 font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3.5">
            <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions#pos" className="hover:text-white transition-colors duration-150">
                  Point of Sale (POS)
                </Link>
              </li>
              <li>
                <Link href="/solutions#school-erp" className="hover:text-white transition-colors duration-150">
                  School ERP Platform
                </Link>
              </li>
              <li>
                <Link href="/solutions#enterprise-erp" className="hover:text-white transition-colors duration-150">
                  Enterprise Management
                </Link>
              </li>
              <li>
                <Link href="/solutions#clinic-ehr" className="hover:text-white transition-colors duration-150">
                  Clinic EHR Software
                </Link>
              </li>
              <li>
                <Link href="/services#product-engineering" className="hover:text-white transition-colors duration-150">
                  MVP Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="space-y-3.5">
            <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <a
                  href={`tel:${phoneClean}`}
                  className="text-slate-300 hover:text-white transition-colors font-medium text-xs sm:text-sm"
                >
                  {settings.contact_phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${settings.contact_email}`}
                  className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm break-all"
                >
                  {settings.contact_email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">{settings.headquarters}</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Request a consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {settings.company_name}. {settings.footer_copyright || "All rights reserved."}</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Commercial Grade Quality</span>
            </span>
            <a href="#top" className="hover:text-slate-300 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
