"use client";

import React from "react";
import Image from "next/image";

export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";
export type LogoVariant = "full" | "mark-only" | "app-icon" | "monochrome";
export type LogoMode = "dark" | "light" | "auto";

export interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  mode?: LogoMode;
  className?: string;
  priority?: boolean;
  alt?: string;
}

const FULL_SIZE_CLASSES: Record<LogoSize, string> = {
  xs: "h-6 w-auto",
  sm: "h-7 sm:h-8 w-auto",
  md: "h-8 sm:h-10 w-auto",
  lg: "h-10 sm:h-12 w-auto",
  xl: "h-12 sm:h-16 w-auto",
};

const MARK_SIZE_CLASSES: Record<LogoSize, string> = {
  xs: "w-6 h-6",
  sm: "w-7 h-7 sm:w-8 sm:h-8",
  md: "w-8 h-8 sm:w-10 sm:h-10",
  lg: "w-10 h-10 sm:w-12 sm:h-12",
  xl: "w-14 h-14 sm:w-16 sm:h-16",
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
        className={`${sizeClass} object-cover flex-shrink-0 select-none shadow-md shadow-brand-blue/20 ${className}`}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  // 3. Monochrome variant (white for dark mode, dark slate for light mode)
  if (variant === "monochrome") {
    const sizeClass = FULL_SIZE_CLASSES[size];
    if (mode === "dark") {
      return (
        <img
          src="/assets/brand/logo-mono-dark.png"
          alt={alt}
          className={`${sizeClass} object-contain select-none ${className}`}
          loading={priority ? "eager" : "lazy"}
        />
      );
    }
    if (mode === "light") {
      return (
        <img
          src="/assets/brand/logo-mono-light.png"
          alt={alt}
          className={`${sizeClass} object-contain select-none ${className}`}
          loading={priority ? "eager" : "lazy"}
        />
      );
    }
    // Auto mode: show dark on dark backgrounds, light on light backgrounds
    return (
      <span className={`inline-flex items-center ${className}`}>
        <img
          src="/assets/brand/logo-mono-dark.png"
          alt={alt}
          className={`${sizeClass} object-contain select-none hidden dark:block`}
          loading={priority ? "eager" : "lazy"}
        />
        <img
          src="/assets/brand/logo-mono-light.png"
          alt={alt}
          className={`${sizeClass} object-contain select-none block dark:hidden`}
          loading={priority ? "eager" : "lazy"}
        />
      </span>
    );
  }

  // 4. Full Primary Logo variant (3D C Mark + CodvianTech typography)
  const sizeClass = FULL_SIZE_CLASSES[size];

  if (mode === "dark") {
    return (
      <img
        src="/assets/brand/logo-dark.png"
        alt={alt}
        className={`${sizeClass} object-contain select-none ${className}`}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  if (mode === "light") {
    return (
      <img
        src="/assets/brand/logo-light.png"
        alt={alt}
        className={`${sizeClass} object-contain select-none ${className}`}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  // Auto mode: responsive between dark / light mode
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/assets/brand/logo-dark.png"
        alt={alt}
        className={`${sizeClass} object-contain select-none hidden dark:block`}
        loading={priority ? "eager" : "lazy"}
      />
      <img
        src="/assets/brand/logo-light.png"
        alt={alt}
        className={`${sizeClass} object-contain select-none block dark:hidden`}
        loading={priority ? "eager" : "lazy"}
      />
    </span>
  );
}
