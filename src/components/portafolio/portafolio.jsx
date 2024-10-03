import React, { useState } from 'react';
import './portafolio.css';
import programacion1 from '../../images/Programacion1.png'
import programacion2 from '../../images/Programacion2.png'
import programacion3 from '../../images/Programacion3.png'
import programacion4 from '../../images/Programacion4.png'
import diseño1 from '../../images/Diseño1.png'
import diseño2 from '../../images/Diseño2.png'
import animacion1 from '../../images/animacion1.png'
import animacion2 from '../../images/animacion2.png'



const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('programacion');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const trabajos = {
        programacion: [
            {
                titulo: 'Proyecto SICREB',
                tecnologias: 'EJS, CSS3, Bootstrap5, JavaScript, Node.js, MySQL, Express.js, Adobe.Xd',
                link: 'https://github.com/JuanDiegoGarciaA/Proyecto-SICREB',
                imagen: programacion1
            },
            {
                titulo: 'Clon Spotify-Angular',
                tecnologias: 'Angular, CSS, JavaScript, Node.js, TypeScript, HTML5, Postman',
                link: 'https://github.com/JuanDiegoGarciaA/Spotify',
                imagen: programacion2
            },
            {
                titulo: 'Landing page Granja Agroturistica Villa Maria',
                tecnologias: 'React, CSS, JavaScript, TypeScript, HTML5, Responsive Design',
                link: 'https://granjavillamaria.github.io/Landing/',
                imagen: programacion3
            },
            {
                titulo: 'Gestion Pedidos',
                tecnologias: 'django, Python, CSS, JavaScript, TypeScript HTML5, mysql',
                link: 'https://github.com/JuanDiegoGarciaA/gestionventas',
                imagen: programacion4
            },
        ],
        diseño: [
            {
                titulo: 'Diseño 3D Jefe Maestro',
                tecnologias: 'Blender, Photoshop, Illustrator',
                imagen: diseño1
            },
            {
                titulo: 'Diseño de Marca',
                tecnologias: 'Illustrator, Photoshop',
                imagen: diseño2
            }
        ],
        animaciones: [
            {
                titulo: 'Animación Calentamiento Global',
                tecnologias: 'Blender, Illustrator, Premiere Pro',
                link: 'https://www.youtube.com/watch?v=m2WLTRkvBiw',
                imagen: animacion1
            },
            {
                titulo: 'CORRE-Terror',
                tecnologias: 'Blender, Illustrator, Premiere Pro',
                link: 'https://www.youtube.com/watch?v=V1O5JQelxwg',
                imagen: animacion2
            }
        ]
    };

    const renderTrabajos = () => {
        return trabajos[activeTab].map((trabajo, index) => (
            <div key={index} className="trabajo-card">
                <img
                    src={trabajo.imagen}
                    alt={trabajo.titulo}
                    className="trabajo-imagen"
                    onClick={() => openModal(trabajo.imagen)}
                />
                <h3>{trabajo.titulo}</h3>
                <p>{trabajo.tecnologias}</p>
                {/* Solo mostrar el enlace si existe un link */}
                {trabajo.link && (
                    <a href={trabajo.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                )}
            </div>
        ));
    };

    const openModal = (imagen) => {
        setSelectedImage(imagen);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    return (
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h2>Mis Trabajos</h2>
                <div className="tabs">
                    <button className={activeTab === 'programacion' ? 'active' : ''} onClick={() => setActiveTab('programacion')}>Programación</button>
                    <button className={activeTab === 'diseño' ? 'active' : ''} onClick={() => setActiveTab('diseño')}>Diseño</button>
                    <button className={activeTab === 'animaciones' ? 'active' : ''} onClick={() => setActiveTab('animaciones')}>Animaciones</button>
                </div>
            </div>

            <div className="trabajos-container">
                {renderTrabajos()}
            </div>

            {/* Modal para mostrar imagen ampliada */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Imagen ampliada" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
