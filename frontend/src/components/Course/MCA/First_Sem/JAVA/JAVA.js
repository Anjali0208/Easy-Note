import React from 'react'
import Button from '@mui/material/Button';
import "../../Course.css"
import Tables from "../../../Tables"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom"


function JAVA() {
    return (
        <>

            <div style={{ marginTop: "40px", textAlign: "center", color: "grey" }}>
                <h1>Object Oriented Programming and JAVA (MCA-109)</h1>
            </div>

            {/* 3 links for syllabus, notes and question paper */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Link to="/java" style={{ textDecoration: "none", marginRight: "20px" }}>
                    <Button variant="outlined">Syllabus</Button>
                </Link>

                <Link to="/notes_java" style={{ textDecoration: "none", marginRight: "20px" }}>
                    <Button variant="outlined">Notes</Button>
                </Link>

                <Link to="/java_qp" style={{ textDecoration: "none" }}>
                    <Button variant="outlined">Question Paper</Button>
                </Link>
            </div>
            <div style={{ margin: "50px" }}>
                This page contains Syllabus of MCA
            </div>

            {/* Description table */}
            <Tables title="Object Oriented Programming and JAVA" sn="JAVA" cc="MCA109" nc="Theory" sem="First" ec="Complusary" />


            {/* COURSE DESCRIPTION */}
            <Card variant='outlined' sx={{ minWidth: 275, width: 1200, margin: 5 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }}>Units & Unit Content</Typography>

                    <Typography sx={{ paddingTop: "15px" }}>
                        UNIT – I
                    </Typography>

                    <Typography>
                        <strong>Chapter / Book Reference: TB1 [Chapters 1-9, 12, 16, 17];TB2 [Chapters 1-10]</strong>
                    </Typography>

                    <Typography sx={{ lineHeight: 1.5, paddingTop: 1 }} color="text.secondary">

                        <strong>OOP Paradigm:</strong> S Comparison of programming paradigms, Characteristics of Object-
                        Oriented Programming Languages, Object-based programming languages<br />

                        <strong>Java Fundamentals:</strong>Brief History of Java, Structure of a Java program,
                        Importance and features of Java, Introduction to JVM and its architecture including
                        set of instructions. Overview of JVM Programming. Internal and detailed explanation
                        of a valid .class file format. Instrumentation of a .class file, Bytecode engineering
                        libraries, Overview of class loaders and Sandbox model of security.
                        Basic language construct of Java-including keywords, constants, variables,
                        operators, looping and decision-making construct<br />

                        <strong>Implementation of OOPs concepts in Java:</strong>Objects, Classes and their implementation,
                        Encapsulation, Data Abstraction, Inheritance, Polymorphism, Dynamic Binding, Message Passing,
                        default parameter values, using reference variables with function Arrays and String: creating
                        an array, one and two-dimensional arrays, String arrays and methods, Classes: String and String
                        Buffer classes, Wrapper classes: Basics types, using super, multilevel hierarchy abstract and
                        final classes, Object class, packages and interfaces, access protection, extending interfaces, packages
                    </Typography>

                    <Divider style={{ background: 'black', marginTop: "5px" }} variant="" />

                    <Typography sx={{ paddingTop: "15px" }}>
                        UNIT – II
                    </Typography>

                    <Typography>
                        <strong>Chapter / Book Reference: TB1 [Chapters 10-11, 18, 22,28]; TB2[Chapters 11, 15-16, 18]</strong>
                    </Typography>

                    <Typography sx={{ lineHeight: 1.5, paddingTop: 1 }} color="text.secondary">
                        <strong>Exception Handling: </strong> Fundamentals exception types, caught and uncaught exceptions,
                        throw, throws, built in exceptions, custom exceptions<br />

                        <strong>Multithreaded Programming:</strong> Multithreading basics, Happens-before ordering, Java Thread Model: priorities, synchronization, messaging, thread class, Runnable interface, inter-thread communication, suspending, resuming, and stopping threads.<br />
                        <strong>The Collection Framework:</strong> The Collection Interface, Collection Architecture in Java, Collection Classes, traversing Collections, working with Maps & Sets<br />
                        <strong>Networking fundamentals:</strong> networking classes and interfaces, using java.net package, TCP/IP, and Data-gram Programming.
                    </Typography>

                    <Divider style={{ background: 'black', marginTop: "5px" }} variant="" />

                    <Typography sx={{ paddingTop: "15px" }}>
                        UNIT – III
                    </Typography>

                    <Typography>
                        <strong>Chapter / Book Reference: TB1 [Chapters 24-27, 31-33]; TB2[Chapters 12-13]</strong>
                    </Typography>

                    <Typography sx={{ lineHeight: 1.5, paddingTop: 1 }} color="text.secondary">
                        <strong>Anonymous Classes and Inner classes in Java:</strong> Core concept and its implementation and types of anonymous classes, nested and inner classes, and their implementation<br />
                        <strong>Event Handling:</strong> Different Mechanism, the Delegation Event Model, Event Classes, Event
                        Listener Interfaces, Adapter and Inner Classes, working with windows, Graphics and Text,
                        using AWT controls, Layout managers and menus, handling Images, animation, sound and video.<br />
                        <strong>Swing</strong>Introduction to JFC (Java Foundation Classes), features of Swing, comparison with AWT, Advanced Control.
                    </Typography>

                    <Divider style={{ background: 'black', marginTop: "5px" }} variant="" />

                    <Typography sx={{ paddingTop: "15px" }}>
                        UNIT – IV
                    </Typography>

                    <Typography>
                        <strong>Chapter / Book Reference: TB1 [Chapters 13-15, 20, 29-30];
                            TB2 [Chapters 14, 18]</strong>
                    </Typography>

                    <Typography sx={{ lineHeight: 1.5, paddingTop: 1 }} color="text.secondary">
                        <strong>JDBC:</strong> Introduction to DBMS & RDBMS, DBC API, JDBC Application Architecture,
                        Obtaining a Connection, JDBC Models: Two Tier and Three Tier Model, Result Set, Prepared Statement,
                        Callable Statemen<br />

                        <strong>Input/output Programming:</strong>Basics, Streams, Byte and Character Stream, predefined streams, Reading and writing from console and files.<br />
                        <strong>Java 8 Concepts:</strong> Default and Functional Interfaces, Lambda Expression, Java stream API and Pipelines, Try with Resources, Java 8 Memory optimization.<br />
                        <strong>RMI (Remote Method Invocation):</strong>Introduction, Steps in creating a Remote Object, Generating Stub & Skeleton, RMI Architecture, RMI packages.
                    </Typography>
                </CardContent>
            </Card>

            <Card variant="outlined" sx={{ minWidth: 275, width: 1200, margin: 5 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20, paddingBottom: 1 }}><strong>Text Books</strong></Typography>

                    <Typography >
                        <strong>TB1.</strong> Herbert Schildt, “Java - The Complete Reference”, Oracle Press, 9th Edition 2014 <br />
                        <strong>TB2.</strong> Kathy Sierra and BertBates, “Head First Java”, O’Reilly Publications, 2nd Edition, 2005.<br />
                    </Typography>

                    <Typography sx={{ fontSize: 20, paddingBottom: 1, paddingTop: 3 }}>
                        <strong>Reference Books</strong>
                    </Typography>

                    <Typography>
                        <strong>RB1.</strong> E. Balaguruswamy, “Programming with Java”, Tata McGraw Hill, 4th Edition, 2009 <br />
                        <strong>RB2.</strong> Decker and Hirshfield, “Programming Java: An Introduction to Programming using JAVA”, Vikas Publication, 2nd Edition, 2000.<br />
                        <strong>RB3.</strong> N. P. Gopalan and J. Akilandeswari, “Web Technology - A Developers’ Perspective”, PHI, 2nd Edition, 2014.<br />
                    </Typography>

                </CardContent>
            </Card>

        </>
    )
}

export default JAVA