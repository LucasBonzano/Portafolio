import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full bg-gray-800 text-white w-60 flex flex-col justify-between py-8">
      <div className="flex flex-col items-center">
        <ul className="space-y-6">
          <li>
            <a href="#inicio" className="text-lg hover:text-teal-400">
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobre-mi" className="text-lg hover:text-teal-400">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyectos" className="text-lg hover:text-teal-400">
              Proyectos
            </a>
          </li>
        </ul>
      </div>
      <footer className="text-center">
        <p className="text-sm">&copy; 2025 Mi Portafolio</p>
      </footer>
    </nav>
  );
};

export default Navbar;
