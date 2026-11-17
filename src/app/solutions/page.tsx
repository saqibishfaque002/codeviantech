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
} from "lucide-react";

export const metadata = {
  title: "Industry Solutions — CodvianTech",
  description:
    "Explore our complete, ready-to-use software solutions for retail stores, schools, operations teams, and healthcare practices.",
};

const SOLUTIONS_DATA = [
  {
    id: "pos",
    tag: "Retail & Dining",
    icon: Store,
    title: "Point of Sale (POS) Systems",
    subtitle: "Fast checkouts, live stock updates, and happy customers",
    description:
      "A fast, modern checkout system built for supermarkets, retail shops, and busy restaurants. It works smoothly on touchscreens, tablets, and phones, and keeps recording sales even when your internet connection drops.",
    highlights: [
      "Instant barcode scanning and receipt printing without freezing",
      "Live inventory counts across multiple store branches",
      "Handles cash, cards, split payments, and customer loyalty points",
      "Daily sales summaries so you know exactly what sold well",
    ],
    metrics: [
      { label: "Checkout Time", value: "Under 2 seconds" },
      { label: "Works Offline", value: "Yes, 100%" },
      { label: "Hardware Supported", value: "Tablets, PC, Mobile" },
    ],
  },
  {
    id: "school-erp",
    tag: "Schools & Academies",
    icon: GraduationCap,
    title: "School & College Management",
    subtitle: "Bring admissions, student fees, and gradebooks together",
    description:
      "A simple, connected system for schools, colleges, and academies. It takes the headache out of fee collection, student attendance, exam report cards, and parent updates.",
    highlights: [
      "Online fee payments with automated SMS reminders for parents",
      "Quick attendance tracking with instant parent notifications",
      "Digital gradebooks and one-click printable report cards",
      "Easy-to-use portals for teachers, students, and parents",
    ],
    metrics: [
      { label: "Staff Time Saved", value: "Up to 60%" },
      { label: "Fee Collection", value: "On-time & automated" },
      { label: "Parent Updates", value: "Direct SMS & Portal" },
    ],
  },
  {
    id: "enterprise-erp",
    tag: "Manufacturing & Wholesale",
    icon: Briefcase,
    title: "Complete Business ERP",
    subtitle: "Full visibility over your warehouse, orders, and finances",
    description:
      "Custom business management software for distributors, wholesalers, and manufacturers. Stop switching between spreadsheets and see your stock, purchases, and invoices in one clear dashboard.",
    highlights: [
      "Track supplier purchase orders, quotations, and approvals",
      "Know where every item is across multiple warehouse locations",
      "Simple bookkeeping that helps your accountant stay organized",
      "Executive summaries showing revenue and top-selling products",
    ],
    metrics: [
      { label: "Inventory Accuracy", value: "Over 99%" },
      { label: "Order Processing", value: "Twice as fast" },
      { label: "Reporting", value: "Real-time" },
    ],
  },
  {
    id: "clinic-ehr",
    tag: "Clinics & Healthcare",
    icon: Activity,
    title: "Clinic & Patient Management",
    subtitle: "Smooth patient appointments, digital prescriptions, and billing",
    description:
      "Built for doctors, dentists, and outpatient clinics. It makes booking appointments painless for patients while keeping electronic health records strictly confidential and easy to find.",
    highlights: [
      "Online appointment booking with automated WhatsApp and SMS reminders",
      "Digital medical history logs, test results, and prescription notes",
      "Clear patient billing, receipts, and insurance records",
      "Completely encrypted and private patient record storage",
    ],
    metrics: [
      { label: "Missed Appointments", value: "Reduced by 40%" },
      { label: "Patient Privacy", value: "Strictly encrypted" },
      { label: "Booking Ease", value: "24/7 online" },
    ],
  },
];

export default async function SolutionsPage() {
  const settings = await getSiteSettings();

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={settings.solutions_section_eyebrow || DEFAULT_SETTINGS.solutions_section_eyebrow}
          title={settings.solutions_section_title || DEFAULT_SETTINGS.solutions_section_title}
          gradientWord={settings.solutions_section_gradient || DEFAULT_SETTINGS.solutions_section_gradient}
          description={settings.solutions_section_desc || DEFAULT_SETTINGS.solutions_section_desc}
        />

        <div className="space-y-16 my-16">
          {SOLUTIONS_DATA.map((sol) => {
            const Icon = sol.icon;

            return (
              <div
                key={sol.id}
                id={sol.id}
                className="glass-panel p-8 sm:p-12 rounded-3xl border border-brand-line/80 hover:border-brand-blue/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-cyan">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-panel border border-brand-line text-brand-muted">
                        {sol.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                      {sol.title}
                    </h3>
                    <p className="text-sm font-semibold text-brand-cyan">
                      {sol.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                      {sol.description}
                    </p>

                    <div className="pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sol.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 p-6 rounded-2xl bg-brand-panel/95 border border-brand-line space-y-6">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-muted">
                      What you can expect:
                    </h4>

                    <div className="grid grid-cols-1 gap-3">
                      {sol.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3 rounded-xl bg-slate-900/80 border border-brand-line/60 flex items-center justify-between"
                        >
                          <span className="text-xs text-brand-muted">{m.label}</span>
                          <span className="font-heading font-bold text-sm text-white">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/contact?service=${encodeURIComponent(sol.title)}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-blue to-brand-cyan text-slate-950 hover:brightness-110 transition-all"
                      >
                        <Sparkles className="w-4 h-4 text-slate-950" />
                        <span>Ask for a live demonstration</span>
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
