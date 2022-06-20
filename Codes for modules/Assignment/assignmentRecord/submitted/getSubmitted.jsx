import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, TextField, Typography } from "@mui/material";

import SubmittedAssignment from "./submittedAssignment";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const fetchSubmission = async () => {
  return await axios
    .get("http://localhost:5000/records/submitted")
    .then((res) => res.data);
};

const GetSubmitted = () => {
  const [submission, setSubmission] = useState();
  const [search, setSearch] = useState({
    id : "0"
  });

  useEffect(() => {
    fetchSubmission().then((data) => setSubmission(data.submissionRecord));
  }, []);

  function Search(event) {
    setSearch((previousSearch) => {
      return {
        ...previousSearch,
        [event.target.name]: event.target.value,
      };
    });
  }

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
          Assignment (Submitted)
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Container>
            <Typography
              sx={{
                marginTop: "50px",
                paddingLeft: "50px",
                fontSize: "20px",
                float: "left",
              }}
            >
              Submitted Assignments
            </Typography>
          </Container>

          <Container sx={{ marginTop: "40px", marginLeft: "400px" }}>
            <TextField
              type="number"
              variant="outlined"
              name="id"
              onChange={Search}
              label="Student Id.."
            ></TextField>
             
            <Link to={`/submitted/search/${search.id}`} style ={{textDecoration : "none"}}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: "10px", marginLeft: "10px" }}
              >
                Search
              </Button>
            </Link>
          </Container>
        </Box>

        <div className="containList">
          {submission &&
            submission.map((submissionrecord, i) => (
              <div key={i}>
                <SubmittedAssignment submissionRecord={submissionrecord} />
              </div>
            ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default GetSubmitted;
