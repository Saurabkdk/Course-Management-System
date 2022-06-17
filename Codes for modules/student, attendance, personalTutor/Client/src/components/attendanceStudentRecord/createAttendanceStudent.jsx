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
import { Link, useNavigate, useParams } from "react-router-dom";

const CreateAttendanceStudent = () => {
  const idAttendance = useParams().id;
  const redirect = useNavigate();
  const [record, setRecord] = useState({
    attendanceId: "",
    name: "",
    studentId: "", 
    attendance: []
    
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
      .post("http://localhost:5000/records/createAttendanceStudent", {
        
        attendanceId: idAttendance,
        name: String(record.name),
        studentId: String(record.studentId) ,
        attendance: Array(record.attendance),
        
      })
      .then((res) => res.data);
  };

  const recordSubmit = (event) => {
    event.preventDefault();
    sendRecord().then(() => redirect(`/attendance`));
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
          Attach Student with Attendance
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
              Student Name
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
              Student Id
            </FormLabel>
            <TextField
              required
              
              value={record.studentId}
              onChange={handleChange}
              variant="outlined"
              name="studentId"
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

export default CreateAttendanceStudent;
