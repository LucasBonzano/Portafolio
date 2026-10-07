// Contenido del sitio, tomado de CV_Bonzano_Lucas.pdf. Editar acá para actualizar el portafolio.

export const perfil = {
  nombre: "Lucas Miguel Bonzano",
  rol: "Analista de Procesamiento",
  especialidad: "Control-M, scripting y automatización de procesos batch",
  ubicacion: "Córdoba, Argentina",
  linkedin: "https://www.linkedin.com/in/lucas-miguel-bonzano-a2b3a0271/",
  github: "https://github.com/LucasBonzano",
  cv: "/CV_Bonzano_Lucas.pdf",
  resumen:
    "Analista de Procesamiento con experiencia en administración, monitoreo y optimización de cadenas batch con BMC Control-M en entornos financieros críticos. Especializado en scripting (Python, SQL, PowerShell, Shell Script) y automatización de procesos, con foco en alta disponibilidad, mejora continua y resolución de incidentes productivos. Actualmente cursando Ingeniería en Sistemas en la UTN.",
};

export interface Experiencia {
  empresa: string;
  puesto: string;
  periodo: string;
  actual: boolean;
  logros: string[];
}

export const experiencia: Experiencia[] = [
  {
    empresa: "Coetec – Banco del Sol",
    puesto: "Analista de Procesamiento",
    periodo: "Diciembre 2025 – Actualidad",
    actual: true,
    logros: [
      "Administración, monitoreo y optimización de cadenas batch en BMC Control-M sobre Windows Server, asegurando la disponibilidad y estabilidad de procesos críticos financieros.",
      "Desarrollo de scripts en Python y SQL para automatizar relevamientos de datos e ingestas, migrando procesos de microservicios legacy a flujos controlados por Control-M.",
      "Migración de procesos de Power Automate a Python con integración en Control-M, reduciendo un 50% el tiempo de ejecución.",
      "Relevamiento de ejecuciones, servidores y agentes de Control-M para diseñar planes de acción orientados a la alta disponibilidad y continuidad operativa.",
      "Monitoreo operativo de servidores con Dynatrace para detección temprana de incidentes y análisis de causa raíz.",
      "Gestión y seguimiento de tickets de incidentes productivos y tareas de relevamiento en Jira.",
      "Participación en pases a producción y validaciones E2E, coordinando con equipos de Desarrollo, Tecnología y Operaciones.",
    ],
  },
];

export const conocimientos: { area: string; items: string[] }[] = [
  { area: "Procesamiento batch", items: ["BMC Control-M: administración, scheduling, monitoreo y optimización de cadenas"] },
  { area: "Scripting", items: ["Python", "SQL", "PowerShell", "Shell Script (Bash)"] },
  { area: "Sistemas operativos", items: ["Linux / Unix", "Windows Server"] },
  { area: "Observabilidad", items: ["Grafana", "Dynatrace"] },
  { area: "Gestión de tickets", items: ["Jira (gestión de incidentes)"] },
  { area: "Bases de datos", items: ["MSSQL Server", "PostgreSQL"] },
  { area: "Testing / APIs", items: ["Postman"] },
];

export const educacion = [
  {
    institucion: "Universidad Tecnológica Nacional (UTN)",
    titulo: "Ingeniería en Sistemas de Información, 2do/3er nivel (en curso)",
    periodo: "Marzo 2024 – Actualidad",
  },
  {
    institucion: "Escuela Técnica ProA",
    titulo: "Técnico Secundario en Programación",
    periodo: "Diciembre 2023",
  },
];

export const competencias = [
  "Aprendizaje continuo",
  "Comunicación asertiva",
  "Pensamiento crítico",
  "Resolución de problemas",
];

// Referencias laborales: jefes y colegas actuales.
export const referencias = [
  { nombre: "Alexis Nardi", linkedin: "https://www.linkedin.com/in/alexis-nardi-2395471a6/" },
  { nombre: "Cristian Pulli", linkedin: "https://www.linkedin.com/in/cristian-pulli-06a378213/" },
  { nombre: "Ariel Mobilia", linkedin: "https://www.linkedin.com/in/ariel-mobilia-2960708/" },
];
