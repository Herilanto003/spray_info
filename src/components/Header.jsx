"use client";

import { useState, useEffect } from "react";
import { Code, Moon, Sun, Menu, X } from "lucide-react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Détecter la section active basée sur le scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "accueil",
        "apropos",
        "formations",
        "formateurs",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { id: "accueil", label: "Accueil" },
    { id: "apropos", label: "À propos" },
    { id: "formations", label: "Formations" },
    { id: "formateurs", label: "Formateurs" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMobileMenu();
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo avec animation */}
          <div className="flex items-center space-x-2 flex-shrink-0 group">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <Code className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
              Spray_info
            </span>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg group overflow-hidden ${
                  activeSection === item.id
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {/* Effet de fond animé au hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>

                {/* Indicateur de page active */}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>

                {/* Effet de brillance au hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Dark Mode Toggle avec animation */}
            <button
              onClick={toggleDarkMode}
              className="relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 group overflow-hidden hover:shadow-md"
              aria-label="Toggle dark mode"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></span>
              <span className="relative z-10 block transition-transform duration-300 group-hover:rotate-180">
                {isDarkMode ? (
                  <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 group-hover:text-orange-600" />
                ) : (
                  <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 group-hover:text-blue-600" />
                )}
              </span>
            </button>

            {/* Mobile Menu Button avec animation */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 group overflow-hidden hover:shadow-md"
              aria-label="Toggle mobile menu"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></span>
              <span className="relative z-10 block transition-transform duration-300">
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-700 group-hover:text-red-600 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-700 group-hover:text-blue-600 transform group-hover:scale-110 transition-transform duration-300" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu avec animations */}
        <div
          className={`md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 group overflow-hidden transform ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                } ${
                  activeSection === item.id
                    ? "text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {/* Effet de fond animé */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>

                {/* Indicateur de page active pour mobile */}
                <span
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transition-all duration-300 rounded-r ${
                    activeSection === item.id ? "h-8" : "h-0 group-hover:h-6"
                  }`}
                ></span>

                {/* Effet de brillance */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

                <span className="relative z-10 flex items-center">
                  {item.label}
                  {activeSection === item.id && (
                    <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  )}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
