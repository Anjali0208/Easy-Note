import React from "react";
// import Header from "../../../../Header";
import Button from "@mui/material/Button";
import "../../Course.css";
import Tables from "../../../Tables";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

function CN() {
  return (
    <>
      <div style={{ marginTop: "40px", textAlign: "center", color: "grey" }}>
        <h1>Minor Project – I (MCA-169)</h1>
      </div>

      <div style={{ margin: "50px" }}>This page contains Syllabus of MCA</div>

      {/* Description table */}
      <Tables
        title="Minor Project"
        sn="minor"
        cc="MCA169"
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
            In this course, the learners will be able to develop working
            expertise of solving complex computing problems through project
            based learning approach using real world case studies by
            implementing the concepts studied in the theory courses of this
            semester.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CN;
