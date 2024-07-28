import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import WhatsAppButton from '../components/WhatsAppButton';
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Contacto.css';

const Contacto = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'YOUR_SERVICE_ID', 
            'YOUR_TEMPLATE_ID', 
            formData, 
            'YOUR_USER_ID'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            // Clear form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        }).catch((err) => {
            console.error('FAILED...', err);
        });
    };

    return (
        <div className="contenedor-main">
            <WhatsAppButton />
            <Breadcrumb />
            <div className="container">
                <div className="history-section">
                    <h2 className="history-title">CONTACTO</h2>
                    <p className="history-subtitle">¿Necesitas contactarte con nosotros para un plan personalizado?</p>
                    <p className="history-subtitle">Estamos aquí para ayudarte. Ya sea que tengas preguntas sobre nuestros servicios, necesites más información sobre nuestras pólizas o quieras discutir un plan que se ajuste a tus necesidades específicas, nuestro equipo está listo para asistirte.</p>
                    <p className="history-subtitle">No dudes en enviarnos un mensaje a través del formulario de contacto a continuación. Nos pondremos en contacto contigo lo antes posible para brindarte la asistencia que necesitas.</p>
                    <div className="form-contact">
                        <form className="mxw-774 form-container" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            placeholder="Nombre" 
                                            className="form-control form-control-lg border-0" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            placeholder="Apellido" 
                                            className="form-control form-control-lg border-0" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            placeholder="Email" 
                                            className="form-control form-control-lg border-0" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 px-2">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            placeholder="Teléfono" 
                                            className="form-control form-control-lg border-0" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-6">
                                <textarea 
                                    className="form-control border-0" 
                                    placeholder="Mensaje" 
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-lg btn-primary px-9">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Sponsor />
        </div>
    );
};

export default Contacto;
