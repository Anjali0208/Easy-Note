import React from "react";
import Button from "@mui/material/Button";
import "../../Course.css";
import Tables from "../../../Tables";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

function DFS() {
  return (
    <>
      <div style={{ marginTop: "40px", textAlign: "center", color: "grey" }}>
        <h1>Operating Systems with Linux (MCA-105)</h1>
      </div>

      {/* 3 links for syllabus, notes and question paper */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/os" style={{ textDecoration: "none", marginRight: "20px" }}>
          <Button variant="outlined">Syllabus</Button>
        </Link>

        <Link
          to="/notes_os"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          <Button variant="outlined">Notes</Button>
        </Link>

        <Link to="/os_qp" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Question Paper</Button>
        </Link>
      </div>
      <div style={{ margin: "50px" }}>This page contains Syllabus of MCA</div>

      {/* Description table */}
      <Tables
        title="Discrete Mathematics"
        sn="DS"
        cc="MCA101"
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
              Chapter/Book Reference: TB1 [Chapter 1, 2, 3]; TB2 [Chapter 2, 3];
              TB4 [Chapter 1]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Operating System:</strong>: Concept, Components of Operating
            System, Operating System Operations, Protection and Security.
            Computing Environment. <br />
            <strong>Abstract View of OS:</strong> User view, System View,
            Operating System Services
            <strong>System Calls:</strong>: Concept, types of System Calls.
            <br />
            <strong>Computer System Architecture:</strong>: Single-Processor
            Systems, Multiprocessor Systems.
            <br />
            <strong>Types of Operating systems:</strong>Batch Operating System,
            Multi-Programmed Operating System, Time-Shared Operating System,
            Real Time Operating System, Distributed Operating Systems.
            <br />
            <strong>Process Management:</strong>Process Concept, Operation on
            Processes, Cooperating Processes, Inter-Process Communication,
            Threads.
            <br />
            <strong>Linux Operating System: </strong>Introduction to Linux OS,
            Basic Commands of Linux OS.
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – II</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapter 5, 6]; TB2 [Chapter 9]; TB3
              [Chapter-7, 15]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Process Synchronization:</strong> Introduction, The
            Critical-Section Problem with solution, Bakery Algorithm,
            Synchronization hardware, Semaphores, Semaphores Implementation,
            Classical Problems of Synchronization with algorithms, Critical
            Regions, Monitors.
            <br />
            <strong>CPU Scheduling:</strong> Basic Concepts, Scheduling
            Criteria, Scheduling algorithms, Multilevel Queue Scheduling,
            Multilevel Feedback Queue Scheduling.
            <br />
            <strong>Linux Operating System:</strong> Process Management Commands
            and System Calls.
            <br />
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – III</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapter 7, 8, 9]; TB3 [Chapter 15]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Deadlock:</strong> System Models, Deadlock Characterization,
            Resource Allocation Graph, Deadlock Prevention, Avoidance, Detection
            and Recovery, Banker’s algorithm.
            <br />
            <strong>Memory Management: Main Memory</strong> Contiguous Memory
            Allocation, Fragmentation, Paging, And Segmentation. <br />
            <strong>Virtual Memory:</strong>Demand Paging, Page Replacement,
            Page replacement algorithm, Allocation of frames, Thrashing.
            <br />
            <strong>Linux Operating System:</strong>Memory Management Commands
            and System Calls.
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – IV</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1[Chapter 9, 10, 11, 12]; TB2 [Chapter
              5, 11]; TB3[Chapter 3, 7]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>
              File, Devices and Secondary Storage Management: File-System
              Interface:
            </strong>{" "}
            Concepts, Access Methods, Directory and Disk Structure. File-System
            Structure, File-System Implementation, Directory Implementation,
            Allocation Methods, Free-Space Management. <br />
            <strong>Devices:</strong>Types of devices, Channels and Control
            Unit, Multiple Paths, Block Multiplexing. <br />
            <strong>Secondary Storage:</strong>Mass-Storage Structure, Disk
            Structure, Disk Scheduling Algorithms, Disk Management, RAID
            structure of disk.
            <br />
            <strong>Linux Operating System:</strong>File Management Commands and
            System Calls.
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ minWidth: 275, width: 1200, margin: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20, paddingBottom: 1 }}>
            <strong>Text Books</strong>
          </Typography>

          <Typography>
            <strong>TB1.</strong> Kenneth H. Rosen, “Discrete Mathematics & its
            Applications: With Combinatorics and Graph Theory”, McGraw Hill, 7th
            Edition, 2017. <br />
            <strong>TB2.</strong> J. P. Tremblay and R. Manohar, “Discrete
            Mathematical Structures with Applications to Computer Science”,
            McGraw Hill, 1st Edition, 2001. <br />
            <strong>TB3.</strong> Swapan Kumar Sarkar, “A Textbook of Discrete
            Mathematics”, S. Chand Publishing, 9th Edition, 2019.
          </Typography>

          <Typography sx={{ fontSize: 20, paddingBottom: 1, paddingTop: 3 }}>
            <strong>Reference Books</strong>
          </Typography>

          <Typography>
            <strong>RB1.</strong> Kolman, Busby and Ross, “Discrete Mathematical
            Structures”, Pearson, 10 Edition, 2015. <br />
            <strong>RB2.</strong> D. S. Malik and M. K. Sen, “Discrete
            Mathematics: Theory and Applications”, Cengage, 1st Edition, 2012.
            <br />
            <strong>RB3.</strong> C. L. Liu, D. P. Mohapatra, “Elements of
            Discrete Mathematics”, McGraw Hill, 4 Edition, 2012. <br />
            <strong>RB4. </strong>S. Santha,st “Discrete Mathematics with
            Combinatorics and Graph Theory”, Cengage, 1 Edition, 2009.
            <br />
            <strong>RB5.</strong> Narsingh Deo, “Graph Theory with Applications
            to Engineering and Computer Science”, PHI, 1st Edition (1979), 24th
            Indian Print, 2003.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default DFS;
