import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import PersonalTutorStudentRecord from "./personalTutorStudentRecord.jsx";

import { Link } from "react-router-dom";

const fetchPersonalTutorStudent = async (idPersonalTutor) => {
  
  const records = await axios.get(`http://localhost:5000/records/personalTutorStudents/${idPersonalTutor}`).then((res) => res.data);
  
  return records;
};

const GetPersonalTutorStudent = () => {
  const idPersonalTutor = useParams().id;
  const [personalTutorStudent, setPersonalTutorStudent] = useState();
  useEffect(() => {
    fetchPersonalTutorStudent(idPersonalTutor).then((data) => setPersonalTutorStudent(data.personalTutorStudentRecord));
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
          Students Linked With Personal Tutor
        </Typography>
        <div className="buttons">
          <Grid container spacing={2}>

            <Grid item xs={4}>
              <Link to={`/personalTutorStudent/create/${idPersonalTutor}`} style={{ textDecoration: "none" }}>
                <Button sx={{marginTop : "19px"}}
                  variant="contained"
                  color="secondary"
                  startIcon={<AddIcon />}
                >
                  Create
                </Button>
              </Link>
            </Grid>

            <Grid item xs={4}>
              <Button sx={{marginTop : "19px"}} variant="contained" color="secondary">
                Archived
              </Button>
            </Grid>
  
            <Grid item xs={4}>
              <Link to={"/personalTutorStudent/search"} style={{ textDecoration: "none" }}>
                <Button sx={{marginTop : "19px"}}
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
        
          {personalTutorStudent &&
            personalTutorStudent.map((pTSRecord, i) => (
              <div key={i}>
              
                <PersonalTutorStudentRecord ps={pTSRecord} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetPersonalTutorStudent;
