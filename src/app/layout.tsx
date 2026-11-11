import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Space_Mono } from "next/font/google";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";
import StickyBottomNav from "@/components/StickyBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

// Caviar Dreams es la tipografía real de marca del doctor (confirmada en su
// propio PDF de identidad, "PALETA DE COLORES DR JAIME GOMEZ"), ya
// licenciada y usada en el proyecto (dr-aram-alarcon, dra-tania-diestel) —
// fidelidad al asset real de marca tiene prioridad sobre evitar repetir una
// tipografía (mismo criterio ya aplicado al rojo compartido de Tania con
// Gregorio, AGENTS.md/registro-disenos.md). Se empareja con Space Mono
// (nueva en el registro) solo para acentos de precisión clínica (cédulas,
// eyebrows, cifras) — pareja completa distinta a Aram (+Oxanium) y Tania
// (+Allura).
const caviarDreams = localFont({
  src: [
    { path: "../assets/fonts/CaviarDreams-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/CaviarDreams-Italic.ttf", weight: "400", style: "italic" },
    { path: "../assets/fonts/CaviarDreams-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/CaviarDreams-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-caviar",
  display: "swap",
});
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], display: "swap", variable: "--font-space-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${doctor.title} ${doctor.name} — ${doctor.specialty} en ${doctor.city}`,
    template: `%s | ${doctor.title} ${doctor.name}`,
  },
  description: `${doctor.specialistTitle}, ${doctor.subspecialty}. ${doctor.philosophy}`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: `${doctor.title} ${doctor.name}`,
    title: `${doctor.title} ${doctor.name} — ${doctor.specialty} en ${doctor.city}`,
    description: `${doctor.specialistTitle}, ${doctor.subspecialty}.`,
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: `${doctor.title} ${doctor.name} — Cirujano Oftalmólogo` }],
  },
  twitter: {
    card: "summary",
    title: `${doctor.title} ${doctor.name} — ${doctor.specialty}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#273a5b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${caviarDreams.variable} ${spaceMono.variable}`}>
      <body className="pb-24 md:pb-0">
        <GoogleAnalytics />
        <SideNav />
        <div className="lg:pr-20">
          {/* Franja de credenciales visible en escritorio: Header.tsx (que
              lleva la misma franja) es `lg:hidden` porque el SideNav lo
              reemplaza — sin esto, cédulas/COFEPRIS solo existirían en el
              Hero en escritorio (mismo bug encontrado y corregido en
              dr-franco-estrada, 2026-10-30). */}
          <div className="hidden border-b border-border bg-primary/5 px-4 py-1.5 text-center font-[family-name:var(--font-mono-label)] text-[11px] tracking-wide text-muted-foreground lg:block">
            {formatCredentials(doctor)}
          </div>
          <Header />
          {children}
          <Footer />
        </div>
        <FloatingButtons />
        <StickyBottomNav />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
