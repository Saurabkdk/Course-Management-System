import React from "react";
import {  } from "@mui/material";
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Login from "./components/login/login";
import { StudentEnrolled,StudentUnEnrolled, StudentCreate, StudentSearch, StudentUpdate, StudentView } from "./components/studentRecord/student";
import { PersonalTutor, PersonalTutorCreate, PersonalTutorUpdate, PersonalTutorView, PersonalTutorSearch } from "./components/personalTutorRecord/personalTutor"; 

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
      
      


    </Routes>
    </>
  )
}

export default App;
