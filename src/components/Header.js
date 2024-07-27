import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'


const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="logo-container">
          <img src={logo} alt="logo" width="160" height="80" class="logo-header" />
        </div>
        <div class="nav-container">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Broker</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/servicios">Servicios</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/seguros">Seguros</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="/companias">Compañías</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contacto">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
