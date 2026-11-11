"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { doctor, agendaOnlineUrl } from "@/data";
import { trackEvent } from "@/lib/analytics";

/**
 * Barra inferior móvil — tratamiento distinto del rectángulo 70/30 a ras de
 * los bordes repetido en 4+ sitios anteriores (AGENTS.md §1 "Chrome
 * persistente"): aquí es una cápsula flotante, separada de los bordes
 * (`inset-x-4 bottom-4`), con 3 acciones y un botón de WhatsApp elevado al
 * centro tipo FAB — mecanismo nuevo en el registro, no solo un color
 * distinto del mismo patrón.
 */
export default function StickyBottomNav() {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página web y me gustaría agendar una cita.`
  );

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-between rounded-full border border-border/60 bg-background/95 px-2 py-2 shadow-xl backdrop-blur md:hidden"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${doctor.phone}`}
        aria-label="Llamar"
        onClick={() => trackEvent("clic_llamar", { source: "sticky_nav" })}
        className="flex min-h-[44px] min-w-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-1.5 text-primary"
      >
        <Phone size={18} aria-hidden="true" />
        <span className="text-[10px] font-semibold">Llamar</span>
      </a>

      <a
        href={`https://wa.me/${cleanWhatsapp}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar por WhatsApp"
        onClick={() => trackEvent("clic_whatsapp", { source: "sticky_nav" })}
        className="relative -mt-8 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
      >
        <span className="absolute inset-0 rounded-full opacity-60 motion-safe:animate-ping bg-[#25D366]/50 -z-10" aria-hidden="true" />
        <MessageCircle size={26} aria-hidden="true" />
      </a>

      <a
        href={agendaOnlineUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar cita en línea"
        onClick={() => trackEvent("clic_agendar_cita", { source: "sticky_nav" })}
        className="flex min-h-[44px] min-w-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-1.5 text-primary"
      >
        <CalendarCheck size={18} aria-hidden="true" />
        <span className="text-[10px] font-semibold">Agendar</span>
      </a>
    </div>
  );
}
