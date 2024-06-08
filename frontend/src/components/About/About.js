import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import background_login from "../../asset/images/background_login.png";

function About() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!res.status === 200) {
        throw new Error("Unauthorized User");
      }
      const data = await res.json();
      console.log(data);
      setUserData(data);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${background_login})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card shadow-lg card-hover" style={{ width: "400px" }}>
          <div className="card-header " style={{ backgroundColor: "#E0AED0" }}>
            <h1 className="card-title text-center">Profile</h1>
          </div>
          <div className="card-body " style={{ backgroundColor: "whitesmoke" }}>
            {userData ? (
              <>
                <div className="card-text ">
                  <p>
                    <strong>Name:</strong> {userData.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {userData.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {userData.phone}
                  </p>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
