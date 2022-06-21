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

const UpdateStaff = () => {
  const id = useParams().id;

  const redirect = useNavigate();

  const [record, setRecord] = useState();
  const [status, setStatus] = useState();
  const [dormant, setDormant] = useState();
  const [array, setArray] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/staff/${id}`)
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
      .put(`http://localhost:5000/records/staff/${id}`, {
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
                  checked={status === "provisional"}
                  onChange={handleStatus}
                  value="provisional"
                  control={<Radio required />}
                  label="Provisional"
                />
                <FormControlLabel
                  checked={status === "live"}
                  onChange={handleStatus}
                  value="live"
                  control={<Radio />}
                  label="Live"
                />
                <FormControlLabel
                  checked={status === "dormant"}
                  onChange={handleStatus}
                  value="dormant"
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
              <RadioGroup name="dormant" required>
                <FormControlLabel
                  checked={dormant === "graduated"}
                  onChange={handleDormant}
                  value="graduated"
                  control={<Radio required />}
                  label="Graduated"
                />
                <FormControlLabel
                  checked={dormant === "withdraw"}
                  onChange={handleDormant}
                  value="withdraw"
                  control={<Radio />}
                  label="WIthdrawn"
                />
                <FormControlLabel
                  checked={dormant === "terminated"}
                  onChange={handleDormant}
                  value="terminated"
                  control={<Radio />}
                  label="Terminated"
                />
                <FormControlLabel
                  checked={dormant === "none"}
                  onChange={handleDormant}
                  value="none"
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
                required
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
                Update Record
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
        )}
      </div>
    </>
  );
};

export default UpdateStaff;
