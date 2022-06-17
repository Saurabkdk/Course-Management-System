import React from "react";
import {} from "@mui/material";

import "./staffRecord.css";

import Dashboard from "../dashboard/dashboard";
import GetAttendance from "./getAttendance";
import CreateAttendance from "./createAttendance";
import UpdateAttendance from "./updateAttendance";
import ViewAttendance from "./viewAttendance";
import SearchAttendance from "./searchAttendance";

export const Attendance = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetAttendance />
      </div>
    </>
  );
};

export const AttendanceCreate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <CreateAttendance />
      </div>
    </>
  );
};

export const AttendanceUpdate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <UpdateAttendance />
      </div>
    </>
  );
};

export const AttendanceView = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <ViewAttendance />
      </div>
    </>
  );
};

export const AttendanceSearch = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <SearchAttendance />
      </div>
    </>
  );
};
