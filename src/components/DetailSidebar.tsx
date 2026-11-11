import Link from "next/link";
import type { Route } from "next";
import { Phone, Clock, MapPin, AlertTriangle, ArrowRight, Eye } from "lucide-react";
import { doctor } from "@/data";

interface RelatedItem {
  name: string;
  href: string;
}

interface DetailSidebarProps {
  /** Frase corta: "X" en "El Dr. atiende X" (ej. "catarata"). */
  ctaSubject: string;
  related?: RelatedItem[];
}

/**
 * Sidebar sticky de las vistas de detalle — perfil+CTA, ubicación/horario,
 * urgencias y "Relacionados" integrado como mini-tarjetas tipo "lente"
 * (icono en chip circular + texto), nunca un único CTA plano al fondo
 * (AGENTS.md §1). Tratamiento propio de este sitio, distinto del halo de
 * Martha, los brackets de Franco y el arch-frame de María Argelia.
 */
export default function DetailSidebar({ ctaSubject, related = [] }: DetailSidebarProps) {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quisiera agendar una valoración sobre ${ctaSubject}.`
  )}`;

  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      <div className="rounded-[1.75rem] border border-border bg-primary/5 p-5">
        <p className="font-semibold">
          {doctor.title} {doctor.name}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{doctor.specialistTitle}</p>
        <p className="mt-3 text-sm">El Dr. {doctor.name.split(" ")[0]} atiende {ctaSubject} en su consultorio de Mérida.</p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
        >
          Agendar Valoración
        </a>
      </div>

      <div className="rounded-[1.75rem] border border-border bg-background p-5">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          Consultorio
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{doctor.address}</p>
        <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
          {doctor.schedule}
        </p>
      </div>

      {related.length > 0 && (
        <div className="rounded-[1.75rem] border border-border bg-background p-5">
          <p className="text-sm font-semibold">Relacionados</p>
          <div className="mt-3 grid gap-2">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href as Route}
                className="group flex items-center gap-2.5 rounded-full border border-border px-3 py-2 text-sm transition-colors hover:border-primary"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-primary">
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 truncate group-hover:text-primary">{item.name}</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-[1.75rem] border-2 border-red-500/40 bg-red-50 p-5 dark:bg-red-950/30">
        <p className="flex items-center gap-2 text-sm font-semibold text-red-700 dark:text-red-400">
          <AlertTriangle className="h-4 w-4" aria-hidden="true" />
          ¿Es una urgencia?
        </p>
        <a
          href={`tel:${doctor.emergencyPhone}`}
          className="mt-3 flex items-center gap-2 text-sm font-semibold text-red-700 dark:text-red-300"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {doctor.emergencyPhone}
        </a>
      </div>
    </aside>
  );
}
