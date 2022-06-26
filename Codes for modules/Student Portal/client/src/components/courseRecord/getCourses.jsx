import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import CourseRecord from "./courseRecord.jsx";

import { Link } from "react-router-dom";

const fetchCourse = async () => {
  return await axios
    .get("http://localhost:5000/records/course")
    .then((res) => res.data);
};

const GetCourse = () => {
  const [course, setCourse] = useState();
  useEffect(() => {
    fetchCourse().then((data) => setCourse(data.courseRecord));
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
          Course
        </Typography>
        <div className="buttons">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Link to={"/course/search"} style={{ textDecoration: "none" }}>
                <Button
                  sx={{ marginTop: "19px" }}
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
          {course &&
            course.map((courserecord, i) => (
              <div key={i}>
                <CourseRecord courserecord={courserecord} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetCourse;
