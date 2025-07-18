import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  Server,
  Users,
  Brain,
  Zap,
  Award,
  Clock,
  GraduationCap,
} from "lucide-react";

const Formation = () => {
  const formations = [
    {
      category: "Université Spray_X",
      icon: <Award className="h-8 w-8" />,
      color: "blue",
      programs: [
        {
          title: "Génie Logiciel Informatique",
          duration: "3 ans",
          description:
            "Formation complète en développement logiciel, programmation avancée, génie logiciel et architecture d'applications.",
          modules: [
            "Programmation orientée objet",
            "Bases de données",
            "Développement web",
            "Architecture logicielle",
            "Gestion de projets",
          ],
        },
        {
          title: "Administration Systèmes & Réseaux",
          duration: "3 ans",
          description:
            "Spécialisation en administration systèmes, sécurité réseau, et infrastructure informatique.",
          modules: [
            "Administration Linux/Windows",
            "Réseaux et sécurité",
            "Virtualisation",
            "Cloud computing",
            "Cybersécurité",
          ],
        },
      ],
    },
    {
      category: "Centre de Formation",
      icon: <BookOpen className="h-8 w-8" />,
      color: "green",
      programs: [
        {
          title: "Développement Web",
          duration: "6 mois",
          description:
            "Formation intensive en développement web moderne avec React, Node.js et technologies actuelles.",
          modules: [
            "HTML/CSS/JavaScript",
            "React.js",
            "Node.js",
            "Bases de données",
            "Déploiement",
          ],
        },
        {
          title: "Programmation Mobile",
          duration: "4 mois",
          description:
            "Création d'applications mobiles natives et cross-platform.",
          modules: [
            "React Native",
            "Flutter",
            "API Integration",
            "UI/UX Mobile",
            "Publication sur stores",
          ],
        },
        {
          title: "Cybersécurité",
          duration: "5 mois",
          description:
            "Formation en sécurité informatique et protection des systèmes.",
          modules: [
            "Ethical Hacking",
            "Sécurité réseau",
            "Cryptographie",
            "Audit sécurité",
            "Incident response",
          ],
        },
      ],
    },
    {
      category: "Développement Personnel",
      icon: <Users className="h-8 w-8" />,
      color: "purple",
      programs: [
        {
          title: "Communication & Leadership",
          duration: "3 mois",
          description:
            "Développement des compétences en communication et leadership.",
          modules: [
            "Communication efficace",
            "Leadership",
            "Gestion d'équipe",
            "Prise de parole",
            "Négociation",
          ],
        },
        {
          title: "Gestion de Projet",
          duration: "2 mois",
          description:
            "Méthodologies de gestion de projet et outils collaboratifs.",
          modules: [
            "Méthodologies Agile",
            "Scrum",
            "Outils de gestion",
            "Planification",
            "Suivi de projet",
          ],
        },
      ],
    },
    {
      category: "Technologies Avancées",
      icon: <Brain className="h-8 w-8" />,
      color: "orange",
      programs: [
        {
          title: "Intelligence Artificielle",
          duration: "6 mois",
          description:
            "Introduction à l'IA, machine learning et deep learning.",
          modules: [
            "Python pour IA",
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "NLP",
          ],
        },
        {
          title: "Robotique",
          duration: "4 mois",
          description: "Conception et programmation de systèmes robotiques.",
          modules: [
            "Électronique",
            "Programmation embarquée",
            "Capteurs",
            "Actuateurs",
            "Automatisation",
          ],
        },
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen pt-16" id="formations">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-5">
        <motion.div
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <GraduationCap className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-800">
            Nos Formations
          </span>
        </motion.div>
      </div>

      {/* Formations Section */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {formations.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div
                    className={`inline-flex items-center space-x-3 p-4 rounded-lg ${getColorClasses(
                      category.color
                    )}`}
                  >
                    {category.icon}
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {category.category}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.programs.map((program, programIndex) => (
                    <div
                      key={programIndex}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {program.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{program.duration}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {program.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Modules :
                        </h4>
                        <ul className="space-y-1">
                          {program.modules.map((module, moduleIndex) => (
                            <li
                              key={moduleIndex}
                              className="text-gray-600 text-sm"
                            >
                              • {module}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                          S'inscrire
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formation;
