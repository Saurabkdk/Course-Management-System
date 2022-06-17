import React from "react";
import {} from "@mui/material";

import "./staffRecord.css";

import Dashboard from "../dashboard/dashboard";
import GetAttendanceStudent from "./getAttendanceStudent";
import CreateAttendanceStudent from "./createAttendanceStudent";
import UpdateAttendanceStudent from "./updateAttendanceStudent";
import ViewAttendanceStudent from "./viewAttendanceStudent";
import SearchAttendanceStudent from "./searchAttendanceStudent";

export const AttendanceStudent = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetAttendanceStudent />
      </div>
    </>
  );
};

export const AttendanceStudentCreate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <CreateAttendanceStudent />
      </div>
    </>
  );
};

export const AttendanceStudentUpdate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <UpdateAttendanceStudent />
      </div>
    </>
  );
};

export const AttendanceStudentView = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <ViewAttendanceStudent />
      </div>
    </>
  );
};

export const AttendanceStudentSearch = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <SearchAttendanceStudent />
      </div>
    </>
  );
};
