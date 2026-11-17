import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Target,
  Shield,
  Zap,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { getSiteSettings } from "@/lib/settings";
import { DEFAULT_SETTINGS } from "@/types/settings";

export const metadata = {
  title: "About Us — CodvianTech",
  description:
    "Meet the team behind CodvianTech. We help businesses build thoughtful, dependable software that simplifies daily work.",
};

const VALUES = [
  {
    icon: Target,
    title: "Focusing on Real People",
    description:
      "We design tools for how humans actually work, not how textbooks say they should. Every screen we build is designed to be intuitive and hassle-free.",
  },
  {
    icon: Shield,
    title: "Safe & Dependable Code",
    description:
      "We take security and stability seriously. Your data is protected, backups are automated, and your systems stay up when you need them most.",
  },
  {
    icon: Zap,
    title: "Honest & Clear Communication",
    description:
      "You will never be left in the dark wondering about progress. We share regular updates and live demos so you can see your ideas taking shape every week.",
  },
  {
    icon: Globe,
    title: "Built to Grow With You",
    description:
      "We build on solid foundations using modern tools, making sure whatever we create today can easily expand as your business attracts more customers tomorrow.",
  },
];

const TECH_RADAR = [
  { category: "Web & Frontend", techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backends & Databases", techs: ["Node.js", "Python", "PHP / Laravel", "PostgreSQL", "MySQL"] },
  { category: "Mobile Apps", techs: ["React Native", "Flutter", "iOS", "Android"] },
  { category: "Cloud & Hosting", techs: ["Amazon Web Services (AWS)", "Google Cloud", "Docker", "Vercel"] },
];

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={settings.about_eyebrow || DEFAULT_SETTINGS.about_eyebrow}
          title={settings.about_title || DEFAULT_SETTINGS.about_title}
          gradientWord={settings.about_gradient || DEFAULT_SETTINGS.about_gradient}
          description={settings.about_description || DEFAULT_SETTINGS.about_description}
        />

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-16">
          <div className="lg:col-span-7 space-y-6 text-brand-muted text-base sm:text-lg leading-relaxed">
            <p>
              {settings.about_story_p1 || DEFAULT_SETTINGS.about_story_p1}
            </p>
            <p>
              {settings.about_story_p2 || DEFAULT_SETTINGS.about_story_p2}
            </p>
            <p>
              {settings.about_story_p3 || DEFAULT_SETTINGS.about_story_p3}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-line/60">
              <div>
                <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-white">
                  100%
                </span>
                <span className="text-xs text-brand-muted uppercase tracking-wider mt-1 block">
                  Code Ownership Given to You
                </span>
              </div>
              <div>
                <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-brand-cyan">
                  Direct
                </span>
                <span className="text-xs text-brand-muted uppercase tracking-wider mt-1 block">
                  Access to Real Developers
                </span>
              </div>
              <div>
                <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-brand-blue">
                  Global
                </span>
                <span className="text-xs text-brand-muted uppercase tracking-wider mt-1 block">
                  Remote Collaboration
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="glass-panel p-10 rounded-3xl border border-brand-blue/30 relative z-10 w-full text-center space-y-6 shadow-2xl">
              <div className="w-20 h-20 mx-auto rounded-3xl overflow-hidden shadow-xl shadow-brand-blue/30 drop-shadow-lg">
                <Logo
                  variant="app-icon"
                  size="xl"
                  className="w-20 h-20 object-cover"
                  alt="CodvianTech"
                />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">
                {settings.about_promise_title || DEFAULT_SETTINGS.about_promise_title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {settings.about_promise_desc || DEFAULT_SETTINGS.about_promise_desc}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Chat With Our Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="my-24">
          <SectionHeader
            eyebrow="What We Value"
            title="How we approach every single"
            gradientWord="project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="glass-panel p-8 rounded-2xl space-y-4 hover:border-brand-blue/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-cyan">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    {v.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TECH RADAR */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-brand-panel/80 border border-brand-line">
          <SectionHeader
            eyebrow="Our Toolbox"
            title="Proven technologies we use to build your"
            gradientWord="software."
            description="We stick to modern, reliable programming languages and cloud platforms that have proven track records for security and speed."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {TECH_RADAR.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="font-heading font-bold text-base text-brand-cyan uppercase tracking-wider text-xs border-b border-brand-line pb-2">
                  {item.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-brand-line/60 text-xs font-semibold text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
