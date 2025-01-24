import Navbar from './componentes/navbar.js';
import Inicio from './componentes/inicio.js';
import SobreMi from './componentes/sobremi.js';
import Proyectos from './componentes/proyectos.js';


const App = () => {

  const tecnologias = [
    { nombre: "React", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { nombre: "Node.js", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { nombre: "JavaScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { nombre: "Git", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { nombre: "Django", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { nombre: "Python", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { nombre: "MySQL", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { nombre: "SQL", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { nombre: "HTML", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { nombre: "CSS", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ];
  
  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />
      {/* Contenido principal */}
      <div className="ml-60 flex-1 overflow-hidden">
        <Inicio
          nombre="Lucas Bonzano"
          titulo="Desarrollador Web"
          tecnologias={tecnologias}
        />
        <section id="sobre-mi" className=" bg-white p-8">
          <SobreMi/>
        </section>
        <section id="proyectos" className=" bg-gray-100 p-8">
          <Proyectos/>
        </section>
      </div>
    </div>
  );
};

export default App;

