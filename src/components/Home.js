import React from "react";
import Loader from "./Loader";
import cookingImage from "../images/cooking.jpeg";
import footballImage from "../images/football.jpeg";
import codingImage from "../images/coding.jpeg";

const Home = () => {
  return (
    <div>
      {/* <img src={cookingImage} alt="image" /> */}
      <img src={codingImage} alt="image" />
      <img src={footballImage} alt="image" />
    </div>
  );
};

export default Home;
