import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              LIGNISA Jean Pierre
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              e suis ingénieur en informatique. J’ai 29 ans et je suis
              célibataire.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Compétences", "Projets", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item
                        .toLowerCase()
                        .replace("à propos", "about")
                        .replace("compétences", "skills")
                        .replace("projets", "projects")
                        .replace("contact", "contact")
                        .replace("accueil", "accueil")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Imandry, FIANARANTSOA</p>
              <p>jeanlignisa@gmail.com </p>
              <p>+261 34 91 311 82</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Jean Pierre. Fait avec{" "}
            <Heart className="inline h-4 w-4 text-red-500" /> et beaucoup de
            café ☕
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-110"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
