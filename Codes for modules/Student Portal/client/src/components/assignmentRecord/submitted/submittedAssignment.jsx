import React from "react";
import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const SubmittedAssignment = (props) => {
  const { _id, student_name, module_name } = props.submissionRecord;

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
                        to={`/submitted/view/${_id}`}
                      >
                        <Typography>
                          {student_name} --- {module_name}
                        </Typography>
                      </Button>
                    </p>
                    <div className="changeButton">
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Link
                            to={`/submitted/mark/${_id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <Button
                              variant="contained"
                              color="inherit"
                              size="small"
                            >
                              {" "}
                              Mark{" "}
                            </Button>
                          </Link>
                        </Grid>
                        <Grid item xs={6}>
                          <Link to={`/submitted/view/${_id}`}>
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

export default SubmittedAssignment;
