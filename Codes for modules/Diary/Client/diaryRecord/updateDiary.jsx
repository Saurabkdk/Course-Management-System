import { FormLabel, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateDiary = () => {
  const id = useParams().id;
  const redirect = useNavigate();
  const [record, setRecord] = useState();

  function handleChange(e) {
    setRecord((previousRecord) => {
      return {
        ...previousRecord,
        [e.target.name]: e.target.value,
      };
    });
  }

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/diary/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setRecord(data.viewRecord);
        });
    };
    getRecords();
  }, [id]);

  const sendRecord = async () => {
    await axios
      .put(`http://localhost:5000/records/diary/${id}`, {
        id: String(record.id),
        module_name: String(record.module_name),
        information: String(record.information),
        set_on_date: String(record.set_on_date),
      })
      .then((res) => res.data);
  };

  const recordSubmit = (event) => {
    event.preventDefault();
    sendRecord().then(() => redirect("/diary"));
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
          Diary
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
                Set On Date
              </FormLabel>
              <TextField
                required
                value={record.set_on_date}
                onChange={handleChange}
                variant="outlined"
                name="set_on_date"
              ></TextField>
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "15px 0px 5px",
                  fontWeight: "bold",
                }}
              >
                Information
              </FormLabel>
              <TextField
                required
                multiline
                rows={5}
                value={record.information}
                onChange={handleChange}
                variant="outlined"
                name="information"
              ></TextField>

              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "50px" }}
              >
                Update Record
              </Button>

              <Link to="/diary" style={{ textDecoration: "none" }}>
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

export default UpdateDiary;
