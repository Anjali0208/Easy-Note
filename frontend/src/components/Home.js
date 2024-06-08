import React from "react";
import Banner from "./Banner/Banner";
import Card from "./Card";
import Headline from "./Headline";
// import { Link } from 'react-router-dom'
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <Banner />
        <Headline />
        <div className="home_card">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
