import { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";
import { storage, db } from "../../../../../firebase";
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
import { collection, addDoc } from "firebase/firestore";

export default function BasicTable() {
  const [data, setData] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteFile, setNoteFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const fetchData = async () => {
    try {
      const listRef = ref(storage, "MCA/First/First_Sem/DS/DS/UserNotes");
      const listResult = await listAll(listRef);
      const noteNames = listResult.items.map((item) => item.name);
      setData(noteNames);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const download = async (name) => {
    try {
      const url = await getDownloadURL(
        ref(storage, `MCA/First/First_Sem/DS/DS/UserNotes/${name}`)
      );
      const win = window.open(url, "_blank");
      if (win != null) {
        win.focus();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    setNoteFile(e.target.files[0]);
  };

  const handleNoteUpload = async () => {
    if (!noteFile || isUploading) return;

    setIsUploading(true);
    const storageRef = ref(storage, "MCA/First/First_Sem/DS/DS/UserNotes");
    const fileRef = ref(storageRef, noteFile.name);

    try {
      // Upload file to Storage
      await uploadBytes(fileRef, noteFile);

      // Reset form
      setNoteTitle("");
      setNoteFile(null);

      // Fetch updated list
      await fetchData();

      alert("File uploaded successfully!");

      // Force reload the page after successful upload
      // window.location.reload();
    } catch (error) {
      console.error("Error uploading note:", error);
      alert("Failed to upload note. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const Listing = ({ data }) => {
    return (
      <TableContainer
        component={Paper}
        style={{ borderRadius: "10px", width: "50%", margin: "40px" }}
      >
        <Table aria-label="simple table">
          <TableBody>
            {data.map((title) => (
              <TableRow key={title}>
                <TableCell>{title}</TableCell>
                <TableCell>
                  <Button onClick={() => download(title)}>Download</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Container className="container">
      <Box margin="25px">
        <Typography variant="h5">Discrete Structure (MCA-101)</Typography>
      </Box>
      <input type="file" onChange={handleFileChange} disabled={isUploading} />
      <Button onClick={handleNoteUpload} disabled={!noteFile || isUploading}>
        {isUploading ? "Uploading..." : "Upload Note"}
      </Button>
      <Listing data={data} />
    </Container>
  );
}
