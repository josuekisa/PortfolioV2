import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-green-700 text-white text-center py-4 px-6">
      <p className="text-sm">
        © {new Date().getFullYear()} Josué Kisa. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
