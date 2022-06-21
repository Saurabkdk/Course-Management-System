import React from "react";
import {  } from "@mui/material";
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Staff, StaffCreate, StaffSearch, StaffUpdate, StaffView } from "./components/staffRecord/staff";
import Student from "./components/studentRecord/student";
import { Module, ModuleCreate, ModuleSearch, ModuleUpdate, ModuleView } from "./components/moduleRecord/module";
import { Assignment, AssignmentCreate, AssignmentSubmit, AssignmentUpdate, AssignmentView, Submitted, SubmittedMark, SubmittedSearch, SubmittedView } from "./components/assignmentRecord/assignment";
import { AdminAuthentication } from "./adminAuthentication";
import { RequireAuthentication } from "./RequireAuthentication";
import { Login } from "./components/login/login";
import { Diary, DiaryCreate, DiarySearch, DiaryUpdate, DiaryView } from "./components/diaryRecord/diary";

const App = () => {

  

  return(
    <>
    <AdminAuthentication>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>

      <Route exact path="/staff" element={<RequireAuthentication><Staff /></RequireAuthentication>}></Route>
      <Route exact path="/staff/create" element={<RequireAuthentication><StaffCreate /></RequireAuthentication>}></Route>
      <Route exact path="/staff/edit/:id" element={<RequireAuthentication><StaffUpdate /></RequireAuthentication>}></Route>
      <Route exact path="/staff/view/:id" element={<RequireAuthentication><StaffView /></RequireAuthentication>}></Route>
      <Route exact path="/staff/search" element={<RequireAuthentication><StaffSearch /></RequireAuthentication>}></Route>

      <Route exact path="/student" element={<Student />}></Route>

      <Route exact path="/module" element={<RequireAuthentication><Module /></RequireAuthentication>}></Route>
      <Route exact path="/module/create" element={<RequireAuthentication><ModuleCreate /></RequireAuthentication>}></Route>
      <Route exact path="/module/edit/:id" element={<RequireAuthentication><ModuleUpdate /></RequireAuthentication>}></Route>
      <Route exact path="/module/view/:id" element={<RequireAuthentication><ModuleView /></RequireAuthentication>}></Route>
      <Route exact path="/module/search" element={<RequireAuthentication><ModuleSearch /></RequireAuthentication>}></Route>

      <Route exact path="/assignment" element={<RequireAuthentication><Assignment /></RequireAuthentication>}></Route>
      <Route exact path="/assignment/create" element={<RequireAuthentication><AssignmentCreate /></RequireAuthentication>}></Route>
      <Route exact path="/assignment/edit/:id" element={<RequireAuthentication><AssignmentUpdate /></RequireAuthentication>}></Route>
      <Route exact path="/assignment/view/:id" element={<RequireAuthentication><AssignmentView /></RequireAuthentication>}></Route>

      <Route exact path="/submission" element={<RequireAuthentication><AssignmentSubmit /></RequireAuthentication>}></Route>
      <Route exact path="/submitted" element={<RequireAuthentication><Submitted /></RequireAuthentication>}></Route>
      <Route exact path="/submitted/mark/:id" element={<RequireAuthentication><SubmittedMark /></RequireAuthentication>}></Route>
      <Route exact path="/submitted/view/:id" element={<RequireAuthentication><SubmittedView /></RequireAuthentication>}></Route>
      <Route exact path="/submitted/search/:id" element={<RequireAuthentication><SubmittedSearch /></RequireAuthentication>}></Route>

      <Route exact path="/diary" element={<RequireAuthentication><Diary /></RequireAuthentication>}></Route>
      <Route exact path="/diary/create" element={<RequireAuthentication><DiaryCreate /></RequireAuthentication>}></Route>
      <Route exact path="/diary/edit/:id" element={<RequireAuthentication><DiaryUpdate /></RequireAuthentication>}></Route>
      <Route exact path="/diary/view/:id" element={<RequireAuthentication><DiaryView /></RequireAuthentication>}></Route>
      <Route exact path="/diary/search" element={<RequireAuthentication><DiarySearch /></RequireAuthentication>}></Route>

    </Routes>
    </AdminAuthentication>
    </>
  )
}

export default App;
