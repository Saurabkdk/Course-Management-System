import React, { useState } from "react";
import { FormLabel, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateAssignment = () => {
  const redirect = useNavigate();
  const [record, setRecord] = useState({
    assignment: "",
    module: "",
    file_link: "",
    desc: ""
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
      .post("http://localhost:5000/records/assignment", {
        assignment: String(record.assignment),
        module: record.module,
        file_link: String(record.file_link),
        desc: String(record.desc)
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
          Assignment
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
              Assignment
            </FormLabel>
            <TextField
              required
              value={record.assignment}
              onChange={handleChange}
              variant="outlined"
              name="assignment"
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
              File link
            </FormLabel>
            <TextField
              required
              multiline
              rows={3}
              value={record.file_link}
              onChange={handleChange}
              variant="outlined"
              name="file_link"
            ></TextField>
            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Description
            </FormLabel>
            <TextField
              required
              multiline
              rows={3}
              value={record.desc}
              onChange={handleChange}
              variant="outlined"
              name="desc"
            ></TextField>

            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "50px" }}
            >
              Add Record
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

export default CreateAssignment;
