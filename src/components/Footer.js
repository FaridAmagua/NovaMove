import React from 'react';

/**
 * Footer component
 * Presents company contact information and legal links. This footer
 * mirrors the structure of the original site with an emphasis on
 * accessibility and clean typography.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section company">
          <h3 className='logo-text'>NOVA Move</h3>
          <p>
            <i className="fas fa-envelope"></i>{' '}
            <a href="mailto:info@propertyplus.cl">info@novamovespain.es</a>
          </p>
          {/* <p>
            <i className="fas fa-phone-alt"></i>{' '}
            674 00 66 91
          </p> */}
          {/* <p>
            <i className="fas fa-map-marker-alt"></i>{' '}
            C/ Castillo de Fuensaldaña, 4, 28232 Las Rozas, Madrid
          </p> */}
          <p>
            <i className="fas fa-clock"></i>{' '}
            L – V de 9:00 a 21:00
          </p>
        </div>
        {/* <div className="footer-section social">
          <h4>Síguenos en:</h4>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div> */}
      </div>
      <div className="footer-bottom ">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Nova Move |{' '}
            <a href="/aviso-legal">Aviso legal</a>
            <a href="/politica-de-privacidad">Política de privacidad</a>
            <a href="/politica-de-cookies">Política de cookies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;