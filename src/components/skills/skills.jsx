
import React from 'react';
import './skills.css';
import react from '../../images/react.png'
import angular from '../../images/angular.png'
import javascript from '../../images/javascript.png'
import uiux from '../../images/ui-ux.png'
import adobe from '../../images/adobe.png'
import bootstrap from '../../images/bootstrap.png'
import tresD from '../../images/3D.png'
import nodejs from '../../images/nodejs.png'
import python from '../../images/python.png'
import csharp_dotnet from '../../images/csharp_dotnet.png'
import mysql from '../../images/mysql.png'
import sqlserver from '../../images/sqlserver.png'
import django from '../../images/django.png'
import git from '../../images/git.png'
import bitbucket from '../../images/bitbucket.png'
import jenkins from '../../images/jenkins.png'
import scrum from '../../images/scrum.png'
import sonarqube from '../../images/sonarqube.png'
import powerbi from '../../images/powerbi.png'



const skillsData = [
  // Frontend Skills
  {
    image: react,
    name: "React",
    description: "Desarrollo de interfaces modernas y dinámicas con React.",
  },
  {
    image: angular,
    name: "Angular",
    description: "Desarrollo de aplicaciones web estructuradas con Angular.",
  },
  {
    image: javascript,
    name: "JavaScript",
    description: "Lenguaje de programación principal para la web.",
  },
  {
    image: uiux,
    name: "UI/UX Design",
    description: "Diseño centrado en el usuario con herramientas como Figma.",
  },
  {
    image: adobe,
    name: "Adobe Ps-Ai-Pr-Xd",
    description: "Diseño gráfico, edición de video y prototipos con Adobe Suite.",
  },
  {
    image: bootstrap,
    name: "Bootstrap 5",
    description: "Framework para diseño web responsivo y moderno.",
  },
  {
    image: tresD,
    name: "Diseño 3D",
    description: "Creación de modelos 3D para paginas dinámicas ",
  },

  // Backend Skills
  {
    image: nodejs,
    name: "Node.js",
    description: "Creación de servidores eficientes con JavaScript en Node.js.",
  },
  {
    image: python,
    name: "Python",
    description: "Desarrollo de scripts y automatización con Python.",
  },
  {
    image: csharp_dotnet,
    name: "C# & .NET",
    description: "Desarrollo de aplicaciones robustas con C# y el framework .NET.",
  },
  {
    image: mysql,
    name: "MySQL",
    description: "Gestión de bases de datos relacionales con MySQL.",
  },
  {
    image: sqlserver,
    name: "SQL Server",
    description: "Manejo de datos empresariales con SQL Server.",
  },
  {
    image: django,
    name: "Django",
    description: "Desarrollo web con el framework de Python, Django.",
  },

  // Otros Skills
  {
    image: git,
    name: "GIT",
    description: "Control de versiones de proyectos con GIT.",
  },
  {
    image: bitbucket,
    name: "Bitbucket",
    description: "Gestión de repositorios y colaboraciones con Bitbucket y JIRA.",
  },
  {
    image: jenkins,
    name: "Jenkins",
    description: "Integración continua y automatización con Jenkins.",
  },
  {
    image: scrum,
    name: "Metodologías Ágiles (SCRUM)",
    description: "Gestión de proyectos de manera ágil con SCRUM.",
  },
  {
    image: sonarqube,
    name: "SonarQube",
    description: "Análisis continuo de calidad del código con SonarQube.",
  },
  {
    image: powerbi,
    name: "Power BI",
    description: "Visualización y análisis de datos con Power BI.",
  }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-image-container">
              <img src={skill.image} alt={skill.name} className="skill-image" />
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;