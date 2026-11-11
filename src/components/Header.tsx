import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Header superior — solo mobile/tablet (`lg:hidden`); en escritorio lo
 * reemplaza `SideNav.tsx` (riel a la DERECHA, primer sitio del registro con
 * nav lateral en ese lado — Franco lo puso a la izquierda). La franja de
 * credenciales de aquí es solo para el rango md (tablet); en `lg:` la lleva
 * `layout.tsx` junto al riel.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur lg:hidden">
      <div className="hidden bg-primary/5 px-4 py-1 text-center font-[family-name:var(--font-mono-label)] text-[11px] text-muted-foreground md:block">
        {formatCredentials(doctor)}
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5" aria-label={`${doctor.title} ${doctor.name}`}>
          <Image
            src="/icon-mark-color.png"
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 md:h-11 md:w-11"
            priority
          />
          <span className="whitespace-nowrap text-base leading-tight font-bold text-primary md:text-lg">
            {doctor.title} {doctor.name}
          </span>
        </Link>
        <nav aria-label="Principal" className="hidden md:flex items-center gap-6">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap shrink-0 rounded-full bg-[#25D366] px-4 py-2 text-xs font-medium text-white"
        >
          WhatsApp
        </a>
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
