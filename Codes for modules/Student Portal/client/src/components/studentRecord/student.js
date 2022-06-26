import React from "react";
import {} from "@mui/material";

import Dashboard from "../dashboard/dashboard";
import GetEnrolledStudent from "./getEnrolledStudent";
import GetUnEnrolledStudent from "./getUnEnrolledStudent";
import CreateStudent from "./createStudent";
import UpdateStudent from "./updateStudent";
import ViewStudent from "./viewStudent";
import SearchStudent from "./searchStudent";

export const StudentEnrolled = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetEnrolledStudent />
      </div>
    </>
  );
};

export const StudentUnEnrolled = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetUnEnrolledStudent />
      </div>
    </>
  );
};

export const StudentCreate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <CreateStudent />
      </div>
    </>
  );
};

export const StudentUpdate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <UpdateStudent />
      </div>
    </>
  );
};

export const StudentView = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <ViewStudent />
      </div>
    </>
  );
};

export const StudentSearch = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <SearchStudent />
      </div>
    </>
  );
};
