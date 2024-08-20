import React from 'react';
import TypingEffect from 'react-typing-effect';
import '../home/home.css';
import Mee from '../../images/mee.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
    return (
        <div className="home-card-container">
            <div className="home-card">
                <img
                    src={Mee}
                    alt="Juan Diego Garcia Albornoz"
                    className="profile-image"
                />
                <h1>Juan Diego Garcia Albornoz</h1>
                <TypingEffect
                    text={["Ingeniero de Sistemas", "Desarrollador FullStack", "Diseñador UI/UX"]}
                    speed={100}
                    eraseSpeed={50}
                    eraseDelay={1000}
                    typingDelay={500}
                    cursor="|"
                    displayTextRenderer={(text, i) => {
                        return (
                            <h2>
                                {text}
                            </h2>
                        );
                    }}
                />
                <div className="social-icons">
                    <a href="https://github.com/JuanDiegoGarciaA" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/juan-diego-garcia-albornoz-436344213/" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;