import React from 'react';
import './About.css';
import robot_img from '../images/robot_img1.png'

const About = () => {
  return (
    <div className="container">
      <div className="left-div">
        <img src={ robot_img} alt="Image" />
      </div>
      <div className="right-div">
        <h3>Heading</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, maxime.</p>
      </div>
    </div>
  );
};

export default About;
