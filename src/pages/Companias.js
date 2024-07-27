import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Companias.css';



const Companias = () => {
    return (

        <div className="contenedor-main">
            <WhatsAppButton />

            <Breadcrumb/>


            <div className="container">

                <div className="history-section">
                    <h2 className="history-title">COMPAÑÍAS</h2>


                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda laborum nesciunt id maxime illo, rerum amet ab accusantium aliquam iusto sed quisquam molestias asperiores pariatur, omnis dignissimos exercitationem labore optio.</span>



                </div>




            </div>
         

         <Sponsor/>



        </div>

    );
};

export default Companias;
