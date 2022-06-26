import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import ModuleRecord from "./moduleRecord";

const fetchModule = async (req, res) => {
  return await axios
    .get("http://localhost:5000/records/module")
    .then((res) => res.data);
};

const GetModule = () => {
  const [module, setModule] = useState();
  useEffect(() => {
    fetchModule().then((data) => setModule(data.moduleRecord));
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
          Modules
        </Typography>
        <div className="buttons">
          <Grid container spacing={2}>

            <Grid item xs={4}>
              <Link to={"/module/search"} style={{ textDecoration: "none" }}>
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
          {module &&
            module.map((modulerecord, i) => (
              <div key={i}>
                <ModuleRecord modulerecord={modulerecord} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GetModule;
