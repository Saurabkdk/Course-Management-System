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
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdatePersonalTutorStudent = () => {
  const id = useParams().id;

  const redirect = useNavigate();

  const [record, setRecord] = useState();
  const [status, setStatus] = useState();
  const [dormant, setDormant] = useState();
  const [array, setArray] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/personalTutorStudent/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setRecord(data.viewRecord);
          setArray(data.viewRecord);
        });
    };
    getRecords();
  }, [id]);

  function handleChange(e) {
    setRecord((previousRecord) => {
      return {
        ...previousRecord,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleStatus(event) {
    setStatus(event.target.value);
  }

  function handleDormant(event) {
    setDormant(event.target.value);
  }

  function handleArray(event) {
    setArray((previousRecord) => {
      return {
        ...previousRecord,
        [event.target.name]: event.target.value.split(","),
      };
    });
  }

  const sendRecord = async () => {
    await axios
      .put(`http://localhost:5000/records/updatePersonalTutorStudent/${id}`, {
        
        personalTutorId: String(record.personalTutorId),
        studentName: String(record.studentName),
        studentLevel: String(record.studentLevel), 
        studentBatch: String(record.studentBatch),
        course: String(record.course),
      })
      .then((res) => res.data);
  };

  const recordSubmit = (event) => {
    event.preventDefault();
    sendRecord().then(() => redirect("/personalTutor"));
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
          Update student data for personal tutor
        </Typography>
        {record && (
          <form onSubmit={recordSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "40%",
                margin: "40px 15% 50px",
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
              
              value={record.studentName}
              onChange={handleChange}
              variant="outlined"
              name="studentName"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Student Batch
            </FormLabel>
            <TextField
              required
              
              value={record.studentBatch}
              onChange={handleChange}
              variant="outlined"
              name="studentBatch"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Student Level
            </FormLabel>
            <TextField
              required
              
              value={record.studentLevel}
              onChange={handleChange}
              variant="outlined"
              name="studentLevel"
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


              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "50px" }}
              >
                Update Record
              </Button>

              <Link to="/personalTutor" style={{ textDecoration: "none" }}>
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

export default UpdatePersonalTutorStudent;
