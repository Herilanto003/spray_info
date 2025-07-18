import { ArrowRight } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prêt à rejoindre l'aventure ?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Découvrez nos formations et commencez votre parcours vers l'excellence
          technologique
        </p>
        <a
          to="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
        >
          <span>Contactez-nous</span>
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
