import React from "react";
import {} from "@mui/material";

import "./staffRecord.css";

import Dashboard from "../dashboard/dashboard";
import GetStaff from "./getStaff";
import CreateStaff from "./createStaff";
import UpdateStaff from "./updateStaff";
import ViewStaff from "./viewStaff";
import SearchStaff from "./searchStaff";

export const Staff = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetStaff />
      </div>
    </>
  );
};

export const StaffCreate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <CreateStaff />
      </div>
    </>
  );
};

export const StaffUpdate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <UpdateStaff />
      </div>
    </>
  );
};

export const StaffView = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <ViewStaff />
      </div>
    </>
  );
};

export const StaffSearch = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <SearchStaff />
      </div>
    </>
  );
};
