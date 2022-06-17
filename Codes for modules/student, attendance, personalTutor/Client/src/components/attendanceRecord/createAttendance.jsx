import {
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateAttendance = () => {
  const redirect = useNavigate();
  const [record, setRecord] = useState({
    name: "",
    course: "",
    module: "",
    level: "",
    section: "",
    year: ""
  });

  function handleChange(e) {
    setRecord((previousRecord) => {
      return {
        ...previousRecord,
        [e.target.name]: e.target.value,
      };
    });
  }
  const [status, setStatus] = useState();

  function handleStatus(event) {
    setStatus(event.target.value);
  }

  const [dormant, setDormant] = useState();

  function handleDormant(event) {
    setDormant(event.target.value);
  }

  const [array, setArray] = useState({
    role: [""],
    subject: [""],
  });

  function handleArray(event) {
    setArray((previousRecord) => {
      return {
        ...previousRecord,
        [event.target.name]: event.target.value.split(","),
      };
    });
  }

  const sendRecord = async () => {
    // const Check = (length) => {
    // let value = [];
    // for (let i = 0; i < (array.role).length; i++) {
    //   value.push(array.role[i]);
    // }
    // console.log(value);
    // return value;
    //   let len = length - 1;
    //   if (len > 0) {
    //     return String(array.role[len]) + ", " + String(Check(length - 1));
    //   }
    // };

    await axios
      .post("http://localhost:5000/records/createAttendance", {
        
        name: String(record.name),
        course: String(record.course),
        module: String(record.module),
        level: String(record.level),
        section: String(record.section),
        year: String(record.year),
      })
      .then((res) => res.data);
  };

  const recordSubmit = (event) => {
    event.preventDefault();
    sendRecord().then(() => redirect("/attendance"));
  };

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
        <form onSubmit={recordSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "40%",
              padding: "40px 15% 50px",
              textAlign: "left",
            }}
          >
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Name
            </FormLabel>
            <TextField
              required
              
              value={record.name}
              onChange={handleChange}
              variant="outlined"
              name="name"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Course
            </FormLabel>
            <TextField
              required
              value={record.course}
              onChange={handleChange}
              variant="outlined"
              name="course"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Module
            </FormLabel>
            <TextField
              required
              
              value={record.module}
              onChange={handleChange}
              variant="outlined"
              name="module"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Level
            </FormLabel>
            <TextField
              required
              
              value={record.level}
              onChange={handleChange}
              variant="outlined"
              name="level"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Section
            </FormLabel>
            <TextField
              required
              
              value={record.section}
              onChange={handleChange}
              variant="outlined"
              name="section"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Year
            </FormLabel>
            <TextField
              required
              
              value={record.year}
              onChange={handleChange}
              variant="outlined"
              name="year"
            ></TextField>
            
            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "50px" }}
            >
              Add Record
            </Button>

            <Link to="/attendance" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "20px", width: "100%" }}
              >
                Cancel
              </Button>
            </Link>
          </Box>
        </form>
      </div>
    </>
  );
};

export default CreateAttendance;
