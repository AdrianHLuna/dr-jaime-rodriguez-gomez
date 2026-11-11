import type { MedicalService } from "@/types/schema";

// Catálogo real de 10 cirugías/procedimientos del Dr. Jaime Rodríguez Gómez,
// exacto al intake. Sin precio por procedimiento (solo se dio el precio de
// consulta general, ya en doctor.consultationPrice) — nunca se fabrica un
// rango de precio por cirugía que el doctor no proporcionó.
export const services: MedicalService[] = [
  {
    id: "s-cirugia-catarata",
    slug: "cirugia-de-catarata",
    name: "Cirugía de Catarata",
    description: "Extracción del cristalino opaco e implante de lente intraocular para recuperar visión nítida.",
    longDescription:
      "La cirugía de catarata consiste en la extracción del cristalino opacificado mediante facoemulsificación (ultrasonido de alta precisión) y la colocación de un lente intraocular que sustituye su función. Es un procedimiento ambulatorio, de corta duración, con anestesia local y una de las tasas de éxito más altas en toda la cirugía oftalmológica.",
    type: "ambulatorio",
    anesthesiaType: "Local (gotas o bloqueo local)",
    duration: "15 a 30 minutos por ojo",
    recoveryTime: "1 a 2 semanas para recuperación visual completa",
    isPainful: false,
    benefits: [
      "Recuperación de la agudeza visual perdida por la catarata",
      "Procedimiento ambulatorio, sin hospitalización",
      "Posibilidad de corregir simultáneamente astigmatismo o presbicia con lentes especializados",
    ],
    postOpRecommendations: [
      "Uso de gotas antibióticas y antiinflamatorias según indicación",
      "Evitar frotarse el ojo y exponerlo a polvo o agua contaminada la primera semana",
      "Acudir a la revisión postoperatoria al día siguiente y según el calendario indicado",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio",
      Anestesia: "Local",
      Duración: "15 a 30 min por ojo",
    },
    faqs: [
      {
        question: "¿Duele la cirugía de catarata?",
        answer: "No. Se realiza con anestesia local en gotas o bloqueo, por lo que el paciente no siente dolor durante el procedimiento, solo algo de presión en ocasiones.",
      },
      {
        question: "¿Puedo operarme los dos ojos el mismo día?",
        answer: "Generalmente se opera un ojo primero y el segundo días o semanas después, para confirmar la buena evolución del primero antes de proceder con el siguiente.",
      },
    ],
    relatedConditions: ["d-catarata"],
    lastReviewed: "2026-11-09",
    image: "/images/services/cirugia-de-catarata.jpg",
    seo: {
      title: "Cirugía de Catarata en Mérida — Dr. Jaime Rodríguez Gómez",
      description: "Cirugía de catarata con facoemulsificación e implante de lente intraocular en Mérida, Yucatán.",
      keywords: ["cirugía de catarata", "facoemulsificación", "lente intraocular", "oftalmólogo Mérida"],
    },
  },
  {
    id: "s-cirugia-retina",
    slug: "cirugia-de-retina",
    name: "Cirugía de Retina (Vitrectomía, Facovitrectomía)",
    description: "Cirugía intraocular para tratar desprendimiento de retina, agujero macular y otras patologías retinianas.",
    longDescription:
      "La cirugía de retina (vitrectomía) consiste en el retiro del gel vítreo del interior del ojo para acceder y tratar directamente la retina: sellar desgarros, reaplicar una retina desprendida, cerrar un agujero macular o retirar una membrana epirretiniana. Cuando se combina con cirugía de catarata en el mismo tiempo quirúrgico se conoce como facovitrectomía.",
    type: "hospitalario",
    anesthesiaType: "Local con sedación o general, según el caso",
    duration: "1 a 3 horas, según la complejidad",
    recoveryTime: "2 a 6 semanas, según el procedimiento específico y si se usa gas o aceite de silicón",
    isPainful: true,
    benefits: [
      "Permite reaplicar la retina en casos de desprendimiento, preservando la visión",
      "Trata directamente agujero macular y membrana epirretiniana",
      "Puede combinarse con cirugía de catarata en un solo evento quirúrgico (facovitrectomía)",
    ],
    postOpRecommendations: [
      "Posición de cabeza específica (boca abajo) en algunos casos con gas intraocular, según indicación",
      "Evitar viajes en avión mientras exista burbuja de gas intraocular",
      "Seguimiento postoperatorio estrecho las primeras semanas",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Anestesia: "Local con sedación o general",
      Duración: "1 a 3 horas",
    },
    faqs: [
      {
        question: "¿La cirugía de retina es urgente?",
        answer: "En casos de desprendimiento de retina activo sí es una urgencia real y debe operarse lo antes posible; en agujero macular o membrana epirretiniana estable se puede programar.",
      },
      {
        question: "¿Qué es la facovitrectomía?",
        answer: "Es la combinación de cirugía de catarata y cirugía de retina en el mismo tiempo quirúrgico, evitando una segunda cirugía por separado cuando ambas condiciones coexisten.",
      },
    ],
    relatedConditions: ["d-retinopatia-diabetica", "d-agujero-macular", "d-membrana-epirretiniana", "d-desprendimiento-retina"],
    lastReviewed: "2026-11-09",
    image: "/images/services/cirugia-de-retina.jpg",
    seo: {
      title: "Cirugía de Retina en Mérida — Dr. Jaime Rodríguez Gómez",
      description: "Vitrectomía y facovitrectomía para desprendimiento de retina, agujero macular y más en Mérida.",
      keywords: ["cirugía de retina", "vitrectomía", "facovitrectomía", "oftalmólogo Mérida"],
    },
  },
  {
    id: "s-lasik",
    slug: "cirugia-refractiva-lasik",
    name: "Cirugía Refractiva LASIK",
    description: "Corrección láser de miopía, astigmatismo e hipermetropía para reducir la dependencia de lentes.",
    longDescription:
      "La cirugía refractiva LASIK remodela la córnea con láser excimer para corregir defectos refractivos como miopía y astigmatismo, reduciendo o eliminando la dependencia de lentes graduados o de contacto. Requiere una evaluación preoperatoria completa (topografía y paquimetría corneal) para confirmar que el paciente es candidato adecuado.",
    type: "ambulatorio",
    anesthesiaType: "Local (gotas anestésicas)",
    duration: "10 a 15 minutos por ojo",
    recoveryTime: "24 a 48 horas para recuperación visual funcional, estabilización completa en semanas",
    isPainful: false,
    benefits: [
      "Reduce o elimina la dependencia de lentes graduados o de contacto",
      "Procedimiento ambulatorio con recuperación visual rápida",
      "Resultados estables a largo plazo en candidatos bien seleccionados",
    ],
    postOpRecommendations: [
      "Uso de gotas lubricantes y antiinflamatorias según indicación",
      "Evitar frotarse los ojos y exponerlos a agua de piscina/mar la primera semana",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio",
      Anestesia: "Local",
      Duración: "10 a 15 min por ojo",
    },
    faqs: [
      {
        question: "¿Todas las personas con miopía o astigmatismo pueden operarse con LASIK?",
        answer: "No. La candidatura depende del grosor y forma de la córnea, la graduación, la estabilidad del defecto refractivo y la salud general del ojo, confirmada con estudios preoperatorios.",
      },
      {
        question: "¿El efecto de la cirugía es permanente?",
        answer: "La corrección corneal es permanente, aunque con los años pueden presentarse cambios naturales de la vista (como la presbicia) no relacionados con la cirugía misma.",
      },
    ],
    relatedConditions: ["d-miopia", "d-astigmatismo"],
    lastReviewed: "2026-11-09",
    image: "/images/services/cirugia-refractiva-lasik.jpg",
    seo: {
      title: "Cirugía LASIK en Mérida — Dr. Jaime Rodríguez Gómez",
      description: "Cirugía refractiva LASIK para corregir miopía y astigmatismo con el Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["cirugía LASIK", "cirugía refractiva", "miopía", "oftalmólogo Mérida"],
    },
  },
  {
    id: "s-facorefractiva",
    slug: "cirugia-facorefractiva",
    name: "Cirugía Facorefractiva",
    description: "Cirugía de cristalino con lente intraocular premium para corregir catarata y presbicia a la vez.",
    longDescription:
      "La cirugía facorefractiva combina la técnica de facoemulsificación de catarata con la implantación de un lente intraocular premium (multifocal o de rango extendido), permitiendo corregir en el mismo procedimiento tanto la catarata como defectos refractivos asociados, incluyendo la presbicia.",
    type: "ambulatorio",
    anesthesiaType: "Local",
    duration: "20 a 35 minutos por ojo",
    recoveryTime: "1 a 2 semanas",
    isPainful: false,
    benefits: [
      "Corrige catarata y presbicia o astigmatismo en el mismo procedimiento",
      "Reduce de forma importante la dependencia de lentes para distintas distancias",
      "Procedimiento ambulatorio con recuperación rápida",
    ],
    postOpRecommendations: [
      "Uso de gotas según indicación postoperatoria",
      "Evitar esfuerzo físico intenso la primera semana",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio",
      Anestesia: "Local",
      Duración: "20 a 35 min por ojo",
    },
    faqs: [
      {
        question: "¿En qué se diferencia de la cirugía de catarata estándar?",
        answer: "Usa un lente intraocular premium (multifocal o de rango extendido) en vez de un lente monofocal estándar, buscando además reducir la dependencia de lentes de lectura tras la cirugía.",
      },
      {
        question: "¿Todos los pacientes con catarata son candidatos al lente premium?",
        answer: "No todos; la salud general del ojo (córnea, retina, nervio óptico) y las expectativas visuales del paciente se evalúan antes de recomendar un lente premium sobre uno estándar.",
      },
    ],
    relatedConditions: ["d-catarata", "d-presbicia"],
    lastReviewed: "2026-11-09",
    image: "/images/services/cirugia-facorefractiva.jpg",
    seo: {
      title: "Cirugía Facorefractiva en Mérida — Dr. Jaime Rodríguez Gómez",
      description: "Cirugía facorefractiva: catarata y presbicia corregidas en un mismo procedimiento en Mérida.",
      keywords: ["cirugía facorefractiva", "lente multifocal", "catarata y presbicia", "oftalmólogo Mérida"],
    },
  },
  {
    id: "s-reseccion-pterigion",
    slug: "cirugia-de-reseccion-de-pterigion",
    name: "Cirugía de Resección de Pterigión",
    description: "Extirpación del pterigión con injerto conjuntival para reducir el riesgo de recurrencia.",
    longDescription:
      "La cirugía de resección de pterigión consiste en extirpar el tejido fibrovascular que ha invadido la córnea y cubrir la zona con un injerto de conjuntiva propia del paciente, técnica que reduce de forma significativa el riesgo de que el pterigión vuelva a crecer comparado con la resección simple.",
    type: "ambulatorio",
    anesthesiaType: "Local",
    duration: "30 a 45 minutos",
    recoveryTime: "1 a 3 semanas",
    isPainful: true,
    benefits: [
      "Elimina la carnosidad y mejora el aspecto y confort del ojo",
      "Reduce el astigmatismo irregular inducido por el pterigión",
      "La técnica con injerto conjuntival disminuye notablemente la recurrencia",
    ],
    postOpRecommendations: [
      "Uso de gotas antibióticas y antiinflamatorias según indicación",
      "Protección solar con lentes oscuros durante la recuperación",
      "Evitar frotarse el ojo las primeras semanas",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio",
      Anestesia: "Local",
      Duración: "30 a 45 min",
    },
    faqs: [
      {
        question: "¿Por qué se usa un injerto de conjuntiva?",
        answer: "Porque cubrir la zona operada con conjuntiva propia del paciente reduce de forma importante la probabilidad de que el pterigión recurra, comparado con dejar la zona sin cubrir.",
      },
      {
        question: "¿Cuánto dura la recuperación visual?",
        answer: "El ojo suele verse rojo e inflamado la primera semana; la recuperación completa de la superficie ocular toma entre 2 y 3 semanas, con mejoría progresiva del confort cada día.",
      },
    ],
    relatedConditions: ["d-pterigion"],
    lastReviewed: "2026-11-09",
    image: "/images/services/cirugia-de-reseccion-de-pterigion.jpg",
    seo: {
      title: "Cirugía de Pterigión en Mérida — Dr. Jaime Rodríguez Gómez",
      description: "Cirugía de resección de pterigión con injerto conjuntival en Mérida, Yucatán.",
      keywords: ["cirugía de pterigión", "carnosidad en el ojo", "injerto conjuntival", "oftalmólogo Mérida"],
    },
  },
  {
    id: "s-cirugia-chalazion",
    slug: "cirugia-de-chalazion",
    name: "Cirugía de Chalazión",
    description: "Extirpación o drenaje quirúrgico de un chalazión persistente que no responde a manejo conservador.",
    longDescription:
      "La cirugía de chalazión consiste en el drenaje o extirpación quirúrgica del bulto formado por la obstrucción de una glándula de meibomio en el párpado, indicada cuando el manejo conservador con compresas tibias y masaje no resuelve el cuadro en varias semanas.",
    type: "consultorio",
    anesthesiaType: "Local",
    duration: "15 a 20 minutos",
    recoveryTime: "Pocos días, con inflamación leve esperada",
    isPainful: false,
    benefits: [
      "Resuelve chalaziones persistentes que no responden a tratamiento conservador",
      "Procedimiento rápido, realizado en consultorio",
      "Mejora la molestia y el aspecto del párpado afectado",
    ],
    postOpRecommendations: [
      "Compresas tibias en los días posteriores según indicación",
      "Uso de ungüento antibiótico si se indica",
      "Acudir a revisión si reaparece inflamación significativa",
    ],
    technicalSpecs: {
      Tipo: "Consultorio",
      Anestesia: "Local",
      Duración: "15 a 20 min",
    },
    faqs: [
      {
        question: "¿Deja cicatriz visible?",
        answer: "La incisión suele hacerse desde la parte interna del párpado cuando es posible, por lo que generalmente no deja cicatriz visible en la piel.",
      },
      {
        question: "¿Puedo regresar a mis actividades el mismo día?",
        answer: "Sí, en la mayoría de los casos se puede retomar la actividad normal el mismo día, evitando maquillaje y frotarse el ojo durante los primeros días.",
      },
    ],
    relatedConditions: ["d-chalazion"],
    lastReviewed: "2026-11-09",
    image: "/images/services/cirugia-de-chalazion.jpg",
    seo: {
      title: "Cirugía de Chalazión en Mérida — Dr. Jaime Rodríguez Gómez",
      description: "Extirpación de chalazión persistente en consultorio con el Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["cirugía de chalazión", "bulto en el párpado", "oftalmólogo Mérida"],
    },
  },
  {
    id: "s-fotocoagulacion",
    slug: "fotocoagulacion-retinal",
    name: "Fotocoagulación Retinal",
    description: "Tratamiento láser para sellar vasos dañados y frenar la progresión de enfermedades de retina.",
    longDescription:
      "La fotocoagulación retinal aplica láser de forma selectiva sobre zonas específicas de la retina para sellar vasos sanguíneos anómalos o frágiles, frenar el crecimiento de vasos nuevos y reducir el riesgo de hemorragia o progresión en condiciones como retinopatía diabética y degeneración macular.",
    type: "consultorio",
    anesthesiaType: "Local (gotas anestésicas)",
    duration: "10 a 20 minutos por sesión",
    recoveryTime: "Sin tiempo de recuperación significativo, actividades normales el mismo día",
    isPainful: false,
    benefits: [
      "Frena la progresión de la retinopatía diabética",
      "Reduce el riesgo de hemorragia vítrea",
      "Procedimiento rápido realizado en consultorio, sin hospitalización",
    ],
    postOpRecommendations: [
      "Puede presentarse visión borrosa temporal las horas posteriores",
      "Evitar conducir inmediatamente después de la sesión",
      "Seguir el calendario de sesiones indicado por el médico",
    ],
    technicalSpecs: {
      Tipo: "Consultorio",
      Anestesia: "Local",
      Duración: "10 a 20 min por sesión",
    },
    faqs: [
      {
        question: "¿Cuántas sesiones se requieren?",
        answer: "Varía según la extensión del daño retiniano; algunos pacientes requieren una sola sesión y otros varias sesiones programadas en el tiempo.",
      },
      {
        question: "¿El láser mejora la visión ya perdida?",
        answer: "No. La fotocoagulación busca frenar la progresión y prevenir más daño, no recuperar la visión que ya se perdió por el daño retiniano previo — por eso la detección temprana es tan importante.",
      },
    ],
    relatedConditions: ["d-retinopatia-diabetica", "d-degeneracion-macular"],
    lastReviewed: "2026-11-09",
    image: "/images/services/fotocoagulacion-retinal.jpg",
    seo: {
      title: "Fotocoagulación Retinal en Mérida, Yucatán",
      description: "Tratamiento láser de retina para retinopatía diabética y degeneración macular en Mérida.",
      keywords: ["fotocoagulación retinal", "láser de retina", "retinopatía diabética", "oftalmólogo Mérida"],
    },
  },
  {
    id: "s-capsulotomia-yag",
    slug: "capsulotomia-yag",
    name: "Capsulotomía YAG",
    description: "Procedimiento láser en consultorio para tratar la opacificación de la cápsula posterior tras cirugía de catarata.",
    longDescription:
      "La capsulotomía YAG es un procedimiento láser rápido, realizado en consultorio, indicado cuando la cápsula que sostiene el lente intraocular se opacifica con el tiempo después de una cirugía de catarata (lo que comúnmente se llama 'catarata secundaria'), devolviendo la claridad visual sin necesidad de una nueva cirugía intraocular.",
    type: "consultorio",
    anesthesiaType: "Local (gotas anestésicas)",
    duration: "5 a 10 minutos",
    recoveryTime: "Inmediata, sin reposo necesario",
    isPainful: false,
    benefits: [
      "Resuelve la opacificación de cápsula posterior sin cirugía intraocular",
      "Procedimiento indoloro realizado en consultorio",
      "Recuperación visual casi inmediata",
    ],
    postOpRecommendations: [
      "Puede presentarse percepción de puntos flotantes nuevos los primeros días, generalmente transitorios",
      "Acudir a revisión si la visión no mejora o empeora",
    ],
    technicalSpecs: {
      Tipo: "Consultorio",
      Anestesia: "Local",
      Duración: "5 a 10 min",
    },
    faqs: [
      {
        question: "¿Es lo mismo que operarse de catarata otra vez?",
        answer: "No. El cristalino ya fue reemplazado en la cirugía de catarata; la capsulotomía YAG solo abre con láser la cápsula que se opacificó alrededor del lente ya implantado, es mucho más breve y sin cirugía intraocular.",
      },
      {
        question: "¿Cuánto tiempo después de la cirugía de catarata puede necesitarse?",
        answer: "Puede presentarse semanas, meses o incluso años después de la cirugía de catarata; no hay forma de predecir el tiempo exacto, por eso se trata cuando aparecen los síntomas.",
      },
    ],
    relatedConditions: ["d-catarata"],
    lastReviewed: "2026-11-09",
    image: "/images/services/capsulotomia-yag.jpg",
    seo: {
      title: "Capsulotomía YAG en Mérida — Dr. Jaime Rodríguez Gómez",
      description: "Capsulotomía YAG para catarata secundaria, procedimiento rápido en consultorio en Mérida.",
      keywords: ["capsulotomía YAG", "catarata secundaria", "láser YAG", "oftalmólogo Mérida"],
    },
  },
  {
    id: "s-iridotomia",
    slug: "iridotomia",
    name: "Iridotomía",
    description: "Apertura láser en el iris para prevenir o tratar el glaucoma de ángulo cerrado.",
    longDescription:
      "La iridotomía es un procedimiento láser que crea una pequeña abertura en el iris para permitir el flujo normal del líquido intraocular, indicado en pacientes con ángulo de drenaje estrecho o cerrado, reduciendo el riesgo de una crisis de glaucoma agudo que puede dañar la visión de forma irreversible en poco tiempo.",
    type: "consultorio",
    anesthesiaType: "Local (gotas anestésicas)",
    duration: "5 a 15 minutos",
    recoveryTime: "Inmediata",
    isPainful: false,
    benefits: [
      "Previene crisis de glaucoma agudo de ángulo cerrado",
      "Procedimiento rápido realizado en consultorio",
      "Reduce de forma importante el riesgo de daño súbito al nervio óptico",
    ],
    postOpRecommendations: [
      "Uso de gotas antiinflamatorias según indicación",
      "Acudir a la revisión de control de presión intraocular programada",
    ],
    technicalSpecs: {
      Tipo: "Consultorio",
      Anestesia: "Local",
      Duración: "5 a 15 min",
    },
    faqs: [
      {
        question: "¿La iridotomía cura el glaucoma?",
        answer: "En el glaucoma de ángulo cerrado, la iridotomía trata directamente el mecanismo que eleva la presión; en otros tipos de glaucoma se usa junto con otros tratamientos, pero el glaucoma en general requiere vigilancia de por vida.",
      },
      {
        question: "¿La iridotomía afecta la visión o el aspecto del ojo?",
        answer: "La abertura se hace en una zona del iris poco visible y generalmente no afecta la visión ni el aspecto estético del ojo de forma notable.",
      },
    ],
    relatedConditions: ["d-glaucoma"],
    lastReviewed: "2026-11-09",
    image: "/images/services/iridotomia.jpg",
    seo: {
      title: "Iridotomía Láser en Mérida — Dr. Jaime Rodríguez Gómez",
      description: "Iridotomía láser para prevenir glaucoma de ángulo cerrado en Mérida, Yucatán.",
      keywords: ["iridotomía", "glaucoma de ángulo cerrado", "láser de iris", "oftalmólogo Mérida"],
    },
  },
  {
    id: "s-fondo-de-ojo",
    slug: "revision-de-fondo-de-ojo",
    name: "Revisión de Fondo de Ojo",
    description: "Exploración completa de retina y nervio óptico para detectar enfermedades oculares en etapas tempranas.",
    longDescription:
      "La revisión de fondo de ojo es una exploración detallada de la retina, el nervio óptico y los vasos sanguíneos del interior del ojo mediante dilatación pupilar. Es la herramienta principal para detectar a tiempo retinopatía diabética, glaucoma, degeneración macular y otras condiciones que avanzan sin síntomas en sus etapas iniciales.",
    type: "consultorio",
    anesthesiaType: "No requiere (gotas dilatadoras)",
    duration: "20 a 30 minutos, incluyendo el tiempo de dilatación",
    recoveryTime: "Visión borrosa y sensibilidad a la luz temporal por la dilatación, de 2 a 4 horas",
    isPainful: false,
    benefits: [
      "Detecta enfermedades oculares en etapas tempranas, antes de causar síntomas",
      "Herramienta esencial de vigilancia en diabetes, glaucoma e hipertensión",
      "Procedimiento rápido y sin dolor",
    ],
    postOpRecommendations: [
      "Usar lentes oscuros tras la cita por la sensibilidad a la luz de la dilatación",
      "Evitar conducir inmediatamente después de la revisión si la visión aún está borrosa",
    ],
    technicalSpecs: {
      Tipo: "Consultorio",
      Anestesia: "No requiere",
      Duración: "20 a 30 min",
    },
    faqs: [
      {
        question: "¿Con qué frecuencia debo hacerme una revisión de fondo de ojo?",
        answer: "Al menos una vez al año en población general a partir de los 40 años, y con mayor frecuencia si existe diabetes, antecedente familiar de glaucoma o alguna enfermedad retiniana ya diagnosticada.",
      },
      {
        question: "¿Por qué dilatan la pupila para esta revisión?",
        answer: "La dilatación permite ver con claridad toda la retina periférica y el nervio óptico, zonas que no son visibles con la pupila en su tamaño normal.",
      },
    ],
    relatedConditions: ["d-retinopatia-diabetica", "d-miopia", "d-degeneracion-macular", "d-glaucoma"],
    lastReviewed: "2026-11-09",
    image: "/images/services/revision-de-fondo-de-ojo.jpg",
    seo: {
      title: "Revisión de Fondo de Ojo en Mérida, Yucatán",
      description: "Revisión completa de retina y nervio óptico en Mérida, Yucatán, con el Dr. Jaime Rodríguez Gómez.",
      keywords: ["fondo de ojo", "revisión oftalmológica", "detección temprana", "oftalmólogo Mérida"],
    },
  },
];
