import React from 'react'
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiVite } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="min-h-screen w-full bg-[#f7f7f7] text-gray-800  relative overflow-hidden">
      {/* Décor d'arrière-plan décoratif en SVG */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-10">
        <img src="/assets/leaf-pattern.svg" alt="background deco" className="w-full h-full object-cover" />
      </div>

      {/* Section principale */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 py-20 md:py-28">
        {/* Titre principal */}
        <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
          Mes Compétences
        </h2>

        {/* Sous-titre */}
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl text-center">
          Voici les compétences que j’ai acquises au fil de mes projets et formations.
        </p>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Carte compétence */}
          <div className="flex flex-col items-center bg-green-100 border border-green-300 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-green-300 p-6 rounded-full">
              <SiJavascript className="text-white text-7xl" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">JavaScript</p>
          </div>

          <div className="flex flex-col items-center bg-green-100 border border-green-300 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-green-300 p-6 rounded-full">
              <FaReact className="text-white text-7xl" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">React</p>
          </div>

          <div className="flex flex-col items-center bg-green-100 border border-green-300 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-green-300 p-6 rounded-full">
              <FaNodeJs className="text-white text-7xl" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">Node.js</p>
          </div>

          <div className="flex flex-col items-center bg-green-100 border border-green-300 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-green-300 p-6 rounded-full">
              <SiTailwindcss className="text-white text-7xl" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center bg-green-100 border border-green-300 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-green-300 p-6 rounded-full">
              <SiTypescript className="text-white text-7xl" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">TypeScript</p>
          </div>

          <div className="flex flex-col items-center bg-green-100 border border-green-300 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-green-300 p-6 rounded-full">
              <SiExpress className="text-white text-7xl" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">Express.js</p>
          </div>

          <div className="flex flex-col items-center bg-green-100 border border-green-300 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-green-300 p-6 rounded-full">
              <SiMongodb className="text-white text-7xl" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">MongoDB</p>
          </div>

          <div className="flex flex-col items-center bg-green-100 border border-green-300 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-green-300 p-6 rounded-full">
              <SiVite className="text-white text-7xl" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">Vite</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills;
