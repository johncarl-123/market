import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/background1.jpg";
import "../styles/Home.css";

function Home() {
    
  return (
    <div className="home"  style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer" >
        <h1>Local Farmers Market</h1>
        <p>LOCAL PRODUCE PRODUCTS</p>
        <Link to="/usertypeselectionpage">
          <button>Login</button>
        </Link>  
      </div>
     </div>
     );
}

export default Home;
