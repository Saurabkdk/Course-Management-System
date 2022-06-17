import React from "react";
import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

import "./staffRecord.css";
const TakeAttendance = async (idAttendanceStudent) => {
  const message = await axios.get(`http://localhost:5000/records/attendanceStudent/takeAttendance/${idAttendanceStudent}`).then((res) => res.data);
  
};



const AttendanceStudentRecord = (props) => {
   const [mark, setmark] = useState("Mark");
   const {
     _id,
     attendanceId,
     name,
     studentId,  
     attendance
     
     
    } = props.ps;
    const rohan = async () => {
      const message = await axios.get(`http://localhost:5000/records/attendanceStudent/checkAttendance/${String(_id)}`).then((res) => res.data);
      
      if(message.attStatus) return setmark("Present");
      if(!message.attStatus) return setmark("Absent");
    };
    rohan();
  

  return (
    <>
      <div className="record">
        <main className="list">
          <ol>
            <li>
              <List>
                <ListItem>
                  <div className="listitem">
                    <p>
                      <Button
                        color="inherit"
                        LinkComponent={Link}
                        to={`/attendanceStudent/view/${_id}`}
                      >
                        <Typography>
                          {name}   
                        </Typography>
                      </Button>
                    </p>
                    <div className="changeButton">
                      <Grid container spacing={1}>
                        <Grid item xs={3}>
                        {/* <Link
                            to={`http://localhost:5000/records/attendanceStudent/takeAttendance/${_id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          > */}

                          <Button
                            variant="contained"
                            color="inherit"
                            size="small"
                            onClick={
                              async () => {
                                  
                                  const message = await axios.get(`http://localhost:5000/records/attendanceStudent/takeAttendance/${String(_id)}`).then((res) => res.data);
                                  console.log(message);
                                  if (message.changed === true && mark === "Mark") setmark("Present");
                                  if (message.changed === true && mark === "Present") setmark("Absent");
                                  if (message.changed === true && mark === "Absent") setmark("Present");
                              }
                            }
                          >
                            {" "}
                            {mark} {" "}
                          </Button>
                        {/* </Link> */}
                        
                        </Grid>
                        <Grid item xs={3}>
                          <Link
                            to={`/attendanceStudent/edit/${_id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <Button
                              variant="contained"
                              color="inherit"
                              size="small"
                            >
                              {" "}
                              Edit{" "}
                            </Button>
                          </Link>
                        </Grid>
                        <Grid item xs={3}>
                          <Button
                            variant="contained"
                            color="inherit"
                            size="small"
                          >
                            {" "}
                            Archive{" "}
                          </Button>
                        </Grid>
                        <Grid item xs={3}>
                          <Link to={`/attendanceStudent/view/${_id}`}>
                            <Button aria-label="delete" sx={{ color: "black" }}>
                              {" "}
                              <DeleteIcon />{" "}
                            </Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </ListItem>
              </List>
            </li>
          </ol>
        </main>
      </div>
    </>
  );
};

export default AttendanceStudentRecord;
