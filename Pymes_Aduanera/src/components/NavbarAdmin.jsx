import '../css/admin/Navbar.css';

const NavbarAdmin = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Pymes Aduanera</div>
      <ul className="navbar-nav">
        <li className="nav-item">Clientes</li>
        <li className="nav-item">Acerca de</li>
        <li className="nav-item">Contacto</li>
        <li className="nav-item">Profile</li>
        <li className="nav-item">Exit</li>
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
