import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Broker from './pages/Broker';
import Servicios from './pages/Servicios';
import Seguros from './pages/Seguros';
import Companias from './pages/Companias';
import Contacto from './pages/Contacto';
import Politicas from './pages/Politicas';
import Terminos from './pages/Terminos' // Ensure this component exists

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/broker" element={<Broker />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/seguros" element={<Seguros />} />
        <Route path="/companias" element={<Companias />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/politicas" element={<Politicas />} /> 
        <Route path="/terminos" element={<Terminos />} /> 
        <Route path="/" element={<Broker />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
