import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <a href="/" className="logo">Juan</a>

            <nav className={`navbar ${isOpen ? "open" : ""}`}>
                <a href="/">INICIO</a>
                <a href="/">SOBRE MI</a>
                <a href="/">SKILLS</a>
                <a href="/">CURRICULUM</a>
                <a href="/">PORTAFOLIO</a>
                <a href="/">CONTACTO</a>
            </nav>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
            </div>
        </header>
    );
};

export default Navbar;