import React from 'react';
import './timeLineItem.css';

const TimelineItem = ({ title, date, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="timeline-item-date">{date}</span>
        <h3 className="timeline-item-title">{title}</h3>
        <p className="timeline-item-description">
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line.includes('-') ? (
                <li>{line.replace('-', '')}</li> // Reemplazamos el '-' por una cadena vacía
              ) : (
                <span>{line}</span>
              )}
              <br /> {/* Añadimos un salto de línea */}
            </React.Fragment>
          ))}
        </p>
        <span className="circle" />
      </div>
    </div>
  );
};

export default TimelineItem;