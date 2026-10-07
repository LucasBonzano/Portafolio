import Encabezado from "./componentes/encabezado";
import Inicio from "./componentes/inicio";
import SobreMi from "./componentes/sobremi";
import Experiencia from "./componentes/experiencia";
import Conocimientos from "./componentes/conocimientos";
import Estudios from "./componentes/estudios";
import Referencias from "./componentes/referencias";
import Contacto from "./componentes/contacto";

const App = () => {
  return (
    <>
      <Encabezado />
      <main className="mx-auto max-w-3xl px-5">
        <Inicio />
        <SobreMi />
        <Experiencia />
        <Conocimientos />
        <Estudios />
        <Referencias />
        <Contacto />
      </main>
    </>
  );
};

export default App;
