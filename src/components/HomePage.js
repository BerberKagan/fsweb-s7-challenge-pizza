import React from "react";
import { Link } from "react-router-dom";

import "./css/HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePageTitle">
        <h1><Link style={{ textDecoration: "none", color: "white" }} to="/">Teknolojik Yemekler</Link></h1>
      </div>

      <p>fırsatı kaçırma!</p>

      <div className="HomePageSlogan">
        <p>KOD ACIKTIRIR,</p>
        <p>PİZZA DOYURUR!</p>
      </div>

      <div className="HomePageButton">
        <button id="order-pizza">
          <Link style={{ textDecoration: "none", color: "black" }} to={"/pizza"}>ACIKTIM</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
