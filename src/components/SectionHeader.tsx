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
  return (
    <div className={`max-w-3xl mb-12 ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-brand-blue text-xs font-bold tracking-widest uppercase mb-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="w-5 h-px bg-brand-cyan inline-block" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
        {title}{" "}
        {gradientWord && <span className="gradient-text">{gradientWord}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
