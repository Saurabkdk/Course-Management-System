import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const SearchModule = () => {
  const [input, setInput] = useState({
    id: "0",
  });
  const [record, setRecord] = useState();

  const searchInput = (event) => {
    setInput((previousInput) => {
      return {
        ...previousInput,
        [event.target.name]: event.target.value,
      };
    });
  };

  const id = input.id;

  const ViewSearch = async () => {
    await axios
      .get(`http://localhost:5000/records/module/search/${id}`)
      .then((res) => res.data)
      .then((data) => setRecord(data.searchModule));
  };

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
        <Box
          sx={{
            display: "flex",
            margin: "10px 10px",
            justifyContent: "left",
          }}
        >
          <TextField
            onChange={searchInput}
            variant="outlined"
            name="id"
            label="Search Id"
            sx={{
              width: "200px",
              height: "10px",
              margin: "10px 10px",
            }}
          ></TextField>
          <Button
            onClick={ViewSearch}
            variant="contained"
            color="secondary"
            sx={{
              margin: "15px 10px",
            }}
          >
            Search
          </Button>
        </Box>
        {record && (
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
                          to={`/module/view/${record._id}`}
                        >
                          <Typography>
                            {record.id}. {record.module_name}
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
                              to={`/module/edit/${record._id}`}
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
                            <Link to={`/module/view/${record._id}`}>
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
        )}
      </div>
    </>
  );
};

export default SearchModule;
