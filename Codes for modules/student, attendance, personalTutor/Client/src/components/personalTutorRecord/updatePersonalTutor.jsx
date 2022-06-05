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

const UpdatePersonalTutor = () => {
  const id = useParams().id;

  const redirect = useNavigate();

  const [record, setRecord] = useState();
  const [status, setStatus] = useState();
  const [dormant, setDormant] = useState();
  const [array, setArray] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/personalTutor/${id}`)
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
      .put(`http://localhost:5000/records/updatePersonalTutor/${id}`, {
        name: String(record.name),
        
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
          Personal Tutor
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
                Name
              </FormLabel>
              <TextField
                required
                type="text"
                value={record.name}
                onChange={handleChange}
                variant="outlined"
                name="name"
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

export default UpdatePersonalTutor;
