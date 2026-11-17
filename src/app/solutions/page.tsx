import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { getSiteSettings } from "@/lib/settings";
import { DEFAULT_SETTINGS } from "@/types/settings";
import {
  Store,
  GraduationCap,
  Briefcase,
  Activity,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Industry Solutions — CodvianTech",
  description:
    "Explore our production-ready enterprise software solutions for retail stores, schools, operations teams, and healthcare practices.",
};

const SOLUTIONS_DATA = [
  {
    id: "pos",
    tag: "Retail & Hospitality",
    icon: Store,
    title: "Point of Sale (POS) Systems",
    subtitle: "Sub-2-second checkouts, multi-branch stock, and offline resilience",
    description:
      "A battle-tested checkout and retail management suite built for supermarkets, retail boutiques, and busy dining establishments. Engineered for touchscreen terminals, barcode scanners, and handheld tablets, with complete offline resilience so transactions never stop when connectivity drops.",
    highlights: [
      "Instant barcode scanning, thermal receipt printing, and cash drawer triggers",
      "Real-time synchronized inventory across multiple physical store locations",
      "Unified support for cash, credit/debit, split checks, and digital loyalty balances",
      "Automated end-of-day X/Z reports and sales telemetry for store managers",
    ],
    metrics: [
      { label: "Checkout Latency", value: "< 2.0s" },
      { label: "Offline Resilience", value: "100% Guaranteed" },
      { label: "Hardware Support", value: "PC, iOS, Android, POS Terminals" },
    ],
  },
  {
    id: "school-erp",
    tag: "Education & Academies",
    icon: GraduationCap,
    title: "School & College Management ERP",
    subtitle: "Unify admissions, tuition billing, student attendance, and gradebooks",
    description:
      "A comprehensive digital operating system for K-12 institutions, academies, and universities. Completely replaces cumbersome paper records with automated fee schedules, automated SMS attendance alerts, examination report generation, and dedicated portals for educators and guardians.",
    highlights: [
      "Online fee collection with automated parent WhatsApp and SMS reminders",
      "Biometric and manual student attendance with instant notification alerts",
      "Customizable examination grading schemes with one-click PDF report cards",
      "Dedicated role-based portals for administrators, teachers, and guardians",
    ],
    metrics: [
      { label: "Administrative Time Saved", value: "Up to 60%" },
      { label: "Fee Collection Rate", value: "98%+ On-Time" },
      { label: "Parent Notification Channel", value: "Direct SMS & WhatsApp" },
    ],
  },
  {
    id: "enterprise-erp",
    tag: "Manufacturing & Wholesale",
    icon: Briefcase,
    title: "Complete Enterprise Operations ERP",
    subtitle: "Full visibility across supply chains, warehouse stock, and finances",
    description:
      "Engineered specifically for manufacturers, distributors, and logistics wholesalers. Consolidate supplier purchase orders, multi-warehouse bin locations, batch tracking, and accounting balances into one unified cockpit without the bloat and prohibitive licensing of legacy ERP suites.",
    highlights: [
      "Supplier purchase order workflows, vendor quotes, and approval gates",
      "Multi-location bin inventory tracking with barcode and batch traceability",
      "General ledger accounting, tax-compliant invoicing, and financial audits",
      "Executive business intelligence dashboards tracking margin by SKU",
    ],
    metrics: [
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Order Processing Speed", value: "2.4x Faster" },
      { label: "Financial Reporting", value: "Real-Time Telemetry" },
    ],
  },
  {
    id: "clinic-ehr",
    tag: "Healthcare & Clinics",
    icon: Activity,
    title: "Clinical Practice & EHR System",
    subtitle: "Frictionless patient scheduling, digital health records, and billing",
    description:
      "Designed for medical practices, dental clinics, and specialized outpatient healthcare providers. Simplifies patient appointments while maintaining strictly confidential, encrypted Electronic Health Records (EHR), digital prescriptions, and insurance billing workflows.",
    highlights: [
      "Self-service online booking with automated WhatsApp and SMS appointment reminders",
      "Encrypted patient medical histories, clinical charting, and digital lab results",
      "Automated insurance claims preparation and itemized patient billing",
      "HIPAA-conscious encrypted data storage with role-based clinical permissions",
    ],
    metrics: [
      { label: "Patient No-Show Rate", value: "Reduced by 42%" },
      { label: "Data Encryption", value: "AES-256 at Rest & Transit" },
      { label: "Booking Accessibility", value: "24/7 Multi-Channel" },
    ],
  },
];

export default async function SolutionsPage() {
  const settings = await getSiteSettings();

  return (
    <div className="py-20 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          eyebrow={settings.solutions_section_eyebrow || DEFAULT_SETTINGS.solutions_section_eyebrow}
          title={settings.solutions_section_title || DEFAULT_SETTINGS.solutions_section_title}
          gradientWord={settings.solutions_section_gradient || DEFAULT_SETTINGS.solutions_section_gradient}
          description={settings.solutions_section_desc || DEFAULT_SETTINGS.solutions_section_desc}
        />

        <div className="space-y-12 sm:space-y-16 my-16">
          {SOLUTIONS_DATA.map((sol) => {
            const Icon = sol.icon;

            return (
              <div
                key={sol.id}
                id={sol.id}
                className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/[0.08] hover:border-blue-500/35 transition-all duration-300 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Solution Details */}
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-blue-500/[0.08] border border-blue-500/20 flex items-center justify-center text-cyan-400 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono">
                        {sol.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        {sol.title}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400 mt-1.5">
                        {sol.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
                      {sol.description}
                    </p>

                    <div className="pt-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3.5 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span>Core Operational Modules:</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sol.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Performance Metrics & Demo Action */}
                  <div className="lg:col-span-4 p-7 rounded-2xl bg-[#0B101D] border border-white/[0.08] space-y-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                        Performance Specs
                      </h4>
                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                    </div>

                    <div className="space-y-2.5">
                      {sol.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] flex items-center justify-between gap-3"
                        >
                          <span className="text-xs text-brand-muted">{m.label}</span>
                          <span className="font-heading font-bold text-xs sm:text-sm text-cyan-300 text-right">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-white/[0.06]">
                      <Link
                        href={`/contact?service=${encodeURIComponent(sol.title)}`}
                        className="btn-primary w-full text-xs font-bold py-3.5"
                      >
                        <Sparkles className="w-4 h-4 text-cyan-300" />
                        <span>Request Architectural Demo</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
