import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login_illustration from "../../asset/images/login_llustration.png";
import background_login from "../../asset/images/background_login.png";
import { userContext } from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);

  // const loginUser = async (e) => {
  // e.preventDefault();

  // const res = await fetch("/login", {
  // method: "POST",
  // headers: {
  // "Content-type": "application/json",
  // },
  // body: JSON.stringify({
  // email,
  // password,
  // }),
  // });
  // const data = await res.json();
  // if (data.status === 400 || !data) {
  // window.alert("Invalid Credentials");
  // } else {
  // navigate("/");
  // }
  // };

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json(); // response from the database

    if (res.status === 200 && !data.err) {
      // Successful login (no error message returned from the server)
      dispatch({ type: "USER", payload: true });
      window.alert("Login successful");
      navigate("/");
    } else if (res.status === 400) {
      window.alert("No such user found");
    } else if (!data) {
      // Invalid credentials or other error
      window.alert("Fill the form");
    } else {
      window.alert("Invalid Credentials");
    }
  };

  return (
    // background color
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${background_login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex justify-content-center">
        <div
          className="container shadow-lg"
          style={{
            width: "900px",
            padding: "0",
            margin: "20px auto 50px",
            borderRadius: "15px",
          }}
        >
          <div className="row mx-0">
            {/* Illustration */}
            <div className="col-md-6 d-flex align-items-center justify-content-center px-0">
              <img
                src={login_illustration}
                alt="Illustration"
                style={{ width: "100%", height: "auto", borderRadius: "15px" }}
              />
            </div>

            {/* Login credentials */}
            <div
              className="col-md-6 d-flex align-items-center justify-content-center px-0"
              style={{ background: "#FFD0EC", borderRadius: "15px" }}
            >
              <div className="p-3 w-100">
                <h2 className="text-center mb-3">Login</h2>
                <form method="POST">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // autoComplete="off"
                    />

                    {/* <div className=" alert-danger mb-2" role="alert"> */}
                    {/* Field can't be empty. */}
                    {/* </div> */}

                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  {/* <div className=" alert-danger mb-2" role="alert"> */}
                  {/* Field can't be empty. */}
                  {/* </div> */}
                  <div className="mb-3">
                    Already have an account? <Link to="/register">signup</Link>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark w-100"
                    style={{ color: "pink", background: "#C147E9" }}
                    onClick={loginUser}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
