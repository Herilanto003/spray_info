import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../../components/jeanpierre/Hero";
import About from "../../components/jeanpierre/About";
import Skills from "../../components/jeanpierre/Skills";
import Projects from "../../components/jeanpierre/Projects";
import Contact from "../../components/jeanpierre/Contact";
import Footer from "../../components/jeanpierre/Footer";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Code,
  Award,
  BookOpen,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";

const PortfolioJeanPierre = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Faire défiler vers le haut lors du chargement du composant
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Détecter le scroll pour animer le bouton
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Retourne à la page précédente dans l'historique
  };

  const projets = [
    {
      title: "Plateforme E-learning Spray_Info",
      description:
        "Développement de la plateforme d'apprentissage en ligne pour les formations Spray_Info",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      status: "En cours",
    },
    {
      title: "Système de Gestion des Étudiants",
      description:
        "Application complète de gestion des inscriptions, notes et parcours étudiants",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      status: "Terminé",
    },
    {
      title: "Site Web Corporate",
      description:
        "Développement de sites web pour les entreprises partenaires",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      status: "Terminé",
    },
  ];

  const competences = [
    { nom: "React.js", niveau: 95 },
    { nom: "Node.js", niveau: 90 },
    { nom: "JavaScript/TypeScript", niveau: 95 },
    { nom: "MongoDB", niveau: 85 },
    { nom: "Architecture Logicielle", niveau: 90 },
    { nom: "Gestion de Projet", niveau: 85 },
  ];

  const formations = [
    {
      diplome: "Ingénieur en Informatique",
      etablissement: "École Nationale d'Informatique (ENI) Tuléar",
      annee: "2020",
      mention: "Très Bien",
    },
    {
      diplome: "Formation Continue React/Node.js",
      etablissement: "Certification en ligne",
      annee: "2021",
      mention: "Expert",
    },
  ];

  const experiences = [
    {
      poste: "Co-fondateur & Directeur Technique",
      entreprise: "Spray_Info",
      periode: "2022 - Présent",
      description:
        "Direction technique, développement de la stratégie technologique, formation des étudiants",
    },
    {
      poste: "Développeur Full Stack",
      entreprise: "Projets freelance",
      periode: "2020 - 2022",
      description:
        "Développement d'applications web pour diverses entreprises locales",
    },
  ];

  return (
    <div className="min-h-screen">
      <button
        onClick={handleGoBack}
        className={`fixed top-20 left-4 z-50 inline-flex items-center space-x-2 px-4 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${
          isScrolled
            ? "bg-white text-blue-600 border border-blue-200 shadow-xl"
            : "bg-blue-600 text-white border border-blue-600"
        }`}
      >
        <ArrowLeft
          className={`h-5 w-5 transition-transform duration-300 ${
            isScrolled ? "rotate-0" : "rotate-0"
          }`}
        />
        <span className="font-medium">Retour</span>
      </button>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioJeanPierre;
