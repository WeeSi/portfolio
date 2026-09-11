export type EducationEntry = {
  kind: "seminar" | "school";
  title: string;
  subtitle?: string;
  institution: string;
  period: string;
  description?: string;
  highlights?: string[];
  link?: string;
};

export const SEMINARS: EducationEntry[] = [
  {
    kind: "seminar",
    title: "Machine Learning : L'État de l'Art",
    institution: "ORSYS",
    period: "2026",
    description:
      "Panorama des algorithmes ML (supervisé/non-supervisé), préparation de données (ETL) et stratégie de mise en production.",
  },
  {
    kind: "seminar",
    title: "Kubernetes : Orchestration des conteneurs",
    institution: "ORSYS",
    period: "2025",
    description:
      "Conteneurisation, déploiement d'applications distribuées, gestion des clusters et stratégie d'orchestration.",
  },
];

export const SCHOOL: EducationEntry[] = [
  {
    kind: "school",
    title: "Expert en systèmes d'information",
    subtitle: "Mastère",
    institution: "Isitech",
    period: "2020 — 2023",
    highlights: [
      "Unity/VR · C · C++ · C# · Laravel · React · .NET · Python",
      "Travail en groupe (Next Music)",
      "CI/CD (Github Actions, Travis, Circle CI)",
      "Data Mining · Machine Learning · Deep Learning",
      "Docker",
      "SQL · NoSQL · ElasticSearch · Kibana · Logstash",
    ],
    link: "https://next-music.netlify.app",
  },
  {
    kind: "school",
    title: "BTS SIO · option SLAM",
    institution: "Icoges",
    period: "2018 — 2020",
  },
];

export const EDUCATION_COUNT = SEMINARS.length + SCHOOL.length;
