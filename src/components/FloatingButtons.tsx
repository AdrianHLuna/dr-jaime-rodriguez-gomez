"use client";

import { Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

interface FloatingButtonsProps {
  /** Contexto de la página para el mensaje de WhatsApp. Ej: "glaucoma" */
  context?: string;
}

/**
 * Dock flotante — tratamiento deliberadamente distinto del patrón repetido
 * en 5+ sitios anteriores (dos círculos sueltos en `right-5 bottom-5`,
 * AGENTS.md §1 "Chrome persistente"): aquí ambas acciones viven DENTRO de
 * una sola cápsula vertical anclada a la IZQUIERDA (nunca usado antes en el
 * registro), con un divisor interno — una sola pieza, no dos botones
 * sueltos.
 */
const FloatingButtons = ({ context }: FloatingButtonsProps) => {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");

  const message = context
    ? `Hola, ${doctor.title} ${doctor.name}. Vi su página sobre ${context} y me gustaría agendar una valoración.`
    : `Hola, ${doctor.title} ${doctor.name}. Vi su página web y me gustaría agendar una cita.`;

  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(message)}`;
  const phoneLink = `tel:${doctor.phone}`;

  return (
    <div className="fixed left-5 bottom-5 z-50 hidden flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/95 shadow-xl backdrop-blur md:flex">
      <a
        target="_blank"
        href={whatsappLink}
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
        onClick={() => trackEvent("clic_whatsapp", { source: "floating" })}
      >
        <span className="absolute inset-2 rounded-full opacity-40 motion-safe:animate-ping bg-[#25D366]/40 group-hover:opacity-0" aria-hidden="true" />
        <MessageCircle size={24} />
      </a>
      <div className="h-px w-full bg-border/60" />
      <a
        href={phoneLink}
        aria-label="Llamar al doctor"
        className="flex h-14 w-14 items-center justify-center text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        onClick={() => trackEvent("clic_llamar", { source: "floating" })}
      >
        <Phone size={20} />
      </a>
    </div>
  );
};

export default FloatingButtons;
