import React from "react";
import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const DiaryRecord = (props) => {
  const {
    _id,
    id,
    module_name,
    } = props.diaryrecord;

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
                        to={`/diary/view/${_id}`}
                      >
                        <Typography>
                          {id}. {module_name}
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
                            to={`/diary/edit/${_id}`}
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
                          <Link to={`/diary/view/${_id}`}>
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

export default DiaryRecord;
