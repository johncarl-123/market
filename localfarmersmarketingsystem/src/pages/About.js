import React from 'react';
import BackgroundImage from "../assets/Aboutbackground.jpeg";
import "../styles/About.css";

function About() {

  return (
    <div className="About">
        <div 
        className="aboutTop" 
        style={{ backgroundImage: `url(${BackgroundImage})`}}
        ></div>

        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Welcome to Local Farmers Market, your premier platform for 
            connecting local farmers with the community! At Local Farmers Market, 
            we're passionate about supporting local agriculture and creating a sustainable food ecosystem. 
            Our platform facilitates a direct connection between farmers and consumers, 
            allowing you to discover fresh, locally grown produce and other products. 
            Our mission is to promote the benefits of buying locally, emphasizing quality, freshness, 
            and the positive impact on the local economy and environment. 
            By choosing Local Farmers Market, you contribute to a healthier community and a more sustainable future. 
            Explore a variety of farm-fresh products, support local farmers, and enjoy the convenience of having 
            these goods delivered to your doorstep. Thank you for being a part of Local Farmers Market—we're 
            dedicated to providing you with the best local shopping experience and
             connecting you with the incredible farmers in your community.</p>
        </div>
    </div>
    );
}

export default About;
