import React from "react";
// import Header from '../../../Header'
// import Button from '@mui/material/Button';
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
        <h1>Computer Networks Lab (MCA-161)</h1>
      </div>

      <div style={{ margin: "50px" }}>This page contains Syllabus of MCA</div>

      {/* Description table */}
      <Tables
        title="Computer Networks Lab"
        sn="CNLAB"
        cc="MCA161"
        nc="Lab"
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
            1. Operating principles of computer networking and acquire practical
            notions of various communication protocols.
            <br />
            2. Analysing the network routing algorithms and a practical approach
            to Ethernet/Internet networking.
            <br />
            3. Implementing the concept of data transfer between nodes.
            <br />
            4. Assembling of networks, and experimenting to understand the
            layered architecture
            <br />
            5. Evaluating the challenges in building networks for organizations.
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
