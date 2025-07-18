import React from "react";
import { User, Award, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours et ma passion pour le développement web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sortant de l’Ecole Nationale d’Informatique (ENI) à l’Université
                de Fianarantsoa de Madagascar en tant qu’Ingénieur en
                informatique. J’aime se documenter et d’apprendre une nouvelle
                technologie. Je suis méthodique et curieux ainsi conscient.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Actuel, je suis à la recherche d’une freelance pour développer
                mes valeurs et mes expériences dans le but de servir les besoins
                des utilisateurs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    Nom
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    HERINIRIKO Nomenjanahary Sylvestre{" "}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    Localisation
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Anketa-Bas, Toliara de Madagascar{" "}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    Expérience
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">5+ années</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    Projets
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    7+ réalisés
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white transform rotate-3 hover:rotate-6 transition-transform">
                  <h3 className="font-bold text-lg mb-2">Frontend</h3>
                  <p className="text-sm opacity-90">React, TypeScript</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 rounded-2xl text-white transform -rotate-2 hover:-rotate-6 transition-transform">
                  <h3 className="font-bold text-lg mb-2">Backend</h3>
                  <p className="text-sm opacity-90">Php, Python, Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
