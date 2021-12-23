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
      <p>
        Cheese triangles cream cheese edam. Cottage cheese airedale stinking
        bishop cut the cheese parmesan squirty cheese cheese strings feta.
        Monterey jack hard cheese bocconcini airedale camembert de normandie
        taleggio parmesan red leicester. Dolcelatte macaroni cheese cheese
        strings.
      </p>
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
