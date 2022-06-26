import React, { useState } from "react";
import { FormLabel, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateModule = () => {
  const redirect = useNavigate();
  const [record, setRecord] = useState({
    id: "",
    module_name: "",
    link: "",
  });

  function handleChange(event) {
    setRecord((previousRecord) => {
      return {
        ...previousRecord,
        [event.target.name]: event.target.value,
      };
    });
  }

  const [array, setArray] = useState({
    staff: [""],
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
    await axios
      .post("http://localhost:5000/records/module", {
        id: Number(record.id),
        module_name: String(record.module_name),
        staff: [
          array.staff[0],
          array.staff[1],
          array.staff[2],
          array.staff[3],
        ],
        link: String(record.link),
      })
      .then((res) => res.data);
  };

  const recordSubmit = (event) => {
    event.preventDefault();
    sendRecord().then(() => redirect("/module"));
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
          Modules
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
              Staff
            </FormLabel>
            <TextField
              required
              multiline
              value={array.staff}
              onChange={handleArray}
              variant="outlined"
              name="staff"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Resource link
            </FormLabel>
            <TextField
              required
              multiline
              rows={3}
              value={record.link}
              onChange={handleChange}
              variant="outlined"
              name="link"
            ></TextField>

            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "50px" }}
            >
              Add Record
            </Button>

            <Link to="/module" style={{ textDecoration: "none" }}>
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

export default CreateModule;
