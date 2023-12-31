import '../css/user/Navbar.css';
import { Link } from 'react-router-dom';

const NavbarUser = () => {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <img src="https://cdn-icons-png.flaticon.com/512/1996/1996005.png" alt="Logo de la empresa" className="logo" />
          <div className="navbar-brand">Pymes Aduanera</div>
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/user" className='Link'>Inicio</Link></li>
            <li className="nav-item"><Link to="/user/tickets" className='Link'>Tickets</Link></li>
            <li className="nav-item"><Link to="/user/cotizaciones" className='Link'>Cotizaciones</Link></li>
            <li className="nav-item"><Link to="/user/tracking" className='Link'>Tracking</Link></li>
            <li className="nav-item"><Link to="/user/perfil" className='Link'>Perfil</Link></li>
            <li className="nav-item"><Link to="/" className='Link'>Salir</Link></li>
          </ul>
        </nav>
      </div>
      <h1 className='phrase'>Explora sin límites. Conectamos caminos, creamos oportunidades. Bienvenido a nuestra aduana, donde los sueños toman vuelo.</h1>
    </>
  );
};

export default NavbarUser;
