import React from 'react';
import './contacto.css';
import logo from '../../images/logo.png';

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-info">
                <h1 className="contact-title">Contáctame y construyamos la web</h1>
                <p className="contact-text">
                    Estaré encantado de ayudarte con cualquier proyecto relacionado con desarrollo web
                    o cualquier trabajo visualizado en mi portafolio. No dudes en contactarme si estás
                    buscando un desarrollador para llevar tus ideas a la realidad.
                </p>
                <a
                    href="https://wa.me/573204894873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >
                    <i className="fab fa-whatsapp"></i> Contáctame
                </a>
            </div>
            <div className="contact-logo">
                <img src={logo} alt="Mi logo" className="logo-img" />
            </div>
        </div>
    );
};

export default Contact;
