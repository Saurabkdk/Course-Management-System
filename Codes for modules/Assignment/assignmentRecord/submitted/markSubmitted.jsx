import React, { useEffect, useState } from "react";
import {
  FormLabel,
  TextField,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const MarkSubmitted = () => {
  const id = useParams().id;

  const redirect = useNavigate();

  const [record, setRecord] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/submitted/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setRecord(data.viewRecord);
        });
    };
    getRecords();
  }, [id]);

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
      .put(`http://localhost:5000/records/submitted/${id}`, {
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
    sendRecord().then(() => redirect("/submitted"));
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
          Assignment (Mark)
        </Typography>

        {record && (
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
                variant="outlined"
                name="submission_link"
              ></TextField>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15px",
                  marginLeft: "-25px",
                }}
              >
                <Container>
                  <FormLabel
                    sx={{
                      fontSize: "20px",
                      margin: "15px 0px 5px",
                      fontWeight: "bold",
                    }}
                  >
                    Grade
                  </FormLabel>
                  <TextField
                    required
                    value={record.grade}
                    onChange={handleChange}
                    variant="outlined"
                    name="grade"
                  ></TextField>
                </Container>
                <Container>
                  <FormLabel
                    sx={{
                      fontSize: "20px",
                      margin: "15px 0px 5px",
                      fontWeight: "bold",
                    }}
                  >
                    Feedback
                  </FormLabel>
                  <TextField
                    required
                    value={record.feedback}
                    onChange={handleChange}
                    variant="outlined"
                    name="feedback"
                  ></TextField>
                </Container>
              </Box>

              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "50px" }}
              >
                Done Marking
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
        )}
      </div>
    </>
  );
};

export default MarkSubmitted;
