import type { Symptom } from "@/types/schema";

// Catálogo real de 10 síntomas oculares atendidos por el Dr. Jaime
// Rodríguez Gómez, exacto al intake.
export const symptoms: Symptom[] = [
  {
    id: "sx-ardor",
    slug: "ardor-en-los-ojos",
    name: "Ardor en los Ojos",
    colloquialNames: ["ojos que arden", "sensación de quemazón"],
    description:
      "El ardor ocular es una sensación de quemazón o irritación en la superficie del ojo, frecuentemente relacionada con sequedad ocular, inflamación del borde de los párpados o exposición a irritantes ambientales.",
    causes: [
      "Síndrome de ojo seco",
      "Blefaritis",
      "Conjuntivitis (viral, bacteriana o alérgica)",
      "Exposición a humo, cloro o aire acondicionado prolongado",
    ],
    alarmSigns: [
      "Ardor intenso y súbito tras contacto con un químico",
      "Ardor acompañado de dolor intenso o pérdida de visión",
      "Ardor que no mejora después de varios días con lubricación ocular",
    ],
    whyConsult:
      "Si el ardor persiste más de unos días pese a lágrimas artificiales, o se acompaña de dolor, secreción o cambios en la visión, conviene una evaluación para identificar la causa de fondo en vez de automedicarse de forma indefinida.",
    faqs: [
      {
        question: "¿Las gotas lubricantes de venta libre son seguras para el ardor ocular?",
        answer: "Las lágrimas artificiales sin conservadores son generalmente seguras para uso frecuente, pero si el ardor persiste conviene una evaluación para descartar blefaritis u otra causa que requiera tratamiento dirigido.",
      },
      {
        question: "¿El ardor ocular siempre es por ojo seco?",
        answer: "No, también puede deberse a conjuntivitis, blefaritis o exposición a irritantes ambientales — la causa se confirma con una exploración de la superficie ocular.",
      },
    ],
    relatedConditions: ["d-pterigion", "d-conjuntivitis", "d-ojo-seco", "d-blefaritis"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/ardor-en-los-ojos.jpg",
    seo: {
      title: "Ardor en los Ojos — Causas y Evaluación en Mérida",
      description: "Ardor ocular: causas frecuentes y cuándo consultar al Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["ardor en los ojos", "irritación ocular", "oftalmólogo Mérida"],
    },
  },
  {
    id: "sx-vision-borrosa",
    slug: "vision-borrosa",
    name: "Visión Borrosa",
    colloquialNames: ["vista nublada", "no enfoco bien"],
    description:
      "La visión borrosa es la pérdida de nitidez al ver objetos de lejos, de cerca, o ambos, y puede originarse por un simple defecto refractivo no corregido o por enfermedades oculares que requieren atención específica.",
    causes: [
      "Miopía, astigmatismo o presbicia no corregidos",
      "Catarata",
      "Retinopatía diabética",
      "Fatiga visual por uso prolongado de pantallas",
    ],
    alarmSigns: [
      "Visión borrosa de aparición súbita",
      "Visión borrosa acompañada de dolor ocular intenso",
      "Visión borrosa después de un golpe o traumatismo en el ojo",
    ],
    whyConsult:
      "Una visión borrosa gradual suele deberse a un defecto refractivo o catarata y se evalúa en consulta programada; una visión borrosa súbita o con dolor requiere valoración oftalmológica urgente.",
    faqs: [
      {
        question: "¿La visión borrosa siempre se corrige con lentes?",
        answer: "No siempre. Si se debe a un defecto refractivo sí se corrige con lentes, pero si la causa es una catarata, retinopatía u otra enfermedad ocular, requiere el tratamiento específico de esa condición.",
      },
      {
        question: "¿Cuándo la visión borrosa es urgente?",
        answer: "Cuando aparece de forma súbita, afecta solo un ojo de repente, o se acompaña de dolor, destellos de luz o una sombra en el campo visual, debe evaluarse de inmediato.",
      },
    ],
    relatedConditions: ["d-catarata", "d-retinopatia-diabetica", "d-miopia", "d-astigmatismo", "d-presbicia"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/vision-borrosa.jpg",
    seo: {
      title: "Visión Borrosa — Causas y Evaluación en Mérida",
      description: "Visión borrosa: causas frecuentes y cuándo es urgente, con el Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["visión borrosa", "vista nublada", "oftalmólogo Mérida"],
    },
  },
  {
    id: "sx-cuerpo-extrano",
    slug: "sensacion-de-cuerpo-extrano",
    name: "Sensación de Cuerpo Extraño",
    colloquialNames: ["siento algo en el ojo", "arenilla en el ojo"],
    description:
      "La sensación de cuerpo extraño es la percepción de que hay algo dentro del ojo (arena, pestaña, partícula) incluso cuando no hay ningún objeto visible, y suele relacionarse con sequedad ocular, pterigión o irritación de la superficie ocular.",
    causes: [
      "Síndrome de ojo seco",
      "Pterigión",
      "Partícula o cuerpo extraño real en la superficie ocular",
      "Irritación corneal leve",
    ],
    alarmSigns: [
      "Sensación de cuerpo extraño tras un golpe, salpicadura química o trabajo con herramientas",
      "Dolor intenso que no mejora al parpadear o lavar el ojo con agua limpia",
      "Enrojecimiento y sensibilidad a la luz asociados",
    ],
    whyConsult:
      "Si la sensación persiste varios días, se acompaña de enrojecimiento importante, o se originó por un golpe o partícula que pudo entrar al ojo, conviene una revisión para descartar una lesión en la córnea.",
    faqs: [
      {
        question: "¿Debo intentar sacarme el cuerpo extraño yo mismo?",
        answer: "Si hay un objeto visible puede intentarse un enjuague suave con agua limpia o solución salina; si no se resuelve o hay dolor significativo, no se debe forzar y conviene acudir a valoración oftalmológica.",
      },
      {
        question: "¿Por qué siento arenilla si no hay nada en el ojo?",
        answer: "Es una sensación típica de la superficie ocular irritada o reseca; el cerebro interpreta esa irritación como si hubiera un objeto real presente, aunque no lo haya.",
      },
    ],
    relatedConditions: ["d-pterigion", "d-ojo-seco"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/sensacion-de-cuerpo-extrano.jpg",
    seo: {
      title: "Sensación de Cuerpo Extraño en el Ojo — Mérida",
      description: "Sensación de cuerpo extraño ocular: causas y cuándo consultar al Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["cuerpo extraño en el ojo", "arenilla en el ojo", "oftalmólogo Mérida"],
    },
  },
  {
    id: "sx-ojo-rojo",
    slug: "ojo-rojo",
    name: "Ojo Rojo",
    colloquialNames: ["ojos irritados", "ojos inyectados"],
    description:
      "El ojo rojo es la dilatación visible de los vasos sanguíneos de la conjuntiva, y es uno de los motivos de consulta oftalmológica más frecuentes — puede deberse a causas leves como irritación ambiental o a condiciones que requieren tratamiento específico como conjuntivitis o pterigión.",
    causes: [
      "Conjuntivitis viral, bacteriana o alérgica",
      "Pterigión",
      "Ojo seco",
      "Esfuerzo físico, tos intensa o estornudo (hemorragia subconjuntival)",
    ],
    alarmSigns: [
      "Ojo rojo con dolor intenso o visión disminuida",
      "Ojo rojo tras un traumatismo ocular",
      "Ojo rojo que no mejora después de una semana",
    ],
    whyConsult:
      "Un ojo rojo leve y sin dolor suele resolverse solo o con lubricación, pero cuando se acompaña de dolor, visión disminuida o secreción purulenta, requiere evaluación oftalmológica para identificar la causa.",
    faqs: [
      {
        question: "¿El ojo rojo siempre es contagioso?",
        answer: "No. Solo la conjuntivitis viral o bacteriana es contagiosa; causas como el ojo seco, el pterigión o una hemorragia subconjuntival por esfuerzo no se contagian.",
      },
      {
        question: "¿Un ojo rojo sin dolor es grave?",
        answer: "Generalmente no, sobre todo si se trata de una hemorragia subconjuntival (mancha roja por un vaso roto) que se resuelve sola en una a dos semanas sin tratamiento.",
      },
    ],
    relatedConditions: ["d-pterigion", "d-conjuntivitis"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/ojo-rojo.jpg",
    seo: {
      title: "Ojo Rojo — Causas y Evaluación en Mérida",
      description: "Ojo rojo: causas frecuentes y cuándo consultar al Dr. Jaime Rodríguez Gómez, oftalmólogo en Mérida.",
      keywords: ["ojo rojo", "ojos irritados", "oftalmólogo Mérida"],
    },
  },
  {
    id: "sx-manchas-vision",
    slug: "manchas-en-la-vision",
    name: "Manchas en la Visión",
    colloquialNames: ["moscas volantes", "puntos flotantes"],
    description:
      "Las manchas o puntos flotantes en la visión (miodesopsias) son sombras pequeñas que se desplazan en el campo visual, generalmente por cambios normales del gel vítreo con la edad, pero un aumento súbito en su número puede ser señal de un problema retiniano serio.",
    causes: [
      "Desprendimiento posterior del vítreo relacionado con la edad (causa más común y benigna)",
      "Retinopatía diabética",
      "Desprendimiento de retina",
      "Hemorragia vítrea",
    ],
    alarmSigns: [
      "Aumento súbito y marcado en el número de manchas flotantes",
      "Manchas acompañadas de destellos de luz",
      "Sombra o cortina oscura que avanza en el campo visual",
    ],
    whyConsult:
      "Unas pocas moscas volantes estables y de larga evolución suelen ser benignas, pero un aumento súbito, destellos de luz asociados o una sombra que avanza en la visión son señales de alarma que requieren evaluación de retina urgente.",
    faqs: [
      {
        question: "¿Las moscas volantes desaparecen solas?",
        answer: "Las que son benignas por cambios normales del vítreo suelen hacerse menos notorias con el tiempo, pero cualquier cambio súbito en su cantidad debe evaluarse para descartar un problema de retina.",
      },
      {
        question: "¿Cuándo las manchas en la visión son una urgencia?",
        answer: "Cuando aparecen de forma súbita en gran cantidad, se acompañan de destellos de luz o de una sombra que avanza en el campo visual — ahí se debe acudir de inmediato, no esperar.",
      },
    ],
    relatedConditions: ["d-retinopatia-diabetica", "d-agujero-macular", "d-membrana-epirretiniana", "d-degeneracion-macular", "d-desprendimiento-retina"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/manchas-en-la-vision.jpg",
    seo: {
      title: "Manchas en la Visión — Causas y Señales de Alarma en Mérida",
      description: "Manchas o puntos flotantes en la visión: cuándo son normales y cuándo son urgencia de retina.",
      keywords: ["manchas en la visión", "moscas volantes", "desprendimiento de retina", "oftalmólogo Mérida"],
    },
  },
  {
    id: "sx-presion-intraocular",
    slug: "presion-intraocular-elevada",
    name: "Presión Intraocular Elevada",
    colloquialNames: ["presión alta en el ojo"],
    description:
      "La presión intraocular elevada es el aumento de la presión del líquido dentro del ojo por encima de los valores normales, y es el principal factor de riesgo modificable para desarrollar glaucoma y daño progresivo al nervio óptico.",
    causes: [
      "Producción excesiva o drenaje deficiente del humor acuoso",
      "Glaucoma de ángulo abierto o cerrado",
      "Uso prolongado de esteroides (orales o en gotas)",
    ],
    alarmSigns: [
      "Dolor ocular intenso y súbito con visión de halos alrededor de las luces",
      "Náusea o vómito acompañando el dolor ocular intenso",
      "Enrojecimiento ocular intenso con disminución brusca de la visión",
    ],
    whyConsult:
      "La presión intraocular elevada generalmente no da síntomas y solo se detecta en una revisión, por lo que la medición periódica es la única forma de identificarla antes de que cause daño al nervio óptico; el dolor súbito con halos de luz sí es una urgencia real.",
    faqs: [
      {
        question: "¿Puedo sentir si mi presión intraocular está alta?",
        answer: "En la gran mayoría de los casos no se siente ningún síntoma, por eso la medición de presión intraocular en una revisión periódica es la única forma confiable de detectarla a tiempo.",
      },
      {
        question: "¿Presión intraocular alta siempre significa glaucoma?",
        answer: "No necesariamente; algunas personas tienen presión elevada sin daño al nervio óptico (hipertensión ocular), pero sí representan un mayor riesgo de desarrollar glaucoma y requieren vigilancia.",
      },
    ],
    relatedConditions: ["d-glaucoma"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/presion-intraocular-elevada.jpg",
    seo: {
      title: "Presión Intraocular Elevada — Evaluación en Mérida",
      description: "Presión intraocular elevada: relación con el glaucoma y cuándo es urgencia, en Mérida, Yucatán.",
      keywords: ["presión intraocular", "glaucoma", "oftalmólogo Mérida"],
    },
  },
  {
    id: "sx-vision-disminuida",
    slug: "vision-disminuida",
    name: "Visión Disminuida",
    colloquialNames: ["veo menos", "se me fue bajando la vista"],
    description:
      "La visión disminuida es la pérdida de agudeza visual, gradual o súbita, que puede originarse por defectos refractivos simples o por enfermedades oculares más serias como catarata, glaucoma o enfermedades de retina.",
    causes: [
      "Catarata",
      "Glaucoma avanzado",
      "Enfermedades de retina (degeneración macular, agujero macular, membrana epirretiniana)",
      "Defecto refractivo no corregido",
    ],
    alarmSigns: [
      "Pérdida de visión súbita en uno o ambos ojos",
      "Visión disminuida con dolor ocular intenso",
      "Visión disminuida tras un traumatismo",
    ],
    whyConsult:
      "La disminución gradual de la visión suele evaluarse en consulta programada, pero una pérdida súbita de visión — total o parcial, en uno o ambos ojos — es una urgencia oftalmológica que requiere atención inmediata.",
    faqs: [
      {
        question: "¿Toda visión disminuida se recupera con tratamiento?",
        answer: "Depende de la causa: la que se debe a catarata o a un defecto refractivo suele recuperarse por completo con tratamiento, mientras que el daño por glaucoma avanzado o ciertas enfermedades de retina puede ser parcialmente irreversible, por eso la detección temprana es clave.",
      },
      {
        question: "¿Una visión disminuida gradual es menos grave que una súbita?",
        answer: "No necesariamente menos grave, pero sí menos urgente: lo gradual suele deberse a condiciones que avanzan en semanas o meses, mientras que lo súbito puede ser una urgencia real que no debe esperar.",
      },
    ],
    relatedConditions: ["d-catarata", "d-retinopatia-diabetica", "d-presbicia", "d-agujero-macular", "d-membrana-epirretiniana", "d-degeneracion-macular", "d-desprendimiento-retina", "d-glaucoma"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/vision-disminuida.jpg",
    seo: {
      title: "Visión Disminuida — Causas y Evaluación en Mérida",
      description: "Visión disminuida: causas frecuentes y cuándo es urgencia, con el Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["visión disminuida", "pérdida de visión", "oftalmólogo Mérida"],
    },
  },
  {
    id: "sx-inflamacion-palpebral",
    slug: "inflamacion-palpebral",
    name: "Inflamación Palpebral",
    colloquialNames: ["párpado hinchado", "párpado inflamado"],
    description:
      "La inflamación palpebral es la hinchazón del párpado superior o inferior, frecuentemente causada por blefaritis crónica o la obstrucción de una glándula del párpado (chalazión), aunque también puede deberse a procesos infecciosos agudos.",
    causes: [
      "Blefaritis",
      "Chalazión",
      "Orzuelo (infección aguda de una glándula del párpado)",
      "Reacción alérgica local",
    ],
    alarmSigns: [
      "Inflamación palpebral con dolor intenso, fiebre o extensión rápida hacia la órbita",
      "Dificultad para abrir el ojo por la inflamación",
      "Visión afectada por la inflamación del párpado",
    ],
    whyConsult:
      "Una inflamación leve y localizada (como un chalazión pequeño) puede manejarse inicialmente con compresas tibias, pero si crece, duele de forma intensa o se acompaña de fiebre, se debe evaluar para descartar una infección que se está extendiendo.",
    faqs: [
      {
        question: "¿Toda inflamación del párpado es un chalazión?",
        answer: "No, también puede ser un orzuelo (más agudo y doloroso), blefaritis generalizada o una reacción alérgica — el diagnóstico diferencial se hace con una exploración del párpado.",
      },
      {
        question: "¿Puedo ponerme compresas calientes yo mismo antes de consultar?",
        answer: "Sí, las compresas tibias limpias varias veces al día son seguras como primer paso mientras se programa la valoración, salvo que haya fiebre, dolor intenso o extensión rápida, que ameritan atención más pronta.",
      },
    ],
    relatedConditions: ["d-blefaritis", "d-chalazion"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/inflamacion-palpebral.jpg",
    seo: {
      title: "Inflamación Palpebral — Causas y Evaluación en Mérida",
      description: "Inflamación del párpado: causas frecuentes y cuándo consultar al Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["inflamación palpebral", "párpado hinchado", "oftalmólogo Mérida"],
    },
  },
  {
    id: "sx-picazon",
    slug: "picazon-ocular",
    name: "Picazón Ocular",
    colloquialNames: ["comezón en los ojos"],
    description:
      "La picazón ocular es una sensación de comezón en el ojo o los párpados, frecuentemente de origen alérgico, aunque también puede relacionarse con sequedad ocular o blefaritis crónica.",
    causes: [
      "Conjuntivitis alérgica (polen, polvo, ácaros, cosméticos)",
      "Síndrome de ojo seco",
      "Blefaritis",
    ],
    alarmSigns: [
      "Picazón intensa con inflamación marcada del párpado",
      "Picazón que no mejora con antihistamínico tópico y persiste varias semanas",
    ],
    whyConsult:
      "La picazón ocular leve y estacional suele manejarse con antihistamínico tópico, pero si es intensa, constante o no responde al tratamiento, conviene descartar blefaritis u otra causa de fondo.",
    faqs: [
      {
        question: "¿Frotarse los ojos cuando dan comezón es peligroso?",
        answer: "Frotarse de forma repetida e intensa puede irritar más la superficie ocular e incluso favorecer alteraciones en la forma de la córnea a largo plazo (queratocono), por lo que se recomienda tratar la causa en vez de solo frotarse.",
      },
      {
        question: "¿Las gotas antialérgicas de venta libre son seguras?",
        answer: "Para uso ocasional en picazón leve suelen ser seguras, pero si la comezón es frecuente o intensa conviene una evaluación para confirmar la causa y evitar el uso prolongado sin supervisión.",
      },
    ],
    relatedConditions: ["d-conjuntivitis", "d-ojo-seco", "d-blefaritis"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/picazon-ocular.jpg",
    seo: {
      title: "Picazón Ocular — Causas y Evaluación en Mérida",
      description: "Picazón o comezón ocular: causas frecuentes y tratamiento con el Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["picazón ocular", "comezón en los ojos", "oftalmólogo Mérida"],
    },
  },
  {
    id: "sx-dolor-ocular",
    slug: "dolor-ocular",
    name: "Dolor Ocular",
    colloquialNames: ["me duele el ojo"],
    description:
      "El dolor ocular es una molestia que puede ir de leve a intensa, y su origen va desde una simple irritación superficial hasta condiciones serias como un glaucoma agudo, por lo que su intensidad y síntomas asociados son clave para determinar qué tan urgente es.",
    causes: [
      "Glaucoma agudo de ángulo cerrado",
      "Pterigión o irritación corneal",
      "Infección o inflamación ocular",
      "Traumatismo ocular",
    ],
    alarmSigns: [
      "Dolor ocular intenso y súbito con náusea, vómito o visión de halos",
      "Dolor tras un golpe o entrada de un químico al ojo",
      "Dolor ocular con disminución marcada de la visión",
    ],
    whyConsult:
      "Un dolor ocular leve y superficial puede observarse unos días, pero un dolor intenso y súbito, especialmente con náusea, visión de halos o pérdida de visión, es una urgencia oftalmológica que no debe esperar a una cita programada.",
    faqs: [
      {
        question: "¿Cuándo el dolor ocular es una urgencia?",
        answer: "Cuando es intenso y de aparición súbita, se acompaña de náusea, vómito, visión de halos alrededor de las luces, o una disminución marcada de la visión — en esos casos se debe buscar atención inmediata.",
      },
      {
        question: "¿Un dolor leve al final del día es normal?",
        answer: "Una molestia leve asociada a fatiga visual tras uso prolongado de pantallas puede ser normal, pero si es recurrente conviene una evaluación para descartar un defecto refractivo no corregido.",
      },
    ],
    relatedConditions: ["d-glaucoma"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/dolor-ocular.jpg",
    seo: {
      title: "Dolor Ocular — Causas y Señales de Alarma en Mérida",
      description: "Dolor ocular: causas frecuentes y cuándo es urgencia, con el Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["dolor ocular", "dolor de ojo", "oftalmólogo Mérida"],
    },
  },
];
