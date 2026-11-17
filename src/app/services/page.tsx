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
  Shield,
  Clock,
  Code2,
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: "custom-software",
    icon: Layers,
    title: "Custom Software Engineering",
    tagline: "Software shaped strictly around how your enterprise operates",
    description:
      "Off-the-shelf software forces your organization to compromise its operational edge. We architect bespoke, highly scalable software platforms that bend around your team's exact procedures—eliminating redundant paperwork, automating handoffs, and giving your employees software they truly appreciate.",
    features: [
      "Tailored to your exact business rules, approvals, and compliance requirements",
      "High-throughput relational databases with strict access control and auditing",
      "Granular role-based permissions (RBAC) ensuring data privacy across teams",
      "Automated point-in-time recovery and snapshot backups to protect critical assets",
    ],
    deliverables: [
      "Complete Technical Specification Blueprint",
      "100% Unencumbered Source Code Ownership",
      "Developer & API Architecture Documentation",
      "Turnkey Production Deployment & Cloud Setup",
    ],
  },
  {
    id: "web-mobile",
    icon: Smartphone,
    title: "Web & Mobile Applications",
    tagline: "Fast, resilient cross-platform apps that delight end users",
    description:
      "A superior digital product feels effortless from the first click. We craft lightning-fast web applications and native-feel mobile apps for iOS and Android that maintain 60fps animations, intuitive ergonomics, and offline capability for users on the move.",
    features: [
      "Sub-second load times optimized for desktop, tablet, and mobile displays",
      "Native Android and iOS mobile app delivery via React Native and Flutter",
      "Real-time reactive dashboards with instant push and websocket updates",
      "Offline cache support allowing field operations without active connectivity",
    ],
    deliverables: [
      "App Store & Google Play Store Submission",
      "Fully Responsive Web Portal (Next.js)",
      "Design System & UI Component Library",
      "Automated CI/CD Deployment Pipeline",
    ],
  },
  {
    id: "business-management",
    icon: Database,
    title: "Enterprise ERP & CRM Systems",
    tagline: "Unify inventory, billing, purchase orders, and customer lifecycles",
    description:
      "Disconnected spreadsheets and isolated software create blind spots that cost businesses millions in lost revenue. We unify your daily transactions, multi-warehouse inventory, procurement pipelines, and customer interactions into a single, high-fidelity operational cockpit.",
    features: [
      "Automated billing, invoicing, and real-time payment reconciliation",
      "Live multi-warehouse inventory counts with automatic low-stock alerts",
      "Centralized client communication records with SLA follow-up triggers",
      "Executive business intelligence dashboards with exportable financial KPIs",
    ],
    deliverables: [
      "Configured Enterprise Management Dashboard",
      "Safe Migration & Sanitization of Legacy Data",
      "Comprehensive Team Training & Video Guides",
      "Dedicated Technical Support Agreement",
    ],
  },
  {
    id: "product-engineering",
    icon: Cpu,
    title: "Startup MVP & Product Engineering",
    tagline: "Translate napkin concepts into market-tested software in weeks",
    description:
      "When building a new digital product, slow iteration kills momentum. We help ambitious founders engineer high-polish, production-grade Minimum Viable Products (MVPs) in 4 to 8 weeks, giving you the architectural foundation to impress early users and close institutional funding.",
    features: [
      "Rapid interactive Figma prototypes to validate UX before writing code",
      "Ruthlessly focused scope definition targeting your core value metric",
      "Weekly staging builds and video walkthroughs every single Friday",
      "Integrated telemetry and user tracking to observe real behavioral cohorts",
    ],
    deliverables: [
      "Production-Ready Software Deployed to Web/Mobile",
      "Investor-Ready Product Walkthrough Video",
      "Telemetry & Conversion Analytics Dashboard",
      "Quarterly Product Roadmap & Technical Debt Log",
    ],
  },
  {
    id: "cloud-integrations",
    icon: Cloud,
    title: "Cloud Infrastructure & API Integrations",
    tagline: "Ensure all your mission-critical tools communicate effortlessly",
    description:
      "Modern companies run on diverse SaaS platforms. We construct secure, hardened integration bridges between your internal systems and external services like Stripe, PayPal, Salesforce, logistics carriers, and accounting software, eliminating manual copy-pasting forever.",
    features: [
      "Production payment gateways (Stripe, PayPal, banking webhooks)",
      "Zero-downtime containerized infrastructure on AWS, Google Cloud, and Vercel",
      "Bi-directional background queues for asynchronous data synchronization",
      "SOC2-compliant credential vaults and strict cryptographic verification",
    ],
    deliverables: [
      "Infrastructure-as-Code (Terraform / Docker) Templates",
      "Secure API Gateway with Rate-Limiting & Auth",
      "Penetration Testing & Security Verification",
      "Disaster Recovery & Redundancy Playbook",
    ],
  },
  {
    id: "ongoing-support",
    icon: Headphones,
    title: "Continuous Care & Support Engineering",
    tagline: "A dedicated engineering team guarding your uptime 24/7",
    description:
      "Software requires diligent care to stay resilient against new threats and scaling bottlenecks. Our enterprise support contracts provide proactive security patching, database optimization, continuous dependency upgrades, and dedicated engineer hours for rapid feature enhancements.",
    features: [
      "24/7 automated synthetic uptime and health monitoring",
      "Regular vulnerability assessments and zero-day security patching",
      "Guaranteed emergency response SLAs for critical system outages",
      "Monthly allocation of engineering sprint hours for new minor features",
    ],
    deliverables: [
      "Monthly System Performance & Security Audit",
      "Direct Slack / Discord Channel with Lead Engineers",
      "Dedicated Staging Sandbox for Pre-release Testing",
      "Daily Automated Cloud Snapshots & Backup Verification",
    ],
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
  const totalMax = Math.round(totalMin * 1.35);

  return (
    <div className="py-20 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          eyebrow={settings.services_section_eyebrow || DEFAULT_SETTINGS.services_section_eyebrow}
          title={settings.services_section_title || DEFAULT_SETTINGS.services_section_title}
          gradientWord={settings.services_section_gradient || DEFAULT_SETTINGS.services_section_gradient}
          description={settings.services_section_desc || DEFAULT_SETTINGS.services_section_desc}
        />

        {/* DETAILED SERVICES LIST */}
        <div className="space-y-12 sm:space-y-16 my-16">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                id={service.id}
                className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/[0.08] hover:border-blue-500/35 transition-all duration-300 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Details & Features */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/[0.08] border border-blue-500/20 flex items-center justify-center text-cyan-400 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400 mt-1.5">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <div className="pt-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3.5 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Core Capabilities & Architecture:</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Commercial Deliverables & Action Card */}
                  <div className="lg:col-span-5 p-7 rounded-2xl bg-[#0B101D] border border-white/[0.08] space-y-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
                        Official Deliverables
                      </h4>
                      <span className="text-[11px] font-mono text-emerald-400">100% Owned</span>
                    </div>

                    <ul className="space-y-3">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{del}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 border-t border-white/[0.06]">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="btn-primary w-full text-xs font-bold py-3.5"
                      >
                        <span>Schedule Technical Consultation</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE SCOPE & BUDGET ESTIMATOR */}
        <div className="my-24 p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#0D1527] via-[#0A101E] to-[#070B14] border border-blue-500/30 shadow-2xl relative overflow-hidden">
          <div className="ambient-glow w-80 h-80 top-0 right-0 bg-blue-600/15 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
              <Calculator className="w-4 h-4" />
              <span>Interactive Scope Estimator</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Transparent Ballpark Project Calculator
            </h3>
            <p className="text-sm sm:text-base text-brand-muted mt-2 max-w-2xl leading-relaxed">
              We believe in upfront, transparent pricing. Configure your high-level parameters below to get an honest ballpark estimate for professional delivery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              {/* Step 1 */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  1. Platform Target
                </label>
                <div className="space-y-2.5">
                  {[
                    { id: "web", label: "Web Portal / SaaS App", badge: "Next.js 16" },
                    { id: "mobile", label: "iOS & Android Mobile App", badge: "Cross-Platform" },
                    { id: "enterprise", label: "Full ERP / Multi-System", badge: "Unified Suite" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPlatform(item.id)}
                      className={`w-full text-left p-3.5 rounded-xl text-xs font-medium border transition-all duration-200 flex flex-col gap-1 ${
                        platform === item.id
                          ? "bg-blue-500/15 border-blue-500 text-white shadow-sm"
                          : "bg-white/[0.02] border-white/[0.08] text-brand-muted hover:border-white/[0.15]"
                      }`}
                    >
                      <span className="font-semibold text-slate-200">{item.label}</span>
                      <span className="text-[10px] text-cyan-400 font-mono">{item.badge}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Project Maturity
                </label>
                <div className="space-y-2.5">
                  {[
                    { id: "mvp", label: "Rapid MVP / v1.0 Launch", badge: "4 to 6 Weeks" },
                    { id: "full", label: "Full Commercial Platform", badge: "8 to 12 Weeks" },
                    { id: "enterprise", label: "Multi-Region Enterprise", badge: "12+ Weeks" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setScope(item.id)}
                      className={`w-full text-left p-3.5 rounded-xl text-xs font-medium border transition-all duration-200 flex flex-col gap-1 ${
                        scope === item.id
                          ? "bg-blue-500/15 border-blue-500 text-white shadow-sm"
                          : "bg-white/[0.02] border-white/[0.08] text-brand-muted hover:border-white/[0.15]"
                      }`}
                    >
                      <span className="font-semibold text-slate-200">{item.label}</span>
                      <span className="text-[10px] text-cyan-400 font-mono">{item.badge}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  3. Production Readiness
                </label>
                <div className="space-y-2.5">
                  <button
                    onClick={() => setCloudNeeded(!cloudNeeded)}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                      cloudNeeded
                        ? "bg-cyan-500/15 border-cyan-500/60 text-white shadow-sm"
                        : "bg-white/[0.02] border-white/[0.08] text-brand-muted"
                    }`}
                  >
                    <div className="font-semibold text-slate-200">
                      {cloudNeeded ? "✓ Cloud Setup & Care Plan" : "+ Code Handoff Only"}
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                      Includes containerized server setup, automated backups, and 30-day post-launch warranty.
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* ESTIMATE OUTPUT TILE */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B101D] border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <span className="text-xs text-brand-muted uppercase tracking-wider font-semibold block mb-1">
                  Estimated Investment Range:
                </span>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-cyan-400">
                  ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}{" "}
                  <span className="text-xs text-slate-400 font-mono font-normal">USD</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Fixed quotes guaranteed upon architectural review. Zero hidden fees.
                </p>
              </div>

              <Link
                href={`/contact?budget=${encodeURIComponent(`$${totalMin.toLocaleString()} - $${totalMax.toLocaleString()}`)}`}
                className="btn-primary px-7 py-4 text-xs font-bold uppercase tracking-wider flex-shrink-0"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span>Discuss This Scope With Our Engineers</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
