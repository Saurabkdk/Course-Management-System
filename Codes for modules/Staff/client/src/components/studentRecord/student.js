import React from "react";
import {  } from "@mui/material";



import Dashboard from "../dashboard/dashboard";

import GetStudent from "./getStudent";

const Student = () => {
  return(
    <>
    <div className = "container">
    
        <Dashboard />
        <GetStudent />
        
    </div>
    
    </>
  )
}

export default Student;