import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { Home, Activity, Wrench, HeartPulse, MapPin, Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";

const navItems: { label: string; href: Route; icon: typeof Home }[] = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Enfermedades", href: "/enfermedades", icon: Activity },
  { label: "Servicios", href: "/servicios", icon: Wrench },
  { label: "Síntomas", href: "/sintomas", icon: HeartPulse },
  { label: "Contacto", href: "/contacto", icon: MapPin },
];

/**
 * Riel de navegación lateral — solo escritorio (`lg:` y superior), anclado a
 * la DERECHA (Franco lo puso a la izquierda, `dr-manuel-gonzalez-reyes` no
 * tiene riel de respaldo — ver `.agents/rules/registro-disenos.md`, fila
 * "Header"). Más angosto que el de Franco (w-20 vs. w-36) y con tratamiento
 * de "píldora" activa/hover en vez de brackets de esquina recta — mecanismo
 * de énfasis distinto, no solo el lado espejado. Cae a `Header.tsx` +
 * `MobileMenu.tsx` por debajo de `lg`.
 */
export default function SideNav() {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quisiera agendar una consulta con ${doctor.title} ${doctor.name}.`
  )}`;

  return (
    <nav
      aria-label="Principal"
      className="fixed right-0 top-0 z-40 hidden h-screen w-20 flex-col items-center justify-between overflow-y-auto border-l border-border bg-background py-5 lg:flex"
    >
      <Link href="/" aria-label={`${doctor.title} ${doctor.name} — Inicio`} className="animate-iris-adjust">
        <Image src="/icon-mark-color.png" alt="" width={36} height={36} className="h-9 w-9" priority />
      </Link>

      <ul className="flex w-full flex-col items-stretch gap-1.5 px-2.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex w-full flex-col items-center gap-1 rounded-2xl px-1 py-2.5 text-foreground/65 transition-colors duration-150 hover:bg-accent/15 hover:text-primary"
              >
                <Icon size={18} aria-hidden="true" />
                <span className="text-center text-[10px] font-semibold leading-tight">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex w-full flex-col items-center gap-2 px-2.5">
        <a
          href={`tel:${doctor.phone}`}
          aria-label="Llamar"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors duration-150 hover:bg-primary hover:text-primary-foreground"
        >
          <Phone size={17} aria-hidden="true" />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white"
        >
          <MessageCircle size={17} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
