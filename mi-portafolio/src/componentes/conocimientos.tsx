import { conocimientos } from "../data/cv";

const Conocimientos = () => {
  return (
    <section id="conocimientos" className="py-16 border-t border-rule">
      <h2 className="section-title">Conocimientos técnicos</h2>
      <dl className="divide-y divide-rule">
        {conocimientos.map((c) => (
          <div key={c.area} className="grid sm:grid-cols-[12rem_1fr] gap-1 sm:gap-6 py-4">
            <dt className="font-semibold">{c.area}</dt>
            <dd className="text-muted">{c.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Conocimientos;
