"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye } from "lucide-react";

interface CardImageHeaderProps {
  src?: string;
  alt: string;
  /** AISO v3.1 §2 — aspect-video, aspect-[16/10] o aspect-[4/3]. Default: aspect-video. */
  aspect?: "video" | "16/10" | "4/3";
  /**
   * "Entra en foco" — la imagen nace desaturada/atenuada y pasa a color
   * nítido completo solo en hover/focus del `<article>` padre (requiere la
   * clase `group` en el contenedor). Tratamiento de tarjeta propio de este
   * sitio (AGENTS.md §1/§2: la composición de la tarjeta es un eje de
   * diseño, no un detalle fijo) — ninguna otra tarjeta del registro usa
   * desenfoque/saturación como mecanismo de hover.
   */
  focusOnHover?: boolean;
}

const aspectClass: Record<NonNullable<CardImageHeaderProps["aspect"]>, string> = {
  video: "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
};

/** Contenedor de imagen obligatorio en tarjetas de enfermedades/servicios/síntomas, con fallback clínico. */
export default function CardImageHeader({ src, alt, aspect = "video", focusOnHover = false }: CardImageHeaderProps) {
  const [failed, setFailed] = useState(!src);
  const focusClass = focusOnHover
    ? "grayscale opacity-80 saturate-50 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:saturate-100 group-focus-within:grayscale-0 group-focus-within:opacity-100"
    : "";

  if (failed) {
    return (
      <div
        className={`${aspectClass[aspect]} ${focusClass} flex items-center justify-center rounded-t-[1.75rem] bg-gradient-to-br from-primary/15 to-accent/20`}
        role="img"
        aria-label={alt}
      >
        <Eye className="h-10 w-10 text-primary/50" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`${aspectClass[aspect]} relative overflow-hidden rounded-t-[1.75rem] bg-muted`}>
      <Image
        src={src as string}
        alt={alt}
        fill
        className={`object-cover ${focusClass}`}
        sizes="(max-width: 768px) 100vw, 33vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
