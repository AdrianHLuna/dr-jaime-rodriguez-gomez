import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { MapPin } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";

const MAX_LINKS = 6;

/**
 * Footer con "sitemap" de navegación — una columna por categoría
 * (Enfermedades/Servicios/Síntomas) con enlace a la vista general y, debajo,
 * las entidades más relevantes enlazando directo a su ficha (refuerza el
 * internal linking del grafo de conocimiento).
 */
export default function Footer() {
  const columns = [
    { title: "Enfermedades", href: "/enfermedades", items: diseases.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` })) },
    { title: "Servicios", href: "/servicios", items: services.map((s) => ({ label: s.name, href: `/servicios/${s.slug}` })) },
    { title: "Síntomas", href: "/sintomas", items: symptoms.map((s) => ({ label: s.name, href: `/sintomas/${s.slug}` })) },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto flex h-24 w-full max-w-[480px] items-center justify-center md:mx-0 md:justify-start">
          <Image
            src="/wordmark-white.png"
            alt={`${doctor.title} ${doctor.name} — ${doctor.specialty}`}
            width={2447}
            height={468}
            className="h-full w-auto object-contain"
          />
        </div>
        <p className="mt-6 text-center text-sm opacity-80 md:text-left">
          {doctor.specialistTitle} · {doctor.subspecialty}
        </p>

        <div className="mt-8 flex flex-col gap-2 border-t border-secondary-foreground/20 pt-8 text-sm opacity-80 sm:flex-row sm:items-start sm:gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <address className="not-italic">{doctor.address}</address>
        </div>
        <p className="mt-4 text-sm opacity-80">
          {doctor.schedule}
          <br />
          Citas: {doctor.phone} · Urgencias: {doctor.emergencyPhone}
        </p>

        {/* Sitemap de navegación por categoría. */}
        <nav aria-label="Mapa del sitio" className="mt-12 grid gap-8 border-t border-secondary-foreground/20 pt-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <Link href={col.href as Route} className="text-sm font-semibold uppercase tracking-wide opacity-90 hover:opacity-100">
                {col.title}
              </Link>
              <ul className="mt-3 space-y-2 text-sm opacity-70">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href as Route} className="hover:opacity-100 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.items.length > MAX_LINKS && (
                  <li>
                    <Link href={col.href as Route} className="underline hover:opacity-100">
                      Ver todos
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <p className="mt-8 max-w-2xl text-xs opacity-60">
          El contenido de este sitio es informativo y educativo; no sustituye una consulta médica
          profesional.
        </p>
      </div>
    </footer>
  );
}
