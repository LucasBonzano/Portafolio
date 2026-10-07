import { educacion } from "../data/cv";

const Estudios = () => {
  return (
    <section id="educacion" className="py-16 border-t border-rule">
      <h2 className="section-title">Educación</h2>
      <ul className="space-y-8">
        {educacion.map((e) => (
          <li key={e.institucion} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-6">
            <div>
              <h3 className="text-lg font-bold">{e.institucion}</h3>
              <p className="text-muted">{e.titulo}</p>
            </div>
            <p className="text-sm text-muted sm:text-right shrink-0">{e.periodo}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Estudios;
