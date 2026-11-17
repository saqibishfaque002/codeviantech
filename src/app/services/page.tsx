"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { useSettings } from "@/context/SettingsContext";
import { DEFAULT_SETTINGS } from "@/types/settings";
import {
  Layers,
  Smartphone,
  Database,
  Cpu,
  Cloud,
  Headphones,
  CheckCircle2,
  ArrowUpRight,
  Calculator,
  Sparkles,
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: "custom-software",
    icon: Layers,
    title: "Custom Software Development",
    tagline: "Software shaped around how your team actually works",
    description:
      "Most commercial software makes you change how you do business just to fit their rigid boxes. We build clean, reliable software that bends around your real routines, eliminating repetitive tasks and giving your staff tools they genuinely enjoy opening every morning.",
    features: [
      "Built specifically for your team’s daily steps and approvals",
      "Fast, dependable databases that keep your data safe and private",
      "Permissions so each team member sees only what they need",
      "Automated backups and safeguards to prevent any lost work",
    ],
    deliverables: ["Complete project blueprint", "100% full source code and ownership", "Easy-to-read documentation", "Smooth setup on your servers"],
  },
  {
    id: "web-mobile",
    icon: Smartphone,
    title: "Web & Mobile Applications",
    tagline: "Modern websites and apps that customers find easy to use",
    description:
      "A great app or web portal should never need a user manual. We create fast, clean digital experiences for phones and browsers that load in the blink of an eye and guide your customers naturally toward getting things done.",
    features: [
      "Fast web apps that look sharp on laptops, tablets, and phones",
      "Dedicated apps for both Apple iPhone and Android devices",
      "Clean dashboards and live notifications that keep people informed",
      "Offline support so field staff can still take notes without a signal",
    ],
    deliverables: ["Published apps on Apple App Store & Google Play", "Responsive web portal", "Complete design layouts", "Automated deployment setup"],
  },
  {
    id: "business-management",
    icon: Database,
    title: "Business Management (ERP & CRM)",
    tagline: "Bring your inventory, sales, and accounts into one place",
    description:
      "When different departments run on separate spreadsheets, numbers get lost and people get frustrated. We connect your daily sales, warehouse stock, vendor purchase orders, and customer messages into a single, clean overview where everything makes sense.",
    features: [
      "Invoicing and payment tracking with clear payment status",
      "Real-time inventory counts so you never run out of critical stock",
      "Customer contact histories so your team never misses a follow-up",
      "Simple weekly reports that show exactly where your business stands",
    ],
    deliverables: ["Fully configured management dashboard", "Safe transfer of your current data", "Hands-on walkthrough for your team", "Ongoing technical help agreement"],
  },
  {
    id: "product-engineering",
    icon: Cpu,
    title: "Startup Product Development",
    tagline: "Turn your early idea into a working product people can use",
    description:
      "When you have an exciting business idea, spending a year in planning can mean missing your window. We help founders turn napkin sketches into a polished, working first version in just a few short weeks, so you can start talking to real customers and investors right away.",
    features: [
      "Clickable screen prototypes to test concepts before writing code",
      "Focused feature planning to build what matters most first",
      "Weekly video check-ins so you see live progress every Friday",
      "Built-in visitor analytics to see how people actually use the product",
    ],
    deliverables: ["Live working application ready for users", "Demo walkthrough video for investors", "User feedback analytics", "A clear roadmap for future updates"],
  },
  {
    id: "cloud-integrations",
    icon: Cloud,
    title: "Cloud Infrastructure & Tool Connections",
    tagline: "Make sure all your business tools talk to each other cleanly",
    description:
      "Your company already relies on different tools for email, payments, and shipping. We build safe, reliable bridges between them so you never have to copy and paste customer details between three different windows ever again.",
    features: [
      "Connections with payment processors like Stripe, PayPal, and banks",
      "Reliable hosting setup on modern cloud servers like AWS and Google Cloud",
      "Automatic data syncing between your website and your internal tools",
      "Strict data protection so customer information stays secure",
    ],
    deliverables: ["Automated cloud server configuration", "Secure connection setup", "Security verification check", "Step-by-step recovery plan"],
  },
  {
    id: "ongoing-support",
    icon: Headphones,
    title: "Care & Long-Term Technical Support",
    tagline: "A dependable technical team ready whenever you need us",
    description:
      "Good software shouldn't stop receiving care once it goes live. Our support plans make sure your platform stays fast, up-to-date, and completely secure, giving you peace of mind that a team of real developers is watching over your systems 24/7.",
    features: [
      "Around-the-clock monitoring to catch and fix issues before users notice",
      "Regular software security updates and bug fixes",
      "Fast response whenever your staff has an urgent question",
      "Dedicated developer hours every month to add new small features",
    ],
    deliverables: ["Monthly health check summary", "Direct chat channel with our engineers", "Staging environment for safe testing", "Regular automated backup checks"],
  },
];

