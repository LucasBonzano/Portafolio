import React, { useState } from "react";

interface Tecnologia {
  nombre: string;
  icono: string;
}

interface CarouselProps {
  tecnologias: Tecnologia[];
}

const Carousel: React.FC<CarouselProps> = ({ tecnologias }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectNewImage = (next: boolean) => {
    const condition = next
      ? selectedIndex < tecnologias.length - 3
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : tecnologias.length - 3;
    setSelectedIndex(nextIndex);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-gray-800">Tecnologias que uso:</h1>
      {/* Galería */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${selectedIndex * 33.33}%)`, // Ajustar el porcentaje según la cantidad de elementos
        }}
      >
        {/* Imagen anterior */}
        {tecnologias.map((tecnologia, index) => (
          <div
            key={index}
            className="w-1/3 flex flex-col items-center justify-center p-8"
            style={{ minWidth: "33.33%" }} // Tres imágenes en total (anterior, actual, siguiente)
          >
            <img
              src={tecnologia.icono}
              alt={tecnologia.nombre}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            />
            <p className="mt-4 text-lg font-medium text-gray-700">{tecnologia.nombre}</p>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={() => selectNewImage(false)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
      >
        {"<"}
      </button>
      <button
        onClick={() => selectNewImage(true)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
