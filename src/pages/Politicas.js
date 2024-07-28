import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Politicas.css';

const Politicas = () => {
    return (
        <div className="contenedor-main">
            <WhatsAppButton />
            <Breadcrumb />
            <div className="container">
                <div className="history-section">
                    <h2 className="history-title">Políticas y Privacidad</h2>
                    <div className="policy-content">
                        <h3 className="policy-subtitle">Política de Privacidad</h3>
                        <p>
                            Nuestra empresa se compromete a proteger la privacidad de nuestros usuarios. La información personal recopilada se utilizará únicamente para brindar nuestros servicios de intermediación de seguros. No compartiremos su información con terceros sin su consentimiento explícito, salvo cuando sea requerido por la ley.
                        </p>
                        <h3 className="policy-subtitle">Uso de la Información</h3>
                        <p>
                            La información recopilada se utiliza para mejorar la experiencia del usuario, personalizar servicios y comunicaciones, y cumplir con nuestras obligaciones legales. Utilizamos herramientas de análisis para entender mejor el uso de nuestro sitio web y mejorar continuamente nuestros servicios.
                        </p>
                        <h3 className="policy-subtitle">Seguridad de la Información</h3>
                        <p>
                            Implementamos medidas de seguridad adecuadas para proteger la información personal contra accesos no autorizados, alteraciones, divulgación o destrucción. Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de internet.
                        </p>
                        <h3 className="policy-subtitle">Derechos del Usuario</h3>
                        <p>
                            Los usuarios tienen el derecho de acceder, rectificar y eliminar su información personal. También pueden oponerse al tratamiento de sus datos por motivos legítimos. Para ejercer estos derechos, puede contactarnos a través de nuestros canales de atención al cliente.
                        </p>
                        <h3 className="policy-subtitle">Cambios en la Política de Privacidad</h3>
                        <p>
                            Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página y, si es significativo, se lo notificaremos a través de los canales de comunicación habituales.
                        </p>
                    </div>
                </div>
            </div>
            <Sponsor />
        </div>
    );
};

export default Politicas;
