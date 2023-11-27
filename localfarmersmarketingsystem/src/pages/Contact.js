import React from 'react';
import BackgroundImage from "../assets/contact.webp";
import "../styles/Contact.css";


function Contact() {
  return (
    <div className="contact">
        <div 
        className="leftSide" style={{ backgroundImage: `url(${BackgroundImage})`}}
        ></div>
        <div className="rightSide">
            <h1> Contact Us</h1>

            <form id="contact-form" method="POST">
                <label htmlfor="name">Full Name</label>
                <input name="name" placeholder="Enter full name..." type="text" />
                <label htmlfor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email" />
                <label htmlfor="message">Message</label>
                <textarea rows="6" 
                placeholder="Enter message..." 
                name="message" 
                required
                ></textarea>
                <button type="Submit"> Send Message </button>
            </form>
        </div>
      
    </div>
  );
}

export default Contact;
