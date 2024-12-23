import React, { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";
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
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function BasicTable1() {
  const [data, setData] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteFile, setNoteFile] = useState(null);

  useEffect(() => {
    const listRef = ref(storage, "MCA/First/First_Sem/DBMS/DBMS/DBMS_QP/");
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

  const handleFileChange = (e) => {
    setNoteFile(e.target.files[0]);
  };

  const handleNoteUpload = async () => {
    const storageRef = ref(storage, "MCA/First/First_Sem/DBMS/DBMS/DBMS_QP");
    const fileRef = ref(storageRef, noteFile.name);

    try {
      await uploadBytes(fileRef, noteFile);

      const downloadURL = await getDownloadURL(fileRef);

      const firestore = getFirestore();
      console.log("1");
      await addDoc(collection(firestore, "DBMS_QP"), {
        title: noteTitle,
        fileUrl: downloadURL,
      })
        .then(() => {
          window.location.reload();
        })
        .catch((e) => {
          console.log("error");
        });

      console.log("2");
      // const notesSnapshot = await getDocs(collection(firestore, "UserNotes")); // Updated collection name to UserNotes
      // const updatedData = notesSnapshot.docs.map((doc) => doc.data().title);

      // setData(updatedData);

      setNoteTitle("");
      setNoteFile(null);
    } catch (error) {
      console.error("Error uploading note:", error);
      alert("Failed to upload note. Please try again.");
    }
  };

  const download = (name) => {
    getDownloadURL(ref(storage, `MCA/First/First_Sem/DBMS/DBMS_qp/${name}`))
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
        <Box margin="25px">
          <Typography variant="h5">DBMS Question Papers</Typography>
        </Box>
        <input type="file" onChange={handleFileChange} />
        <Button onClick={handleNoteUpload} disabled={!noteFile}>
          Upload Note
        </Button>
        <Listing data={data} />
      </Container>
    </>
  );
}
