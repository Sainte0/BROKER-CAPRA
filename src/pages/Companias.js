import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import Breadcrumb from '../components/Breadcrumb';
import image1 from '../assets/img/allianz.png';
import image2 from '../assets/img/cristobal.png';
import image3 from '../assets/img/fedpat.png';
import image4 from '../assets/img/galicia.png';
import image5 from '../assets/img/integrity.png';
import image6 from '../assets/img/lps.png';
import image7 from '../assets/img/mercantil.png';
import image8 from '../assets/img/norte.png';
import image9 from '../assets/img/rus.png';
import image10 from '../assets/img/sancor.png';
import image11 from '../assets/img/segunda.png';
import image12 from '../assets/img/galeno.png';
import image13 from '../assets/img/berkley.png';
import image14 from '../assets/img/prevencion.png';
import '../pages/css/Companias.css';
import Sponsor from '../components/Sponsor';

const Companias = () => {
    return (
        <div className="contenedor-main">
            <WhatsAppButton />
            <Breadcrumb />
            <div className="container">
                <div className="history-section">
                    <h2 className="history-title">COMPAÑÍAS</h2>
                    <p className="history-subtitle">Trabajamos con una variedad de compañías líderes para ofrecerte los mejores servicios y pólizas. Aquí tienes una breve descripción de cada una:</p>

                    <div className="companies-details">
                        <div className="company">
                            <img src={image1} alt="Allianz" className="company-logo" />
                            <p>Allianz es una de las principales compañías de seguros y servicios financieros a nivel mundial. Ofrecen una amplia gama de seguros para individuos y empresas.</p>
                        </div>
                        <div className="company">
                            <img src={image4} alt="Galicia" className="company-logo" />
                            <p>Galicia es un banco líder que también ofrece una gama de seguros, incluyendo seguros de hogar, automóviles y vida, adaptados a tus necesidades.</p>
                        </div>
                        <div className="company">
                            <img src={image7} alt="Mercantil" className="company-logo" />
                            <p>Mercantil proporciona una variedad de seguros para negocios y particulares, con una sólida reputación por su servicio al cliente.</p>
                        </div>
                        <div className="company">
                            <img src={image2} alt="Cristobal" className="company-logo" />
                            <p>Cristobal se especializa en seguros de automóviles y propiedades, brindando soluciones personalizadas y atención al cliente de alta calidad.</p>
                        </div>
                        <div className="company">
                            <img src={image10} alt="Sancor" className="company-logo" />
                            <p>Sancor es líder en seguros de salud y vida, proporcionando planes de cobertura médica completos y accesibles.</p>
                        </div>
                        <div className="company">
                            <img src={image14} alt="Prevencion" className="company-logo" />
                            <p>Prevencion ofrece una gama de seguros de vida y salud, enfocándose en la prevención y bienestar de sus clientes.</p>
                        </div>
                        <div className="company">
                            <img src={image11} alt="Segunda" className="company-logo" />
                            <p>Segunda ofrece seguros de hogar y propiedades, con un enfoque en la protección y seguridad de tus bienes.</p>
                        </div>
                        <div className="company">
                            <img src={image8} alt="Norte" className="company-logo" />
                            <p>Norte es conocida por sus seguros de automóviles y hogar, ofreciendo cobertura integral y asistencia rápida en caso de siniestro.</p>
                        </div>
                        <div className="company">
                            <img src={image5} alt="Integrity" className="company-logo" />
                            <p>Integrity se enfoca en seguros de vida y planes de jubilación, ayudando a las personas a asegurar su futuro financiero con confianza.</p>
                        </div>
                        <div className="company">
                            <img src={image3} alt="Fedpat" className="company-logo" />
                            <p>Fedpat es conocida por sus seguros de salud y vida, ofreciendo planes flexibles y completos para garantizar la tranquilidad de sus clientes.</p>
                        </div>
                        <div className="company">
                            <img src={image13} alt="Berkley" className="company-logo" />
                            <p>Berkley proporciona seguros comerciales y de responsabilidad civil, ayudando a las empresas a mitigar riesgos.</p>
                        </div>
                        <div className="company">
                            <img src={image9} alt="Rus" className="company-logo" />
                            <p>Rus ofrece seguros de salud, vida y automóviles, con una amplia red de servicios y cobertura en todo el país.</p>
                        </div>
                        <div className="company">
                            <img src={image6} alt="LPS" className="company-logo" />
                            <p>LPS ofrece seguros de responsabilidad civil y comercial, protegiendo a las empresas contra posibles riesgos y eventualidades.</p>
                        </div>
                    </div>

                </div>

            </div>
            <Sponsor />
        </div>
    );
};

export default Companias;
