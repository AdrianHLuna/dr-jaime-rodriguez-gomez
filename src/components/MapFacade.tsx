interface MapFacadeProps {
  address: string;
  whatsapp: string;
  /** Alto del contenedor del mapa — permite variar la proporción según dónde se use. */
  heightClassName?: string;
}

/**
 * Mapa de Google real e interactivo desde la primera carga (AGENTS.md §7) —
 * mismas reglas funcionales que el resto del proyecto (sin `loading="lazy"`,
 * sin tarjeta superpuesta). Tratamiento visual deliberadamente distinto del
 * patrón repetido en 5+ sitios anteriores (`h-[60vh] w-full ... md:h-[70vh]`
 * a sangre completa): aquí el mapa vive CONTENIDO dentro de una tarjeta de
 * esquinas muy redondeadas — un "visor" óptico, no un lienzo de borde a
 * borde — y se usa en un layout de 2 columnas junto a la info de contacto
 * en vez de ir solo y con todo debajo (AGENTS.md §1, eje "Chrome
 * persistente", hallazgo 2026-11-07).
 */
export default function MapFacade({ address, heightClassName = "h-[420px] md:h-full md:min-h-[480px]" }: MapFacadeProps) {
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className={`w-full overflow-hidden rounded-[2rem] border border-border bg-muted shadow-sm ${heightClassName}`}>
      <iframe
        src={mapsEmbedUrl}
        className="h-full w-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del consultorio"
      />
    </div>
  );
}
