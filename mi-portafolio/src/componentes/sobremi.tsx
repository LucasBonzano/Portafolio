import { competencias, perfil } from "../data/cv";

const SobreMi = () => {
  return (
    <section id="perfil" className="py-16 border-t border-rule">
      <h2 className="section-title">Perfil profesional</h2>
      <p className="text-xl sm:text-2xl leading-relaxed text-ink/90">{perfil.resumen}</p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {competencias.map((c) => (
          <li key={c} className="px-3 py-1 rounded-full bg-white border border-rule text-sm text-muted">
            {c}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SobreMi;
