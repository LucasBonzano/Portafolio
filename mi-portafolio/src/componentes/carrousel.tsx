import React, { useState, useEffect } from "react";

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

  // Desplazamiento automático cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(true); // Avanzar al siguiente elemento
    }, 2000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [selectedIndex]);

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800">Tecnologías que uso:</h1>
      {/* Galería */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${selectedIndex * 33.33}%)`, // Ajustar el porcentaje según la cantidad de elementos
        }}
      >
        {tecnologias.map((tecnologia, index) => (
          <div
            key={index}
            className="w-1/3 flex flex-col items-center justify-center p-8"
            style={{ minWidth: "33.33%" }} // Tres imágenes en total (anterior, actual, siguiente)
          >
            <img
              src={tecnologia.icono}
              alt={tecnologia.nombre}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
            />
            <p className="mt-4 text-lg font-medium text-gray-700">{tecnologia.nombre}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Carousel;
