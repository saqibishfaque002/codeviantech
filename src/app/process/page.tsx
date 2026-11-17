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
} from "lucide-react";
import { getSiteSettings } from "@/lib/settings";
import { DEFAULT_SETTINGS } from "@/types/settings";

export const metadata = {
  title: "How We Work — CodvianTech",
  description:
    "A simple, four-step guide to how we work with you: from understanding your goals to designing, building, and launching your software.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "Listen & Plan",
    icon: Compass,
    title: "Understanding what you really need",
    description:
      "We sit down with you to learn about how your company works, where your team is losing time, and what success looks like for you. We ask the right questions early so there are no surprises down the line.",
    activities: [
      "Walking through your current workflows and pain points",
      "Deciding together which features to build first",
      "Selecting the right tech tools and cloud hosting for your needs",
      "Giving you a clear, fixed timeline and transparent budget",
    ],
    timeline: "First 1 to 2 Weeks",
    clientInvolvement: "A few friendly chats to share how your team works",
  },
  {
    step: "02",
    phase: "Design & Preview",
    icon: Layout,
    title: "Seeing your screens before we build",
    description:
      "Before writing any code, we sketch out clickable design prototypes. You can click through every screen on your phone or computer to see how it feels and suggest changes before anything is finalized.",
    activities: [
      "Creating simple layouts and screen flows",
      "Adding your branding, company colors, and logos",
      "Building a clickable prototype you can test yourself",
      "Refining the design until you feel 100% happy with it",
    ],
    timeline: "Weeks 2 to 4",
    clientInvolvement: "Trying out the prototype and sharing your honest thoughts",
  },
  {
    step: "03",
    phase: "Build & Test",
    icon: Code2,
    title: "Bringing your screens to life with clean code",
    description:
      "Our developers get to work building the actual software in focused, two-week stages. Every Friday, we show you what was built that week so you can watch your project come together step-by-step.",
    activities: [
      "Writing clean, reliable code that runs smoothly",
      "Testing everything on multiple phones, tablets, and computers",
      "Setting up a private preview link where you can test things anytime",
      "Short weekly check-in calls to show you live progress",
    ],
    timeline: "Weeks 4 to 10",
    clientInvolvement: "Quick weekly check-ins to see the latest working build",
  },
  {
    step: "04",
    phase: "Launch & Support",
    icon: Rocket,
    title: "Going live smoothly and staying by your side",
    description:
      "We handle the entire launch: moving your databases, setting up your domain, and making sure your team feels comfortable using the new tools. And we stick around to support you as your business grows.",
    activities: [
      "Moving your domain and setting up secure cloud servers",
      "Helping your team learn how to use the new features",
      "Setting up automated monitoring and daily backups",
      "Handing over all passwords, files, and complete code ownership to you",
    ],
    timeline: "Launch Day & Beyond",
    clientInvolvement: "Saying 'Let’s launch!' and watching your team use it",
  },
];

export default async function ProcessPage() {
  const settings = await getSiteSettings();

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={settings.process_eyebrow || DEFAULT_SETTINGS.process_eyebrow}
          title={settings.process_title || DEFAULT_SETTINGS.process_title}
          gradientWord={settings.process_gradient || DEFAULT_SETTINGS.process_gradient}
          description={settings.process_description || DEFAULT_SETTINGS.process_description}
        />

        {/* Process Steps */}
        <div className="my-16 space-y-12">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className="glass-panel p-8 sm:p-12 rounded-3xl border border-brand-line/80 hover:border-brand-blue/40 transition-colors relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-3 space-y-3">
                    <span className="font-heading font-extrabold text-5xl sm:text-6xl text-brand-blue/40 block">
                      {step.step}
                    </span>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{step.phase}</span>
                    </div>
                    <div className="text-xs text-brand-muted space-y-1 pt-2">
                      <p>
                        <strong className="text-white">Typical Timeline:</strong> {step.timeline}
                      </p>
                      <p>
                        <strong className="text-white">What we need from you:</strong> {step.clientInvolvement}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-9 space-y-4">
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-4 border-t border-brand-line">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                        What happens in this stage:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.activities.map((act, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                            <span>{act}</span>
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

        {/* Confidence Banner */}
        <div className="my-16 p-8 sm:p-10 rounded-2xl bg-brand-panel/90 border border-brand-blue/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                You own 100% of your software and source code
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted">
                No licensing lock-ins. All code, databases, and assets are completely transferred to your company upon project completion.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-brand-blue hover:bg-[#4375ee] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 flex-shrink-0"
          >
            <span>Start with a friendly chat</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
