import { experiencia } from "../data/cv";

// Cada logro se dibuja como un job dentro de una cadena: nodos unidos por una línea vertical.
const Experiencia = () => {
  return (
    <section id="experiencia" className="py-16 border-t border-rule">
      <h2 className="section-title">Experiencia</h2>
      {experiencia.map((exp) => (
        <article key={exp.empresa}>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-2xl font-bold tracking-tight">{exp.empresa}</h3>
            <p className="text-sm text-muted inline-flex items-center gap-2">
              {exp.actual && <span className="w-2 h-2 rounded-full bg-ok" aria-hidden="true" />}
              {exp.periodo}
            </p>
          </div>
          <p className="mt-1 font-medium text-accent">{exp.puesto}</p>

          <ol className="mt-8 relative">
            {exp.logros.map((logro, i) => (
              <li key={i} className="relative pl-8 pb-6 last:pb-0">
                {i < exp.logros.length - 1 && (
                  <span className="absolute left-[5px] top-4 bottom-0 w-px bg-rule" aria-hidden="true" />
                )}
                <span
                  className="absolute left-0 top-[0.45rem] w-[11px] h-[11px] rounded-full border-2 border-accent bg-paper"
                  aria-hidden="true"
                />
                <p className="text-muted leading-relaxed">{logro}</p>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </section>
  );
};

export default Experiencia;
