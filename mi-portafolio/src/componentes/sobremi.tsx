import React from "react";
import Estudios from "./estudios";

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="bg-white px-6 lg">
      <div className="max-w-6xl mx-auto gap-12 ">
        {/* Imagen */}
        <div className="flex justify-center items-center flex-col ">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre mí</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Soy Lucas Bonzano, un estudiante de grado superior de la carrera ingenieria en sistemas, muy apasionado desde chico por toda la tecnologia y cuento con muchas ganas de mejorar mis conocimientos y trabajar en equipo para ser el mejor desarrollador y la mejor persona que pueda ser.
            Ademas de programar me gustan mucho los videojuegos y todo lo que tenga algo de logica en el medio como el ajedrez o las matematicas.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Estudios y Certificaciones:</h1>
          <Estudios/>
        </div>

        {/* Texto */}
        <div className="flex mb-4">
          <div className="m-2 w-[50%]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Hard Skills:
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Desarrollo web (React, Node.js, Django)</li>
              <li>Bases de datos (MySQL, SQL)</li>
              <li>Lenguajes (Python, JavaScript)</li>
              <li>Trabajo en equipo, Pensamiento Crítico y resolución de problemas</li>
            </ul>
          </div>
          <div className="m-2 w-[50%]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Soft Skills:
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Trabajo en equipo</li>
              <li>Pensamiento Crítico</li>
              <li>Resolución de problemas</li>
              <li>Comunicacion Efectiva</li>
              <li>autoaprendizaje</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
