import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import DiaryRecord from "./diaryRecord";

const fetchDiary = async () => {
  return await axios.get("http://localhost:5000/records/diary").then((res) => res.data);
};

const GetDiary = () => {
  const [diary, setDiary] = useState();
  useEffect(() => {
    fetchDiary().then((data) => setDiary(data.diaryRecord));
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
          Diary
        </Typography>
        <div className="buttons">
          <Grid container spacing={2}>

            <Grid item xs={4}>
              <Link to={"/diary/create"} style={{ textDecoration: "none" }}>
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
              <Link to={"/diary/search"} style={{ textDecoration: "none" }}>
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
          {diary &&
            diary.map((diaryrecord, i) => (
              <div key={i}>
                <DiaryRecord diaryrecord={diaryrecord} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetDiary;
