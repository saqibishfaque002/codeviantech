"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { SiteSettings, DEFAULT_SETTINGS } from "@/types/settings";

const SettingsContext = createContext<SiteSettings>(DEFAULT_SETTINGS);

export function SettingsProvider({
  settings,
  children,
}: {
  settings: SiteSettings;
  children: ReactNode;
}) {
  return (
    <SettingsContext.Provider value={settings || DEFAULT_SETTINGS}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SiteSettings {
  const context = useContext(SettingsContext);
  return context || DEFAULT_SETTINGS;
}
