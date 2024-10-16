import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Timeline from './components/curriculum/timeLine';
import timelineData from './data'
import Portfolio from './components/portafolio/portafolio';
import Contact from './components/contacto/contacto';
import Footer from './components/footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Timeline items={timelineData} />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
