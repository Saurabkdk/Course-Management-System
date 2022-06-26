import { FormLabel, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateTimetable = () => {
  const redirect = useNavigate();
  const [record, setRecord] = useState({
    coursename: "",
    level: "",
    section: "",
    modulename1: "",
    modulename2: "",
    modulename3: "",
    modulename4: "",
    modulename5: " ",
    modulename6: " ",
  });

  function handleChange(e) {
    setRecord((previousRecord) => {
      return {
        ...previousRecord,
        [e.target.name]: e.target.value,
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
      .post("http://localhost:5000/records/timetable", {
        //time: time(record.time),
        coursename: String(record.coursename),
        level: Number(record.level),
        section: String(record.section),
        modulename1: String(record.modulename1),
        modulename2: String(record.modulename2),
        modulename3: String(record.modulename3),
        modulename4: String(record.modulename4),
        modulename5: String(record.modulename5),
        modulename6: String(record.modulename6),
      })

      .then((res) => res.data);
  };

  const recordSubmit = (event) => {
    event.preventDefault();
    sendRecord().then(() => redirect("/timetable"));
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
          TimeTable
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
              Course Name
            </FormLabel>
            <TextField
              required
              value={record.coursename}
              onChange={handleChange}
              variant="outlined"
              name="coursename"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Level
            </FormLabel>
            <TextField
              required
              value={record.level}
              onChange={handleChange}
              variant="outlined"
              name="level"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Section
            </FormLabel>
            <TextField
              required
              value={record.section}
              onChange={handleChange}
              variant="outlined"
              name="section"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              SUNDAY
            </FormLabel>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              7:00 am - 8:00am (Lecture)
            </FormLabel>

            <TextField
              // required
              value={record.modulename1}
              onChange={handleChange}
              variant="outlined"
              name="modulename1"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              8:30 am - 10:30am (Tutorial)
            </FormLabel>

            <TextField
              // required
              value={record.modulename1}
              onChange={handleChange}
              variant="outlined"
              name="modulename1"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              11:00 am - 12:00am(Lecture)
            </FormLabel>

            <TextField
              // required
              value={record.modulename2}
              onChange={handleChange}
              variant="outlined"
              name="modulename2"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              12:30 am - 2:30am (Tutorial)
            </FormLabel>

            <TextField
              // required
              value={record.modulename2}
              onChange={handleChange}
              variant="outlined"
              name="modulename2"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              MONDAY
            </FormLabel>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              7:00 am - 8:00am (Lecture)
            </FormLabel>

            <TextField
              // required
              value={record.modulename3}
              onChange={handleChange}
              variant="outlined"
              name="modulename3"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              8:30 am - 10:30am (Tutorial)
            </FormLabel>

            <TextField
              // required
              value={record.modulename3}
              onChange={handleChange}
              variant="outlined"
              name="modulename3"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              11:00 am - 12:00am (Lecture)
            </FormLabel>

            <TextField
              // required
              value={record.modulename4}
              onChange={handleChange}
              variant="outlined"
              name="modulename4"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              12:30 am - 2:30am (Tutorial)
            </FormLabel>

            <TextField
              // required
              value={record.modulename4}
              onChange={handleChange}
              variant="outlined"
              name="modulename4"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              TUESDAY
            </FormLabel>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              7:00 am - 8:00am (Lecture)
            </FormLabel>

            <TextField
              // required
              value={record.modulename5}
              onChange={handleChange}
              variant="outlined"
              name="modulename5"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              8:30 am - 10:30am (Tutorial)
            </FormLabel>

            <TextField
              // required
              value={record.modulename5}
              onChange={handleChange}
              variant="outlined"
              name="modulename5"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              11:00 am - 12:00am (Lecture)
            </FormLabel>

            <TextField
              // required
              value={record.modulename6}
              onChange={handleChange}
              variant="outlined"
              name="modulename6"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              12:30 am - 2:30am (Tutorial)
            </FormLabel>

            <TextField
              // required
              value={record.modulename6}
              onChange={handleChange}
              variant="outlined"
              name="modulename6"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              WEDNESDAY
            </FormLabel>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              7:00 am - 8:00am (Lecture)
            </FormLabel>

            <TextField
              // required
              value={record.modulename2}
              onChange={handleChange}
              variant="outlined"
              name="modulename2"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              8:30 am - 10:30am (Tutorial)
            </FormLabel>

            <TextField
              // required
              value={record.modulename2}
              onChange={handleChange}
              variant="outlined"
              name="modulename2"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              11:00 am - 12:00am(Lecture)
            </FormLabel>

            <TextField
              // required
              value={record.modulename3}
              onChange={handleChange}
              variant="outlined"
              name="modulename3"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              12:30 am - 2:30am (Tutorial)
            </FormLabel>

            <TextField
              // required
              value={record.modulename3}
              onChange={handleChange}
              variant="outlined"
              name="modulename3"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              THURSDAY
            </FormLabel>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              7:00 am - 8:00am(Lecture)
            </FormLabel>

            <TextField
              // required
              value={record.modulename1}
              onChange={handleChange}
              variant="outlined"
              name="modulename1"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              8:30 am - 10:30am (Tutorial)
            </FormLabel>

            <TextField
              // required
              value={record.modulename1}
              onChange={handleChange}
              variant="outlined"
              name="modulename1"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              11:00 am - 12:00am (Lecture)
            </FormLabel>

            <TextField
              // required
              value={record.modulename4}
              onChange={handleChange}
              variant="outlined"
              name="modulename4"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              12:30 am - 2:30am (Tutorial)
            </FormLabel>

            <TextField
              // required
              value={record.modulename4}
              onChange={handleChange}
              variant="outlined"
              name="modulename4"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              FRIDAY
            </FormLabel>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              7:00 am - 8:00am (Lecture)
            </FormLabel>

            <TextField
              value={record.modulename6}
              onChange={handleChange}
              variant="outlined"
              name="modulename6"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              8:30 am - 10:30am (Tutorial)
            </FormLabel>

            <TextField
              value={record.modulename6}
              onChange={handleChange}
              variant="outlined"
              name="modulename6"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              11:00 am - 12:00am (Lecture)
            </FormLabel>

            <TextField
              value={record.modulename5}
              onChange={handleChange}
              variant="outlined"
              name="modulename5"
            ></TextField>

            <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              12:30 am - 2:30am (Tutorial)
            </FormLabel>

            <TextField
              value={record.modulename5}
              onChange={handleChange}
              variant="outlined"
              name="modulename5"
            ></TextField>

            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "50px", width: "100%" }}
            >
              Add Record
            </Button>

            <Link to="/timetable" style={{ textDecoration: "none" }}>
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

export default CreateTimetable;
