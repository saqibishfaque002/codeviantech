import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import {
  Compass,
  Layout,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";
import { getSiteSettings } from "@/lib/settings";
import { DEFAULT_SETTINGS } from "@/types/settings";

export const metadata = {
  title: "How We Work — CodvianTech",
  description:
    "A transparent, 4-stage engineering roadmap: from architectural discovery to wireframing, agile development, and production launch.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "Discovery & Blueprint",
    icon: Compass,
    title: "Understanding your operational realities",
    description:
      "We begin with deep technical discovery. We analyze your existing workflow bottlenecks, data structures, and user personas. By asking hard questions early, we eliminate architectural surprises and define clear fixed timelines.",
    activities: [
      "Mapping end-to-end data flows and approval chains",
      "Prioritizing high-leverage features for the initial release",
      "Selecting target cloud infrastructure, database engine, and tech stack",
      "Delivering a transparent architectural specification and fixed quote",
    ],
    timeline: "Weeks 1 – 2",
    clientInvolvement: "2 to 3 collaborative discovery sessions with key stakeholders",
  },
  {
    step: "02",
    phase: "Design & UX Validation",
    icon: Layout,
    title: "Clickable prototypes before writing a single line of code",
    description:
      "Before engineering begins, we design comprehensive, interactive prototypes in Figma. You test each workflow on your phone or workstation, giving feedback and confirming usability before code is written.",
    activities: [
      "Crafting high-fidelity design systems and responsive component libraries",
      "Validating user journey ergonomics and information architecture",
      "Building a clickable prototype for internal stakeholder review",
      "Refining UX flows until your team is 100% satisfied with the experience",
    ],
    timeline: "Weeks 2 – 4",
    clientInvolvement: "Hands-on walkthrough of clickable prototypes and design feedback",
  },
  {
    step: "03",
    phase: "Sprint Engineering & Staging",
    icon: Code2,
    title: "Agile sprints with live weekly progress demos",
    description:
      "Our senior developers implement your application in focused two-week sprints. Every Friday, we deploy to a private staging environment and record a video breakdown so you can test working software as it matures.",
    activities: [
      "Writing clean, modular TypeScript, Next.js, and API services",
      "Conducting automated unit, integration, and security checks",
      "Continuous deployment to your private staging cloud sandbox",
      "Weekly sprint review calls and direct communication in Slack",
    ],
    timeline: "Weeks 4 – 10",
    clientInvolvement: "Short 20-minute Friday check-in to review live staging demo",
  },
  {
    step: "04",
    phase: "Production Launch & Care",
    icon: Rocket,
    title: "Seamless cutover and long-term technical guardianship",
    description:
      "We orchestrate the entire production release: zero-downtime database cutover, DNS routing, SSL provisioning, and staff onboarding. Post-launch, our engineers remain standing by with monitoring and proactive maintenance.",
    activities: [
      "Zero-downtime database migration and DNS configuration",
      "Staff onboarding walkthroughs and comprehensive documentation handoff",
      "24/7 automated telemetry, anomaly alerts, and automated backups",
      "Complete transfer of repository access, credentials, and full IP ownership",
    ],
    timeline: "Launch Day & Beyond",
    clientInvolvement: "Official sign-off and celebration as your team goes live",
  },
];

export default async function ProcessPage() {
  const settings = await getSiteSettings();

  return (
    <div className="py-20 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          eyebrow={settings.process_eyebrow || DEFAULT_SETTINGS.process_eyebrow}
          title={settings.process_title || DEFAULT_SETTINGS.process_title}
          gradientWord={settings.process_gradient || DEFAULT_SETTINGS.process_gradient}
          description={settings.process_description || DEFAULT_SETTINGS.process_description}
        />

        {/* Process Steps */}
        <div className="my-16 sm:my-20 space-y-10 sm:space-y-12">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/[0.08] hover:border-blue-500/35 transition-all duration-300 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Step Metadata Left Column */}
                  <div className="lg:col-span-4 space-y-4">
                    <span className="font-heading font-extrabold text-5xl sm:text-6xl text-blue-500/30 block tracking-tight">
                      {step.step}
                    </span>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/[0.08] border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{step.phase}</span>
                    </div>

                    <div className="space-y-2.5 pt-2 text-xs">
                      <div className="flex items-start gap-2 text-slate-300">
                        <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-white block">Expected Duration:</strong>
                          <span className="text-brand-muted">{step.timeline}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-300">
                        <Users className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-white block">Your Commitment:</strong>
                          <span className="text-brand-muted">{step.clientInvolvement}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Activities Right Column */}
                  <div className="lg:col-span-8 space-y-4">
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
                      {step.description}
                    </p>

                    <div className="pt-4 border-t border-white/[0.06]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3.5 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Key Deliverables & Milestones:</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.activities.map((act, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Confidence Banner */}
        <div className="my-16 sm:my-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#111B30] to-[#0A101E] border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-xl text-white tracking-tight">
                100% Unencumbered Source Code & IP Ownership
              </h4>
              <p className="text-sm text-brand-muted mt-1 leading-relaxed max-w-xl font-normal">
                No proprietary lock-ins or surprise fees. All code, databases, design assets, and cloud credentials are comprehensively transferred to your organization upon project completion.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="btn-primary text-xs uppercase tracking-wider font-bold py-3.5 px-6 flex-shrink-0"
          >
            <span>Book Architectural Discovery</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
