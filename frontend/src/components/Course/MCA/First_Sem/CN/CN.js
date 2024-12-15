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
        <h1>Computer Networks (MCA-103)</h1>
      </div>

      {/*  links for syllabus, notes and question paper etc */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to="/cn_lab"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          <Button variant="outlined">Syllabus</Button>
        </Link>

        <Link
          to="/notes_cn"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          <Button variant="outlined">Notes</Button>
        </Link>

        <Link
          to="/cn_qp"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          <Button variant="outlined">Question Paper</Button>
        </Link>
        <Link
          to="/cn_ebook"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          <Button variant="outlined">Ebook</Button>
        </Link>
        <Link to="/course_mca_first" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Back to course</Button>
        </Link>
      </div>
      <div style={{ margin: "50px" }}>This page contains Syllabus of MCA</div>

      {/* Description table */}
      <Tables
        title="Computer Network"
        sn="CN"
        cc="MCA103"
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
              Chapter / Book Reference: TB1 [Chapters 2, 4, 5, 6, 7]; TB2
              [Chapters 2, 3]; TB3 [Chapter 4, 7, 8, 10, 11]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Introductory Concepts:</strong>: Goals and Applications of
            Computer Networks, OSI reference model, TCP/IP protocol suite,
            networks topology & design. Networking Devices (Hub, Bridge, Switch
            & router). <br />
            <strong>Physical Layer:</strong>: The functions of Physical Layer,
            Guided Transmission Media, Wireless Transmission media,
            Communication Satellites, Digital Signal Encoding Formats, Digital
            to analog Modulation, Digitization – Sampling Theorem,PCM, DM,
            Analog to digital Modulation, The Mobile Telephone System,
            Multiplexing
            <br />
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – II</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapters 9,10,11, 12, 13, 14, 15,
              16, 17]; TB3 [Chapter 3]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>The Data Link Layer:</strong> Data Link Layer introduction,
            Error Detection and Correction, Flow Control Protocols, Error
            Control protocols.
            <br />
            <strong>Medium access sub-layer:</strong> Channel allocation
            problem, ALOHA Protocols, Carrier Sense Multiple Access Protocols,
            CSMA with Collision Detection, Collision free protocols, Ethernet,
            wireless LANs, Blue Tooth, Wi-Fi.
            <br />
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – III</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapters 18-22]; TB2 [Chapters
              [4-7]]; TB3 [Chapter 5]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Network Layer:</strong> unctions of network layer, <br />
            <strong>IPv4:</strong> Classful & classless addressing, Routing
            algorithms, IP packet format, <br />
            <strong>IPv6:</strong> addressing, neighbor discovery, address auto
            configuration <br />
            <strong>Mobile IP:</strong>Mobility in networks, IP Multicasting
            (Source based tree & Group shared tree).
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – IV</Typography>

          <Typography>
            <strong>
              {" "}
              Chapter/ Book Reference: TB1 [Chapters 23- 26, 30-32]; TB2
              [Chapters 13-15]; TB3 [Chapters 6-7]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Transport Layer:</strong> Transport layer functions,
            Transport layer protocols, UDP, TCP,connection management, flow
            control, error control and congestion control. <br />
            <strong>Application Layer:</strong>DNS, Electronic Mail, www,
            firewalls, Concept of public & private keys.
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ minWidth: 275, width: 1200, margin: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20, paddingBottom: 1 }}>
            <strong>Text Books</strong>
          </Typography>

          <Typography>
            <strong>TB1.</strong> Behrouz A. Forouzan, “Data Communication and
            Networking”, TMH, 5 2017.
            <br />
            <strong>TB2.</strong> Behrouz A. Forouzan, “TCP/IP Protocol Suite”,
            Tata Mc Grew Hill, 4 2009.
            <br />
            <strong>TB3.</strong> S. Tanenbaum, “Computer Networks”, Pearson, 5
            Edition, 2013.
          </Typography>

          <Typography sx={{ fontSize: 20, paddingBottom: 1, paddingTop: 3 }}>
            <strong>Reference Books</strong>
          </Typography>

          <Typography>
            <strong>RB1.</strong> Douglas E. Comer, “Computer Networks and
            Internet”, Pearson, 6th Edition 2018 <br />
            <strong>RB2.</strong> Douglas E. Comer, “Internetworking with
            TCP/IP”, Pearson, 6th Edition, 2015.
            <br />
            <strong>RB3.</strong> S. Keshav, “An Engineering Approach to
            Computer Networking”, Pearson, 1 Edition, 2002.
            <br />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CN;
