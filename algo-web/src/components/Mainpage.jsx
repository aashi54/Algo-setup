import React from 'react';
import './Mainpage.css';
import background_img from '../images/background_img.jpg';
import robot_img1 from '../images/robot_img1.png';
import { Link } from 'react-router-dom';

const Mainpage = () => {
 
  return (
    <>
      <div className="container">
        <div className="main-page">
          <img className="background-img" src={background_img} alt="Background"></img>

        
          <div className="navbar">
            <div className="logo">Our Logo</div>
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Our Blogs</a>
            </div>
            <button className='login-btn'> <Link className='connect' to='/login'> <b>Connect</b></Link></button>
            

            {/* <button className='register-btn'>Register </button> */}
          </div>
        </div>
      </div>

      <div className="left-div">
        <h2 className="left-text">Automate Your Trading and Investments</h2>
        <h3 className='h3-tag'>Take control of your investments like never before with our advanced algo trading platform, designed to optimize your strategies and supercharge your trading success.</h3>
      </div>

      <div className="right-div">
        <img
          src= {robot_img1}
          alt="Right Side Image"
          className="right-image"
        />
      </div>
    </>
  );
};

export default Mainpage;
