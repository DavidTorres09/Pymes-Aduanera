import '../css/admin/Navbar.css';

const NavbarAdmin = () => {
  return (
    <>
     <div className="navbar-container">
      <nav className="navbar">
        <img src="https://cdn-icons-png.flaticon.com/512/1996/1996005.png" alt="Logo de la empresa" className="logo" />
        <div className="navbar-brand">Pymes Aduanera</div>
        <ul className="navbar-nav">
          {/* Registrar clientes, ver  */}
          <li className="nav-item">Clientes</li> 
          {/* Soporte clientes */}
          <li className="nav-item">Tickets</li> 
          {/* Paqueteria */}
          <li className="nav-item">Paqueteria</li>
          {/* Cotizaciones */}
          <li className="nav-item">Cotizaciones</li>
          {/* Importaciones/Exportaciones */}
          <li className="nav-item">Imp./Exp.</li>
          {/* Revision */}
          <li className="nav-item">Revision</li>
          {/* Seguimiento */}
          <li className="nav-item">Mi tracking</li>
          {/* Perfil */}
          <li className="nav-item">Profile</li>
          {/* Salir */}
          <li className="nav-item">Salir</li>
        </ul>
      </nav>
    </div>
    <h1 className='phrase'>Explora sin límites. Conectamos caminos, creamos oportunidades. Bienvenido a nuestra aduana, donde los sueños toman vuelo.
    </h1>
    </>
   
  );
};

export default NavbarAdmin;
