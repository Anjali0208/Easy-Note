import React from "react";

function Banner() {
  return (
    <header
      className="banner d-flex justify-content-center align-items-center"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&dl=priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb")`,
        backgroundPosition: "center center",
        height: "400px",
      }}
    >
      <div
        className="banner_center  p-4 rounded"
        style={{ backgroundColor: "rgba(172, 135, 197, 0.5)", width: "40%" }}
      >
        <div className="banner_text text-white text-center">
          <p className="fw-bold fs-4 text-dark">Hello folks,</p>
          <p className="fs-5 text-dark">Welcome to easyNote!!</p>
        </div>
      </div>
    </header>
  );
}

export default Banner;
