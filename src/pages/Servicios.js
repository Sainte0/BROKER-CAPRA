import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Servicios.css';



const Servicios = () => {
    return (

        <div className="contenedor-main">
              <WhatsAppButton />

                <Breadcrumb/>

            <div className="container">

                <div className="history-section">
                    <h2 className="history-title">SERVICIOS</h2>


                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque quibusdam unde debitis maxime, impedit laborum, in quis atque molestiae enim doloribus nesciunt minima non ea voluptatem mollitia ducimus voluptatibus.</span>



                </div>




            </div>
          
          <Sponsor/>



        </div>

    );
};

export default Servicios;
