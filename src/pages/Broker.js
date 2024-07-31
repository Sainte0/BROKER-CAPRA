import React from 'react';
import { Link, } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor'
import '../pages/css/Broker.css'
import martin from '../assets/img/martin.jpg'
import ignacio from '../assets/img/ignacio.jpg'
import sergio from '../assets/img/sergio.jpg'



const insuranceCards = [
    { title: 'AUTOMOTOR', description: 'Protección completa para tu vehículo.', svg: '🚗' },
    { title: 'HOGAR', description: 'Seguro integral para tu hogar y pertenencias.', svg: '🏠' },
    { title: 'VIDA', description: 'Asegura el bienestar de tu familia.', svg: '❤️' },
    { title: 'SALUD', description: 'Cobertura médica para ti y tu familia.', svg: '🩺' },
    { title: 'INTEGRAL DE COMERCIO', description: 'Protección para tu negocio.', svg: '🏪' },
    { title: 'ACCIDENTES PERSONALES', description: 'Cobertura ante accidentes personales.', svg: '⚕️' }
];



const Broker = () => {
    return (

        <div className="contenedor-main">

            <WhatsAppButton />

            <Breadcrumb />

            <div className="container">

                <div className="history-section">
                    <h2 className="history-title">BROKER</h2>

                    <p className='history-subtitle'>
                        Un broker de seguros es un intermediario que asesora a los clientes en la selección de pólizas de seguros, buscando las mejores opciones en cobertura y costo. Gestiona los trámites necesarios y ofrece un servicio personalizado para asegurar que los clientes estén protegidos y satisfechos.
                    </p>


                    <div className="history">
                        <div className="card-history">
                            <div className="card">
                                <h4 className="card-history-title">MISIÓN</h4>
                                <br />
                                Identificar las necesidades de nuestros clientes y brindarles un asesoramiento
                                profesional atendiendo todas las necesidades e inquietudes en materia de seguros para
                                lograr la máxima satisfacción de nuestros clientes y conseguir los mejores costos y
                                beneficios económicos para ellos.
                            </div>
                            <div className="card">
                                <h4 className="card-history-title">VISIÓN</h4>
                                Apuntamos a ser un aliado estratégico en el crecimiento de nuestros clientes,
                                brindándoles asesoramiento de excelencia, logrando estar en las primeras opciones de los
                                consumidores a la hora de pensar en asegurar sus bienes.
                            </div>
                            <div className="card">
                                <h4 className="card-history-title">VALORES</h4>
                                Priorizamos la confianza que construimos con nuestros clientes y proveedores, a través
                                del tiempo, relaciones personales y profesionalismo brindado.
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="personas">

                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar" style={{ backgroundImage: `url(${sergio})` }}></div>

                                <div className="card-title">SERGIO CAPRA</div>
                                <div className="card-subtitle">CEO &amp; Co-Founder</div>
                            </div>
                            <ul className="card-social">
                                <li className="card-social__item">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                                    </svg>

                                </li>
                                <li className="card-social__item">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                                    </svg>

                                </li>
                                <li className="card-social__item">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar" style={{ backgroundImage: `url(${ignacio})` }}></div>
                                <div className="card-title">INGACIO CAPRA</div>
                                <div className="card-subtitle">SENIOR PARTNER</div>
                            </div>
                            <ul className="card-social">
                                <li className="card-social__item">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                                    </svg>

                                </li>
                                <li className="card-social__item">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                                    </svg>

                                </li>
                                <li className="card-social__item">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar" style={{ backgroundImage: `url(${martin})` }}></div>
                                <div className="card-title">MARTIN CAPRA</div>
                                <div className="card-subtitle">SENIOR PARTNER</div>
                            </div>
                            <ul className="card-social">
                                <li className="card-social__item">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                                    </svg>

                                </li>
                                <li className="card-social__item">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                                    </svg>

                                </li>
                                <li className="card-social__item">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <hr />
                    <div>
                        <h2 className="section-title">TIPOS DE SEGUROS</h2>
                        <div className="seguros">
                            {insuranceCards.map((card, index) => (
                                <div className="servicios" key={index}>
                                    <div className="servicios-details">
                                        <div className="seguros-card-svg">{card.svg}</div>
                                        <p className="text-title">{card.title}</p>
                                        <p className="text-body">{card.description}</p>
                                    </div>
                                    <Link to="/seguros">
                                        <button className="servicios-button">Más Info</button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>




            </div>


            <Sponsor />


        </div>

    );
};

export default Broker;
