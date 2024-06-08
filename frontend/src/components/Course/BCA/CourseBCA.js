import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

function CourseBCA() {
  return (
    <div className="container">
      <h1 className="mt-3 text-center " style={{ color: "#756AB6" }}>
        BCA Course
      </h1>
      <p className="text-center">
        These are all the courses in BCA course offered by IPU.
      </p>

      {/* First Semester Section */}
      <div className="mb-5">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title fw-bold mb-3">First Semester</h3>
            <div className="row">
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/ds_bca" className="sub">
                      Discrete Structure
                    </Link>
                  </li>
                  <li>
                    <Link to="/c" className="sub">
                      Programming Using ‘C’ Language
                    </Link>
                  </li>
                  <li>
                    <Link to="/it" className="sub">
                      Fundamentals of Computers & IT
                    </Link>
                  </li>
                  <li>
                    <Link to="/web" className="sub">
                      Web Technologies
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li className="mt-3 fw-bold">PRACTICAL LAB</li>
                  <li>
                    <Link to="/c_lab" className="sub">
                      Practical – I ‘C’ Prog. Lab
                    </Link>
                  </li>
                  <li>
                    <Link to="/it_lab" className="sub">
                      Practical – II IT Lab
                    </Link>
                  </li>
                  <li>
                    <Link to="/web_lab" className="sub">
                      Practical-III Web Tech Lab
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li className="mt-3 fw-bold"> Bridge Course</li>
                  <li>
                    <Link to="/bridge" className="sub">
                      Bridge Course in Mathematics
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Semester Section */}
      <div className="card mb-2">
        <div className="card-body">
          <h3 className="card-title fw-bold mb-3">Second Semester</h3>
          <div className="row">
            <div className="col-md-4">
              <li>
                <Link to="/course2" className="sub">
                  Applied Mathematics
                </Link>
              </li>
              <ul className="list-unstyled">
                <li>
                  <Link to="/course2" className="sub">
                    Web based Programming
                  </Link>
                </li>
                <li>
                  <Link to="/course2" className="sub">
                    Data Structure And Algorithm Using ‘C’
                  </Link>
                </li>
                <li>
                  <Link to="/course2" className="sub">
                    Database Management System
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <li className="mt-3 fw-bold">Practical</li>
              <li>
                <Link to="/course2" className="sub">
                  Practical-IV WBP Lab
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Practical – V DS Lab
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Practical – VI DBMS Lab
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseBCA;
