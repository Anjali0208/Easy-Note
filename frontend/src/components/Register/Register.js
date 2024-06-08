import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login_illustration from "../../asset/images/login_llustration.png";
import background_login from "../../asset/images/background_login.png";

const Register = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassoword, setconfirmPassoword] = useState("");
  // const [phone, setPhone] = useState("");
  // const [allEntry, setAllEntry] = useState([]);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });

    // if (email && password) {
    // const newEntry = {
    // id: new Date().getTime().toString(),
    // email: email,
    // password: password,
    // };
    // setAllEntry([...allEntry, newEntry]);
    // console.log(newEntry);
    // setEmail("");
    // setPassword("");
    // setPhone("");
    // setName("");
    // setconfirmPassoword("");
    // }
  };

  const sendData = async (e) => {
    e.preventDefault();
    // console.log("1");

    const { name, phone, email, password, cpassword } = user;

    if (password !== cpassword) {
      return window.alert("password doesn't match");
    }

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // credentials: "include",
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
        cpassword,
      }),
    });

    const data = await res.json(); // pending state to progress state
    // console.log("data->", data);
    // console.log("3");
    // res.status === 422 || !data
    if (!data) {
      window.alert("Fill the details");
    } else if (res.status === 422) {
      window.alert("User already exist");
    } else {
      window.alert("Registration Successful");
      // console.log("successful");
      navigate("/login");
    }
  };

  return (
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
            width: "800px",
            padding: "0",
            margin: "80px auto 50px", // Adjusted margin to move the container above
            borderRadius: "15px",
          }}
        >
          <div className="row mx-0">
            {/* Registration Form */}
            <div
              className="col-md-6 d-flex align-items-center justify-content-center px-0"
              style={{ background: "#FFD0EC", borderRadius: "15px" }}
            >
              <div className="p-3 w-100">
                <h2 className="text-center mb-3">Register</h2>
                <form method="POST">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="num" className="form-label">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="num"
                      name="phone"
                      value={user.phone}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputs}
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="correctpassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirm"
                      name="cpassword"
                      value={user.cpassword}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="mb-3">
                    Already have an account? <Link to="/login">Login</Link>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark w-100"
                    style={{ color: "pink", background: "#C147E9" }}
                    onClick={sendData}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Illustration */}
            <div className="col-md-6 d-flex align-items-center justify-content-center px-0">
              <img
                src={login_illustration}
                alt="Illustration"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
