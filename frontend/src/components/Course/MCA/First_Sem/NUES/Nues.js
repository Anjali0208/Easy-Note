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
        <h1>Non-University Examination System (MCA-171)</h1>
      </div>

      <div style={{ margin: "50px" }}>This page contains Syllabus of MCA</div>

      {/* Description table */}
      <Tables
        title="Professional Proficiency – I"
        sn="NUES"
        cc="MCA171"
        nc="Practical"
        sem="First"
        ec="Complusary"
      />

      {/* COURSE DESCRIPTION */}
      <Card variant="outlined" sx={{ minWidth: 275, width: 1200, margin: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>
            Objective and Structure of this Course:
          </Typography>
          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            General Proficiency (under NUES Scheme) is aimed to impart value
            added modules to students, based upon the changing requirements of
            the industry, from time to time. This innovative practice makes the
            scheme open and adaptive to the changing requirements of the
            industry, by keeping inbuilt flexibility of introducing any value
            added module based upon industry input, from time to time. The
            required decision of the value added module and related assessment
            guidelines shall be finalized by the Programme Co-ordination
            Committee, before start of the semester. Its COs and required
            mapping shall be done by the Programme Co-ordination Committee,
            after finalizing the value added module to be offered under this
            course. There shall not be any external examination of the
            University for this course. The performance of the candidates should
            continuously be evaluated by an internal committee, at the College
            level, as per the guidelines of the Programme Coordination
            Committee.
          </Typography>
          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />
          <Typography sx={{ fontSize: 20, paddingTop: "15px" }}>
            Suggestion:
          </Typography>
          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            It is suggested to have Personality Development and Communication
            Skills Course in first semester under Professional Proficiency - I.
            However, the final decision shall be taken by the Programme
            Coordination Committee, before start of the semester.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CN;
