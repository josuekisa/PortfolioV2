import React from 'react';
import pdp from '../assets/pdp.jpeg';
import { FaReact, FaNodeJs, FaGithub, FaJs, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section className="min-h-screen w-full bg-[#f7f7f7] text-gray-800 relative overflow-hidden py-16 px-6">
      {/* Arrière-plan SVG décoratif */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-10">
        <img src="/assets/leaf-pattern.svg" alt="background deco" className="w-full h-full object-cover" />
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
          <h2 className="text-3xl font-semibold">À propos de moi</h2>
          <p className="text-gray-600">
            Passionné par le développement web, le sport et la nature, je
            construis des interfaces modernes et performantes. Mon objectif ? Allier rigueur technique et design soigné.
          </p>

          {/* Citation */}
          <p className="italic text-green-700 font-medium">
            "La discipline bat la motivation"
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-4 text-3xl text-green-800">
            <FaReact title="React" />
            <FaNodeJs title="Node.js" />
            <FaJs title="JavaScript" />
            <FaGithub title="GitHub" />
            <FaCode title="Tailwind CSS" />
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-center mt-4">
            <div>
              <p className="text-2xl font-bold text-green-600">+10</p>
              <p className="text-sm text-gray-600">Projets terminés</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">+2</p>
              <p className="text-sm text-gray-600">Stacks maîtrisées</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">100%</p>
              <p className="text-sm text-gray-600">Déterminé</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-6">
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition">
              Télécharger CV
            </button>
            <button className="border border-green-700 text-green-700 px-6 py-2 rounded-lg hover:bg-green-700 hover:text-white transition">
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
