// import './App.css';

import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import CourseMCA from "./components/Course/MCA/CourseMCA";
import CourseMCA2 from "./components/Course/MCA/CourseMCA2";
import CourseBCA from "./components/Course/BCA/CourseBCA";

import DS from "./components/Course/MCA/First_Sem/DS/DS";
import NotesDS from "./components/Course/MCA/First_Sem/DS/NotesDS";
import QPDS from "./components/Course/MCA/First_Sem/DS/QPDS";
import DS_Ebook from "./components/Course/MCA/First_Sem/DS/DS_Ebook";

import DBMS from "./components/Course/MCA/First_Sem/DBMS/DBMS";
import DBMSNotes from "./components/Course/MCA/First_Sem/DBMS/DBMSNotes";
import DBMS_Ebook from "./components/Course/MCA/First_Sem/DBMS/DBMS_Ebook";
import DBMSQP from "./components/Course/MCA/First_Sem/DBMS/DBMSQP";
import DBMSLab from "./components/Course/MCA/First_Sem/DBMS/DBMSLab";

import JAVA from "./components/Course/MCA/First_Sem/JAVA/JAVA";
import JAVANotes from "./components/Course/MCA/First_Sem/JAVA/JAVANotes";
import JAVA_Ebook from "./components/Course/MCA/First_Sem/JAVA/JAVA_Ebook";
import JAVAQP from "./components/Course/MCA/First_Sem/JAVA/JAVAQP";
import JLab from "./components/Course/MCA/First_Sem/JAVA/JAVALab.js";

import CN from "./components/Course/MCA/First_Sem/CN/CN";
import CNNotes from "./components/Course/MCA/First_Sem/CN/CNNotes";
import CNLab from "./components/Course/MCA/First_Sem/CN/CNLab";
import CNQP from "./components/Course/MCA/First_Sem/CN/CNQP";
import CN_Prac from "./components/Course/MCA/First_Sem/CN/CN_Prac";
import CN_Ebook from "./components/Course/MCA/First_Sem/CN/CN_Ebook";

import OS from "./components/Course/MCA/First_Sem/OS/OS";
import OSLab from "./components/Course/MCA/First_Sem/OS/OSLab";
import OS_Ebook from "./components/Course/MCA/First_Sem/OS/OS_Ebook";
import OSNotes from "./components/Course/MCA/First_Sem/OS/OSNotes";
import OSQP from "./components/Course/MCA/First_Sem/OS/OSQP";

// minor project and Neus
import Minor from "./components/Course/MCA/First_Sem/Minor/Minor";
import Nues from "./components/Course/MCA/First_Sem/NUES/Nues";
// import Design from "./components/Course/Third_Sem/Design/Design";
// import NotesDesign from "./components/Course/Third_Sem/Design/NotesDesign";
// import QPDesign from "./components/Course/Third_Sem/Design/QPDesign";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import Chatting from "./components/Chatting/Chatting";
import Contact from "./components/Contact/Contact";
import Logout from "./components/Logout/Logout";
import DFS from "./components/Course/MCA/Second_Sem/DFS/DFS";
import DFSLab from "./components/Course/MCA/Second_Sem/DFS/DFSLab";
import DFSQP from "./components/Course/MCA/Second_Sem/DFS/DFSQP";
import DFSNotes from "./components/Course/MCA/Second_Sem/DFS/DFSNotes";

// BCA
import DSB from "./components/Course/BCA/First_Sem/DS/DSB";
import C from "./components/Course/BCA/First_Sem/C/C";
import CNotes from "./components/Course/BCA/First_Sem/C/CNotes";

import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer.js";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logout" element={<Logout />} />

      {/* Courses */}
      <Route path="/course_mca_first" element={<CourseMCA />} />
      <Route path="/course_mca_second" element={<CourseMCA2 />} />
      <Route path="/course_bca_first" element={<CourseBCA />} />

      {/* First Year MCA*/}

      {/* First Sem */}
      <Route path="/ds" element={<DS />} />
      <Route path="/notes_ds" element={<NotesDS />} />
      <Route path="/ds_qp" element={<QPDS />} />
      <Route path="ds_ebook" element={<DS_Ebook />} />

      <Route path="/dbms" element={<DBMS />} />
      <Route path="/notes_dbms" element={<DBMSNotes />} />
      <Route path="/dbms_ebook" element={<DBMS_Ebook />} />
      <Route path="/dbms_qp" element={<DBMSQP />} />
      <Route path="/dbms_lab" element={<DBMSLab />} />

      <Route path="/java" element={<JAVA />} />
      <Route path="/notes_java" element={<JAVANotes />} />
      <Route path="/java_ebook" element={<JAVA_Ebook />} />
      <Route path="/java_qp" element={<JAVAQP />} />
      <Route path="/java_lab" element={<JLab />} />

      <Route path="/cn" element={<CN />} />
      <Route path="/notes_cn" element={<CNNotes />} />
      <Route path="/cn_qp" element={<CNQP />} />
      <Route path="/cn_lab" element={<CNLab />} />
      <Route path="/cn_prac" element={<CN_Prac />} />
      <Route path="cn_ebook" element={<CN_Ebook />} />

      <Route path="/os" element={<OS />} />
      <Route path="/notes_os" element={<OSNotes />} />
      <Route path="/os_ebook" element={<OS_Ebook />} />
      <Route path="/os_qp" element={<OSQP />} />
      <Route path="/os_lab" element={<OSLab />} />

      <Route path="/minor" element={<Minor />} />
      <Route path="/nues" element={<Nues />} />

      {/* Second Sem */}

      <Route path="/dfs" element={<DFS />} />
      <Route path="/dfs_notes" element={<DFSNotes />} />
      <Route path="/dfs_qp" element={<DFSQP />} />
      <Route path="/dfs_lab" element={<DFSLab />} />

      {/* Second Year */}
      {/* <Route path="/design" element={<Design />} />
      <Route path="/notes_design" element={<NotesDesign />} />
      <Route path="/design_qp" element={<QPDesign />} /> */}

      {/* First Year BCA */}
      <Route path="/ds_bca" element={<DSB />} />

      <Route path="/c" element={<C />} />
      <Route path="/notes_c" element={<CNotes />} />
    </Routes>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="app">
        <userContext.Provider value={{ state, dispatch }}>
          <Header />
          <Routing />
          <Footer />
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;
export const userContext = createContext();
