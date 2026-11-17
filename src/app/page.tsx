import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Logo from "@/components/Logo";
import {
  ArrowUpRight,
  Cpu,
  Layers,
  Database,
  Smartphone,
  Cloud,
  Headphones,
  Sparkles,
  ShieldCheck,
  Store,
  GraduationCap,
  Briefcase,
  Activity,
} from "lucide-react";
import { getSiteSettings, getPublishedServices, getPublishedSolutions } from "@/lib/settings";
import { DEFAULT_SETTINGS } from "@/types/settings";

const SERVICE_ICONS = [Layers, Smartphone, Database, Cpu, Cloud, Headphones];
const SOLUTION_ICONS = [Store, GraduationCap, Briefcase, Activity];

export default async function HomePage() {
  const settings = await getSiteSettings();
  const dbServices = await getPublishedServices();
  const dbSolutions = await getPublishedSolutions();

  const trustItems = (settings.trust_strip_items || DEFAULT_SETTINGS.trust_strip_items)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Ambient Glows */}
        <div className="ambient-glow w-[550px] h-[550px] -top-40 -right-20 bg-brand-blue/15" />
        <div className="ambient-glow w-[450px] h-[450px] top-60 -left-40 bg-brand-cyan/10" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                <span>{settings.hero_eyebrow || DEFAULT_SETTINGS.hero_eyebrow}</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[4.2rem] tracking-tight leading-[1.08] text-white">
                {settings.hero_title || DEFAULT_SETTINGS.hero_title} <br />
                <span className="gradient-text">
                  {settings.hero_gradient_title || DEFAULT_SETTINGS.hero_gradient_title}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-xl">
                {settings.hero_description || DEFAULT_SETTINGS.hero_description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-blue to-[#3264e0] hover:from-[#6b99ff] hover:to-[#4375ee] shadow-xl shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>{settings.hero_cta_primary || DEFAULT_SETTINGS.hero_cta_primary}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/solutions"
                  className="px-7 py-3.5 rounded-xl font-bold text-slate-200 border border-brand-line hover:bg-slate-800/40 hover:text-white hover:border-brand-blue/50 transition-all duration-200"
                >
                  {settings.hero_cta_secondary || DEFAULT_SETTINGS.hero_cta_secondary}
                </Link>
              </div>

              {/* Trust statement */}
              <div className="pt-6 flex items-center gap-3 text-xs sm:text-sm text-slate-400">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>{settings.hero_trust_badge || DEFAULT_SETTINGS.hero_trust_badge}</span>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full border border-brand-blue/20 absolute pointer-events-none" />
              <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full border border-brand-cyan/15 absolute pointer-events-none" />

              <div className="absolute -top-4 -left-4 sm:top-2 sm:left-0 z-20 flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-panel/95 border border-brand-line text-xs font-semibold text-white shadow-xl shadow-black/40 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>Turning Ideas into Working Software</span>
              </div>

              <div className="absolute -bottom-6 right-2 sm:bottom-0 sm:right-4 z-20 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-panel/95 border border-brand-blue/40 text-xs font-semibold text-white shadow-xl shadow-black/40 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Dedicated Long-Term Support</span>
              </div>

              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[360px] p-6 rounded-3xl bg-gradient-to-br from-brand-panel via-[#0e213d] to-[#0a182e] border border-brand-blue/30 shadow-2xl shadow-brand-blue/20 -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between pb-6 border-b border-brand-line/50 text-[11px] text-brand-muted">
                  <span className="font-mono tracking-wider">
                    {settings.hero_card_tag || DEFAULT_SETTINGS.hero_card_tag}
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                </div>

                <div className="py-6 space-y-3">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl shadow-brand-blue/30 drop-shadow-md">
                    <Logo
                      variant="app-icon"
                      size="lg"
                      className="w-14 h-14 object-cover"
                      alt="CodvianTech"
                      priority
                    />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    {settings.hero_card_title || DEFAULT_SETTINGS.hero_card_title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {settings.hero_card_desc || DEFAULT_SETTINGS.hero_card_desc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-brand-line/50">
                  <div className="h-1.5 rounded-full bg-gradient-to-r from-brand-blue to-transparent w-full" />
                  <div className="h-1.5 rounded-full bg-gradient-to-r from-brand-cyan to-transparent w-3/4" />
                  <div className="h-1.5 rounded-full bg-gradient-to-r from-brand-blue/40 to-transparent w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-brand-line/70 bg-[#061022]/80 backdrop-blur-md py-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="font-heading font-extrabold text-white text-base">
                {settings.trust_strip_title || DEFAULT_SETTINGS.trust_strip_title}
              </span>
              <span className="text-brand-muted text-sm hidden md:inline">
                {settings.trust_strip_subtitle || DEFAULT_SETTINGS.trust_strip_subtitle}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300">
              {trustItems.map((item, i) => (
                <span key={i}>✦ {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow={settings.services_section_eyebrow || DEFAULT_SETTINGS.services_section_eyebrow}
            title={settings.services_section_title || DEFAULT_SETTINGS.services_section_title}
            gradientWord={settings.services_section_gradient || DEFAULT_SETTINGS.services_section_gradient}
            description={settings.services_section_desc || DEFAULT_SETTINGS.services_section_desc}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dbServices.length > 0
              ? dbServices.map((service, index) => {
                  const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
                  return (
                    <div
                      key={service.id}
                      className="glass-panel glass-panel-hover p-8 rounded-2xl group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-200">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed">
                          {service.summary || service.description}
                        </p>
                      </div>
                      <Link
                        href="/services"
                        className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-cyan transition-colors"
                      >
                        <span>Read more about this service</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  );
                })
              : [
                  {
                    icon: Layers,
                    title: "Tailored Software",
                    desc: "Every business runs differently. We build custom software shaped specifically around the way your people actually work, saving hours of manual back-and-forth every single week.",
                  },
                  {
                    icon: Smartphone,
                    title: "Web & Mobile Apps",
                    desc: "Clean, fast websites and easy-to-use apps on iPhone and Android. We focus on clear layouts and quick loading speeds so your customers get what they need without confusion.",
                  },
                  {
                    icon: Database,
                    title: "Business Management Systems",
                    desc: "Stop juggling scattered spreadsheets and lost paperwork. We bring your inventory, customer records, invoices, and daily operations together into one clear view.",
                  },
                  {
                    icon: Cpu,
                    title: "Startup Product Development",
                    desc: "Have a new product idea? We help founders take early concepts from the whiteboard to an actual working product in weeks, ready to show real users and investors.",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud Setup & Integrations",
                    desc: "Connect your existing tools with payment systems, shipping providers, and accounting software. We keep your systems connected so data flows automatically.",
                  },
                  {
                    icon: Headphones,
                    title: "Care & Continuous Support",
                    desc: "We don’t disappear after launch. We stay by your side with regular updates, security checks, and friendly technical help whenever your team has a question.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="glass-panel glass-panel-hover p-8 rounded-2xl group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-200">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <Link
                        href="/services"
                        className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-cyan transition-colors"
                      >
                        <span>Read more about this service</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>

      {/* READY-TO-USE SOLUTIONS */}
      <section className="py-20 bg-[#071124] border-y border-brand-line/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow={settings.solutions_section_eyebrow || DEFAULT_SETTINGS.solutions_section_eyebrow}
            title={settings.solutions_section_title || DEFAULT_SETTINGS.solutions_section_title}
            gradientWord={settings.solutions_section_gradient || DEFAULT_SETTINGS.solutions_section_gradient}
            description={settings.solutions_section_desc || DEFAULT_SETTINGS.solutions_section_desc}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dbSolutions.length > 0
              ? dbSolutions.slice(0, 3).map((sol, index) => {
                  const Icon = SOLUTION_ICONS[index % SOLUTION_ICONS.length];
                  return (
                    <div
                      key={sol.id}
                      className="p-8 rounded-2xl bg-brand-panel/90 border border-brand-line flex flex-col justify-between group hover:border-brand-blue/50 transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-blue/15 text-brand-blue border border-brand-blue/30">
                            {sol.tag || "Enterprise"}
                          </span>
                          <Icon className="w-5 h-5 text-brand-cyan" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-white mb-2">
                          {sol.title}
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed mb-6">
                          {sol.summary || sol.description}
                        </p>
                      </div>
                      <Link
                        href="/solutions"
                        className="inline-flex items-center gap-1 text-sm font-bold text-brand-cyan group-hover:translate-x-1 transition-transform"
                      >
                        <span>See how this works</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  );
                })
              : [
                  {
                    tag: "Retail & Dining",
                    icon: Store,
                    title: "Point of Sale (POS)",
                    desc: "Quick checkouts, barcode scanning, and automatic inventory updates across all your registers and store locations, even when internet connection drops.",
                  },
                  {
                    tag: "Schools & Colleges",
                    icon: GraduationCap,
                    title: "School Management",
                    desc: "Simple fee collection, student attendance records, exam gradebooks, and clear communication portals for teachers and parents.",
                  },
                  {
                    tag: "Business Operations",
                    icon: Briefcase,
                    title: "Complete Business ERP",
                    desc: "Clear control over your purchase orders, stock levels, daily accounting, and team tasks without dealing with confusing, overpriced enterprise software.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-8 rounded-2xl bg-brand-panel/90 border border-brand-line flex flex-col justify-between group hover:border-brand-blue/50 transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-blue/15 text-brand-blue border border-brand-blue/30">
                            {item.tag}
                          </span>
                          <Icon className="w-5 h-5 text-brand-cyan" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed mb-6">
                          {item.desc}
                        </p>
                      </div>
                      <Link
                        href="/solutions"
                        className="inline-flex items-center gap-1 text-sm font-bold text-brand-cyan group-hover:translate-x-1 transition-transform"
                      >
                        <span>See how this works</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#11294a] via-[#10213b] to-[#0d1d35] border border-brand-blue/30 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="ambient-glow w-80 h-80 top-0 right-0 bg-brand-blue/20" />

            <div className="max-w-2xl relative z-10 space-y-3 text-center lg:text-left">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
                {settings.cta_banner_title || DEFAULT_SETTINGS.cta_banner_title}
              </h2>
              <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                {settings.cta_banner_description || DEFAULT_SETTINGS.cta_banner_description}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-blue to-[#3366e2] hover:from-[#6594ff] hover:to-[#4577f1] shadow-xl shadow-brand-blue/30 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>{settings.cta_banner_button || DEFAULT_SETTINGS.cta_banner_button}</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
