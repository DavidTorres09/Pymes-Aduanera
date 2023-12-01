import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Mi App</div>
      <ul className="navbar-nav">
        <li className="nav-item">Inicio</li>
        <li className="nav-item">Acerca de</li>
        <li className="nav-item">Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;
