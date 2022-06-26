import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import TimetableRecord from "./timetableRecord.jsx";

// import { Link } from "react-router-dom";

const fetchTimetable = async () => {
  return await axios.get("http://localhost:5000/records/timetable").then((res) => res.data);
};

const GetTimetable = () => {
  const [timetable, setTimetable] = useState();
  useEffect(() => {
    fetchTimetable().then((data) => setTimetable(data.timetableRecord));
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
          Timetable
        </Typography>
        <div className="buttons">
          <Grid container spacing={2}>

            
  
            <Grid item xs={4}>
              {/* <Link to={"/timetable/search"} style={{ textDecoration: "none" }}> */}
                <Button sx={{marginTop : "19px"}}
                  variant="contained"
                  color="secondary"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              {/* //</Link> */}
            </Grid>

          </Grid>
        </div>
        <div className="containList">
          {timetable &&
            timetable.map((timetablerecord, i) => (
              <div key={i}>
                <TimetableRecord timetablerecord={timetablerecord} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetTimetable;
