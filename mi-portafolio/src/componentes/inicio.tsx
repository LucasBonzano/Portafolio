import foto from "../assets/FotoLucas.jpeg";
import { perfil } from "../data/cv";

const Inicio = () => {
  return (
    <section id="inicio" className="pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
      <img
        src={foto}
        alt="Foto de Lucas Bonzano"
        className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-1 ring-rule ring-offset-8 ring-offset-paper"
      />
      <h1 className="mt-10 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
        {perfil.nombre}
      </h1>
      <p className="mt-5 text-lg sm:text-xl font-medium">{perfil.rol}</p>
      <p className="mt-1 text-muted">{perfil.especialidad}</p>

      <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
        <span className="status-ok w-2 h-2 rounded-full bg-ok" aria-hidden="true" />
        Actualmente en Coetec – Banco del Sol, {perfil.ubicacion}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
        <a
          href={perfil.cv}
          download="Lucas-Bonzano-CV.pdf"
          className="px-5 py-2.5 rounded-full bg-ink text-white hover:bg-accent transition-colors"
        >
          Descargar CV
        </a>
        <a
          href={perfil.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border border-rule hover:border-ink transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={perfil.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border border-rule hover:border-ink transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Inicio;
