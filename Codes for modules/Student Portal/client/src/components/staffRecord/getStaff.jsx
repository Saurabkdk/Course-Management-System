import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import StaffRecord from "./staffRecord.jsx";

import { Link } from "react-router-dom";

const fetchStaff = async () => {
  return await axios
    .get("http://localhost:5000/records/staff")
    .then((res) => res.data);
};

const GetStaff = () => {
  const [staff, setStaff] = useState();
  useEffect(() => {
    fetchStaff().then((data) => setStaff(data.staffRecord));
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
          Staff
        </Typography>
        <div className="buttons">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Link to={"/staff/search"} style={{ textDecoration: "none" }}>
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
          {staff &&
            staff.map((staffrecord, i) => (
              <div key={i}>
                <StaffRecord staffrecord={staffrecord} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetStaff;
