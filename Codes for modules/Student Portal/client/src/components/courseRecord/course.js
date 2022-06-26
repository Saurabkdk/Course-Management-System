import React from "react";
import {} from "@mui/material";

import Dashboard from "../dashboard/dashboard";
import GetCourse from "./getCourses";
import CreateCourse from "./createCourse";
import UpdateCourse from "./updateCourse";
import ViewCourse from "./viewCourse";
import SearchCourse from "./searchCourse";

export const Course = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetCourse />
      </div>
    </>
  );
};

export const CourseCreate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <CreateCourse />
      </div>
    </>
  );
};

export const CourseUpdate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <UpdateCourse />
      </div>
    </>
  );
};

export const CourseView = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <ViewCourse />
      </div>
    </>
  );
};

export const CourseSearch = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <SearchCourse />
      </div>
    </>
  );
};
