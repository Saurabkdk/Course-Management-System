import React from "react";
import {} from "@mui/material";

import "./staffRecord.css";

import Dashboard from "../dashboard/dashboard";
import GetPersonalTutorStudent from "./getPersonalTutorStudent";
import CreatePersonalTutorStudent from "./createPersonalTutorStudent";
import UpdatePersonalTutorStudent from "./updatePersonalTutorStudent";
import ViewPersonalTutorStudent from "./viewPersonalTutorStudent";
import SearchPersonalTutorStudent from "./searchPersonalTutorStudent";

export const PersonalTutorStudent = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetPersonalTutorStudent />
      </div>
    </>
  );
};

export const PersonalTutorStudentCreate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <CreatePersonalTutorStudent />
      </div>
    </>
  );
};

export const PersonalTutorStudentUpdate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <UpdatePersonalTutorStudent />
      </div>
    </>
  );
};

export const PersonalTutorStudentView = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <ViewPersonalTutorStudent />
      </div>
    </>
  );
};

export const PersonalTutorStudentSearch = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <SearchPersonalTutorStudent />
      </div>
    </>
  );
};
