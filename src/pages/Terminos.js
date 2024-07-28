import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Terminos.css';

const Terminos = () => {
    return (
        <div className="contenedor-main">
            <WhatsAppButton />
            <Breadcrumb />
            <div className="container">
                <div className="history-section">
                    <h2 className="history-title">Términos y Condiciones</h2>
                    <div className="terminos">
                        <h3 className="terminos-subtitle">Introducción</h3>
                        <p>
                            Bienvenido a nuestra página web. Al acceder y utilizar nuestro sitio, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con alguno de estos términos, no utilices este sitio.
                        </p>
                        <h3 className="terminos-subtitle">Uso del Sitio</h3>
                        <p>
                            El contenido de este sitio web es solo para tu información general y uso. Está sujeto a cambios sin previo aviso. Ni nosotros ni terceros proporcionamos ninguna garantía sobre la exactitud, integridad, o idoneidad de la información y materiales encontrados u ofrecidos en este sitio web para ningún propósito particular.
                        </p>
                        <h3 className="terminos-subtitle">Enlaces a Otros Sitios</h3>
                        <p>
                            Nuestro sitio web puede contener enlaces a otros sitios de interés. Sin embargo, una vez que hayas utilizado estos enlaces para salir de nuestro sitio, debes tener en cuenta que no tenemos ningún control sobre esos otros sitios web. Por lo tanto, no podemos ser responsables de la protección y privacidad de cualquier información que proporciones mientras visitas dichos sitios.
                        </p>
                        <h3 className="terminos-subtitle">Propiedad Intelectual</h3>
                        <p>
                            Este sitio web contiene material que es propiedad nuestra o está licenciado. Este material incluye, pero no se limita a, el diseño, la disposición, la apariencia y los gráficos. La reproducción está prohibida salvo de acuerdo con el aviso de derechos de autor, que forma parte de estos términos y condiciones.
                        </p>
                        <h3 className="terminos-subtitle">Limitación de Responsabilidad</h3>
                        <p>
                            No seremos responsables de ninguna pérdida o daño, ya sea directo, indirecto o consecuente, que surja de o en conexión con el uso de este sitio web.
                        </p>
                        <h3 className="terminos-subtitle">Modificaciones de los Términos</h3>
                        <p>
                            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Cualquier cambio será efectivo inmediatamente después de la publicación en el sitio web. Te recomendamos revisar esta página regularmente para estar al tanto de cualquier actualización.
                        </p>
                    </div>
                </div>
            </div>
            <Sponsor />
        </div>
    );
};

export default Terminos;
