export interface ProjectQuote {
  text: string;
  attribution: string;
}

export interface ProjectStackGroup {
  label: string;
  badges: string[];
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  lede?: string;
  html?: string;
  quote?: ProjectQuote;
  diagram?: boolean;
  stackGroups?: ProjectStackGroup[];
  features?: ProjectFeature[];
}

export interface Project {
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  role: string;
  duration: string;
  colorIndex: number;
  link?: string;
  github?: string;
  body: string;
  sections?: ProjectSection[];
  video?: string;
  image?: string;
  images?: string[];
  imagesPosition?: "start" | "end";
  features?: ProjectFeature[];
  featuresLede?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "cinestream-recommender",
    num: "01",
    title: "Cinestream Recommendation",
    subtitle:
      "Une application web de découverte de films, séries et documentaires, portée par un moteur de recommandation personnalisé construit sur des embeddings vectoriels et une recherche kNN.",
    tags: ["Python", "Elasticsearch", "TanStack Start"],
    year: "2026",
    role: "Fullstack Dev",
    duration: "1 mois",
    colorIndex: 0,
    github: "https://github.com/WeeSi/cinestream-api",
    body: "",
    image: "Cinestream.jpg",
    sections: [
      {
        id: "projet",
        title: "Le projet",
        lede: "Développement de <strong>CineStream</strong>, une application de découverte de films, séries et documentaires intégrant un système de recommandation personnalisé. L'objectif était de concevoir un moteur capable d'adapter l'expérience utilisateur à partir de ses interactions réelles via l'API TMDB — notes, favoris, historique de visionnage et temps passé sur chaque fiche.",
        quote: {
          text: "Adapter la recommandation à l'utilisateur réel, pas à un profil moyen.",
          attribution: "Direction produit du projet",
        },
      },
      {
        id: "architecture",
        title: "Architecture",
        lede: "Frontend développé en <strong>React 18</strong> (TypeScript, Vite) couplé à une API backend <strong>FastAPI</strong> (Python). L'architecture s'appuie sur <strong>Elasticsearch 8.x</strong> pour stocker les événements utilisateurs et les vecteurs, complétée par un microservice d'indexation dédié à la génération d'embeddings.",
        diagram: true,
      },
      {
        id: "stack",
        title: "Stack technique",
        lede: "Une recommandation basée sur le contenu — vecteurs d'embeddings générés via <strong>sentence-transformers</strong> et recherche <strong>k-Nearest Neighbors</strong> sous Elasticsearch — combinée à un moteur hybride pour la personnalisation.",
        stackGroups: [
          {
            label: "Frontend",
            badges: [
              "React 18",
              "TypeScript",
              "Vite",
              "TanStack Router",
              "TanStack Query",
              "Zustand",
              "Tailwind CSS",
              "Framer Motion",
            ],
          },
          {
            label: "Backend & data",
            badges: [
              "FastAPI",
              "Python",
              "Elasticsearch 8.x",
              "sentence-transformers",
              "TMDB API",
              "Docker",
            ],
          },
        ],
      },
      {
        id: "features",
        title: "Fonctionnalités clés",
        lede: "Le système combine recommandation par contenu, personnalisation comportementale et une interface optimisée pour de grands volumes de résultats.",
        features: [
          {
            title: "Recherche par similarité",
            description:
              "Embeddings à 384 dim via sentence-transformers, indexés dans Elasticsearch et interrogés par recherche kNN.",
          },
          {
            title: "Moteur hybride",
            description:
              "Score combinant similarité de contenu et signaux de personnalisation via boosting / negative_boost.",
          },
          {
            title: "MediaRow virtualisée",
            description:
              "Listes longues rendues avec TanStack Virtual pour un défilement fluide sur de larges catalogues.",
          },
          {
            title: "Interactions fines",
            description:
              "MediaCard.tsx avec hover animé Framer Motion, favoris et historique de visionnage en temps réel.",
          },
        ],
      },
    ],
  },
  {
    slug: "vectorial-search",
    num: "01",
    title: "Systeme de recherche vectorielle et Re-ranking",
    subtitle:
      "Systeme de recherche vectorielle et Re-ranking est une application web qui permet de rechercher des documents en utilisant la recherche vectorielle et de re-ranking les résultats.",
    tags: ["Python", "ElasticSearch", "Next.js", "OpenAI", "Mistral AI"],
    year: "2026",
    role: "Fullstack Dev",
    duration: "7 mois",
    colorIndex: 0,
    image: "recherche-semantique-regtech.png",
    featuresLede:
      "Un moteur de recherche hybride à trois niveaux, conçu pour comprendre l'intention sémantique et s'enrichir des retours utilisateurs.",
    features: [
      {
        title: "Recherche lexicale BM25",
        description:
          "Scoring Elasticsearch filtré par métadonnées réglementaires : bases Inies, Ademe, Ecobalyse, scopes privés/publics et locale FR/EN.",
      },
      {
        title: "Recherche vectorielle kNN",
        description:
          "Embeddings 1536 dimensions (OpenAI, Mistral) indexés dans Elasticsearch et interrogés par recherche de plus proches voisins.",
      },
      {
        title: "Re-ranking par LLM",
        description:
          "Reclassement des K meilleurs candidats par GPT-4o-mini ou Mistral Small avec un score de pertinence métier en pourcentage.",
      },
      {
        title: "Boucle d'apprentissage",
        description:
          "Correspondances utilisateur persistées et mutualisées au niveau entreprise/groupe pour enrichir le moteur à chaque correction manuelle.",
      },
    ],
    body: `<h3>Le projet</h3>
<p>Évolution du moteur de recherche de facteurs d’émission (FE) pour une plateforme de comptabilité carbone. L'objectif était de dépasser les limites de la recherche textuelle classique (BM25) en concevant un système hybride performant capable de comprendre l'intention sémantique de l'utilisateur, de gérer intelligemment le multilingue (FR/EN) et d'automatiser l'apprentissage par les correspondances utilisateurs, tout en maîtrisant les coûts de calcul.</p>

<h3>Stack &amp; architecture</h3>
<p>Architecture de recherche et pipeline de données articulés autour d'une base SQL primaire, d'un pipeline de synchronisation journalier, d'Elasticsearch 8.x et des API d'embeddings/LLM (OpenAI &amp; Mistral AI) managés via LangSmith pour le prompt engineering.</p>
<p>Le système propose une approche à 3 niveaux de recherche :</p>
<ul>
  <li><strong>Recherche classique (Lexicale) :</strong> Basée sur le scoring BM25 d'Elasticsearch, filtrée finement par métadonnées (bases Inies, Ademe, Ecobalyse, scopes privés/publics, locale).</li>
  <li><strong>Recherche Vectorielle (Sémantique) :</strong> Génération d'embeddings (1536 dimensions via OpenAI text-embedding et mistral-embedding-small) de manière asynchrone et recherche par plus proches voisins via l'algorithme <a href="https://www.ibm.com/think/topics/knn" target="_blank">kNN (k-Nearest Neighbors)</a> d'Elasticsearch.</li>
  <li><strong>Re-ranking par IA (Hybride) :</strong> Extraction des K meilleurs candidats via kNN, puis reclassement (Re-ranking) par un modèle de langage (GPT-4o-mini ou Mistral Small) basé sur un prompt contextuel pour évaluer une pertinence métier absolue (calculée en %).</li>
</ul>
<p style="text-align: center;">
  <img src="/images/SearchFlowDark.BQFgEyqe.jpg" alt="Flux de recherche vectorielle et Re-ranking" style="max-width: 100%; height: auto; border-radius: 8px; margin: 15px 0;" />
</p>

<h3>Défis techniques &amp; Optimisations</h3>
<p>Le projet a nécessité 6 à 7 mois de phases de tests, de R&amp;D et d'optimisations face à des contraintes industrielles majeures :</p>
<ul>
  <li><strong>Phase initiale de R&amp;D (POC) :</strong> Le projet a débuté par une phase d'expérimentation en Python, en utilisant la librairie <em>Sentence Transformers</em> et les modèles open-source d'<em>Hugging Face</em> afin de tester la pertinence des premiers modèles d'embeddings en local avant de basculer vers une architecture Cloud industrialisée.</li>
  <li><strong>Optimisation de la RAM (Elasticsearch) :</strong> L'architecture des graphes hiérarchiques (HNSW) en mémoire saturait la mémoire vive du Cloud. Le problème a été résolu par une mise à l'échelle du matériel et l'activation de la <em>quantization</em> d'Elasticsearch pour compresser les vecteurs à l'indexation.</li>
  <li><strong>Réduction du bruit sémantique :</strong> Les premiers tests d'enrichissement des FE par GPT généraient trop de bruit, faussant les distances vectorielles. Le pipeline a été affiné pour nettoyer le contexte injecté aux embeddings (méta-document).</li>
</ul>
<p style="text-align: center;">
  <img src="/images/IndexingFlowDark.BMOQWCnA.jpg" alt="Pipeline d'indexation des facteurs d'émission" style="max-width: 100%; height: auto; border-radius: 8px; margin: 15px 0;" />
</p>
<ul>
  <li><strong>Maîtrise des coûts d'API (Batch Processing) :</strong> Pour diviser les coûts par deux (-50%), le pipeline journalier utilise le mode <em>Batch</em> d'OpenAI et Mistral. Le système intègre une logique de repli (Fallback) en requêtes unitaires si la fenêtre de traitement du batch (time window) n'est pas initiée rapidement par le fournisseur.</li>
  <li><strong>Boucle de feedback (Apprentissage continu) :</strong> Intégration d'un système de "Correspondance utilisateur" (sauvegardé dans un index dédié) et d'un historique de tracking. Si la recherche vectorielle échoue, le choix manuel de l'utilisateur enrichit le moteur pour les requêtes futures, partagé au niveau de l'entreprise ou du groupe.</li>
</ul>

<h3>Deep Dive Technique</h3>

<h4>1. Les limites mathématiques de la recherche lexicale (BM25)</h4>
<p>La recherche textuelle classique repose sur l'algorithme BM25, qui s'avère insuffisant pour de la donnée réglementaire carbone pour deux raisons majeures :</p>
<ul>
  <li><strong>Un score purement relatif :</strong> Le <code>_score</code> calculé par Elasticsearch n'est pas un pourcentage de pertinence universel. C'est une valeur relative qui dépend de la fréquence des termes (TF-IDF) et de la taille globale de l'index. Transformer ce score en pourcentage côté frontend est arbitraire et trompeur pour l'utilisateur.</li>
  <li><strong>Le piège de la tokenisation :</strong> Les champs de type <code>text</code> sont analysés et découpés en jetons indépendants. Une requête comme <i>"gaz naturel"</i> génère les tokens <code>["gaz", "naturel"]</code>. Elasticsearch valide la présence des deux tokens sans contrainte stricte sur l'ordre ou l'adjacence, renvoyant le même score pour <i>"gaz naturel"</i>, <i>"naturel gaz"</i> ou <i>"industrie de gaz très naturel"</i>.</li>
</ul>

<h4>2. Pipeline FinOps : Batching asynchrone et logique de Fallback</h4>
<p>L'indexation journalière des milliers de facteurs d'émission réclamait une gestion stricte des coûts d'API (OpenAI / Mistral). Pour diviser les frais par deux (-50%), la logique de synchronisation intègre un mécanisme résilient de gestion des files d'attente :</p>
<ul>
  <li><strong>Soumission et pooling :</strong> Le script regroupe les méta-documents, crée un fichier de Batch et le transmet à l'API en inspectant régulièrement son statut (<i>queued, in_progress, completed</i>).</li>
  <li><strong>Fallback de sécurité (10-min Time Window) :</strong> Les fournisseurs (comme OpenAI) garantissent un traitement sous 24 heures, mais les batchs restent parfois bloqués en file d'attente. Si le statut du batch ne passe pas à <i>in_progress</i> au bout de 10 minutes, le pipeline annule automatiquement le batch et bascule sur un traitement unitaire parallélisé (<i>stream</i> asynchrone) pour garantir que la base de données soit à jour pour les utilisateurs dès le début de la journée.</li>
</ul>

<h4>3. Observabilité des prompts avec LangSmith</h4>
<p>L'étape de Re-ranking délègue l'ordonnancement final à un LLM (GPT-4o-mini ou Mistral Small) en lui passant l'input de l'utilisateur et le Top K des résultats du kNN. Pour optimiser cette couche décisionnelle :</p>
<ul>
  <li><strong>Découplage et Versioning :</strong> Les prompts de re-ranking (séparés pour le français et l'anglais) sont centralisés et versionnés sur LangSmith. Cela permet d'ajuster la sensibilité du classement et le calcul du pourcentage de pertinence métier directement via l'UI de LangSmith, sans toucher au code ni redéployer le backend.</li>
  <li><strong>Suivi des performances :</strong> LangSmith permet de monitorer la latence du re-ranking et d'analyser les réponses pour traquer d'éventuelles hallucinations sur l'évaluation des facteurs d'émission.</li>
</ul>

<h4>4. Architecture Multi-Tenant de la boucle d'apprentissage</h4>
<p>Lorsqu'un utilisateur clique sur <i>"Aucun ne correspond ?"</i> et sélectionne manuellement son FE via la recherche classique, le système enregistre cette liaison dans un index dédié aux correspondances sémantiques. L'architecture respecte les contraintes du B2B (Multi-tenant) :</p>
<ul>
  <li><strong>Mutualisation par Groupe :</strong> Les correspondances sont isolées au niveau de l'Entreprise et du Groupe d'entreprises. Si l'entreprise A crée une correspondance, toutes les entreprises appartenant au même groupe industriel en héritent automatiquement, accélérant l'apprentissage du moteur à l'échelle de l'organisation.</li>
  <li><strong>Gouvernance des droits :</strong> Pour éviter les conflits de données, une entreprise conserve l'autonomie et le droit de supprimer uniquement ses propres correspondances. Elle ne peut en aucun cas modifier ou supprimer une correspondance créée par une autre filiale du groupe.</li>
</ul>

<h3>Résultats</h3>
<p>Déploiement d'un moteur de recherche intelligent et auto-apprenant. La combinaison de la recherche vectorielle approximative (ANN) et du re-ranking par LLM permet d'éliminer les faux positifs sémantiques tout en offrant aux utilisateurs un taux de correspondance métier précis et une tolérance accrue aux variations de langage.</p>`,
  },
  {
    slug: "elasticsearch-synchronization-pipeline",
    num: "01",
    title: "Optimisation d'un pipeline de synchronisation Elasticsearch",
    subtitle:
      "Optimisation d'un pipeline de synchronisation Elasticsearch est une application web qui permet de gérer les notifications de l'application.",
    tags: ["Elasticsearch", "Node.js", "Socket.io"],
    year: "2026",
    role: "Backend Dev",
    duration: "2 semaines",
    colorIndex: 0,
    image: "elasticsearch.png",
    featuresLede:
      "Un pipeline de synchronisation résilient entre MySQL et Elasticsearch, conçu pour zéro downtime et une indexation incrémentale quotidienne.",
    features: [
      {
        title: "Blue-Green mapping",
        description:
          "Détection automatique de dérive de schéma et reconstruction d'index si le mapping TypeScript ne correspond plus à la production.",
      },
      {
        title: "Extraction sur Read Replica",
        description:
          "Lecture isolée sur le réplicat MySQL pour protéger l'instance principale des pics d'I/O lors de l'indexation nocturne.",
      },
      {
        title: "Indexation incrémentale",
        description:
          "Traitement du delta uniquement via updatedAt et drapeaux isIndexedFrOld / isIndexedEnOld, par lots de 1000 documents.",
      },
      {
        title: "Bulk upsert idempotent",
        description:
          "IDs déterministes $id-$locale et API _bulk Elasticsearch pour relancer le pipeline sans duplication de données.",
      },
    ],
    body: `<h3>Le projet</h3>
<p>Conception et automatisation du pipeline de synchronisation de données pour le moteur de recherche sémantique des facteurs d'émission (FE). L'objectif était de garantir une réplication résiliente, asynchrone et à faible impact sur la production entre la base de données relationnelle transactionnelle (MySQL) et le moteur de recherche (Elasticsearch 8.x), tout en automatisant la gestion des changements de schémas (mappings).</p>

<h3>Déclenchement du Pipeline</h3>
<p>L'infrastructure supporte deux modes d'exécution pour assurer à la fois la flexibilité en développement et l'autonomie en production :</p>
<ul>
  <li><strong>Automatisation Planifiée (Production) :</strong> Un <em>Cron Job</em> managé s'exécute quotidiennement tard le soir , isolant les lourdes tâches d'indexation durant les heures creuses.</li>
  <li><strong>Déclenchement Manuel (Backoffice) :</strong> Une interface d'administration permet aux équipes métiers de forcer une resynchronisation immédiate depuis les paramètres de la plateforme en cas de mise à jour réglementaire critique.</li>
</ul>

<h3>Stratégie d'Architecture &amp; cycle de synchronisation</h3>
<p>Le script automatise un cycle complet de validation et de migration en 3 étapes clés, conçu pour éviter tout downtime ou corruption d'index :</p>

<h4>1. Gestion dynamique du cycle de vie des Index (Blue-Green Mapping)</h4>
<p>Avant tout transfert de données, le système sécurise l'intégrité du schéma :</p>
<ul>
  <li><strong>Création à la volée :</strong> Si l'index cible est inexistant, le script l'initialise avec la configuration de production.</li>
  <li><strong>Détection de dérive de schéma (Diff de Mapping) :</strong> Si l'index existe déjà, un index temporaire est instancié avec le mapping défini dans le code source (TypeScript). Une méthode compare alors à l'atome près l'index existant et l'index temporaire. En cas de non-concordance (mise à jour du code), le script reconstruit proprement l'index pour éviter les conflits de types sémantiques.</li>
</ul>

<h4>2. Pipeline d'extraction optimisé (MySQL Read-Replica &amp; Batching)</h4>
<p>Pour préserver les performances de l'application cliente et de la base de données principale en production, le pipeline applique deux piliers FinOps/DevOps :</p>
<ul>
  <li><strong>Isolation des lectures :</strong> L'extraction des FE s'effectue exclusivement sur le <strong>réplicat de lecture (Read Replica)</strong> de la base MySQL, protégeant l'instance principale d'une saturation de verrous ou d'I/O.</li>
  <li><strong>Indexation incrémentale (Change Data Capture léger) :</strong> Le pipeline ne traite que le delta. Un filtrage strict basé sur les colonnes <code>updatedAt</code>, <code>isIndexedFrOld</code> et <code>isIndexedEnOld</code> isole uniquement les entités créées ou modifiées depuis la veille.</li>
  <li><strong>Contrôle de l'empreinte mémoire (Lot de 1000) :</strong> L'extraction et la transformation s'exécutent par segments de 1000 documents. Ce découpage garantit une consommation de RAM stable côté Node.js et prévient les erreurs de dépassement de mémoire (<i>OOM - Out Of Memory</i>).</li>
</ul>

<h4>3. Ingestion de masse et Idempotence (Elasticsearch Bulk Upsert)</h4>
<p>Les documents extraits (méta-documents multilingues unifiés au sein d'un index unique FR/EN) sont poussés vers Elasticsearch :</p>
<ul>
  <li><strong>Génération d'IDs déterministes :</strong> Afin de garantir l'idempotence du pipeline (pouvoir relancer le script sans dupliquer la donnée), l'identifiant unique du document Elasticsearch est généré par la concaténation de l'ID SQL et de sa locale : <code>$id-$locale</code>.</li>
  <li><strong>Bulk Upsert :</strong> L'utilisation de l'API <code>_bulk</code> d'Elasticsearch permet de mettre à jour ou de créer les 1000 documents en une seule requête réseau, maximisant le débit d'écriture du cluster.</li>
  <li><strong>Validation du statut SQL :</strong> Une fois le lot validé par Elasticsearch, les drapeaux d'indexation (<code>isIndexedFrOld</code> / <code>isIndexedEnOld</code>) sont mis à jour dans la base MySQL pour acter la réussite du processus.</li>
</ul>

<h3>Défis techniques résolus</h3>
<ul>
  <li><strong>Résilience aux pannes réseau :</strong> Grâce à la clé composite <code>ID-Locale</code> et à l'approche par lot, si le processus d'indexation est interrompu au milieu de la nuit, une réexécution reprend exactement là où elle s'est arrêtée sans altérer ou dédoubler l'index existant.</li>
</ul>

<h3>Résultats</h3>
<p>Mise en production d'un pipeline de synchronisation robuste et transparent pour l'utilisateur final. Le rafraîchissement quotidien de la base sémantique s'effectue en quelques minutes sans aucun impact sur la base transactionnelle principale, offrant une réactivité optimale du catalogue carbone WeCount.</p>`,
  },
  {
    slug: "import-data",
    num: "01",
    title: "Import de donnée",
    subtitle:
      "Import de donnée - WeCount est une application web qui permet de importer des données de manière automatisée.",
    tags: ["Node.js", "CronJob", "Socket.io"],
    year: "2026",
    role: "Fullstack Dev",
    duration: "1 mois",
    colorIndex: 0,
    image: "import1.png",
    featuresLede:
      "Import massif de fichiers Excel avec correction interactive et suivi temps réel, sans saturer la mémoire navigateur ni serveur.",
    features: [
      {
        title: "Parsing Excel par batch",
        description:
          "Lecture côté client par lots de 100 lignes avec setTimeout pour éviter de bloquer l'UI sur de gros volumes.",
      },
      {
        title: "Progression WebSocket",
        description:
          "Socket.io pousse l'avancement à chaque lot de 1000 lignes traitées côté serveur, avec barre de progression en direct.",
      },
      {
        title: "Grille AG Grid virtualisée",
        description:
          "Virtual scrolling, filtres dynamiques et édition en masse avec validation métier avant correction des erreurs d'import.",
      },
      {
        title: "Cron de résilience",
        description:
          "Job toutes les 5 minutes détecte les imports bloqués en PROCESSING et notifie l'utilisateur à sa reconnexion.",
      },
    ],
    body: `<h3>Le projet</h3>
<p>Développement d'un module d'import de données d'activités en masse permettant aux utilisateurs de charger des fichiers Excel sur la plateforme carbone. L'enjeu technique majeur était de traiter de gros volumes de données sans saturer la mémoire du navigateur, d'offrir une interface de correction performante via AG Grid, et de gérer un traitement asynchrone robuste côté serveur avec un suivi en temps réel via WebSockets.</p>

<h3>1. Architecture Frontend : Parsing et Optimisation Mémoire</h3>
<p>Afin de garantir une expérience fluide, le traitement initial du fichier Excel est réalisé directement côté client :</p>
<ul>
  <li><strong>Lecture binaire et Parsing :</strong> Utilisation de <code>FileReader.readAsArrayBuffer</code> et de la librairie XLSX (<code>XLSX.read</code>, <code>XLSX.utils.sheet_to_json</code>) pour extraire les données brutes ligne par ligne.</li>
  <li><strong>Traitement par Batch (Non-bloquant) :</strong> Pour éviter de figer l'interface utilisateur sur de très gros fichiers, le parsing est fragmenté par lots de 100 lignes via une fonction récursive (<code>processBatch</code>) couplée à un <code>setTimeout(resolve, 0)</code>, laissant le navigateur "respirer".</li>
  <li><strong>Gestion du State React :</strong> Les lignes nettoyées sont stockées dans une référence (<code>fullEntryDataRef.current</code>) plutôt que dans un store global, ce qui évite des re-renders inutiles et optimise la gestion de la mémoire pour les gros volumes.</li>
</ul>

<h3>2. Architecture Backend : Batching, Sockets et Résilience</h3>
<p>Une fois le mapping des colonnes effectué via une interface drag-and-drop (dnd-kit), le front envoie un payload JSON à l'API (limité à x Mo, déclenchant une erreur 413 si dépassé).</p>
<ul>
  <li><strong>Traitement par lots (Serveur) :</strong> L'API crée une entrée <code>ActivityEntryImport</code> puis traite les données par paquets de 1000 lignes pour éviter les dépassements de mémoire côté backend.</li>
  <li><strong>Temps réel via WebSockets :</strong> Le composant <code>SocketWrapper</code> établit une connexion (<code>socket.io-client</code>). À chaque batch de 1000 lignes traité, un événement est poussé vers la "room" de l'utilisateur, mettant à jour la barre de progression en direct sans recharger la page.</li>
  <li><strong>Cron de surveillance (Résilience) :</strong> Un job Cron s'exécute toutes les 5 minutes pour repérer les imports interrompus par un crash ou un déploiement (statut <code>PROCESSING</code> figé depuis plus de 5 minutes). Ces imports sont automatiquement passés en <code>MATCHING_ERROR</code> ou <code>CREATION_ERROR</code> et l'utilisateur est notifié à sa reconnexion.</li>
</ul>

<h3>3. Étape de complétion : Intégration avancée d'AG Grid</h3>
<p>Pour corriger les erreurs de l'import, les données sont injectées dans un tableau interactif <strong>AG Grid</strong> hautement optimisé :</p>
<ul>
  <li><strong>Virtual Scrolling & Chargement Infini :</strong> Permet un affichage fluide de milliers de lignes sans surcharge mémoire.</li>
  <li><strong>Rendu et Filtres Dynamiques :</strong> Chaque colonne est associée à un composant React spécifique (<code>cellRendererMap</code>) et à un filtre dédié (<code>filterComponentMap</code>) générés dynamiquement par la fonction <code>buildTableColumns</code>.</li>
  <li><strong>Édition multiple sous contraintes métiers :</strong> Les utilisateurs peuvent modifier plusieurs lignes en masse. Le système vérifie les droits et la cohérence métier avant modification (ex : pour modifier un Facteur d'Émission, toutes les lignes sélectionnées doivent partager la même méthode de calcul standard). La mise à jour de masse s'opère via un générateur asynchrone (batchs de 1000) gérant intelligemment la sélection globale, même sur les lignes virtualisées.</li>
</ul>

<h3>Résultats et Finalisation</h3>
<p>La finalisation est bloquée tant que des erreurs critiques (marquées en rouge) subsistent. Une fois validé, un algorithme traite la création/mise à jour finale par paquets de 400 entrées. Il se charge de générer les logs, mettre à jour les tableaux réglementaires (BEGES, ISO, GHG), et appelle <code>recomputeCampaignTotals</code> pour recalculer l'intégralité des émissions de la campagne (tCO₂) et des incertitudes.</p>`,
  },
  {
    slug: "notifications-system",
    num: "01",
    title: "Systeme de notifications",
    subtitle:
      "Notifications System est une application web qui permet de gérer les notifications de l'application.",
    tags: ["Node.js", "Socket.io"],
    year: "2026",
    role: "Fullstack Dev",
    duration: "1 mois",
    colorIndex: 0,
    image: "notification.jpg",
    featuresLede:
      "Centre de notifications temps réel pour informer les utilisateurs de l'avancement des tâches longues sans rechargement de page.",
    features: [
      {
        title: "Rooms multi-tenant",
        description:
          "Chaque utilisateur rejoint une room Socket.io isolée par userId pour garantir la confidentialité des alertes en B2B.",
      },
      {
        title: "Persistance MySQL",
        description:
          "Notifications sauvegardées en base avant émission push, pour ne perdre aucune alerte si le navigateur est fermé.",
      },
      {
        title: "Fallback polling",
        description:
          "Transports websocket et polling configurés pour contourner les réseaux d'entreprise bloquant les WebSockets stricts.",
      },
      {
        title: "Récupération offline",
        description:
          "À chaque reconnexion, getPendingNotification resynchronise les alertes critiques manquées pendant la coupure réseau.",
      },
    ],
    body: `<h3>Le projet</h3>
<p>Conception et implémentation d'un centre de notifications en temps réel. L'objectif était de fournir un retour visuel instantané aux utilisateurs lors de l'exécution de tâches longues en arrière-plan (comme l'import massif de données d'activités), sans nécessiter de rafraîchissement manuel de la page de la part de l'utilisateur.</p>

<h3>Stack &amp; architecture</h3>
<p>Le système repose sur une architecture bidirectionnelle utilisant <strong>Socket.io</strong> couplée à un backend <strong>Node.js / Express</strong> et un frontend <strong>Next.js / React</strong>.</p>

<h4>1. Architecture Backend : Serveur WebSockets &amp; Isolation</h4>
<ul>
  <li><strong>Gestion des connexions :</strong> Le serveur Node.js instancie un serveur Socket.io attaché à l'application Express. Les connexions sont sécurisées et partagent le contexte d'authentification de l'API (<code>withCredentials: true</code>).</li>
  <li><strong>Isolation par "Rooms" (Multi-Tenant) :</strong> Pour garantir la confidentialité des données (crucial en B2B), chaque utilisateur connecté est assigné à une "Room" Socket.io unique identifiée par son <code>userId</code>. Lorsqu'un <i>Background Job</i> (ex: worker d'import) termine une tâche, il émet l'événement uniquement vers cette Room spécifique.</li>
  <li><strong>Persistance des notifications :</strong> Les WebSockets étant par nature éphémères, chaque notification (succès, erreur, progression) est d'abord persistée dans la base de données MySQL avec un statut de lecture (ex: <code>pending: true</code>). Cela garantit qu'aucune alerte n'est perdue si l'utilisateur ferme son navigateur avant la fin d'un calcul.</li>
</ul>

<h4>2. Intégration Frontend : SocketWrapper (Next.js)</h4>
<p>Côté client, la gestion de la connexion est centralisée au plus haut niveau de l'arbre React pour maintenir un état global :</p>
<ul>
  <li><strong>Provider Global :</strong> Un composant <code>&lt;SocketWrapper&gt;</code> enveloppe l'application. Il initialise la connexion via <code>socket.io-client</code> au montage (mount) et nettoie les écouteurs au démontage (unmount) pour éviter les fuites de mémoire.</li>
  <li><strong>Stratégie de transport (Fallback) :</strong> La configuration autorise les transports <code>['websocket', 'polling']</code>. Si le réseau de l'entreprise cliente bloque les WebSockets stricts, la librairie bascule automatiquement sur du HTTP Long-Polling pour garantir la réception des alertes.</li>
  <li><strong>Écoute active :</strong> Le wrapper écoute les événements de progression (pour animer des barres de chargement) et les événements finaux pour déclencher des "Toasts" (pop-ups de notification) dans l'interface UI.</li>
</ul>

<h3>Défis techniques &amp; Résolutions</h3>
<ul>
  <li><strong>Gestion des déconnexions et micro-coupures :</strong> En cas de perte de réseau ou de redéploiement serveur (CI/CD), la socket se déconnecte. Le paramétrage natif (<code>reconnection: true</code>, delay exponentiel) est utilisé pour tenter une reconnexion silencieuse.</li>
  <li><strong>Synchronisation de l'état (Offline recovery) :</strong> Si un import se termine pendant que l'utilisateur est hors-ligne, le front-end ne reçoit pas l'événement push. Pour pallier cela, à chaque (re)connexion (événement <code>userconnected</code>) ou via un intervalle régulier, le client émet un événement <code>getPendingNotification</code>. Le serveur interroge alors la base de données et pousse toutes les notifications critiques en attente pour garantir la synchronisation de l'UI.</li>
</ul>

<h3>Résultats</h3>
<p>L'intégration de ce système a drastiquement amélioré l'expérience utilisateur (UX) de la plateforme. Les utilisateurs peuvent désormais lancer de lourds traitements asynchrones, naviguer librement sur d'autres pages, et être notifiés de manière fluide et non-intrusive dès que leur attention est requise ou qu'une tâche est terminée.</p>`,
  },
  {
    slug: "sports-field",
    num: "02",
    title: "Sports Field",
    subtitle:
      "Sports Field est une plateforme interactive novatrice dédiée au sport, créée pour répondre aux besoins d'engagement des passionnés de sport à travers des contenus variés et des fonctionnalités sociales. En s'appuyant sur l'évolution des médias numériques et l'implication croissante des utilisateurs, le projet vise à offrir un espace où chacun peut partager, interagir et s'informer.",
    tags: [
      "React.js",
      "Stripe",
      "MongoDB",
      "Redis",
      "Node.js",
      "Express",
      "Mui",
      "Redux",
      "TailwindCSS",
      "Algolia",
    ],
    year: "2024",
    role: "Fullstack Dev",
    duration: "INFINITY",
    colorIndex: 0,
    video: "SportsField.mp4",
    featuresLede:
      "Réseau social sportif combinant actualité live, création de contenu, messagerie et monétisation créateurs.",
    features: [
      {
        title: "Live Match Center",
        description:
          "Scores en direct, statistiques, compositions et événements de match avec suivi multi-sports en temps réel.",
      },
      {
        title: "Messagerie instantanée",
        description:
          "Conversations privées, bulles persistantes et notifications Socket.IO pendant les matchs.",
      },
      {
        title: "Sports Field Studio",
        description:
          "Espace créateur avec statistiques, vues, revenus et publication d'articles, podcasts et contenus enrichis.",
      },
      {
        title: "Monétisation intégrée",
        description:
          "Abonnements premium via Stripe et PayPal, avec suivi des revenus créateurs depuis le studio.",
      },
    ],
    body: `
<h3>Le projet</h3>
<p>
  Développement de <strong>Sports Field</strong>, une plateforme numérique interactive
  conçue pour réunir les passionnés de sport au sein d'un écosystème unique.
  Pensée comme un véritable réseau social sportif, l'application permet aux
  utilisateurs de suivre l'actualité sportive, d'interagir en temps réel lors des
  matchs et de devenir créateurs de contenu grâce à la publication d'articles,
  podcasts et publications communautaires.
</p>

<h3>Stack &amp; architecture</h3>

<ul>
  <li>
    <strong>Frontend :</strong> React.js (SPA), React Router, Context API,
    Lazy Loading et Code Splitting.
  </li>

  <li>
    <strong>Backend :</strong> Node.js, Express, API REST et WebSockets
    (Socket.IO) pour les fonctionnalités temps réel.
  </li>

  <li>
    <strong>Bases de données :</strong> MongoDB pour les données métiers
    et Redis pour la mise en cache et les performances.
  </li>

  <li>
    <strong>Infrastructure :</strong> O2Switch, Google Cloud Storage,
    services de traitement asynchrones dédiés.
  </li>
</ul>

<h3>Fonctionnalités principales</h3>

<ul>
  <li>
    <strong>Live Match Center :</strong> scores en direct, statistiques,
    compositions, événements de match et suivi multi-sports.
  </li>

  <li>
    <strong>Personnalisation avancée :</strong> réorganisation des sports,
    ligues favorites, filtres personnalisés et tableau de bord adapté à
    l'équipe favorite de l'utilisateur.
  </li>

  <li>
    <strong>Expérience communautaire :</strong> système d'amis,
    mentions, commentaires, réactions, groupes privés et discussions
    en temps réel pendant les matchs.
  </li>

  <li>
    <strong>Messagerie instantanée :</strong> conversations privées,
    bulles de discussion persistantes et notifications temps réel.
  </li>

  <li>
    <strong>Création de contenu :</strong> publications sociales,
    sondages, articles enrichis et podcasts créés directement depuis la plateforme.
  </li>

  <li>
    <strong>Éditeur avancé :</strong> intégration de TipTap avec
    support des médias, vidéos YouTube, contenus Spotify,
    images externes et liens enrichis avec prévisualisation automatique.
  </li>

  <li>
    <strong>Système de bookmarking :</strong> favoris, likes,
    sauvegarde d'articles et de podcasts pour consultation ultérieure.
  </li>

  <li>
    <strong>Recherche globale :</strong> moteur de recherche permettant
    de retrouver rapidement utilisateurs, contenus et podcasts.
  </li>

  <li>
    <strong>Surlignage d'articles :</strong> possibilité pour les lecteurs
    de sauvegarder et retrouver les passages importants d'un article.
  </li>

  <li>
    <strong>Prévisualisation intelligente :</strong> génération automatique
    d'aperçus multimédias dans les articles et la messagerie
    (YouTube, Twitch, Twitter, Spotify, etc.).
  </li>

  <li>
    <strong>Mise en avant des grands événements :</strong> affichage
    dynamique des matchs les plus populaires et attendus.
  </li>

  <li>
    <strong>Modération communautaire :</strong> signalement de contenus,
    signalement d'utilisateurs, blocage de comptes et gestion des sanctions.
  </li>

  <li>
    <strong>Sports Field Studio :</strong> espace créateur regroupant
    statistiques, vues, revenus, commentaires, gestion et publication de contenu.
  </li>

  <li>
    <strong>Monétisation :</strong> intégration Stripe et PayPal,
    abonnements premium et suivi des revenus créateurs.
  </li>

  <li>
    <strong>Conformité RGPD :</strong> export des données utilisateur
    aux formats XLSX et ZIP avec stockage sécurisé sur Google Cloud Storage.
  </li>
</ul>

<h3>Accompagnement entrepreneurial — Programme 1Kubator</h3>

<p>
  Le projet a bénéficié d'un accompagnement méthodologique dans le cadre d'un
  programme entrepreneurial proposé par 1Kubator. Cette expérience a permis
  de structurer la vision produit, d'identifier les besoins utilisateurs, de définir
  une proposition de valeur claire et de construire un MVP selon les principes
  Lean Startup.
</p>

<ul>
  <li>Présentation du projet devant plusieurs jurys à Lyon.</li>
  <li>Analyse des utilisateurs cibles et du marché.</li>
  <li>Définition de la proposition de valeur.</li>
  <li>Construction du MVP et validation des hypothèses produit.</li>
  <li>Préparation et présentation d'un elevator pitch.</li>
</ul>

<h3>Défis techniques &amp; optimisations</h3>

<ul>
  <li>
    Création d'un Task Server Node.js indépendant pour exécuter les tâches
    de fond sans impacter les performances de l'API principale.
  </li>

  <li>
    Mise en œuvre du Code Splitting et du Lazy Loading afin d'améliorer
    les performances de chargement.
  </li>

  <li>
    Utilisation avancée des agrégations MongoDB pour relier efficacement
    utilisateurs, contenus, favoris, commentaires et statistiques.
  </li>

  <li>
    Développement d'un système temps réel basé sur Socket.IO pour
    les discussions, notifications et interactions live.
  </li>

  <li>
    Création d'extensions personnalisées TipTap pour enrichir l'éditeur
    avec des fonctionnalités avancées de publication.
  </li>

  <li>
    Automatisation de la personnalisation graphique des équipes sportives
    grâce à l'extraction dynamique des couleurs principales des logos.
  </li>
</ul>

<h3>Résultats</h3>

<p>
  Sports Field a évolué d'une simple plateforme de suivi sportif vers un véritable
  réseau social communautaire combinant actualité sportive, création de contenu,
  interaction temps réel, personnalisation avancée et outils de monétisation.
</p>

<p>
  Son architecture modulaire permet l'ajout de nouveaux sports, de nouvelles
  sources de données et de nouvelles fonctionnalités tout en conservant de bonnes
  performances et une expérience utilisateur fluide.
</p>`,
  },
  {
    slug: "cityzen-coiffure",
    num: "03",
    title: "Cityzen Coiffure",
    subtitle: "",
    tags: ["Vue.js", "Gsap", "Locomotive Scroll"],
    year: "2024",
    role: "Frontend Dev",
    duration: "1 mois",
    colorIndex: 1,
    link: "https://cityzen-coiffure.fr/",
    featuresLede:
      "Site vitrine interactif pour salon de coiffure, avec gestion de contenu et animations soignées.",
    features: [
      {
        title: "Authentification utilisateur",
        description:
          "Espace personnel sécurisé pour les administrateurs du salon.",
      },
      {
        title: "Gestion de contenu",
        description:
          "Modification de textes, images et éléments visuels directement depuis l'interface.",
      },
      {
        title: "Animations GSAP",
        description:
          "Transitions fluides et animations avancées pour une expérience immersive et engageante.",
      },
      {
        title: "Scroll Locomotive",
        description:
          "Défilement smooth et sections animées inspirées de sites primés Awwwards.",
      },
    ],
    body: `
<h3>Le projet</h3>

<p>
  Développement d'un site web interactif combinant <strong>Vue.js</strong>,
  <strong>Node.js</strong> et <strong>GSAP</strong>, avec pour objectif de proposer
  une expérience utilisateur immersive, fluide et visuellement attractive.
</p>

<h3>Stack &amp; objectifs</h3>

<ul>
  <li>
    <strong>Frontend :</strong> interface développée avec <strong>Vue.js</strong>
    pour créer une expérience réactive, dynamique et agréable à utiliser.
  </li>

  <li>
    <strong>Backend :</strong> serveur <strong>Node.js</strong> permettant de gérer
    l'authentification des utilisateurs et la communication avec les contenus modifiables.
  </li>

  <li>
    <strong>Animations :</strong> utilisation de <strong>GSAP</strong> pour créer
    des transitions fluides, des animations avancées et donner vie aux éléments visuels du site.
  </li>

  <li>
    <strong>Inspiration design :</strong> conception inspirée de sites primés sur
    Awwwards, avec une attention particulière portée à l'esthétique, à l'ergonomie
    et à l'expérience utilisateur.
  </li>
</ul>

<h3>Fonctionnalités</h3>

<ul>
  <li>
    <strong>Authentification utilisateur :</strong> possibilité pour les utilisateurs
    de se connecter à un espace personnel sécurisé.
  </li>

  <li>
    <strong>Gestion de contenu :</strong> modification de textes, images et éléments
    visuels directement depuis l'interface, sans connaissances techniques avancées.
  </li>

  <li>
    <strong>Interface interactive :</strong> navigation dynamique, transitions soignées
    et animations fluides pour renforcer l'engagement des visiteurs.
  </li>

  <li>
    <strong>Expérience immersive :</strong> design moderne combinant animation,
    fluidité et accessibilité du contenu.
  </li>
</ul>

<h3>Résultats</h3>

<p>
  Le site offre une expérience moderne et engageante, alliant design interactif,
  animations avancées et fonctionnalités de gestion de contenu. Il permet aux
  utilisateurs connectés de personnaliser facilement certaines parties du site tout en
  conservant une interface fluide, esthétique et intuitive.
</p>
`,
    video: "CityZen.mp4",
  },
  {
    slug: "next-music",
    num: "04",
    title: "Next Music Player",
    subtitle:
      "Next Music Player est un lecteur de musique créer en école de developpement qui permet de lire des morceaux de musique.",
    tags: [
      "Next.js",
      "TypeScript",
      "Spotify API",
      "Tailwind",
      "Cypress",
      "Mui",
      "Jest",
      "Docker",
      "Jenkins",
      "CircleCI",
      "Netlify",
      "Vercel",
    ],
    year: "2022",
    role: "Frontend Dev",
    duration: "1 semaine",
    colorIndex: 2,
    link: "https://next-music.netlify.app/",
    github: "https://github.com/WeeSi/nextMusic",
    featuresLede:
      "Lecteur de musique inspiré d'une maquette Dribbble, avec pipeline CI/CD multi-plateforme.",
    features: [
      {
        title: "Lecteur Spotify-like",
        description:
          "Interface Next.js / Material UI pour parcourir et lire des morceaux avec une UX soignée.",
      },
      {
        title: "Pipeline CI/CD",
        description:
          "Expérimentation Docker, Jenkins, CircleCI, Vercel et Netlify pour automatiser le déploiement.",
      },
      {
        title: "Hébergement Netlify",
        description:
          "Application déployée gratuitement sur Netlify après comparaison de plusieurs plateformes.",
      },
    ],
    body: `<h3>Le projet</h3>
<p>Ce mini projet à été réalisé avec NextJs, un framework ReactJS, Tailwindcss et MaterialUi. Le but était de développer une application de musique, nous nous sommes inspirés d'une maquette Dribbble (Dribbble étant un site où toutes sortes de maquettes y sont répertoriées). ID: WeeSii PASSWORD : 1234</p>
<h3>Stack &amp; architecture</h3>
<p>Développé avec Next.js, TypeScript, Tailwind CSS et Material UI. Au-delà du développement de l'application, ce projet de cours nous a servi de terrain d'expérimentation pour découvrir différents outils de déploiement et de CI/CD comme Docker, Jenkins, CircleCI, Vercel ou encore Netlify. Après plusieurs essais et configurations, l'application est aujourd'hui hébergée gratuitement sur Netlify.</p>`,
    image: "NextMusic.png",
  },
  {
    slug: "progressive-web-app",
    num: "04",
    title: "Progressive Web App - Ionic",
    subtitle: "",
    tags: ["Ionic", "Vue.js", "Tailwind"],
    year: "2022",
    role: "Fullstack Dev",
    duration: "1 mois",
    colorIndex: 2,
    image: "trialp1.png",
    images: [
      "trialp1.png",
      "trialp2.png",
      "trialp3.png",
      "trialp4.png",
      "trialp5.png",
      "trialp6.png",
      "trialp7.png",
      "trialp8.png",
      "trialp9.png",
      "trialp10.png",
      "trialp11.png",
    ],
    imagesPosition: "end",
    featuresLede:
      "Application terrain pour agents collecteurs TRIALP : tournées, collectes, incidents et synchronisation ERP.",
    features: [
      {
        title: "Détection de tournée",
        description:
          "Vérification automatique de la tournée affectée à l'agent pour la journée en cours.",
      },
      {
        title: "Navigation assistée",
        description:
          "Bouton « J'y vais » ouvrant l'application de cartographie avec l'itinéraire vers le client.",
      },
      {
        title: "Saisie des déchets",
        description:
          "Interface mobile simple pour quantités collectées, avec blocage des valeurs négatives.",
      },
      {
        title: "Clôture de collecte",
        description:
          "Passage à l'état effectué avec envoi automatique d'e-mail au client et récapitulatif de tournée.",
      },
    ],
    body: `
<h3>Le projet</h3>

<p>
  Développement d'une <strong>application mobile PWA</strong> pour
  <strong>TRIALP</strong>, une entreprise spécialisée dans la collecte de déchets triés
  et engagée dans l'insertion par l'activité économique. L'objectif du projet était
  d'accompagner les agents collecteurs sur le terrain en leur fournissant une interface
  simple, rapide et adaptée à leurs tournées quotidiennes.
</p>

<p>
  L'application permet aux agents de démarrer une tournée, saisir le kilométrage du
  véhicule, consulter les clients à collecter, déclarer les quantités récupérées, signaler
  des incidents et clôturer leur tournée. Les données sont synchronisées avec le logiciel
  interne existant de TRIALP, utilisé côté back-office par les équipes administratives.
</p>

<h3>Stack &amp; architecture</h3>

<ul>
  <li>
    <strong>Frontend :</strong> interface mobile développée avec <strong>Vue.js</strong>
    et <strong>Ionic</strong>, afin de proposer une expérience proche d'une application
    native tout en restant accessible depuis un navigateur.
  </li>

  <li>
    <strong>Application PWA :</strong> mise en place d'une Progressive Web App
    installable depuis le navigateur du périphérique, sans publication sur les stores
    Android ou iOS.
  </li>

  <li>
    <strong>Backend :</strong> connexion au logiciel existant de l'entreprise,
    développé en <strong>PHP</strong>, afin de récupérer les tournées, clients,
    collectes et informations métier déjà présentes dans l'ERP.
  </li>

  <li>
    <strong>Architecture multi-client :</strong> création d'une base applicative
    réutilisable, pouvant être compilée et personnalisée selon les besoins de chaque
    client sans repartir de zéro.
  </li>

  <li>
    <strong>Design mobile :</strong> intégration d'une maquette inspirée de tendances
    UI modernes, avec une interface pensée pour une utilisation terrain rapide et
    intuitive.
  </li>
</ul>

<h3>Fonctionnalités principales</h3>

<ul>
  <li>
    <strong>Authentification agent :</strong> accès sécurisé à l'application via un
    identifiant et un mot de passe simplifiés, adaptés à un usage terrain rapide.
  </li>

  <li>
    <strong>Détection de tournée :</strong> vérification automatique de l'existence
    d'une tournée affectée à l'agent pour la journée en cours.
  </li>

  <li>
    <strong>Démarrage de tournée :</strong> saisie du kilométrage initial du camion
    et de l'heure de départ, avec pré-remplissage automatique de l'heure actuelle.
  </li>

  <li>
    <strong>Synchronisation ERP :</strong> mise à jour du statut de la tournée dans
    le logiciel interne, avec passage de l'état « à planifier » à « en cours de saisie ».
  </li>

  <li>
    <strong>Liste des collectes :</strong> affichage des clients à collecter avec leur
    nom, adresse, type de déchet, quantité prévue et informations complémentaires.
  </li>

  <li>
    <strong>Badges d'information :</strong> mise en avant d'indications utiles pour
    l'agent, comme un nouveau client, une note interne, un appel nécessaire ou une
    certification ISCC.
  </li>

  <li>
    <strong>Navigation assistée :</strong> redirection vers l'application de cartographie
    du téléphone via un bouton « J'y vais », afin de lancer automatiquement l'itinéraire
    vers le client.
  </li>

  <li>
    <strong>Appel rapide :</strong> ouverture directe de l'application téléphone depuis
    une fiche client lorsque le numéro est disponible.
  </li>

  <li>
    <strong>Saisie des déchets :</strong> interface simple permettant d'ajouter ou de
    modifier les quantités collectées ou déposées, avec blocage des valeurs négatives.
  </li>

  <li>
    <strong>Gestion des incidents :</strong> déclaration d'incidents tels qu'un client
    fermé, un accès impossible, une fermeture temporaire ou une autre situation
    nécessitant un commentaire.
  </li>

  <li>
    <strong>Ajout de photo :</strong> possibilité de prendre une photo lors d'un
    incident afin de l'enregistrer dans la fiche de collecte.
  </li>

  <li>
    <strong>Suivi de charge :</strong> recalcul automatique du poids total collecté
    pendant la tournée et alerte en cas de dépassement de la capacité du camion.
  </li>

  <li>
    <strong>Clôture de collecte :</strong> passage d'une collecte à l'état « effectué »
    avec déclenchement d'un traitement côté logiciel, notamment l'envoi d'un e-mail
    au client.
  </li>

  <li>
    <strong>Fin de tournée :</strong> gestion de plusieurs cas de clôture : tournée
    terminée, report au lendemain, surcharge, dépassement horaire ou changement
    de véhicule / agent.
  </li>

  <li>
    <strong>Récapitulatif :</strong> affichage d'un bilan final avec le nombre de clients
    collectés, les déchets récupérés, les quantités, la charge totale, le kilométrage
    final et l'heure de fin.
  </li>
</ul>

<h3>Parcours utilisateur</h3>

<p>
  Après connexion, l'agent accède uniquement à la tournée qui lui est affectée pour
  la journée. Il renseigne les informations de départ, puis consulte la liste des clients
  à collecter. Chaque fiche client regroupe les informations nécessaires à l'intervention :
  adresse, type de déchets, quantités prévues, notes, contact téléphonique et actions
  rapides.
</p>

<p>
  Une fois la collecte réalisée, l'agent saisit les quantités réellement récupérées,
  déclare éventuellement un incident, ajoute une photo si nécessaire, puis valide la
  collecte. À la fin de la tournée, il renseigne les informations finales et accède à un
  récapitulatif complet avant synchronisation avec l'ERP.
</p>

<h3>Défis techniques</h3>

<ul>
  <li>
    Adapter une interface mobile à un contexte terrain, avec des agents ayant besoin
    d'accéder rapidement aux informations essentielles pendant leur tournée.
  </li>

  <li>
    Connecter l'application PWA à un logiciel existant sans recréer toute la logique
    métier déjà présente dans l'ERP.
  </li>

  <li>
    Mettre en place un système de statuts permettant de suivre précisément
    l'avancement d'une tournée : non planifiée, à planifier, planifiée, en cours de saisie
    et effectuée.
  </li>

  <li>
    Concevoir une interface de saisie simple pour les quantités collectées, utilisable
    rapidement sur mobile et limitant les erreurs de saisie.
  </li>

  <li>
    Intégrer des actions natives depuis une application web mobile, comme l'ouverture
    d'un itinéraire dans une application de cartographie ou le lancement d'un appel
    téléphonique.
  </li>

  <li>
    Prévoir plusieurs scénarios de fin de tournée afin de refléter les contraintes réelles
    du terrain : surcharge, dépassement horaire, report ou changement d'agent.
  </li>
</ul>

<h3>Résultats</h3>

<p>
  L'application a permis de digitaliser une partie du travail terrain des agents collecteurs
  en centralisant les informations de tournée, la saisie des quantités, la déclaration
  d'incidents et la remontée des données vers le logiciel interne.
</p>

<p>
  Grâce à l'approche PWA, TRIALP dispose d'une solution mobile accessible directement
  depuis le navigateur, sans installation via les stores, tout en conservant une expérience
  proche d'une application native. Le projet a été réalisé sur une période d'environ
  trois mois, au sein d'une équipe réduite, avec un rôle principalement orienté vers
  l'intégration de la maquette et le développement de l'interface utilisateur.
</p>
`,
  },
  {
    slug: "gsb-web-app",
    num: "04",
    title: "Gsb Web App - Ionic",
    subtitle: "",
    tags: [
      "Ionic",
      "Angular",
      "Typescript",
      "Tailwind",
      "Swagger",
      "Cordova",
      "NestJS",
    ],
    year: "2022",
    role: "Fullstack Dev",
    duration: "6 mois",
    colorIndex: 2,
    github: "https://github.com/WeeSi/ionic",
    image: "gsb7.png",
    images: [
      "gsb1.jpg",
      "gsb2.jpg",
      "gsb3.jpg",
      "gsb4.jpg",
      "gsb5.jpg",
      "gsb6.jpg",
    ],
    imagesPosition: "end",
    featuresLede:
      "Application métier GSB pour visiteurs médicaux : frais, médecins, rendez-vous et authentification JWT.",
    features: [
      {
        title: "Authentification JWT",
        description:
          "Connexion sécurisée avec intercepteur HTTP ajoutant automatiquement le token aux requêtes API.",
      },
      {
        title: "Gestion des frais",
        description:
          "Suivi des dépenses kilométriques, repas, hébergement et transport avec date et description.",
      },
      {
        title: "Recherche dynamique",
        description:
          "Filtrage en temps réel avec debounce pour retrouver médecins, patients et utilisateurs.",
      },
      {
        title: "Thème clair / sombre",
        description:
          "Bascule manuelle ou automatique selon le thème système, avec composants Ionic natifs.",
      },
    ],
    body: `
<h3>Le projet</h3>

<p>
  Développement d'une application web/mobile pour <strong>Galaxy Swiss Bourdin</strong>,
  un laboratoire pharmaceutique souhaitant harmoniser la gestion des frais générés
  par ses visiteurs médicaux. L'objectif était de proposer un outil accessible aux
  commerciaux et aux équipes comptables afin de centraliser le suivi, la consultation
  et la gestion des fiches de frais.
</p>

<p>
  L'application permet aux visiteurs médicaux de gérer leurs informations, de suivre
  leurs interactions terrain et de renseigner différents types de dépenses liées à leur
  activité professionnelle : déplacements, repas, hébergement ou frais de transport.
  Les équipes administratives disposent quant à elles d'une vision structurée des
  utilisateurs et des données associées.
</p>

<h3>Stack &amp; architecture</h3>

<ul>
  <li>
    <strong>Frontend :</strong> application développée avec <strong>Ionic</strong> et
    <strong>Angular</strong>, permettant de créer une interface hybride adaptée au web
    et au mobile.
  </li>

  <li>
    <strong>Langage :</strong> utilisation de <strong>TypeScript</strong> pour structurer
    le code, typer les modèles de données et améliorer la maintenabilité du projet.
  </li>

  <li>
    <strong>Navigation :</strong> mise en place d'un système de routing Angular avec
    plusieurs modules dédiés : authentification, médecins, patients, recherche,
    calendrier et espace utilisateur.
  </li>

  <li>
    <strong>API REST :</strong> consommation d'une API backend via des services générés
    à partir d'une documentation Swagger, facilitant les appels aux ressources métier.
  </li>

  <li>
    <strong>Sécurité :</strong> gestion de l'authentification par token JWT, stockage du
    token côté client et ajout automatique du token dans les requêtes HTTP grâce à un
    intercepteur Angular.
  </li>

  <li>
    <strong>Expérience mobile :</strong> intégration de composants Ionic, transitions
    natives, stockage local, détection du thème système et compatibilité Cordova.
  </li>
</ul>

<h3>Fonctionnalités principales</h3>

<ul>
  <li>
    <strong>Authentification utilisateur :</strong> connexion sécurisée avec validation
    du formulaire, récupération d'un token JWT et redirection vers l'espace applicatif.
  </li>

  <li>
    <strong>Gestion des visiteurs médicaux :</strong> consultation des profils commerciaux,
    recherche d'utilisateurs et affichage des informations principales comme le nom,
    l'adresse et le rôle.
  </li>

  <li>
    <strong>Gestion des médecins :</strong> affichage d'une liste de médecins,
    consultation d'une fiche détaillée et ouverture de modales pour accéder aux
    informations associées.
  </li>

  <li>
    <strong>Recherche dynamique :</strong> moteur de recherche interne avec filtrage
    en temps réel et temporisation des saisies afin d'améliorer l'expérience utilisateur.
  </li>

  <li>
    <strong>Calendrier de rendez-vous :</strong> interface de sélection de date et
    d'horaires disponibles, permettant de simuler ou préparer la prise de rendez-vous
    avec un médecin.
  </li>

  <li>
    <strong>Gestion des frais :</strong> structure de données permettant de suivre les
    frais liés aux kilomètres, repas, hôtels et transports, avec date et description.
  </li>

  <li>
    <strong>Catalogue de médicaments :</strong> présence d'un espace dédié aux
    médicaments, avec affichage de fiches produits et catégorisation visuelle.
  </li>

  <li>
    <strong>Espace utilisateur :</strong> page de paramètres permettant d'accéder aux
    informations personnelles, aux préférences d'affichage, au thème et à la déconnexion.
  </li>

  <li>
    <strong>Thème clair / sombre :</strong> possibilité de changer le thème de
    l'application ou d'utiliser automatiquement le thème défini par le système.
  </li>
</ul>

<h3>Défis techniques</h3>

<ul>
  <li>
    Mise en place d'une architecture Ionic/Angular organisée en modules et pages
    indépendantes afin de faciliter la navigation et la maintenance.
  </li>

  <li>
    Création d'un système d'authentification basé sur JWT avec vérification de
    l'expiration du token et déconnexion automatique en cas d'erreur d'autorisation.
  </li>

  <li>
    Intégration d'un intercepteur HTTP permettant d'ajouter automatiquement le token
    d'authentification dans les requêtes envoyées à l'API.
  </li>

  <li>
    Utilisation de services API générés pour standardiser les échanges entre le
    frontend et le backend.
  </li>

  <li>
    Conception d'une interface orientée mobile avec modales, onglets, recherche,
    listes dynamiques, infinite scroll et rafraîchissement des données.
  </li>
</ul>

<h3>Résultats</h3>

<p>
  Ce projet a permis de concevoir une application métier destinée à simplifier la
  gestion interne d'un laboratoire pharmaceutique. L'application centralise plusieurs
  besoins : authentification, consultation des utilisateurs, gestion des profils médicaux,
  suivi des frais, recherche interne et accès à un calendrier de rendez-vous.
</p>

<p>
  Grâce à Ionic et Angular, le projet dispose d'une base hybride adaptée au web et au
  mobile, avec une architecture modulaire pouvant évoluer vers une solution complète
  de gestion des fiches de frais pour les visiteurs médicaux et les équipes comptables.
</p>
`,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
