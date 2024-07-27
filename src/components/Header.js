import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/Header.css'; // Asegúrate de que este archivo contiene el CSS ajustado

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" width="160" height="80" className="logo-header" />
        </div>

        <div className="nav-container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link" to="/">BROKER</Link>
                  <Link className="nav-link" to="/servicios">SERVICIOS</Link>
                  <Link className="nav-link" to="/seguros">SEGUROS</Link>
                  <Link className="nav-link" to="/contacto">CONTACTO</Link>
                  <Link className="nav-link" to="/companias">COMPAÑÍAS</Link>
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
