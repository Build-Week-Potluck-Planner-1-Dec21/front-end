// Imports here
import React from "react";
import "../DesignAssets/assets/css/Home.css";
import { Link } from 'react-router-dom';

//Component

const Home = () => {
  return (
    <div>
      <div className="home-img"></div>
      <br></br>
      <center>
      <Link to="/login" className="button-hm">
        Login
      </Link>
      <br></br>
      <Link to="/create-account" className="button-hm">
        Create Account
      </Link>
      </center>
    </div>
  );
};

//Export

export default Home;
