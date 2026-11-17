import { queryDb } from "./db";
import { SiteSettings, DEFAULT_SETTINGS } from "@/types/settings";

export { type SiteSettings, DEFAULT_SETTINGS } from "@/types/settings";

/**
 * Dynamically fetches live site settings from MySQL database `settings` table.
 * Merges loaded values directly over DEFAULT_SETTINGS.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const rows = await queryDb<{ key: string; value: string }>(
      "SELECT `key`, `value` FROM settings"
    );

    if (!rows || rows.length === 0) {
      return DEFAULT_SETTINGS;
    }

    const settingsMap: Record<string, string> = { ...DEFAULT_SETTINGS };
    for (const row of rows) {
      if (row.key && row.value !== null && row.value !== undefined) {
        settingsMap[row.key] = row.value;
      }
    }

    return settingsMap as SiteSettings;
  } catch (err) {
    console.error("[getSiteSettings error]:", err);
    return DEFAULT_SETTINGS;
  }
}

export interface DbService {
  id: number;
  title: string;
  slug: string;
  summary: string;
  description: string;
  is_active: number;
  sort_order: number;
}

export interface DbSolution {
  id: number;
  title: string;
  tag: string;
  summary: string;
  description: string;
  is_active: number;
}

/**
 * Dynamically fetches active services from MySQL database.
 */
export async function getPublishedServices(): Promise<DbService[]> {
  try {
    const rows = await queryDb<DbService>(
      "SELECT id, title, slug, summary, description, is_active, sort_order FROM services WHERE is_active = 1 ORDER BY sort_order ASC, id ASC"
    );
    return rows || [];
  } catch (err) {
    console.error("[getPublishedServices error]:", err);
    return [];
  }
}

/**
 * Dynamically fetches active solutions from MySQL database.
 */
export async function getPublishedSolutions(): Promise<DbSolution[]> {
  try {
    const rows = await queryDb<DbSolution>(
      "SELECT id, title, tag, summary, description, is_active FROM solutions WHERE is_active = 1 ORDER BY id ASC"
    );
    return rows || [];
  } catch (err) {
    console.error("[getPublishedSolutions error]:", err);
    return [];
  }
}
