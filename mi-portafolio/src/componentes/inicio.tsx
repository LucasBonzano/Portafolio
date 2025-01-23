import React from "react";
import Carousel from "./carrousel";

interface Tecnologia {
  nombre: string;
  icono: string;
}

interface InicioProps {
  nombre: string;
  descripcion: string;
  tecnologias: Tecnologia[];
}

const Inicio: React.FC<InicioProps> = ({ nombre, descripcion, tecnologias }) => {
  return (
    <section className="h-screen bg-gray-100 text-left ">
      {/* Nombre y descripción */}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-800">{nombre}</h1>
        <p className="mt-4 text-lg text-gray-600">{descripcion}</p>
      </div>

      {/* Galería */}
      <div className="w-full">
        <Carousel tecnologias={tecnologias} />
      </div>
    </section>
  );
};

export default Inicio;
