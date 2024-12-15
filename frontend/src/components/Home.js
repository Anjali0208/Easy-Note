import React from "react";
import Banner from "./Banner/Banner";
import Cards from "./Cards";
import Headline from "./Headline";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <Banner />
        <Headline />
        <div className="home_card">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Home;
