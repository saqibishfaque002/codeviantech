"use client";

import React from "react";

export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";
export type LogoVariant = "full" | "mark-only" | "app-icon" | "monochrome" | "brand-text";
export type LogoMode = "dark" | "light" | "auto";

export interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  mode?: LogoMode;
  className?: string;
  priority?: boolean;
  alt?: string;
}

const MARK_SIZE_CLASSES: Record<LogoSize, string> = {
  xs: "w-5 h-5",
  sm: "w-6 h-6 sm:w-7 sm:h-7",
  md: "w-7 h-7 sm:w-8 sm:h-8",
  lg: "w-10 h-10 sm:w-11 sm:h-11",
  xl: "w-14 h-14 sm:w-16 sm:h-16",
};

const TEXT_SIZE_CLASSES: Record<LogoSize, string> = {
  xs: "text-sm",
  sm: "text-base",
  md: "text-lg sm:text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

const APP_ICON_SIZE_CLASSES: Record<LogoSize, string> = {
  xs: "w-6 h-6 rounded-md",
  sm: "w-8 h-8 rounded-lg",
  md: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl",
  lg: "w-12 h-12 rounded-2xl",
  xl: "w-16 h-16 sm:w-20 sm:h-20 rounded-3xl",
};

export default function Logo({
  size = "md",
  variant = "full",
  mode = "auto",
  className = "",
  priority = false,
  alt = "CodvianTech",
}: LogoProps) {
  // 1. Mark-only variant (standalone 3D C emblem with transparent background)
  if (variant === "mark-only") {
    const sizeClass = MARK_SIZE_CLASSES[size];
    return (
      <img
        src="/assets/brand/logo-mark.png"
        alt={alt}
        className={`${sizeClass} object-contain flex-shrink-0 select-none ${className}`}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  // 2. App-icon / Squircle avatar variant
  if (variant === "app-icon") {
    const sizeClass = APP_ICON_SIZE_CLASSES[size];
    return (
      <img
        src="/assets/brand/app-icon.png"
        alt={alt}
        className={`${sizeClass} object-cover flex-shrink-0 select-none shadow-md shadow-blue-500/20 ${className}`}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  // 3. High-Fidelity Brand Logo: 3D 'C' Emblem + "Codvian" (white) + "Tech" (vibrant cyan)
  // Matching exact prompt: "Top-Left: The 3D-like, layered, spiraling 'C' emblem in vibrant cyan and blue gradients, followed by 'Codvian' in white and 'Tech' in vibrant cyan"
  const markSize = MARK_SIZE_CLASSES[size];
  const textSize = TEXT_SIZE_CLASSES[size];

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
        src="/assets/brand/logo-mark.png"
        alt={alt}
        className={`${markSize} object-contain flex-shrink-0 drop-shadow-[0_0_12px_rgba(6,182,212,0.45)]`}
        loading={priority ? "eager" : "lazy"}
      />
      <span className={`font-heading font-extrabold ${textSize} tracking-tight text-white`}>
        Codvian<span className="text-[#06B6D4]">Tech</span>
      </span>
    </span>
  );
}
