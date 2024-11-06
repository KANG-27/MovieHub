function Header() {
  return (
    <div className="w-full border-b-2 border-b-cyan-950 mb-10">
      <nav className="flex justify-between m-5">
        <ul className="flex gap-10">
          <li><a href="">Inicio</a></li>
          <li><a href="">Mi lista</a></li>
          <li><a href="">Populares</a></li>
        </ul>
        <div>
          <p>buscar</p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
