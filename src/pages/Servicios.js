import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Servicios.css';

const Servicios = () => {
    return (
        <div className="contenedor-main">
            <WhatsAppButton />
            <Breadcrumb />
            <div className="container">
                <div className="history-section">
                    <h2 className="history-title">SERVICIOS</h2>
                    <p className="history-subtitle">Ofrecemos una variedad de servicios diseñados para protegerte a ti, a tu familia y a tus bienes. Desde asesoría personalizada hasta gestión de reclamos, estamos aquí para ayudarte en cada paso del camino.</p>
                
                    <div className="services-section">
                    <div className="service-item">
                        <h3>Proceso de Contratación de Seguros</h3>
                        <p>Explicamos el proceso paso a paso para que los clientes entiendan cómo pueden contratar un seguro a través de nuestra empresa.</p>
                    </div>
                    <div className="service-item">
                        <h3>Asesoría Personalizada</h3>
                        <p>Ofrecemos asesoría personalizada para ayudar a los clientes a elegir el mejor seguro según sus necesidades.</p>
                    </div>
                    <div className="service-item">
                        <h3>Evaluaciones de Riesgos</h3>
                        <p>Realizamos evaluaciones de riesgos para proporcionar las mejores opciones de seguros a nuestros clientes.</p>
                    </div>
                    <div className="service-item">
                        <h3>Atención al Cliente</h3>
                        <p>Brindamos servicios de atención al cliente, incluyendo soporte telefónico, vía email y a través de chat en línea.</p>
                    </div>
                    <div className="service-item">
                        <h3>Gestión de Reclamos</h3>
                        <p>Explicamos el proceso de gestión de reclamos y cómo ayudamos a los clientes a través de este proceso.</p>
                    </div>
                    <div className="service-item">
                        <h3>Beneficios de Trabajar con un Broker</h3>
                        <p>Destacamos los beneficios de trabajar con un broker en lugar de ir directamente a una compañía de seguros.</p>
                    </div>
                    <div className="service-item">
                        <h3>Historias de Éxito</h3>
                        <p>Compartimos historias de éxito de clientes que han utilizado nuestros servicios y han tenido experiencias positivas.</p>
                    </div>
                    <div className="service-item">
                        <h3>Educación Financiera y de Seguros</h3>
                        <p>Ofrecemos recursos educativos sobre seguros, incluyendo guías y artículos que expliquen conceptos básicos y avanzados.</p>
                    </div>
                </div>
                </div>
                
            </div>
            <Sponsor />
        </div>
    );
};

export default Servicios;
