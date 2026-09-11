export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  missions?: string[];
  tags: string[];
  link: string;
  working: boolean;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Wecount",
    role: "Développeur Full Stack",
    period: "2023 — Aujourd'hui",
    description:
      "Conception de moteurs de recherche Elasticsearch et recherche vectorielle, optimisation de pipelines de synchronisation, et encadrement d'alternants fullstack.",
    missions: [
      "Conception d'un moteur de recherche vectoriel : réduction du temps de recherche de 30% et amélioration du taux de pertinence de 25%",
      "Optimisation du pipeline Elasticsearch : synchronisation incrémentale et réduction des temps detraitement de plus de 90% (de plusieurs heures à quelques minutes)",
      "Conception et déploiement d'un service de notifications temps réel (CI/CD · Staging · Production)",
      "Développement de pipelines d'importation massifs de données",
      "Co-conception des fonctionnalités avec le Product et proposition d'initiatives techniques/produit non planifiées",
      "Management technique et tutorat : encadrement d'alternants (code reviews, suivi, montée en compétences) et animation de formations internes R&D",
    ],
    tags: ["Next", "Node.js", "ElasticSearch", "PostgreSQL"],
    link: "https://wecount.io",
    working: true,
  },
  {
    company: "Wecount",
    role: "Développeur Full Stack · Alternance",
    period: "2022 — 2023",
    description:
      "Développement de plateformes web et mobiles pour les entreprises.",
    missions: [
      "R&D autour de l'intelligence artificielle",
      "Pipelines de synchronisation et d'intégration de bases de données distantes via tâches Cron",
      "Conception from scratch d'un back-office centralisé pour la gestion desdonnées métiers",
    ],
    tags: ["Next", "Node.js", "ElasticSearch", "PostgreSQL"],
    link: "https://wecount.io",
    working: false,
  },
  {
    company: "Freelance",
    role: "Développeur Full Stack",
    period: "2021 — Aujourd'hui",
    description:
      "Développement de solutions web sur mesure pour les entreprises.",
    missions: [
      "Mise en place de la sécurité et de l'authentification renforcée : 2FA / TOTP (Google Authenticator) et gestion sécurisée des sessions (JWT, Cookies HTTP-Only).",
      "Création et intégration de sites vitrines sur mesure : optimisation du SEO, des performances et de l'expérience utilisateur (UX/UI).",
      "Développement d'une messagerie instantanée temps réel (WebSockets / Socket.io) avec partage de médias (vidéos, liens, mentions) et prévisualisation dynamique enrichie (scraping d'APIs YouTube, Twitch, Twitter).",
      "Intégration d'un éditeur de contenu riche sur-mesure (TipTap / ProseMirror) permettant l'embarquement de liens multimédias interactifs et le glisser-déposer de snippets.",
      "Mise en place de la monétisation complète : paiements uniques et abonnements récurrents via Stripe & PayPal, avec gestion robuste des Webhooks.",
      "Optimisation des performances applicatives : mise en cache mémoire avec Redis (sessions, données fréquemment accédées) et implémentation du code splitting (React) pour accélérer le temps de chargement.",
      "Conception d'un tableau de bord analytique (Studio) : suivi des métriques d'audience (vues quotidiennes/mensuelles, interactions) et gestion de la rémunération des créateurs.",
      "Mise en conformité RGPD : développement d'un service d'exportation automatisé des données utilisateurs (formats ZIP / XLSX) sécurisé via Google Cloud Storage.",
      "Déploiement d'un système de notifications push / web temps réel multi-canal pour l'engagement utilisateur.",
      "R&D et intégration d'IA pour la modération automatique : analyse de sentiments et détection de contenus inappropriés (textes, images, liens) pour sécuriser les échanges.",
      "Mise en place de pipelines CI/CD automatisés (GitHub Actions / CircleCI) : automatisation des tests, du build et du déploiement continu.",
    ],
    tags: [
      "React",
      "Vue.js",
      "Node.js",
      "Websockets",
      "Webhooks",
      "Redis",
      "Stripe",
      "PayPal",
      "TipTap",
      "GCP",
      "CI/CD",
      "TensorFlow",
      "Hugging Face",
      "TOTP / 2FA",
      "DigitalOcean",
      "MongoDB",
    ],
    link: "",
    working: true,
  },
  {
    company: "Egiteko",
    role: "Développeur Full Stack · Alternance",
    period: "2020 — 2022",
    description:
      "Développement de plateformes web et mobiles pour les entreprises.",
    missions: [
      "R&D et maintenance ERP",
      "Création d'une application PWA pour TRIALP",
      "Création de Macrotool pour la gestion d'un espace aménagé",
    ],
    tags: ["Vue.js", "Php", "Mysql", "Javascript"],
    link: "https://egiteko.com",
    working: false,
  },
  {
    company: "Infans",
    role: "Développeur Full Stack · Alternance",
    period: "2019 — 2020",
    description:
      "Développement de plateformes web et mobiles pour les entreprises.",
    missions: [
      "Amélioration du site formassmat",
      "Création d'un site de recherche de formations avec une carte Google Maps",
      "Ajout de fonctionnalité sur Dolibarr (CRM) de l'entreprise",
      "Correction de bugs",
    ],
    tags: ["PHP", "Jquery", "MySQL"],
    link: "https://infans.fr",
    working: false,
  },
];
