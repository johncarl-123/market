import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/background1.jpg";
import "../styles/Home.css";

function Home() {
    
  return (
    <div className="home">
      <div className="headerContainer" style={{ backgroundImage: `url(${BannerImage})`}}
      >
        <h1>Local Farmers Marketing System</h1>
        <p>LOCAL PRODUCE PRODUCTS</p>
        <Link to="/Log In">
          <button>Log In</button>
        </Link>  
      </div>
     </div>
     );
}

export default Home;
