import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import StudentList from "./StudentList.jsx";

const fetchStudent = async () => {
  return await axios.get("http://localhost:5000/records/student").then((res) => res.data);
};

const GetStudentList = () => {
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
          Report (Student)
        </Typography>
        <div className="searchButton">
          <Grid container spacing={2}>
  
            <Grid item xs={12}>
              <Link to={"/staff/search"} style={{ textDecoration: "none" }}>
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
            student.map((record, i) => (
              <div key={i}>
                <StudentList record={record} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetStudentList;
