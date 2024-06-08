import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

function CourseMCA2() {
  return (
    <div className="container">
      <h1 className="mt-3 text-center " style={{ color: "#756AB6" }}>
        MCA Course
      </h1>
      <p className="text-center">
        These are all the courses in MCA course offered by IPU.
      </p>

      {/* First Semester Section */}
      <div className="mb-5">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title fw-bold mb-3">Third Semester</h3>
            <div className="row">
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/ds" className="sub">
                      Discrete Structure
                    </Link>
                  </li>
                  <li>
                    <Link to="/cn" className="sub">
                      Computer Networks
                    </Link>
                  </li>
                  <li>
                    <Link to="/os" className="sub">
                      Operating Systems with Linux
                    </Link>
                  </li>
                  <li>
                    <Link to="/dbms" className="sub">
                      Database Management Systems
                    </Link>
                  </li>
                  <li>
                    <Link to="/java" className="sub">
                      Object Oriented Programming and JAVA
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li className="mt-3 fw-bold">PRACTICAL LAB</li>
                  <li>
                    <Link to="/cn_lab" className="sub">
                      Computer Networks Lab
                    </Link>
                  </li>
                  <li>
                    <Link to="/os_lab" className="sub">
                      Operating Systems with Linux Lab
                    </Link>
                  </li>
                  <li>
                    <Link to="/dbms_lab" className="sub">
                      Database Management Systems Lab
                    </Link>
                  </li>
                  <li>
                    <Link to="/java_lab" className="sub">
                      Object Oriented Programming and JAVA Lab
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li className="mt-3 fw-bold"> PROJECT</li>
                  <li>
                    <Link to="/minor" className="sub">
                      Minor Project - I
                    </Link>
                  </li>
                  <li className="mt-3 fw-bold">NUES</li>
                  <li>
                    <Link to="/nues" className="sub">
                      Professional Proficiency - I
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
          <h3 className="card-title fw-bold mb-3">Fourth Semester</h3>
          <div className="row">
            <div className="col-md-4">
              <li>
                <Link to="/course2" className="sub">
                  Data and File Structures
                </Link>
              </li>
              <ul className="list-unstyled">
                <li>
                  <Link to="/course2" className="sub">
                    Object Oriented Software Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/course2" className="sub">
                    Python Programming
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <li className="mt-3 fw-bold">Core Elective - I</li>
              <li>
                <Link to="/course2" className="sub">
                  Advanced Database Management Systems
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Data Warehousing and Data Mining
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Mobile App Design and Development(Core Elective - I)
                </Link>
              </li>
              <li>
                <Link to="/dfs" className="sub">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Web Technologies
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Theory of Computations
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Software Testing
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Microprocessors
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Embedded System
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Information Security
                </Link>
              </li>
            </div>
            <div className="col-md-4">
              <li className="mt-3 fw-bold">
                Open Elective - I (Choose any one)
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Management Information System
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Management Principles and Organizational Behavior
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Finance and Accounting
                </Link>
              </li>
              <li className="mt-3 fw-bold">Practical Lab</li>
              <li>
                <Link to="/course2" className="sub">
                  Data and File Structures Lab
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  OOSE Lab
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Python Programming Lab
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  Lab. based on Core Elective - I
                </Link>
              </li>
              <li className="mt-3 fw-bold">Project</li>
              <li>
                <Link to="/course2" className="sub">
                  Minor Project – II
                </Link>
              </li>
              <li>
                <Link to="/course2" className="sub">
                  NUES
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseMCA2;
