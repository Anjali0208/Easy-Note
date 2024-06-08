import React, { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../../../../firebase";
import {
  Box,
  Table,
  Button,
  Container,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

export default function BasicTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const listRef = ref(storage, "MCA/First/First_Sem/OS/OS_qp/");
    listAll(listRef)
      .then((res) => {
        res.items.forEach((item) => {
          setData((arr) => [...arr, item.name]);
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const download = (name) => {
    getDownloadURL(ref(storage, `MCA/First/First_Sem/OS/OS_qp/${name}`))
      .then((url) => {
        const win = window.open(url, "_blank");
        if (win != null) {
          win.focus();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Listing = ({ data }) => {
    return (
      <TableContainer
        component={Paper}
        style={{ borderRadius: "10px", width: "50%", margin: "40px" }}
      >
        <Table aria-label="simple table">
          <TableBody>
            {data.map((title) => {
              return (
                <TableRow>
                  <TableCell>{title}</TableCell>
                  <TableCell>
                    <Button onClick={() => download(title)}>Download</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <>
      <Container className="container">
        <Box margin="25px 0px 0px 25px">
          <Typography variant="h5">Operating System Question</Typography>
        </Box>
        <Listing data={data} />
      </Container>
    </>
  );
}
