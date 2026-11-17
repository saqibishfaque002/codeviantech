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
  Code2,
  Users,
  Award,
  CheckCircle2,
} from "lucide-react";
import { getSiteSettings } from "@/lib/settings";
import { DEFAULT_SETTINGS } from "@/types/settings";

export const metadata = {
  title: "About Us — CodvianTech",
  description:
    "Meet the engineering team behind CodvianTech. We build thoughtful, dependable enterprise software and digital products with 100% code ownership.",
};

const VALUES = [
  {
    icon: Target,
    title: "Human-Centric Engineering",
    description:
      "We design tools for how humans actually operate, not how theory says they should. Every workflow we craft is engineered to be intuitive, fast, and friction-free.",
  },
  {
    icon: Shield,
    title: "Safe & Resilient Architecture",
    description:
      "Security, data privacy, and stability are non-negotiable. Automated backups, role-based access, and modern cloud encryption protect your mission-critical operations.",
  },
  {
    icon: Zap,
    title: "Transparent Collaboration",
    description:
      "Zero guesswork. You receive weekly video demos and working staging builds, collaborating directly with senior engineers who understand your domain.",
  },
  {
    icon: Globe,
    title: "Scalable Long-Term Systems",
    description:
      "We build on battle-tested architectures. What we deliver today can easily scale from hundreds to hundreds of thousands of users without requiring a total rewrite.",
  },
];

const TECH_RADAR = [
  { category: "Web & Frontend", techs: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5/CSS3"] },
  { category: "Backends & APIs", techs: ["Node.js", "Python / FastAPI", "PHP / Laravel", "REST APIs", "GraphQL", "WebSockets"] },
  { category: "Databases & Storage", techs: ["PostgreSQL", "MySQL", "Redis", "Supabase", "Prisma", "Elasticsearch"] },
  { category: "Mobile Apps", techs: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "PWA"] },
  { category: "Cloud & DevOps", techs: ["AWS", "Google Cloud", "Docker", "Vercel", "GitHub Actions", "Cloudflare"] },
];

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <div className="py-20 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          eyebrow={settings.about_eyebrow || DEFAULT_SETTINGS.about_eyebrow}
          title={settings.about_title || DEFAULT_SETTINGS.about_title}
          gradientWord={settings.about_gradient || DEFAULT_SETTINGS.about_gradient}
          description={settings.about_description || DEFAULT_SETTINGS.about_description}
        />

        {/* Story Section & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-16 sm:my-20">
          <div className="lg:col-span-7 space-y-6 text-brand-muted text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-white text-lg sm:text-xl font-medium leading-relaxed">
              {settings.about_story_p1 || DEFAULT_SETTINGS.about_story_p1}
            </p>
            <p>
              {settings.about_story_p2 || DEFAULT_SETTINGS.about_story_p2}
            </p>
            <p>
              {settings.about_story_p3 || DEFAULT_SETTINGS.about_story_p3}
            </p>

            {/* Credibility Metric Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/[0.08]">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-white">
                  100%
                </span>
                <span className="text-xs text-brand-muted uppercase tracking-wider mt-1 block font-semibold">
                  Full Code Ownership
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-cyan-400">
                  Direct
                </span>
                <span className="text-xs text-brand-muted uppercase tracking-wider mt-1 block font-semibold">
                  Senior Developer Access
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] col-span-2 sm:col-span-1">
                <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-blue-400">
                  Global
                </span>
                <span className="text-xs text-brand-muted uppercase tracking-wider mt-1 block font-semibold">
                  Remote Engineering
                </span>
              </div>
            </div>
          </div>

          {/* Promise Glass Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-blue-500/25 relative z-10 w-full text-center space-y-6 shadow-2xl">
              <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/[0.1] bg-[#090D16] flex items-center justify-center">
                <Logo
                  variant="mark-only"
                  size="md"
                  className="w-12 h-12 object-contain"
                  alt="CodvianTech"
                />
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  Our Engineering Creed
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  {settings.about_promise_title || DEFAULT_SETTINGS.about_promise_title}
                </h3>
              </div>

              <p className="text-sm text-brand-muted leading-relaxed font-normal">
                {settings.about_promise_desc || DEFAULT_SETTINGS.about_promise_desc}
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-xs uppercase tracking-wider font-bold py-3.5"
                >
                  <span>Consult Directly With Our Engineers</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="my-24 sm:my-32">
          <SectionHeader
            eyebrow="What Drives Us"
            title="How we approach every single"
            gradientWord="engagement."
            description="Our engineering principles guarantee your software is built right the first time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="glass-panel glass-panel-hover p-8 rounded-2xl space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/[0.08] border border-blue-500/20 flex items-center justify-center text-cyan-400 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-white">
                      {v.title}
                    </h4>
                    <p className="text-sm text-brand-muted leading-relaxed font-normal">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TECH RADAR / TOOLBOX */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-[#0B101D] border border-white/[0.08] shadow-2xl relative overflow-hidden">
          <SectionHeader
            eyebrow="Our Engineering Toolbox"
            title="Battle-tested technologies powering your"
            gradientWord="solutions."
            description="We select proven programming languages, frameworks, and cloud infrastructure known for longevity, security, and developer ecosystem support."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {TECH_RADAR.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-4">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-cyan-400 border-b border-white/[0.06] pb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span>{item.category}</span>
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg bg-[#090D16] border border-white/[0.08] hover:border-blue-500/30 text-xs font-semibold text-slate-200 transition-colors"
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
