import React from 'react';
import bg from '../assets/bg2.jpeg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
      id="home"
    >
      {/* Overlay foncé pour lisibilité */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Contenu */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-5xl text-white font-light"
        >
          Bonjour, je m'appelle Josué
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="text-2xl md:text-3xl text-gray-200"
        >
          Développeur Web en recherche d'une Alternance
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4 }}
        >
          <button className="bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded-lg text-white font-medium shadow-md">
            Voir mes projets
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
