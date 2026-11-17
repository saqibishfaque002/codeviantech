import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  gradientWord?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  gradientWord,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.08] border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white tracking-tight leading-[1.15]">
        {title}{" "}
        {gradientWord && <span className="gradient-text">{gradientWord}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
