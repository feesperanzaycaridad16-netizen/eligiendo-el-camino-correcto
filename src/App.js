import React, { useMemo, useState } from "react";
import "./style.css";
import { routes, initialStats, imageThemes } from "./data";

const mapQuestions = [
  {
    id: "target",
    title: "¿Para quién estás usando este recurso?",
    type: "single",
    options: [
      "Para mí",
      "Para un familiar",
      "Para un amigo/a",
      "Para un alumno/a o usuario/a",
      "Soy profesional",
      "Soy profesor/a",
      "Solo quiero prevenir",
    ],
  },
  {
    id: "concern",
    title: "¿Qué te preocupa principalmente?",
    type: "single",
    options: [
      "Alcohol",
      "Cannabis",
      "Cocaína",
      "Pastillas o ansiolíticos sin receta",
      "Policonsumo",
      "Juego/apuestas",
      "Pantallas",
      "No lo sé",
      "Prefiero no decirlo",
    ],
  },
  {
    id: "frequency",
    title: "¿Con qué frecuencia ocurre?",
    type: "single",
    options: [
      "No hay consumo, solo prevención",
      "Alguna vez",
      "Fines de semana",
      "Varias veces al mes",
      "Varias veces por semana",
      "Diario o casi diario",
    ],
  },
  {
    id: "consequences",
    title: "¿Hay consecuencias? Marca las que encajen.",
    type: "multi",
    options: [
      "Discusiones familiares",
      "Problemas laborales o escolares",
      "Mentiras u ocultación",
      "Gasto o deuda",
      "Ansiedad, tristeza o culpa",
      "Pérdida de control",
      "Consumo a solas",
      "Mezcla de sustancias",
      "Recaídas",
      "Problemas legales",
      "Riesgo físico",
    ],
  },
  {
    id: "urgency",
    title: "¿Hay alguna urgencia ahora?",
    type: "multi",
    options: [
      "Intoxicación, sobredosis o pérdida grave de control",
      "Violencia o riesgo para alguien",
      "Ideas de hacerse daño",
      "Abstinencia fuerte o síntomas físicos preocupantes",
      "Menor en riesgo grave",
      "No",
    ],
  },
  {
    id: "support",
    title: "¿Tienes alguien seguro a quien avisar?",
    type: "single",
    options: ["Sí", "No", "No lo sé", "Prefiero no decirlo"],
  },
  {
    id: "changeStage",
    title: "¿En qué momento te encuentras?",
    type: "single",
    options: [
      "No creo que tenga un problema",
      "Tengo dudas, pero algo me preocupa",
      "Sé que necesito cambiar, pero no sé cómo",
      "Quiero empezar a pedir ayuda",
      "Ya estoy intentando cambiar",
      "Estoy en recuperación y quiero mantenerme",
    ],
  },
  {
    id: "province",
    title: "¿En qué provincia estás?",
    type: "single",
    options: [
      "Córdoba",
      "Sevilla",
      "Málaga",
      "Cádiz",
      "Granada",
      "Huelva",
      "Jaén",
      "Almería",
    ],
  },
];

const riskNowQuestions = [
  "Tengo impulso de consumir",
  "Tengo ganas de apostar o usar una app",
  "Estoy muy nervioso/a",
  "Estoy solo/a",
  "Estoy con alguien de riesgo",
  "He recaído",
  "Tengo miedo de hacerme daño",
];

const assessmentItems = [
  "Conozco los riesgos del consumo de alcohol y otras drogas.",
  "Sé detectar señales de riesgo antes de que la situación empeore.",
  "Sé qué hacer si aparece un impulso fuerte.",
  "Tengo identificada una persona segura a quien avisar.",
  "Conozco algún recurso de ayuda en mi provincia.",
  "Sé poner límites ante una presión de consumo.",
  "Sé cómo pedir ayuda sin sentirme juzgado/a.",
  "Comprendo que una recaída no significa empezar de cero.",
  "Sé cómo actuar si un familiar, alumno/a o usuario/a necesita ayuda.",
  "Me siento capaz de dar un primer paso para cambiar o pedir orientación.",
];

const finalAssessmentItems = [
  "Ahora entiendo mejor cómo funciona una cadena de riesgo.",
  "Sé identificar pensamientos trampa y señales de alerta.",
  "Sé usar una herramienta para frenar el impulso.",
  "Sé a quién podría avisar si estoy en riesgo.",
  "Conozco recursos de ayuda reales.",
  "Entiendo mejor cómo afecta la adicción al cuerpo, mente y vida social.",
  "Sé que pedir ayuda no significa fracasar.",
  "Sé cómo actuar ante una recaída.",
  "Me siento más preparado/a para tomar una decisión protectora.",
  "Recomendaría este recurso a alguien que necesite orientación.",
];

