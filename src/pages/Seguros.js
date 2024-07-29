import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import WhatsAppButton from '../components/WhatsAppButton';
import Breadcrumb from '../components/Breadcrumb';
import Sponsor from '../components/Sponsor';
import '../pages/css/Seguros.css';

const Seguros = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        insuranceType: '' // Nueva opción de seguro
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
            'service_h0tjib7',
            'template_xdw99jd',
            formData,
            'GbuqRayxrVv2WVcfD'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            // Clear form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
                insuranceType: '' // Reiniciar opción de seguro
            });
        }).catch((err) => {
            console.error('FAILED...', err);
        });
    };

    const insuranceCards = [
        {
            title: 'AUTOMOTOR',
            description: 'Protección completa para tu vehículo. Incluye cobertura contra accidentes, robos y daños a terceros.',
            svg: '🚗'
        },
        {
            title: 'HOGAR',
            description: 'Seguro integral para tu hogar y pertenencias. Cobertura contra incendios, robos y desastres naturales.',
            svg: '🏠'
        },
        {
            title: 'VIDA',
            description: 'Asegura el bienestar de tu familia. Proporciona protección financiera en caso de fallecimiento.',
            svg: '❤️'
        },
        {
            title: 'SALUD',
            description: 'Cobertura médica para ti y tu familia. Incluye consultas, tratamientos y hospitalización.',
            svg: '🩺'
        },
        {
            title: 'COMERCIO',
            description: 'Protección para tu negocio. Cubre daños a la propiedad, robos y responsabilidad civil.',
            svg: '🏪'
        },
        {
            title: 'ACCIDENTES PERSONALES',
            description: 'Cobertura ante accidentes personales. Proporciona compensación por lesiones y discapacidad.',
            svg: '⚕️'
        }
    ];

    return (
        <div className="contenedor-main">
            <WhatsAppButton />
            <Breadcrumb />
            <div className="container">
                <div className="history-section">
                    <h2 className="history-title">SEGUROS</h2>
                    <p className='history-subtitle'>Elige el tipo de seguro que mejor se adapte a tus necesidades y envíanos tu mensaje para obtener más información. Ya sea que necesites protección para tu hogar, tu automóvil, o incluso seguros especializados como agro o navegación aérea, estamos aquí para ayudarte a encontrar la mejor opción.</p>
                    <div className='seguros'>
                        {insuranceCards.map((card, index) => (
                            <div className='seguros-card' key={index}>
                                <div className='flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <div className='seguros-card-svg'>{card.svg}</div>
                                            <p className='title'>{card.title}</p>
                                        </div>
                                        <div className='flip-card-back'>
                                            <p className='title'>{card.title}</p>
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />

                    <div>
                    <h2 className='section-title'>Contactanos!</h2>
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
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <select
                                                className="form-control form-control-lg border-0"
                                                name="insuranceType"
                                                value={formData.insuranceType}
                                                onChange={handleChange}
                                            >
                                                <option value="">Selecciona un tipo de seguro</option>
                                                <option value="ART">ART</option>
                                                <option value="RC">RC</option>
                                                <option value="ROBO">ROBO</option>
                                                <option value="AGRO">AGRO</option>
                                                <option value="AEREO NAVEGACION">AEREO NAVEGACION</option>
                                                <option value="EMBARCACIONES">EMBARCACIONES</option>
                                                <option value="VIDA">VIDA</option>
                                                <option value="VIDA OBLIGATORIO">VIDA OBLIGATORIO</option>
                                                <option value="AUTOMOTOR">AUTOMOTOR</option>
                                                <option value="ACCIDENTE PERSONALES">ACCIDENTE PERSONALES</option>
                                                <option value="BICICLETAS">BICICLETAS</option>
                                                <option value="COMERCIO">COMERCIO</option>
                                                <option value="HOGAR">HOGAR</option>
                                            </select>
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
                                    <button type="submit" className="btn btn-lg btn-primary px-9">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Sponsor />
        </div>
    );
};

export default Seguros;
