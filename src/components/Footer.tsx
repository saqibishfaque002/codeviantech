import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { SiteSettings, DEFAULT_SETTINGS } from "@/types/settings";

interface FooterProps {
  settings?: SiteSettings;
}

export default function Footer({ settings = DEFAULT_SETTINGS }: FooterProps) {
  const phoneClean = settings.contact_phone.replace(/[^0-9+]/g, "");

  return (
    <footer className="border-t border-brand-line bg-[#061020] text-brand-muted relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="ambient-glow w-96 h-96 -bottom-48 -left-48 bg-brand-blue/10" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-line/60">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center group transition-opacity hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 rounded-xl"
              aria-label={`${settings.company_name} Home`}
            >
              <Logo size="md" variant="full" mode="dark" alt={settings.company_name} />
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
              {settings.footer_tagline || DEFAULT_SETTINGS.footer_tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {settings.social_github && (
                <a
                  href={settings.social_github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg border border-brand-line bg-brand-panel flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-blue transition-colors"
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
                  className="w-9 h-9 rounded-lg border border-brand-line bg-brand-panel flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-blue transition-colors"
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
                  className="w-9 h-9 rounded-lg border border-brand-line bg-brand-panel flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-blue transition-colors"
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
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cyan transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions#pos" className="hover:text-white transition-colors">
                  Point of Sale (POS)
                </Link>
              </li>
              <li>
                <Link href="/solutions#school-erp" className="hover:text-white transition-colors">
                  School ERP Platform
                </Link>
              </li>
              <li>
                <Link href="/solutions#enterprise-erp" className="hover:text-white transition-colors">
                  Enterprise Management
                </Link>
              </li>
              <li>
                <Link href="/solutions#clinic-ehr" className="hover:text-white transition-colors">
                  Clinic EHR Software
                </Link>
              </li>
              <li>
                <Link href="/services#product-engineering" className="hover:text-white transition-colors">
                  MVP Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <a
                  href={`tel:${phoneClean}`}
                  className="text-slate-300 hover:text-white transition-colors font-medium"
                >
                  {settings.contact_phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${settings.contact_email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {settings.contact_email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue mt-1 flex-shrink-0" />
                <span className="text-slate-300">{settings.headquarters}</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:underline"
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
            <a href="#top" className="hover:text-slate-300 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
