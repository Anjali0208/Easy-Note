import React from "react";
import "../../Course.css";
import Tables from "../../../Tables";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

function JLab() {
  return (
    <>
      <div style={{ marginTop: "40px", textAlign: "center", color: "grey" }}>
        <h1>Database Management Systems Lab (MCA-165)</h1>
      </div>

      <div style={{ margin: "50px" }}>This page contains Syllabus of MCA</div>

      {/* Description table */}
      <Tables
        title="Database Management System"
        sn="DBMSLAB"
        cc="MCA165"
        nc="Practical"
        sem="First"
        ec="Complusary"
      />

      {/* COURSE DESCRIPTION */}
      <Card variant="outlined" sx={{ minWidth: 275, width: 1200, margin: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>LEARNING OBJECTIVES</Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            In this course, the learners will be able to develop the working
            expertise of the following:- <br />
            1. Working expertise of DDL and DML commands with their application
            on solving real time problems. <br />
            2. Ability to apply filters using where clause and nested queries,
            integrity constraints at table level and column level and to use
            built-in functions including numeric, character and date functions.{" "}
            <br />
            3. Adequate knowledge to fetch data from multiple tables using
            different types of JOIN operations. <br />
            4. Knowledge of the generic structure of PL/SQL programs based on
            different PL/SQL control structures – Triggers, Cursors, Functions
            &amp; Procedures and to apply transaction management concepts using
            Save point, Rollback and Commit statements.
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />
        </CardContent>
      </Card>
    </>
  );
}

export default JLab;
