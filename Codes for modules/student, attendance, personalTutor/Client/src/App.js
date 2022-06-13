import React from "react";
import {  } from "@mui/material";
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Login from "./components/login/login";
import { StudentEnrolled,StudentUnEnrolled, StudentCreate, StudentSearch, StudentUpdate, StudentView } from "./components/studentRecord/student";
import { PersonalTutor, PersonalTutorCreate, PersonalTutorUpdate, PersonalTutorView, PersonalTutorSearch } from "./components/personalTutorRecord/personalTutor"; 
import { PersonalTutorStudent, PersonalTutorStudentCreate, PersonalTutorStudentUpdate, PersonalTutorStudentView, PersonalTutorStudentSearch } from "./components/personalTutorStudentRecord/personalTutorStudent";

const App = () => {
  return(
    <>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/studentEnrolled" element={<StudentEnrolled />}></Route>
      <Route exact path="/studentUnEnrolled" element={<StudentUnEnrolled />}></Route>
      <Route exact path="/student/create" element={<StudentCreate />}></Route>
      <Route exact path="/student/edit/:id" element={<StudentUpdate />}></Route>
      <Route exact path="/student/view/:id" element={<StudentView />}></Route>
      <Route exact path="/student/search" element={<StudentSearch />}></Route>

      <Route exact path="/personalTutor" element={<PersonalTutor />}></Route>
      <Route exact path="/personalTutor/create" element={<PersonalTutorCreate />}></Route>
      <Route exact path="/personalTutor/edit/:id" element={<PersonalTutorUpdate />}></Route>
      <Route exact path="/personalTutor/view/:id" element={<PersonalTutorView />}></Route>
      <Route exact path="/personalTutor/search" element={<PersonalTutorSearch />}></Route>
      
      <Route exact path="/personalTutorStudent/:id" element={<PersonalTutorStudent />}></Route>
      <Route exact path="/personalTutorStudent/create/:id" element={<PersonalTutorStudentCreate />}></Route>
      <Route exact path="/personalTutorStudent/edit/:id" element={<PersonalTutorStudentUpdate />}></Route>
      <Route exact path="/personalTutorStudent/view/:id" element={<PersonalTutorStudentView />}></Route>
      <Route exact path="/personalTutorStudent/search" element={<PersonalTutorStudentSearch />}></Route>


    </Routes>
    </>
  )
}

export default App;
