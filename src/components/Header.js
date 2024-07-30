import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" width="160" height="80" className="logo-header" />
        </div>

        <div className="nav-container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleMenuToggle}
                aria-controls="navbarNavAltMarkup"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <Link className="nav-link" to="/" onClick={handleMenuItemClick}>BROKER</Link>
                  <Link className="nav-link" to="/servicios" onClick={handleMenuItemClick}>SERVICIOS</Link>
                  <Link className="nav-link" to="/seguros" onClick={handleMenuItemClick}>SEGUROS</Link>
                  <Link className="nav-link" to="/contacto" onClick={handleMenuItemClick}>CONTACTO</Link>
                  <Link className="nav-link" to="/companias" onClick={handleMenuItemClick}>COMPAÑÍAS</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
