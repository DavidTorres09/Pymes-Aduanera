import "../css/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Pymes Aduanera</h3>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Teléfono: +506 6024 6577</p>
          <p>Dirección: Calle Principal, Ciudad</p>
          <p>Correo: info@empresa.com</p>
        </div>
        <div className="footer-section">
          <h3>Síguenos en</h3>
          <a href="https://www.facebook.com/ejemplo" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
