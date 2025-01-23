import Navbar from './componentes/navbar.js';
import Inicio from './componentes/inicio.js';


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
          descripcion="Soy un estudiante de ing en sistemas y Técnico Superior en Programación, muy apasionado por la tecnología en general, con muchas ganas de aprender y trabajar en equipo."
          tecnologias={tecnologias}
        />
        <section id="sobre-mi" className="h-screen bg-white p-8">
          <h1 className="text-4xl font-bold">Sobre mí</h1>
          <p className="mt-4 text-lg">Conoce más sobre mí aquí.</p>
        </section>
        <section id="proyectos" className="h-screen bg-gray-100 p-8">
          <h1 className="text-4xl font-bold">Proyectos</h1>
          <p className="mt-4 text-lg">
            Estos son algunos de mis proyectos destacados.
          </p>
        </section>
        <section id="contacto" className="h-screen bg-white p-8">
          <h1 className="text-4xl font-bold">Contacto</h1>
          <p className="mt-4 text-lg">
            Puedes contactarme a través de esta sección.
          </p>
        </section>
      </div>
    </div>
  );
};

export default App;

