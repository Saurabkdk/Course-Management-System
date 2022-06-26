import React from "react";
import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const StudentRecord = (props) => {
  const {
    _id,
    id,
    firstname,
    middlename,
    surname,
  } = props.studentrecord;

  return (
    <>
      <div className="record">
        <main className="list">
          <ol>
            <li>
              <List>
                <ListItem>
                  <div className="listitem">
                    <p>
                      <Button
                        color="inherit"
                        LinkComponent={Link}
                        to={`/student/view/${_id}`}
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
                            to={`/student/edit/${_id}`}
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
                          <Link to={`/student/view/${_id}`}>
                            <Button aria-label="delete" sx={{ color: "black" }}>
                              {" "}
                              <DeleteIcon />{" "}
                            </Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </ListItem>
              </List>
            </li>
          </ol>
        </main>
      </div>
    </>
  );
};

export default StudentRecord;
