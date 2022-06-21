import React from "react";
import Dashboard from "../dashboard/dashboard";
import CreateDiary from "./createDiary";
import GetDiary from "./getDiary";
import SearchDiary from "./searchDiary";
import UpdateDiary from "./updateDiary";
import ViewDiary from "./viewDiary";

export const Diary = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetDiary />
      </div>
    </>
  );
};

export const DiaryCreate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <CreateDiary />
      </div>
    </>
  );
};

export const DiaryUpdate = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <UpdateDiary />
      </div>
    </>
  );
};

export const DiaryView = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <ViewDiary />
      </div>
    </>
  );
};

export const DiarySearch = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <SearchDiary />
      </div>
    </>
  );
};
