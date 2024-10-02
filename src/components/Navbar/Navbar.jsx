import React, { useState, useEffect } from "react";
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Para controlar la visibilidad del navbar
    let lastScrollY = window.scrollY;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Función para manejar el scroll y la visibilidad del navbar
    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Si hacemos scroll hacia abajo, ocultar el navbar
            setIsVisible(false);
        } else {
            // Si hacemos scroll hacia arriba, mostrar el navbar
            setIsVisible(true);
        }
        lastScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isVisible ? "visible" : "hidden"}`}>
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
