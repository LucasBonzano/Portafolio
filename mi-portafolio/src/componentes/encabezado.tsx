const enlaces = [
  { href: "#perfil", texto: "Perfil" },
  { href: "#experiencia", texto: "Experiencia" },
  { href: "#conocimientos", texto: "Conocimientos" },
  { href: "#educacion", texto: "Educación" },
  { href: "#referencias", texto: "Referencias" },
  { href: "#contacto", texto: "Contacto" },
];

const Encabezado = () => {
  return (
    <header className="sticky top-0 z-10 bg-paper/85 backdrop-blur border-b border-rule">
      <nav className="mx-auto max-w-3xl px-5 h-14 flex items-center justify-between gap-6">
        <a href="#inicio" className="font-bold tracking-tight">
          Lucas Bonzano
        </a>
        <ul className="hidden sm:flex items-center gap-6 text-sm text-muted">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a href={e.href} className="hover:text-ink transition-colors">
                {e.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Encabezado;
