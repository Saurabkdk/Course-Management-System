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

const CreateStaff = () => {
  const redirect = useNavigate();
  const [record, setRecord] = useState({
    id: "",
    firstname: "",
    middlename: "",
    surname: "",
    address: "",
    telephone: "",
    email: "",
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
      .post("http://localhost:5000/records/staff", {
        id: String(record.id),
        status: String(status),
        dormant: String(dormant),
        firstname: String(record.firstname),
        middlename: String(record.middlename),
        surname: String(record.surname),
        address: String(record.address),
        telephone: String(record.telephone),
        email: String(record.email),
        role: [
          String(array.role[0]),
          String(array.role[1]),
          String(array.role[2]),
        ],
        subject: [
          String(array.subject[0]),
          String(array.subject[1]),
          String(array.subject[2]),
        ],
      })
      .then((res) => res.data);
  };

  const recordSubmit = (event) => {
    event.preventDefault();
    sendRecord().then(() => redirect("/staff"));
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
          Staff
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
              Surname
            </FormLabel>
            <TextField
              required
              value={record.surname}
              onChange={handleChange}
              variant="outlined"
              name="surname"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Address
            </FormLabel>
            <TextField
              required
              value={record.address}
              onChange={handleChange}
              variant="outlined"
              name="address"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Telephone
            </FormLabel>
            <TextField
              required
              value={record.telephone}
              onChange={handleChange}
              variant="outlined"
              name="telephone"
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
              type="email"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Role(s)
            </FormLabel>
            <TextField
              required
              multiline
              value={array.role}
              onChange={handleArray}
              variant="outlined"
              name="role"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Subject(s)
            </FormLabel>
            <TextField
              required
              multiline
              value={array.subject}
              onChange={handleArray}
              variant="outlined"
              name="subject"
            ></TextField>

            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "50px" }}
            >
              Add Record
            </Button>

            <Link to="/staff" style={{ textDecoration: "none" }}>
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

export default CreateStaff;
