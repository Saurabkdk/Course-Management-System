import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

import StudentRecord from './studentRecord';

import { Link } from "react-router-dom";
import { fontSize } from "@mui/system";

const URL = "http://localhost:5000/records/staff";

const fetchStaff = async () => {
    return await axios.get(URL).then((res) => res.data);
}

const GetStudent = () => {
  const [staff, setStaff] = useState();
  useEffect(() => {
    fetchStaff().then((data) => setStaff(data.staffRecord));
  }, []);
  console.log(staff);

  return(
      <>
      <div>
          <Typography 
            sx={{
                paddingTop : '20px',
                paddingLeft : '50px',
                fontSize : '40px',
                textShadow : '1px 2px grey'
            }}>
            Student
            </Typography>
      <div className = "buttons">
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Link to={'/create'} style={{textDecoration: 'none'}}>
                            <Button variant="contained" color = 'secondary' startIcon = {<AddIcon />}> Create </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color = 'secondary'> Archived </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color = 'secondary' startIcon = {<SearchIcon />}> Search </Button>
                        </Grid>
                    </Grid>
        </div>
        <div className="containList">
        {staff && 
            staff.map((record, i) => (
                <div key={i}>
                    <StudentRecord record = {record} />
                </div>
            ))
            }
        </div>
        </div>
      </>
  );
 
}

export default GetStudent;