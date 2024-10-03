import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-icons-footer">
                    <a href="https://github.com/JuanDiegoGarciaA" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/juan-diego-garcia-albornoz-436344213/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
                <p className="footer-text">Email: jdiegogarcia0110@gmail.com</p>
                <p className="footer-rights">© 2024 Juan Diego Garcia. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
