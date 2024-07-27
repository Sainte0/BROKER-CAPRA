import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Seguros.css';



const Seguros = () => {
    return (

        <div className="contenedor-main">
              <WhatsAppButton />

                <Breadcrumb/>

            <div className="container">

                <div className="history-section">
                    <h2 className="history-title">SEGUROS</h2>

                   

                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio culpa repellat illo expedita numquam vero cupiditate totam tempore aliquid obcaecati impedit maiores aut voluptates, laboriosam atque voluptate! Sunt, facilis?</span>


                </div>




            </div>

        <Sponsor/>


        </div>

    );
};

export default Seguros;
