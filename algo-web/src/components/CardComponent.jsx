import React from 'react';
import './CardComponent.css'; 
import nifty_img from '../images/nifty_img.png';

const CardComponent = () => {
  return (
    <> 
    <div className="card-container">
      <div className="card">
        <img className="circle-image" src={nifty_img}></img>
        <div className="card-text">
          <h3>Nifty</h3>
          <p>Price</p>
        </div>
      </div>

      <div className="card">
      <img className="circle-image"></img>
        <div className="card-text">
          <h3>Gold</h3>
          <p>Price</p>
        </div>
      </div>

      <div className="card">
      <img className="circle-image"></img>
        <div className="card-text">
          <h3>Bitcoin</h3>
          <p>Price</p>
        </div>
      </div>
     
    </div>

    <br></br>

    <div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laboriosam minima dolor modi temporibus sit cum, debitis ullam nam consectetur quae magnam pariatur aperiam consequatur placeat inventore quos illo. Earum?</h1>
      </div>

    </>
  );
};

export default CardComponent;
