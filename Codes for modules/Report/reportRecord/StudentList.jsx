import React from "react";
import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const StudentList = (props) => {
  const {
    _id,
    id,
    firstname,
    middlename,
    surname,
  } = props.record;

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
                        to={`/report/studentView/${_id}`}
                      >
                        <Typography>
                          {id}. {firstname} {middlename} {surname}
                        </Typography>
                      </Button>
                    </p>
                    <div className="generateButton">
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Link
                            to={`/report/studentView/${_id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <Button
                              variant="contained"
                              color="inherit"
                              size="small"
                            >
                              {" "}
                              Generate Report{" "}
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

export default StudentList;
