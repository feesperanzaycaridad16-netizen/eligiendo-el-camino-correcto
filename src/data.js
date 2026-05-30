export const makeOption = (text, score, feedback, repair = false, tag = "") => ({
  text,
  score,
  feedback,
  repair,
  tag,
});

export const initialStats = {
  autocontrol: 35,
  calma: 35,
  apoyo: 35,
  esperanza: 35,
  proteccion: 35,
  riesgo: 30,
};

export const imageThemes = {
  home: {
    icon: "🕊️",
    title: "Rompe el ciclo",
    text: "Recupera tu vida paso a paso",
    image: "https://i.postimg.cc/7Yvdjbx1/inicio-primer-paso-png.png",
  },
  bio: {
    icon: "🧠",
    title: "Cerebro y cuerpo",
    text: "Comprender lo que ocurre",
    image: "https://i.postimg.cc/QthV6jFC/cerebro-cuerpo-png.png",
  },
  mind: {
    icon: "🌊",
    title: "Mente y emociones",
    text: "Craving, culpa y pensamientos trampa",
    image: "https://i.postimg.cc/wjkB7Sf8/mente-emociones-png.png",
  },
  life: {
    icon: "🧩",
    title: "Vida y consecuencias",
    text: "Familia, trabajo, estudios y futuro",
    image: "https://i.postimg.cc/T3k68GNR/vida-consecuencias-png.png",
  },
  motivation: {
    icon: "⚖️",
    title: "Motivación para el cambio",
    text: "La balanza del cambio",
    image: "https://i.postimg.cc/5NxTfTCv/motivacion-al-cambio.png",
  },
  radar: {
    icon: "📡",
    title: "Radar de riesgo",
    text: "Detectar antes de caer",
    image: "https://i.postimg.cc/8P0Hx0dx/radar-riesgo.png",
  },
  shield: {
    icon: "🛡️",
    title: "Escudo de protección",
    text: "Apoyo, límites y recursos",
    image: "https://i.postimg.cc/6px77VB5/escudo-proteccion.png",
  },
  repair: {
    icon: "⛓️",
    title: "Reparar la cadena",
    text: "No hay game over",
    image: "https://i.postimg.cc/CLTDDpNx/reparar-cadenas.png",
  },
  family: {
    icon: "🏠",
    title: "Familia en acción",
    text: "Acompañar sin romper",
    image: "https://i.postimg.cc/Sxz2Q6C8/Familia-en-accion.png",
  },
  recovery: {
    icon: "🌅",
    title: "Recurso socioeducativo FÉNIX",
    text: "Volver al proceso",
    image: "https://i.postimg.cc/Hn9G9Pqh/RECUPERACION-FENIX.png",
  },
  teacher: {
    icon: "👩‍🏫",
    title: "Profesorado",
    text: "Detectar sin etiquetar",
    image: "https://i.postimg.cc/YCZF1p1c/profesorado-acompnando.png",
  },
  professional: {
    icon: "🧑‍💼",
    title: "Profesional en red",
    text: "Derivar sin abandonar",
    image: "https://i.postimg.cc/fy2CscXG/Profesional-en-red.png",
  },
  community: {
    icon: "🌐",
    title: "Comunidad al rescate",
    text: "Nadie se recupera solo",
    image: "https://i.postimg.cc/Pf3QPMv5/comunidad-al-rescate.png",
  },
  behavioral: {
    icon: "📱",
    title: "Adicciones sin sustancia",
    text: "Apuestas, pantallas e impulsividad",
    image: "https://i.postimg.cc/GmJBscgP/adicciones-sin-sustancia.png",
  },
  help: {
    icon: "📞",
    title: "Pedir ayuda",
    text: "Recursos reales de Andalucía",
    image: "https://i.postimg.cc/N0C1C6hS/pedir-ayuda.png",
  },
  risk: {
    icon: "🆘",
    title: "Actúa con calma",
    text: "Frena, respira, avisa y pide ayuda",
    image: "https://i.postimg.cc/kMKbW35Z/Riesgo-ahora.png",
  },
  map: {
    icon: "🧭",
    title: "Primer mapa de ayuda",
    text: "Orientación inicial",
    image: "https://i.postimg.cc/KzXYYjtj/mapa-de-ayuda.png",
  },
  diary: {
    icon: "📝",
    title: "Diario de cadena",
    text: "Entiende tu patrón",
    image: "https://i.postimg.cc/cHdVTNSz/rompe-cadena.png",
  },
  base: {
    icon: "🧩",
    title: "Base profesional",
    text: "Modelo FÉNIX y enfoque ecológico",
    image: "https://i.postimg.cc/FR1wwVYb/base-profesional.png",
  },
};

const good = (text, feedback, tag = "protección") =>
  makeOption(text, 24, feedback, false, tag);

const excellent = (text, feedback, tag = "respuesta óptima") =>
  makeOption(text, 30, feedback, false, tag);

const partial = (text, feedback, tag = "parcial") =>
  makeOption(text, -4, feedback, false, tag);

const risk = (text, feedback, tag = "riesgo") =>
  makeOption(text, -12, feedback, true, tag);

const severe = (text, feedback, tag = "alto riesgo") =>
  makeOption(text, -16, feedback, true, tag);

