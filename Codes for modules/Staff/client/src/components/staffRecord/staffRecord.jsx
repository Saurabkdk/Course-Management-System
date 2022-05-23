import React from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import "./staffRecord.css";
import axios from "axios";

const StaffRecord = (props) => {
  const {
    _id,
    id,
    status,
    dormant,
    firstname,
    middlename,
    surname,
    address,
    telephone,
    email,
    role,
    subject,
  } = props.staffrecord;

  return (
    <>
      <div className="record">
        <main className="list">
          <ol>
            <li>
              <List>
                <ListItem>
                  {/* <ListItemButton>                              */}
                  <div className="listitem">
                    <p>
                      <Button
                        color="inherit"
                        LinkComponent={Link}
                        to={`/staff/view/${_id}`}
                      >
                        <Typography>
                          {id}. {firstname} {middlename} {surname}
                        </Typography>
                      </Button>
                    </p>
                    <div className="changeButton">
                      <Grid container spacing={1}>
                        <Grid item xs={3}>
                          <Button
                            variant="contained"
                            color="inherit"
                            size="small"
                          >
                            {" "}
                            Assign{" "}
                          </Button>
                        </Grid>
                        <Grid item xs={3}>
                          <Link
                            to={`/staff/edit/${_id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <Button
                              variant="contained"
                              color="inherit"
                              size="small"
                            >
                              {" "}
                              Edit{" "}
                            </Button>
                          </Link>
                        </Grid>
                        <Grid item xs={3}>
                          <Button
                            variant="contained"
                            color="inherit"
                            size="small"
                          >
                            {" "}
                            Archive{" "}
                          </Button>
                        </Grid>
                        <Grid item xs={3}>
                          <Link to={`/staff/view/${_id}`}>
                            <Button aria-label="delete" sx={{ color: "black" }}>
                              {" "}
                              <DeleteIcon />{" "}
                            </Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  {/* </ListItemButton> */}
                </ListItem>
              </List>
            </li>
          </ol>
        </main>
      </div>
    </>
  );
};

export default StaffRecord;
