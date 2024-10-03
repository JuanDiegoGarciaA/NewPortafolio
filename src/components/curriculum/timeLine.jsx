import React from 'react';
import TimelineItem from './timeLineItem';
import './timeLine.css'; 

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      <h2 className="timeline-title">Curriculum</h2>
      {items.map((item, index) => (
        <TimelineItem 
          key={index} 
          title={item.title} 
          date={item.date} 
          description={item.description} 
        />
      ))}
    </div>
  );
};

export default Timeline;
