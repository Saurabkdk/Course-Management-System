import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import AttendanceStudentRecord from "./attendanceStudentRecord.jsx";

import { Link } from "react-router-dom";

const fetchAttendanceStudent = async (idAttendance, course, module, level, section, year) => {
  
  const records = await axios.get(`http://localhost:5000/records/attendanceStudents/${idAttendance}/${course}/${module}/${level}/${section}/${year}`).then((res) => res.data);
  
  return records;
};

const GetAttendanceStudent = () => {
  const idAttendance = useParams().id;
  const course = useParams().course;
  const module = useParams().module;
  const level = useParams().level;
  const section = useParams().section;
  const year = useParams().year;
  const [attendanceStudent, setAttendanceStudent] = useState();
  useEffect(() => {
    fetchAttendanceStudent(idAttendance, course, module, level, section, year).then((data) => setAttendanceStudent(data.attendanceStudentRecord));
  }, []);
  // console.log(attendanceStudent);
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
          Students Linked With Attendance
        </Typography>
        <div className="buttons">
          <Grid container spacing={2}>

            <Grid item xs={4}>
              {/* <Link to={`/attendanceStudent/create/${idAttendance}`} style={{ textDecoration: "none" }}>
                <Button sx={{marginTop : "19px"}}
                  variant="contained"
                  color="secondary"
                  startIcon={<AddIcon />}
                >
                  Create
                </Button>
              </Link> */}
            </Grid>

            <Grid item xs={4}>
              <Button sx={{marginTop : "19px"}} variant="contained" color="secondary">
                Archived
              </Button>
            </Grid>
  
            <Grid item xs={4}>
              <Link to={"/attendanceStudent/search"} style={{ textDecoration: "none" }}>
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
        
          {attendanceStudent &&
            attendanceStudent.map((pTSRecord, i) => (
              <div key={i}>
              
                <AttendanceStudentRecord ps={pTSRecord} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetAttendanceStudent;
