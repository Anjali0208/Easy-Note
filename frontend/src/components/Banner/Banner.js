import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&dl=priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "400px",
      }}
    >
      <div className="banner_center rounded">
        <div className="banner_text text-white text-center">
          <p className="fw-bold fs-4 text-dark">Hello folks,</p>
          <p className="fs-5 text-dark">Welcome to easyNote!!</p>
        </div>
      </div>
    </header>
  );
}

export default Banner;
