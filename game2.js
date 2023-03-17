const userGuess = document.getElementById("user-guess");
const submitBtn = document.getElementById("submit");
const usersWord = document.getElementById("scrambled-word");
const info = document.getElementById("info");
const levelOutput = document.getElementById("level");
const scoreOutput = document.getElementById("score");
const attemptsOutput = document.getElementById("attempts");
const gameContainer = document.getElementById("game-container");
const guessContainer = document.getElementById("guess-container");
const rules = document.getElementById("rules");
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");

let level = 1;
let score = 0;
let word;
let attempts = 0;
let correct = 0;

const lvlOneWords = [
    "amor", "dios", "arte", "vida", "mar", "sol", "piel", "casa", "vino", "mano", "paz", "boca", "foco", "hijo", "aire", "café", "azul", "frio", "dama", "idea", "flor", "foto", "hora", "jazz", "luna", "mesa", "mujo", "noche", "pelo", "piso", "rito", "ropa", "rosa", "ruta", "seda", "taza", "tela", "tren", "vaca", "vega", "voz", "yoga", "zona", "zoom", "base", "cola", "copa", "dato", "duro", "euro", "fase", "goma", "gato", "hada", "idea", "jugo", "kilo", "lote", "maiz", "modo", "nuez", "olla", "pala", "quem", "raro", "solo", "tela", "uvas", "vino", "watt", "xeno", "yoga", "zona", "zumo", "año", "bien", "cama", "día", "feo", "gato", "hoy", "ira", "jazz", "luz", "mesa", "nada", "oro", "poco", "quem", "rico", "solo", "tren", "uno", "vino"
];

const lvlTwoWords = [
    "gordo", "sitúo", "tazas", "campo", "calas", "tonto", "caras", "Madrid", "onzas", "avión", "ratos", "peso", "siete", "costa", "ideas", "vedas", "galas", "hielo", "dotes", "vedas", "sobar", "colon", "celia", "clavo", "vacas", "campo", "malta", "marco", "terco", "clara", "carlo", "cines", "tesla", "colon", "verde", "inflo", "nubes", "rubio", "calma", "monte", "pesas", "avión", "cepas", "notar", "cajas", "trote", "pelar", "vemos", "remas", "catas", "ciego", "cepas", "citas", "taco", "tela", "clara", "cerca", "corro", "salir", "serio", "ganes", "vidas", "cepas", "celia", "catar", "cejas", "colon", "valor", "tener", "costas", "celia", "coral", "alado", "cosas", "vuela", "caras", "clavo", "cepas", "ondas", "rubio", "celia", "datos", "carlo", "terco", "ciego", "gafas", "taco", "vinos", "atizo", "veras", "venas", "clara", "dejar", "celia", "alado", "monte", "sitúo", "cajas", "inflo", "tener"
];

const lvlThreeWords = ["pensar", "además", "soltar", "grande", "origen", "modelo", "acción", "aunque", "quitar", "óptimo", "zapato", "dinero", "alegre", "dormir", "medida", "hombre", "eterno", "camino", "cuidar", "formar", "crecer", "objeto", "blanco", "perder", "enviar", "factor", "pintar", "poseer", "método", "lograr", "servir", "cuenta", "tiempo", "fuerza", "porque", "imitar", "relato", "cuerpo", "volver", "visión", "llegar", "contar", "prueba", "sentir", "sector", "básico", "asunto", "saltar", "fuente", "efecto", "ayudar", "avance", "maleta", "centro", "opción", "evocar", "humano", "arriba", "asumir", "propio", "oferta", "salida", "tratar", "rápido", "buscar", "suceso", "inútil", "fértil", "omitir", "oscuro", "enigma", "vender", "triste", "evitar", "cariño", "aludir", "mandar", "afable", "ocupar", "emanar", "cubrir", "acoger", "cómodo", "añadir", "mejora", "número", "pueblo", "debido"
];

