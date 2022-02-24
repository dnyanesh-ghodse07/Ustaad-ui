import React from "react";
import "./Home.scss";
import Login from "../Login/Login";
import Banner from "../../assets/book-2814039_1280.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <h1 className="home__brand">USTAAD</h1>
      </div>
      <div className="home__login">
        <Login />
      </div>
    </div>
  );
};

export default Home;
