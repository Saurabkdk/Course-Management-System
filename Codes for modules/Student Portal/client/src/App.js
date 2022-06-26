import React from "react";
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Staff, StaffCreate, StaffSearch, StaffUpdate, StaffView } from "./components/staffRecord/staff";
import { StudentCreate, StudentEnrolled, StudentSearch, StudentUnEnrolled, StudentUpdate, StudentView } from "./components/studentRecord/student";
import { Module, ModuleCreate, ModuleSearch, ModuleUpdate, ModuleView } from "./components/moduleRecord/module";
import { Assignment, AssignmentCreate, AssignmentSubmit, AssignmentUpdate, AssignmentView, Submitted, SubmittedMark, SubmittedSearch, SubmittedView } from "./components/assignmentRecord/assignment";
import { AdminAuthentication } from "./adminAuthentication";
import { RequireAuthentication } from "./RequireAuthentication";
import { Login } from "./components/login/login";
import { Diary, DiaryCreate, DiarySearch, DiaryUpdate, DiaryView } from "./components/diaryRecord/diary";
import { PersonalTutor, PersonalTutorCreate, PersonalTutorSearch, PersonalTutorUpdate, PersonalTutorView } from "./components/personalTutorRecord/personalTutor";




import { Course, CourseCreate, CourseSearch, CourseUpdate, CourseView } from "./components/courseRecord/course";
import { Timetable, TimetableCreate, TimetableUpdate, TimetableView } from "./components/timetableRecord/timetable";

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

      <Route exact path="/studentEnrolled/view/:id" element={<RequireAuthentication><StudentEnrolled /></RequireAuthentication>}></Route>
      <Route exact path="/studentUnEnrolled" element={<RequireAuthentication><StudentUnEnrolled /></RequireAuthentication>}></Route>
      <Route exact path="/student/create" element={<RequireAuthentication><StudentCreate /></RequireAuthentication>}></Route>
      <Route exact path="/student/edit/:id" element={<RequireAuthentication><StudentUpdate /></RequireAuthentication>}></Route>
      <Route exact path="/student/view/:id" element={<RequireAuthentication><StudentView /></RequireAuthentication>}></Route>
      <Route exact path="/student/search" element={<RequireAuthentication><StudentSearch /></RequireAuthentication>}></Route>

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

      <Route exact path="/personalTutor" element={<RequireAuthentication><PersonalTutor /></RequireAuthentication>}></Route>
      <Route exact path="/personalTutor/create" element={<RequireAuthentication><PersonalTutorCreate /></RequireAuthentication>}></Route>
      <Route exact path="/personalTutor/edit/:id" element={<RequireAuthentication><PersonalTutorUpdate /></RequireAuthentication>}></Route>
      <Route exact path="/personalTutor/view/:id" element={<RequireAuthentication><PersonalTutorView /></RequireAuthentication>}></Route>
      <Route exact path="/personalTutor/search" element={<RequireAuthentication><PersonalTutorSearch /></RequireAuthentication>}></Route>
      
    

      

      <Route exact path="/course" element={<RequireAuthentication><Course /></RequireAuthentication>}></Route>
      <Route exact path="/course/create" element={<RequireAuthentication><CourseCreate /></RequireAuthentication>}></Route>
      <Route exact path="/course/edit/:id" element={<RequireAuthentication><CourseUpdate /></RequireAuthentication>}></Route>
      <Route exact path="/course/view/:id" element={<RequireAuthentication><CourseView /></RequireAuthentication>}></Route>
      <Route exact path="/course/search" element={<RequireAuthentication><CourseSearch /></RequireAuthentication>}></Route>
      
      <Route exact path="/timetable" element={<RequireAuthentication><Timetable /></RequireAuthentication>}></Route>
      <Route exact path="/timetable/create" element={<RequireAuthentication><TimetableCreate /></RequireAuthentication>}></Route>
      <Route exact path="/timetable/edit/:id" element={<RequireAuthentication><TimetableUpdate /></RequireAuthentication>}></Route>
      <Route exact path="/timetable/view/:id" element={<RequireAuthentication><TimetableView /></RequireAuthentication>}></Route>

      
      

    </Routes>
    </AdminAuthentication>
    </>
  )
}

export default App;
