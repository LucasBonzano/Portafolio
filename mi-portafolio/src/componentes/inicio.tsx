import React from "react";
import Carousel from "./carrousel";
import DescargarCV from "./descargarcv";

interface Tecnologia {
  nombre: string;
  icono: string;
}

interface InicioProps {
  nombre: string;
  titulo: string;
  tecnologias: Tecnologia[];
}

const Inicio: React.FC<InicioProps> = ({ nombre, titulo, tecnologias }) => {
  return (
    <section id="inicio" className="bg-gray-800 text-center flex flex-col justify-center aling-center">
      {/* Nombre y descripción */}
      <div className="p-8 flex items-center justify-center flex-row">
        <img
            src="src\assets\FotoLucas.jpeg"
            alt="Foto de Lucas Bonzano"
            className="rounded-full shadow-lg w-48 h-48 lg:w-64 lg:h-64"
        />
        <div className="flex flex-col">
          <h1 className="mt-4 text-4xl text-yellow-600">{titulo}</h1>
          <h3 className="text-4xl font-bold text-white">{nombre}</h3>
          <p className="text-gray-600">Full stack React & Django</p>
          <div className="">
            <span className="sm:m-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-yellow-500 hover:bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <a href="https://www.linkedin.com/in/lucas-miguel-bonzano-a2b3a0271/">Linked in</a>
              </button>
            </span>
            <span className="sm:m-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-yellow-500 hover:bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <a href="https://github.com/LucasBonzano">Git Hub</a>
              </button>
            </span>
            <DescargarCV/>
          </div>
        </div>
      </div>

      {/* Galería */}
      <div className="w-full">
        <Carousel tecnologias={tecnologias} />
      </div>
    </section>
  );
};

export default Inicio;
