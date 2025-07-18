import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Code, Award, BookOpen, ExternalLink, Github, Linkedin } from 'lucide-react';

const PortfolioHeriniaina = () => {
  const projets = [
    {
      title: "Plateforme E-learning Spray_Info",
      description: "Développement de la plateforme d'apprentissage en ligne pour les formations Spray_Info",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      status: "En cours"
    },
    {
      title: "Système de Gestion des Étudiants",
      description: "Application complète de gestion des inscriptions, notes et parcours étudiants",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      status: "Terminé"
    },
    {
      title: "Site Web Corporate",
      description: "Développement de sites web pour les entreprises partenaires",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      status: "Terminé"
    }
  ];

  const competences = [
    { nom: "React.js", niveau: 95 },
    { nom: "Node.js", niveau: 90 },
    { nom: "JavaScript/TypeScript", niveau: 95 },
    { nom: "MongoDB", niveau: 85 },
    { nom: "Architecture Logicielle", niveau: 90 },
    { nom: "Gestion de Projet", niveau: 85 }
  ];

  const formations = [
    {
      diplome: "Ingénieur en Informatique",
      etablissement: "École Nationale d'Informatique (ENI) Tuléar",
      annee: "2020",
      mention: "Très Bien"
    },
    {
      diplome: "Formation Continue React/Node.js",
      etablissement: "Certification en ligne",
      annee: "2021",
      mention: "Expert"
    }
  ];

  const experiences = [
    {
      poste: "Co-fondateur & Directeur Technique",
      entreprise: "Spray_Info",
      periode: "2022 - Présent",
      description: "Direction technique, développement de la stratégie technologique, formation des étudiants"
    },
    {
      poste: "Développeur Full Stack",
      entreprise: "Projets freelance",
      periode: "2020 - 2022",
      description: "Développement d'applications web pour diverses entreprises locales"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/formateurs" className="inline-flex items-center space-x-2 text-white hover:text-blue-200 transition-colors mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour aux formateurs</span>
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-64 rounded-lg mb-6">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Heriniaina Jacquino"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">heriniaina@spray-info.mg</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">+261 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Fianarantsoa, Madagascar</span>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                RAMANANJANAHARY Heriniaina Jacquino
              </h1>
              <p className="text-xl text-blue-600 mb-4">
                Co-fondateur & Directeur Technique - Spray_Info
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert en développement logiciel avec plus de 5 ans d'expérience dans la conception et le développement d'applications web modernes. 
                Passionné par l'innovation technologique et la formation, je contribue activement à l'évolution du paysage numérique à Madagascar 
                en formant la nouvelle génération de développeurs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600">Étudiants formés</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expériences */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Expériences Professionnelles</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.poste}</h3>
                    <p className="text-blue-600 font-medium">{exp.entreprise}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{exp.periode}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Compétences Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competences.map((comp, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{comp.nom}</span>
                  <span className="text-sm text-gray-600">{comp.niveau}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${comp.niveau}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Projets Récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((projet, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{projet.title}</h3>
                <p className="text-gray-600 mb-4">{projet.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm px-2 py-1 rounded ${
                    projet.status === 'Terminé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {projet.status}
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Formation</h2>
          <div className="space-y-6">
            {formations.map((form, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{form.diplome}</h3>
                    <p className="text-blue-600">{form.etablissement}</p>
                    <p className="text-gray-600">{form.mention}</p>
                  </div>
                  <span className="text-gray-500 font-medium">{form.annee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHeriniaina;