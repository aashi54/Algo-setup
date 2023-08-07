import React from 'react';
import './CardComponent.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import cardData from './CardData';
import Card from './Card';
import robot_img from '../images/robot_img1.png'


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
    <br></br>
   <br></br>
   <br></br>
   
   <hr class="hr2" />
   <br></br>
   <br></br>
   <br></br>

   {/* <div className="about">
      <div className="left-div">
        <img src={ robot_img} alt="Image" />
      </div>
      <div className="right-div">
        <h3>Heading</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, maxime.</p>
      </div>
    </div> */}

    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non earum velit dicta error dignissimos commodi vero nisi hic corrupti itaque culpa at ullam inventore, repudiandae a aliquam quo dolore sit. </h1>

    <div className='about_us'>
       <div className='left-side'>
         <img src={robot_img}></img>
       </div>
       <div className='right-side'>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, magni.</p>
       </div>


    </div>

    </>
  );
};

export default CardComponent;