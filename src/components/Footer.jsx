import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-white text-gray-700 pt-10 pb-6 mt-20">
      
      {/* Ligne de séparation */}
      <div className="border-t border-green-300 mb-8 mx-10"></div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo ou Titre */}
        <div className="text-xl font-semibold text-green-700">
          Josué.dev
        </div>

        {/* Navigation rapide */}
        <ul className="flex space-x-6 text-sm text-gray-600">
          <li className="hover:text-green-700 transition"><a href="#">Accueil</a></li>
          <li className="hover:text-green-700 transition"><a href="#">Projets</a></li>
          <li className="hover:text-green-700 transition"><a href="#">Contact</a></li>
        </ul>

        {/* Réseaux sociaux */}
        <div className="flex space-x-6 text-2xl text-green-700">
          <a href="#" className="hover:text-green-800 transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-green-800 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:tonmail@example.com" className="hover:text-green-800 transition">
            <FaEnvelope />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Josué. Tous droits réservés.
      </div>

    </footer>
  );
};

export default Footer;
