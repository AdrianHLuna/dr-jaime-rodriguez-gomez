import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle, CalendarCheck, ShieldAlert } from "lucide-react";
import { doctor, agendaOnlineUrl, whatsappSecundario } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Agenda tu cita con ${doctor.title} ${doctor.name} en Mérida, Yucatán. Dirección, horario y mapa.`,
  alternates: { canonical: "/contacto" },
};

/**
 * Composición de 2 columnas ("visor"): mapa CONTENIDO en tarjeta redondeada
 * a la izquierda + columna de info a la derecha — distinto del patrón
 * "mapa a todo el ancho y solo, info debajo" usado en 6 sitios anteriores
 * del registro (AGENTS.md §1, eje "Chrome persistente"). Sin formulario de
 * ningún tipo (AGENTS.md §7): el widget real de Medis365 es un botón de
 * enlace externo, nunca un iframe embebido.
 */
export default function ContactoPage() {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página web y me gustaría agendar una cita.`
  )}`;
  const whatsappSecundarioHref = `https://wa.me/${whatsappSecundario.replace(/\D/g, "")}`;

  return (
    <main>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} isDark={false} />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-heading text-2xl font-bold">Consultorio en Mérida</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {doctor.title} {doctor.name} atiende en Col. Altabrisa (Plaza Luxus), Mérida, Yucatán.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <MapFacade address={doctor.address} whatsapp={doctor.whatsapp} />

          <div className="flex flex-col gap-5">
            <div className="rounded-[1.75rem] border border-border bg-background p-6">
              <h2 className="flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                Dirección
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{doctor.address}</p>
              <a
                href={doctor.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-medium text-primary underline"
              >
                Ver en Google Maps
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-border bg-background p-6">
              <h2 className="flex items-center gap-2 font-semibold">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                Horario
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{doctor.schedule}</p>
            </div>

            <div className="rounded-[1.75rem] border border-border bg-background p-6">
              <h2 className="flex items-center gap-2 font-semibold">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                Citas
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Llamadas y WhatsApp: {doctor.phone}
              </p>
              <a
                href={whatsappSecundarioHref}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                WhatsApp directo: {whatsappSecundario}
              </a>
            </div>

            <div className="rounded-[1.75rem] border-2 border-red-500/60 bg-red-50 p-6 dark:bg-red-950/30">
              <h2 className="flex items-center gap-2 font-semibold text-red-700 dark:text-red-400">
                <ShieldAlert className="h-4 w-4" aria-hidden="true" />
                Urgencias
              </h2>
              <p className="mt-2 text-sm text-red-700/90 dark:text-red-300/90">
                Línea de urgencias: {doctor.emergencyPhone}. Para una emergencia que ponga en riesgo tu vida, acude al
                servicio de urgencias más cercano.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Agendar Cita por WhatsApp
          </a>
          <a
            href={agendaOnlineUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-primary px-8 py-4 font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Agendar en Línea (Medis365)
          </a>
        </div>
      </div>
    </main>
  );
}