const helpContacts = [
  {
    province: "Córdoba",
    logo: "CO",
    icon: "🕌",
    color: "orange",
    blocks: [
      {
        title: "Asociaciones y ONGs",
        subtitle: "Acceso directo: puedes llamar para información, orientación o cita.",
        icon: "🤝",
        type: "direct",
        contacts: [
          {
            name: "Proyecto Hombre · CES Córdoba",
            phone: "957 401 909",
            call: "957401909",
            hours: "Lunes a jueves 8:00-21:00 · Viernes 8:00-14:00",
            logo: "PH",
          },
          {
            name: "Fundación Emet",
            phone: "957 476 847",
            call: "957476847",
            hours: "Lunes a viernes 8:00-15:00",
            logo: "EM",
          },
          {
            name: "Fundación Hogar Renacer",
            phone: "957 237 388",
            call: "957237388",
            hours:
              "Lunes y jueves 9:00-15:00 y 16:30-19:30 · Martes, miércoles y viernes 9:00-15:00",
            logo: "HR",
          },
          {
            name: "FEESCA · Cañete de las Torres",
            phone: "675 591 330",
            call: "675591330",
            hours: "Contacto directo por teléfono",
            logo: "FE",
          },
          {
            name: "Asociación Aliento de Vida · Puente Genil",
            phone: "957 050 621",
            call: "957050621",
            hours: "Urgencias telefónicas 24 horas",
            logo: "AV",
          },
          {
            name: "ACOJER",
            phone: "957 401 449 / 650 402 066",
            call: "957401449",
            hours:
              "Lunes a jueves 9:00-13:30 y 17:00-21:00 · Viernes 9:00-13:30 y 17:00-20:00",
            logo: "AC",
          },
        ],
      },
      {
        title: "Recursos públicos de adicciones",
        subtitle:
          "Llamada directa de orientación y cita: contacta con el recurso; si requiere derivación, te indicarán el circuito.",
        icon: "🏥",
        type: "public",
        contacts: [
          {
            name: "CPD / UDA Córdoba",
            phone: "957 768 698 / 957 768 699",
            call: "957768698",
            hours: "Lunes a viernes 8:30-14:30",
            logo: "CP",
          },
          {
            name: "CTA Cruz Roja Córdoba",
            phone: "957 486 692 / 957 486 923",
            call: "957486692",
            hours: "Lunes a viernes 8:00-15:00",
            logo: "CR",
          },
          {
            name: "CTA Palma del Río / Posadas",
            phone: "957 644 912",
            call: "957644912",
            hours: "Lunes a viernes 9:00-14:00",
            logo: "PR",
          },
          {
            name: "CTA Lucena / Cabra",
            phone: "957 513 365",
            call: "957513365",
            hours: "Lunes a viernes 8:30-14:30",
            logo: "LC",
          },
          {
            name: "CTA Montilla",
            phone: "957 653 012",
            call: "957653012",
            hours: "Lunes a viernes 9:00-14:00",
            logo: "MO",
          },
        ],
      },
      {
        title: "Derivación sanitaria",
        subtitle: "Requiere médico de familia, urgencias o derivación profesional.",
        icon: "📄",
        type: "medical",
        contacts: [
          {
            name: "Unidad de Desintoxicación Hospitalaria · Hospital Reina Sofía",
            phone: "Médico de familia / urgencias / derivación profesional",
            call: "",
            hours: "Requiere valoración y derivación sanitaria",
            logo: "UD",
          },
          {
            name: "Unidad de Salud Mental Comunitaria · SAS",
            phone: "Médico de familia",
            call: "",
            hours: "Acceso mediante derivación desde atención primaria",
            logo: "SM",
          },
        ],
      },
    ],
  },
  {
    province: "Jaén",
    logo: "JA",
    icon: "🫒",
    color: "green",
    blocks: [
      {
        title: "Asociaciones y ONGs",
        subtitle: "Acceso directo: puedes llamar para información, orientación o cita.",
        icon: "🤝",
        type: "direct",
        contacts: [
          {
            name: "Proyecto Hombre Jaén",
            phone: "953 234 564",
            call: "953234564",
            hours: "Lunes a viernes 8:00-15:00 y 17:00-20:00",
            logo: "PH",
          },
          {
            name: "Asociación ALAL · Linares",
            phone: "953 697 101",
            call: "953697101",
            hours: "Lunes a viernes 10:00-13:00 y 17:30-20:30",
            logo: "AL",
          },
          {
            name: "Asociación AJER · Jaén Capital",
            phone: "953 274 062",
            call: "953274062",
            hours: "Lunes a viernes 9:30-13:30",
            logo: "AJ",
          },
          {
            name: "Asociación Poradic Adicciones · Porcuna",
            phone: "671 997 200",
            call: "671997200",
            hours: "Contacto directo por teléfono",
            logo: "PA",
          },
        ],
      },
      {
        title: "Recursos públicos de adicciones",
        subtitle:
          "Llamada directa de orientación y cita: contacta con el recurso; si requiere derivación, te indicarán el circuito.",
        icon: "🏥",
        type: "public",
        contacts: [
          {
            name: "CPD Jaén",
            phone: "953 248 114",
            call: "953248114",
            hours: "Lunes a viernes 8:30-14:30",
            logo: "CP",
          },
        ],
      },
      {
        title: "Derivación sanitaria",
        subtitle: "Requiere médico de familia, urgencias o derivación profesional.",
        icon: "📄",
        type: "medical",
        contacts: [
          {
            name: "Unidad de Desintoxicación Hospitalaria / Salud Mental · SAS",
            phone: "Médico de familia / urgencias / derivación profesional",
            call: "",
            hours: "Requiere valoración y derivación sanitaria",
            logo: "UD",
          },
        ],
      },
    ],
  },
  {
    province: "Sevilla",
    logo: "SE",
    icon: "🌆",
    color: "purple",
    blocks: [
      {
        title: "Asociaciones y ONGs",
        subtitle: "Acceso directo: puedes llamar para información, orientación o cita.",
        icon: "🤝",
        type: "direct",
        contacts: [
          {
            name: "Proyecto Hombre Sevilla",
            phone: "954 347 410",
            call: "954347410",
            hours:
              "Lunes a jueves 9:00-15:00 y 17:00-19:30 · Viernes 9:00-14:30",
            logo: "PH",
          },
          {
            name: "Asociación Antaris · Dos Hermanas",
            phone: "955 676 023",
            call: "955676023",
            hours: "Lunes a viernes 8:00-15:00",
            logo: "AN",
          },
        ],
      },
      {
        title: "Recursos públicos de adicciones",
        subtitle:
          "Llamada directa de orientación y cita: contacta con el recurso; si requiere derivación, te indicarán el circuito.",
        icon: "🏥",
        type: "public",
        contacts: [
          {
            name: "CPD Sevilla",
            phone: "954 554 411",
            call: "954554411",
            hours: "Lunes a viernes 8:30-14:30",
            logo: "CP",
          },
        ],
      },
    ],
  },
  {
    province: "Málaga",
    logo: "MA",
    icon: "🌊",
    color: "blue",
    blocks: [
      {
        title: "Asociaciones y ONGs",
        subtitle: "Acceso directo: puedes llamar para información, orientación o cita.",
        icon: "🤝",
        type: "direct",
        contacts: [
          {
            name: "Proyecto Hombre Málaga",
            phone: "952 281 486",
            call: "952281486",
            hours:
              "Lunes a jueves 8:30-14:30 y 16:00-21:30 · Viernes 8:30-14:00",
            logo: "PH",
          },
        ],
      },
      {
        title: "Recursos públicos de adicciones",
        subtitle:
          "Llamada directa de orientación y cita: contacta con el recurso; si requiere derivación, te indicarán el circuito.",
        icon: "🏥",
        type: "public",
        contacts: [
          {
            name: "CPD Málaga",
            phone: "952 069 135",
            call: "952069135",
            hours: "Lunes a viernes 8:30-14:30",
            logo: "CP",
          },
        ],
      },
    ],
  },
  {
    province: "Cádiz",
    logo: "CA",
    icon: "⚓",
    color: "gold",
    blocks: [
      {
        title: "Asociaciones y ONGs",
        subtitle: "Acceso directo: puedes llamar para información, orientación o cita.",
        icon: "🤝",
        type: "direct",
        contacts: [
          {
            name: "Proyecto Hombre Cádiz · Jerez",
            phone: "956 183 234",
            call: "956183234",
            hours:
              "Lunes a jueves 9:00-14:00 y 16:00-21:00 · Viernes 9:00-14:00",
            logo: "PH",
          },
        ],
      },
      {
        title: "Recursos públicos de adicciones",
        subtitle:
          "Llamada directa de orientación y cita: contacta con el recurso; si requiere derivación, te indicarán el circuito.",
        icon: "🏥",
        type: "public",
        contacts: [
          {
            name: "CPD Cádiz",
            phone: "956 292 124",
            call: "956292124",
            hours: "Lunes a viernes 8:30-14:30",
            logo: "CP",
          },
        ],
      },
    ],
  },
  {
    province: "Granada",
    logo: "GR",
    icon: "🏔️",
    color: "red",
    blocks: [
      {
        title: "Asociaciones y ONGs",
        subtitle: "Acceso directo: puedes llamar para información, orientación o cita.",
        icon: "🤝",
        type: "direct",
        contacts: [
          {
            name: "Proyecto Hombre Granada",
            phone: "958 296 027",
            call: "958296027",
            hours:
              "Lunes, martes y jueves 9:00-14:00 y 16:00-19:00 · Miércoles y viernes 9:00-14:00",
            logo: "PH",
          },
        ],
      },
      {
        title: "Recursos públicos de adicciones",
        subtitle:
          "Llamada directa de orientación y cita: contacta con el recurso; si requiere derivación, te indicarán el circuito.",
        icon: "🏥",
        type: "public",
        contacts: [
          {
            name: "CPD Granada",
            phone: "958 244 513",
            call: "958244513",
            hours: "Lunes a viernes 8:30-14:30",
            logo: "CP",
          },
        ],
      },
    ],
  },
  {
    province: "Huelva",
    logo: "HU",
    icon: "🌅",
    color: "green",
    blocks: [
      {
        title: "Asociaciones y ONGs",
        subtitle: "Acceso directo: puedes llamar para información, orientación o cita.",
        icon: "🤝",
        type: "direct",
        contacts: [
          {
            name: "Proyecto Hombre Huelva",
            phone: "959 234 856",
            call: "959234856",
            hours: "Lunes a viernes 10:30-13:30",
            logo: "PH",
          },
        ],
      },
      {
        title: "Recursos públicos de adicciones",
        subtitle:
          "Llamada directa de orientación y cita: contacta con el recurso; si requiere derivación, te indicarán el circuito.",
        icon: "🏥",
        type: "public",
        contacts: [
          {
            name: "CPD Huelva",
            phone: "959 494 710",
            call: "959494710",
            hours: "Lunes a viernes 8:30-14:30",
            logo: "CP",
          },
        ],
      },
    ],
  },
  {
    province: "Almería",
    logo: "AL",
    icon: "🏜️",
    color: "orange",
    blocks: [
      {
        title: "Asociaciones y ONGs",
        subtitle: "Acceso directo: puedes llamar para información, orientación o cita.",
        icon: "🤝",
        type: "direct",
        contacts: [
          {
            name: "Proyecto Hombre Almería",
            phone: "950 266 158",
            call: "950266158",
            hours: "Lunes a jueves 8:00-21:00 · Viernes 8:00-15:00",
            logo: "PH",
          },
        ],
      },
      {
        title: "Recursos públicos de adicciones",
        subtitle:
          "Llamada directa de orientación y cita: contacta con el recurso; si requiere derivación, te indicarán el circuito.",
        icon: "🏥",
        type: "public",
        contacts: [
          {
            name: "CPD Almería",
            phone: "950 281 032",
            call: "950281032",
            hours: "Lunes a viernes 8:30-14:30",
            logo: "CP",
          },
        ],
      },
    ],
  },
];

const professionalCards = [
  {
    title: "Qué es este recurso",
    icon: "🧩",
    text:
      "Es un recurso socioeducativo gamificado. No sustituye la atención profesional, pero orienta, entrena habilidades, activa protección y conecta con recursos reales de ayuda.",
  },
  {
    title: "Modelo FÉNIX",
    icon: "🕊️",
    text:
      "Frena, Entiende, Nombra, Inicia ayuda y Rompe la cadena. Cada misión busca frenar el impulso, comprender lo que ocurre, nombrar la cadena y abrir una puerta de ayuda.",
  },
  {
    title: "Enfoque ecológico-comunitario",
    icon: "🌐",
    text:
      "El recurso trabaja con persona, familia, entorno cercano, recursos profesionales y comunidad. Nadie se recupera solo.",
  },
  {
    title: "Enfoque biopsicosocial",
    icon: "🔺",
    text:
      "Cada misión analiza BIO: cuerpo y cerebro; PSICO: emociones y pensamientos; SOCIAL: familia, trabajo, estudios, recursos y comunidad.",
  },
  {
    title: "Metodología activa gamificada",
    icon: "🎯",
    text:
      "Utiliza misiones, rutas, role playing, simulaciones, decisiones, feedback inmediato y logros para favorecer aprendizaje activo y respuestas protectoras.",
  },
  {
    title: "Seguridad ética",
    icon: "⚠️",
    text:
      "No diagnostica, no sustituye tratamiento, no culpa, no estigmatiza y prioriza pedir ayuda real si hay riesgo inmediato.",
  },
];

const fenixInfo = {
  Frena: {
    letter: "F",
    title: "Frena",
    text: "No decidas desde el impulso. Gana tiempo y baja exposición.",
    icon: "⏱️",
  },
  Entiende: {
    letter: "E",
    title: "Entiende",
    text: "Observa qué ocurre en cuerpo, mente y contexto.",
    icon: "🧠",
  },
  Nombra: {
    letter: "N",
    title: "Nombra",
    text: "Pon nombre al disparador, emoción y pensamiento trampa.",
    icon: "📝",
  },
  "Inicia ayuda": {
    letter: "I",
    title: "Inicia ayuda",
    text: "Activa una persona segura, recurso o primer mensaje.",
    icon: "📞",
  },
  "Rompe la cadena": {
    letter: "X",
    title: "Rompe la cadena",
    text: "Sustituye la conducta de riesgo por una acción protectora.",
    icon: "🛡️",
  },
};

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function average(values) {
  const nums = Object.values(values).filter((n) => typeof n === "number");
  if (!nums.length) return 0;
  return Math.round(nums.reduce((a, b) => a + b, 0) / nums.length);
}

