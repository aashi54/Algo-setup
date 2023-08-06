import React from 'react';
import './CardComponent.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import cardData from './CardData';
import Card from './Card';

const CardComponent = () => {
  
  return (
    <> 
    <div className="card-container">
    {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imgSrc={card.imgSrc}
            price={card.price}
            change={card.change}
            color={card.color}
          />
        ))}
    </div>

    <br></br>

    <div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laboriosam minima dolor modi temporibus sit cum, debitis ullam nam consectetur quae magnam pariatur aperiam consequatur placeat inventore quos illo. Earum?</h1>
      </div>

    </>
  );
};

export default CardComponent;