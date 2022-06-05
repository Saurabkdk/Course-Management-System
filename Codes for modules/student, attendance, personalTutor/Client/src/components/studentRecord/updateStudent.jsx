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

const UpdateStudent = () => {
  const id = useParams().id;

  const redirect = useNavigate();

  const [record, setRecord] = useState();
  const [status, setStatus] = useState();
  const [dormant, setDormant] = useState();
  const [array, setArray] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/student/${id}`)
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
      .put(`http://localhost:5000/records/updateStudent/${id}`, {
        id: String(record.id),
        status: String(status),
        dormant: String(dormant),
        firstname: String(record.firstname),
        middlename: String(record.middlename),
        surname: String(record.surname),
        addresstemporary: String(record.addresstemporary),
        addresspermanent: String(record.addresspermanent),
        contact: String(record.contact),
        course: String(record.course),
        dob: String(record.dob),
        email: String(record.email),
        entryqualification: String(record.entryqualification)
      })
      .then((res) => res.data);
  };

  const recordSubmit = (event) => {
    event.preventDefault();
    sendRecord().then(() => redirect("/studentEnrolled"));
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
          Student
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
              Id
            </FormLabel>
            <TextField
              required
              type="number"
              value={record.id}
              onChange={handleChange}
              variant="outlined"
              name="id"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Status
            </FormLabel>
            <RadioGroup name="status">
              <FormControlLabel
                checked={status === "Provisional"}
                onChange={handleStatus}
                value="Provisional"
                control={<Radio required />}
                label="Provisional"
              />
              <FormControlLabel
                checked={status === "Live"}
                onChange={handleStatus}
                value="Live"
                control={<Radio />}
                label="Live"
              />
              <FormControlLabel
                checked={status === "Dormant"}
                onChange={handleStatus}
                value="Dormant"
                control={<Radio />}
                label="Dormant"
              />
            </RadioGroup>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Reason for dormancy (If)
            </FormLabel>
            <RadioGroup name="dormant">
              <FormControlLabel
                checked={dormant === "Graduated"}
                onChange={handleDormant}
                value="Graduated"
                control={<Radio required />}
                label="Graduated"
              />
              <FormControlLabel
                checked={dormant === "Withdrawn"}
                onChange={handleDormant}
                value="Withdrawn"
                control={<Radio />}
                label="Withdrawn"
              />
              <FormControlLabel
                checked={dormant === "Terminated"}
                onChange={handleDormant}
                value="Terminated"
                control={<Radio />}
                label="Terminated"
              />
              <FormControlLabel
                checked={dormant === "None"}
                onChange={handleDormant}
                value="None"
                control={<Radio />}
                label="None"
              />
            </RadioGroup>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              First Name
            </FormLabel>
            <TextField
              required
              value={record.firstname}
              onChange={handleChange}
              variant="outlined"
              name="firstname"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Middle Name
            </FormLabel>
            <TextField
              
              value={record.middlename}
              onChange={handleChange}
              variant="outlined"
              name="middlename"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Last Name
            </FormLabel>
            <TextField
              required
              value={record.lastname}
              onChange={handleChange}
              variant="outlined"
              name="lastname"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Temporary Address
            </FormLabel>
            <TextField
              required
              value={record.addresstemporary}
              onChange={handleChange}
              variant="outlined"
              name="addresstemporary"
            ></TextField>


            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Permanent Address
            </FormLabel>
            <TextField
              required
              value={record.addresspermanent}
              onChange={handleChange}
              variant="outlined"
              name="addresspermanent"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Contact
            </FormLabel>
            <TextField
              required
              value={record.contact}
              onChange={handleChange}
              variant="outlined"
              name="contact"
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
              DOB
            </FormLabel>
            <TextField
              required
              value={record.dob}
              onChange={handleChange}
              variant="outlined"
              name="dob"
              
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Email 
            </FormLabel>
            <TextField
              required
              value={record.email}
              onChange={handleChange}
              variant="outlined"
              name="email"
              type={'email'}
              
            ></TextField>    

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Entry Qualification 
            </FormLabel>
            <TextField
              required
              value={record.entryqualification}
              onChange={handleChange}
              variant="outlined"
              name="entryqualification"
              
            ></TextField>    

              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "50px" }}
              >
                Update Record
              </Button>

              <Link to="/studentEnrolled" style={{ textDecoration: "none" }}>
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

export default UpdateStudent;
