
const DescargarCV = () => {
  return (
    <div className="flex items-center justify-center p-3">
      <a
        href="public\CV Bonzano Lucas.pdf" // Ruta al archivo dentro de la carpeta "public"
        download="Lucas-Bonzano-CV.pdf" // Nombre del archivo al descargar
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default DescargarCV;
