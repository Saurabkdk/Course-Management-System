import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import StudentRecord from "./studentRecord.jsx";

import { Link } from "react-router-dom";

const fetchStudent = async () => {
  return await axios.get("http://localhost:5000/records/student").then((res) => res.data);
};

const GetUnEnrolledStudent = () => {
  const [student, setStudent] = useState();
  useEffect(() => {
    fetchStudent().then((data) => setStudent(data.studentRecord));
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
          Student
          
          <Link to={"/studentEnrolled"} style={{ textDecoration: "none" }}>
            <span style={{fontSize:"30px", paddingLeft:"20px"}}>Enrolled</span>
          </Link>  
          <Link to={"/studentUnEnrolled"} style={{ textDecoration: "none" }}>
            <span style={{fontSize:"30px", paddingLeft:"20px"}}>Unenrolled</span>
          </Link>  

        </Typography>
        <div className="buttons">
          <Grid container spacing={2}>

            <Grid item xs={4}>
              <Link to={"/student/create"} style={{ textDecoration: "none" }}>
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
              <Link to={"/student/search"} style={{ textDecoration: "none" }}>
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
        {student &&
            student.map((studentrecord, i) => {
              if(studentrecord.applied === false){
                return (<div key={i}><StudentRecord studentrecord={studentrecord} /></div>);
              }else{
                return null;
              }
            }
            )
            }
        </div>
      </div>
    </>
  );
};

export default GetUnEnrolledStudent;
