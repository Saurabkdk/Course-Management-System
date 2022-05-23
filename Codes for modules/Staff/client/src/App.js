import React from "react";
import {  } from "@mui/material";
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Staff, StaffCreate, StaffSearch, StaffUpdate, StaffView } from "./components/staffRecord/staff";
import Student from "./components/studentRecord/student";
import Login from "./components/login/login";

const App = () => {
  return(
    <>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/staff" element={<Staff />}></Route>
      <Route exact path="/student" element={<Student />}></Route>
      <Route exact path="/staff/create" element={<StaffCreate />}></Route>
      <Route exact path="/staff/edit/:id" element={<StaffUpdate />}></Route>
      <Route exact path="/staff/view/:id" element={<StaffView />}></Route>
      <Route exact path="/staff/search" element={<StaffSearch />}></Route>
    </Routes>
    </>
  )
}

export default App;
