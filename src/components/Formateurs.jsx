import React from "react";
// import { Link } from "react-router-dom";
import {
  User,
  ExternalLink,
  Award,
  BookOpen,
  Code,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

const Formateurs = () => {
  const formateurs = [
    {
      id: "heriniaina",
      name: "RAMANANJANAHARY Heriniaina Jacquino",
      title: "Co-fondateur & Directeur Technique",
      specialty: "Génie Logiciel & Architecture",
      description:
        "Expert en développement logiciel avec une solide expérience en architecture d'applications et gestion de projets techniques.",
      skills: [
        "React/Node.js",
        "Architecture logicielle",
        "Gestion de projets",
        "Formation technique",
      ],
      experience: "5+ années",
      formation: "Ingénieur ENI Tuléar",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "sylvestre",
      name: "HERINIRIKO Nomenjanahary Sylvestre",
      title: "Co-fondateur & Expert Systèmes",
      specialty: "Administration Systèmes & Réseaux",
      description:
        "Spécialiste en administration systèmes, sécurité réseau et infrastructure informatique avec une expertise en cybersécurité.",
      skills: [
        "Linux/Windows",
        "Sécurité réseau",
        "Virtualisation",
        "Cloud computing",
      ],
      experience: "5+ années",
      formation: "Ingénieur ENI Tuléar",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "jean-pierre",
      name: "LIGNISA Jean Pierre",
      title: "Co-fondateur & Expert Conseil",
      specialty: "Transformation Digitale & Conseil",
      description:
        "Expert en transformation digitale et conseil stratégique, accompagne les entreprises dans leur évolution technologique.",
      skills: [
        "Conseil stratégique",
        "Transformation digitale",
        "Gestion d'entreprise",
        "Formation",
      ],
      experience: "5+ années",
      formation: "Ingénieur ENI Tuléar",
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "jean-pierre",
      name: "LIGNISA Jean Pierre",
      title: "Co-fondateur & Expert Conseil",
      specialty: "Transformation Digitale & Conseil",
      description:
        "Expert en transformation digitale et conseil stratégique, accompagne les entreprises dans leur évolution technologique.",
      skills: [
        "Conseil stratégique",
        "Transformation digitale",
        "Gestion d'entreprise",
        "Formation",
      ],
      experience: "5+ années",
      formation: "Ingénieur ENI Tuléar",
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="min-h-screen pt-16" id="formateurs">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-5">
        <motion.div
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <GraduationCap className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-800">
            Nos Formateurs
          </span>
        </motion.div>

        <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une équipe d'experts passionnés et expérimentés
        </motion.p>
      </div>

      {/* Formateurs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formateurs.map((formateur) => (
              <div
                key={formateur.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                  <img
                    src={formateur.image}
                    alt={formateur.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {formateur.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1">
                    {formateur.title}
                  </p>
                  <p className="text-gray-600 mb-4">{formateur.specialty}</p>

                  <p className="text-gray-700 mb-4 text-sm">
                    {formateur.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Compétences :
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {formateur.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{formateur.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{formateur.formation}</span>
                    </div>
                  </div>

                  {/* <Link
                    to={`/portfolio/${formateur.id}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Voir le portfolio</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formateurs;
