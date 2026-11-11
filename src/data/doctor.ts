import type { DoctorProfile } from "@/types/schema";

// Datos reales del intake (2026-11-09). Nada fabricado: pacientes atendidos
// y procedimientos/cirugías realizadas quedan "—" porque no se proporcionó
// cifra. La sub especialidad (Segmento Anterior) y la alta especialidad
// (Retina y Vítreo) no traen número de cédula propio en el intake — se
// incorporan a specialistTitle/subspecialty/bio/education, nunca como un
// tercer número de cédula inventado. El intake trae dos números de contacto
// distintos ambos etiquetados "whatsapp" — se usa el de "Llamadas (llamadas
// y whatsapp)" como el canal principal del sitio; el segundo número
// ("WhatsApp" suelto) se muestra solo en /contacto como línea adicional,
// nunca como el CTA principal (ver WhatsappSecundario en /contacto/page.tsx).
export const doctor: DoctorProfile = {
  name: "Jaime Arturo Rodríguez Gómez",
  title: "Dr.",
  specialty: "Oftalmología",
  specialistTitle: "Cirujano Oftalmólogo",
  subspecialty: "Segmento Anterior · Alta Especialidad en Retina y Vítreo",
  cedula: "8169709",
  cedulaInstitucion: "U. de Montemorelos",
  cedulaEspecialidad: "12159646",
  cedulaEspecialidadInstitucion: "U. de Montemorelos",
  // Sin cédula propia registrada para sub/alta especialidad en el intake —
  // se deja sin definir en vez de inventar un tercer folio.
  cofepris: "",
  phone: "+529993534894",
  whatsapp: "+529993534894",
  emergencyPhone: "+529999933704",
  // Placeholder sin confirmar (AGENTS.md §9) — satisface el esquema pero
  // NUNCA se renderiza en UI; /contacto usa WhatsApp/teléfono, y los
  // derechos ARCO del aviso de privacidad usan doctor.phone.
  email: "contacto@dr-jaime-rodriguez-gomez.com",
  address: "Calle 20 #235, Local 105, Col. Altabrisa (Plaza Luxus), Mérida, Yucatán, C.P. 97130",
  city: "Mérida",
  state: "Yucatán",
  country: "México",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle+20+235+Local+105+Col+Altabrisa+Plaza+Luxus+M%C3%A9rida+Yucat%C3%A1n",
  consultationPrice: 1000,
  paymentMethods: [
    "Efectivo",
    "Transferencia",
    "Tarjeta de débito",
    "Tarjeta de crédito (Visa, MasterCard, American Express)",
    "Pagos móviles NFC (Apple Pay / Google Pay)",
    "Seguros médicos",
  ],
  // Matiz real del intake: Vitamédica paga directo, el resto de aseguradoras
  // opera por reembolso — se representa tal cual, no como "acepta seguros"
  // genérico.
  insurances: [
    "Vitamédica (pago directo con el consultorio)",
    "Resto de aseguradoras: reembolso directo con tu compañía",
  ],
  schedule: "Lunes, martes y jueves 9:45–13:30 y 15:30–18:00 · Miércoles 9:45–13:30 · Viernes 9:45–15:00",
  openingHours: [
    "Mo,Tu,Th 09:45-13:30",
    "Mo,Tu,Th 15:30-18:00",
    "We 09:45-13:30",
    "Fr 09:45-15:00",
  ],
  acceptingNewPatients: true,
  photo: "/doctor-placeholder.jpg",
  bio: "El Dr. Jaime Arturo Rodríguez Gómez es cirujano oftalmólogo egresado de la Universidad de Montemorelos, con formación adicional en Segmento Anterior y alta especialidad en Retina y Vítreo. Con más de 10 años de experiencia, atiende en su consultorio de la Col. Altabrisa en Mérida, Yucatán, el diagnóstico y tratamiento de enfermedades oculares frecuentes (catarata, glaucoma, ojo seco, pterigión) y patología de retina (retinopatía diabética, desprendimiento de retina, degeneración macular), combinando cirugía de precisión con un seguimiento clínico cercano.",
  philosophy:
    "Cada diagnóstico ocular empieza por una exploración completa y una explicación clara al paciente — la vista no da segundas oportunidades si se actúa tarde.",
  experience: [],
  stats: [
    { label: "Pacientes Atendidos", value: "—" },
    { label: "Procedimientos Realizados", value: "—" },
    { label: "Años de Experiencia", value: "+10" },
  ],
  certifications: [
    { name: "Consejo Mexicano de Oftalmología", institution: "CMO" },
    { name: "Sociedad Mexicana de Oftalmología", institution: "SMO" },
    { name: "Colegio de Oftalmólogos de Yucatán", institution: "COY" },
  ],
  education: [
    { degree: "Médico Cirujano, especialidad en Oftalmología", institution: "Universidad de Montemorelos" },
    { degree: "Formación en Segmento Anterior", institution: "Universidad de Montemorelos" },
    { degree: "Alta Especialidad en Retina y Vítreo", institution: "Universidad de Montemorelos" },
  ],
  testimonials: [
    {
      id: "t-1",
      patientName: "Ileana Bazán",
      rating: 5,
      text: "Excelente atención, muy preciso en su diagnóstico y atendió todas mis inquietudes!!",
      sourceUrl: "https://www.doctoralia.com.mx/perfil/jaime-arturo-rodriguez-gomez-2",
      date: "2024-02-15",
    },
    {
      id: "t-2",
      patientName: "Jorge Raúl",
      rating: 5,
      text: "Un excelente doctor muy recomendado muy buen trato",
      sourceUrl: "https://www.doctoralia.com.mx/perfil/jaime-arturo-rodriguez-gomez-2",
      date: "2024-02-13",
    },
    {
      id: "t-3",
      patientName: "Luis Oswaldo Castillo Peniche",
      rating: 5,
      text: "Excelente servicio, mi cita 10.00, atención 10.30",
      sourceUrl: "https://www.doctoralia.com.mx/perfil/jaime-arturo-rodriguez-gomez-2",
      date: "2024-02-06",
    },
    {
      id: "t-4",
      patientName: "Guadalupe Uribe",
      rating: 5,
      text: "Gracias Doctor es usted muy amable, excelente atención e instalaciones profesionales.",
      sourceUrl: "https://www.doctoralia.com.mx/perfil/jaime-arturo-rodriguez-gomez-2",
      date: "2024-01-23",
    },
  ],
  sameAs: ["https://www.doctoralia.com.mx/perfil/jaime-arturo-rodriguez-gomez-2"],
  ga4Id: undefined,
};

// Segunda línea de WhatsApp real del intake, distinta del canal principal
// de arriba — se expone solo en /contacto, nunca como CTA sitewide.
export const whatsappSecundario = "+529992239904";

// Widget real de agenda en línea (Medis365) — se usa como botón de enlace
// externo real, nunca embebido como iframe/formulario (AGENTS.md §7: "nunca
// poner formularios de ningún tipo" — la excepción de Doctoralia otorgada a
// dra-martha-llamas no se traslada a este sitio).
export const agendaOnlineUrl = "https://app.medis365.com.mx/agenda-online.html?c=UkdKQ0s_";
