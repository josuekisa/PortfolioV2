import React from "react";
import bg from "../assets/bg2.jpeg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      className="h-screen w-full bg-gradient-to-br from-[#1a1a2e]  to-[#0f3460] before:absolute before:inset-0 before:bg-gradient-to-l before:from-[#78dbc6]/30 before:to-[#ff77c6]
      before:blur-3xl before:opacity-50 "
      id="home"
    >
      {/* Overlay foncé pour lisibilité */}

      {/* Contenu */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 space-y-6">
        <motion.p
          animate={{ y: [0, -15] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          className="text-white rounded-full bg-white/5 p-5  border-1 border-white/40 "
        >
          ✨ Disponible pour de nouveaux projets
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-4xl md:text-5xl text-white "
        >
          Josué Kisa
        </motion.h1>

        <motion.h2 className=" font-bold text-transparent bg-clip-text text-4xl bg-gradient-to-tr brightness-120 from-[#4299e1]  to-white ">
          Developpeur Freelance
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="text-2xl md:text-3xl  text-gray-200"
        >
          Développeur passionné spécialisé en applications web modernes et
          performantes
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4 }}
        >
          <div className=" space-x-3 ">
            {" "}
            <button
              className="  bg-[#4299e1] hover:scale-105  hover:brightness-120
   
     transition p-4 rounded-full  text-white font-medium shadow-md"
            >
              Discutons de votre projet
            </button>
            <button className="bg-[#4299e1] hover:scale-105 hover:brightness-120 transition p-4 rounded-full text-white font-medium shadow-md">
              Voir mes réalisations
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