export const routes = [
  {
    id: "bio",
    title: "Cerebro y cuerpo",
    short: "Efectos físicos, psicológicos y sociales.",
    icon: "🧠",
    image: "bio",
    color: "orange",
    missions: [
      {
        title: "Alcohol: no solo una copa",
        type: "quiz",
        difficulty: "Inicio",
        fenixStep: "Entiende",
        testimony:
          "No fue solo una copa. Fue una decisión que después no pude controlar igual.",
        scene:
          "En una fiesta alguien dice: “beber el fin de semana no afecta”. El grupo se ríe y normaliza la situación.",
        bio:
          "El alcohol puede afectar coordinación, reflejos, sueño, memoria y toma de decisiones.",
        psico:
          "Puede bajar la percepción de riesgo y aumentar impulsividad.",
        social:
          "Puede favorecer accidentes, discusiones, conflictos familiares, problemas escolares o laborales.",
        question: "¿Qué respuesta rompe mejor el mito?",
        options: [
          risk(
            "Si es fin de semana, el cuerpo se recupera siempre.",
            "Normalizar el consumo reduce la percepción de riesgo.",
            "mito"
          ),
          good(
            "Aunque sea fin de semana, puede afectar decisiones y aumentar riesgos.",
            "Correcto. La frecuencia no elimina el riesgo."
          ),
          partial(
            "Solo afecta si se mezcla con otras drogas.",
            "La mezcla aumenta riesgos, pero el alcohol también puede afectar solo."
          ),
          risk(
            "Si todos beben, el riesgo baja.",
            "El grupo puede aumentar presión y reducir autocontrol.",
            "presión"
          ),
        ],
      },
      {
        title: "Cannabis: natural no significa seguro",
        type: "quiz",
        difficulty: "Inicio",
        fenixStep: "Entiende",
        testimony:
          "Pensaba que no me afectaba. Luego empecé a fallar en clase y a dejar cosas importantes.",
        scene:
          "Un compañero afirma: “el cannabis es natural, no hace daño”. Varias personas asienten.",
        bio:
          "Puede alterar memoria, atención, coordinación, sueño y motivación.",
        psico:
          "En algunas personas puede aumentar ansiedad, apatía, paranoia o aislamiento.",
        social:
          "Puede afectar estudios, trabajo, convivencia familiar y relación con el grupo.",
        question: "¿Qué frase es más protectora?",
        options: [
          risk(
            "Natural significa seguro.",
            "Que algo sea natural no significa que sea inocuo.",
            "mito"
          ),
          good(
            "Puede tener riesgos aunque esté normalizado.",
            "Correcto. Normalización no equivale a seguridad."
          ),
          partial(
            "Solo afecta si se consume a diario.",
            "El riesgo depende de persona, momento, cantidad y contexto."
          ),
          risk("Si se fuma en grupo afecta menos.", "El grupo no elimina los efectos.", "mito"),
        ],
      },
      {
        title: "Cocaína: activación y riesgo",
        type: "quiz",
        difficulty: "Medio",
        fenixStep: "Entiende",
        testimony:
          "Al principio era energía. Después era ansiedad, deuda, discusión y necesidad de repetir.",
        scene:
          "Alguien dice: “la cocaína solo es peligrosa si consumes muchas veces”. Tú notas que esa frase minimiza el riesgo.",
        bio:
          "Puede aumentar frecuencia cardíaca, tensión arterial y riesgo cardiovascular.",
        psico:
          "Puede aumentar impulsividad, ansiedad, irritabilidad, pensamiento acelerado y craving.",
        social:
          "Puede afectar economía, trabajo, familia, confianza y toma de decisiones.",
        question: "¿Qué respuesta es más ajustada?",
        options: [
          risk(
            "Solo es peligrosa con consumo diario.",
            "El riesgo puede aparecer también en consumos puntuales.",
            "mito"
          ),
          excellent(
            "Puede tener riesgos físicos, psicológicos y sociales desde consumos iniciales.",
            "Correcto. No conviene minimizarla."
          ),
          risk(
            "Si es en fiestas, no engancha.",
            "El contexto festivo puede normalizar y repetir el consumo.",
            "mito"
          ),
          partial("Solo afecta al bolsillo.", "Afecta también a salud, vínculos, trabajo y conducta."),
        ],
      },
      {
        title: "Policonsumo: perder señales",
        type: "quiz",
        difficulty: "Medio",
        fenixStep: "Entiende",
        testimony:
          "La mezcla no me hacía controlar más. Me hacía perder más señales de alarma.",
        scene:
          "Una persona mezcla alcohol con otras sustancias para “aguantar más” y sentirse en control.",
        bio:
          "Mezclar sustancias puede aumentar toxicidad, descontrol corporal y riesgo médico.",
        psico:
          "Puede aumentar impulsividad, ansiedad, confusión y pérdida de juicio.",
        social:
          "Puede aumentar accidentes, conflictos, urgencias y conductas de riesgo.",
        question: "¿Qué decisión reduce más el riesgo?",
        options: [
          severe(
            "Mezclar ayuda a equilibrar efectos.",
            "La mezcla puede aumentar el riesgo, no reducirlo.",
            "mito"
          ),
          excellent(
            "Evitar mezclas y pedir ayuda si ya hay consumo problemático.",
            "Correcto. Reducir riesgos y pedir apoyo protege."
          ),
          partial("Solo es peligroso si estás solo.", "La compañía no elimina el riesgo biológico."),
          risk("El cuerpo siempre avisa a tiempo.", "A veces las señales llegan tarde o se interpretan mal."),
        ],
      },
      {
        title: "Pastillas sin control",
        type: "quiz",
        difficulty: "Medio",
        fenixStep: "Entiende",
        testimony:
          "Pensaba que como eran pastillas no pasaba nada. El problema empezó cuando las usaba para no sentir.",
        scene:
          "Una persona toma ansiolíticos o pastillas sin receta o fuera de indicación médica para calmarse.",
        bio:
          "Puede haber somnolencia, tolerancia, dependencia, problemas de memoria o riesgo al mezclarlas.",
        psico:
          "El alivio rápido puede reforzar la idea de que no se puede afrontar nada sin consumir.",
        social:
          "Puede afectar rutinas, trabajo, estudios, conducción, relaciones y seguimiento médico.",
        question: "¿Qué opción es más segura?",
        options: [
          severe(
            "Tomarlas cuando me vea mal, aunque no sean mías.",
            "Usar medicación sin indicación aumenta riesgos."
          ),
          excellent(
            "Consultar con profesionales y buscar apoyo si las uso para escapar.",
            "Correcto. Pedir orientación protege.",
            "ayuda"
          ),
          severe("Mezclarlas con alcohol si necesito dormir.", "La mezcla puede ser peligrosa.", "mezcla"),
          risk("Ocultarlo para no preocupar.", "Ocultar retrasa ayuda.", "ocultación"),
        ],
      },
      {
        title: "El cuerpo también habla",
        type: "body",
        difficulty: "Avanzado",
        fenixStep: "Entiende",
        testimony:
          "Antes pensaba que el problema estaba solo en mi cabeza. Mi cuerpo también me estaba avisando.",
        scene:
          "Insomnio, ansiedad, palpitaciones y bajón aparecen después de varios episodios de consumo.",
        bio:
          "El cuerpo puede mostrar cansancio, alteraciones del sueño, malestar o síntomas de abstinencia.",
        psico:
          "La persona puede interpretar el malestar como necesidad de consumir para aliviarse.",
        social:
          "Si no se pide ayuda, el deterioro puede afectar trabajo, familia y rutinas.",
        question: "¿Qué interpretación protege más?",
        options: [
          risk("Mi cuerpo pide consumir, debo obedecer.", "El malestar no debe decidir por ti.", "craving"),
          excellent(
            "Mi cuerpo avisa: necesito parar, pedir ayuda y revisar mi plan.",
            "Excelente. Conviertes señal en intervención."
          ),
          risk("Lo oculto hasta que pase.", "Ocultar puede retrasar ayuda.", "ocultación"),
          severe("Me automedico sin consultar.", "Eso puede aumentar riesgos."),
        ],
      },
    ],
  },

  {
    id: "mind",
    title: "Mente y emociones",
    short: "Craving, culpa, vergüenza y pensamientos trampa.",
    icon: "🌊",
    image: "mind",
    color: "blue",
    missions: [
      {
        title: "Solo hoy",
        type: "roleplay",
        difficulty: "Inicio",
        fenixStep: "Frena",
        testimony:
          "El craving hablaba como si fuera una orden. Aprendí que era una ola, no una sentencia.",
        scene:
          "Aparece el pensamiento: “solo hoy, mañana empiezo”. Estás nervioso y quieres escapar.",
        bio: "El cuerpo busca alivio rápido y se activa la urgencia.",
        psico: "El pensamiento trampa justifica la conducta de riesgo.",
        social: "Si estás solo o cerca de contactos de consumo, el riesgo sube.",
        question: "¿Qué respuesta entrenada usarías?",
        options: [
          risk("Solo hoy no cuenta.", "Esa frase alimenta la cadena.", "trampa"),
          excellent(
            "No decido desde el impulso. Primero gano 10 segundos.",
            "Respuesta protectora. Corta el automatismo.",
            "10 segundos"
          ),
          partial("Me encierro y no se lo digo a nadie.", "Aislarse puede subir el riesgo.", "aislamiento"),
          risk("Mañana lo arreglo.", "Aplazar ayuda mantiene el ciclo.", "aplazamiento"),
        ],
      },
      {
        title: "Ya he fallado",
        type: "repair",
        difficulty: "Medio",
        fenixStep: "Rompe la cadena",
        testimony:
          "Pensé que una recaída borraba todo. Después entendí que era una señal para reforzar mi plan.",
        scene:
          "Has recaído. Aparecen culpa, vergüenza y la frase: “ya está todo perdido”.",
        bio: "Después del consumo puede aparecer cansancio, bajón y más vulnerabilidad.",
        psico: "La culpa puede transformarse en abandono si no se trabaja.",
        social: "Ocultarlo puede romper más la confianza y retrasar ayuda.",
        question: "¿Qué opción abre reparación?",
        options: [
          severe("Sigo consumiendo porque ya he fallado.", "Eso agranda la caída.", "abandono"),
          risk("Lo oculto para no decepcionar.", "Ocultar suele aumentar vergüenza y soledad.", "ocultación"),
          excellent(
            "Aviso, reviso qué lo activó y ajusto mi plan.",
            "Correcto. Recaída no es final, es información.",
            "reparación"
          ),
          risk("Culpo a todos.", "La culpa externa bloquea reparación.", "conflicto"),
        ],
      },
      {
        title: "Vergüenza y estigma",
        type: "roleplay",
        difficulty: "Medio",
        fenixStep: "Inicia ayuda",
        testimony:
          "Tardé demasiado por miedo a que todos lo supieran. El silencio me hizo más daño.",
        scene: "Necesitas ayuda, pero piensas: “si lo cuento, me van a juzgar”.",
        bio: "El estrés y la activación pueden aumentar la urgencia de escape.",
        psico: "La vergüenza bloquea pedir ayuda y refuerza aislamiento.",
        social: "El estigma comunitario puede retrasar el primer contacto.",
        question: "¿Qué paso es más protector?",
        options: [
          risk("No digo nada hasta que sea grave.", "Esperar puede aumentar consecuencias.", "silencio"),
          good(
            "Busco una persona o recurso privado y doy un primer paso.",
            "Correcto. Privacidad y apoyo reducen barreras.",
            "ayuda"
          ),
          partial("Lo cuento sin plan a cualquiera.", "Hablar ayuda, pero conviene elegir apoyo seguro."),
          risk("Me aíslo para que nadie lo note.", "Aislarse aumenta riesgo.", "aislamiento"),
        ],
      },
      {
        title: "Ansiedad y alivio rápido",
        type: "roleplay",
        difficulty: "Avanzado",
        fenixStep: "Frena",
        testimony:
          "No consumía solo por placer. Muchas veces consumía para no sentir.",
        scene: "Tienes ansiedad. Tu mente dice: “si consumo, se me pasa”.",
        bio: "El cuerpo está activado: respiración rápida, tensión, inquietud.",
        psico: "Aparece expectativa de alivio rápido.",
        social: "Si no tienes alternativas, puedes recurrir al patrón aprendido.",
        question: "¿Qué alternativa entrena regulación?",
        options: [
          severe(
            "Consumir para cortar la ansiedad.",
            "Alivia a corto plazo, pero refuerza el ciclo.",
            "alivio rápido"
          ),
          excellent(
            "Respirar, nombrar emoción, moverme y avisar a apoyo.",
            "Excelente. Regulación, apoyo y acción incompatible.",
            "regulación"
          ),
          partial("No sentir nada y aguantar solo.", "Aguantar solo no siempre protege.", "aislamiento"),
          risk("Buscar a alguien de consumo para distraerme.", "Eso activa una vía de riesgo.", "contacto"),
        ],
      },
      {
        title: "Pensamiento trampa",
        type: "quiz",
        difficulty: "Medio",
        fenixStep: "Nombra",
        testimony:
          "Lo peor no era solo el impulso. Era la frase que me convencía de caer.",
        scene:
          "Aparecen frases como: “yo controlo”, “me lo merezco”, “nadie se entera”, “solo hoy”.",
        bio: "El impulso puede sentirse urgente y corporal.",
        psico:
          "El pensamiento trampa justifica una conducta que ya sabemos que tiene consecuencias.",
        social:
          "Si no se corta, puede llevar a ocultación, contacto de riesgo o recaída.",
        question: "¿Qué respuesta rompe mejor el pensamiento trampa?",
        options: [
          risk(
            "Si lo pienso mucho será porque lo necesito.",
            "Un pensamiento intenso no siempre indica una necesidad real.",
            "trampa"
          ),
          excellent(
            "Lo nombro, no le obedezco y activo mi plan.",
            "Correcto. Nombrar el pensamiento reduce su poder."
          ),
          partial(
            "Intento distraerme sin pedir apoyo.",
            "Puede ayudar algo, pero si el impulso sube conviene activar apoyo."
          ),
          severe(
            "Me acerco al lugar de riesgo para comprobar si controlo.",
            "Ponerte a prueba aumenta exposición.",
            "exposición"
          ),
        ],
      },
    ],
  },

  {
    id: "life",
    title: "Vida y consecuencias",
    short: "Trabajo, familia, soledad, economía y futuro.",
    icon: "🧩",
    image: "life",
    color: "purple",
    missions: [
      {
        title: "El trabajo perdido",
        type: "simulation",
        difficulty: "Medio",
        fenixStep: "Entiende",
        testimony:
          "No lo vi venir. Primero llegaba tarde, luego mentía, después perdí la confianza.",
        scene:
          "El consumo empieza a afectar puntualidad, rendimiento y relación con compañeros.",
        bio: "El sueño, el cansancio y la abstinencia pueden afectar rendimiento.",
        psico: "Aparecen culpa, mentiras y evitación.",
        social: "El trabajo puede deteriorarse y aumentar presión económica.",
        question: "¿Qué decisión protege mejor el futuro laboral?",
        options: [
          risk("Ocultarlo hasta que explote.", "La ocultación suele agrandar el problema."),
          excellent(
            "Pedir ayuda, reorganizar rutinas y cortar situaciones de riesgo.",
            "Correcto. Actuar temprano protege."
          ),
          partial("Prometer que no volverá a pasar sin plan.", "La promesa ayuda poco si no hay estrategia."),
          severe("Consumir para aguantar mejor el trabajo.", "Eso puede acelerar el deterioro.", "uso funcional"),
        ],
      },
      {
        title: "Familia rota",
        type: "roleplay",
        difficulty: "Medio",
        fenixStep: "Nombra",
        testimony:
          "Mi familia no se rompió de golpe. Se fue rompiendo con mentiras, miedo y cansancio.",
        scene:
          "La familia pregunta qué ocurre. La persona responde con irritación y evita hablar.",
        bio: "La irritabilidad puede aumentar por falta de sueño o abstinencia.",
        psico: "La vergüenza puede convertirse en defensa y ataque.",
        social: "La confianza familiar se daña cuando no hay comunicación ni límites.",
        question: "¿Qué respuesta abre una vía de reparación?",
        options: [
          severe("Gritar y culpar a la familia.", "El ataque rompe más la comunicación."),
          excellent(
            "Reconocer que hay un problema y pedir hablar con calma.",
            "Correcto. No resuelve todo, pero abre puerta."
          ),
          risk("Negarlo todo aunque sea evidente.", "Negar bloquea apoyo."),
          partial("Pedir dinero y prometer que será la última vez.", "Sin plan, puede mantener el ciclo."),
        ],
      },
      {
        title: "Dinero en el bolsillo",
        type: "chain",
        difficulty: "Medio",
        fenixStep: "Frena",
        testimony:
          "Cuando llevaba dinero sin plan, la cadena se activaba mucho antes de consumir.",
        scene:
          "Cobras o recibes dinero. Aparecen impulsos, contactos y planes de riesgo.",
        bio: "El cerebro anticipa recompensa y puede activar urgencia.",
        psico: "El pensamiento trampa dice: “esta vez controlo”.",
        social: "El acceso a dinero y contactos de riesgo aumenta exposición.",
        question: "¿Qué medida protege más?",
        options: [
          risk("Llevar todo el dinero encima para demostrar control.", "Aumenta exposición."),
          excellent(
            "Planificar pagos, limitar efectivo y avisar a apoyo.",
            "Excelente. Creas barreras protectoras."
          ),
          partial("Guardar algo y ver qué pasa.", "Puede ayudar algo, pero queda mucho margen de riesgo."),
          severe("Pedir dinero prestado para recuperar lo perdido.", "Eso puede agravar deudas y conflicto.", "deuda"),
        ],
      },
      {
        title: "Soledad de madrugada",
        type: "roleplay",
        difficulty: "Avanzado",
        fenixStep: "Frena",
        testimony:
          "La madrugada era peligrosa porque parecía que nadie podía verme ni ayudarme.",
        scene: "Son las 2:30. Estás solo, con ansiedad y el móvil en la mano.",
        bio: "El cansancio baja autocontrol y aumenta impulsividad.",
        psico: "La soledad puede aumentar craving, tristeza o urgencia.",
        social: "Contactos, apps o zonas de riesgo están a un clic.",
        question: "¿Qué decisión corta mejor la cadena?",
        options: [
          severe("Escribir a antiguos contactos para no estar solo.", "Puede activar consumo o conducta de riesgo."),
          excellent(
            "Alejar el móvil, respirar, escribir el diario y avisar a alguien seguro.",
            "Correcto. Cambias el patrón."
          ),
          partial("Ver vídeos hasta dormir.", "Puede distraer, pero también mantener activación."),
          risk("Esperar a que se pase sin moverme.", "La espera pasiva puede subir el impulso."),
        ],
      },
      {
        title: "Proyecto de vida",
        type: "motivation",
        difficulty: "Avanzado",
        fenixStep: "Rompe la cadena",
        testimony:
          "No recuperé mi vida de una vez. Empecé recuperando un día, una rutina y una decisión.",
        scene:
          "Piensas en estudios, trabajo, familia, salud y futuro. Parece demasiado grande.",
        bio: "El cuerpo necesita descanso, alimentación, seguimiento y estabilidad.",
        psico: "Marcar objetivos pequeños reduce sensación de fracaso.",
        social: "La red de apoyo permite sostener el cambio en la vida real.",
        question: "¿Qué enfoque es más realista?",
        options: [
          risk("Cambiar todo de golpe o abandonar si fallo.", "El todo o nada desgasta."),
          excellent(
            "Elegir un objetivo pequeño, medible y acompañado.",
            "Excelente. El cambio se construye por pasos."
          ),
          partial("Pensar mucho sin hacer nada hoy.", "Reflexionar ayuda, pero necesita acción."),
          severe("Volver al grupo de siempre para sentir pertenencia.", "La pertenencia de riesgo puede reactivar la cadena."),
        ],
      },
    ],
  },

  {
    id: "motivation",
    title: "Motivación para el cambio",
    short: "Decidir, sostener y recuperar sentido.",
    icon: "⚖️",
    image: "motivation",
    color: "gold",
    missions: [
      {
        title: "La balanza",
        type: "motivation",
        difficulty: "Inicio",
        fenixStep: "Entiende",
        testimony:
          "Cuando puse en una balanza lo que ganaba y lo que perdía, dejé de engañarme.",
        scene:
          "El juego te pide comparar alivio inmediato frente a salud, familia, libertad y futuro.",
        bio: "El alivio rápido puede pesar mucho en momentos de malestar.",
        psico:
          "La ambivalencia es normal: una parte quiere cambiar y otra quiere seguir igual.",
        social: "Las consecuencias ayudan a ver el impacto fuera de uno mismo.",
        question: "¿Qué pensamiento ayuda más al cambio?",
        options: [
          risk("Solo mirar lo que me alivia ahora.", "Eso deja fuera consecuencias importantes."),
          excellent(
            "Mirar alivio inmediato y también costes reales.",
            "Correcto. La balanza completa ayuda a decidir."
          ),
          partial("Pensar que cambiar será fácil siempre.", "El cambio necesita realismo."),
          severe("No mirar nada para no sentir culpa.", "Evitar bloquea conciencia y ayuda."),
        ],
      },
      {
        title: "Mis valores no se negocian",
        type: "motivation",
        difficulty: "Medio",
        fenixStep: "Nombra",
        testimony:
          "Cuando recordaba por qué quería cambiar, el impulso seguía ahí, pero ya no mandaba igual.",
        scene:
          "Te ofrecen consumir o volver a una conducta de riesgo. Antes de decidir, recuerdas qué quieres recuperar.",
        bio: "El impulso busca alivio rápido, pero el cuerpo necesita estabilidad.",
        psico: "Conectar con valores reduce decisiones automáticas.",
        social:
          "Familia, salud, trabajo, libertad y autoestima pueden actuar como anclas.",
        question: "¿Qué respuesta conecta mejor con tus valores?",
        options: [
          risk("Solo hoy no pasa nada.", "Esa frase abre la cadena."),
          excellent(
            "Ahora decido por mi salud, mi libertad y mi futuro.",
            "Excelente. Conectas decisión y valores."
          ),
          partial("Cambio solo para que no me regañen.", "Puede ayudar al inicio, pero necesitas motivos propios."),
          severe("No pienso en nada, actúo por impulso.", "El impulso no debe dirigir la decisión."),
        ],
      },
      {
        title: "Contrato conmigo",
        type: "motivation",
        difficulty: "Avanzado",
        fenixStep: "Rompe la cadena",
        testimony:
          "Mi contrato no era una promesa perfecta. Era una guía para no perderme cuando viniera el impulso.",
        scene:
          "Creas un compromiso de 24 horas: no resolver toda tu vida, solo proteger el día de hoy.",
        bio: "El cerebro aprende por repetición de acciones protectoras.",
        psico: "Un compromiso concreto reduce ambigüedad bajo presión.",
        social: "Compartir el compromiso con alguien seguro aumenta apoyo.",
        question: "¿Qué compromiso es más realista?",
        options: [
          partial("Prometo no fallar nunca más.", "Es demasiado absoluto y puede hundir si hay una caída."),
          excellent(
            "Durante 24 horas evitaré una zona de riesgo y avisaré a una persona segura.",
            "Excelente. Es concreto y posible."
          ),
          risk("No haré nada hasta tener ganas de cambiar.", "La motivación también aparece después de actuar."),
          risk("Lo guardo en secreto para no tener presión.", "El secreto puede aumentar aislamiento."),
        ],
      },
      {
        title: "Primer paso",
        type: "motivation",
        difficulty: "Inicio",
        fenixStep: "Inicia ayuda",
        testimony:
          "El primer paso no fue espectacular. Fue una llamada. Pero cambió la dirección.",
        scene:
          "Quieres cambiar, pero piensas que pedir ayuda es demasiado grande.",
        bio: "El cuerpo puede estar agotado y necesitar apoyo para estabilizarse.",
        psico: "El miedo al fracaso puede bloquear la acción.",
        social: "Un recurso o persona segura puede acompañar el primer paso.",
        question: "¿Qué acción es más útil hoy?",
        options: [
          risk("Esperar al momento perfecto.", "El momento perfecto puede no llegar."),
          excellent(
            "Hacer una llamada o enviar un mensaje de ayuda.",
            "Correcto. Un paso concreto abre camino."
          ),
          partial("Leer mucho sin contactar con nadie.", "Informarse ayuda, pero puede quedarse corto."),
          severe("Prometer cambiar sin apoyo.", "El apoyo aumenta probabilidad de sostener."),
        ],
      },
      {
        title: "Cuando baja la motivación",
        type: "motivation",
        difficulty: "Medio",
        fenixStep: "Frena",
        testimony:
          "Aprendí que no todos los días tendría fuerza. Por eso necesitaba rutina, no solo ganas.",
        scene:
          "Llevas unos días mejor, pero hoy no tienes ganas de seguir con el plan.",
        bio: "La fatiga y el malestar pueden reducir energía.",
        psico: "La motivación sube y baja; la rutina sostiene.",
        social: "El seguimiento evita abandonar cuando baja el ánimo.",
        question: "¿Qué respuesta protege más?",
        options: [
          risk("Si no tengo ganas, abandono.", "La falta de ganas no significa fracaso."),
          excellent(
            "Hago el mínimo protector: rutina, apoyo y evitar riesgo.",
            "Excelente. Lo mínimo también sostiene."
          ),
          partial("Me exijo hacerlo perfecto.", "La perfección puede bloquear."),
          severe("Vuelvo a probar para comprobar si controlo.", "Probarse puede reactivar el ciclo."),
        ],
      },
    ],
  },

  {
    id: "radar",
    title: "Radar de riesgo",
    short: "Disparadores, zonas rojas y señales tempranas.",
    icon: "📡",
    image: "radar",
    color: "red",
    missions: [
      {
        title: "Semáforo emocional",
        type: "classify",
        difficulty: "Inicio",
        fenixStep: "Nombra",
        testimony:
          "No recaía de repente. Antes siempre había señales: cansancio, rabia, soledad o exceso de confianza.",
        scene: "El juego te muestra tres estados: verde, amarillo y rojo.",
        bio: "El cuerpo avisa con tensión, insomnio, inquietud o cansancio.",
        psico: "La emoción intensa puede reducir claridad.",
        social: "El entorno puede subir o bajar el riesgo.",
        question: "¿Qué haces en amarillo?",
        options: [
          risk("Espero a llegar a rojo.", "Llegar tarde dificulta decidir."),
          excellent(
            "Activo prevención: descanso, apoyo, distancia y plan.",
            "Correcto. Amarillo es momento de actuar."
          ),
          partial("Me distraigo sin revisar nada.", "Puede aliviar, pero no identifica la señal."),
          severe("Me acerco a zona de riesgo para probarme.", "Eso aumenta exposición."),
        ],
      },
      {
        title: "Mapa de disparadores",
        type: "classify",
        difficulty: "Medio",
        fenixStep: "Nombra",
        testimony:
          "Mi recaída empezaba mucho antes: una discusión, dinero encima, cansancio o una llamada.",
        scene:
          "Identificas personas, lugares, emociones, horarios y objetos que activan la cadena.",
        bio: "Cansancio y abstinencia pueden bajar autocontrol.",
        psico: "Los pensamientos trampa justifican decisiones dañinas.",
        social: "Lugares y contactos pueden activar memoria de consumo.",
        question: "¿Cuál sería el mejor uso del radar?",
        options: [
          risk("Esperar a que el impulso sea fuerte.", "Cuando ya está alto cuesta más decidir."),
          excellent(
            "Detectar disparadores antes y activar una acción protectora.",
            "Correcto. El radar sirve para anticiparse."
          ),
          partial("Pensar que la voluntad basta.", "La voluntad ayuda, pero el contexto pesa."),
          severe("Acercarme a la zona roja para probarme.", "Ponerte a prueba aumenta riesgo."),
        ],
      },
      {
        title: "Ruta alternativa",
        type: "simulation",
        difficulty: "Avanzado",
        fenixStep: "Rompe la cadena",
        testimony:
          "Cambiar de calle parecía una tontería. Pero esa tontería me salvó muchas veces.",
        scene: "Tu ruta habitual pasa por un lugar asociado al consumo o a conducta de riesgo.",
        bio:
          "El cuerpo puede activar memoria de recompensa al pasar por lugares asociados.",
        psico: "Aparece la frase: “solo voy a pasar, no va a pasar nada”.",
        social: "Cambiar ruta, avisar y tener destino seguro reduce exposición.",
        question: "¿Qué decisión corta mejor la cadena?",
        options: [
          severe("Paso por allí para demostrar que controlo.", "Ponerte a prueba aumenta exposición."),
          excellent(
            "Cambio de ruta, aviso a alguien y voy a un lugar seguro.",
            "Excelente. Cambias ambiente y activas apoyo."
          ),
          partial("Paso rápido y miro el móvil.", "Sigues en zona de riesgo."),
          severe("Quedo con antiguos contactos para no ir solo.", "Los contactos de riesgo pueden activar la cadena."),
        ],
      },
      {
        title: "El mensaje de madrugada",
        type: "roleplay",
        difficulty: "Medio",
        fenixStep: "Frena",
        testimony:
          "Un mensaje a deshora podía abrir una noche entera de riesgo.",
        scene: "Recibes un mensaje de alguien relacionado con consumo o apuestas.",
        bio: "La noche y el cansancio reducen autocontrol.",
        psico: "La curiosidad y la nostalgia pueden parecer inofensivas.",
        social: "El contacto de riesgo puede arrastrar a la conducta.",
        question: "¿Qué respuesta es más protectora?",
        options: [
          severe("Contesto para ver qué quiere.", "Responder puede abrir la cadena."),
          excellent(
            "No contesto, bloqueo si hace falta y aviso a apoyo.",
            "Correcto. Cortas el estímulo."
          ),
          partial("Contesto diciendo que no, pero sigo hablando.", "Mantener conversación mantiene riesgo."),
          risk("Quedo solo para hablar.", "Quedar aumenta exposición."),
        ],
      },
      {
        title: "Dinero, tiempo y soledad",
        type: "chain",
        difficulty: "Avanzado",
        fenixStep: "Frena",
        testimony:
          "Cuando coincidían dinero, tiempo libre y soledad, el riesgo subía muchísimo.",
        scene: "Tienes una tarde libre, dinero disponible y nadie sabe dónde estás.",
        bio: "La anticipación de recompensa activa impulsos.",
        psico: "La mente puede justificar: “me lo merezco”.",
        social: "Sin plan ni apoyo, aumenta la vulnerabilidad.",
        question: "¿Qué estrategia protege más?",
        options: [
          severe("Improvisar y confiar en mi fuerza.", "Sin plan aumenta riesgo."),
          excellent(
            "Planificar la tarde, limitar dinero y avisar a alguien seguro.",
            "Excelente. Reduces riesgo en varios niveles."
          ),
          partial("Quedarme en casa sin plan.", "Puede ayudar, pero la soledad puede activar impulso."),
          risk("Entrar en redes o apps de riesgo.", "El acceso digital puede activar la cadena."),
        ],
      },
    ],
  },

  {
    id: "shield",
    title: "Escudo de protección",
    short: "Límites, apoyo y habilidades sociales.",
    icon: "🛡️",
    image: "shield",
    color: "green",
    missions: [
      {
        title: "Decir no sin pelear",
        type: "roleplay",
        difficulty: "Inicio",
        fenixStep: "Rompe la cadena",
        testimony: "Aprendí que decir no no era quedar mal. Era protegerme.",
        scene: "Alguien insiste: “venga, una vez no pasa nada”.",
        bio: "La presión puede activar tensión corporal.",
        psico: "El miedo a quedar mal puede debilitar límites.",
        social: "Una frase clara evita entrar en negociación peligrosa.",
        question: "¿Qué respuesta es más protectora?",
        options: [
          risk("Vale, pero solo una vez.", "Abre la puerta al ciclo."),
          excellent("No, gracias. Hoy me voy a cuidar.", "Claro, breve y protector."),
          partial("No sé, luego veo.", "La ambigüedad deja puerta abierta."),
          severe("Acepto para no perder amigos.", "La pertenencia de riesgo no protege."),
        ],
      },
      {
        title: "Persona segura",
        type: "support",
        difficulty: "Inicio",
        fenixStep: "Inicia ayuda",
        testimony:
          "No necesitaba contárselo a todo el mundo. Necesitaba contárselo a la persona adecuada.",
        scene: "Debes elegir a quién avisar en un momento de riesgo.",
        bio: "El cuerpo necesita bajar activación.",
        psico: "Sentirse acompañado reduce urgencia.",
        social: "La persona segura escucha, no juzga y ayuda a actuar.",
        question: "¿Quién es mejor apoyo?",
        options: [
          risk("Alguien que consume conmigo.", "Puede aumentar riesgo."),
          excellent("Alguien que escucha, respeta y ayuda a pedir ayuda.", "Correcto. Apoyo seguro."),
          partial("Cualquier persona al azar.", "Conviene elegir seguridad y confianza."),
          severe("Nadie, tengo que poder solo.", "La soledad aumenta riesgo."),
        ],
      },
      {
        title: "Escudo FÉNIX",
        type: "shield",
        difficulty: "Medio",
        fenixStep: "Rompe la cadena",
        testimony: "Mi escudo era simple: motivo, persona, lugar, recurso y acción.",
        scene: "Construyes un plan para momentos de impulso.",
        bio: "La activación baja cuando hay pasos claros.",
        psico: "Un plan escrito evita pensar desde el impulso.",
        social: "Incluir un recurso real aumenta protección.",
        question: "¿Qué escudo es más útil?",
        options: [
          partial("Un plan mental sin escribir.", "Puede servir, pero se olvida bajo presión."),
          excellent(
            "Motivo, apoyo, lugar seguro, recurso y acción concreta.",
            "Excelente. Es completo y práctico."
          ),
          risk("Una promesa general de portarme bien.", "Es poco concreta."),
          severe("No hacer plan para no obsesionarme.", "Sin plan aumenta improvisación."),
        ],
      },
      {
        title: "Límites con contactos",
        type: "simulation",
        difficulty: "Medio",
        fenixStep: "Frena",
        testimony: "No podía cambiar si seguía dejando abierta la misma puerta.",
        scene: "Un contacto de riesgo te escribe para quedar.",
        bio: "La anticipación puede activar craving.",
        psico: "La mente minimiza: “solo hablar”.",
        social: "Bloquear, silenciar o poner límites reduce exposición.",
        question: "¿Qué límite protege más?",
        options: [
          severe("Quedo para demostrar que no pasa nada.", "Ponerte a prueba aumenta riesgo."),
          excellent("No respondo, bloqueo si hace falta y aviso a mi apoyo.", "Correcto. Límite claro."),
          partial("Respondo con excusas largas.", "Puede mantener conversación."),
          risk("Le digo que quizá otro día.", "Deja la puerta abierta."),
        ],
      },
      {
        title: "Habilidad social de salida",
        type: "roleplay",
        difficulty: "Avanzado",
        fenixStep: "Rompe la cadena",
        testimony: "La frase preparada me salvó cuando no podía improvisar.",
        scene: "Estás en un lugar que se empieza a volver peligroso.",
        bio: "La tensión corporal indica alerta.",
        psico: "Salir pronto evita discutir con el impulso.",
        social: "Una salida breve y respetuosa reduce conflicto.",
        question: "¿Qué frase ayuda más?",
        options: [
          risk("Me quedo para no dar explicaciones.", "Quedarte aumenta exposición."),
          excellent(
            "Me tengo que ir, mañana hablamos. Me voy a cuidar.",
            "Breve, firme y protectora."
          ),
          partial("Doy muchas explicaciones.", "Puede abrir debate."),
          severe("Acepto el plan para no quedar mal.", "Prioriza presión sobre salud."),
        ],
      },
    ],
  },

  {
    id: "repair",
    title: "Reparar la cadena",
    short: "Recaídas, reparación y continuidad.",
    icon: "⛓️",
    image: "repair",
    color: "orange",
    missions: [
      {
        title: "He recaído",
        type: "repair",
        difficulty: "Medio",
        fenixStep: "Rompe la cadena",
        testimony:
          "La recaída no fue el final. Fue una señal de que mi plan necesitaba refuerzo.",
        scene: "Después de una recaída aparece culpa y ganas de abandonar.",
        bio: "Puede haber cansancio, bajón y vulnerabilidad física.",
        psico: "La culpa puede convertirse en abandono.",
        social: "Avisar permite reparar antes.",
        question: "¿Qué haces ahora?",
        options: [
          severe("Sigo porque ya da igual.", "Eso agranda el daño."),
          excellent(
            "Aviso, reviso la cadena y retomo el plan hoy.",
            "Correcto. Reparar es actuar pronto."
          ),
          risk("Lo oculto.", "Ocultar aumenta soledad."),
          partial("Me castigo mentalmente.", "La culpa sin acción no repara."),
        ],
      },
      {
        title: "La cadena paso a paso",
        type: "chain",
        difficulty: "Inicio",
        fenixStep: "Nombra",
        testimony: "Cuando entendí mi cadena, pude intervenir antes.",
        scene: "Disparador, pensamiento, emoción, impulso, conducta y consecuencia.",
        bio: "El cuerpo participa con tensión, cansancio o craving.",
        psico: "El pensamiento trampa empuja la conducta.",
        social: "El contexto puede facilitar o cortar la cadena.",
        question: "¿Dónde se puede intervenir?",
        options: [
          risk("Solo después de consumir.", "Se puede intervenir antes."),
          excellent(
            "En cualquier eslabón: disparador, pensamiento, emoción o contexto.",
            "Correcto. Hay varias puertas de salida."
          ),
          partial("Solo cuando estoy motivado.", "La protección también funciona sin ganas."),
          severe("Nunca se puede intervenir.", "Eso genera indefensión."),
        ],
      },
      {
        title: "Pedir perdón con hechos",
        type: "family",
        difficulty: "Medio",
        fenixStep: "Rompe la cadena",
        testimony:
          "Pedir perdón fue importante, pero lo que reparó fue sostener cambios.",
        scene: "La familia está cansada de promesas incumplidas.",
        bio: "La estabilización necesita tiempo.",
        psico: "La vergüenza puede llevar a prometer de más.",
        social: "La confianza vuelve con coherencia, límites y seguimiento.",
        question: "¿Qué reparación es más creíble?",
        options: [
          partial("Prometer que nunca pasará.", "Puede sonar bien, pero es frágil."),
          excellent(
            "Reconocer daño, explicar plan y aceptar seguimiento.",
            "Correcto. Reparación con hechos."
          ),
          risk("Exigir que confíen ya.", "La confianza no se impone."),
          severe("Culpar a la familia.", "Eso rompe más."),
        ],
      },
      {
        title: "Volver al plan",
        type: "repair",
        difficulty: "Medio",
        fenixStep: "Rompe la cadena",
        testimony:
          "Lo importante fue volver al plan antes de que la caída se convirtiera en abandono.",
        scene: "Tras un fallo, tienes que decidir qué hacer en las próximas 24 horas.",
        bio: "El cuerpo necesita descanso, hidratación, comida y seguridad.",
        psico: "La mente puede decir: “ya está perdido”.",
        social: "Un contacto profesional o de apoyo puede ayudar a retomar.",
        question: "¿Cuál es el plan de 24 horas?",
        options: [
          severe("Seguir hasta el lunes.", "Aplazar agrava el ciclo."),
          excellent(
            "Descanso, aviso, no exposición y cita o llamada de ayuda.",
            "Excelente. Cortas la continuidad del riesgo."
          ),
          partial("Dormir y no hablar con nadie.", "Descansar ayuda, pero falta apoyo."),
          risk("Buscar excusas.", "Las excusas retrasan reparación."),
        ],
      },
      {
        title: "Aprender sin hundirse",
        type: "repair",
        difficulty: "Avanzado",
        fenixStep: "Nombra",
        testimony:
          "Aprender de la caída me dio más herramientas que odiarme por ella.",
        scene: "El juego te pide extraer una lección concreta de lo ocurrido.",
        bio: "El cansancio puede aumentar fragilidad tras la caída.",
        psico: "La autocrítica extrema reduce esperanza.",
        social: "Compartir el aprendizaje con apoyo aumenta compromiso.",
        question: "¿Qué aprendizaje es más útil?",
        options: [
          risk("Soy un desastre y no tengo arreglo.", "Etiqueta y desesperanza no ayudan."),
          excellent(
            "Necesito reforzar el eslabón que falló y pedir apoyo antes.",
            "Correcto. Aprendizaje concreto."
          ),
          partial("No pensar más en ello.", "Evitar impide aprender."),
          severe("Castigarme para no repetir.", "El castigo no enseña habilidades."),
        ],
      },
    ],
  },

  {
    id: "family",
    title: "Familia en acción",
    short: "Acompañar, poner límites y pedir ayuda.",
    icon: "🏠",
    image: "family",
    color: "green",
    missions: [
      {
        title: "Conversación difícil",
        type: "family",
        difficulty: "Inicio",
        fenixStep: "Inicia ayuda",
        testimony:
          "Cuando dejaron de gritarme y empezaron a hablar claro, pude escuchar algo.",
        scene: "La familia quiere hablar, pero hay tensión.",
        bio: "La persona puede estar irritable o cansada.",
        psico: "La vergüenza puede salir como defensa.",
        social: "Hablar en calma y privado protege la relación.",
        question: "¿Cómo empezar?",
        options: [
          severe("Acusar y amenazar desde el primer minuto.", "Eso bloquea escucha."),
          excellent(
            "Hablar en privado, desde hechos y preocupación, no desde insultos.",
            "Correcto. Firmeza y respeto."
          ),
          partial("Hacer como si nada.", "Evitar no ayuda."),
          risk("Hablar delante de todo el mundo.", "Puede humillar y cerrar la puerta."),
        ],
      },
      {
        title: "Límites que cuidan",
        type: "family",
        difficulty: "Medio",
        fenixStep: "Rompe la cadena",
        testimony:
          "El límite no fue abandono. Fue la forma de dejar de alimentar el problema.",
        scene: "La persona pide dinero y promete que será la última vez.",
        bio: "La urgencia puede ser real, pero no siempre debe obedecerse.",
        psico: "La manipulación puede aparecer cuando hay dependencia.",
        social: "Dar dinero sin control puede sostener el consumo.",
        question: "¿Qué límite es más sano?",
        options: [
          severe("Dar dinero para evitar conflicto.", "Puede mantener el ciclo."),
          excellent(
            "No dar dinero para riesgo y ofrecer acompañar a un recurso.",
            "Correcto. Límite y ayuda."
          ),
          partial("Discutir durante horas.", "Agota y no resuelve."),
          risk("Echarlo todo sin plan ni seguridad.", "Puede aumentar riesgo si no se valora la situación."),
        ],
      },
      {
        title: "Cuidar al cuidador",
        type: "family",
        difficulty: "Medio",
        fenixStep: "Entiende",
        testimony:
          "Mi familia también necesitó ayuda. No podían sostenerlo todo solos.",
        scene: "La familia está agotada, con miedo y discusiones constantes.",
        bio: "El estrés familiar afecta sueño, salud y energía.",
        psico: "La culpa y la sobreprotección desgastan.",
        social: "La familia también puede pedir orientación.",
        question: "¿Qué decisión protege a la familia?",
        options: [
          risk("Aguantar solos hasta romper.", "El aislamiento familiar desgasta."),
          excellent(
            "Pedir orientación, apoyo y pautas de límites.",
            "Correcto. La familia también necesita red."
          ),
          partial("Controlar cada movimiento.", "El control total suele generar más conflicto."),
          severe("Culparse de todo.", "La culpa no organiza la intervención."),
        ],
      },
      {
        title: "No encubrir",
        type: "family",
        difficulty: "Avanzado",
        fenixStep: "Rompe la cadena",
        testimony:
          "Cada mentira que tapaban por mí me permitía seguir igual un poco más.",
        scene: "La familia duda entre encubrir una ausencia, una deuda o una mentira.",
        bio: "La dependencia puede empujar a evitar consecuencias.",
        psico: "Encubrir reduce responsabilidad.",
        social: "La protección mal entendida puede mantener el problema.",
        question: "¿Qué hace una familia protectora?",
        options: [
          severe("Taparlo todo para que no sufra.", "Encubrir puede mantener el ciclo."),
          excellent("No encubrir, hablar claro y orientar hacia ayuda.", "Correcto. Amor con límites."),
          partial("Reñir sin ofrecer salida.", "Falta orientación."),
          risk("Amenazar sin cumplir nada.", "Los límites inconsistentes pierden fuerza."),
        ],
      },
      {
        title: "Protocolo familiar",
        type: "family",
        difficulty: "Avanzado",
        fenixStep: "Nombra",
        testimony:
          "Cuando mi familia tuvo un plan, dejaron de improvisar desde el miedo.",
        scene: "La familia crea un protocolo: señales, límites, apoyo y recurso.",
        bio: "En crisis puede haber desregulación.",
        psico: "Un protocolo reduce decisiones impulsivas.",
        social: "La coordinación familiar evita mensajes contradictorios.",
        question: "¿Qué protocolo es mejor?",
        options: [
          risk("Cada uno actúa por su cuenta.", "La descoordinación confunde."),
          excellent(
            "Señales de alerta, límites claros, persona portavoz y recurso de ayuda.",
            "Excelente. Organización familiar."
          ),
          partial("Solo hablar cuando explote.", "Se llega tarde."),
          severe("Castigo sin acompañamiento.", "Puede aumentar aislamiento."),
        ],
      },
    ],
  },

  {
    id: "recovery",
    title: "Recurso socioeducativo FÉNIX",
    short: "Continuidad, identidad y proyecto de vida.",
    icon: "🌅",
    image: "recovery",
    color: "gold",
    missions: [
      {
        title: "Después de un buen día",
        type: "recovery",
        difficulty: "Medio",
        fenixStep: "Rompe la cadena",
        testimony:
          "También tuve que aprender a cuidarme cuando me iba bien. La confianza excesiva era otro riesgo.",
        scene:
          "Llevas varios días mejor y aparece la idea: “ya puedo relajarme un poco”.",
        bio: "Cuando baja tensión, puede aparecer deseo de recompensa.",
        psico: "La confianza excesiva puede hacer abandonar rutinas.",
        social: "Mantener citas, apoyo y hábitos evita descuido.",
        question: "¿Qué decisión sostiene mejor la recuperación?",
        options: [
          risk("Como estoy bien, dejo las rutinas.", "Abandonar protección aumenta riesgo."),
          excellent(
            "Celebro el avance, pero mantengo apoyo, rutina y seguimiento.",
            "Excelente. Recuperarse también es sostener."
          ),
          severe("Vuelvo a contactos antiguos para demostrar que he cambiado.", "No necesitas probarte."),
          partial("No cuento mis avances a nadie.", "Compartir con alguien seguro puede reforzar."),
        ],
      },
      {
        title: "Mi nueva identidad",
        type: "recovery",
        difficulty: "Avanzado",
        fenixStep: "Nombra",
        testimony:
          "Dejé de definirme por mi peor etapa. Empecé a construir quién quería ser a partir de mis actos diarios.",
        scene: "Aparece el pensamiento: “yo soy así, no voy a cambiar”.",
        bio: "El cerebro aprende nuevas rutinas con repetición.",
        psico: "La identidad se reconstruye con actos pequeños y coherentes.",
        social: "El entorno de apoyo refuerza una imagen más saludable.",
        question: "¿Qué frase ayuda más?",
        options: [
          severe("Soy mi problema y no tengo arreglo.", "Esa etiqueta aumenta desesperanza."),
          excellent(
            "Tengo un problema, pero también capacidad de pedir ayuda y avanzar.",
            "Excelente. No te reduces al problema."
          ),
          partial("Solo cambiaré cuando todo sea fácil.", "El cambio empieza antes."),
          risk("No necesito a nadie.", "La recuperación se sostiene mejor con apoyo."),
        ],
      },
      {
        title: "Rutina mínima",
        type: "recovery",
        difficulty: "Inicio",
        fenixStep: "Rompe la cadena",
        testimony: "Mis rutinas pequeñas fueron mis primeras raíces.",
        scene: "El juego te pide elegir una rutina mínima diaria.",
        bio: "Sueño, comida y movimiento ayudan a estabilizar.",
        psico: "La rutina reduce caos y decisiones impulsivas.",
        social: "Hacerla visible permite seguimiento.",
        question: "¿Qué rutina protege más?",
        options: [
          risk("No necesito rutina.", "La improvisación aumenta riesgo."),
          excellent(
            "Dormir, comer, moverme y contactar con apoyo si sube el riesgo.",
            "Correcto. Rutina básica y realista."
          ),
          partial("Plan perfecto de 20 cosas.", "Puede ser demasiado y abandonarse."),
          severe("Cambiar todo sin apoyo.", "Demasiado peso para sostener solo."),
        ],
      },
      {
        title: "Recurso socioeducativo FÉNIX",
        type: "recovery",
        difficulty: "Medio",
        fenixStep: "Entiende",
        testimony:
          "No era solo dejar de consumir. Era aprender a vivir de otra manera.",
        scene:
          "El recurso te recuerda que la recuperación incluye habilidades, red y proyecto.",
        bio: "El cuerpo necesita tiempo y cuidado.",
        psico: "Aprender habilidades reduce recaídas.",
        social: "La comunidad ayuda a sostener cambios.",
        question: "¿Qué define mejor la recuperación?",
        options: [
          partial("Solo no consumir.", "Es importante, pero no suficiente."),
          excellent(
            "Cuidar cuerpo, mente, vínculos, habilidades y proyecto de vida.",
            "Excelente. Visión integral."
          ),
          risk("Alejarme de todos para no fallar.", "Aislamiento no es recuperación."),
          severe("Volver a lo mismo creyendo que ya pasó.", "La exposición sin plan aumenta riesgo."),
        ],
      },
      {
        title: "Celebrar sin riesgo",
        type: "recovery",
        difficulty: "Medio",
        fenixStep: "Frena",
        testimony: "Aprendí a celebrar sin ponerme en peligro.",
        scene: "Has logrado un avance y quieres celebrarlo.",
        bio: "El cuerpo puede buscar recompensa.",
        psico: "Celebrar protege si no reactiva el patrón.",
        social: "El entorno elegido marca la diferencia.",
        question: "¿Qué celebración protege más?",
        options: [
          severe("Celebrar en el lugar de antes.", "El contexto puede reactivar la cadena."),
          excellent(
            "Celebrar con actividad sana, persona segura y plan de vuelta.",
            "Correcto. Celebración protectora."
          ),
          partial("No celebrar nada.", "Reconocer avances también ayuda."),
          risk("Quedar con antiguos contactos.", "Puede activar riesgo."),
        ],
      },
    ],
  },

  {
    id: "teacher",
    title: "Profesorado",
    short: "Detectar, acompañar y derivar sin etiquetar.",
    icon: "👩‍🏫",
    image: "teacher",
    color: "blue",
    missions: [
      {
        title: "Observar sin etiquetar",
        type: "teacher",
        difficulty: "Inicio",
        fenixStep: "Entiende",
        testimony:
          "Cuando me señalaron, me cerré. Cuando observaron y acompañaron, pude hablar.",
        scene: "Un alumno cambia su conducta, baja rendimiento y se aísla.",
        bio: "Puede haber sueño alterado, cansancio o cambios físicos.",
        psico: "Puede sentir miedo, vergüenza o rabia.",
        social: "El centro puede detectar señales sin estigmatizar.",
        question: "¿Qué hace el profesorado?",
        options: [
          severe("Llamarlo drogadicto delante del grupo.", "Estigmatiza y daña."),
          excellent(
            "Registrar hechos observables y comunicar por cauces adecuados.",
            "Correcto. Observación profesional."
          ),
          partial("Ignorarlo para no meterse.", "Puede perderse una oportunidad de ayuda."),
          risk("Interrogarlo en público.", "Puede humillar y cerrar comunicación."),
        ],
      },
      {
        title: "Tutoría segura",
        type: "teacher",
        difficulty: "Medio",
        fenixStep: "Inicia ayuda",
        testimony: "La tutoría funcionó porque no fue un juicio. Fue una puerta.",
        scene: "Se propone una conversación privada con el alumno.",
        bio: "El alumno puede estar activado o a la defensiva.",
        psico: "La confianza facilita hablar.",
        social: "Tutoría, orientación y familia deben coordinarse.",
        question: "¿Cómo abrir la tutoría?",
        options: [
          risk("Empezar acusando.", "La acusación bloquea."),
          excellent(
            "Hablar en privado, desde preocupación y hechos, ofreciendo ayuda.",
            "Correcto. Seguridad y claridad."
          ),
          partial("Hacer bromas para suavizar.", "Puede trivializar."),
          severe("Amenazar sin escuchar.", "Aumenta defensa."),
        ],
      },
      {
        title: "Familia y centro educativo",
        type: "teacher",
        difficulty: "Avanzado",
        fenixStep: "Inicia ayuda",
        testimony:
          "Cuando familia y centro dejaron de culparse, el alumno dejó de estar solo entre dos mundos.",
        scene: "El centro detecta señales y debe hablar con la familia.",
        bio: "Puede haber cansancio y cambios de concentración.",
        psico: "El alumno puede sentir miedo a las consecuencias.",
        social: "La coordinación escuela-familia-recursos ayuda a actuar antes.",
        question: "¿Qué actuación es más adecuada?",
        options: [
          severe("Culpar directamente a la familia.", "La culpa bloquea alianza."),
          excellent(
            "Convocar reunión privada, exponer hechos observables y ofrecer orientación.",
            "Excelente. Hechos, privacidad y alianza."
          ),
          severe("Hablar del caso en público.", "Eso estigmatiza."),
          partial("Esperar prueba absoluta.", "Esperar demasiado puede perder tiempo preventivo."),
        ],
      },
      {
        title: "Derivar sin abandonar",
        type: "teacher",
        difficulty: "Medio",
        fenixStep: "Inicia ayuda",
        testimony:
          "No bastó con decirme dónde ir. Me ayudó que alguien hiciera seguimiento.",
        scene: "El alumno acepta orientación, pero no sabe cómo pedir ayuda.",
        bio: "Puede necesitar valoración sanitaria o especializada.",
        psico: "La ambivalencia puede hacer que no dé el paso.",
        social: "Acompañar la derivación reduce abandono.",
        question: "¿Qué hace mejor el centro?",
        options: [
          risk("Dar un teléfono y olvidarse.", "Puede perderse el seguimiento."),
          excellent(
            "Orientar, coordinar con familia/servicios y revisar si se activó ayuda.",
            "Correcto. Derivar no es abandonar."
          ),
          partial("Esperar a que el alumno lo pida todo solo.", "Puede no tener recursos para hacerlo."),
          severe("Difundir el caso entre docentes sin necesidad.", "Vulnera privacidad."),
        ],
      },
      {
        title: "Aula preventiva",
        type: "teacher",
        difficulty: "Inicio",
        fenixStep: "Entiende",
        testimony: "La prevención me llegó cuando no me sentí señalado, sino incluido.",
        scene: "El aula trabaja prevención de adicciones con metodología activa.",
        bio: "La información sobre efectos ayuda a comprender riesgos.",
        psico: "Role playing y reflexión entrenan decisiones.",
        social: "El grupo puede convertirse en factor protector.",
        question: "¿Qué enfoque preventivo es mejor?",
        options: [
          risk("Charla basada solo en miedo.", "El miedo solo puede quedarse corto."),
          excellent(
            "Información clara, role playing, habilidades y recursos de ayuda.",
            "Excelente. Prevención activa."
          ),
          partial("Decir simplemente que no consuman.", "Necesitan habilidades concretas."),
          severe("Ridiculizar casos reales.", "Estigmatiza y daña."),
        ],
      },
    ],
  },

  {
    id: "professional",
    title: "Profesional en red",
    short: "Acogida, derivación, seguimiento y coordinación.",
    icon: "🧑‍💼",
    image: "professional",
    color: "purple",
    missions: [
      {
        title: "Primera acogida sin juicio",
        type: "professional",
        difficulty: "Inicio",
        fenixStep: "Inicia ayuda",
        testimony: "La primera frase del profesional puede abrir o cerrar la puerta.",
        scene: "Una persona llega con miedo, vergüenza y dudas.",
        bio: "Puede haber abstinencia, ansiedad, cansancio o desregulación.",
        psico: "La vergüenza dificulta la honestidad.",
        social: "Una acogida cálida aumenta adherencia.",
        question: "¿Qué frase abre mejor la intervención?",
        options: [
          severe("Si has llegado aquí es porque lo has hecho todo mal.", "Culpabiliza."),
          excellent(
            "Gracias por venir. Vamos paso a paso y sin juzgar.",
            "Excelente. Acogida y alianza."
          ),
          partial("Primero demuéstrame que quieres cambiar.", "Puede aumentar defensa."),
          risk("Te doy un papel y ya te llamarán.", "Puede ser derivación débil."),
        ],
      },
      {
        title: "Derivación que no se pierde",
        type: "professional",
        difficulty: "Medio",
        fenixStep: "Inicia ayuda",
        testimony:
          "No fue solo la derivación. Fue que alguien volvió a preguntar si había llegado.",
        scene: "La persona acepta contactar con un recurso, pero teme no ir.",
        bio: "El malestar puede dificultar mantener citas.",
        psico: "La ambivalencia hace que la motivación suba y baje.",
        social: "Llamada de enlace y seguimiento reducen abandono.",
        question: "¿Qué reduce más abandono?",
        options: [
          risk("Dar un teléfono y cerrar.", "Puede perder continuidad."),
          excellent(
            "Acordar recurso, llamada de enlace, fecha y revisión posterior.",
            "Excelente. Derivar no es abandonar."
          ),
          partial("Esperar a que vuelva si quiere.", "Es demasiado pasivo."),
          severe("Contar todo a la familia sin consentimiento.", "Puede vulnerar confidencialidad."),
        ],
      },
      {
        title: "Entrevista motivacional básica",
        type: "professional",
        difficulty: "Medio",
        fenixStep: "Nombra",
        testimony:
          "No me convencieron a la fuerza. Me ayudaron a escuchar mis propios motivos.",
        scene: "La persona duda: una parte quiere cambiar y otra no.",
        bio: "El consumo puede estar ligado al alivio del malestar.",
        psico: "La ambivalencia es parte del cambio.",
        social: "El profesional acompaña sin imponer.",
        question: "¿Qué intervención es más adecuada?",
        options: [
          severe("Presionar y discutir hasta que acepte.", "La confrontación puede cerrar."),
          excellent(
            "Explorar motivos, costes, valores y próximo paso posible.",
            "Correcto. Activa motivación interna."
          ),
          partial("Dar consejos sin escuchar.", "Puede no conectar."),
          risk("Minimizar el problema para tranquilizar.", "Puede retrasar ayuda."),
        ],
      },
      {
        title: "Coordinación ética",
        type: "professional",
        difficulty: "Avanzado",
        fenixStep: "Inicia ayuda",
        testimony:
          "Me ayudó que hablaran entre recursos, pero respetando mi privacidad.",
        scene: "Hay familia, centro, servicios sociales y recurso de adicciones.",
        bio: "Puede haber necesidades sanitarias y sociales.",
        psico: "La confianza depende de confidencialidad.",
        social: "La coordinación evita duplicidades y abandono.",
        question: "¿Qué coordinación es correcta?",
        options: [
          severe("Compartir información sin criterio.", "Vulnera confianza."),
          excellent(
            "Coordinar con consentimiento, necesidad y finalidad clara.",
            "Excelente. Ética y eficacia."
          ),
          partial("No coordinar nunca.", "Puede fragmentar la intervención."),
          risk("Hablar del caso informalmente.", "Riesgo de privacidad."),
        ],
      },
      {
        title: "Plan de seguimiento",
        type: "professional",
        difficulty: "Avanzado",
        fenixStep: "Rompe la cadena",
        testimony:
          "El seguimiento me ayudó a no desaparecer cuando me daba vergüenza volver.",
        scene: "La persona falta a una cita o no responde.",
        bio: "Puede haber recaída, vergüenza o malestar.",
        psico: "Evitar puede ser una señal de riesgo.",
        social: "El seguimiento proactivo puede reenganchar.",
        question: "¿Qué actuación protege más?",
        options: [
          risk("Dar el caso por perdido.", "Puede aumentar abandono."),
          excellent(
            "Contacto respetuoso, reenganche y revisión del plan.",
            "Correcto. Seguimiento sin juicio."
          ),
          partial("Esperar indefinidamente.", "Puede ser demasiado pasivo."),
          severe("Reñir por faltar.", "Aumenta vergüenza."),
        ],
      },
    ],
  },

  {
    id: "community",
    title: "Comunidad al rescate",
    short: "Red, recursos, ocio saludable y no estigma.",
    icon: "🌐",
    image: "community",
    color: "green",
    missions: [
      {
        title: "Red comunitaria activa",
        type: "community",
        difficulty: "Inicio",
        fenixStep: "Inicia ayuda",
        testimony:
          "Cuando dejé de verlo como un problema individual, apareció la comunidad.",
        scene:
          "Una persona necesita ayuda, pero no sabe si acudir a salud, servicios sociales, asociación o familia.",
        bio: "Puede necesitar valoración sanitaria.",
        psico: "También puede necesitar apoyo emocional y motivacional.",
        social: "La red comunitaria conecta recursos para que no quede sola.",
        question: "¿Qué respuesta comunitaria es más completa?",
        options: [
          risk("Que cada recurso trabaje por separado.", "La fragmentación dificulta continuidad."),
          excellent(
            "Coordinar salud, servicios sociales, familia y asociaciones con consentimiento.",
            "Excelente. Red y seguimiento."
          ),
          severe("Esperar a que lo resuelva solo.", "El aislamiento aumenta riesgo."),
          risk("Hablar del caso sin privacidad.", "Rompe confianza."),
        ],
      },
      {
        title: "Ocio saludable",
        type: "community",
        difficulty: "Inicio",
        fenixStep: "Rompe la cadena",
        testimony:
          "No bastaba con decirme que no consumiera. Necesitaba lugares donde sí pudiera vivir.",
        scene: "Una persona evita el consumo, pero no tiene alternativas de ocio.",
        bio: "Movimiento, sueño y alimentación ayudan a estabilizar.",
        psico: "Actividades con sentido reducen vacío y ansiedad.",
        social: "El ocio comunitario crea vínculos protectores.",
        question: "¿Qué alternativa protege más?",
        options: [
          severe("Quedar con el grupo de consumo para no estar solo.", "La compañía no siempre protege."),
          excellent(
            "Buscar actividad sana, grupo de apoyo o participación comunitaria.",
            "Correcto. Ocio, vínculo y propósito."
          ),
          partial("Encerrarme siempre en casa.", "Evita algunos riesgos, pero aumenta aislamiento."),
          risk("Improvisar sin plan.", "Sin plan, el riesgo aparece más fácil."),
        ],
      },
      {
        title: "Puente entre recursos",
        type: "community",
        difficulty: "Medio",
        fenixStep: "Inicia ayuda",
        testimony:
          "La ayuda llegó cuando alguien hizo de puente y no me dejó perdido entre puertas.",
        scene:
          "La persona ha llamado a un recurso, pero no sabe cuál es el siguiente paso.",
        bio: "Puede haber necesidades sanitarias que requieran valoración.",
        psico: "La confusión aumenta abandono y desesperanza.",
        social: "Un profesional o entidad puede acompañar la transición.",
        question: "¿Qué acción comunitaria ayuda más?",
        options: [
          partial("Mandarle varios teléfonos sin explicación.", "Puede servir, pero no garantiza acceso."),
          excellent(
            "Hacer orientación clara, enlace y seguimiento del primer contacto.",
            "Excelente. El puente reduce abandono."
          ),
          severe("Decirle que vuelva cuando esté peor.", "La intervención temprana protege."),
          risk("Exponer su caso en la comunidad.", "Rompe privacidad."),
        ],
      },
      {
        title: "Grupo de apoyo",
        type: "community",
        difficulty: "Medio",
        fenixStep: "Inicia ayuda",
        testimony: "Escuchar a otros me hizo entender que pedir ayuda no era fracasar.",
        scene: "Una persona duda si acudir a un grupo de apoyo por vergüenza.",
        bio: "La recuperación necesita estabilidad y reducción de estrés.",
        psico: "Escuchar experiencias reduce culpa y aumenta esperanza.",
        social: "Los grupos ofrecen pertenencia y acompañamiento.",
        question: "¿Qué pensamiento ayuda más?",
        options: [
          risk("Si voy, significa que soy débil.", "Pedir apoyo es protección."),
          good(
            "Puedo probar un espacio de apoyo y decidir si me ayuda.",
            "Correcto. Abrir una puerta puede ayudarte."
          ),
          severe("Mejor sigo solo.", "La soledad puede aumentar riesgo."),
          partial("Solo sirve la fuerza de voluntad.", "La voluntad ayuda, pero la red sostiene."),
        ],
      },
      {
        title: "Comunidad que no estigmatiza",
        type: "community",
        difficulty: "Avanzado",
        fenixStep: "Entiende",
        testimony:
          "Lo que más me ayudó fue que me miraran como una persona, no como una etiqueta.",
        scene:
          "En el entorno se habla de una persona con adicción usando burlas, etiquetas o rumores.",
        bio: "El estrés social puede aumentar malestar.",
        psico: "El estigma alimenta vergüenza y evita pedir ayuda.",
        social: "Una comunidad protectora usa lenguaje respetuoso.",
        question: "¿Qué respuesta comunitaria es adecuada?",
        options: [
          severe("Difundir rumores para que aprenda.", "El rumor aumenta daño."),
          excellent(
            "Hablar con respeto, proteger privacidad y orientar hacia ayuda.",
            "Excelente. Comunidad protectora."
          ),
          risk("Apartar a la persona de todo.", "La exclusión aumenta aislamiento."),
          severe("Usar etiquetas para que reaccione.", "La etiqueta suele hundir más."),
        ],
      },
    ],
  },

  {
    id: "behavioral",
    title: "Adicciones sin sustancia",
    short: "Apuestas, pantallas, redes e impulsividad.",
    icon: "📱",
    image: "behavioral",
    color: "red",
    missions: [
      {
        title: "Solo una apuesta",
        type: "behavioral",
        difficulty: "Inicio",
        fenixStep: "Frena",
        testimony:
          "No empezó perdiendo mucho. Empezó con la frase: “solo una apuesta”.",
        scene: "Tienes el móvil en la mano. Aparece una notificación de apuestas.",
        bio: "La expectativa de recompensa activa impulso.",
        psico: "El pensamiento trampa minimiza el riesgo.",
        social: "Dinero, soledad y acceso inmediato aumentan vulnerabilidad.",
        question: "¿Qué decisión protege más?",
        options: [
          severe("Apostar poco para quitarme las ganas.", "Puede reactivar el ciclo."),
          excellent(
            "Cerrar la app, bloquear acceso y avisar a alguien seguro.",
            "Excelente. Cortas acceso e impulso."
          ),
          partial("Mirar cuotas sin apostar.", "Seguir mirando mantiene exposición."),
          severe("Intentar recuperar pérdidas.", "Perseguir pérdidas aumenta daño."),
        ],
      },
      {
        title: "Pantallas sin límite",
        type: "behavioral",
        difficulty: "Inicio",
        fenixStep: "Frena",
        testimony:
          "Decía que descansaba, pero cada noche dormía menos y me aislaba más.",
        scene:
          "Son las 02:30. Llevas horas con el móvil. Mañana tienes responsabilidades.",
        bio: "La falta de sueño afecta autocontrol, atención y ánimo.",
        psico: "La pantalla puede usarse para escapar de ansiedad o vacío.",
        social: "El uso descontrolado afecta estudios, trabajo, familia y hábitos.",
        question: "¿Qué acción protege más?",
        options: [
          severe("Sigo hasta que me entre sueño.", "El sueño puede alterarse más."),
          excellent(
            "Pongo límite, dejo el móvil fuera y preparo rutina de descanso.",
            "Correcto. Límite y autocuidado."
          ),
          risk("Lo oculto para que no me digan nada.", "Ocultar dificulta apoyo."),
          partial("Cambio de app para descansar de otra app.", "Puede mantener el patrón."),
        ],
      },
      {
        title: "Videojuego o evasión",
        type: "behavioral",
        difficulty: "Medio",
        fenixStep: "Nombra",
        testimony:
          "No era jugar. Era desaparecer durante horas para no afrontar lo que sentía.",
        scene: "Has discutido y quieres conectarte muchas horas para no pensar.",
        bio: "El cuerpo busca desconexión y alivio rápido.",
        psico: "La evitación reduce malestar momentáneo, pero mantiene el problema.",
        social: "Aislarse puede deteriorar relaciones, descanso y responsabilidades.",
        question: "¿Qué opción regula sin caer en evasión?",
        options: [
          severe("Juego toda la noche para no sentir.", "La evasión prolongada mantiene el ciclo."),
          excellent(
            "Pongo tiempo limitado y antes hablo o escribo lo que siento.",
            "Excelente. Regulación, límite y expresión emocional."
          ),
          risk("Cancelo todo y me encierro.", "El aislamiento aumenta riesgo."),
          risk("Mañana ya asumiré las consecuencias.", "Normalizar consecuencias mantiene el patrón."),
        ],
      },
      {
        title: "Redes y comparación",
        type: "behavioral",
        difficulty: "Medio",
        fenixStep: "Nombra",
        testimony:
          "Cuanto peor me sentía, más miraba vidas perfectas que me hundían más.",
        scene:
          "Estás triste y entras en redes. Sales peor, con comparación, culpa y ansiedad.",
        bio: "La activación emocional puede alterar sueño y apetito.",
        psico: "La comparación aumenta malestar y pensamiento negativo.",
        social: "El apoyo real protege más que la conexión pasiva.",
        question: "¿Qué haces para protegerte?",
        options: [
          severe("Sigo mirando hasta sentirme peor.", "Mantiene exposición al malestar."),
          excellent(
            "Cierro redes, escribo lo que siento y contacto con alguien real.",
            "Correcto. Cambias comparación por conexión real."
          ),
          risk("Publico algo hiriente para llamar la atención.", "Puede generar más conflicto."),
          partial("Me aíslo de todo el mundo.", "Aislarse no es lo mismo que descansar."),
        ],
      },
      {
        title: "Bloquear acceso",
        type: "behavioral",
        difficulty: "Avanzado",
        fenixStep: "Rompe la cadena",
        testimony:
          "No gané solo con fuerza de voluntad. Gané cuando puse barreras reales.",
        scene: "Sabes que una app, contacto o web activa una conducta problemática.",
        bio: "La disponibilidad inmediata aumenta probabilidad de actuar por impulso.",
        psico: "Las barreras reducen decisiones en caliente.",
        social: "Pedir apoyo para bloquear acceso protege en momentos de riesgo.",
        question: "¿Qué medida es más eficaz?",
        options: [
          partial("Dejarlo instalado y confiar en mi voluntad.", "La voluntad ayuda, pero la barrera protege más."),
          excellent(
            "Bloquear acceso, quitar medios de pago y avisar a apoyo.",
            "Excelente. Barrera técnica, económica y social."
          ),
          severe("Usarlo solo cuando esté triste.", "Usarlo como alivio emocional alimenta el patrón."),
          risk("Ocultar el problema.", "Ocultar retrasa ayuda."),
        ],
      },
    ],
  },
];