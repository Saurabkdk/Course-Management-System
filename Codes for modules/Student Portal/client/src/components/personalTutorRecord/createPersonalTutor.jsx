import {
  FormLabel,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePersonalTutor = () => {
  const redirect = useNavigate();
  const [record, setRecord] = useState({
    name: ""
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
      .post("http://localhost:5000/records/createPersonalTutor", {
        
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
              Name
            </FormLabel>
            <TextField
              required
              
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
              Add Record
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
      </div>
    </>
  );
};

export default CreatePersonalTutor;
