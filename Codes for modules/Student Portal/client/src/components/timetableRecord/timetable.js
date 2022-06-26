import React from "react";
import {} from "@mui/material";

import Dashboard from "../dashboard/dashboard";
import GetTimetable from "./getTimetable";
import CreateTimetable from "./createTimetable";
import UpdateTimetable from "./updateTimetable";
import ViewTimetable from "./viewTimetable";


export const Timetable = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetTimetable />
      </div>
    </>
  );
};

export const TimetableCreate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <CreateTimetable />
      </div>
    </>
  );
};

export const TimetableUpdate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <UpdateTimetable />
      </div>
    </>
  );
};

export const TimetableView = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <ViewTimetable />
      </div>
    </>
  );
};

// export const StaffSearch = () => {
//   return (
//     <>
//       <div className="container">
//         <Dashboard />
//         <SearchStaff />
//       </div>
//     </>
//   );
// };
