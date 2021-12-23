// Imports here
import React from "react";
import { Link } from "react-router-dom";
import "../Design Assets/assets/css/Home.css";

//Component

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="home-img"></div>
      <p className="home-style">"About this app"</p>
      <Link to="/login" className="button-hm">
        Login
      </Link>
      <Link to="/create-account" className="button-hm">
        Create Account
      </Link>
    </div>
  );
};

//Export

export default Home;
