import { Box, Button, TextField, Typography, Grid, List, ListItem } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";


const SearchStaff = () => {

    const [input, setInput] = useState({
        id : "",
    })
    const [record, setRecord] = useState()

    const searchInput = (e) => {
        setInput((previousInput) => {
            return{
                ...previousInput,
                [e.target.name] : e.target.value
            }
        })
    }
        const id = parseInt(input.id);
    
        const ViewSearch = async () => { 
            await axios.get(`http://localhost:5000/records/staff/search/${id}`)
            .then((res) => res.data)
            .then((data) => setRecord(data.searchRecord)) 
        }

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
        <Box sx={{
            display : "flex",
            margin : "10px 10px",
            justifyContent : 'left',
        }}>
            <TextField onChange={searchInput} variant='outlined' name="id" label = 'Search Id' sx={{
                width : '200px',
                height : '10px',
                margin : '10px 10px',
            }}></TextField>
            <Button onClick={ViewSearch} variant='contained' color='secondary' sx={{
                margin : '15px 10px',
            }}>Search</Button>
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
                        to={`/staff/view/${record._id}`}
                      >
                        <Typography>
                          {record.id}. {record.firstname} {record.middlename} {record.surname}
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
                            to={`/staff/edit/${record._id}`}
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
                          <Link to={`/staff/view/${record._id}`}>
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
        )}
        </div>
    </>
  )
}

export default SearchStaff;
