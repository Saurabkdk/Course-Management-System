import React from "react";
import Dashboard from "../dashboard/dashboard";
import CheckStudentStaff from "./checkStudentStaff";
import GetStaffList from "./getStaffList";
import GetStudentList from "./getStudentList";
import StaffReport from "./staffReport";
import StudentReport from "./studentReport";

export const Report = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <CheckStudentStaff />
      </div>
    </>
  );
};

export const ReportStaffList = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetStaffList />
      </div>
    </>
  );
};

export const ReportStudentList = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetStudentList />
      </div>
    </>
  );
};

export const ReportStaff = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <StaffReport />
      </div>
    </>
  );
};

export const ReportStudent = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <StudentReport />
      </div>
    </>
  );
};
