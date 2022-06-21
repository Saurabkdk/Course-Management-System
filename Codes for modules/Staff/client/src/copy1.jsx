// import React, { useEffect, useState } from "react";
// import logo from "./uniLogo.png";
// import { Button, Typography, Box } from "@mui/material";
// import { Routes, Route } from 'react-router-dom';

// import "./login.css";
// import {  useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Staff, StaffCreate, StaffSearch, StaffUpdate, StaffView } from "./components/staffRecord/staff";
// import Student from "./components/studentRecord/student";
// import { Module, ModuleCreate, ModuleSearch, ModuleUpdate, ModuleView } from "./components/moduleRecord/module";
// import { Assignment, AssignmentCreate, AssignmentSubmit, AssignmentUpdate, AssignmentView, Submitted, SubmittedMark, SubmittedSearch, SubmittedView } from "./components/assignmentRecord/assignment";

// const fetchAdmin = async () => {
//   return await axios
//     .get("http://localhost:5000/records/admin")
//     .then((res) => res.data);
// };

// export const Login = () => {
//   <Routes>
//       {/* <Route exact path="/" element={<Login />}></Route> */}

//       <Route exact path="/staff" element={<Staff />}></Route>
//       <Route exact path="/staff/create" element={<StaffCreate />}></Route>
//       <Route exact path="/staff/edit/:id" element={<StaffUpdate />}></Route>
//       <Route exact path="/staff/view/:id" element={<StaffView />}></Route>
//       <Route exact path="/staff/search" element={<StaffSearch />}></Route>

//       <Route exact path="/student" element={<Student />}></Route>

//       <Route exact path="/module" element={<Module />}></Route>
//       <Route exact path="/module/create" element={<ModuleCreate />}></Route>
//       <Route exact path="/module/edit/:id" element={<ModuleUpdate />}></Route>
//       <Route exact path="/module/view/:id" element={<ModuleView />}></Route>
//       <Route exact path="/module/search" element={<ModuleSearch />}></Route>

//       <Route exact path="/assignment" element={<Assignment />}></Route>
//       <Route exact path="/assignment/create" element={<AssignmentCreate />}></Route>
//       <Route exact path="/assignment/edit/:id" element={<AssignmentUpdate />}></Route>
//       <Route exact path="/assignment/view/:id" element={<AssignmentView />}></Route>

//       <Route exact path="/submission" element={<AssignmentSubmit />}></Route>
//       <Route exact path="/submitted" element={<Submitted />}></Route>
//       <Route exact path="/submitted/mark/:id" element={<SubmittedMark />}></Route>
//       <Route exact path="/submitted/view/:id" element={<SubmittedView />}></Route>
//       <Route exact path="/submitted/search/:id" element={<SubmittedSearch />}></Route>

//     </Routes>
//   const redirect = useNavigate();

//   const [input, setInput] = useState({
//     admin_id: "",
//     password: "",
//   });

//   function handleInput(event) {
//     setInput((previousInput) => {
//       return {
//         ...previousInput,
//         [event.target.name]: event.target.value,
//       };
//     });
//   }

//   const [admin, setAdmin] = useState();
//   useEffect(() => {
//     fetchAdmin().then((data) => setAdmin(data.adminRecord));
//   }, []);

  

//   const LoginCheck = () => {
//     admin.map((admincred) => {
//       if (admincred.admin_id === parseInt(input.admin_id) && admincred.password === input.password) {
//         Redirect();
//       } else{
//         alert("Credentials don't match")
//       }
//       return <div></div>
//     })
//   };

//   const Redirect = () => {
//     // <BrowserRouter>
//     //       <App />
//     //     </BrowserRouter>
//     redirect('/staff')
//   }

//   // const LoginCheck = async () => {
//   //   await axios.post("http://localhost:5000/records/admin", {
//   //     admin_id: Number(input.admin_id),
//   //     password: String(input.password),
//   //   })
//   //   .then((res) => res.data)
//   //   .then(() => redirect("/staff"));
//   // };

//   return (
//     <div className="background">
//       <div className="login">
//         <div id="image">
//           <img
//             src={logo}
//             alt="Woodland University Logo"
//             width="300px"
//             height="200px"
//           ></img>
//         </div>

//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             maxWidth: "30%",
//             margin: "0% 30%",
//           }}
//         >
//           <Typography
//             sx={{
//               padding: "3px 20px",
//               fontSize: "30px",
//               textAlign: "center",
//               color: "white",
//             }}
//           >
//             User Id
//           </Typography>
//           <input
//             className="input"
//             type="number"
//             id="id"
//             name="admin_id"
//             onChange={handleInput}
//             required
//           ></input>

//           <Typography
//             sx={{
//               padding: "3px 20px",
//               fontSize: "30px",
//               textAlign: "center",
//               color: "white",
//             }}
//           >
//             Password
//           </Typography>
//           <input
//             className="input"
//             type="password"
//             id="password"
//             name="password"
//             onChange={handleInput}
//             required
//           ></input>

//           <Button
//             variant="contained"
//             color="primary"
//             onClick={LoginCheck}
//             sx={{ width: "100px", margin: "15% 30%" }}
//           >
//             Login
//           </Button>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default Login;