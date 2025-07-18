import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Target,
  Award,
  BookOpen,
  Building,
  X,
  ChevronRight,
  GraduationCap,
  Handshake,
} from "lucide-react";

const About = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Données des partenaires
  const partners = [
    {
      id: 1,
      name: "Société WBS",
      logo: "/api/placeholder/120/60",
      description: "École Nationale d'Informatique",
      category: "Éducation",
    },
    {
      id: 2,
      name: "ManTek",
      logo: "/api/placeholder/120/60",
      description: "Institut de Formation Technique",
      category: "Formation",
    },
    {
      id: 3,
      name: "Tsikidia Tour",
      logo: "/api/placeholder/120/60",
      description: "Solutions Technologiques",
      category: "Technologie",
    },
    {
      id: 4,
      name: "Akatas",
      logo: "/api/placeholder/120/60",
      description: "Transformation Digitale",
      category: "Conseil",
    },
    {
      id: 5,
      name: "GTV",
      logo: "/api/placeholder/120/60",
      description: "Laboratoire d'Innovation",
      category: "Recherche",
    },
    {
      id: 6,
      name: "RFA",
      logo: "/api/placeholder/120/60",
      description: "Incubateur de Startups",
      category: "Entrepreneuriat",
    },
    {
      id: 7,
      name: "Manj’Art",
      logo: "/api/placeholder/120/60",
      description: "Services Cloud",
      category: "Infrastructure",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Modal Component
  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-6">{children}</div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div id="apropos" className="min-h-screen pt-16">
      {/* Hero Section - Section animée */}
      <div className="flex flex-col items-center justify-center pt-5">
        <motion.div
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <GraduationCap className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-800">
            À propos de nous
          </span>
        </motion.div>

        <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto">
          "De aona fandeani jiaby" - Votre passerelle vers l'excellence
          technologique
        </motion.p>
      </div>

      {/* Summary Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Histoire Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-blue-600 p-4 rounded-full w-16 h-16 mb-6 mx-auto"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Calendar className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Notre Histoire
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Découvrez le parcours de Spray_Info depuis sa fondation en 2022
                par trois ingénieurs passionnés jusqu'à son expansion
                stratégique.
              </p>
              <div className="text-center">
                <motion.button
                  onClick={() => openModal("histoire")}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir plus
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Objectifs Card */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-green-600 p-4 rounded-full w-16 h-16 mb-6 mx-auto"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Nos Objectifs
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Explorez nos objectifs stratégiques : formation professionnelle,
                université privée Spray_X et cabinet de conseil Spray_idea.
              </p>
              <div className="text-center">
                <motion.button
                  onClick={() => openModal("objectifs")}
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir plus
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Missions Card */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-purple-600 p-4 rounded-full w-16 h-16 mb-6 mx-auto"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Nos Missions
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Découvrez nos missions : former les talents Web 3.0, rendre la
                technologie accessible et accompagner la transformation
                digitale.
              </p>
              <div className="text-center">
                <motion.button
                  onClick={() => openModal("missions")}
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir plus
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Histoire Modal */}
      <Modal
        isOpen={activeModal === "histoire"}
        onClose={closeModal}
        title="Notre Histoire"
      >
        <motion.div
          className="space-y-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            variants={cardVariants}
          >
            <div className="md:w-1/2">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Janvier 2022 - Fondation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fondé par trois ingénieurs en informatique issus de l'ENI Tuléar
                : RAMANANJANAHARY Heriniaina Jacquino, HERINIRIKO Nomenjanahary
                Sylvestre et LIGNISA Jean Pierre. Créé à Fianarantsoa,
                Spray_Info a commencé modestement avec seulement deux étudiants
                issus de l'ENI et de l'IFT.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "À cette époque, la salle était une simple maison où vivaient
                  les trois informaticiens. Les tables et chaises avaient été
                  obtenues grâce à leur bourse d'études."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8"
            variants={cardVariants}
          >
            <div className="md:w-1/2">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mb-4">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Juillet 2022 - Expansion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Avec l'augmentation du nombre d'étudiants, Spray_Info a pu
                améliorer le confort et les équipements. L'institution obtient
                son propre siège pouvant accueillir plus de 100 étudiants.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Équipements modernes :</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Ordinateurs de bureau et portables</li>
                  <li>• Points d'accès et switches</li>
                  <li>• Salles spécialisées</li>
                  <li>• Bureau de direction</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            variants={cardVariants}
          >
            <div className="md:w-1/2">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                2025 - Expansion Stratégique
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lancement de Spray_idea (Cabinet de conseil), TechnoSupport
                (Services numériques), et l'Université privée Spray_X avec deux
                filières : Génie Logiciel et Administration Systèmes & Réseaux.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "Pédagogie moderne orientée sur l'intelligence appliquée :
                  L'intelligence, version 3.0"
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Modal>

      {/* Objectifs Modal */}
      <Modal
        isOpen={activeModal === "objectifs"}
        onClose={closeModal}
        title="Nos Objectifs"
      >
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-start space-x-4"
            variants={cardVariants}
          >
            <div className="bg-blue-100 p-3 rounded-lg">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Formation et insertion professionnelle
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Faciliter l'apprentissage des technologies et accompagner les
                étudiants dans leur préparation à la vie professionnelle. Nous
                mettons l'accent sur une approche pratique et orientée vers les
                besoins du marché du travail.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-4"
            variants={cardVariants}
          >
            <div className="bg-green-100 p-3 rounded-lg">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Université privée Spray_X
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proposer des formations diplômantes de haut niveau avec une
                pédagogie innovante centrée sur l'intelligence appliquée. Notre
                université offre deux filières principales : Génie Logiciel et
                Administration Systèmes & Réseaux.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-4"
            variants={cardVariants}
          >
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibent text-gray-900 mb-3">
                Spray_idea - Cabinet de conseil
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Aider les entreprises dans leur transformation digitale et
                offrir un accompagnement personnalisé. Notre cabinet propose des
                solutions sur mesure pour optimiser les processus numériques des
                organisations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Modal>

      {/* Missions Modal */}
      <Modal
        isOpen={activeModal === "missions"}
        onClose={closeModal}
        title="Nos Missions"
      >
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Former les talents de demain (Web 3.0)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Offrir une formation universitaire de qualité destinée à former
              des experts capables de répondre aux exigences du marché. Nous
              préparons nos étudiants aux technologies émergentes et aux défis
              futurs du numérique.
            </p>
          </motion.div>

          <motion.div
            className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Rendre la technologie accessible à tous
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Proposer des formations professionnelles ouvertes à tous, sans
              distinction de genre ou de niveau. Notre approche inclusive
              garantit que chacun puisse développer ses compétences numériques.
            </p>
          </motion.div>

          <motion.div
            className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Accompagnement stratégique
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Proposer un accompagnement personnalisé aux entreprises et aux
              individus en transformation digitale. Nous offrons un support
              complet pour naviguer dans l'écosystème numérique moderne.
            </p>
          </motion.div>

          <motion.div
            className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Répondre aux besoins numériques
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Proposer des services numériques professionnels et un
              accompagnement technique aux entreprises. Notre équipe
              TechnoSupport assure un service de qualité pour tous vos projets
              digitaux.
            </p>
          </motion.div>

          <motion.div
            className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Innovation et recherche
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Promouvoir l'innovation technologique et la recherche appliquée
              dans le domaine du numérique. Nous encourageons nos étudiants et
              partenaires à explorer de nouvelles solutions créatives.
            </p>
          </motion.div>
        </motion.div>
      </Modal>

      {/* Section Partenariats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full mb-4"
              variants={titleVariants}
            >
              <Handshake className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">
                Nos Partenaires
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              variants={titleVariants}
            >
              Ensemble vers l'excellence
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={subtitleVariants}
            >
              Découvrez nos partenaires stratégiques qui nous accompagnent dans
              notre mission de transformation digitale
            </motion.p>
          </motion.div>

          {/* Slider de partenaires */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex space-x-8"
                animate={{
                  x: [0, -100 * partners.length],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{
                  width: `${partners.length * 2 * 320}px`,
                }}
              >
                {/* Première série de partenaires */}
                {partners.map((partner) => (
                  <motion.div
                    key={`first-${partner.id}`}
                    className="flex-shrink-0 w-80"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-48 flex flex-col justify-between border border-gray-100">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500 font-semibold text-sm">
                            {partner.name}
                          </span>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {partner.description}
                        </p>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {partner.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Deuxième série de partenaires (pour la continuité) */}
                {partners.map((partner) => (
                  <motion.div
                    key={`second-${partner.id}`}
                    className="flex-shrink-0 w-80"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-48 flex flex-col justify-between border border-gray-100">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500 font-semibold text-sm">
                            {partner.name}
                          </span>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {partner.description}
                        </p>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {partner.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Gradients pour l'effet de fondu */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Statistiques des partenariats */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="text-center" variants={statsVariants}>
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600">Partenaires Actifs</div>
            </motion.div>

            <motion.div className="text-center" variants={statsVariants}>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Projets Collaboratifs</div>
            </motion.div>

            <motion.div className="text-center" variants={statsVariants}>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Étudiants Bénéficiaires</div>
            </motion.div>

            <motion.div className="text-center" variants={statsVariants}>
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-600">Années de Collaboration</div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rejoignez notre réseau de partenaires
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vous souhaitez collaborer avec Spray_Info ? Découvrez comment
                nous pouvons créer ensemble des synergies pour l'avenir du
                numérique à Madagascar.
              </p>
              <motion.button
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Handshake className="mr-2 h-5 w-5" />
                Devenir Partenaire
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
