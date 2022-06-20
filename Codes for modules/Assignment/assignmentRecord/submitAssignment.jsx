import React, { useState } from "react";
import { FormLabel, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SubmitAssignment = () => {
  const redirect = useNavigate();

  const [record, setRecord] = useState({
    student: "",
    student_id: "",
    student_name: "",
    module_name: "",
    submission_link: "",
    grade: "",
    feedback: "",
  });

  function handleChange(event) {
    setRecord((previousRecord) => {
      return {
        ...previousRecord,
        [event.target.name]: event.target.value,
      };
    });
  }

  const sendRecord = async () => {
    await axios
      .post("http://localhost:5000/records/submission", {
        student: record.student,
        student_id: String(record.student_id),
        student_name: String(record.student_name),
        module_name: String(record.module_name),
        submission_link: String(record.submission_link),
        grade: String(record.grade),
        feedback: String(record.feedback),
      })
      .then((res) => res.data);
  };

  const recordSubmit = (event) => {
    event.preventDefault();
    sendRecord().then(() => redirect("/assignment"));
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
          Assignment (Submission)
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
              Student Id
            </FormLabel>
            <TextField
              required
              value={record.student_id}
              onChange={handleChange}
              variant="outlined"
              name="student_id"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Student
            </FormLabel>
            <TextField
              required
              value={record.student}
              onChange={handleChange}
              variant="outlined"
              name="student"
            ></TextField>

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
              value={record.student_name}
              onChange={handleChange}
              variant="outlined"
              name="student_name"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Module Name
            </FormLabel>
            <TextField
              required
              value={record.module_name}
              onChange={handleChange}
              variant="outlined"
              name="module_name"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Submission File Link
            </FormLabel>
            <TextField
              required
              value={record.submission_link}
              onChange={handleChange}
              variant="outlined"
              name="submission_link"
            ></TextField>

            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "50px" }}
            >
              Submit Assignment
            </Button>

            <Link to="/assignment" style={{ textDecoration: "none" }}>
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

export default SubmitAssignment;
