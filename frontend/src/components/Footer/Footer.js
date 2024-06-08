import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "#86469C" }}>
      <div>
        {/* get in touch  */}
        <div className="p-4" style={{ color: "#FFCDEA" }}>
          <h3>Get In Touch</h3>
          <p>
            A passinate frontend developer , <br />
            willing to make new software and solve problems.
          </p>
        </div>
        {/* my linkedin profile card */}
        <div></div>
        {/* my github profile card */}
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
