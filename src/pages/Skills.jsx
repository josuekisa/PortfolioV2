import React from "react";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const services = [
    {
      id: 1,
      icon: "💻",
      label: "Développement Web",
      text: " Applications web modernes et  performantes avec les dernières  technologies.De l'idée au déploiement.",
    },
    {
      id: 2,
      label: "Développement Mobile",

      icon: "📱",
      text: "Développement d'application mobile natives et cross-platform pour iOS et Android.",
    },
    {
      id: 3,
      label: "UI/UX",

      icon: "🎨",
      text: "Applications web modernes et  performantes avec les dernières  technologies.De l'idée au déploiement.",
    },
    {
      id: 4,
      label: "Optimisation Performance",

      icon: "⚡️",
      text: "Amélioration des performances et de la vitesse de vos applications existantes",
    },
    {
      id: 5,
      label: "Maintenance & Support",

      icon: "🛠️",
      text: "Maintenance continue et support technique pour vos projets web et mobiles.",
    },
    {
      id: 6,
      label: "Conseil techniques",

      icon: "🚀",
      text: "Accompagnement et conseil pour vos choix technologiques",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1f1a4b] to-[#3b2e81] text-gray-800  relative overflow-hidden">
      {/* Section principale */}
      <section className="relative z-1  flex flex-col items-center justify-center px-6 py-20 md:py-28">
        {/* Titre principal */}
        <div className="flex flex-col items-center ">
          {" "}
          <h2
            className="text-4xl font-bold md:text-5xl  mb-6 bg-gradient-to-r from-[#00ffff] to-[#7877c6] bg-clip-text text-transparent
        "
          >
            Mes Services
          </h2>
          <hr className="w-1/2 border-1 border-[#7877c6] " />
        </div>

        {/* Sous-titre */}
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl text-center">
          Voici les compétences que j’ai acquises au fil de mes projets et
          formations.
        </p>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((s) => (
            <motion.div
              key={s.id}
              whileHover={{
                rotateY: 15,
                rotateX: 15,
              }}
              transition={{ duration: 0.05 }}
              className="flex flex-col items-center justify-between bg-[#1a202c] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 h-[340px] w-sm"
            >
              <div className="bg-[#5473b2]/30 rounded-2xl mt-5 mb-5">
                <p className="text-white text-4xl p-5">{s.icon}</p>
              </div>
              <p className="mt-4 text-lg font-bold text-white">{s.label}</p>
              <p className="text-center text-white mt-5 mb-5 flex-1 line-clamp-3">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
