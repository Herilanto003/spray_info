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
            Découvrez mon parcours et ma passion pour le développement
            web,administration système et réseau, ainsi qu’en cybersécurité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ingénieur en informatique polyvalent et consultant IT,
                spécialisé en développement web, administration système et
                réseau, ainsi qu’en cybersécurité.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Fondateur de Spray_info, centre de formation et cabinet de
                conseil basé à Madagascar, accompagnant entreprises et
                particuliers dans leur transformation numérique et la
                sécurisation de leurs infrastructures. Formateur confirmé, avec
                une solide expérience dans la conception et l’animation de
                formations pratiques destinées aux professionnels et futurs
                experts du numérique.
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
                    RAMANANJANAHARY HERINIAINA JACQUINO
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
                    Imandry, FIANARANTSOA
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
                    Projets et expérience professionnels
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    12+ réalisés
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white transform rotate-3 hover:rotate-6 transition-transform">
                  <h3 className="font-bold text-lg mb-2">
                    Développement & Programmation
                  </h3>
                  <p className="text-sm opacity-90">
                    ReactJS, javascript,React Native,PHP, Java,
                    ExpressJs,SpringBoot{" "}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 rounded-2xl text-white transform -rotate-2 hover:-rotate-6 transition-transform">
                  <h3 className="font-bold text-lg mb-2">
                    Réseaux & Infrastructure :
                  </h3>
                  <p className="text-sm opacity-90">
                    Cisco, Mikrotik , PfSens , Linux,Firewall , VPN ,GPO ,
                    Détection d’intrusion
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-2xl text-white transform rotate-2 hover:rotate-6 transition-transform">
                  <h3 className="font-bold text-lg mb-2">
                    Systèmes & Serveurs{" "}
                  </h3>
                  <p className="text-sm opacity-90">
                    Ubuntu, Debian,serveur , desktop,irtualBox, VMware
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-2xl text-white transform -rotate-1 hover:-rotate-6 transition-transform">
                  <h3 className="font-bold text-lg mb-2">Cybersécurité</h3>
                  <p className="text-sm opacity-90">
                    Splunk , ELK stack,Nmap, Metasploit , Wireshark, pfSense et
                    Cisco ASA
                  </p>
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