const lvlFourWords = [
  "conocer", "proceso", "hermosa", "mejorar", "interés", "aspecto", "momento", "también", "mostrar", "valores", "función", "durante", "cumplir", "ofrecer", "recibir", "impacto", "calidad", "onírico", "motivar", "sistema", "atender", "aplicar", "estudio", "emoción", "control", "gracias", "extraño", "ilusión", "caminar", "influir", "golpear", "intenso", "sublime", "guardar", "resumen", "mensaje", "otorgar", "generar", "empezar", "montaña", "inferir", "cliente", "obligar", "señalar", "afirmar", "asistir", "detalle", "existir", "plasmar", "muestra", "delgado", "definir", "armonía", "exponer", "término", "obtener", "icónico", "difícil", "honesto", "urgente", "indicar", "ejercer", "entidad", "negocio", "desafío", "primero", "incluir", "castigo", "posible", "aquello", "enfermo", "escasez", "avanzar", "trabajo", "esencia", "enfoque", "enseñar", "curioso", "revelar", "sentido", "inmenso", "energía", "ordenar", "asombro", "opinión", "escuela", "columna", "jornada", "entrada", "detener", "dirigir", "parecer", "visitar", "sincero", "imponer", "racismo", "reclamo", "pequeño", "redimir", "ampliar"
];

const lvlFiveWords = [
  "realizar", "permitir", "analizar", "observar", "mediante", "recordar", "recuerdo", "asimismo", "tristeza", "entonces", "solución", "proyecto", "escribir", "infinito", "correcto", "plantear", "sostener", "especial", "explicar", "perfecto", "mientras", "estudiar", "producto", "respecto", "entender", "elaborar", "proponer", "criterio", "bastante", "objetivo", "celebrar", "utilizar", "provocar", "zopilote", "inocente", "caliente", "realidad", "relación", "impulsar", "esencial", "elemento", "análisis", "corregir", "requerir", "original", "expresar", "integrar", "cualidad", "bullying", "aparecer", "consumir", "material", "complejo", "desastre", "peculiar", "recursos", "problema", "personal", "conectar", "preparar", "sensible", "progreso", "sencillo", "mantener", "decisión", "examinar", "escuchar", "creación", "igualdad", "concreto"
];

const lvlSixWords = [
  "solicitar", "encontrar", "situación", "construir", "esperanza", "cognitivo", "condición", "reconocer", "organizar", "compartir", "resultado", "optimizar", "verificar", "descubrir", "evolución", "encuentra", "formación", "confiable", "actividad", "presentar", "respuesta", "educación", "convertir", "continuar", "mecanismo", "controlar", "propósito", "relevante", "pretender", "necesario", "conflicto", "principal", "conjetura", "proyectar", "necesidad", "descender", "delicioso", "diferente", "estimular", "describir", "reflexión", "expresión", "excelente", "presencia", "concretar", "capacidad", "contenido", "hipótesis", "seguridad", "conformar", "arrogante", "axiología", "operación", "enfrentar", "descansar", "practicar", "confirmar", "intención", "erogación", "facilitar", "recorrido", "conservar", "tendencia", "beneficio", "documento", "habilidad", "brillante", "compañero", "identidad", "despertar", "incidente", "exclusivo", "fragmento", "bienestar", "constatar", "demostrar", "dirección", "tradición", "necesitar", "posterior", "bicicleta", "económico", "categoría"
];

const lvlSevenWords = [
  "importante", "desarrollo", "determinar", "participar", "aprovechar", "establecer", "naturaleza", "conclusión", "evaluación", "estructura", "enfermedad", "ecosistema", "trabajador", "equilibrio", "compromiso", "transmitir", "considerar", "clasificar", "satisfacer", "consciente", "tecnología", "exhaustivo", "estrategia", "aplicación", "estudiante", "iniciativa", "integridad", "comprender", "contribuir", "componente", "incentivar", "distinguir", "comentario", "contemplar", "planificar", "motivación", "espontáneo", "manifestar", "específico", "introducir", "influencia", "permanente", "incorporar", "intervenir", "distribuir", "meticuloso", "frecuencia", "itinerario", "percepción", "diligencia", "equitativo", "incidencia", "posicionar", "adversidad", "permanecer", "producción", "consolidar", "constituir", "prevención", "diversidad", "contaminar", "publicidad", "exposición", "dedicación", "relevancia", "fotografía", "entusiasmo", "divergente", "arbitrario", "deficiente", "imprevisto", "sugerencia", "preocupado", "reconocido", "apariencia", "territorio", "dificultad", "certificar", "productivo", "repercutir", "concepción", "fundamento", "movimiento", "privilegio", "encantador", "limitación", "suficiente", "reproducir", "organizado", "resistente", "garantizar", "individual", "protección", "separación", "misterioso", "anacrónico", "evidenciar", "distintivo", "delicadeza", "curiosidad", "existencia", "revolución", "agradecido", "pertinente", "innovación", "provechoso", "desprender", "desempeñar"
];

