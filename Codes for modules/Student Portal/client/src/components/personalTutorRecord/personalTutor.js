import React from "react";
import {} from "@mui/material";

import Dashboard from "../dashboard/dashboard";
import GetPersonalTutor from "./getPersonalTutor";
import CreatePersonalTutor from "./createPersonalTutor";
import UpdatePersonalTutor from "./updatePersonalTutor";
import ViewPersonalTutor from "./viewPersonalTutor";
import SearchPersonalTutor from "./searchPersonalTutor";

export const PersonalTutor = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetPersonalTutor />
      </div>
    </>
  );
};

export const PersonalTutorCreate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <CreatePersonalTutor />
      </div>
    </>
  );
};

export const PersonalTutorUpdate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <UpdatePersonalTutor />
      </div>
    </>
  );
};

export const PersonalTutorView = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <ViewPersonalTutor />
      </div>
    </>
  );
};

export const PersonalTutorSearch = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <SearchPersonalTutor />
      </div>
    </>
  );
};
