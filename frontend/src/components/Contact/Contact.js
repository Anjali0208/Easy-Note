import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const navigate = useNavigate();

  // get user data from server
  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });

      if (!res.status === 200) {
        throw new Error("Unauthorized User");
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    userContact(); // this function should run immediately ater the first time webiste will run
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value }); // to get dynamic data that's why we used [name]:value
  };

  // send data to backend
  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // name(database_name):name(user value)
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (!data || res.status === 422) {
      window.alert("Fill the message field");
    } else {
      emailjs
        .send(
          "service_0sky6do",
          "template_5zptrts",
          {
            from_name: name,
            from_email: email,
            phone_number: phone,
            message: message,
          },
          "TDfqTALbUgjq5cvEE"
        )
        .then((response) => {
          console.log("Email sent:", response.status, response.text);
          alert("Message Sent Successfully");
        });

      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form method="POST">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={userData.message}
            onChange={handleInput}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={contactForm}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
