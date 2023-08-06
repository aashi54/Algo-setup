import React from 'react';
import './CardComponent.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CardComponent = ({ title, imgSrc, price, change, color }) => {
  return (
    <div className="card">
      <img className="circle-image" src={imgSrc} alt={title}></img>
      <div className="card-text">
        <h3>{title}</h3>
        <p>
          {price} <span className={color}>{change}</span>
        </p>
      </div>
      <div className="card-box">
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default CardComponent;
