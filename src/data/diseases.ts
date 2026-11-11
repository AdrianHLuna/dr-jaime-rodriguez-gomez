import type { MedicalCondition } from "@/types/schema";

// Catálogo real de enfermedades oftalmológicas del Dr. Jaime Rodríguez Gómez.
// El intake trajo 16 entidades; se recortó a las 15 más relevantes (tope de
// AGENTS.md §3): "Catarata secundaria" (opacificación de cápsula posterior)
// se integró como mención dentro de "Catarata" y del servicio de
// Capsulotomía YAG en vez de quedarse como página independiente — es la
// entidad menos severa/distinta de las 16 y su tratamiento ya vive en el
// catálogo de servicios.
export const diseases: MedicalCondition[] = [
  {
    id: "d-catarata",
    slug: "catarata",
    name: "Catarata",
    technicalName: "Opacificación del Cristalino",
    colloquialNames: ["nube en el ojo", "vista nublada"],
    description:
      "La catarata es la opacificación progresiva del cristalino, el lente natural del ojo, que impide el paso normal de la luz hacia la retina. Es la causa más frecuente de pérdida de visión reversible en adultos mayores y se resuelve con cirugía ambulatoria de alta efectividad.",
    symptoms: [
      "Visión borrosa o nublada progresiva",
      "Sensibilidad aumentada a la luz y deslumbramiento nocturno",
      "Colores que se ven más apagados o amarillentos",
      "Necesidad frecuente de cambiar la graduación de los lentes",
      "Visión doble en un solo ojo",
    ],
    causes: [
      "Envejecimiento natural del cristalino (causa más común)",
      "Exposición prolongada a radiación ultravioleta sin protección",
      "Diabetes mellitus no controlada",
      "Traumatismo ocular previo o uso prolongado de esteroides",
    ],
    riskFactors: [
      "Edad mayor a 60 años",
      "Diabetes",
      "Tabaquismo",
      "Exposición solar sin lentes con filtro UV",
      "Antecedente familiar de catarata",
    ],
    mexicoStats:
      "La catarata es la primera causa de ceguera reversible en México, concentrada principalmente en población mayor de 60 años con acceso limitado a cirugía oportuna.",
    complications: [
      "Pérdida progresiva e irreversible de la visión si no se opera",
      "Catarata hipermadura con riesgo de glaucoma secundario",
      "Opacificación de la cápsula posterior (catarata secundaria) semanas o meses después de la cirugía",
    ],
    treatments: [
      "Cirugía de catarata con facoemulsificación e implante de lente intraocular",
      "Cirugía facorefractiva cuando se busca corregir también un defecto refractivo",
      "Capsulotomía YAG si se desarrolla opacificación de la cápsula posterior tras la cirugía",
    ],
    faqs: [
      {
        question: "¿La catarata se puede tratar con gotas o lentes?",
        answer:
          "No. La única forma de resolver la catarata es quirúrgica; gotas o lentes nuevos solo retrasan temporalmente la molestia visual, nunca revierten la opacidad del cristalino.",
      },
      {
        question: "¿Es una cirugía de alto riesgo?",
        answer:
          "Es una de las cirugías oftalmológicas más realizadas y seguras que existen, ambulatoria, con anestesia local y recuperación visual en pocos días en la mayoría de los pacientes.",
      },
      {
        question: "¿La catarata puede regresar después de operada?",
        answer:
          "El cristalino operado no vuelve a opacificarse, pero hasta en una parte de los pacientes la cápsula que sostiene el lente implantado se opacifica con el tiempo (catarata secundaria), lo cual se corrige en consultorio con capsulotomía YAG.",
      },
    ],
    relatedServices: ["s-cirugia-catarata", "s-capsulotomia-yag", "s-facorefractiva"],
    relatedSymptoms: ["sx-vision-borrosa", "sx-vision-disminuida"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/catarata.jpg",
    seo: {
      title: "Catarata — Diagnóstico y Cirugía en Mérida",
      description: "Catarata: síntomas, causas y cirugía de facoemulsificación con el Dr. Jaime Rodríguez Gómez, oftalmólogo en Mérida.",
      keywords: ["catarata", "cirugía de catarata", "oftalmólogo Mérida", "facoemulsificación"],
    },
  },
  {
    id: "d-retinopatia-diabetica",
    slug: "retinopatia-diabetica",
    name: "Retinopatía Diabética",
    technicalName: "Retinopatía Diabética",
    colloquialNames: ["daño en la retina por diabetes"],
    description:
      "La retinopatía diabética es el daño progresivo a los vasos sanguíneos de la retina causado por niveles elevados y sostenidos de glucosa en sangre. Es una de las principales causas de ceguera prevenible en adultos y puede avanzar sin síntomas en sus etapas iniciales.",
    symptoms: [
      "Manchas o puntos flotantes en la visión",
      "Visión borrosa que fluctúa con el control de la glucosa",
      "Visión disminuida progresiva",
      "Áreas oscuras o vacías en el campo visual",
      "Dificultad para distinguir colores",
    ],
    causes: [
      "Daño crónico a los vasos sanguíneos de la retina por hiperglucemia sostenida",
      "Diabetes tipo 1 o tipo 2 de larga evolución",
      "Mal control glucémico prolongado",
    ],
    riskFactors: [
      "Diabetes de más de 10 años de evolución",
      "Hemoglobina glucosilada elevada de forma sostenida",
      "Hipertensión arterial no controlada",
      "Embarazo en mujeres con diabetes preexistente",
    ],
    mexicoStats:
      "La retinopatía diabética es una de las principales causas de ceguera en adultos en edad productiva en México, país con una de las prevalencias de diabetes más altas de Latinoamérica.",
    complications: [
      "Edema macular diabético",
      "Hemorragia vítrea",
      "Desprendimiento de retina traccional",
      "Glaucoma neovascular",
    ],
    treatments: [
      "Control estricto de glucosa y presión arterial junto al médico internista/endocrinólogo",
      "Fotocoagulación retinal con láser",
      "Inyecciones intravítreas en casos de edema macular",
      "Vitrectomía en etapas avanzadas con hemorragia o tracción",
    ],
    faqs: [
      {
        question: "¿La retinopatía diabética da síntomas desde el inicio?",
        answer:
          "No siempre. Puede avanzar de forma silenciosa durante años, por lo que toda persona con diabetes debe hacerse una revisión de fondo de ojo al menos una vez al año aunque vea bien.",
      },
      {
        question: "¿Controlar el azúcar revierte el daño ya hecho?",
        answer:
          "El buen control glucémico frena la progresión del daño, pero no revierte las lesiones retinianas ya establecidas — por eso la detección temprana es la herramienta más efectiva.",
      },
      {
        question: "¿El láser cura la retinopatía diabética?",
        answer:
          "El láser (fotocoagulación) no cura la enfermedad de fondo, pero sella y estabiliza los vasos dañados para frenar su progresión y reducir el riesgo de hemorragia o desprendimiento de retina.",
      },
    ],
    relatedServices: ["s-fotocoagulacion", "s-cirugia-retina", "s-fondo-de-ojo"],
    relatedSymptoms: ["sx-manchas-vision", "sx-vision-borrosa", "sx-vision-disminuida"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/retinopatia-diabetica.jpg",
    seo: {
      title: "Retinopatía Diabética — Diagnóstico en Mérida",
      description: "Retinopatía diabética: síntomas, revisión de fondo de ojo y tratamiento con láser en Mérida, Yucatán.",
      keywords: ["retinopatía diabética", "fondo de ojo", "diabetes y vista", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-miopia",
    slug: "miopia",
    name: "Miopía",
    technicalName: "Miopía",
    colloquialNames: ["vista cansada de lejos", "no ver bien de lejos"],
    description:
      "La miopía es un defecto refractivo en el que las imágenes se enfocan delante de la retina en lugar de sobre ella, haciendo que los objetos lejanos se vean borrosos mientras la visión de cerca permanece relativamente clara.",
    symptoms: [
      "Visión borrosa de objetos lejanos",
      "Necesidad de entrecerrar los ojos para enfocar de lejos",
      "Dolor de cabeza por esfuerzo visual",
      "Dificultad para ver el pizarrón, letreros o la televisión con claridad",
    ],
    causes: [
      "Globo ocular más alargado de lo normal",
      "Curvatura excesiva de la córnea",
      "Factor hereditario (antecedente familiar de miopía)",
    ],
    riskFactors: [
      "Antecedente familiar de miopía",
      "Uso prolongado de pantallas a corta distancia",
      "Poco tiempo de actividades al aire libre durante la infancia",
    ],
    mexicoStats:
      "La miopía es el defecto refractivo más frecuente en población escolar y adulta joven en México, con tendencia al aumento asociada al mayor uso de pantallas.",
    complications: [
      "Miopía magna con mayor riesgo de desprendimiento de retina",
      "Glaucoma de ángulo abierto más frecuente en miopía alta",
      "Degeneración retiniana periférica",
    ],
    treatments: [
      "Lentes graduados o de contacto",
      "Cirugía refractiva LASIK en candidatos adecuados",
      "Revisión de fondo de ojo periódica en miopía alta para vigilar la retina periférica",
    ],
    faqs: [
      {
        question: "¿La miopía sigue aumentando en la edad adulta?",
        answer:
          "Generalmente se estabiliza al final de la adolescencia o inicio de la adultez, aunque en algunos casos de miopía alta puede progresar más tiempo y requiere vigilancia.",
      },
      {
        question: "¿Toda persona con miopía puede operarse con LASIK?",
        answer:
          "No todas son candidatas; depende del grosor corneal, la graduación, la estabilidad del defecto y la salud general del ojo — se confirma con una evaluación preoperatoria completa.",
      },
      {
        question: "¿Usar lentes débiles 'ejercita' el ojo y frena la miopía?",
        answer:
          "No, es un mito común. Usar la graduación correcta no acelera ni frena la miopía; lo que sí ayuda en niños, según evidencia actual, son tratamientos específicos de control de miopía indicados por el especialista.",
      },
    ],
    relatedServices: ["s-lasik", "s-fondo-de-ojo"],
    relatedSymptoms: ["sx-vision-borrosa"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/miopia.jpg",
    seo: {
      title: "Miopía — Diagnóstico y Corrección en Mérida",
      description: "Miopía: causas, síntomas y opciones de corrección incluyendo cirugía LASIK con el Dr. Jaime Rodríguez Gómez.",
      keywords: ["miopía", "cirugía LASIK", "defecto refractivo", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-astigmatismo",
    slug: "astigmatismo",
    name: "Astigmatismo",
    technicalName: "Astigmatismo Corneal",
    colloquialNames: ["vista distorsionada"],
    description:
      "El astigmatismo ocurre cuando la córnea o el cristalino tienen una curvatura irregular, provocando que la luz se enfoque en más de un punto de la retina y generando visión borrosa o distorsionada tanto de lejos como de cerca.",
    symptoms: [
      "Visión borrosa o distorsionada a cualquier distancia",
      "Dificultad para distinguir líneas rectas",
      "Fatiga visual y dolor de cabeza",
      "Necesidad de entrecerrar los ojos para enfocar",
    ],
    causes: [
      "Curvatura irregular de la córnea (la causa más común)",
      "Curvatura irregular del cristalino",
      "Factor hereditario",
    ],
    riskFactors: [
      "Antecedente familiar de astigmatismo",
      "Cicatrices corneales previas",
      "Queratocono",
    ],
    mexicoStats:
      "El astigmatismo suele presentarse junto con miopía o hipermetropía en la población mexicana, y es una de las causas más frecuentes de consulta por visión borrosa en todas las edades.",
    complications: [
      "Ambliopía (ojo perezoso) si no se corrige a tiempo en la infancia",
      "Fatiga visual crónica",
    ],
    treatments: [
      "Lentes graduados con corrección cilíndrica",
      "Lentes de contacto tóricos",
      "Cirugía refractiva LASIK en candidatos adecuados",
    ],
    faqs: [
      {
        question: "¿El astigmatismo empeora con el tiempo?",
        answer:
          "Puede mantenerse relativamente estable en la edad adulta o cambiar ligeramente; los cambios bruscos en poco tiempo deben evaluarse para descartar queratocono.",
      },
      {
        question: "¿Se puede combinar la corrección de astigmatismo con cirugía de catarata?",
        answer:
          "Sí, existen lentes intraoculares tóricos diseñados específicamente para corregir el astigmatismo al mismo tiempo que se opera la catarata.",
      },
      {
        question: "¿El astigmatismo es hereditario?",
        answer:
          "Tiene un componente hereditario importante; si uno o ambos padres tienen astigmatismo, es más probable que sus hijos también lo presenten, por lo que conviene revisión visual temprana en esos casos.",
      },
    ],
    relatedServices: ["s-lasik"],
    relatedSymptoms: ["sx-vision-borrosa"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/astigmatismo.jpg",
    seo: {
      title: "Astigmatismo — Diagnóstico y Tratamiento en Mérida",
      description: "Astigmatismo: causas, síntomas y corrección con lentes o cirugía refractiva en Mérida, Yucatán.",
      keywords: ["astigmatismo", "visión distorsionada", "cirugía refractiva", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-presbicia",
    slug: "presbicia",
    name: "Presbicia",
    technicalName: "Presbicia",
    colloquialNames: ["vista cansada"],
    description:
      "La presbicia es la pérdida natural y progresiva de la capacidad del cristalino para enfocar objetos cercanos, relacionada con el envejecimiento. Suele notarse a partir de los 40-45 años y afecta a prácticamente toda la población con el paso del tiempo.",
    symptoms: [
      "Dificultad para leer letra pequeña de cerca",
      "Necesidad de alejar el texto o el celular para enfocar",
      "Dolor de cabeza o fatiga visual tras leer",
      "Mayor dificultad con poca luz",
    ],
    causes: [
      "Pérdida de elasticidad natural del cristalino con la edad",
      "Debilitamiento del músculo ciliar que ajusta el enfoque",
    ],
    riskFactors: [
      "Edad mayor a 40 años (prácticamente universal)",
      "Trabajo visual cercano prolongado",
    ],
    mexicoStats:
      "La presbicia afecta de forma prácticamente universal a la población mexicana mayor de 45 años, siendo uno de los motivos de consulta oftalmológica más frecuentes en ese grupo de edad.",
    complications: [
      "Fatiga visual crónica si no se corrige",
      "Dependencia progresiva de múltiples graduaciones (lejos/cerca)",
    ],
    treatments: [
      "Lentes para lectura o multifocales",
      "Cirugía facorefractiva con lente intraocular multifocal, frecuentemente combinada con cirugía de catarata",
    ],
    faqs: [
      {
        question: "¿La presbicia se puede prevenir?",
        answer:
          "No, es un proceso natural del envejecimiento del cristalino que eventualmente afecta a todas las personas, independientemente de si tuvieron buena visión toda su vida.",
      },
      {
        question: "¿Existe cirugía para no depender de lentes de lectura?",
        answer:
          "Sí, la cirugía facorefractiva con implante de lente intraocular multifocal puede reducir significativamente la dependencia de lentes para cerca, especialmente cuando se realiza junto con cirugía de catarata.",
      },
      {
        question: "¿A qué edad suele empezar la presbicia?",
        answer:
          "Generalmente entre los 40 y 45 años, aunque puede notarse antes en personas con hipermetropía no corregida o después en quienes tienen cierto grado de miopía previa.",
      },
    ],
    relatedServices: ["s-facorefractiva"],
    relatedSymptoms: ["sx-vision-borrosa", "sx-vision-disminuida"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/presbicia.jpg",
    seo: {
      title: "Presbicia (Vista Cansada) — Tratamiento en Mérida",
      description: "Presbicia o vista cansada: síntomas y opciones de corrección, incluyendo cirugía facorefractiva, en Mérida.",
      keywords: ["presbicia", "vista cansada", "lente intraocular multifocal", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-agujero-macular",
    slug: "agujero-macular",
    name: "Agujero Macular",
    technicalName: "Agujero Macular",
    description:
      "El agujero macular es una abertura pequeña que se forma en el centro de la retina (mácula), el área responsable de la visión detallada y central. Suele ser consecuencia de la tracción del gel vítreo sobre la mácula al envejecer.",
    symptoms: [
      "Visión central borrosa o distorsionada",
      "Mancha o área oscura en el centro de la visión",
      "Dificultad para leer o reconocer rostros",
      "Líneas rectas que se ven onduladas (metamorfopsia)",
    ],
    causes: [
      "Tracción del vítreo sobre la mácula relacionada con la edad",
      "Traumatismo ocular",
      "Miopía alta",
    ],
    riskFactors: [
      "Edad mayor a 60 años",
      "Sexo femenino (mayor incidencia reportada)",
      "Miopía alta",
      "Traumatismo ocular previo",
    ],
    mexicoStats:
      "El agujero macular es una causa relativamente poco frecuente pero significativa de pérdida de visión central en adultos mayores atendidos en consulta de retina en México.",
    complications: [
      "Pérdida permanente de visión central si no se trata a tiempo",
      "Progresión a un agujero macular de mayor tamaño",
    ],
    treatments: [
      "Cirugía de retina (vitrectomía) con cierre del agujero macular",
      "Observación en agujeros pequeños sin progresión, con vigilancia estrecha",
    ],
    faqs: [
      {
        question: "¿El agujero macular causa ceguera total?",
        answer:
          "No causa ceguera total porque la visión periférica se conserva, pero sí afecta de forma importante la visión central necesaria para leer, reconocer rostros o conducir.",
      },
      {
        question: "¿Qué tan efectiva es la cirugía?",
        answer:
          "La vitrectomía con cierre del agujero macular tiene una alta tasa de éxito anatómico, especialmente cuando se opera en etapas tempranas, aunque la recuperación visual completa varía según el tamaño y tiempo de evolución.",
      },
      {
        question: "¿El agujero macular afecta un ojo o los dos?",
        answer:
          "Generalmente aparece en un solo ojo, aunque existe un riesgo moderado de que se desarrolle también en el ojo contrario con el tiempo, por lo que se recomienda vigilancia del ojo sano.",
      },
    ],
    relatedServices: ["s-cirugia-retina"],
    relatedSymptoms: ["sx-vision-disminuida", "sx-manchas-vision"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/agujero-macular.jpg",
    seo: {
      title: "Agujero Macular — Diagnóstico y Cirugía en Mérida",
      description: "Agujero macular: síntomas, diagnóstico y cirugía de retina con el Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["agujero macular", "cirugía de retina", "vitrectomía", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-membrana-epirretiniana",
    slug: "membrana-epirretiniana",
    name: "Membrana Epirretiniana",
    technicalName: "Membrana Epirretiniana (Maculopatía en Celofán)",
    colloquialNames: ["arruga en la retina"],
    description:
      "La membrana epirretiniana es una capa fina de tejido cicatricial que se forma sobre la superficie de la mácula y, al contraerse, arruga o distorsiona la retina central, afectando la calidad y nitidez de la visión.",
    symptoms: [
      "Visión central distorsionada o borrosa",
      "Líneas rectas que se ven onduladas",
      "Dificultad para leer letra pequeña",
      "Visión doble en un solo ojo en casos avanzados",
    ],
    causes: [
      "Desprendimiento posterior del vítreo relacionado con la edad",
      "Secuela de cirugía ocular previa",
      "Inflamación o enfermedad vascular retiniana previa",
    ],
    riskFactors: [
      "Edad mayor a 50 años",
      "Cirugía de retina o desprendimiento de retina previo",
      "Diabetes",
    ],
    mexicoStats:
      "La membrana epirretiniana es un hallazgo cada vez más frecuente en consulta de retina conforme aumenta la expectativa de vida de la población mexicana.",
    complications: [
      "Progresión de la distorsión visual si la membrana se contrae más",
      "Edema macular asociado",
    ],
    treatments: [
      "Observación periódica en casos leves sin progresión",
      "Cirugía de retina (vitrectomía con pelado de membrana) en casos sintomáticos o progresivos",
    ],
    faqs: [
      {
        question: "¿Toda membrana epirretiniana necesita cirugía?",
        answer:
          "No. Muchas membranas son leves y estables, y solo se vigilan periódicamente; la cirugía se recomienda cuando afecta de forma significativa la calidad de visión o continúa progresando.",
      },
      {
        question: "¿La visión vuelve a ser perfecta después de la cirugía?",
        answer:
          "La mayoría de los pacientes mejora de forma notable, pero la recuperación completa depende del tiempo de evolución y del grado de distorsión retiniana antes de operar.",
      },
      {
        question: "¿La membrana epirretiniana puede confundirse con catarata?",
        answer:
          "Ambas pueden causar visión borrosa en adultos mayores, pero son condiciones distintas que se diferencian con una exploración de fondo de ojo; incluso pueden coexistir en el mismo paciente.",
      },
    ],
    relatedServices: ["s-cirugia-retina"],
    relatedSymptoms: ["sx-vision-disminuida", "sx-manchas-vision"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/membrana-epirretiniana.jpg",
    seo: {
      title: "Membrana Epirretiniana — Diagnóstico en Mérida",
      description: "Membrana epirretiniana: síntomas, diagnóstico y cirugía de retina en Mérida, Yucatán.",
      keywords: ["membrana epirretiniana", "cirugía de retina", "distorsión visual", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-pterigion",
    slug: "pterigion",
    name: "Pterigión",
    technicalName: "Pterigión",
    colloquialNames: ["carnosidad en el ojo"],
    description:
      "El pterigión es un crecimiento de tejido fibrovascular que avanza desde la conjuntiva hacia la córnea, generalmente asociado a la exposición solar y ambiental prolongada. Puede ser solo estético o afectar la visión al avanzar sobre la córnea.",
    symptoms: [
      "Carnosidad visible en la superficie del ojo, habitualmente del lado nasal",
      "Ardor o sensación de cuerpo extraño",
      "Ojo rojo recurrente",
      "Visión borrosa si el crecimiento invade el eje visual",
    ],
    causes: [
      "Exposición crónica a luz ultravioleta y viento",
      "Ambientes secos, polvosos o con exposición solar prolongada",
    ],
    riskFactors: [
      "Exposición solar frecuente sin protección (trabajo al aire libre)",
      "Vivir en climas cálidos y soleados",
      "Exposición a polvo o viento constante",
    ],
    mexicoStats:
      "El pterigión es especialmente frecuente en regiones de clima cálido y alta exposición solar de México, incluida la península de Yucatán.",
    complications: [
      "Astigmatismo irregular inducido por la tracción sobre la córnea",
      "Invasión del eje visual con pérdida de agudeza visual",
      "Recurrencia tras cirugía si no se usa técnica con injerto",
    ],
    treatments: [
      "Lubricantes y protección solar en casos leves sin progresión",
      "Cirugía de resección de pterigión con injerto conjuntival en casos sintomáticos o que afectan la visión",
    ],
    faqs: [
      {
        question: "¿El pterigión siempre hay que operarlo?",
        answer:
          "No, si es pequeño, estable y no afecta la visión puede solo vigilarse y protegerse del sol; se opera cuando crece, molesta de forma persistente o se acerca al centro de la córnea.",
      },
      {
        question: "¿Puede regresar después de la cirugía?",
        answer:
          "Sí puede recurrir, pero la técnica quirúrgica con injerto de conjuntiva reduce de forma importante esa posibilidad comparada con la resección simple.",
      },
      {
        question: "¿Usar lentes de sol previene el pterigión?",
        answer:
          "Sí. El uso constante de lentes con protección UV y sombrero de ala ancha en exposición solar prolongada reduce el riesgo de que aparezca o de que un pterigión pequeño progrese.",
      },
    ],
    relatedServices: ["s-reseccion-pterigion"],
    relatedSymptoms: ["sx-ardor", "sx-cuerpo-extrano", "sx-ojo-rojo"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/pterigion.jpg",
    seo: {
      title: "Pterigión — Diagnóstico y Cirugía en Mérida",
      description: "Pterigión: causas, síntomas y cirugía de resección con injerto en Mérida, Yucatán.",
      keywords: ["pterigión", "carnosidad en el ojo", "cirugía de pterigión", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-conjuntivitis",
    slug: "conjuntivitis",
    name: "Conjuntivitis",
    technicalName: "Conjuntivitis",
    colloquialNames: ["ojo rojo", "mal de ojo"],
    description:
      "La conjuntivitis es la inflamación de la conjuntiva, la membrana transparente que cubre la parte blanca del ojo y el interior de los párpados. Puede ser de origen viral, bacteriano o alérgico, y es una de las causas más comunes de ojo rojo.",
    symptoms: [
      "Ojo rojo en uno o ambos ojos",
      "Comezón o ardor",
      "Secreción acuosa o purulenta",
      "Sensación de arenilla",
      "Párpados pegados al despertar (origen bacteriano)",
    ],
    causes: [
      "Infección viral (la causa más frecuente)",
      "Infección bacteriana",
      "Reacción alérgica a polen, polvo o cosméticos",
      "Irritantes ambientales (cloro, humo, químicos)",
    ],
    riskFactors: [
      "Contacto cercano con personas infectadas",
      "Uso de lentes de contacto sin higiene adecuada",
      "Antecedente de alergias oculares",
    ],
    mexicoStats:
      "La conjuntivitis es uno de los motivos de consulta oftalmológica más frecuentes en México, con picos estacionales asociados a temporada de alergias y brotes virales.",
    complications: [
      "Queratitis (afectación de la córnea) en casos no tratados",
      "Contagio a otras personas en formas virales o bacterianas",
    ],
    treatments: [
      "Lágrimas artificiales y compresas frías en casos virales leves",
      "Antibiótico tópico en casos bacterianos confirmados",
      "Antihistamínico tópico en casos alérgicos",
      "Suspensión de lentes de contacto durante el episodio agudo",
    ],
    faqs: [
      {
        question: "¿La conjuntivitis es contagiosa?",
        answer:
          "La conjuntivitis viral y la bacteriana sí son contagiosas por contacto directo o con objetos contaminados; la alérgica no se contagia porque no es una infección.",
      },
      {
        question: "¿Puedo usar cualquier gota para el ojo rojo?",
        answer:
          "No es recomendable automedicarse, especialmente con gotas que contienen esteroides, porque pueden empeorar infecciones no diagnosticadas correctamente — lo indicado es confirmar la causa antes de tratar.",
      },
      {
        question: "¿Cuánto dura una conjuntivitis viral?",
        answer:
          "Generalmente entre 7 y 14 días, aunque la molestia puede persistir algunos días más mientras el ojo termina de recuperarse por completo.",
      },
    ],
    relatedServices: [],
    relatedSymptoms: ["sx-ojo-rojo", "sx-picazon", "sx-ardor"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/conjuntivitis.jpg",
    seo: {
      title: "Conjuntivitis — Diagnóstico y Tratamiento en Mérida",
      description: "Conjuntivitis: causas, síntomas y tratamiento del ojo rojo con el Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["conjuntivitis", "ojo rojo", "tratamiento ocular", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-ojo-seco",
    slug: "sindrome-de-ojo-seco",
    name: "Síndrome de Ojo Seco",
    technicalName: "Síndrome de Ojo Seco",
    colloquialNames: ["ojos resecos", "falta de lágrima"],
    description:
      "El síndrome de ojo seco ocurre cuando el ojo no produce suficiente lágrima o la lágrima producida no tiene la calidad necesaria para mantener la superficie ocular lubricada, generando molestia crónica e inflamación de la superficie del ojo.",
    symptoms: [
      "Ardor o sensación de arenilla constante",
      "Sensación de cuerpo extraño",
      "Picazón ocular",
      "Enrojecimiento leve persistente",
      "Visión borrosa que mejora al parpadear",
    ],
    causes: [
      "Disminución en la producción de lágrima relacionada con la edad",
      "Disfunción de las glándulas de meibomio (blefaritis)",
      "Uso prolongado de pantallas con parpadeo reducido",
      "Ambientes con aire acondicionado o viento constante",
    ],
    riskFactors: [
      "Edad mayor a 50 años",
      "Sexo femenino, especialmente tras la menopausia",
      "Uso prolongado de lentes de contacto",
      "Uso excesivo de pantallas",
    ],
    mexicoStats:
      "El síndrome de ojo seco es uno de los diagnósticos oftalmológicos más comunes en consulta en México, con incremento sostenido asociado al mayor uso de pantallas digitales.",
    complications: [
      "Erosiones superficiales de la córnea en casos crónicos no tratados",
      "Mayor riesgo de infección ocular por daño a la superficie",
    ],
    treatments: [
      "Lágrimas artificiales sin conservadores",
      "Manejo de la blefaritis asociada cuando existe",
      "Modificación de hábitos (pausas de pantalla, humidificación ambiental)",
    ],
    faqs: [
      {
        question: "¿El ojo seco tiene cura definitiva?",
        answer:
          "Es una condición crónica que se controla, no siempre se cura por completo, pero con el tratamiento adecuado la mayoría de los pacientes logra estar cómodo y sin daño a la superficie ocular.",
      },
      {
        question: "¿Usar el celular mucho tiempo empeora el ojo seco?",
        answer:
          "Sí, al concentrarnos en pantallas parpadeamos con menos frecuencia, lo que reduce la renovación de la película lagrimal y empeora los síntomas.",
      },
      {
        question: "¿El aire acondicionado empeora el ojo seco?",
        answer:
          "Sí, el ambiente seco y con corriente de aire constante del aire acondicionado o los ventiladores acelera la evaporación de la lágrima y suele empeorar los síntomas.",
      },
    ],
    relatedServices: [],
    relatedSymptoms: ["sx-ardor", "sx-cuerpo-extrano", "sx-picazon"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/sindrome-de-ojo-seco.jpg",
    seo: {
      title: "Síndrome de Ojo Seco — Tratamiento en Mérida",
      description: "Síndrome de ojo seco: causas, síntomas y tratamiento con el Dr. Jaime Rodríguez Gómez en Mérida, Yucatán.",
      keywords: ["ojo seco", "síndrome de ojo seco", "ardor ocular", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-degeneracion-macular",
    slug: "degeneracion-macular",
    name: "Degeneración Macular",
    technicalName: "Degeneración Macular Relacionada con la Edad (DMRE)",
    colloquialNames: ["mancha en el centro de la vista"],
    description:
      "La degeneración macular relacionada con la edad es el deterioro progresivo de la mácula, el área central de la retina responsable de la visión detallada, y es una de las principales causas de pérdida de visión central irreversible en adultos mayores.",
    symptoms: [
      "Mancha o área borrosa en el centro de la visión",
      "Líneas rectas que se ven onduladas",
      "Dificultad para reconocer rostros",
      "Necesidad de más luz para leer",
    ],
    causes: [
      "Envejecimiento de las células de la mácula",
      "Acumulación de depósitos (drusas) bajo la retina",
      "Formación de vasos sanguíneos anormales en la forma húmeda de la enfermedad",
    ],
    riskFactors: [
      "Edad mayor a 60 años",
      "Tabaquismo",
      "Antecedente familiar de degeneración macular",
      "Hipertensión arterial",
    ],
    mexicoStats:
      "La degeneración macular relacionada con la edad es una de las principales causas de baja visión irreversible en adultos mayores de 60 años en México.",
    complications: [
      "Pérdida permanente de la visión central si no se trata la forma húmeda a tiempo",
      "Escotoma central (mancha fija en el centro de la visión)",
    ],
    treatments: [
      "Suplementos vitamínicos específicos en etapas tempranas (forma seca)",
      "Inyecciones intravítreas antiangiogénicas en la forma húmeda",
      "Fotocoagulación retinal en casos seleccionados",
      "Revisión de fondo de ojo periódica para vigilar progresión",
    ],
    faqs: [
      {
        question: "¿La degeneración macular causa ceguera total?",
        answer:
          "No causa ceguera total porque la visión periférica se conserva, pero sí afecta de forma importante actividades como leer, reconocer rostros o conducir.",
      },
      {
        question: "¿Se puede prevenir?",
        answer:
          "No se puede prevenir por completo, pero dejar de fumar, controlar la presión arterial y hacerse revisiones periódicas de fondo de ojo ayuda a detectarla y tratarla a tiempo.",
      },
      {
        question: "¿Existen dos tipos de degeneración macular?",
        answer:
          "Sí: la forma seca (más frecuente, de progresión lenta) y la forma húmeda (menos frecuente pero de progresión rápida por vasos anormales), que requiere tratamiento con inyecciones intravítreas.",
      },
    ],
    relatedServices: ["s-fotocoagulacion", "s-fondo-de-ojo"],
    relatedSymptoms: ["sx-vision-disminuida", "sx-manchas-vision"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/degeneracion-macular.jpg",
    seo: {
      title: "Degeneración Macular — Diagnóstico en Mérida",
      description: "Degeneración macular relacionada con la edad: síntomas y tratamiento con el Dr. Jaime Rodríguez Gómez.",
      keywords: ["degeneración macular", "DMRE", "visión central", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-desprendimiento-retina",
    slug: "desprendimiento-de-retina",
    name: "Desprendimiento de Retina",
    technicalName: "Desprendimiento de Retina",
    description:
      "El desprendimiento de retina ocurre cuando la retina se separa de la capa de tejido que la sostiene en la parte posterior del ojo, interrumpiendo su riego sanguíneo. Es una urgencia oftalmológica real: sin tratamiento oportuno puede causar pérdida permanente de la visión.",
    symptoms: [
      "Aparición súbita de muchos puntos o manchas flotantes",
      "Destellos de luz (fotopsias)",
      "Sombra o cortina oscura que avanza en el campo visual",
      "Pérdida de visión periférica o central según la zona afectada",
    ],
    causes: [
      "Desgarro o ruptura en la retina que permite el paso de líquido debajo de ella",
      "Tracción del gel vítreo sobre la retina",
      "Traumatismo ocular severo",
    ],
    riskFactors: [
      "Miopía alta",
      "Cirugía ocular previa (incluida cirugía de catarata)",
      "Traumatismo ocular",
      "Antecedente familiar de desprendimiento de retina",
    ],
    mexicoStats:
      "El desprendimiento de retina es una de las urgencias oftalmológicas más graves atendidas en México; el pronóstico visual depende directamente de qué tan rápido se trate.",
    complications: [
      "Pérdida permanente e irreversible de la visión si no se opera a tiempo",
      "Proliferación vitreorretiniana (cicatrización excesiva que complica la cirugía)",
    ],
    treatments: [
      "Cirugía de retina urgente (vitrectomía, con o sin colocación de gas o aceite de silicón)",
      "Fotocoagulación con láser para sellar desgarros pequeños antes de que progresen a desprendimiento completo",
    ],
    faqs: [
      {
        question: "¿El desprendimiento de retina es una urgencia real?",
        answer:
          "Sí, es una urgencia oftalmológica verdadera. Ante destellos de luz, muchas moscas volantes nuevas o una sombra que avanza en la visión, se debe acudir de inmediato, no esperar a una cita programada.",
      },
      {
        question: "¿Se recupera toda la visión después de operar?",
        answer:
          "Depende de qué tan rápido se trate y si el desprendimiento afectó o no el centro de la visión (mácula): entre más pronto se opere, mejor es el pronóstico visual final.",
      },
      {
        question: "¿Un desprendimiento de retina puede repetirse?",
        answer:
          "Existe riesgo de recurrencia, especialmente en ojos con miopía alta o con formación de tejido cicatricial (proliferación vitreorretiniana), por lo que el seguimiento postoperatorio es indispensable.",
      },
    ],
    relatedServices: ["s-cirugia-retina"],
    relatedSymptoms: ["sx-manchas-vision", "sx-vision-disminuida"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/desprendimiento-de-retina.jpg",
    seo: {
      title: "Desprendimiento de Retina — Urgencia en Mérida",
      description: "Desprendimiento de retina: señales de alarma y cirugía urgente con el Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["desprendimiento de retina", "urgencia oftalmológica", "cirugía de retina", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-glaucoma",
    slug: "glaucoma",
    name: "Glaucoma",
    technicalName: "Glaucoma",
    colloquialNames: ["el ladrón silencioso de la vista"],
    description:
      "El glaucoma es un grupo de enfermedades que dañan progresivamente el nervio óptico, generalmente asociado a presión intraocular elevada. Avanza sin síntomas durante años, por lo que suele detectarse cuando ya existe daño visual irreversible.",
    symptoms: [
      "La mayoría de los casos no da síntomas en etapas tempranas",
      "Pérdida gradual de la visión periférica",
      "Presión intraocular elevada detectada en revisión",
      "Dolor ocular intenso y visión de halos en el glaucoma agudo de ángulo cerrado",
    ],
    causes: [
      "Acumulación de líquido intraocular que eleva la presión dentro del ojo",
      "Daño progresivo al nervio óptico por la presión elevada",
    ],
    riskFactors: [
      "Edad mayor a 40 años",
      "Antecedente familiar de glaucoma",
      "Miopía alta",
      "Diabetes e hipertensión arterial",
    ],
    mexicoStats:
      "El glaucoma es una de las principales causas de ceguera irreversible en México, precisamente porque la mayoría de los pacientes no tiene síntomas hasta etapas avanzadas.",
    complications: [
      "Pérdida irreversible y progresiva de la visión periférica hasta la ceguera total si no se trata",
      "Crisis de glaucoma agudo de ángulo cerrado (urgencia oftalmológica con dolor intenso)",
    ],
    treatments: [
      "Gotas para disminuir la presión intraocular",
      "Iridotomía láser en glaucoma de ángulo cerrado o estrecho",
      "Vigilancia con revisión de fondo de ojo y toma de presión intraocular periódica",
    ],
    faqs: [
      {
        question: "¿Por qué le dicen al glaucoma 'el ladrón silencioso de la vista'?",
        answer:
          "Porque en la mayoría de los casos no produce dolor ni síntomas hasta que ya existe pérdida significativa e irreversible del campo visual periférico — por eso la revisión periódica es la única forma real de detectarlo a tiempo.",
      },
      {
        question: "¿El glaucoma se cura?",
        answer:
          "No tiene cura, pero sí tratamiento efectivo: con gotas, láser o cirugía se puede controlar la presión intraocular y detener o frenar la progresión del daño al nervio óptico.",
      },
      {
        question: "¿Cada cuánto debo medirme la presión intraocular?",
        answer:
          "A partir de los 40 años, o antes si hay antecedente familiar de glaucoma, se recomienda una revisión oftalmológica completa con medición de presión intraocular al menos una vez al año.",
      },
    ],
    relatedServices: ["s-iridotomia", "s-fondo-de-ojo"],
    relatedSymptoms: ["sx-presion-intraocular", "sx-vision-disminuida", "sx-dolor-ocular"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/glaucoma.jpg",
    seo: {
      title: "Glaucoma — Diagnóstico y Tratamiento en Mérida",
      description: "Glaucoma: síntomas, presión intraocular y tratamiento con el Dr. Jaime Rodríguez Gómez en Mérida, Yucatán.",
      keywords: ["glaucoma", "presión intraocular", "nervio óptico", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-blefaritis",
    slug: "blefaritis",
    name: "Blefaritis",
    technicalName: "Blefaritis",
    colloquialNames: ["párpados inflamados"],
    description:
      "La blefaritis es la inflamación crónica del borde de los párpados, generalmente por disfunción de las glándulas que producen la capa grasa de la lágrima o por exceso de bacterias en la base de las pestañas, y suele acompañarse de síntomas de ojo seco.",
    symptoms: [
      "Párpados inflamados o enrojecidos",
      "Ardor o picazón en el borde de los párpados",
      "Costras en la base de las pestañas al despertar",
      "Sensación de arenilla",
      "Pestañas que se caen con facilidad",
    ],
    causes: [
      "Disfunción de las glándulas de meibomio",
      "Exceso de bacterias en la base de las pestañas",
      "Rosácea ocular o dermatitis seborreica asociada",
    ],
    riskFactors: [
      "Rosácea o dermatitis seborreica",
      "Uso prolongado de maquillaje sin retirarlo adecuadamente",
      "Mala higiene palpebral",
    ],
    mexicoStats:
      "La blefaritis es una de las causas más frecuentes de molestia ocular crónica en consulta oftalmológica general en México, con frecuencia subdiagnosticada por confundirse con alergia.",
    complications: [
      "Síndrome de ojo seco secundario",
      "Orzuelos o chalazión recurrentes",
      "Irritación corneal crónica en casos severos no tratados",
    ],
    treatments: [
      "Higiene palpebral diaria con compresas tibias y limpieza del borde del párpado",
      "Lágrimas artificiales para el ojo seco asociado",
      "Antibiótico tópico en casos con sobreinfección bacteriana",
    ],
    faqs: [
      {
        question: "¿La blefaritis se quita con un solo tratamiento?",
        answer:
          "No, es una condición crónica que se controla con higiene palpebral constante; suspender los cuidados suele hacer que los síntomas regresen.",
      },
      {
        question: "¿La blefaritis es contagiosa?",
        answer:
          "No es una condición contagiosa; está relacionada con la función de las propias glándulas del párpado, no con una infección que se transmita a otras personas.",
      },
      {
        question: "¿La blefaritis puede afectar la visión?",
        answer:
          "Por sí sola generalmente no daña la visión, pero si causa ojo seco crónico severo o irritación corneal sostenida sin tratamiento, puede llegar a afectarla — por eso no conviene dejarla sin control.",
      },
    ],
    relatedServices: [],
    relatedSymptoms: ["sx-inflamacion-palpebral", "sx-ardor", "sx-picazon"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/blefaritis.jpg",
    seo: {
      title: "Blefaritis — Diagnóstico y Tratamiento en Mérida",
      description: "Blefaritis: causas, síntomas y manejo de la inflamación palpebral con el Dr. Jaime Rodríguez Gómez.",
      keywords: ["blefaritis", "párpados inflamados", "ojo seco", "oftalmólogo Mérida"],
    },
  },
  {
    id: "d-chalazion",
    slug: "chalazion",
    name: "Chalazión",
    technicalName: "Chalazión",
    colloquialNames: ["perrilla", "bolita en el párpado"],
    description:
      "El chalazión es una inflamación crónica y generalmente indolora causada por la obstrucción de una glándula de meibomio en el párpado, que forma un bulto firme visible o palpable. A diferencia del orzuelo, rara vez es doloroso.",
    symptoms: [
      "Bulto firme e indoloro en el párpado",
      "Inflamación localizada del párpado",
      "Enrojecimiento leve en la etapa inicial",
      "Sensación de peso en el párpado si el chalazión es grande",
    ],
    causes: [
      "Obstrucción de una glándula de meibomio en el párpado",
      "Blefaritis crónica no tratada",
    ],
    riskFactors: [
      "Blefaritis crónica",
      "Antecedente de chalazión previo",
      "Rosácea",
    ],
    mexicoStats:
      "El chalazión es una de las consultas oftalmológicas menores más frecuentes en México, especialmente en pacientes con blefaritis crónica no tratada de fondo.",
    complications: [
      "Crecimiento progresivo si no se trata la blefaritis de base",
      "Astigmatismo irregular temporal si el chalazión es grande y presiona la córnea",
    ],
    treatments: [
      "Compresas tibias y masaje palpebral en etapas iniciales",
      "Cirugía de chalazión (drenaje/extirpación) en casos persistentes o grandes",
    ],
    faqs: [
      {
        question: "¿El chalazión es lo mismo que un orzuelo?",
        answer:
          "No. El orzuelo es una infección aguda y dolorosa de una glándula del párpado, mientras que el chalazión es una obstrucción crónica, generalmente indolora, que puede persistir semanas si no se trata.",
      },
      {
        question: "¿Siempre hay que operar el chalazión?",
        answer:
          "No siempre; muchos se resuelven con compresas tibias y masaje constante en las primeras semanas. Se recomienda cirugía cuando persiste, crece o no responde al manejo conservador.",
      },
      {
        question: "¿El chalazión puede regresar?",
        answer:
          "Sí, especialmente si la blefaritis de fondo no se controla, por eso la higiene palpebral constante es importante incluso después de resolver un chalazión.",
      },
    ],
    relatedServices: ["s-cirugia-chalazion"],
    relatedSymptoms: ["sx-inflamacion-palpebral"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/chalazion.jpg",
    seo: {
      title: "Chalazión — Diagnóstico y Tratamiento en Mérida",
      description: "Chalazión: causas, síntomas y cirugía de extirpación con el Dr. Jaime Rodríguez Gómez en Mérida.",
      keywords: ["chalazión", "bulto en el párpado", "cirugía de chalazión", "oftalmólogo Mérida"],
    },
  },
];
