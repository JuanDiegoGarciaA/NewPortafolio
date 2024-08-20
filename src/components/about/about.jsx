import React, { useState, useEffect } from 'react';
import './about.css';
import CV from '../about/HV_JuanDiegoG_2024.pdf'
const About = () => {
    const [age, setAge] = useState('');

    useEffect(() => {
        const calculateAge = (birthdate) => {
            const today = new Date();
            const birthDate = new Date(birthdate);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };

        const birthdate = '2001-01-10'; //formato YYYY-MM-DD
        setAge(calculateAge(birthdate));
    }, []);

    return (
        <section className="about">
            <div className="intro">
                <h1 className="intro-title">Sobre Mí</h1>
                <p className="intro-text">
                    Hola, soy <span> Juan Diego García.</span> Soy ingeniero de sistemas y desarrollador web FullStack con 2 años de experiencia en el área, especializado en tecnologías diversas para crear soluciones completas y eficientes. Mi pasión por el Front-End y mi amor por los diseños minimalistas y modernos me impulsan a buscar siempre la simplicidad y la elegancia en cada proyecto. Me considero una persona autodidacta, siempre en busca de aprender nuevas tecnologías y mejorar mis habilidades. Durante estos años, he trabajado en una variedad de proyectos que han profundizado mis conocimientos y me han permitido dejar mi marca en la web. Actualmente, estoy en busca de oportunidades que me permitan seguir creciendo profesionalmente y contribuir a proyectos innovadores.
                </p>
            </div>
            <div className="content">
                <div className="column personal-data">
                    <h2 className="column-title">Datos Personales</h2>
                    <div className="personal-data-content">
                        <div className="personal-data-row">
                            <div className="personal-data-label">
                                <strong>Fecha de Nacimiento:</strong>
                            </div>
                            <div className="personal-data-value">
                                <p>01/10/2001</p>
                            </div>
                        </div>
                        <div className="personal-data-row">
                            <div className="personal-data-label">
                                <strong>Teléfono:</strong>
                            </div>
                            <div className="personal-data-value">
                                <p>+57 320 489 4873</p>
                            </div>
                        </div>
                        <div className="personal-data-row">
                            <div className="personal-data-label">
                                <strong>Email:</strong>
                            </div>
                            <div className="personal-data-value">
                                <p>jdiegogarcia0110@gmail.com</p>
                            </div>
                        </div>
                        <div className="personal-data-row">
                            <div className="personal-data-label">
                                <strong>Edad:</strong>
                            </div>
                            <div className="personal-data-value">
                                <p>{age} años</p>
                            </div>
                        </div>
                        <div className="personal-data-row">
                            <div className="personal-data-label">
                                <strong>Ciudad:</strong>
                            </div>
                            <div className="personal-data-value">
                                <p>Bogotá D.C. Colombia</p>
                            </div>
                        </div>
                        <div className="personal-data-row">
                            <div className="personal-data-label">
                                <strong>Cargo:</strong>
                            </div>
                            <div className="personal-data-value">
                                <p>Desarrollador Web FullStack</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <h2 className="column-title">Intereses</h2>
                    <div className="icons">
                        <div className="icon-item">
                            <i class="fa-solid fa-gamepad"></i>
                            <p>Juegos</p>
                        </div>
                        <div className="icon-item">
                            <i class="fa-solid fa-music"></i>
                            <p>Música</p>
                        </div>

                        <div className="icon-item">
                            <i className="fa fa-paint-brush"></i>
                            <p>Diseño</p>
                        </div>
                        <div className="icon-item">
                            <i class="fa-solid fa-plane"></i>
                            <p>Viajar</p>
                        </div>
                        <div className="icon-item">
                            <i class="fa-solid fa-lightbulb"></i>
                            <p>Innovar</p>
                        </div>
                        <div className="icon-item">
                            <i class="fa-solid fa-gears"></i>
                            <p>Trabajo en Equipo</p>
                        </div>
                        <div className="icon-item">
                            <i class="fa-solid fa-person-running"></i>
                            <p>Deporte</p>
                        </div>
                        <div className="icon-item">
                            <i class="fa-brands fa-wpexplorer"></i>
                            <p>Explorar</p>
                        </div>
                        <div className="icon-item">
                            <i class="fa-solid fa-people-roof"></i>
                            <p>Familia</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="download-section">
                <a href={CV} download="Juan_Diego_Garcia_HV.pdf" className="download-button">
                    Descargar CV
                </a>
            </div>
        </section>
    );
};

export default About;