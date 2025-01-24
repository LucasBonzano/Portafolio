import React from "react";

interface Estudio {
  titulo: string;
  institucion: string;
  fecha: string;
}
const estudios: Estudio[] = [
    {
      titulo: "Ingeniería en Sistemas de Información",
      institucion: "Universidad Tecnologica Nacional FRC",
      fecha: "2024 - Presente",
    },
    {
      titulo: "Técnico Superior en Programación",
      institucion: "Escuela Técnica Proa Sede San Francisco",
      fecha: "2016 - 2023",
    },
    {
      titulo: "Desarrollador Web Full Stack",
      institucion: "Instituto Superior politécnico de Córdoba",
      fecha: "2023",
    }
  ];

const Estudios = () => {
    return (
      <section className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Formación Académica
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {estudios.map((estudio, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {estudio.titulo}
              </h2>
              <p className="text-gray-600 mt-2">{estudio.institucion}</p>
              <p className="text-gray-500 text-sm mt-1">{estudio.fecha}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default Estudios