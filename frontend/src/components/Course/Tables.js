import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function BasicTable({ title, sn, cc, nc, sem, ec }) {
    return (
        <TableContainer component={Paper} style={{ borderRadius: "10px", width: "550px", margin: "40px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableBody>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>{title}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Short Name</TableCell>
                        <TableCell>{sn}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Course Code</TableCell>
                        <TableCell>{cc}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Nature of Code</TableCell>
                        <TableCell>{nc}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Semester</TableCell>
                        <TableCell>{sem}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Elective/Compulsary</TableCell>
                        <TableCell>{ec}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
