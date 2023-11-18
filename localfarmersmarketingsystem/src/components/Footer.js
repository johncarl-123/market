import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGoogle} from 'react-icons/fa';
import "../styles/Footer.css";



function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia"> 
      {<FaFacebook />}  {<FaYoutube />}  {<FaGoogle />}
      </div>
      <p> &copy; 2023 localfarmersmarketingsystem.com</p>
    </div>
  );
  
}

export default Footer;
