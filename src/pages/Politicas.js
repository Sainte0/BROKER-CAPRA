import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Politicas.css';



const Politicas = () => {
    return (

        <div className="contenedor-main">
        <WhatsAppButton />

          <Breadcrumb/>
      <div className="container">

          <div className="history-section">
              <h2 className="history-title"> Políticas Y Privacidad</h2>

             

            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, incidunt minus laudantium aut totam vel asperiores omnis necessitatibus quas ut dolorem voluptatum cumque distinctio laborum eos eligendi fugiat deleniti velit.</span>






          </div>




      </div>
      

      <Sponsor/>


  </div>


    );
};

export default Politicas;
