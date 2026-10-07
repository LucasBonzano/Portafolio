import { perfil } from "../data/cv";

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 border-t border-rule text-center">
      <h2 className="section-title">Contacto</h2>
      <p className="text-2xl sm:text-3xl font-bold tracking-tight">¿Hablamos?</p>
      <p className="mt-3 text-muted">Escribime por LinkedIn o mirá mi trabajo en GitHub.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
        <a
          href={perfil.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full bg-ink text-white hover:bg-accent transition-colors"
        >
          Escribirme en LinkedIn
        </a>
        <a
          href={perfil.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border border-rule hover:border-ink transition-colors"
        >
          Ver GitHub
        </a>
      </div>
      <p className="mt-16 text-sm text-muted">
        © {new Date().getFullYear()} Lucas Miguel Bonzano
      </p>
    </section>
  );
};

export default Contacto;
