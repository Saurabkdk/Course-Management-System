import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CheckStudentStaff = () => {
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
          Report
        </Typography>
        <Typography
          sx={{
            marginTop: "50px",
            paddingLeft: "50px",
            fontSize: "25px",
          }}
        >
          Select whose list is to be generated :{" "}
        </Typography>
        <Box sx={{ padding: "50px", display: "flex", flexDirection: "column" }}>

        <Link to='/report/studentList' style={{textDecoration : "none"}}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "300px", marginTop: "50px" }}
          >
            Student
          </Button>
          </Link>

          <Link to='/report/staffList' style={{textDecoration : "none"}}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "300px", marginTop: "100px" }}
          >
            Staff
          </Button>
          </Link>
        </Box>
      </div>
    </>
  );
};

export default CheckStudentStaff;
