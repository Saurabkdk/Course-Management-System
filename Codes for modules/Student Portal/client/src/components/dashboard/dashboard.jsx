import React from "react";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./dashboard.css";

const Dashboard = () => {
  const id = window.$userId;
  console.log(id);

  return (
    <>
      <div className="dashboard">
        <header className="heading">
          <Typography align="left" color="white">
            STUDENT PORTAL
          </Typography>
        </header>

        <div id="list">
          <List>
            <ListItem>
              <ListItemButton>
                <Link
                  to={`/studentEnrolled/view/${id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography color="white"> Student </Typography>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/staff" style={{ textDecoration: "none" }}>
                  <Typography color="white"> Staff </Typography>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/course" style={{ textDecoration: "none" }}>
                  <Typography color="white"> Course </Typography>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/module" style={{ textDecoration: "none" }}>
                  <Typography color="white"> Module </Typography>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/assignment" style={{ textDecoration: "none" }}>
                  <Typography color="white"> Assignment </Typography>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/personalTutor" style={{ textDecoration: "none" }}>
                  <Typography color="white"> Personal Tutors </Typography>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/timetable" style={{ textDecoration: "none" }}>
                  <Typography color="white"> Timetable </Typography>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/diary" style={{ textDecoration: "none" }}>
                  <Typography color="white"> Diary </Typography>
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "white",
                margin: "210px 0 0 30px",
              }}
            >
              Logout
            </Typography>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
