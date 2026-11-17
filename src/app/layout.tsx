import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/context/ToastContext";
import { SettingsProvider } from "@/context/SettingsContext";
import { getSiteSettings } from "@/lib/settings";

// Enforce 100% dynamic rendering with zero stale caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const companyName = settings.company_name || "CodvianTech";

  return {
    title: `${companyName} — Software Development & Digital Solutions`,
    description: settings.hero_description,
    keywords: [
      "custom software development",
      "web development company",
      "mobile app developers",
      "business management software",
      "point of sale systems",
      "school software",
    ],
    authors: [{ name: `${companyName} Team` }],
    icons: {
      icon: [
        { url: "/assets/brand/favicon.ico" },
        { url: "/assets/brand/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/assets/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/assets/brand/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      ],
      apple: [
        { url: "/assets/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        {
          rel: "apple-touch-icon-precomposed",
          url: "/assets/brand/apple-touch-icon-precomposed.png",
        },
      ],
    },
    manifest: "/assets/brand/site.webmanifest",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" className={`dark ${dmSans.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/assets/brand/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/brand/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/brand/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/assets/brand/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/brand/apple-touch-icon.png" />
        <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/assets/brand/apple-touch-icon-precomposed.png" />
        <link rel="manifest" href="/assets/brand/site.webmanifest" />
        <meta name="theme-color" content="#090D16" />
        <meta name="msapplication-TileColor" content="#090D16" />
        <style dangerouslySetInnerHTML={{ __html: `
          nextjs-portal,
          [data-nextjs-dev-tools-button],
          [data-nextjs-dev-tools-trigger],
          [data-next-badge],
          div[data-nextjs-dev-tools],
          div[data-nextjs-router-panel],
          button[data-nextjs-dev-tools-button] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        `}} />
      </head>
      <body className="bg-brand-bg text-brand-text min-h-screen flex flex-col font-sans antialiased selection:bg-brand-blue/30 selection:text-white relative">
        <div className="fixed inset-0 bg-grid-pattern bg-dot-fade pointer-events-none z-0 opacity-40" />
        <SettingsProvider settings={settings}>
          <ToastProvider>
            <Navbar settings={settings} />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer settings={settings} />
          </ToastProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
