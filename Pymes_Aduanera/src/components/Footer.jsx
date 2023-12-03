import "../css/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h3 className="footer-title">Pymes Aduanera</h3>
      </div>
      <div className="footer-section">
        <h3 className="footer-title">Contacto</h3>
        <p className="footer-text">Teléfono: +506 6024 6577</p>
        <p className="footer-text">Dirección: Calle Principal, Ciudad</p>
        <p className="footer-text">Correo: info@empresa.com</p>
      </div>
      <div className="footer-section">
        <h3 className="footer-title">Síguenos en</h3>
        <a
          className="footer-link"
          href="https://www.facebook.com/ejemplo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
