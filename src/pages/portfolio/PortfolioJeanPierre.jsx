import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Brain, Award, BookOpen, ExternalLink, Github, Linkedin } from 'lucide-react';

const PortfolioJeanPierre = () => {
  const projets = [
    {
      title: "Transformation Digitale - Société WBS",
      description: "Accompagnement complet dans la digitalisation des processus et formation des équipes",
      technologies: ["Stratégie", "Formation", "Change Management", "Digital Tools"],
      status: "Terminé"
    },
    {
      title: "Conseil en Organisation - ManTek",
      description: "Restructuration organisationnelle et optimisation des processus métier",
      technologies: ["Process Design", "Organisation", "Leadership", "Coaching"],
      status: "Terminé"
    },
    {
      title: "Développement Spray_idea",
      description: "Création et développement du cabinet de conseil de Spray_Info",
      technologies: ["Business Development", "Stratégie", "Partenariats", "Consulting"],
      status: "En cours"
    }
  ];

  const competences = [
    { nom: "Conseil Stratégique", niveau: 95 },
    { nom: "Transformation Digitale", niveau: 90 },
    { nom: "Leadership & Coaching", niveau: 92 },
    { nom: "Gestion de Projet", niveau: 88 },
    { nom: "Communication", niveau: 95 },
    { nom: "Développement Commercial", niveau: 85 }
  ];

  const formations = [
    {
      diplome: "Ingénieur en Informatique",
      etablissement: "École Nationale d'Informatique (ENI) Tuléar",
      annee: "2020",
      mention: "Bien"
    },
    {
      diplome: "Formation en Management",
      etablissement: "Formation continue",
      annee: "2021",
      mention: "Expert"
    },
    {
      diplome: "Certification PMP",
      etablissement: "Project Management Institute",
      annee: "2022",
      mention: "Certifié"
    }
  ];

  const experiences = [
    {
      poste: "Co-fondateur & Expert Conseil",
      entreprise: "Spray_Info",
      periode: "2022 - Présent",
      description: "Développement du cabinet de conseil, accompagnement des entreprises, formation en développement personnel"
    },
    {
      poste: "Consultant Indépendant",
      entreprise: "Diverses entreprises",
      periode: "2020 - 2022",
      description: "Conseil en organisation, accompagnement au changement, formation en management"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/formateurs" className="inline-flex items-center space-x-2 text-white hover:text-purple-200 transition-colors mb-4">
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
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-64 rounded-lg mb-6">
                <img 
                  src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Jean Pierre Lignisa"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">jean-pierre@spray-info.mg</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">+261 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">Fianarantsoa, Madagascar</span>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <a href="#" className="text-purple-600 hover:text-purple-800">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-purple-600 hover:text-purple-800">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                LIGNISA Jean Pierre
              </h1>
              <p className="text-xl text-purple-600 mb-4">
                Co-fondateur & Expert Conseil - Spray_Info
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert en transformation digitale et conseil stratégique avec plus de 5 ans d'expérience dans l'accompagnement 
                des entreprises. Spécialisé dans le développement organisationnel, le leadership et la communication, 
                j'aide les organisations à évoluer et à s'adapter aux défis du monde moderne.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">25+</div>
                  <div className="text-sm text-gray-600">Missions conseil</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">Personnes formées</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">7+</div>
                  <div className="text-sm text-gray-600">Entreprises partenaires</div>
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
                    <p className="text-purple-600 font-medium">{exp.entreprise}</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Compétences Professionnelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competences.map((comp, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{comp.nom}</span>
                  <span className="text-sm text-gray-600">{comp.niveau}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
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
                    <span key={techIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Formation & Certifications</h2>
          <div className="space-y-6">
            {formations.map((form, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{form.diplome}</h3>
                    <p className="text-purple-600">{form.etablissement}</p>
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

export default PortfolioJeanPierre;