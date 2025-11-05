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
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#272262] to-[#382971] text-gray-800 backdrop-blur-sm relative overflow-hidden py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-5 text-white">
        À propos de moi
      </h2>

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
          <h2 className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-white to-[#60e1e7f4]">
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
                <div
                  className=" flex  items-center bg-gray-500/40 rounded-md p-3  "
                  key={s.id}
                >
                  <span className="text-white font bold">{s.logo}</span>
                  <span className="ml-2 text-white"> {s.stack}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-6">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500  text-white px-6 py-2 rounded-lg ">
              Voir mes projets{" "}
            </button>
            <button className=" bg-gradient-to-r from-pink-500 to-purple-500  px-6 py-2 rounded-lg text-white ">
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