const lvlEightWords = [
  "interacción", "resiliencia", "identificar", "prevalencia", "responsable", "metodología", "herramienta", "implementar", "inteligente", "sentimiento", "desarrollar", "actualmente", "disposición", "profesional", "comparación", "información", "instrumento", "susceptible", "perspectiva", "competencia", "reflexionar", "posibilidad", "representar", "importancia", "hiperactivo", "tratamiento", "persistente", "experiencia", "desaparecer", "fundamental", "resistencia", "transformar", "alternativa", "determinado", "especificar", "comprensión", "creatividad", "instrucción", "categorizar", "multiplicar", "concienciar", "comprometer", "oportunidad", "integración", "sorprendido", "diferenciar", "inhabilidad", "observación", "pensamiento", "realización", "interpretar", "suministrar", "maravilloso", "preparación", "declaración", "elaboración", "eternamente", "expectativa", "preferencia", "beneficioso", "interesante", "propietario", "indulgencia", "concentrado", "aprendizaje", "combinación", "institución", "desconocido", "evolucionar", "administrar", "intelectual", "crecimiento", "incrementar", "conformidad", "orientación", "explicación", "conveniente", "obligatorio", "irreverente", "restricción", "repositorio", "adquisición", "contradecir", "divergencia", "posibilitar", "jerarquizar", "irrelevante", "trayectoria", "preocuparse", "acumulación", "transmisión"
];

function reset() {
  level = 1;
  score = 0;
  correct = 0;
  attempts = 0;
  word = "";
  updateBoard();
  info.innerHTML = "";
  userGuess.value = "";
}

function randomWord(lvl) {
  word = lvl[Math.floor(Math.random() * lvl.length + 1) - 1];
  return word;
}

function scrambleWord(word) {
  let letters = word.split("");
  let currentIndex = letters.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = letters[currentIndex];
    letters[currentIndex] = letters[randomIndex];
    letters[randomIndex] = temporaryValue;
  }

  return letters.join(" ");
}
function updateBoard() {
  scoreOutput.innerHTML = score;
  levelOutput.innerHTML = level;
  attemptsOutput.innerHTML = attempts;
}

function checkAnswer(guess) {
  console.log(`Correct: ${correct}`);
  if (correct == 3) {
    level += 1;
    correct = 0;
  }

  // if (attempts == 3) {
  //   guessContainer.classList.toggle("hidden");
  //   alert("Oh dafasdfads");
  //   info.innerHTML = "<button id='retry-button'>Reintentar</button>"
  // }

// Función para verificar si se alcanzaron los tres intentos

  if (attempts === 3) {
    guessContainer.classList.toggle("hidden");
    info.innerText =
      "<p class='retry'> ¡OH NO! Se te acabaron las oportunidades. <button id='retry-button'>Reintentar</button> </p>";
    reset();
  }

  if (guess === word) {
    info.innerHTML = "<span class='correct'>¡CORRECTO!</span>";
    score += 1;
    correct += 1;
    attempts = 0;
    setLevel();
  } else {
    info.innerHTML = "<span class='incorrect'>¡INCORRECTO!</span>";
    score -= 1;
    attempts += 1;
  }

  updateBoard();
}



function setLevel() {
  if (level == 1) {
    randomWord(lvlOneWords);
  } else if (level == 2) {
    randomWord(lvlTwoWords);
  } else if (level == 3) {
    randomWord(lvlThreeWords);
  } else if (level == 4) {
    randomWord(lvlFourWords);
  } else if (level == 5) {
    randomWord(lvlFiveWords);
  } else if (level == 6) {
    randomWord(lvlSixWords);
  } else if (level == 7) {
    randomWord(lvlSevenWords);
  } else if (level == 8) {
    randomWord(lvlEightWords);
  } else if (level == 9) {
    info.innerHTML =
      "<span class='win'>¡Ganaste! Excelente trabajo </br> Puedes volver a emepzar el juego.</span>";
  }

  console.log(`Word: ${word}`);
  usersWord.innerHTML = scrambleWord(word);
}

playBtn.addEventListener("click", function(e) {
  rules.classList.toggle("hidden");
  gameContainer.classList.remove("hidden");
});

submitBtn.addEventListener("click", function(e) {
  checkAnswer(userGuess.value.toLowerCase());
  userGuess.value = "";
});

window.addEventListener(
  "keypress",
  function(e) {
    if (e.keyCode == 13) {
      checkAnswer(userGuess.value.toLowerCase());
      userGuess.value = "";
    }
  },
  false
);

resetBtn.addEventListener("click", function(e) {
  reset();
  setLevel();
  guessContainer.classList.remove("hidden");
  userGuess.value = "";
});

setLevel();
