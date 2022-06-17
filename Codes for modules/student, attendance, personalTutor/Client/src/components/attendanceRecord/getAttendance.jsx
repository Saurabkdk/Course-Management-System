import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import AttendanceRecord from "./attendanceRecord.jsx";

import { Link } from "react-router-dom";

const fetchAttendance = async () => {
  return await axios.get("http://localhost:5000/records/attendance").then((res) => res.data);
};

const GetAttendance = () => {
  const [attendance, setAttendance] = useState();
  useEffect(() => {
    fetchAttendance().then((data) => setAttendance(data.attendanceRecord));
  }, []);

  return (
    <>
      <div>
        <Typography
          sx={{
            paddingTop: "20px",
            paddingLeft: "50px",
            fontSize: "40px",
            textShadow: "1px 2px grey",
          }}
        >
          Attendance
        </Typography>
        <div className="buttons">
          <Grid container spacing={2}>

            <Grid item xs={4}>
              <Link to={"/attendance/create"} style={{ textDecoration: "none" }}>
                <Button sx={{marginTop : "19px"}}
                  variant="contained"
                  color="secondary"
                  startIcon={<AddIcon />}
                >
                  Create
                </Button>
              </Link>
            </Grid>

            <Grid item xs={4}>
              <Button sx={{marginTop : "19px"}} variant="contained" color="secondary">
                Archived
              </Button>
            </Grid>
  
            <Grid item xs={4}>
              <Link to={"/attendance/search"} style={{ textDecoration: "none" }}>
                <Button sx={{marginTop : "19px"}}
                  variant="contained"
                  color="secondary"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Link>
            </Grid>

          </Grid>
        </div>
        <div className="containList">
          {attendance &&
            attendance.map((attendancerecord, i) => (
              <div key={i}>
                <AttendanceRecord attendancerecord={attendancerecord} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetAttendance;
