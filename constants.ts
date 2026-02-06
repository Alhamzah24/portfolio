
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Hamzah Husam",
  title: "Étudiant en Master Data Engineer",
  bio: "Futur étudiant en Master 1 Data Engineer à l'ECE Paris, passionné par la Data Science, l'IA et les infrastructures Cloud. Actuellement à la recherche d'une alternance pour 2026.",
  about: "Actuellement en Bachelor Data & IA et admis en Master Data Engineer à l'ECE Paris pour la rentrée 2026, je combine une expertise en développement (React, Java) avec des compétences avancées en Data Engineering et Machine Learning (XGBoost, SVM). Mon expérience chez AWS m'a permis de maîtriser les environnements cloud, la résolution d'incidents complexes et l'automatisation via Python.",
  email: "alhamzah.husamuldeen@edu.ece.fr",
  linkedin: "https://linkedin.com/in/hamzahhusam",
  skills: [
    {
      category: "Data & IA",
      items: ["Python", "Pandas", "Scikit-learn", "XGBoost", "PyTorch", "NumPy", "PCA", "Machine Learning", "NLP"]
    },
    {
      category: "Cloud & Infrastructure",
      items: ["AWS (EC2, S3, IAM)", "Linux (Admin)", "Shell Scripting", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      category: "Développement Web",
      items: ["React", "Node.js", "Express", "Java", "PHP", "JavaScript", "HTML5/CSS3", "Tailwind CSS"]
    },
    {
      category: "Soft Skills & Langues",
      items: ["Anglais (Certifié Business)", "Support Technique", "Gestion de projet Agile", "Résolution de problèmes"]
    }
  ],
  experience: [
    {
      company: "Amazon Web Services (AWS)",
      role: "AWS Cloud Support",
      period: "2025",
      description: [
        "Support et exploitation de services cloud critiques en environnement Linux.",
        "Analyse approfondie et résolution d'incidents complexes liés aux infrastructures cloud.",
        "Développement de scripts d'automatisation en Python pour optimiser le diagnostic système.",
        "Maintenance et intervention sur des applications backend robustes en Java.",
        "Surveillance proactive des performances, gestion granulaire des logs et amélioration continue de la stabilité."
      ]
    },
    {
      company: "Association Coallia",
      role: "Agent informatique / Développeur",
      period: "2024",
      description: [
        "Refonte et maintenance du frontend d'applications de gestion interne en React.",
        "Implémentation de nouvelles fonctionnalités backend en Java pour les outils de reporting.",
        "Optimisation et administration de bases de données relationnelles en SQL.",
        "Support technique de proximité et formation des utilisateurs aux nouveaux outils digitaux.",
        "Correction de bugs critiques et amélioration de l'UX globale des interfaces métier."
      ]
    },
    {
      company: "OMNES EDUCATION London School",
      role: "Mobilité Internationale & Certification",
      period: "2024",
      description: [
        "Immersion totale en environnement anglophone pour le perfectionnement linguistique.",
        "Collaboration multi-culturelle sur des projets technologiques complexes.",
        "Obtention de la certification 'Certified Business & Computer Science in English' avec mention."
      ]
    }
  ],
  projects: [
    {
      id: "edubot-ia",
      title: "EduBot IA — Chatbot d’orientation E-Learning",
      description: "Application Full-Stack majeure utilisant des LLMs pour guider les apprenants dans leurs parcours de formation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      tags: ["React", "Node.js", "PostgreSQL", "LLM API", "Vite"],
      fullDescription: [
        {
          title: "Le Concept",
          content: "EduBot IA est une solution innovante visant à personnaliser l'orientation des étudiants. L'IA agit comme un coach pédagogique capable de comprendre le niveau actuel de l'utilisateur et ses aspirations pour lui recommander les modules e-learning les plus pertinents."
        },
        {
          title: "Architecture Full-Stack",
          content: [
            "Frontend : Interface développée avec React 18 et Tailwind CSS pour une expérience utilisateur fluide et moderne.",
            "Backend : Serveur Node.js avec Express gérant la logique métier et les appels API sécurisés.",
            "Base de données : PostgreSQL pour stocker les profils utilisateurs, les historiques de chat et les catalogues de cours.",
            "Sécurité : Authentification via JWT (JSON Web Tokens) et hachage des mots de passe avec bcrypt."
          ]
        },
        {
          title: "Intégration de l'IA",
          content: [
            "Connexion via API à des modèles de langage avancés (Groq, OpenAI).",
            "Mise en place d'une stratégie de Prompt Engineering pour garantir des réponses pédagogiques précises.",
            "Gestion du contexte de conversation pour un suivi cohérent des échanges."
          ]
        },
        {
          title: "Défis Techniques",
          content: "Le principal défi a été la gestion de la latence des réponses de l'IA. J'ai mis en place un système de streaming de texte et des indicateurs de chargement optimisés pour maintenir l'engagement de l'utilisateur."
        }
      ]
    },
    {
      id: "nba-prediction",
      title: "NBA Match Prediction — XGBoost",
      description: "Système de prédiction basé sur le Machine Learning pour estimer les vainqueurs et les scores des matchs NBA.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "XGBoost", "Scikit-learn", "Data Science"],
      fullDescription: [
        {
          title: "Problématique",
          content: "Prédire le résultat d'un match de basket est complexe car il dépend de multiples facteurs : forme actuelle, historique des confrontations, fatigue (back-to-back), etc."
        },
        {
          title: "Méthodologie Data Science",
          content: [
            "Collecte : Récupération de données historiques multi-saisons via web scraping et datasets publics.",
            "Pré-traitement : Nettoyage des données manquantes et normalisation des statistiques avec Pandas et NumPy.",
            "Feature Engineering : Création de variables personnalisées comme la moyenne glissante des points sur les 5 derniers matchs et l'avantage du terrain."
          ]
        },
        {
          title: "Modélisation avec XGBoost",
          content: [
            "Classification : Utilisation de XGBClassifier pour prédire la victoire (Binary Classification).",
            "Régression : Utilisation de XGBRegressor pour estimer l'écart de points et le score final.",
            "Validation : Cross-validation et analyse de la matrice de confusion pour minimiser les faux positifs."
          ]
        },
        {
          title: "Résultats",
          content: "Le modèle a atteint une précision de plus de 70% sur les prédictions de victoire, surpassant les modèles de base traditionnels."
        }
      ]
    },
    {
      id: "data-viz-flask",
      title: "Visualisation de Données (Python & Flask)",
      description: "Plateforme web d’exploration de données massives transformant des fichiers complexes en graphiques interactifs.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "Flask", "Matplotlib", "NetworkX", "Pandas"],
      fullDescription: [
        {
          title: "Mission",
          content: "Développer une interface légère et rapide pour permettre aux analystes de visualiser des relations complexes au sein de jeux de données hétérogènes."
        },
        {
          title: "Analyse de Graphes",
          content: "Utilisation de la bibliothèque NetworkX pour modéliser des réseaux de données et visualiser les interconnexions entre différentes entités (clusters)."
        },
        {
          title: "Stack Technique",
          content: [
            "Framework : Flask pour la rapidité de déploiement.",
            "Analyse : Pandas pour le filtrage dynamique des données.",
            "Graphisme : Matplotlib et Seaborn générant des visuels intégrés directement dans l'interface web.",
            "Géospatial : Intégration de Shapely pour le traitement de données géographiques simples."
          ]
        }
      ]
    },
    {
      id: "spendwise",
      title: "SpendWise — Gestion Financière Full-Stack",
      description: "Outil complet de suivi budgétaire avec authentification sécurisée et rapports automatisés.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      tags: ["PHP", "MySQL", "Firebase", "TCPDF"],
      fullDescription: [
        {
          title: "Objectif du Projet",
          content: "Offrir aux particuliers un outil simple mais puissant pour visualiser leurs flux de trésorerie et gérer leurs économies."
        },
        {
          title: "Fonctionnalités Avancées",
          content: [
            "Authentification : Utilisation de Firebase Auth pour une sécurité maximale.",
            "Gestion des Flux : Ajout, modification et catégorisation des revenus et dépenses.",
            "Reporting : Génération de rapports mensuels au format PDF via la bibliothèque TCPDF.",
            "Tableau de bord : Visualisation en temps réel du solde et des prévisions."
          ]
        },
        {
          title: "Base de données",
          content: "Modélisation d'une base de données relationnelle MySQL optimisée pour gérer des milliers de transactions par utilisateur avec des requêtes SQL performantes."
        }
      ]
    },
    {
      id: "pokemon-classification",
      title: "Pokémon Image Classification — SVM & PCA",
      description: "Modèle de vision par ordinateur classifiant les images de Pokémon via des techniques de Machine Learning classique.",
      image: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "PCA", "SVM", "Computer Vision", "Scikit-learn"],
      fullDescription: [
        {
          title: "Approche Technique",
          content: "Contrairement aux approches Deep Learning modernes, ce projet se focalise sur l'extraction de caractéristiques manuelles et le Machine Learning classique pour comprendre les fondements de la Computer Vision."
        },
        {
          title: "Pipeline de traitement",
          content: [
            "Prétraitement : Redimensionnement des images et conversion en niveaux de gris/vecteurs.",
            "PCA (Analyse en Composantes Principales) : Réduction de la dimensionnalité pour ne garder que les informations les plus discriminantes et accélérer le calcul.",
            "SVM (Support Vector Machine) : Entraînement d'un classificateur avec noyau RBF pour séparer les classes dans un espace de grande dimension."
          ]
        },
        {
          title: "Apprentissages",
          content: "Ce projet a permis de maîtriser le compromis biais-variance et l'importance cruciale de la réduction de dimension pour éviter le sur-apprentissage (overfitting)."
        }
      ]
    }
  ],
  education: [
    {
      school: "ECE Paris",
      degree: "Master Data Engineer",
      period: "2026 - 2028"
    },
    {
      school: "ECE Paris",
      degree: "Bachelor Data & IA",
      period: "2023 - 2026"
    },
    {
      school: "ECE Paris",
      degree: "Classes Préparatoires aux Grandes Écoles (CPGE)",
      period: "2022 - 2023"
    }
  ]
};
