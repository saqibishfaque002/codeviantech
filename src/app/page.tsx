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
  CheckCircle2,
  Terminal,
  Zap,
  Lock,
  Server,
  Code2,
  Sliders,
  ExternalLink,
  Laptop,
  Check,
  LineChart,
} from "lucide-react";
import { getSiteSettings, getPublishedServices, getPublishedSolutions } from "@/lib/settings";
import { DEFAULT_SETTINGS } from "@/types/settings";

const SERVICE_ICONS = [Layers, Smartphone, Database, Cpu, Cloud, Headphones];
const SOLUTION_ICONS = [Store, GraduationCap, Briefcase, Activity];

export default async function HomePage() {
  const settings = await getSiteSettings();
  const dbServices = await getPublishedServices();
  const dbSolutions = await getPublishedSolutions();

  return (
    <div className="overflow-hidden relative bg-[#090D16]">
      {/* HERO SECTION MATCHING REFERENCE SPECIFICATION */}
      <section className="relative pt-6 pb-20 lg:pt-10 lg:pb-28">
        {/* Subtle Cyber Grid & Luminous Ambient Lighting */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
        <div className="ambient-glow w-[600px] h-[600px] -top-32 right-[5%] bg-blue-600/15 pointer-events-none" />
        <div className="ambient-glow w-[500px] h-[500px] top-64 left-[5%] bg-cyan-500/10 pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-2 sm:pt-6">
            {/* Left-Center Hero Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Bold Headline: "Engineered for the Digital Future" */}
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[4.5rem] tracking-tight leading-[1.08] text-white">
                Engineered for <br className="hidden sm:inline" />
                the <span className="gradient-text">Digital Future</span>
              </h1>

              {/* Subhead: "We build scalable, modular architecture for next-gen enterprises." */}
              <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed max-w-xl font-normal">
                We build scalable, modular architecture for next-gen enterprises. Clean software systems shaped around how your business actually runs.
              </p>

              {/* Left-Center: Two Interactive Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {/* Primary Button: Blue-to-Cyan Gradient "Start Now" */}
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:from-[#60A5FA] hover:to-[#22D3EE] shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 inline-flex items-center gap-2.5"
                >
                  <span>Start Now</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950" />
                </Link>

                {/* Ghost-Style Button: "Our Work" with a Fine Cyan Border */}
                <Link
                  href="/solutions"
                  className="px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-200 hover:text-white bg-white/[0.03] hover:bg-cyan-500/[0.08] border border-cyan-500/40 hover:border-cyan-400 shadow-sm backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>Our Work</span>
                </Link>
              </div>

              {/* Architecture Trust Highlights */}
              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400 border-t border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">100% Full Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">Dedicated Engineering Team</span>
                </div>
              </div>
            </div>

            {/* Right-Center: Large Glowing 3D 'C' Graphic & Intricate Digital Network Elements */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Concentric Cyber Rings & Wireframe Base */}
              <div className="w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] rounded-full border border-blue-500/20 absolute pointer-events-none animate-pulse-slow" />
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-cyan-500/25 absolute pointer-events-none" />
              <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full border border-cyan-400/40 absolute pointer-events-none shadow-[0_0_40px_rgba(6,182,212,0.3)]" />

              {/* Floating Value Card 1: 100% Code Ownership (Top-Left) */}
              <div className="absolute -top-4 -left-4 sm:top-2 sm:-left-6 z-20 px-3.5 py-2.5 rounded-2xl bg-[#0D1527]/95 border border-cyan-500/30 text-xs font-semibold text-white shadow-2xl backdrop-blur-xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-medium leading-none">Your Intellectual Property</span>
                  <span className="text-white font-bold text-xs mt-0.5 block">100% Code Ownership</span>
                </div>
              </div>

              {/* Floating Value Card 2: Dedicated Support & Partnership (Bottom-Right) */}
              <div className="absolute -bottom-4 right-0 sm:bottom-2 sm:-right-4 z-20 px-3.5 py-2.5 rounded-2xl bg-[#0D1527]/95 border border-emerald-500/30 text-xs font-semibold text-white shadow-2xl backdrop-blur-xl flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <div>
                  <span className="block text-[10px] text-slate-400 font-medium leading-none">Reliable Partnership</span>
                  <span className="text-emerald-400 font-bold text-xs mt-0.5 block">Dedicated Long-Term Support</span>
                </div>
              </div>

              {/* Central Glowing 3D 'C' Emblem Pedestal */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] rounded-3xl bg-gradient-to-b from-[#111A2E]/90 via-[#0E1526]/95 to-[#0A0F1D] border border-blue-500/30 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center text-center space-y-5">
                {/* 3D Spiraling 'C' Emblem */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl pointer-events-none" />
                  <img
                    src="/assets/brand/app-icon.png"
                    alt="CodvianTech 3D C Emblem"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-2xl drop-shadow-[0_0_30px_rgba(6,182,212,0.6)] select-none transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-cyan-400 text-[11px] font-medium">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Purpose-Built Software</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-white">
                    Built For Your Real Business
                  </h3>
                  <p className="text-xs text-brand-muted font-normal max-w-xs leading-relaxed">
                    Custom web platforms, mobile apps, and business tools engineered to make daily work simpler.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Hero Cards: 01 Custom Software, 02 UI/UX Design, 03 Custom Systems */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 01 */}
            <div className="p-7 rounded-2xl bg-[#0D1527]/90 border border-blue-500/30 hover:border-cyan-400/50 shadow-xl transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    01: Custom Software
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  High-Performance Software
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Cyber-micro-networks, data visualization, inventory telemetry, and POS checkout systems built for real operations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Next.js • Node • Laravel</span>
                <Link href="/services#custom-software" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 02 */}
            <div className="p-7 rounded-2xl bg-[#0D1527]/90 border border-blue-500/30 hover:border-cyan-400/50 shadow-xl transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    02: UI/UX Design
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-transform">
                    <Laptop className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  Enterprise Human-Centric UI
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Modular architectures, design systems, and next-gen enterprise portals crafted with meticulous attention to detail.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Figma • Tailwind • Design Tokens</span>
                <Link href="/services#web-mobile" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 03 */}
            <div className="p-7 rounded-2xl bg-[#0D1527]/90 border border-blue-500/30 hover:border-cyan-400/50 shadow-xl transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    03: Custom Systems / ERP
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform">
                    <Database className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  Unified Cloud Operations
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Smooth scalable architectures, inventory synchronicity, and automated workflows without proprietary lock-ins.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">PostgreSQL • Redis • Cloud Edge</span>
                <Link href="/solutions#enterprise-erp" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDING & UI STYLESHEET SHOWCASE: SPECIFICATIONS & BRAND ASSETS */}
      <section className="py-20 sm:py-28 border-y border-white/[0.08] bg-[#070B14] relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
                <Code2 className="w-3.5 h-3.5" />
                <span>UI & Brand Stylesheet</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Specifications & Brand Assets
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                The technical design language and tokenized design system powering CodvianTech digital applications.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Theme: Obsidian Sapphire & Cyan</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Color Palette Specifications Tile */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-[#090D16] border border-white/[0.08] space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono text-slate-400">
                <span>01 // COLOR TOKENS</span>
                <span className="text-cyan-400">3 Core Hues</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#090D16] border border-white/[0.15] shadow-inner" />
                    <div>
                      <strong className="block text-sm font-semibold text-white">Deep Midnight</strong>
                      <span className="text-xs text-slate-400 font-mono">Primary Canvas</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-300 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                    #090D16
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3B82F6] shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                    <div>
                      <strong className="block text-sm font-semibold text-white">Sapphire Blue</strong>
                      <span className="text-xs text-slate-400 font-mono">Brand Primary</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-blue-400 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                    #3B82F6
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#06B6D4] shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
                    <div>
                      <strong className="block text-sm font-semibold text-white">Vibrant Cyan</strong>
                      <span className="text-xs text-slate-400 font-mono">Precision Accent</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-cyan-400 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                    #06B6D4
                  </span>
                </div>
              </div>
            </div>

            {/* Typography & Interactive Components Specs Tile */}
            <div className="lg:col-span-7 p-7 rounded-2xl bg-[#090D16] border border-white/[0.08] space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono text-slate-400">
                <span>02 // TYPOGRAPHY & BUTTON SPECIFICATIONS</span>
                <span className="text-cyan-400">Manrope + DM Sans</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-1">
                    Display Headline Scale
                  </span>
                  <div className="font-heading font-extrabold text-2xl text-white">
                    Engineered for the Digital Future
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                  <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                    Interactive Button Tokens
                  </span>
                  <div className="flex flex-wrap items-center gap-4">
                    <button className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                      Primary: Start Now
                    </button>
                    <button className="px-6 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-white/[0.03] border border-cyan-500/40">
                      Ghost: Our Work
                    </button>
                    <button className="px-6 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-white/[0.05] border border-white/[0.1]">
                      Secondary: Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES PREVIEW */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow={settings.services_section_eyebrow || DEFAULT_SETTINGS.services_section_eyebrow}
            title={settings.services_section_title || DEFAULT_SETTINGS.services_section_title}
            gradientWord={settings.services_section_gradient || DEFAULT_SETTINGS.services_section_gradient}
            description={settings.services_section_desc || DEFAULT_SETTINGS.services_section_desc}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {dbServices.length > 0
              ? dbServices.map((service, index) => {
                  const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
                  return (
                    <div
                      key={service.id}
                      className="glass-panel glass-panel-hover p-8 rounded-2xl group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-blue-500/[0.08] border border-blue-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white transition-all duration-200 shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                          {service.title}
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed font-normal">
                          {service.summary || service.description}
                        </p>
                      </div>
                      <Link
                        href="/services"
                        className="mt-8 pt-4 border-t border-white/[0.06] inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Explore service specs & deliverables</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  );
                })
              : [
                  {
                    icon: Layers,
                    title: "Tailored Software Development",
                    desc: "Every business runs differently. We build custom software shaped specifically around your actual routines, eliminating repetitive tasks and saving hours every week.",
                  },
                  {
                    icon: Smartphone,
                    title: "Web & Mobile Applications",
                    desc: "Fast, modern web portals and native-quality mobile apps on iPhone and Android. Built with clear ergonomics and sub-second load times.",
                  },
                  {
                    icon: Database,
                    title: "Business Management Systems",
                    desc: "Consolidate scattered spreadsheets and paper trails into a unified control dashboard: real-time stock, vendor purchases, accounting, and client records.",
                  },
                  {
                    icon: Cpu,
                    title: "Startup Product Development",
                    desc: "Have a novel venture idea? We help founders take concepts from whiteboard to working software in weeks, ready for real users and angel investors.",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud Setup & Integrations",
                    desc: "Bridge your daily tools with payment processors (Stripe, PayPal), courier APIs, and accounting software with automated data synchronization.",
                  },
                  {
                    icon: Headphones,
                    title: "Continuous Care & Support",
                    desc: "We stay by your side post-launch. Proactive security audits, software updates, automated backups, and direct engineer access whenever you need it.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="glass-panel glass-panel-hover p-8 rounded-2xl group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-blue-500/[0.08] border border-blue-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white transition-all duration-200 shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                      <Link
                        href="/services"
                        className="mt-8 pt-4 border-t border-white/[0.06] inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Explore service specs & deliverables</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>

      {/* SPECIALIZED READY-TO-USE SOLUTIONS */}
      <section className="py-24 sm:py-32 bg-[#080D1A] border-y border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow={settings.solutions_section_eyebrow || DEFAULT_SETTINGS.solutions_section_eyebrow}
            title={settings.solutions_section_title || DEFAULT_SETTINGS.solutions_section_title}
            gradientWord={settings.solutions_section_gradient || DEFAULT_SETTINGS.solutions_section_gradient}
            description={settings.solutions_section_desc || DEFAULT_SETTINGS.solutions_section_desc}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {dbSolutions.length > 0
              ? dbSolutions.slice(0, 3).map((sol, index) => {
                  const Icon = SOLUTION_ICONS[index % SOLUTION_ICONS.length];
                  return (
                    <div
                      key={sol.id}
                      className="glass-panel p-8 rounded-2xl flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-200"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/[0.08] text-cyan-400 border border-blue-500/20">
                            {sol.tag || "Enterprise"}
                          </span>
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-white mb-3">
                          {sol.title}
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed mb-6 font-normal">
                          {sol.summary || sol.description}
                        </p>
                      </div>
                      <Link
                        href="/solutions"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                      >
                        <span>See architecture & live demo</span>
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
                    desc: "Sub-2-second checkouts, barcode integration, and multi-branch inventory sync that continues operating 100% smoothly even during internet drops.",
                  },
                  {
                    tag: "Education",
                    icon: GraduationCap,
                    title: "School Management ERP",
                    desc: "Automated fee billing with SMS alerts, digital attendance rosters, examination gradebooks, and dedicated teacher-parent mobile portals.",
                  },
                  {
                    tag: "Operations",
                    icon: Briefcase,
                    title: "Business Operations ERP",
                    desc: "End-to-end management of procurement orders, multi-warehouse stock counts, supplier accounts, and real-time executive financial metrics.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="glass-panel p-8 rounded-2xl flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-200"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/[0.08] text-cyan-400 border border-blue-500/20">
                            {item.tag}
                          </span>
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed mb-6 font-normal">
                          {item.desc}
                        </p>
                      </div>
                      <Link
                        href="/solutions"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                      >
                        <span>See architecture & live demo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>

      {/* COMMERCIAL CTA BANNER */}
      <section className="py-24 sm:py-32">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-br from-[#111B30] via-[#0E1628] to-[#0A101E] border border-blue-500/30 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Ambient Accent Light */}
            <div className="ambient-glow w-96 h-96 -top-20 -right-20 bg-blue-600/20 pointer-events-none" />

            <div className="max-w-2xl relative z-10 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/[0.1] border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Next-Gen Enterprise Architecture</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                {settings.cta_banner_title || DEFAULT_SETTINGS.cta_banner_title}
              </h2>
              <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
                {settings.cta_banner_description || DEFAULT_SETTINGS.cta_banner_description}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:from-[#60A5FA] hover:to-[#22D3EE] shadow-[0_0_24px_rgba(6,182,212,0.45)] transition-all flex items-center gap-2"
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
