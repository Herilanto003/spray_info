"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Code2, Rocket } from "lucide-react";
import ImageFandeani from "../../public/assets/fandeani 2.png";

export default function Banner() {
  // Variants d'animation pour les éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Éléments de fond animés */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-blue-200"
          variants={sparkleVariants}
          animate="animate"
        >
          <Sparkles className="h-6 w-6" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-purple-200"
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
        >
          <Code2 className="h-8 w-8" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-blue-300"
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        >
          <Rocket className="h-7 w-7" />
        </motion.div>

        {/* Cercles de fond */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contenu textuel */}
          <div className="space-y-8">
            {/* Badge animé */}
            {/* <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full border border-blue-200/50"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-blue-600" />
              </motion.div>
              <span className="text-sm font-medium text-blue-800">
                Développeur Passionné
              </span>
            </motion.div> */}

            {/* Titre principal */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-8xl font-bold text-gray-900 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Spray_info
                </motion.span>
              </motion.h1>

              {/* Slogan */}
              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
              >
                "De aona fandeani jiaby"
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                whileInView={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <strong>
                  Université Privée • Centre de Formation • Cabinet de Conseil •
                  TechnoSupport
                </strong>{" "}
                <br /> Nous démocratisons l'accès à la technologie et formons
                les talents prêts à répondre aux défis du monde moderne
              </motion.p>
            </motion.div>

            {/* Boutons d'action */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Contactez Nous</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Rocket className="h-5 w-5" />
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#3B82F6",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Nos formations</span>
                  <motion.div className="group-hover:rotate-45 transition-transform duration-300">
                    <Code2 className="h-5 w-5" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Statistiques */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              {[
                { number: "50+", label: "Projets réalisés" },
                { number: "3+", label: "Années d'expérience" },
                { number: "100%", label: "Satisfaction client" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-2xl sm:text-3xl font-bold text-blue-600"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div variants={imageVariants} className="relative">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative z-10"
            >
              <div className="relative">
                {/* Effet de halo */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Image principale */}
                <motion.div
                  className="relative bg-gradient-to-br  rounded-3xl p-2 lg:block hidden"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={ImageFandeani}
                    alt="Fandeani"
                    className="rounded-2xl object-cover w-full h-[500px] sm:h-[600px] rotate-y-180"
                    loading="eager"
                  />

                  {/* Overlay avec effet */}
                  {/* <motion.div
                    className="absolute inset-2 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-2xl"
                    // initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  /> */}
                </motion.div>
              </div>
            </motion.div>

            {/* Éléments décoratifs flottants */}
            {/* <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg"
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Code2 className="h-6 w-6 text-blue-600" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg"
              animate={{
                y: [5, -5, 5],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Rocket className="h-6 w-6 text-purple-600" />
            </motion.div> */}
          </motion.div>
        </motion.div>

        {/* Indicateur de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 text-gray-400 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1, color: "#3B82F6" }}
          >
            <span className="text-sm font-medium">Scroll pour découvrir</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
