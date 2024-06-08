import React from "react";
import "../../Course.css";
import Tables from "../../../Tables";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

function OSLab() {
  return (
    <>
      <div style={{ marginTop: "40px", textAlign: "center", color: "grey" }}>
        <h1>Operating Systems with Linux Lab</h1>
      </div>

      <div style={{ margin: "50px" }}>This page contains Syllabus of MCA</div>

      {/* Description table */}
      <Tables
        title="Operating Systems with Linux Lab"
        sn="OSLAB"
        cc="MCA163"
        nc="Practical"
        sem="First"
        ec="Complusary"
      />

      {/* COURSE DESCRIPTION */}
      <Card variant="outlined" sx={{ minWidth: 275, width: 1200, margin: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>LEARNING OBJECTIVES:</Typography>

          <Typography sx={{ paddingTop: "15px" }}>
            1.Build the Linux operating system and configure it. <br />
            2.Discover Linux commands for working with Linux Environment <br />
            3.IAppraise the Process Management algorithms, Process Management
            system calls, Inter Process Communication and CPU Scheduling
            algorithms <br />
            4.Create programs using systems calls for memory management and File
            Management in C programming, also simulate Deadlock avoidance
            algorithm using C. <br />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default OSLab;
