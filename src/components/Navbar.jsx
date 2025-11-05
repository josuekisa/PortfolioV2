// Navbar.jsx
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#1a202c] backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-white font-bold text-xl">Josué</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-white font-medium text-base">
          <a href="#home" className="hover:text-green-700 transition">
            Accueil
          </a>
          <a href="#about" className="hover:text-green-700 transition">
            Services
          </a>
          <a href="#projects" className="hover:text-green-700 transition">
            Projets
          </a>

          <a href="#contact" className="hover:text-green-700 transition">
            Contact
          </a>
        </nav>

        {/* Burger menu */}
        <div
          className="md:hidden text-green-700 text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-green-100 border-t border-green-200 px-6 py-4 space-y-4">
          <a href="#home" className="block text-gray-800">
            Accueil
          </a>
          <a href="#about" className="block text-gray-800">
            À propos
          </a>
          <a href="#projects" className="block text-gray-800">
            Projets
          </a>
          <a href="#skills" className="block text-gray-800">
            Compétences
          </a>
          <a href="#contact" className="block text-gray-800">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
