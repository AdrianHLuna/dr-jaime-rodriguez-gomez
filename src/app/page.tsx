import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  CreditCard,
  Landmark,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Star,
  CalendarCheck,
} from "lucide-react";
import { doctor, diseases, services, symptoms, agendaOnlineUrl } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import CardImageHeader from "@/components/CardImageHeader";

const paymentIcons: Record<string, typeof Banknote> = {
  Efectivo: Banknote,
  Transferencia: Landmark,
  "Tarjeta de débito": CreditCard,
  "Tarjeta de crédito (Visa, MasterCard, American Express)": CreditCard,
  "Pagos móviles NFC (Apple Pay / Google Pay)": Smartphone,
  "Seguros médicos": ShieldCheck,
};

export default function Home() {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página web y me gustaría agendar una cita.`
  )}`;

  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* Hero "visor de enfoque" — split asimétrico sobre fondo navy, SIN
          panel de foto (doctor.photo es placeholder): a la derecha, el
          isotipo real (diafragma/iris partido en dos) ampliado como motivo
          de fondo, con micro-ajuste de rotación continuo — nunca estático,
          nunca la respiración de escala de Martha ni el giro de 360° de
          Manuel. Composición propia de este sitio (AGENTS.md §1). */}
      <section className="relative min-h-screen overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden="true"
          className="animate-iris-adjust pointer-events-none absolute -right-32 top-1/2 h-[560px] w-[560px] -translate-y-1/2 opacity-[0.14] md:h-[760px] md:w-[760px]"
        >
          <Image src="/icon-mark-white.png" alt="" fill className="object-contain" priority />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-28 md:py-36">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-mono-label)] text-xs tracking-[0.2em] text-accent uppercase">
              {doctor.specialistTitle} · {doctor.city}, {doctor.state}
            </p>
            <h1 className="font-heading mt-5 text-4xl font-bold md:text-6xl">
              {doctor.title} {doctor.name}
            </h1>
            <p className="mt-3 text-primary-foreground/70">{doctor.subspecialty}</p>
            <p className="mt-6 max-w-xl text-primary-foreground/85">{doctor.philosophy}</p>
            <p className="font-[family-name:var(--font-mono-label)] mt-6 text-xs text-primary-foreground/60">
              {formatCredentials(doctor)}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-lg transition-transform hover:scale-105"
              >
                Agendar Cita por WhatsApp
              </a>
              <a
                href={agendaOnlineUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Agendar en Línea
              </a>
            </div>

            {doctor.testimonials && doctor.testimonials.length > 0 && (
              <a
                href={doctor.sameAs?.[0]}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-accent"
              >
                <span className="flex items-center gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold" aria-hidden="true" />
                  ))}
                </span>
                Reseñas reales de pacientes en Doctoralia
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Barra de confianza — sin cifras inventadas: pacientes/procedimientos
          sin dato real quedan "—" explícito (AGENTS.md §1), nunca una
          métrica sustituta. */}
      <section aria-label="Datos de confianza" className="border-b border-border bg-muted/50 px-4 py-8">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6 text-center">
          {doctor.stats?.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre el doctor */}
      <section aria-labelledby="about-heading" className="mx-auto max-w-5xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div className="mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-[1.75rem] bg-muted md:mx-0">
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              Foto de {doctor.title} {doctor.name}
            </div>
          </div>
          <div>
            <h2 id="about-heading" className="font-heading text-2xl font-bold">
              Sobre {doctor.title} {doctor.name}
            </h2>
            <p className="mt-4 text-muted-foreground">{doctor.bio}</p>
            <p className="font-[family-name:var(--font-mono-label)] mt-4 text-xs text-muted-foreground">
              {formatCredentials(doctor)}
            </p>
          </div>
        </div>
      </section>

      {/* Certificaciones y formación — insignia de anillo (no relleno sólido
          como Manuel) con las siglas de la institución; sin logo oficial
          confirmable por fuente verificable para estas 3 asociaciones, se
          usa el sello genérico de respaldo (AGENTS.md §6). */}
      <section aria-labelledby="certifications-heading" className="bg-muted/40 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 id="certifications-heading" className="font-heading text-2xl font-bold">
            Certificaciones y Formación
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ...doctor.certifications,
              ...doctor.education.map((e) => ({ name: e.degree, institution: e.institution })),
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-[1.5rem] border border-border bg-background p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent font-[family-name:var(--font-mono-label)] text-xs font-bold text-primary">
                  {item.institution.replace(/[().]/g, "").slice(0, 4)}
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enfermedades — grid que "entra en foco": nace desaturado/atenuado y
          salta a color nítido en hover (CardImageHeader focusOnHover),
          mecanismo propio de este sitio, ligado al tema óptico. */}
      <section aria-labelledby="diseases-heading" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 id="diseases-heading" className="font-heading text-2xl font-bold">
              Enfermedades que Atendemos
            </h2>
            <Link href="/enfermedades" className="flex items-center gap-1 text-sm font-medium text-primary">
              Ver todas <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {diseases.slice(0, 8).map((disease) => (
              <Link
                key={disease.id}
                href={`/enfermedades/${disease.slug}`}
                className="group overflow-hidden rounded-[1.75rem] border border-border bg-background transition-shadow hover:shadow-lg"
              >
                <CardImageHeader alt={disease.name} aspect="4/3" focusOnHover />
                <div className="p-4">
                  <h3 className="font-semibold">{disease.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{disease.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios — carrusel horizontal angosto tipo "tira de contactos"
          (solo permitido como preview de Home, AGENTS.md §2), tarjetas
          verticales sin borde, distintas de las de Enfermedades. */}
      <section aria-labelledby="services-heading" className="bg-muted/40 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 id="services-heading" className="font-heading text-2xl font-bold">
              Cirugías y Procedimientos
            </h2>
            <Link href="/servicios" className="flex items-center gap-1 text-sm font-medium text-primary">
              Ver todos <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 -mx-4 flex gap-5 overflow-x-auto px-4 pb-2">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/servicios/${service.slug}`}
                className="group w-60 shrink-0 overflow-hidden rounded-[1.75rem] bg-background shadow-sm transition-shadow hover:shadow-lg"
              >
                <CardImageHeader alt={service.name} aspect="4/3" focusOnHover />
                <div className="p-4">
                  <p className="font-semibold leading-snug">{service.name}</p>
                  <span className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
                    Ver ficha <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Síntomas — lista densa de dos columnas con punto indicador, no
          chips planos ni grid de tarjetas. */}
      <section aria-labelledby="symptoms-heading" className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 id="symptoms-heading" className="font-heading text-2xl font-bold">
            Síntomas que Atendemos
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Si presentas alguno de estos síntomas de forma persistente, conviene una valoración oftalmológica.
          </p>
          <div className="mt-8 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {symptoms.map((symptom) => (
              <Link
                key={symptom.id}
                href={`/sintomas/${symptom.slug}`}
                className="group flex items-center gap-3 border-b border-border/70 py-3.5 transition-colors hover:border-primary"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform group-hover:scale-150" aria-hidden="true" />
                <span className="text-sm font-medium group-hover:text-primary">{symptom.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Precio y forma de pago — misma jerarquía visual que el precio, con
          íconos reales; el matiz de seguros (Vitamédica directo vs. resto
          por reembolso) se muestra tal cual, no como "acepta seguros". */}
      <section aria-labelledby="price-heading" className="bg-muted/40 px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="price-heading" className="font-heading text-2xl font-bold">
            Precio de Consulta
          </h2>
          <p className="font-heading mt-4 text-4xl font-bold text-primary">${doctor.consultationPrice} MXN</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {doctor.paymentMethods.map((method) => {
              const Icon = paymentIcons[method] ?? Banknote;
              return (
                <span
                  key={method}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm"
                >
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {method}
                </span>
              );
            })}
          </div>
          {doctor.insurances && doctor.insurances.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {doctor.insurances.map((ins) => (
                <span
                  key={ins}
                  className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm text-primary"
                >
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  {ins}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonios reales (Doctoralia, con URL verificable) — sección
          nueva, propia de este sitio: ningún otro sitio del registro tiene
          testimonios de texto reales que mostrar. */}
      {doctor.testimonials && doctor.testimonials.length > 0 && (
        <section aria-labelledby="testimonials-heading" className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between">
              <h2 id="testimonials-heading" className="font-heading text-2xl font-bold">
                Lo que Dicen sus Pacientes
              </h2>
              <a
                href={doctor.testimonials[0].sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-primary"
              >
                Ver en Doctoralia
              </a>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {doctor.testimonials.map((t) => (
                <div key={t.id} className="rounded-[1.75rem] border border-border bg-background p-6">
                  <div className="flex items-center gap-0.5 text-gold">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-foreground/85">&ldquo;{t.text}&rdquo;</p>
                  <p className="mt-4 text-xs font-semibold text-muted-foreground">
                    {t.patientName} · Doctoralia
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final — el pupilo/motivo de enfoque "respira" en nitidez
          (filter: blur) en vez de escala o rotación, variante propia y
          distinta del anillo de Martha/Manuel y del hueso estático de
          Franco. */}
      <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-secondary px-4 py-20 text-center text-secondary-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 motion-safe:[animation:focus-pulse_5s_ease-in-out_infinite]"
          style={{ filter: "blur(40px)" }}
        />
        <div className="relative">
          <h2 id="cta-heading" className="font-heading text-2xl font-bold">
            No dejes pasar tu salud visual
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-secondary-foreground/85">
            Agenda tu valoración con {doctor.title} {doctor.name} y recibe un diagnóstico claro desde la primera consulta.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-gold px-8 py-4 font-semibold text-gold-foreground shadow-lg transition-transform hover:scale-105"
            >
              Agendar Cita Ahora
            </a>
            <a
              href={agendaOnlineUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-secondary-foreground/30 px-8 py-4 font-semibold transition-colors hover:bg-secondary-foreground/10"
            >
              Agendar en Línea
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
