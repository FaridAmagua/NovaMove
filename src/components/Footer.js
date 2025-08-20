import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="logo-text footer-logo">NOVA Move</h2>
          <p className="tagline">Gestión inmobiliaria en Madrid</p>
        </div>

        <div className="footer-contact">
          <p><i className="fas fa-envelope"></i> info@novamovespain.es</p>

          <p>
            <p><i className="fas fa-clock"></i> L – V de 9:00 a 21:00</p>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nova Move. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
