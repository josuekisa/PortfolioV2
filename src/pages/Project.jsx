import React from 'react';
import Netflix from '../assets/streaming-card.png'
import wod from '../assets/wod-screen.png'
import bjj from '../assets/screen1.png'

const projects = [
  {
    title: "Générateur de WOD",
    description: "Application web pour créer des entraînements de CrossFit personnalisés.",
    tech: "React, Express, MongoDB",
    image: wod, // Mets ici le chemin de ta capture d'écran
    link: "#",
  },
  {
    title: "Plateforme Streaming",
    description: "Mini clone de Netflix pour gérer des vidéos et des utilisateurs.",
    tech: "React, Node.js, MongoDB",
    image: Netflix,
    link: "#",
  },
  {
    title: "Site JJB",
    description: "Présentation de mon site sur le JJB",
    tech: "Vite, TailwindCSS",
    image: bjj,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen w-full bg-[#f7f7f7] text-gray-800 py-20 px-6 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Titre */}
        <h2 className="text-4xl font-light tracking-wide text-center mb-12">Mes Projets</h2>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-green-100 border border-green-300 rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md h-40 w-full object-cover mb-4"
              />
              <h3 className="text-2xl font-semibold text-green-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-center mb-2">{project.description}</p>
              <p className="text-sm text-green-700 font-medium mb-4">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition"
              >
                Voir Projet
              </a>
            </div>
          ))}
        </div>

        {/* Bouton pour plus de projets */}
        <div className="mt-16">
          <a
            href="#"
            className="border border-green-700 text-green-700 py-3 px-8 rounded-lg hover:bg-green-700 hover:text-white transition"
          >
            Voir tous mes projets
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
