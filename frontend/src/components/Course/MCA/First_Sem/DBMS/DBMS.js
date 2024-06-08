import React from "react";
import Button from "@mui/material/Button";
import "../../Course.css";
import Tables from "../../../Tables";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

function DS() {
  return (
    <>
      <div style={{ marginTop: "40px", textAlign: "center", color: "grey" }}>
        <h1>Databse Management System (MCA-107)</h1>
      </div>

      {/* 3 links for syllabus, notes and question paper */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to="/dbms"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          <Button variant="outlined">Syllabus</Button>
        </Link>

        <Link
          to="/notes_dbms"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          <Button variant="outlined">Notes</Button>
        </Link>

        <Link to="/dbms_qp" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Question Paper</Button>
        </Link>
      </div>
      <div style={{ margin: "50px" }}>This page contains Syllabus of MCA</div>

      {/* Description table */}
      <Tables
        title="Databse Management System"
        sn="DBMS"
        cc="MCA107"
        nc="Theory"
        sem="First"
        ec="Complusary"
      />

      {/* COURSE DESCRIPTION */}
      <Card variant="outlined" sx={{ minWidth: 275, width: 1200, margin: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>Units & Unit Content</Typography>

          <Typography sx={{ paddingTop: "15px" }}>UNIT – I</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapters 1-4 ]; TB2 [Chapters 1-2 ]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Basic concepts:</strong>: Database & database users,
            characteristics of the database, database systems, concepts and
            architecture, Data Models, Schemas & Instances, DBMS architecture &
            data independence, Overview of hierarchical, Network & Relational
            DataBase Management Systems. <br />
            <strong>
              Data Modelling using the Entity Relationship Model:
            </strong>{" "}
            ER model concepts, notation for ER diagram, mapping constraints,
            Concepts of keys, Extended ER model – Generalization,
            Specialization, Aggregation, ER diagram to tables Mapping.
            <br />
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – II</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapters 5, 6, 8, 9]; TB2 [Chapters
              3-5]; TB3 [Chapters 7-11]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Relational Model:</strong> Relational data model,
            <strong>Relational integrity constraints:</strong>
            Entity Integrity, Referential integrity, Domain Constraints, Key
            constraints.
            <br />
            <strong>Relational Algebra,Relational calculus:</strong> Tuple
            Relational Calculus and domain Relational calculus.
            <br />
            <strong>Introduction on SQL:</strong> SQL commands and types: DML,
            DDL, DCL, TCL. SQL Datatypes and literals, Operators in SQL.
            <strong>Database Objects:</strong>Table, View, Sequence, Index,
            Synonym, Queries. <strong>Advanced SQL:</strong>Functions: Single
            Row Functions, Aggregate functions, Sub queries, Join Operations.
            <br />
            <strong>Set Operations:</strong> Unions, Intersection, Minus.
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – III</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapters 10, 11]; TB2 [Chapters 7,
              9]; TB3 [Chapters 15, 16, 18]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Normalization:</strong> Functional dependencies, Normal
            forms- 1NF, 2NF, 3NF, BCNF, join dependencies and multi-valued
            dependencies.
            <strong>PL/SQL Programming:</strong>Introduction to PL/SQL,
            Structure of PL/SQL Block, PL/SQL language: Operators, Control
            Structure, Cursors, Triggers, Procedures and functions.
            <br />
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – IV</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapters 17-20, 23]; TB2 [Chapters
              6, 15-17]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Transaction processing concept:</strong> Transaction system,
            Testing of serializability, serializability of schedules, conflict &
            view serializable schedule, recoverability, Recovery from
            transaction failures, log-based recovery, checkpoints, deadlock
            handling.
            <br />
            <strong>Concurrency control techniques:</strong>Concurrency control,
            locking techniques, time stamp ordering, granularity of data items,
            recovery from catastrophic failures. Concepts of object-oriented
            database management systems, Distributed Data Base Management
            Systems, overview of Database Security Concepts.
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ minWidth: 275, width: 1200, margin: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20, paddingBottom: 1 }}>
            <strong>Text Books</strong>
          </Typography>

          <Typography>
            <strong>TB1.</strong> Elmsari and Navathe, “Fundamentals of Database
            Systems”, Pearson Education, 7 Edition, 2016.
            <br />
            <strong>TB2.</strong> Korth, Silberschatz, “Fundamentals of Database
            System Concepts”, TMH, 6 Edition, 2010.
            <br />
            <strong>TB3.</strong> Ivan Bayross, “SQL, PL/SQL the Programming
            language of Oracle”, BPB Publications, 2010.
          </Typography>

          <Typography sx={{ fontSize: 20, paddingBottom: 1, paddingTop: 3 }}>
            <strong>Reference Books</strong>
          </Typography>

          <Typography>
            <strong>RB1.</strong> Ullman J. D., “Principals of Database
            Systems”, Galgotia Publications, 2 Edition, 1999. <br />
            <strong>RB2.</strong> C.J.Date, A. Kannan, S. Swamynathan “An
            Introduction to Database Systems”, Pearson Education, 8th Edition,
            2006.
            <br />
            <strong>RB3.</strong> Desai B., “An Introduction to Database
            Concepts”, Galgotia Publications, New Delhi.
            <br />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default DS;
