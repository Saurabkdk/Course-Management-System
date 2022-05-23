import React from "react";
import logo from "./uniLogo.png";
import { Button, Typography, Box, TextField } from "@mui/material";

import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="background">
    <div className="login">
      <div id="image">
        <img
          src={logo}
          alt="Woodland University Logo"
          width="300px"
          height="200px"
        ></img>
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "30%",
          margin : "0% 30%",
        }}
      >
        <Typography sx={{padding : '3px 20px', fontSize : '30px', textAlign : 'center', color : 'white'}}>User Id</Typography>
        <input className='input' type="number" id="id" name="name" required></input>

        <Typography sx={{padding : '3px 20px', fontSize : '30px', textAlign : 'center', color : 'white'}}>Password</Typography>
        <input className='input' type="password" id="password" name="password" required></input>
        
        <Link to='/staff' style={{textDecoration : 'none'}}><Button variant="contained" color="primary" sx={{ width: "100px", margin : '15% 30%' }}>
          Login
        </Button>
        </Link>
      </Box>
    </div>
    </div>
  );
};

export default Login;
