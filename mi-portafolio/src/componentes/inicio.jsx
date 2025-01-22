import React from "react";

const Inicio = ({ nombre, descripcion, tecnologias }) => {
  return (
    <section className="h-screen flex flex-col items-start justify-start bg-gray-100 text-left p-8">
      {/* Nombre */}
      <h1 className="text-4xl font-bold text-gray-800">{nombre}</h1>

      {/* Descripción */}
      <p className="mt-4 text-lg text-gray-600">{descripcion}</p>

      {/* Tecnologías que uso */}
      <div className="w-full mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tecnologías que uso:</h2>

        {/* Contenedor Flexbox */}
        <div className="flex space-x-8 overflow-x-auto py-4">
          {tecnologias.map((tecnologia, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={tecnologia.icono}
                alt={tecnologia.nombre}
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-700 font-medium">{tecnologia.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inicio;
