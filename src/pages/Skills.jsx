import React from "react";
import { color, motion } from "framer-motion";

// Données des services
const services = [
  {
    id: 1,
    icon: "💻",
    label: "Développement Web",
    text: "Applications web modernes et performantes avec les dernières technologies. De l'idée au déploiement.",
  },
  {
    id: 2,
    icon: "📱",
    label: "Développement Mobile",
    text: "Développement d'applications mobiles natives et cross-platform pour iOS et Android.",
  },
  {
    id: 3,
    icon: "🎨",
    label: "UI/UX",
    text: "Création d'interfaces élégantes et intuitives pour une expérience utilisateur optimale.",
  },
  {
    id: 4,
    icon: "⚡️",
    label: "Optimisation Performance",
    text: "Amélioration des performances et de la vitesse de vos applications existantes.",
  },
  {
    id: 5,
    icon: "🛠️",
    label: "Maintenance & Support",
    text: "Maintenance continue et support technique pour vos projets web et mobiles.",
  },
  {
    id: 6,
    icon: "🚀",
    label: "Conseil Technique",
    text: "Accompagnement et conseil pour vos choix technologiques.",
  },
];

const Skills = () => {
  return (
    <div
      id="services"
      className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1f1a4b] to-[#3b2e81] text-gray-800 relative overflow-hidden"
    >
      <section className="relative flex flex-col items-center justify-center px-6 py-20 md:py-28">
        {/* --- Titre principal --- */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold md:text-5xl mb-6 bg-gradient-to-r from-[#00ffff] to-[#7877c6] bg-clip-text text-transparent">
            Mes Services
          </h2>
          <hr className="w-1/2 border border-[#7877c6]" />
        </div>

        {/* --- Grille de cartes --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
          {services.map((s) => (
            <motion.div
              key={s.id}
              initial="initial"
              whileHover="hovered"
              variants={{
                initial: {
                  rotateY: 0,
                  rotateX: 0,
                  boxShadow: "0 0 0px rgba(0,0,0,0)",
                },
                hovered: {
                  rotateY: 12,
                  rotateX: 12,
                  boxShadow: "0 0 25px rgba(124,58,237,0.5)",
                },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative flex flex-col items-center justify-between hover:border-1 hover:brightness-100 hover:border-[#ffffff3b] bg-[#1a202c] rounded-2xl w-sm p-6 shadow-md hover:shadow-xl h-[340px] overflow-hidden"
            >
              {/* Ligne animée */}
              <motion.span
                variants={{
                  initial: {
                    scaleX: 0,
                    opacity: 0,
                    boxShadow: "0 0 0px rgba(0,0,0,0)",
                  },
                  hovered: {
                    scaleX: 1,
                    opacity: 1,
                    boxShadow: "0 0 25px rgba(124,58,237,0.5)",
                  },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full  h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
              />

              {/* Icône */}
              <motion.div
                variants={{
                  initial: { scale: 1 },
                  hovered: { scale: 1.15 },
                }}
                transition={{ duration: 0.3 }}
                className="bg-[#5473b2]/30 rounded-2xl mt-5 mb-5 p-5"
              >
                <p className="text-white text-4xl font-bold">{s.icon}</p>
              </motion.div>

              {/* Texte */}
              <motion.p
                variants={{
                  hovered: { color: "#a855f7" },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mt-2 text-lg font-bold  text-white text-center"
              >
                {s.label}
              </motion.p>
              <p className="text-center text-white text-sm mt-3 mb-5 flex-1 line-clamp-3">
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
