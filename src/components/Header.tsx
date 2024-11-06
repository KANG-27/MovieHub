function Header() {
  return (
    <div className="w-full border-b-2 border-b-cyan-950 mb-10">
      <nav className="flex justify-between m-5">
        <ul className="flex gap-10">
          <li>Inicio</li>
          <li>Mi lista</li>
          <li>Populares</li>
        </ul>
        <div>
          <p>buscar</p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
