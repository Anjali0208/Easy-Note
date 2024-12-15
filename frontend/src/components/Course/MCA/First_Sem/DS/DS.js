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
      <div className="course">
        <h1>Discrete Structure (MCA-101)</h1>
      </div>

      {/* 3 links for syllabus, notes and question paper */}
      <div style={{ textAlign: "center" }}>
        <Link to="/ds" style={{ textDecoration: "none", marginRight: "20px" }}>
          <Button variant="outlined">Syllabus</Button>
        </Link>

        <Link
          to="/notes_ds"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          <Button variant="outlined">Notes</Button>
        </Link>

        <Link
          to="/ds_qp"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          <Button variant="outlined">Question Paper</Button>
        </Link>
        <Link
          to="/ds_ebook"
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
              Chapter / Book Reference: TB1 [Chapters 2, 4, 5, 6, 7]; TB2
              [Chapters 2, 3]; TB3 [Chapter 4, 7, 8, 10, 11]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Sets Theory Concepts</strong>: Sets, Subsets, Power Set,
            Multi-sets, Operations on Sets, Algebra of sets, Principle of
            Inclusion and Exclusion; Cartesian Product, Relations, Types of
            Relations, Equivalence Relation, Partial Order Relation, Closure of
            Relation; Function, Properties of Functions, One-one Function,
            Many-one Function, Onto function, Composition of a Function,
            Invertible Function. <br />
            <strong>Combinatorics</strong>: Permutation, Combination,
            Combination with Unlimited Repetition, Pigeonhole Principle.
            <br />
            <strong>Recurrence Relations</strong>: Definition, Solution of
            Linear First-order Recurrence Relations with Constant Coefficients
            (Homogeneous and Non-homogeneous).{" "}
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – II</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapters 1, 4, 5, 10]; TB2
              [Chapters 1, 4]; TB3 [Chapters 2, 3, 9]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Formal logic:</strong> Statement, Symbolic Representation,
            Tautologies, Fallacy, Operations on Logic, Logically Equivalence,
            Algebra of Propositions, Arguments and Validity, Rules of Inference
            for Propositional Logic, Normal Forms. <br />
            <strong>Methods of Proofs:</strong> Direct Proof, Indirect Proof,
            Proof by Contradiction, Proof by Exhaustive Cases, Principle of
            Mathematical Induction, Principle of Complete Induction.
            <br />
            <strong>Lattices:</strong> Poset, Lattice, Sublattices, Types of
            Lattices - Bounded Lattice, Distributive Lattice, Complemented
            Lattice; Isomorphic Lattices.
            <br />
            <strong>Boolean Algebra:</strong> Definition, Subalgebra, Boolean
            Function, Boolean Expressions, Minimization of Boolean Function,
            K-Map.
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – III</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapters 3, 11]; TB2 [Chapters 3,
              6]; TB3 [Chapters 6, 12, 20]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Number Theory:</strong> Primes, Division Algorithm, Greatest
            Common Divisor (GCD), LCM, Euclidean Algorithm, Fundamental Theorem
            of Arithmetic, Congruences, Linear Congruence equations,
            Chinese-Remainder Theorem, Euler Phi function, Fermat’s Little
            Theorem, Applications of Congruences – ISBN, UPC, Introduction to
            Cryptography.
            <br />
            <strong>Group Theory:</strong> Definition, Groups as Symmetries,
            Subgroups, Cosets, Cyclic Group, Normal Subgroups, Quotient Group,
            Lagrange’s Theorem, Homomorphism, Permutation Group.
          </Typography>

          <Divider
            style={{ background: "black", marginTop: "5px" }}
            variant=""
          />

          <Typography sx={{ paddingTop: "15px" }}>UNIT – IV</Typography>

          <Typography>
            <strong>
              Chapter / Book Reference: TB1 [Chapter 8]; TB2 [Chapter 5]; TB3
              [Chapters 14, 15]
            </strong>
          </Typography>

          <Typography
            sx={{ lineHeight: 1.5, paddingTop: 1 }}
            color="text.secondary"
          >
            <strong>Graph Theory:</strong> Graphs, Types of Graphs, Degree of a
            Vertex, Subgraphs and Isomorphic Graphs, Representation of Graphs,
            Operations of Graphs, Walks and Paths, Connectivity, Weighted
            Graphs, Euler Graph, Fluery’s Algorithm, Hamiltonian Graph,
            Cut-Vertices and Cut-Edges, Planar Graphs, Euler’s formula, Graph
            Colouring - Vertex Colouring, Edge Colouring, Chromatic Number and
            Chromatic Polynomial, Welch-Powell Algorithm, Four Colour
            Conjecture, Five Colour Theorem (with proof).
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

export default DS;
