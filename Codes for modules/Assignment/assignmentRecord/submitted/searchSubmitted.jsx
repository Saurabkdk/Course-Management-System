import React, { useEffect, useState } from "react";
import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const SearchSubmitted = () => {
  const id = useParams().id;

  const [record, setRecord] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/submitted/search/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setRecord(data.searchSubmission);
        });
    };
    getRecords();
  }, [id]);

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
          Assignment (Submitted)
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            paddingLeft: "50px",
            paddingTop: "30px",
            paddingBottom: "10px",
          }}
        >
          Search Results
        </Typography>

        {record && (
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
                            to={`/submitted/view/${record._id}`}
                          >
                            <Typography>
                              {record.student_name} ({record.module_name})
                            </Typography>
                          </Button>
                        </p>
                        <div className="changeButton">
                          <Grid container spacing={1}>
                            <Grid item xs={6}>
                              <Link
                                to={`/submitted/mark/${record._id}`}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
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
                              <Link to={`/submitted/view/${record._id}`}>
                                <Button
                                  aria-label="delete"
                                  sx={{ color: "black" }}
                                >
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
        )}
      </div>
    </>
  );
};

export default SearchSubmitted;
