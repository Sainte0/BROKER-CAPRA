import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Terminos.css';



const Terminos = () => {
    return (

        <div className="contenedor-main">
            <WhatsAppButton />

            <Breadcrumb/>
            <div className="container">

                <div className="history-section">
                    <h2 className="history-title">Términos y Condiciones</h2>

                    <div className='terminos'>

                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis neque enim debitis tempora ducimus architecto possimus, dignissimos deleniti. Ea omnis nemo soluta, libero quis quos ratione nihil voluptas rerum beatae!</span>

                    
                    </div>




                </div>




            </div>
           

           <Sponsor/>



        </div>

    );
};

export default Terminos;