export default function ServicesPage() {
  const settings = useSettings();
  const [platform, setPlatform] = useState<string>("web");
  const [scope, setScope] = useState<string>("mvp");
  const [cloudNeeded, setCloudNeeded] = useState<boolean>(true);

  const baseCost = platform === "web" ? 12000 : platform === "mobile" ? 18000 : 25000;
  const scopeMultiplier = scope === "mvp" ? 1 : scope === "full" ? 1.8 : 2.5;
  const cloudCost = cloudNeeded ? 3500 : 0;
  const totalMin = Math.round(baseCost * scopeMultiplier + cloudCost);
  const totalMax = Math.round(totalMin * 1.4);

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={settings.services_section_eyebrow || DEFAULT_SETTINGS.services_section_eyebrow}
          title={settings.services_section_title || DEFAULT_SETTINGS.services_section_title}
          gradientWord={settings.services_section_gradient || DEFAULT_SETTINGS.services_section_gradient}
          description={settings.services_section_desc || DEFAULT_SETTINGS.services_section_desc}
        />

        <div className="space-y-16 my-16">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                id={service.id}
                className="glass-panel p-8 sm:p-12 rounded-3xl border border-brand-line/80 hover:border-brand-blue/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm font-semibold text-brand-cyan mt-1">
                        {service.tagline}
                      </p>
                    </div>
                    <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                        What you get with this service:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 rounded-2xl bg-brand-panel/90 border border-brand-line space-y-6">
                    <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                      What we hand over to you:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs font-medium text-brand-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-brand-line">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-[#3366e2] hover:shadow-lg hover:shadow-brand-blue/25 transition-all"
                      >
                        <span>Discuss this with our team</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE SCOPE ESTIMATOR */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c1a32] via-[#09152b] to-[#061021] border border-brand-blue/40 shadow-2xl relative overflow-hidden">
          <div className="ambient-glow w-72 h-72 top-0 right-0 bg-brand-cyan/15" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Ballpark Project Estimator</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Get an honest estimate of what your project might cost
            </h3>
            <p className="text-sm text-brand-muted mt-2">
              Select your rough requirements below to see a realistic starting budget range. We believe in being transparent about numbers right from the start.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  1. What are we building?
                </label>
                <div className="space-y-2">
                  {[
                    { id: "web", label: "Web Portal or Web App" },
                    { id: "mobile", label: "Mobile App (iPhone & Android)" },
                    { id: "enterprise", label: "Connected Business ERP" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPlatform(item.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-colors ${
                        platform === item.id
                          ? "bg-brand-blue/20 border-brand-blue text-white"
                          : "bg-slate-900/60 border-brand-line text-brand-muted hover:border-brand-line"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  2. How far along is the project?
                </label>
                <div className="space-y-2">
                  {[
                    { id: "mvp", label: "A quick first version (4 to 6 weeks)" },
                    { id: "full", label: "A full, feature-rich platform" },
                    { id: "enterprise", label: "Multi-branch, large team system" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setScope(item.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-colors ${
                        scope === item.id
                          ? "bg-brand-blue/20 border-brand-blue text-white"
                          : "bg-slate-900/60 border-brand-line text-brand-muted hover:border-brand-line"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  3. Cloud hosting & care plan
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setCloudNeeded(!cloudNeeded)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-colors ${
                      cloudNeeded
                        ? "bg-brand-cyan/20 border-brand-cyan text-white"
                        : "bg-slate-900/60 border-brand-line text-brand-muted"
                    }`}
                  >
                    {cloudNeeded ? "✓ Cloud Setup & Care Plan Included" : "+ Standard Handoff Only"}
                  </button>
                  <p className="text-[11px] text-slate-400 leading-relaxed pt-2">
                    Includes server configuration, security tests, and our team standing by after launch.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-brand-blue/50 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs text-brand-muted uppercase tracking-wider">
                  Realistic Starting Range:
                </span>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-cyan mt-1">
                  ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}{" "}
                  <span className="text-xs text-slate-400 font-normal">USD</span>
                </div>
              </div>

              <Link
                href={`/contact?budget=${encodeURIComponent(`$${totalMin.toLocaleString()} - $${totalMax.toLocaleString()}`)}`}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Let’s Talk About This Budget</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
