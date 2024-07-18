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
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Portfolio</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
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