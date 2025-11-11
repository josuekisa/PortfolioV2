import React from "react";
import Netflix from "../assets/streaming-card.png";
import wod from "../assets/wod-screen.png";
import bjj from "../assets/screen1.png";
import bg from "../assets/black-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "Générateur de WOD",
    description:
      "Application web pour créer des entraînements de CrossFit personnalisés.",
    tech: "React, Express, MongoDB",
    image: wod, // Mets ici le chemin de ta capture d'écran
    link: "https://workout-generator.xyz",
  },
  {
    id: 2,
    title: "Plateforme Streaming",
    description:
      "Mini clone de Netflix pour gérer des vidéos et des utilisateurs.",
    tech: "React, Node.js, MongoDB",
    image: Netflix,
    link: "https://github.com/josuekisa/streaming-card/tree/main",
  },
  {
    id: 3,
    title: "Site JJB",
    description: "Présentation de mon site sur le JJB",
    tech: "Vite, TailwindCSS",
    image: bjj,
    link: "https://www.faixa-branca.site",
  },
];

const Projects = () => {
  return (
    <section
      id="project"
      className=" flex flex-col items-center gap-10 justify-center min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-gray-800 py-20 px-6 relative overflow-hidden"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold md:text-5xl mb-6 bg-gradient-to-r from-[#00ffff] to-[#7877c6] bg-clip-text text-transparent">
          Mes Projets
        </h2>
        <hr className="w-1/2 border border-[#7877c6]" />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop
        className="max-w-6xl mt-5 w-full"
      >
        {" "}
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="flex flex-col md:flex-row bg-[#1a202c] rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full md:w-1/2"
              />
              <div className="flex flex-col justify-center p-6 text-white w-full md:w-1/2">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <p className="mt-2 text-sm text-cyan-400">{project.tech}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/*** stack a droite */}
      </Swiper>
    </section>
  );
};

export default Projects;
