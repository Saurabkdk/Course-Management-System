import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import StaffList from "./StaffList.jsx";

const fetchStaff = async () => {
  return await axios.get("http://localhost:5000/records/staff").then((res) => res.data);
};

const GetStaffList = () => {
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
          Report (Staff)
        </Typography>
        <div className="searchButton">
          <Grid container spacing={2}>
  
            <Grid item xs={12}>
              <Link to={"/staff/search"} style={{ textDecoration: "none" }}>
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
          {staff &&
            staff.map((record, i) => (
              <div key={i}>
                <StaffList record={record} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetStaffList;
