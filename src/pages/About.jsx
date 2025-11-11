import React from "react";
import pdp from "../assets/pdp.jpeg";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJs,
  FaCode,
  FaSymfony,
  FaDocker,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { color, easeOut, motion } from "framer-motion";

const About = () => {
  const stack = [
    {
      id: 1,
      logo: <FaReact />,
      stack: "React",
    },
    {
      id: 2,
      logo: <FaNodeJs />,
      stack: "Node.js",
    },
    {
      id: 3,
      logo: <FaReact />,
      stack: "React Native",
    },
    {
      id: 4,
      logo: <FaSymfony />,
      stack: "Symfony",
    },
    {
      id: 5,
      logo: <SiExpress />,
      stack: "Express",
    },
    {
      id: 6,
      logo: <SiMongodb />,
      stack: "Mongo",
    },
  ];
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#272262] to-[#382971] text-gray-800 backdrop-blur-sm relative overflow-hidden py-16 px-6"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold md:text-5xl mb-6 bg-gradient-to-r from-[#00ffff] to-[#7877c6] bg-clip-text text-transparent"></h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Photo */}
        <div className="w-full md:w-1/2">
          <img
            src={pdp}
            alt="Josué en montagne"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Contenu */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold  bg-gradient-to-r bg-clip-text text-transparent from-white to-[#60e1e7f4]">
            Développeur passioné
          </h2>
          <p className="text-gray-300">
            Passionné par le développement web, le sport et la nature, je
            construis des interfaces modernes et performantes. Mon objectif ?
            Allier rigueur technique et design soigné.
          </p>
          <div>
            <h3 className="text-white font-bold mb-3">🎓 Mon parcours</h3>

            <p className="text-gray-300">
              Diplômé en informatique, j'ai commencé ma carrière en agence avant
              de me lancer en freelance. Cette expérience m'a permis de
              travailler sur des projets variés, du startup innovante aux
              grandes entreprises.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">💡 Ma philosophie</h3>
            <p className="text-gray-300">
              Je crois en la simplicité et l'efficacité. Chaque ligne de code
              doit avoir un but, chaque interface doit être intuitive. Mon
              objectif : créer des solutions qui font vraiment la différence
              pour vos utilisateurs.
            </p>
          </div>
          {/* Tech stack */}
          <div>
            <h3 className="text-white font-bold mb-3">🛠️ Stacks utilisés</h3>

            <div className="grid grid-cols-3 gap-4">
              {stack.map((s) => (
                <motion.div
                  whileHover="hovered"
                  initial="initial"
                  variants={{
                    initial: { scale: 1, boxShadow: "0 0 0px rgba(0,0,0,0)" },
                    hovered: {
                      scale: 1.08,
                      boxShadow: "0 0 23px rgba(124,58,237,255)",
                    },
                  }}
                  transition={{ duration: 0.3 }}
                  className=" flex  items-center bg-gray-500/40 rounded-md p-3  "
                  key={s.id}
                >
                  <motion.span
                    variants={{
                      hovered: { color: "#a855f7" },
                    }}
                    transition={{ duration: 0.5, ease: easeOut }}
                    className="text-white font bold"
                  >
                    {s.logo}
                  </motion.span>
                  <motion.p
                    variants={{
                      hovered: { color: "#a855f7" },
                    }}
                    transition={{ duration: 1.3, ease: easeOut }}
                    className="ml-2 text-white"
                  >
                    {" "}
                    {s.stack}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="bg-gradient-to-r from-pink-500 to-purple-500  text-white px-6 py-2 rounded-lg "
            >
              Voir mes projets
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="bg-gradient-to-r from-pink-500 to-purple-500  text-white px-6 py-2 rounded-lg "
            >
              Me contacter
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
