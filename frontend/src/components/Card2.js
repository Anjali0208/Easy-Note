import React from 'react'
import "./Card.css"
import { IoLibrarySharp } from 'react-icons/io5';
import { GiWhiteBook } from 'react-icons/gi';
import { AiFillNotification } from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <>
            <Card style={{ width: '22rem', height: "15rem" }}>
                <IoLibrarySharp style={{ height: "4rem", fontSize: '40px' }} />
                <Card.Body>
                    <Card.Title style={{ fontSize: "20px", height: "3rem" }}>Course</Card.Title>
                    <Card.Subtitle>
                        We provide course materials for MCA.
                        We will add other courses later

                    </Card.Subtitle>
                    <Link to="/course" style={{ fontSize: "large", textDecoration: "none" }}>
                        <Button variant="primary"
                            style={{
                                cursor: "pointer",
                                marginTop: "20px",
                                height: "2rem",
                                width: "4rem",
                                borderRadius: "5px",
                                boxShadow: "2px 2px purple",
                                backgroundColor: "rgb(230, 161, 230)",
                                font: "message-box",
                                color: "black",
                                fontSize: "large"
                            }} >
                            Go
                        </Button>
                    </Link>

                </Card.Body>
            </Card>


            <Card style={{ width: '22rem', height: "15rem" }}>
                <GiWhiteBook style={{ height: "4rem", fontSize: '40px' }} />
                <Card.Body>
                    <Card.Title style={{ fontSize: "20px", height: "3rem" }}>Exam Content</Card.Title>
                    <Card.Subtitle>
                        We provide question paper with subjectwise.

                    </Card.Subtitle>
                    <Link to="/exam" style={{ fontSize: "large", textDecoration: "none" }}>
                        <Button variant="primary"
                            style={{
                                cursor: "pointer",
                                marginTop: "35px",
                                height: "2rem",
                                width: "4rem",
                                borderRadius: "5px",
                                boxShadow: "2px 2px purple",
                                backgroundColor: "rgb(230, 161, 230)",
                                font: "message-box",
                                color: "black",
                                fontSize: "large"

                            }} >
                            Go
                        </Button>
                    </Link>

                </Card.Body>
            </Card>

            <Card style={{ width: '22rem', height: "15rem" }}>
                <AiFillNotification style={{ height: "4rem", fontSize: '40px' }} />
                <Card.Body>
                    <Card.Title style={{ fontSize: "20px", height: "3rem" }}>News and Notice</Card.Title>
                    <Card.Subtitle>
                        Find News and Notice about exams and
                        other events in our notice section.
                    </Card.Subtitle>
                    <Link to="/news" style={{ fontSize: "large", textDecoration: "none" }}>
                        <Button variant="primary"
                            style={{
                                marginTop: "20px",
                                height: "2rem",
                                width: "4rem",
                                borderRadius: "5px",
                                boxShadow: "2px 2px purple",
                                backgroundColor: "rgb(230, 161, 230)",
                                cursor: "pointer",
                                font: "message-box",
                                color: "black",
                                fontSize: "large"
                            }} >
                            Go
                        </Button>
                    </Link>
                </Card.Body>
            </Card>





        </>
    )
}

export default Cards