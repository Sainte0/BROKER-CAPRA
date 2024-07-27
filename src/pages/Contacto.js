import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Contacto.css';


const Contacto = () => {
    return (

        <div className="contenedor-main">
              <WhatsAppButton />

                <Breadcrumb/>
            <div className="container">

                <div className="history-section">
                    <h2 className="history-title">CONTACTO</h2>

                   

                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde quam ut officiis placeat veniam minus asperiores voluptatem voluptatum porro, illum, nemo, dolorum earum. Pariatur natus quis veniam optio sunt.</span>





                </div>




            </div>
            

            <Sponsor/>


        </div>

    );
};

export default Contacto;
