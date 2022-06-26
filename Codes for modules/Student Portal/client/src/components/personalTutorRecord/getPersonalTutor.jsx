import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import PersonalTutorRecord from "./personalTutorRecord.jsx";

import { Link } from "react-router-dom";

const fetchPersonalTutor = async () => {
  return await axios
    .get("http://localhost:5000/records/personalTutor")
    .then((res) => res.data);
};

const GetPersonalTutor = () => {
  const [personalTutor, setPersonalTutor] = useState();
  useEffect(() => {
    fetchPersonalTutor().then((data) =>
      setPersonalTutor(data.personalTutorRecord)
    );
  }, []);

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
        <div className="buttons">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Link
                to={"/personalTutor/search"}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ marginTop: "19px" }}
                  variant="contained"
                  color="secondary"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <div className="containList">
          {personalTutor &&
            personalTutor.map((personaltutorrecord, i) => (
              <div key={i}>
                <PersonalTutorRecord
                  personaltutorrecord={personaltutorrecord}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetPersonalTutor;
