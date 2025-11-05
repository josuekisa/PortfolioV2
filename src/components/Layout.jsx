import React from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const gradients = {
    "/": "from-[#0f172a] via-[#1e1b4b] to-[#312e81]", // home
    "/about": "from-[#0f172a] via-[#272262] to-[#382971]", // une touche plus violette
    "/projects": "from-[#0f172a] via-[#1f1a4b] to-[#3b2e81]", // un peu plus bleue
    "/contact": "from-[#0f172a] via-[#1e1b4b] to-[#4b2e81]", // légèrement rosée
  };

  const gradient = gradients[location.pathname] || gradients["/"];

  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-br ${gradient} text-white transition-all duration-700`}
    >
      {children}
    </div>
  );
};

export default Layout;
