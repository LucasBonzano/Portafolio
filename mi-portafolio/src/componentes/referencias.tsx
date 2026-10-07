import { referencias } from "../data/cv";

const Referencias = () => {
  return (
    <section id="referencias" className="py-16 border-t border-rule">
      <h2 className="section-title">Referencias</h2>
      <p className="text-muted mb-6">Jefes y colegas en Banco del Sol.</p>
      <ul className="divide-y divide-rule border-y border-rule">
        {referencias.map((r) => (
          <li key={r.linkedin}>
            <a
              href={r.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-4"
            >
              <span className="text-lg font-semibold group-hover:text-accent transition-colors">
                {r.nombre}
              </span>
              <span className="text-sm text-muted group-hover:text-accent transition-colors">
                Ver en LinkedIn
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Referencias;