function assessmentLevel(score) {
  if (!score) return "Pendiente";
  if (score <= 2) return "Preparación baja";
  if (score <= 3) return "Preparación media";
  if (score <= 4) return "Preparación positiva";
  return "Preparación alta";
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [routeId, setRouteId] = useState("bio");
  const [missionIndex, setMissionIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);

  const [stats, setStats] = useState(initialStats);
  const [points, setPoints] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [riskChoices, setRiskChoices] = useState(0);
  const [protectiveChoices, setProtectiveChoices] = useState(0);

  const [toast, setToast] = useState("");
  const [timer, setTimer] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [timerWins, setTimerWins] = useState(0);

  const [mapStep, setMapStep] = useState(0);
  const [mapAnswers, setMapAnswers] = useState({});
  const [mapResult, setMapResult] = useState(null);

  const [openProvince, setOpenProvince] = useState("Córdoba");
  const [openCard, setOpenCard] = useState(null);

  const [shieldSaved, setShieldSaved] = useState(false);
  const [shield, setShield] = useState({
    reason: "",
    support: "",
    place: "",
    resource: "",
    phrase: "No decido desde el impulso. Gano 10 segundos y activo ayuda.",
    action: "",
  });

  const [plan24Saved, setPlan24Saved] = useState(false);
  const [plan24, setPlan24] = useState({
    avoid: "",
    doToday: "",
    support: "",
    safePlace: "",
    resource: "",
    impulseAction: "",
  });

  const [riskNowSelected, setRiskNowSelected] = useState([]);

  const [chainDiary, setChainDiary] = useState({
    trigger: "",
    thought: "",
    emotion: "",
    need: "",
    support: "",
  });

  const [initialAssessment, setInitialAssessment] = useState({});
  const [finalAssessment, setFinalAssessment] = useState({});
  const [initialDone, setInitialDone] = useState(false);
  const [finalDone, setFinalDone] = useState(false);

  const [recommendedRouteId, setRecommendedRouteId] = useState("radar");
  const [adaptiveWarningShown, setAdaptiveWarningShown] = useState(false);
  const [helpVisited, setHelpVisited] = useState(false);
  const [diarySaved, setDiarySaved] = useState(false);

  const route = routes.find((r) => r.id === routeId) || routes[0];
  const mission = route.missions[missionIndex] || route.missions[0];

  const totalMissions = routes.reduce((sum, r) => sum + r.missions.length, 0);
  const progress = totalMissions
    ? Math.round((completed.length / totalMissions) * 100)
    : 0;

  const currentProvince =
    helpContacts.find((p) => p.province === openProvince) || helpContacts[0];

  const badges = useMemo(() => {
    const result = [];
    if (completed.length >= 1) result.push("Primer paso");
    if (completed.length >= 5) result.push("Activador/a de protección");
    if (timerWins >= 1) result.push("10 segundos");
    if (shieldSaved) result.push("Escudo FÉNIX");
    if (plan24Saved) result.push("Plan de 24 horas");
    if (stats.riesgo <= 20) result.push("Riesgo bajo control");
    if (protectiveChoices >= 5) result.push("Decisiones protectoras");
    if (helpVisited) result.push("Puerta de ayuda");
    if (diarySaved) result.push("Cadena nombrada");
    if (initialDone) result.push("Evaluación inicial");
    if (finalDone) result.push("Evaluación final");
    return result;
  }, [
    completed,
    timerWins,
    shieldSaved,
    plan24Saved,
    stats.riesgo,
    protectiveChoices,
    helpVisited,
    diarySaved,
    initialDone,
    finalDone,
  ]);

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 2600);
  }

  function openRoute(id) {
    setRouteId(id);
    setMissionIndex(0);
    setStep(0);
    setSelected(null);
    setScreen("mission");
  }

  function getFenixStep(missionData, routeData) {
    if (missionData?.fenixStep) return missionData.fenixStep;

    const type = missionData?.type || "";
    const route = routeData?.id || "";

    if (type === "quiz" || route === "bio") return "Entiende";
    if (type === "roleplay" || type === "classify") return "Nombra";
    if (type === "motivation" || type === "support") return "Inicia ayuda";
    if (type === "repair" || route === "repair" || route === "recovery") {
      return "Rompe la cadena";
    }
    if (route === "radar" || route === "shield" || route === "behavioral") {
      return "Frena";
    }
    return "Entiende";
  }

  function applyScore(score, repair) {
    const positive = score > 0;

    setStats((prev) => ({
      autocontrol: clamp(prev.autocontrol + (positive ? 8 : -5)),
      calma: clamp(prev.calma + (positive ? 7 : -4)),
      apoyo: clamp(prev.apoyo + (score > 12 ? 7 : positive ? 3 : -4)),
      esperanza: clamp(prev.esperanza + (positive ? 7 : -5)),
      proteccion: clamp(prev.proteccion + (positive ? 9 : -4)),
      riesgo: clamp(prev.riesgo + (positive ? -8 : repair ? 14 : 8)),
    }));

    if (positive) setProtectiveChoices((n) => n + 1);
    if (!positive) setRiskChoices((n) => n + 1);

    setPoints((p) => p + Math.max(0, score * 5 + 40));
  }

  function answer(option, index) {
    if (selected !== null) return;

    setSelected(index);
    applyScore(option.score, option.repair);

    const key = `${route.id}-${mission.title}`;
    if (!completed.includes(key) && option.score > 0) {
      setCompleted((prev) => [...prev, key]);
    }

    if (option.repair) showToast("La cadena se ha activado. Ahora toca reparar.");
    else if (option.score > 0) showToast("Protección activada.");
    else showToast("Riesgo detectado. Revisa la herramienta.");
  }

  function nextMission() {
    setSelected(null);
    setStep(0);

    const shouldShowSafety =
      riskChoices >= 3 && !adaptiveWarningShown && stats.riesgo >= 45;

    if (shouldShowSafety) {
      setAdaptiveWarningShown(true);
      setScreen("adaptiveSafety");
      return;
    }

    if (missionIndex < route.missions.length - 1) {
      setMissionIndex((i) => i + 1);
    } else {
      setScreen("routes");
      setMissionIndex(0);
    }
  }

  function updateMapAnswer(question, value) {
    setMapAnswers((prev) => {
      if (question.type === "multi") {
        const current = prev[question.id] || [];
        const exists = current.includes(value);

        return {
          ...prev,
          [question.id]: exists
            ? current.filter((item) => item !== value)
            : [...current, value],
        };
      }

      return { ...prev, [question.id]: value };
    });
  }

  function getChangeMoment(stage) {
    if (stage === "No creo que tenga un problema") return "Precontemplación";
    if (stage === "Tengo dudas, pero algo me preocupa") return "Contemplación";
    if (stage === "Sé que necesito cambiar, pero no sé cómo") return "Preparación";
    if (stage === "Quiero empezar a pedir ayuda") return "Preparación";
    if (stage === "Ya estoy intentando cambiar") return "Acción";
    if (stage === "Estoy en recuperación y quiero mantenerme") return "Mantenimiento";
    return "Orientación inicial";
  }

  function getPersonalPriority(level, concern, target, stage, support) {
    if (level === "red") return "Bajar riesgo ahora y activar ayuda real.";
    if (target === "Para un familiar") return "Acompañar con límites, calma y orientación.";
    if (target === "Soy profesor/a") return "Detectar sin etiquetar y activar el circuito educativo.";
    if (target === "Soy profesional" || target === "Para un alumno/a o usuario/a") {
      return "Orientar, derivar sin abandonar y hacer seguimiento.";
    }
    if (concern === "Juego/apuestas" || concern === "Pantallas") {
      return "Bloquear acceso, reducir exposición y crear rutina alternativa.";
    }
    if (support === "No" || support === "No lo sé") {
      return "Identificar una persona segura y un recurso de ayuda.";
    }
    if (stage === "Estoy en recuperación y quiero mantenerme") {
      return "Sostener avances, rutina mínima y prevención de recaídas.";
    }
    return "Detectar señales, crear escudo y dar un primer paso protegido.";
  }

  function getRecommendedRouteId(level, concern, target, stage) {
    if (level === "red") return "radar";
    if (target === "Para un familiar") return "family";
    if (target === "Soy profesor/a") return "teacher";
    if (target === "Soy profesional" || target === "Para un alumno/a o usuario/a") {
      return "professional";
    }
    if (concern === "Juego/apuestas" || concern === "Pantallas") return "behavioral";
    if (stage === "Estoy en recuperación y quiero mantenerme") return "recovery";
    if (level === "green") return "bio";
    if (level === "yellow") return "radar";
    if (level === "orange") return "shield";
    return "radar";
  }

  function calculateMapResult() {
    const frequency = mapAnswers.frequency || "";
    const consequences = mapAnswers.consequences || [];
    const urgency = mapAnswers.urgency || [];
    const concern = mapAnswers.concern || "No indicado";
    const target = mapAnswers.target || "No indicado";
    const province = mapAnswers.province || "Córdoba";
    const stage = mapAnswers.changeStage || "Orientación inicial";
    const support = mapAnswers.support || "No indicado";

    const urgentItems = urgency.filter((item) => item !== "No");
    let level = "green";

    if (urgentItems.length > 0) {
      level = "red";
    } else if (
      frequency === "Diario o casi diario" ||
      frequency === "Varias veces por semana" ||
      consequences.length >= 4 ||
      consequences.includes("Pérdida de control") ||
      consequences.includes("Recaídas") ||
      consequences.includes("Riesgo físico") ||
      consequences.includes("Mezcla de sustancias")
    ) {
      level = "orange";
    } else if (
      frequency === "Fines de semana" ||
      frequency === "Varias veces al mes" ||
      consequences.length >= 1
    ) {
      level = "yellow";
    }

    const recommendedId = getRecommendedRouteId(level, concern, target, stage);
    const priority = getPersonalPriority(level, concern, target, stage, support);

    setRecommendedRouteId(recommendedId);
    setOpenProvince(province);

    setMapResult({
      level,
      concern,
      target,
      province,
      consequences,
      urgency: urgentItems,
      stage,
      support,
      moment: getChangeMoment(stage),
      priority,
      recommendedRouteId: recommendedId,
      recommended: getRecommendedMissions(level, concern, target, stage),
    });

    setScreen("mapResult");
  }

  function getRecommendedMissions(level, concern, target, stage) {
    if (level === "red") {
      return ["Riesgo ahora: actúa con calma", "Reto 10 segundos", "Escudo FÉNIX", "Pedir ayuda ahora"];
    }

    if (target === "Para un familiar") {
      return ["Conversación difícil", "Límites que cuidan", "Cuidar al cuidador", "Pedir ayuda ahora"];
    }

    if (target === "Soy profesor/a") {
      return ["Observar sin etiquetar", "Tutoría segura", "Derivar sin abandonar", "Pedir ayuda ahora"];
    }

    if (target === "Soy profesional" || target === "Para un alumno/a o usuario/a") {
      return ["Primera acogida sin juicio", "Derivación que no se pierde", "Profesional en red", "Base profesional"];
    }

    if (concern === "Cocaína") {
      return ["Cocaína: activación y riesgo", "Radar de riesgo", "Dinero en el bolsillo", "Pedir ayuda ahora"];
    }

    if (concern === "Juego/apuestas" || concern === "Pantallas") {
      return ["Solo una apuesta", "Bloquear acceso", "Adicciones sin sustancia", "Escudo de protección"];
    }

    if (stage === "Estoy en recuperación y quiero mantenerme") {
      return ["Después de un buen día", "Rutina mínima", "Celebrar sin riesgo", "Panel de impacto"];
    }

    if (level === "orange") {
      return ["La balanza", "He recaído", "El mensaje de madrugada", "Pedir ayuda ahora"];
    }

    if (level === "yellow") {
      return ["Semáforo emocional", "Decir no sin pelear", "Primer mapa de ayuda", "Escudo FÉNIX"];
    }

    return ["Alcohol: no solo una copa", "Cannabis: natural no significa seguro", "Radar de riesgo", "Uso seguro"];
  }

  function levelInfo(level) {
    if (level === "green") {
      return {
        title: "Verde · Prevención",
        text:
          "No aparecen señales graves. Es buen momento para aprender, prevenir y reforzar protección.",
        className: "level-green",
        image: "bio",
      };
    }

    if (level === "yellow") {
      return {
        title: "Amarillo · Riesgo inicial",
        text:
          "Aparecen señales que conviene atender. No hace falta esperar a que vaya a más.",
        className: "level-yellow",
        image: "radar",
      };
    }

    if (level === "orange") {
      return {
        title: "Naranja · Consumo o conducta problemática",
        text:
          "Hay consecuencias o pérdida de control. Sería recomendable pedir orientación y activar apoyo.",
        className: "level-orange",
        image: "shield",
      };
    }

    return {
      title: "Rojo · Alto riesgo",
      text:
        "Hay señales de urgencia o riesgo alto. Prioriza ayuda real, apoyo inmediato y recursos profesionales.",
      className: "level-red",
      image: "risk",
    };
  }

  function startTimer() {
    if (timerActive) return;

    setTimer(10);
    setTimerActive(true);

    let value = 10;
    const interval = setInterval(() => {
      value -= 1;
      setTimer(value);

      if (value <= 0) {
        clearInterval(interval);
        setTimerActive(false);
        setTimerWins((n) => n + 1);
        setStats((prev) => ({
          ...prev,
          calma: clamp(prev.calma + 12),
          autocontrol: clamp(prev.autocontrol + 10),
          riesgo: clamp(prev.riesgo - 8),
        }));
        setPoints((p) => p + 75);
        showToast("Has ganado 10 segundos. Microvictoria desbloqueada.");
      }
    }, 1000);
  }

  function saveShield() {
    setShieldSaved(true);
    setStats((prev) => ({
      ...prev,
      apoyo: clamp(prev.apoyo + 10),
      proteccion: clamp(prev.proteccion + 12),
      esperanza: clamp(prev.esperanza + 10),
      riesgo: clamp(prev.riesgo - 8),
    }));
    setPoints((p) => p + 120);
    showToast("Escudo FÉNIX guardado.");
  }

  function savePlan24() {
    setPlan24Saved(true);
    setStats((prev) => ({
      ...prev,
      autocontrol: clamp(prev.autocontrol + 10),
      proteccion: clamp(prev.proteccion + 12),
      apoyo: clamp(prev.apoyo + 8),
      esperanza: clamp(prev.esperanza + 8),
      riesgo: clamp(prev.riesgo - 10),
    }));
    setPoints((p) => p + 140);
    showToast("Plan de 24 horas guardado.");
  }

  function saveDiary() {
    setDiarySaved(true);
    setStats((prev) => ({
      ...prev,
      calma: clamp(prev.calma + 8),
      autocontrol: clamp(prev.autocontrol + 8),
      proteccion: clamp(prev.proteccion + 8),
      riesgo: clamp(prev.riesgo - 5),
    }));
    setPoints((p) => p + 80);
    showToast("Diario de cadena guardado como reflexión.");
  }

  function copyText(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      showToast("Mensaje copiado.");
    } else {
      showToast("Selecciona el texto manualmente para copiarlo.");
    }
  }

  function updateAssessment(type, index, value) {
    if (type === "initial") {
      setInitialAssessment((prev) => ({ ...prev, [index]: value }));
    } else {
      setFinalAssessment((prev) => ({ ...prev, [index]: value }));
    }
  }

  function finishAssessment(type) {
    if (type === "initial") {
      setInitialDone(true);
      setPoints((p) => p + 80);
      showToast("Evaluación inicial guardada.");
      setScreen("firstMap");
    } else {
      setFinalDone(true);
      setPoints((p) => p + 120);
      showToast("Evaluación final completada.");
      setScreen("impactPanel");
    }
  }

  function toggleRiskNow(item) {
    setRiskNowSelected((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  }

  function riskNowPlan() {
    const selected = riskNowSelected;

    if (selected.includes("Tengo miedo de hacerme daño")) {
      return {
        intro:
          "Ahora lo importante no es aguantar en silencio. Si hay peligro real, toca activar ayuda inmediata.",
        steps: [
          "No te quedes solo/a ahora.",
          "Llama al 112, urgencias o a una persona segura.",
          "Aléjate de objetos, lugares o situaciones que puedan aumentar el riesgo.",
          "No sigas usando el juego como prioridad: activa ayuda real.",
        ],
      };
    }

    if (selected.includes("He recaído")) {
      return {
        intro:
          "Una recaída no borra todo el camino. Ahora toca cortar la continuidad del riesgo y volver al plan.",
        steps: [
          "No conviertas una caída en abandono.",
          "Bebe agua, come algo si puedes y busca un lugar seguro.",
          "Avisa a una persona segura con un mensaje claro.",
          "Abre tu Plan de 24 horas o crea uno ahora.",
        ],
      };
    }

    if (selected.includes("Estoy con alguien de riesgo")) {
      return {
        intro:
          "Tu prioridad ahora es salir de la exposición. No tienes que convencer a nadie: solo protegerte.",
        steps: [
          "Sal de ese lugar o cambia de espacio cuanto antes.",
          "No des explicaciones largas: usa una frase breve de salida.",
          "Llama o escribe a una persona segura.",
          "Evita volver a responder mensajes de riesgo hoy.",
        ],
      };
    }

    if (
      selected.includes("Tengo ganas de apostar o usar una app") ||
      selected.includes("Tengo impulso de consumir")
    ) {
      return {
        intro:
          "El impulso pide rapidez. Tu protección empieza justo al hacer lo contrario: frenar y ganar tiempo.",
        steps: [
          "Aleja el móvil, dinero, llaves o acceso inmediato.",
          "Haz el reto de 10 segundos antes de decidir.",
          "Bloquea contacto, app o página si es necesario.",
          "Activa tu Escudo FÉNIX o pide ayuda ahora.",
        ],
      };
    }

    if (selected.includes("Estoy muy nervioso/a") || selected.includes("Estoy solo/a")) {
      return {
        intro:
          "No tienes que resolverlo todo ahora. Primero baja activación y busca conexión segura.",
        steps: [
          "No decidas desde el impulso.",
          "Haz el reto de 10 segundos.",
          "Escribe qué emoción o pensamiento aparece.",
          "Avisa a una persona segura o abre recursos de ayuda.",
        ],
      };
    }

    return {
      intro:
        "Marca lo que está pasando para ajustar el plan. Mientras tanto, empieza por frenar y respirar.",
      steps: [
        "No decidas desde el impulso.",
        "Haz el reto de 10 segundos.",
        "Aléjate de la zona de riesgo.",
        "Avisa a alguien seguro si el impulso sube.",
      ],
    };
  }

  function SceneImage({ image, icon, compact = false, label = "" }) {
    const img = imageThemes[image] || imageThemes.home;

    return (
      <div className={`sceneImage ${compact ? "compact" : ""}`}>
        <img
          src={img.image}
          alt={img.title}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="sceneFallback" />
        <div className="sceneOverlay" />

        <span className="sceneIcon">{icon || img.icon}</span>

        {label && <span className="sceneLabel">{label}</span>}

        {!compact && (
          <div className="sceneText">
            <b>{img.title}</b>
            <small>{img.text}</small>
          </div>
        )}
      </div>
    );
  }

  function BottomNav() {
    return (
      <nav className="bottomNav">
        <button onClick={() => setScreen("home")}>
          <span>🏠</span>
          Inicio
        </button>

        <button onClick={() => setScreen("firstMap")}>
          <span>🧭</span>
          Mapa
        </button>

        <button className="navRisk" onClick={() => setScreen("riskNow")}>
          <span>🆘</span>
          Riesgo
        </button>

        <button onClick={() => setScreen("routes")}>
          <span>🎯</span>
          Juego
        </button>

        <button
          className="navHelp"
          onClick={() => {
            setHelpVisited(true);
            setScreen("help");
          }}
        >
          <span>📞</span>
          Ayuda
        </button>
      </nav>
    );
  }

  function Stats() {
    const labels = [
      ["autocontrol", "Autocontrol"],
      ["calma", "Calma"],
      ["apoyo", "Apoyo"],
      ["esperanza", "Esperanza"],
      ["proteccion", "Protección"],
      ["riesgo", "Riesgo"],
    ];

    return (
      <div className="stats">
        {labels.map(([key, label]) => (
          <article className={`stat ${key === "riesgo" ? "danger" : ""}`} key={key}>
            <div>
              <span>{label}</span>
              <b>{stats[key]}%</b>
            </div>
            <i>
              <em style={{ width: `${stats[key]}%` }} />
            </i>
          </article>
        ))}
      </div>
    );
  }

  function RouteQuickPanel() {
    const routeCompleted = completed.filter((key) => key.startsWith(`${route.id}-`))
      .length;

    const routeProgress = route.missions.length
      ? Math.round((routeCompleted / route.missions.length) * 100)
      : 0;

    return (
      <section className="routeQuickPanel">
        <article>
          <span>Ruta actual</span>
          <b>{route.title}</b>
        </article>

        <article>
          <span>Misiones</span>
          <b>
            {routeCompleted}/{route.missions.length}
          </b>
        </article>

        <article>
          <span>Avance</span>
          <b>{routeProgress}%</b>
        </article>
      </section>
    );
  }

  function FenixCard({ stepName }) {
    const info = fenixInfo[stepName] || fenixInfo.Entiende;

    return (
      <section className="fenixCard">
        <div className="fenixLetter">{info.letter}</div>
        <div>
          <span>Fase FÉNIX actual</span>
          <h3>
            {info.icon} {info.title}
          </h3>
          <p>{info.text}</p>
        </div>
      </section>
    );
  }

  function ProtectionCards() {
    const cards = [
      {
        icon: "⏱️",
        title: "10 segundos",
        text: "No decido desde el impulso. Primero freno.",
        action: () => setScreen("timer"),
      },
      {
        icon: "🛡️",
        title: "Escudo FÉNIX",
        text: "Mi motivo, mi apoyo, mi lugar seguro y mi acción.",
        action: () => setScreen("shield"),
      },
      {
        icon: "🗓️",
        title: "Plan 24 horas",
        text: "Qué evito, qué hago hoy y a quién aviso.",
        action: () => setScreen("plan24"),
      },
      {
        icon: "📞",
        title: "Pedir ayuda",
        text: "Recursos reales, teléfonos y primer mensaje.",
        action: () => {
          setHelpVisited(true);
          setScreen("help");
        },
      },
      {
        icon: "📝",
        title: "Diario de cadena",
        text: "Disparador, pensamiento, emoción, necesidad y apoyo.",
        action: () => setScreen("chainDiary"),
      },
    ];

    return (
      <section className="protectionCards">
        {cards.map((card) => (
          <button key={card.title} onClick={card.action}>
            <span>{card.icon}</span>
            <div>
              <b>{card.title}</b>
              <small>{card.text}</small>
            </div>
          </button>
        ))}
      </section>
    );
  }

  function Home() {
    return (
      <main className="app home">
        {toast && <div className="toast">{toast}</div>}

        <section className="cover">
          <SceneImage image="home" />

          <span className="badge">Recurso socioeducativo gamificado</span>

          <h1>Rompe el ciclo y recupera tu vida</h1>
          <h2 className="heroSubtitle">
            Cuando quieras dar el primer paso, aquí tienes una forma segura de empezar
          </h2>

          <p className="lead">
            Recurso socioeducativo gamificado para prevenir, orientar y pedir ayuda frente a
            las adicciones.
          </p>

          <div className="manifest">
            <b>No te juzga.</b>
            <span>Te acompaña paso a paso para activar protección y pedir ayuda.</span>
          </div>

          <button
            className="helpNow"
            onClick={() => {
              setHelpVisited(true);
              setScreen("help");
            }}
          >
            <span>📞</span>
            <div>
              <b>Pedir ayuda ahora</b>
              <small>Recursos de Andalucía, teléfonos y pasos claros</small>
            </div>
          </button>

          <button className="mapNow" onClick={() => setScreen("initialAssessment")}>
            <span>🧭</span>
            <div>
              <b>Hacer mi perfil inicial</b>
              <small>Evaluación breve + mapa de ayuda personalizado</small>
            </div>
          </button>

          <button className="riskNow" onClick={() => setScreen("riskNow")}>
            <span>🆘</span>
            <div>
              <b>Riesgo ahora: actúa con calma</b>
              <small>Frena, aléjate, avisa y pide ayuda</small>
            </div>
          </button>

          <button className="primary" onClick={() => setScreen("routes")}>
            Entrar al juego
          </button>

          <button className="secondary" onClick={() => setScreen("safeUse")}>
            Uso seguro del recurso
          </button>

          <button className="textButton" onClick={() => setScreen("professionalBase")}>
            🧩 Ver base profesional
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function SafeUse() {
    return (
      <main className="app">
        <section className="card">
          <SceneImage image="base" />

          <span className="badge">Seguridad ética</span>
          <h1>Uso seguro del recurso</h1>
          <p>
            Este recurso no diagnostica y no sustituye la atención médica, psicológica ni
            social. Está diseñado para ayudar a comprender señales de riesgo, entrenar
            decisiones protectoras y facilitar el primer paso para pedir ayuda.
          </p>

          <div className="safeGrid">
            <article>
              <b>⚠️ Riesgo inmediato</b>
              <p>
                Si hay intoxicación, violencia, pérdida grave de control o ideas de hacerse
                daño, prioriza urgencias, 112 o una persona segura.
              </p>
            </article>
            <article>
              <b>🔒 Privacidad</b>
              <p>
                No escribas nombres completos, direcciones ni datos sensibles si compartes
                el móvil.
              </p>
            </article>
            <article>
              <b>📞 Recursos</b>
              <p>
                Los horarios, circuitos de acceso y disponibilidad pueden cambiar. Confirma
                siempre por teléfono.
              </p>
            </article>
            <article>
              <b>🕊️ Primer paso</b>
              <p>
                Pedir ayuda no es fracasar. Es activar protección y abrir una puerta.
              </p>
            </article>
          </div>

          <button className="primary" onClick={() => setScreen("initialAssessment")}>
            Entendido, continuar
          </button>

          <button className="secondary" onClick={() => setScreen("riskNow")}>
            Riesgo ahora: actúa con calma
          </button>

          <button
            className="secondary"
            onClick={() => {
              setHelpVisited(true);
              setScreen("help");
            }}
          >
            Pedir ayuda ahora
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function Help() {
    return (
      <main className="app">
        {toast && <div className="toast">{toast}</div>}

        <section className="card help">
          <SceneImage image="help" />

          <span className="badge">Ruta de ayuda · Andalucía</span>
          <h1>📞 Pedir ayuda ahora</h1>
          <p>
            Desde aquí puedes encontrar recursos de ayuda, llamar directamente para
            orientación y saber qué paso dar. Los horarios, circuitos de acceso y
            disponibilidad pueden cambiar, por eso conviene confirmar siempre por teléfono.
          </p>

          <div className="safeNotice">
            <b>Importante:</b>
            <span>
              Si hay riesgo inmediato, intoxicación, violencia, pérdida de control grave o
              ideas de hacerse daño, prioriza urgencias, 112 o una persona segura.
            </span>
          </div>

          <div className="provinceGrid">
            {helpContacts.map((p) => (
              <button
                key={p.province}
                className={`provinceChip ${openProvince === p.province ? "active" : ""}`}
                onClick={() => setOpenProvince(p.province)}
              >
                <span>{p.icon}</span>
                <b>{p.logo}</b>
                <small>{p.province}</small>
              </button>
            ))}
          </div>

          <section className="provincePanel">
            <div className="provinceHero">
              <div className="provinceLogo">{currentProvince.logo}</div>
              <div>
                <h2>
                  {currentProvince.icon} {currentProvince.province}
                </h2>
                <p>
                  Recursos organizados por asociaciones, recursos públicos y derivación
                  sanitaria.
                </p>
              </div>
            </div>

            {currentProvince.blocks.map((block) => (
              <section className={`contactBlock ${block.type}`} key={block.title}>
                <div className="contactHead">
                  <span>{block.icon}</span>
                  <div>
                    <h3>{block.title}</h3>
                    <p>{block.subtitle}</p>
                  </div>
                </div>

                <div className="contactList">
                  {block.contacts.map((contact) => (
                    <article className="contactCard" key={contact.name}>
                      <div className="contactLogo">{contact.logo}</div>
                      <div className="contactInfo">
                        <b>{contact.name}</b>
                        {contact.call ? (
                          <a href={`tel:${contact.call}`}>📞 {contact.phone}</a>
                        ) : (
                          <span className="noCall">📄 {contact.phone}</span>
                        )}
                        <small>{contact.hours}</small>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </section>

          <button className="primary" onClick={() => setScreen("helpMessage")}>
            Crear mensaje para pedir ayuda
          </button>

          <button className="secondary" onClick={() => setScreen("riskNow")}>
            Riesgo ahora: actúa con calma
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function Assessment({ type }) {
    const isInitial = type === "initial";
    const items = isInitial ? assessmentItems : finalAssessmentItems;
    const answers = isInitial ? initialAssessment : finalAssessment;
    const title = isInitial ? "Evaluación inicial" : "Evaluación final";
    const image = isInitial ? "map" : "recovery";
    const completedItems = Object.keys(answers).length;
    const canFinish = completedItems === items.length;
    const score = average(answers);
    const level = assessmentLevel(score);

    const weakerArea =
      score <= 2
        ? "Pedir ayuda, detectar señales y activar apoyo."
        : score <= 3
        ? "Reforzar límites, escudo y plan de 24 horas."
        : "Mantener rutinas, seguimiento y prevención de recaídas.";

    return (
      <main className="app">
        {toast && <div className="toast">{toast}</div>}

        <section className="card">
          <SceneImage image={image} />

          <span className="badge">Escala 1-5</span>
          <h1>{title}</h1>
          <p>
            Esto no es un diagnóstico. Sirve para conocer tu punto de partida y valorar si
            el recurso te ayuda a ganar información, seguridad y herramientas.
          </p>

          <div className="assessmentProgress">
            <b>
              {completedItems}/{items.length}
            </b>
            <span>Ítems respondidos</span>
            <i>
              <em style={{ width: `${(completedItems / items.length) * 100}%` }} />
            </i>
          </div>

          <div className="likertList">
            {items.map((item, index) => (
              <article key={item} className="likertItem">
                <p>
                  {index + 1}. {item}
                </p>
                <div className="likertButtons">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      className={answers[index] === value ? "active" : ""}
                      onClick={() => updateAssessment(type, index, value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {score > 0 && (
            <div className="assessmentResult">
              <article>
                <b>Resultado orientativo</b>
                <span>{level}</span>
              </article>
              <article>
                <b>Área a reforzar</b>
                <span>{weakerArea}</span>
              </article>
            </div>
          )}

          <button
            className="primary"
            disabled={!canFinish}
            onClick={() => finishAssessment(type)}
          >
            {isInitial ? "Guardar y hacer mapa de ayuda" : "Guardar y ver panel de impacto"}
          </button>

          <button
            className="secondary"
            onClick={() => setScreen(isInitial ? "firstMap" : "impactPanel")}
          >
            Saltar por ahora
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function FirstMap() {
    const question = mapQuestions[mapStep];
    const selectedAnswer =
      mapAnswers[question.id] || (question.type === "multi" ? [] : "");

    return (
      <main className="app">
        <section className="card">
          <SceneImage image="map" />

          <span className="badge">Primer mapa de ayuda</span>
          <h1>🧭 Perfil inicial inteligente</h1>
          <p>
            Esto no diagnostica. Solo ayuda a detectar señales, ordenar la situación y
            recomendar rutas o recursos.
          </p>

          <div className="mapProgress">
            <span>
              Paso {mapStep + 1} de {mapQuestions.length}
            </span>
            <i>
              <em style={{ width: `${((mapStep + 1) / mapQuestions.length) * 100}%` }} />
            </i>
          </div>

          <h2>{question.title}</h2>

          <div className="mapOptions">
            {question.options.map((option) => {
              const active =
                question.type === "multi"
                  ? selectedAnswer.includes(option)
                  : selectedAnswer === option;

              return (
                <button
                  key={option}
                  className={active ? "active" : ""}
                  onClick={() => updateMapAnswer(question, option)}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="twoButtons">
            <button
              className="secondary"
              disabled={mapStep === 0}
              onClick={() => setMapStep((s) => Math.max(0, s - 1))}
            >
              Atrás
            </button>

            {mapStep < mapQuestions.length - 1 ? (
              <button className="primary" onClick={() => setMapStep((s) => s + 1)}>
                Continuar
              </button>
            ) : (
              <button className="primary" onClick={calculateMapResult}>
                Ver mi orientación
              </button>
            )}
          </div>

          <button
            className="textButton"
            onClick={() => {
              setHelpVisited(true);
              setScreen("help");
            }}
          >
            Necesito ayuda ahora
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function MapResult() {
    const result =
      mapResult ||
      ({
        level: "green",
        concern: "No indicado",
        target: "No indicado",
        province: "Córdoba",
        recommended: [],
        consequences: [],
        urgency: [],
        stage: "Orientación inicial",
        support: "No indicado",
        moment: "Orientación inicial",
        priority: "Detectar señales, crear escudo y dar un primer paso protegido.",
        recommendedRouteId: "radar",
      });

    const info = levelInfo(result.level);
    const recommendedRoute =
      routes.find((r) => r.id === result.recommendedRouteId) ||
      routes.find((r) => r.id === recommendedRouteId) ||
      routes[0];

    return (
      <main className="app">
        <section className={`card resultCard ${info.className}`}>
          <SceneImage image={info.image} />

          <span className="badge">Tu orientación inicial</span>
          <h1>{info.title}</h1>
          <p>{info.text}</p>

          <div className="priorityBox">
            <b>Prioridad personalizada</b>
            <span>{result.priority}</span>
          </div>

          <div className="profileGrid">
            <article>
              <b>Te preocupa</b>
              <span>{result.concern}</span>
            </article>
            <article>
              <b>Provincia</b>
              <span>{result.province}</span>
            </article>
            <article>
              <b>Momento de cambio</b>
              <span>{result.moment}</span>
            </article>
            <article>
              <b>Ruta recomendada</b>
              <span>{recommendedRoute.title}</span>
            </article>
          </div>

          <h2>Empieza por estas acciones</h2>

          <div className="recommendList">
            {result.recommended.map((item) => (
              <article key={item}>✅ {item}</article>
            ))}
          </div>

          {result.level === "red" && (
            <div className="urgentBox">
              <b>Prioridad:</b>
              <p>
                Si hay riesgo inmediato, no sigas jugando como prioridad. Pide ayuda,
                avisa a alguien seguro o acude a urgencias.
              </p>
            </div>
          )}

          <button className="primary" onClick={() => setScreen("recommendedRoute")}>
            Ver ruta recomendada
          </button>

          <button className="secondary" onClick={() => setScreen("plan24")}>
            Crear Plan de 24 horas
          </button>

          <button
            className="helpNow"
            onClick={() => {
              setHelpVisited(true);
              setScreen("help");
            }}
          >
            <span>📞</span>
            <div>
              <b>Ver recursos de ayuda</b>
              <small>Contactos por provincia de Andalucía</small>
            </div>
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function RecommendedRoute() {
    const result = mapResult;
    const routeToStart =
      routes.find((r) => r.id === (result?.recommendedRouteId || recommendedRouteId)) ||
      routes[0];

    const image = result?.level === "red" ? "risk" : routeToStart.image || "map";

    return (
      <main className="app">
        <section className="card">
          <SceneImage image={image} icon={routeToStart.icon} />

          <span className="badge">Ruta personalizada</span>
          <h1>Tu ruta recomendada</h1>
          <p>
            Según tus respuestas, te recomendamos empezar por esta secuencia. Puedes cambiar
            de ruta cuando quieras.
          </p>

          <section className="recommendedPath">
            <article>
              <span>1</span>
              <div>
                <b>Primero</b>
                <p>
                  {result?.level === "red"
                    ? "Activa Riesgo ahora y pide ayuda real."
                    : "Haz una pausa y revisa tu situación con calma."}
                </p>
              </div>
            </article>

            <article>
              <span>2</span>
              <div>
                <b>Después</b>
                <p>Empieza la ruta: {routeToStart.title}.</p>
              </div>
            </article>

            <article>
              <span>3</span>
              <div>
                <b>Luego</b>
                <p>Crea tu Escudo FÉNIX y tu Plan de 24 horas.</p>
              </div>
            </article>

            <article>
              <span>4</span>
              <div>
                <b>Si el riesgo sube</b>
                <p>Usa 10 segundos, sal de la zona de riesgo y abre Pedir ayuda.</p>
              </div>
            </article>
          </section>

          <button className="primary" onClick={() => openRoute(routeToStart.id)}>
            Empezar ruta recomendada
          </button>

          <button className="secondary" onClick={() => setScreen("shield")}>
            Crear Escudo FÉNIX
          </button>

          <button className="secondary" onClick={() => setScreen("plan24")}>
            Crear Plan de 24 horas
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function AdaptiveSafety() {
    return (
      <main className="app">
        <section className="card riskPanel">
          <SceneImage image="risk" />

          <span className="badge">Parada de seguridad</span>
          <h1>Señales de riesgo detectadas</h1>
          <p>
            Has acumulado varias respuestas de riesgo. Antes de continuar, conviene activar
            una herramienta protectora.
          </p>

          <div className="safeNotice">
            <b>No es un castigo.</b>
            <span>
              Es una parada de seguridad para no seguir decidiendo desde el impulso.
            </span>
          </div>

          <ProtectionCards />

          <button className="primary" onClick={() => setScreen("timer")}>
            Empezar con 10 segundos
          </button>

          <button className="secondary" onClick={() => setScreen("mission")}>
            Volver a la misión
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function RiskNow() {
    const plan = riskNowPlan();

    return (
      <main className="app">
        <section className="card riskPanel">
          <SceneImage image="risk" />

          <span className="badge">Riesgo ahora</span>
          <h1>🆘 Actúa con calma</h1>
          <p>
            Marca lo que está pasando. El recurso te dará un plan inmediato para bajar el
            riesgo, ganar tiempo y pedir ayuda si lo necesitas.
          </p>

          <div className="riskNowGrid">
            {riskNowQuestions.map((item) => (
              <button
                key={item}
                className={riskNowSelected.includes(item) ? "active" : ""}
                onClick={() => toggleRiskNow(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="instantPlan">
            <b>Ahora mismo:</b>
            <p>{plan.intro}</p>
            <ol>
              {plan.steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <button className="primary" onClick={() => setScreen("timer")}>
            Empezar 10 segundos
          </button>

          <button className="secondary" onClick={() => setScreen("plan24")}>
            Crear Plan de 24 horas
          </button>

          <button
            className="helpNow"
            onClick={() => {
              setHelpVisited(true);
              setScreen("help");
            }}
          >
            <span>📞</span>
            <div>
              <b>Pedir ayuda ahora</b>
              <small>Recursos y teléfonos de Andalucía</small>
            </div>
          </button>

          <button className="secondary" onClick={() => setScreen("helpMessage")}>
            Crear mensaje para pedir ayuda
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function Routes() {
    return (
      <main className="app">
        {toast && <div className="toast">{toast}</div>}

        <header className="top">
          <span className="badge">Juego socioeducativo gamificado</span>
          <h1>Elige tu ruta</h1>
          <p>
            Cada ruta trabaja una parte del proceso: comprender, detectar, decidir,
            proteger, reparar y pedir ayuda.
          </p>
        </header>

        <section className="scoreCard">
          <div>
            <span>Progreso total</span>
            <b>{progress}%</b>
          </div>
          <div>
            <span>Puntos</span>
            <b>{points}</b>
          </div>
        </section>

        <ProtectionCards />

        <div className="routeGrid">
          {routes.map((r) => {
            const routeCompleted = completed.filter((key) =>
              key.startsWith(`${r.id}-`)
            ).length;

            const routeProgress = r.missions.length
              ? Math.round((routeCompleted / r.missions.length) * 100)
              : 0;

            return (
              <button
                key={r.id}
                className={`route ${r.color}`}
                onClick={() => openRoute(r.id)}
              >
                <SceneImage
                  image={r.image}
                  icon={r.icon}
                  compact
                  label={`${routeProgress}%`}
                />

                <div>
                  <b>{r.title}</b>
                  <p>{r.short}</p>

                  <div className="routeMeta">
                    <small>{r.missions.length} misiones</small>
                    <small>
                      {r.missions.reduce((total, m) => total + m.options.length, 0)}{" "}
                      decisiones
                    </small>
                  </div>

                  <div className="routeProgressBar">
                    <em style={{ width: `${routeProgress}%` }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <section className="miniPanel">
          <h2>Accesos profesionales</h2>
          <button className="secondary" onClick={() => setScreen("professionalBase")}>
            🧩 Base profesional
          </button>
          <button className="secondary" onClick={() => setScreen("teacherMode")}>
            👩‍🏫 Profesorado
          </button>
          <button className="secondary" onClick={() => setScreen("professionalMode")}>
            🧑‍💼 Profesional en red
          </button>
          <button className="secondary" onClick={() => setScreen("communityMode")}>
            🌐 Comunidad
          </button>
          <button className="secondary" onClick={() => setScreen("impactPanel")}>
            📊 Panel de impacto
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function Mission() {
    const stages = ["Imagen", "Testimonio", "BIO", "Decisión", "Herramienta"];
    const fenixStep = getFenixStep(mission, route);

    return (
      <main className="app">
        {toast && <div className="toast">{toast}</div>}

        <header className="missionHeader">
          <button className="back" onClick={() => setScreen("routes")}>
            ← Rutas
          </button>
          <span className="badge">
            {route.title} · {mission.difficulty}
          </span>
          <h1>{mission.title}</h1>
          <p>
            {mission.type.toUpperCase()} · Misión {missionIndex + 1} de{" "}
            {route.missions.length}
          </p>
        </header>

        <RouteQuickPanel />
        <FenixCard stepName={fenixStep} />

        <div className="stageBar">
          {stages.map((stageName, i) => (
            <button
              key={stageName}
              className={step === i ? "on" : ""}
              onClick={() => setStep(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {step === 0 && (
          <section className="card">
            <SceneImage image={route.image} icon={route.icon} />
            <h2>{mission.title}</h2>
            <p>{mission.scene}</p>
            <button className="primary" onClick={() => setStep(1)}>
              Continuar
            </button>
          </section>
        )}

        {step === 1 && (
          <section className="card testimony">
            <span>Testimonio compuesto</span>
            <h2>“{mission.testimony}”</h2>
            <p>
              Relato creado de forma ética a partir de patrones habituales:
              vergüenza, presión, recaída, familia, recursos y necesidad de apoyo.
            </p>
            <button className="primary" onClick={() => setStep(2)}>
              Ver enfoque biopsicosocial
            </button>
          </section>
        )}

        {step === 2 && (
          <section className="card">
            <h2>Mirada biopsicosocial</h2>
            <div className="bioGrid">
              <article>
                <b>BIO</b>
                <p>{mission.bio}</p>
              </article>
              <article>
                <b>PSICO</b>
                <p>{mission.psico}</p>
              </article>
              <article>
                <b>SOCIAL</b>
                <p>{mission.social}</p>
              </article>
            </div>
            <button className="primary" onClick={() => setStep(3)}>
              Tomar decisión
            </button>
          </section>
        )}

        {step === 3 && (
          <section className="card">
            <h2>{mission.question}</h2>

            <div className="options">
              {mission.options.map((option, index) => (
                <button
                  key={option.text}
                  className={`option ${
                    selected === index ? (option.score > 0 ? "good" : "bad") : ""
                  }`}
                  onClick={() => answer(option, index)}
                >
                  <span>{option.text}</span>
                  {option.tag && <small>{option.tag}</small>}
                </button>
              ))}
            </div>

            {selected !== null && (
              <div className="feedback">
                <b>
                  {mission.options[selected].score > 0
                    ? "Protección activada"
                    : "Riesgo detectado"}
                </b>
                <p>{mission.options[selected].feedback}</p>
                <button className="primary" onClick={() => setStep(4)}>
                  Aprender herramienta
                </button>
              </div>
            )}
          </section>
        )}

        {step === 4 && (
          <section className="card">
            <h2>
              {selected !== null && mission.options[selected].repair
                ? "Misión de reparación"
                : "Herramienta protectora"}
            </h2>

            {selected !== null && mission.options[selected].repair ? (
              <div className="repair">
                <p>La cadena se ha activado. No hay game over: hay reparación.</p>
                <ol>
                  <li>Identifica el disparador.</li>
                  <li>Nombra el pensamiento trampa.</li>
                  <li>Avisa a una persona segura.</li>
                  <li>Reduce exposición al riesgo.</li>
                  <li>Revisa tu Escudo FÉNIX y tu Plan de 24 horas.</li>
                </ol>
              </div>
            ) : (
              <div className="repair">
                <p>
                  Has entrenado una respuesta protectora. La clave es repetirla y pedir
                  apoyo cuando haga falta.
                </p>
                <ol>
                  <li>Para.</li>
                  <li>Respira 10 segundos.</li>
                  <li>Nombra lo que pasa.</li>
                  <li>Activa una persona o recurso.</li>
                  <li>Da el siguiente paso.</li>
                </ol>
              </div>
            )}

            <ProtectionCards />
            <Stats />

            <button className="primary" onClick={nextMission}>
              Siguiente misión
            </button>
          </section>
        )}

        <BottomNav />
      </main>
    );
  }

  function Timer() {
    return (
      <main className="app">
        {toast && <div className="toast">{toast}</div>}

        <section className="card centerCard">
          <span className="badge">Microvictoria</span>
          <h1>Reto 10 segundos</h1>
          <p>No tienes que resolver toda tu vida ahora. Solo gana los próximos 10 segundos.</p>

          <div className={`timer ${timerActive ? "pulse" : ""}`}>
            <b>{timer}</b>
            <span>{timerActive ? "Respira" : "segundos"}</span>
          </div>

          <button className="primary" disabled={timerActive} onClick={startTimer}>
            {timerActive ? "Respirando..." : "Empezar pausa"}
          </button>

          <Stats />
        </section>

        <BottomNav />
      </main>
    );
  }

  function Shield() {
    const fields = [
      ["reason", "Mi motivo para seguir", "mi salud, mi familia, mi libertad..."],
      ["support", "Persona de apoyo", "familiar, amigo, profesional..."],
      ["place", "Lugar seguro", "casa, centro, asociación..."],
      ["resource", "Recurso profesional", "centro de salud, unidad, asociación..."],
      ["phrase", "Frase de 10 segundos", "No decido desde el impulso..."],
      ["action", "Acción inmediata", "llamar, caminar, cambiar de ruta..."],
    ];

    return (
      <main className="app">
        {toast && <div className="toast">{toast}</div>}

        <section className="card">
          <SceneImage image="shield" />

          <span className="badge">Plan personal</span>
          <h1>Escudo FÉNIX</h1>
          <p>Tu plan para momentos de riesgo. Cuanto más concreto, más útil.</p>

          <div className="form">
            {fields.map(([key, label, placeholder]) => (
              <label key={key}>
                {label}
                <input
                  value={shield[key]}
                  onChange={(event) => setShield({ ...shield, [key]: event.target.value })}
                  placeholder={placeholder}
                />
              </label>
            ))}
          </div>

          <button className="primary" onClick={saveShield}>
            Guardar escudo
          </button>

          {shieldSaved && (
            <div className="shieldCard">
              <span>MI ESCUDO FÉNIX</span>
              <h2>Cuando el impulso suba, no empiezo desde cero</h2>
              <article>
                <b>Mi motivo</b>
                <p>{shield.reason || "Recuperar mi vida."}</p>
              </article>
              <article>
                <b>Mi persona segura</b>
                <p>{shield.support || "Una persona de confianza."}</p>
              </article>
              <article>
                <b>Mi lugar seguro</b>
                <p>{shield.place || "Un espacio donde pueda bajar el riesgo."}</p>
              </article>
              <article>
                <b>Mi recurso</b>
                <p>{shield.resource || "Un recurso profesional o comunitario."}</p>
              </article>
              <article>
                <b>Mi frase</b>
                <p>{shield.phrase}</p>
              </article>
              <article>
                <b>Mi acción inmediata</b>
                <p>{shield.action || "Ganar 10 segundos y pedir ayuda."}</p>
              </article>
            </div>
          )}

          <div className="preview">
            <b>Mensaje de emergencia</b>
            <p>
              Estoy en riesgo y necesito apoyo. Mi motivo es{" "}
              {shield.reason || "recuperar mi vida"}. Ahora voy a{" "}
              {shield.action || "ganar 10 segundos y pedir ayuda"}. ¿Puedes hablar conmigo?
            </p>
          </div>

          <button className="secondary" onClick={() => setScreen("plan24")}>
            Crear Plan de 24 horas
          </button>

          <Stats />
        </section>

        <BottomNav />
      </main>
    );
  }

  function Plan24() {
    const fields = [
      ["avoid", "Hoy voy a evitar", "lugares, contactos, apps, dinero en efectivo..."],
      ["doToday", "Hoy voy a hacer", "caminar, ordenar, descansar, llamar, cocinar..."],
      ["support", "Persona a la que puedo avisar", "nombre o relación de confianza..."],
      ["safePlace", "Lugar seguro", "casa, familiar, asociación, centro..."],
      ["resource", "Recurso que puedo contactar", "teléfono, asociación, centro de salud..."],
      ["impulseAction", "Si aparece el impulso, haré", "10 segundos, salir, llamar, bloquear..."],
    ];

    return (
      <main className="app">
        {toast && <div className="toast">{toast}</div>}

        <section className="card">
          <SceneImage image="recovery" />

          <span className="badge">Protección inmediata</span>
          <h1>Mi Plan de 24 horas</h1>
          <p>
            No tienes que resolver toda tu vida hoy. Este plan sirve para proteger las
            próximas 24 horas con acciones concretas.
          </p>

          <div className="form">
            {fields.map(([key, label, placeholder]) => (
              <label key={key}>
                {label}
                <input
                  value={plan24[key]}
                  onChange={(event) => setPlan24({ ...plan24, [key]: event.target.value })}
                  placeholder={placeholder}
                />
              </label>
            ))}
          </div>

          <button className="primary" onClick={savePlan24}>
            Guardar Plan de 24 horas
          </button>

          {plan24Saved && (
            <div className="planCard">
              <span>MI PLAN DE 24 HORAS</span>
              <h2>Hoy solo tengo que proteger este día</h2>

              <article>
                <b>Evitaré</b>
                <p>{plan24.avoid || "Zonas, contactos o situaciones de riesgo."}</p>
              </article>
              <article>
                <b>Haré</b>
                <p>{plan24.doToday || "Una acción sana, sencilla y posible."}</p>
              </article>
              <article>
                <b>Avisaré a</b>
                <p>{plan24.support || "Una persona segura."}</p>
              </article>
              <article>
                <b>Iré a</b>
                <p>{plan24.safePlace || "Un lugar seguro."}</p>
              </article>
              <article>
                <b>Contactaré con</b>
                <p>{plan24.resource || "Un recurso profesional o comunitario."}</p>
              </article>
              <article>
                <b>Si aparece el impulso</b>
                <p>{plan24.impulseAction || "Frenar, respirar, alejarme y pedir ayuda."}</p>
              </article>
            </div>
          )}

          <button className="secondary" onClick={() => setScreen("riskNow")}>
            Riesgo ahora: actúa con calma
          </button>

          <button
            className="secondary"
            onClick={() => {
              setHelpVisited(true);
              setScreen("help");
            }}
          >
            Ver recursos de ayuda
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function HelpMessage() {
    const target = mapAnswers.target || "Para mí";
    const concern = mapAnswers.concern || "adicciones";

    let message = `Hola, estoy buscando ayuda por un problema relacionado con ${concern}. Me preocupa que estoy perdiendo control y me gustaría pedir una primera orientación o cita.`;

    if (target === "Para un familiar") {
      message =
        "Hola, soy familiar de una persona con posible problema de adicción. Necesitamos orientación para saber cómo actuar, poner límites y pedir ayuda.";
    }

    if (target === "Soy profesional" || target === "Para un alumno/a o usuario/a") {
      message =
        "Hola, contacto para orientar a una persona usuaria con posible problema de adicción. Necesitamos información sobre acceso, derivación y seguimiento.";
    }

    if (target === "Soy profesor/a") {
      message =
        "Hola, contacto desde un centro educativo para pedir orientación ante posibles señales de riesgo relacionadas con adicciones en un alumno/a. Necesitamos información sobre cómo actuar, derivar y acompañar de forma adecuada.";
    }

    return (
      <main className="app">
        {toast && <div className="toast">{toast}</div>}

        <section className="card">
          <span className="badge">Primer contacto</span>
          <h1>Mensaje para pedir ayuda</h1>
          <p>
            A veces lo difícil es saber qué decir. Puedes usar este texto para llamar,
            enviar WhatsApp o pedir orientación.
          </p>

          <div className="messageBox">{message}</div>

          <button className="primary" onClick={() => copyText(message)}>
            Copiar mensaje
          </button>

          <button
            className="helpNow"
            onClick={() => {
              setHelpVisited(true);
              setScreen("help");
            }}
          >
            <span>📞</span>
            <div>
              <b>Ver teléfonos de ayuda</b>
              <small>Recursos por provincia</small>
            </div>
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function ChainDiary() {
    const fields = [
      ["trigger", "¿Qué activó la cadena?", "discusión, soledad, dinero, fiesta..."],
      ["thought", "¿Qué pensamiento apareció?", "solo hoy, yo controlo, me lo merezco..."],
      ["emotion", "¿Qué emoción sentiste?", "ansiedad, rabia, tristeza, culpa..."],
      ["need", "¿Qué necesitas ahora?", "calma, apoyo, alejarme, dormir..."],
      ["support", "¿A quién puedes avisar?", "familiar, amigo, profesional..."],
    ];

    return (
      <main className="app">
        {toast && <div className="toast">{toast}</div>}

        <section className="card">
          <SceneImage image="diary" />

          <span className="badge">Cadena viva</span>
          <h1>Diario de cadena</h1>
          <p>
            No escribas datos personales si compartes el móvil. Esta herramienta sirve para
            entender qué ha pasado y qué necesitas ahora.
          </p>

          <div className="form">
            {fields.map(([key, label, placeholder]) => (
              <label key={key}>
                {label}
                <input
                  value={chainDiary[key]}
                  onChange={(event) =>
                    setChainDiary({ ...chainDiary, [key]: event.target.value })
                  }
                  placeholder={placeholder}
                />
              </label>
            ))}
          </div>

          <button className="primary" onClick={saveDiary}>
            Guardar reflexión
          </button>

          <button className="secondary" onClick={() => setScreen("riskNow")}>
            Riesgo ahora: actúa con calma
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function ProfessionalBase() {
    return (
      <main className="app">
        <section className="card">
          <SceneImage image="base" />

          <span className="badge">Base profesional</span>
          <h1>🧩 Modelo FÉNIX</h1>
          <p>
            Este apartado muestra la seriedad del recurso sin cargar el juego. Está pensado
            para profesionales, profesorado y entidades.
          </p>

          <div className="accordion">
            {professionalCards.map((card, index) => (
              <article key={card.title} className="accordionCard">
                <button onClick={() => setOpenCard(openCard === index ? null : index)}>
                  <span>{card.icon}</span>
                  <b>{card.title}</b>
                </button>
                {openCard === index && <p>{card.text}</p>}
              </article>
            ))}
          </div>

          <button className="primary" onClick={() => setScreen("teacherMode")}>
            Ver apartado profesorado
          </button>

          <button className="secondary" onClick={() => setScreen("professionalMode")}>
            Ver modo profesional
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function TeacherMode() {
    return (
      <main className="app">
        <section className="card">
          <SceneImage image="teacher" />

          <span className="badge">Profesorado</span>
          <h1>👩‍🏫 Detectar sin etiquetar</h1>
          <p>
            Guía rápida para profesorado, tutores/as y orientación. El objetivo es
            observar, acompañar y derivar sin estigmatizar.
          </p>

          <div className="professionalSteps">
            {[
              ["Detectar", "Cambios de conducta, absentismo, aislamiento, bajada de rendimiento o conflictos."],
              ["Registrar", "Anotar hechos observables, fecha, contexto y evolución. No usar etiquetas."],
              ["Comunicar", "Trasladar a tutoría, orientación o jefatura según el circuito del centro."],
              ["Acompañar", "Hablar en privado, con respeto, preocupación y sin exposición pública."],
              ["Derivar", "Activar familia, orientación, servicios sociales, sanitarios o recursos especializados."],
              ["Seguir", "Mantener seguimiento educativo y coordinación para no abandonar el caso."],
            ].map(([title, text]) => (
              <article key={title}>
                <b>{title}</b>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="quoteBox">
            Detectar no es etiquetar. Acompañar no es invadir. Derivar no es abandonar.
          </div>
        </section>

        <BottomNav />
      </main>
    );
  }

  function ProfessionalMode() {
    return (
      <main className="app">
        <section className="card">
          <SceneImage image="professional" />

          <span className="badge">Profesional en red</span>
          <h1>🧑‍💼 Árbol de intervención</h1>
          <p>Guía rápida para intervención profesional, derivación y coordinación.</p>

          <div className="riskSteps">
            {[
              ["1", "¿Hay urgencia?", "Activar ayuda urgente, salud o protocolo."],
              ["2", "¿Es menor?", "Familia + centro educativo + orientación + recurso si procede."],
              ["3", "¿Hay consumo o conducta problemática?", "Recurso especializado en adicciones."],
              ["4", "¿Hay riesgo social?", "Servicios sociales y coordinación comunitaria."],
              ["5", "¿Hay abandono previo?", "Llamada de enlace y seguimiento reforzado."],
              ["6", "¿Hay miedo al estigma?", "Contacto discreto y lenguaje no estigmatizante."],
            ].map(([num, title, text]) => (
              <article key={num}>
                <b>{num}</b>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <BottomNav />
      </main>
    );
  }

  function CommunityMode() {
    return (
      <main className="app">
        <section className="card">
          <SceneImage image="community" />

          <span className="badge">Comunidad</span>
          <h1>🌐 Nadie se recupera solo</h1>
          <p>
            La prevención y la recuperación necesitan red: familia, amistades seguras,
            centro educativo, servicios sociales, salud, asociaciones y ocio protector.
          </p>

          <div className="infoGrid">
            <article>
              <b>Red de apoyo</b>
              <p>Identificar personas, recursos y espacios seguros.</p>
            </article>
            <article>
              <b>Ocio saludable</b>
              <p>Deporte, cultura, asociación juvenil, voluntariado o grupo de apoyo.</p>
            </article>
            <article>
              <b>No estigma</b>
              <p>Hablar de personas en proceso, no de etiquetas.</p>
            </article>
            <article>
              <b>Puente</b>
              <p>No basta con dar teléfonos: orientar, acompañar y revisar.</p>
            </article>
          </div>

          <button
            className="primary"
            onClick={() => {
              setHelpVisited(true);
              setScreen("help");
            }}
          >
            Ver recursos de ayuda
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  function ImpactPanel() {
    const initialScore = average(initialAssessment);
    const finalScore = average(finalAssessment);
    const scoreDiff = finalScore && initialScore ? finalScore - initialScore : 0;

    return (
      <main className="app">
        <section className="card">
          <SceneImage image="recovery" />

          <span className="badge">Panel de impacto</span>
          <h1>📊 Tu recorrido</h1>
          <p>
            Este panel no es un diagnóstico. Solo refleja tu recorrido dentro del juego y
            puede ayudarte a reflexionar o pedir orientación profesional.
          </p>

          <section className="scoreCard">
            <div>
              <span>Progreso</span>
              <b>{progress}%</b>
            </div>
            <div>
              <span>Puntos</span>
              <b>{points}</b>
            </div>
          </section>

          <Stats />

          <div className="impactGrid">
            <article>
              <b>{completed.length}</b>
              <span>Misiones completadas</span>
            </article>
            <article>
              <b>{protectiveChoices}</b>
              <span>Decisiones protectoras</span>
            </article>
            <article>
              <b>{riskChoices}</b>
              <span>Riesgos detectados</span>
            </article>
            <article>
              <b>{timerWins}</b>
              <span>Retos 10 segundos</span>
            </article>
            <article>
              <b>{shieldSaved ? "Sí" : "No"}</b>
              <span>Escudo creado</span>
            </article>
            <article>
              <b>{plan24Saved ? "Sí" : "No"}</b>
              <span>Plan 24 horas</span>
            </article>
            <article>
              <b>{diarySaved ? "Sí" : "No"}</b>
              <span>Diario usado</span>
            </article>
            <article>
              <b>{helpVisited ? "Sí" : "No"}</b>
              <span>Ayuda visitada</span>
            </article>
          </div>

          <h2>Evaluación</h2>

          <div className="profileGrid">
            <article>
              <b>Inicial</b>
              <span>
                {initialScore ? `${initialScore}/5 · ${assessmentLevel(initialScore)}` : "No realizada"}
              </span>
            </article>
            <article>
              <b>Final</b>
              <span>
                {finalScore ? `${finalScore}/5 · ${assessmentLevel(finalScore)}` : "No realizada"}
              </span>
            </article>
            <article>
              <b>Avance</b>
              <span>{scoreDiff > 0 ? `+${scoreDiff}` : scoreDiff || "Pendiente"}</span>
            </article>
            <article>
              <b>Ruta recomendada</b>
              <span>
                {routes.find((r) => r.id === recommendedRouteId)?.title || "No generada"}
              </span>
            </article>
          </div>

          <div className="priorityBox">
            <b>Lectura profesional orientativa</b>
            <span>
              {finalScore && initialScore && finalScore > initialScore
                ? "Se observa mejora en preparación protectora, conciencia y herramientas."
                : "Conviene reforzar herramientas, apoyo y contacto con recursos reales."}
            </span>
          </div>

          <h2>Logros</h2>
          {badges.length ? (
            <div className="badges">
              {badges.map((badge) => (
                <span key={badge}>🏆 {badge}</span>
              ))}
            </div>
          ) : (
            <p>Aún no hay logros. Completa misiones para desbloquearlos.</p>
          )}

          <button className="primary" onClick={() => setScreen("finalAssessment")}>
            Hacer evaluación final
          </button>
        </section>

        <BottomNav />
      </main>
    );
  }

  return (
    <>
      {screen === "home" && <Home />}
      {screen === "safeUse" && <SafeUse />}
      {screen === "help" && <Help />}
      {screen === "initialAssessment" && <Assessment type="initial" />}
      {screen === "finalAssessment" && <Assessment type="final" />}
      {screen === "firstMap" && <FirstMap />}
      {screen === "mapResult" && <MapResult />}
      {screen === "recommendedRoute" && <RecommendedRoute />}
      {screen === "adaptiveSafety" && <AdaptiveSafety />}
      {screen === "riskNow" && <RiskNow />}
      {screen === "routes" && <Routes />}
      {screen === "mission" && <Mission />}
      {screen === "timer" && <Timer />}
      {screen === "shield" && <Shield />}
      {screen === "plan24" && <Plan24 />}
      {screen === "helpMessage" && <HelpMessage />}
      {screen === "chainDiary" && <ChainDiary />}
      {screen === "professionalBase" && <ProfessionalBase />}
      {screen === "teacherMode" && <TeacherMode />}
      {screen === "professionalMode" && <ProfessionalMode />}
      {screen === "communityMode" && <CommunityMode />}
      {screen === "impactPanel" && <ImpactPanel />}
    </>
  );
}