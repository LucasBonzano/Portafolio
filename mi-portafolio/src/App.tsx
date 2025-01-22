import React from "react";
import Navbar from './componentes/Navbar.jsx';
import Inicio from './componentes/Inicio.jsx';


const App = () => {

  const tecnologias = [
    { nombre: "React", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { nombre: "Node.js", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { nombre: "JavaScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { nombre: "Git", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />
      {/* Contenido principal */}
      <div className="ml-60 flex-1">
        <section id="inicio" className="h-screen bg-gray-100 p-8">
        <Inicio
          nombre="Lucas Bonzano"
          descripcion="Soy un estudiante de ing en sistemas y Tecnico superior en Programacion, muy apasionado por la tecnologia en general, con muchas de aprender y trabajar en equipo."
          tecnologias={tecnologias}
        />
        </section>
        <section id="sobre-mi" className="h-screen bg-white p-8">
          <h1 className="text-4xl font-bold">Sobre mí</h1>
          <p className="mt-4 text-lg">Conoce más sobre mí aquí.</p>
        </section>
        <section id="proyectos" className="h-screen bg-gray-100 p-8">
          <h1 className="text-4xl font-bold">Proyectos</h1>
          <p className="mt-4 text-lg">
            Estos son algunos de mis proyectos destacados.
          </p>
        </section>
        <section id="contacto" className="h-screen bg-white p-8">
          <h1 className="text-4xl font-bold">Contacto</h1>
          <p className="mt-4 text-lg">
            Puedes contactarme a través de esta sección.
          </p>
        </section>
      </div>
    </div>
  );
};

export default App;

