import React from 'react';
import { List, ListItem, ListItemButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import './dashboard.css';

const Dashboard = () => {
    return(
        <>
            <div className = 'dashboard'>
                <header className = 'heading'>
                    <Typography align='center' color='white'>RECORD MANAGEMENT SYSTEM</Typography>
                </header>
                
                <div id='list'>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <Link to='/student' style={{textDecoration : 'none'}}>
                                    <Typography color='white'> Student </Typography>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <Link to='/staff' style={{textDecoration : 'none'}}>
                                    <Typography color='white'> Staff </Typography>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <Typography color='white'> Course </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <Typography color='white'> Module </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <Typography color='white'> Assignment </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <Typography color='white'> Attendance </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <Typography color='white'> Personal Tutors </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <Typography color='white'> Timetable </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <Typography color='white'> Diary </Typography>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
                
            </div>
        </>
    )
}

export default Dashboard;