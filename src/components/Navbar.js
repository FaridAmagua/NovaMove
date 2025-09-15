import React, { useState } from 'react';
import logo from '../assets/negro2.png'; // tu logo imagen
import logo2 from '../assets/letras.png'; // tu logo imagen


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="/" className="logo">
          <img src={logo} alt="Nova Move Inmobiliaria Madrid" className="logo-img" />
          <div className="logo-text-wrapper">
            <img src={logo2} alt="Nova Move Inmobiliaria Madrid" className="logo-img" />

          </div>
        </a>
        <button className="burger" onClick={toggleMenu} aria-label="Menú">
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li>
            <a href="#que-hacemos" onClick={handleLinkClick}>
              Qué hacemos
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={handleLinkClick}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={handleLinkClick}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
