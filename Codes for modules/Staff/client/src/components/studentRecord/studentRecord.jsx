import React from "react";
import { Button, Grid, List, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import "./studentRecord.css";

const StudentRecord = (props) => {
    const{_id, id, status, dormant, firstname, middlename, surname, address, telephone, email, role, subject} = props.record;

    return(
        <>
            <div className = "record">
                <main className = 'list'>
                    <ol>
                        <li>
                            <List>
                                <ListItem>
                                    {/* <ListItemButton>                              */}
                                        <div className="listitem">
                                            <p><Button color="inherit"><Typography>{id}. {firstname} {middlename} {surname}</Typography></Button></p>
                                            <div className = 'changeButton'>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={3}>
                                                        <Button variant="contained" color = 'inherit' size = 'small'> Assign </Button>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Button variant="contained" color = 'inherit' size = 'small'> Edit </Button>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Button variant="contained" color = 'inherit' size = 'small'> Archive </Button>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Button color = 'inherit' aria-label="delete"> <DeleteIcon /> </Button>
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
    )
}

export default StudentRecord;