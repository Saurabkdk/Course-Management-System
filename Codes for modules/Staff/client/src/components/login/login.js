import React, { useEffect, useState } from "react";
import logo from "./uniLogo.png";
import { Button, Typography, Box } from "@mui/material";

import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UseAuthentication } from "../../adminAuthentication";

const fetchAdmin = async () => {
  return await axios
    .get("http://localhost:5000/records/admin")
    .then((res) => res.data);
};

export const Login = () => {
  const redirect = useNavigate();

  const [input, setInput] = useState({
    admin_id: "",
    password: "",
  });

  function handleInput(event) {
    setInput((previousInput) => {
      return {
        ...previousInput,
        [event.target.name]: event.target.value,
      };
    });
  }

  const authentication = UseAuthentication();

  const [admin, setAdmin] = useState();
  useEffect(() => {
    fetchAdmin().then((data) => setAdmin(data.adminRecord));
  }, []);


  const LoginCheck = () => {
    admin.map((admincred) => {
      if (admincred.admin_id === parseInt(input.admin_id) && admincred.password === input.password) {
        Redirect();
      } else{
        alert("Credentials don't match")
      }
      return <div></div>
    })
  };

  const Redirect = () => {
    authentication.login(input);
    redirect('/staff', {replace : true})
  }

  // const LoginCheck = () => {
  //   // await axios.post("http://localhost:5000/records/admin", {
  //   //   admin_id: Number(input.admin_id),
  //   //   password: String(input.password),
  //   // })
  //   // .then((res) => console.log(res.data))
  //   authentication.login(input);
  //   redirect('/staff', {replace : true})
  // };

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
            maxWidth: "35%",
            margin: "0% 0% 0 32%",
          }}
        >
          <Typography
            sx={{
              padding: "3px 20px",
              fontSize: "30px",
              textAlign: "center",
              color: "black",
            }}
          >
            User Id
          </Typography>
          <input
            className="input"
            type="number"
            id="id"
            name="admin_id"
            onChange={handleInput}
            required
          ></input>

          <Typography
            sx={{
              padding: "3px 20px",
              fontSize: "30px",
              textAlign: "center",
              color: "black",
            }}
          >
            Password
          </Typography>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
            required
          ></input>

          <Button
            variant="contained"
            color="secondary"
            onClick={LoginCheck}
            sx={{ width: "100px", margin: "7% 34%" }}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
};