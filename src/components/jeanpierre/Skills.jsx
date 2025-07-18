import React, { useState, useEffect, useRef } from "react";
import { Code, Database, Server, Palette, Zap, Globe } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef < HTMLElement > null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "HTML5", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "javaScript", level: 85 },
      ],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Expressjs", level: 92 },
        { name: "java", level: 88 },
        { name: "SpringBoot", level: 85 },
        { name: "Laravel", level: 95 },
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database",
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "SQLite", level: 80 },
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Réseau",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Cisco", level: 85 },
        { name: "Mikrotik ", level: 80 },
        { name: "PfSens", level: 88 },
        { name: "Firewall , VPN", level: 92 },
      ],
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Systèmes & Serveurs",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Ubuntu,Debian", level: 85 },
        { name: "serveur , desktop", level: 90 },
        { name: "VirtualBox", level: 95 },
        { name: "VMware)", level: 80 },
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cybersécurité",
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Splunk , ELK stack", level: 95 },
        { name: "Nmap", level: 90 },
        { name: "Metasploit", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions
            exceptionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white ml-4">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${skillIndex * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
