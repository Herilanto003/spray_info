import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Développeur  Android",
      description:
        "Création d’une application web et mobile Android pour la gestion de la vente d’eau.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Next.js", "Flutter", "SQLite"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Développeur Web ",
      description:
        "Développement d’un tableau de bord de suivi : ventes, facturation, synchronisation locale et serveur.",
      image:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Reactjs", "Express.js", "PostgreSQL"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Technicien en maintenance réseau ",
      description:
        "Maintenance et optimisation du réseau local de l’établissement.",
      image:
        "https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [""],
      category: "RESEAU",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Technicien en maintenance",
      description:
        "Sécurisation de la connexion Internet et résolution de pannes réseau.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [""],
      category: "RESEAU",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Technicien en maintenance réseau",
      description: "Amélioration du système de communication interne.",
      image:
        "data:image/jpeg;base64,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",
      technologies: [""],
      category: "RESEAU",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

  const categories = [
    { key: "all", label: "Tous", icon: <Globe className="h-4 w-4" /> },
    { key: "web", label: "Web", icon: <Code className="h-4 w-4" /> },
    {
      key: "mobile",
      label: "Mobile",
      icon: <Smartphone className="h-4 w-4" />,
    },
    { key: "RESEAU", label: "Reseau", icon: <Database className="h-4 w-4" /> },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations les plus significatives
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm font-medium">Voir le projet</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
