import React, { useEffect, useState } from "react";
import logo from "./uniLogo.png";
import { Button, Typography, Box } from "@mui/material";

import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UseAuthentication } from "../../adminAuthentication";

const fetchAdmin = async () => {
  return await axios
    .get("http://localhost:5000/records/student")
    .then((res) => res.data);
};

export const Login = () => {
  const redirect = useNavigate();

  const [input, setInput] = useState({
    id: "",
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

  const [student, setStudent] = useState();
  useEffect(() => {
    fetchAdmin().then((data) => setStudent(data.studentRecord));
  }, []);

  let _id;

  const LoginCheck = () => {
    let logged = false;
    for (let i = 0; i < student.length; i++) {
      if (
        student[i].id === parseInt(input.id) &&
        student[i].password === input.password
      ) {
        _id = student[i]._id;
        window.$userId = student[i]._id;
        i = student.length + 1;
        logged = true;
        Redirect();
      }
    }
    if (!logged) {
      alert("Credentials don't match");
    }
  };

  

  const Redirect = () => {
    // console.log(_id);
    authentication.login(input);
    redirect(`/studentEnrolled/view/${_id}`, { replace: true });
  };

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
            name="id"
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


