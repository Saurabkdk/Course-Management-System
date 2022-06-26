import {
    FormLabel,
    TextField,
    Typography,
    Button,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  
  const CreateCourse = () => {
    const redirect = useNavigate();
    const [record, setRecord] = useState({
      id:" ",
       name:"",
      year:"",
      totalmodule:" ",
      modulename1:"",
      modulename2:"",
      modulename3:"",
      modulename4:"",
      modulename5:"",
      modulename6:"",
      modulename7:"",
      modulename8:"",
      modulename9:"",
      modulename10:"",
      modulename11:"",
      modulename12:"",
      modulename13:"",
      modulename14:"",
      modulename15:"",
      modulename16:"",
    });

  
    function handleChange(e) {
      setRecord((previousRecord) => {
        return {
          ...previousRecord,
          [e.target.name]: e.target.value,
        };
      });
    }

    // const [array, setArray]=useState({
    //   module:[""],
    // });
    // function handleArray(event) {
    //   setArray((previousRecord) => {
    //     return {
    //       ...previousRecord,
    //       [event.target.name]: event.target.value.split(","),
    //     };
    //   });
    // }
  
    const sendRecord = async () => {
      // const Check = (length) => {
      // let value = [];
      // for (let i = 0; i < (array.role).length; i++) {
      //   value.push(array.role[i]);
      // }
      // console.log(value);
      // return value;
      //   let len = length - 1;
      //   if (len > 0) {
      //     return String(array.role[len]) + ", " + String(Check(length - 1));
      //   }
      // };
  
      await axios
        .post("http://localhost:5000/records/course", {

          id: Number(record.id),
          name: String(record.name),
          year:Number(record.year),
          totalmodule:Number(record.totalmodule),
          module:[
            String(record.modulename1),
            String(record.modulename2),
            String(record.modulename3),
            String(record.modulename4),
            String(record.modulename5),
            String(record.modulename6),
            String(record.modulename7),
            String(record.modulename8),
            String(record.modulename9),
            String(record.modulename10),
            String(record.modulename11),
            String(record.modulename12),
            String(record.modulename13),
            String(record.modulename14),
            String(record.modulename15),
            String(record.modulename16),

          ]
        })
        .then((res) => res.data);
    };
  
    const recordSubmit = (event) => {
      event.preventDefault();
      sendRecord().then(() => redirect("/course"));
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
            Course
          </Typography>

          

          <form onSubmit={recordSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "40%",
                padding: "40px 15% 50px",
                textAlign: "left",
              }}
            >
              <FormLabel
              sx={{
                fontSize: "20px",
                margin: "15px 0px 5px",
                fontWeight: "bold",
              }}
            >
              Id
            </FormLabel>
            <TextField
              required
              type="number"
              value={record.id}
              onChange={handleChange}
              variant="outlined"
              name="id"
            ></TextField>
              
            
             <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Name 
              </FormLabel>
            <TextField
                required
                value={record.name}
                onChange={handleChange}
                variant="outlined"
                name="name"
              
              ></TextField> 


              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "15px 0px 5px",
                  fontWeight: "bold",
                }}
              >
                Year
              </FormLabel>
              <TextField
                required
                type="number"
                value={record.year}
                onChange={handleChange}
                variant="outlined"
                name="year"
              
              ></TextField>


              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "15px 0px 5px",
                  fontWeight: "bold",
                }}
              >
                Total Module
              </FormLabel>
              <TextField
                required
                type="number"
                value={record.totalmodule}
                onChange={handleChange}
                variant="outlined"
                name="totalmodule"
              ></TextField>

            <Typography
            sx={{
              paddingTop: "20px",
             // paddingLeft: "50px",
              fontSize: "30px",
              textShadow: "1px 2px grey",
            }}
          >
            1st Year
          </Typography>

          <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename1}
                onChange={handleChange}
                variant="outlined"
                name="modulename1"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename2}
                onChange={handleChange}
                variant="outlined"
                name="modulename2"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename3}
                onChange={handleChange}
                variant="outlined"
                name="modulename3"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename4}
                onChange={handleChange}
                variant="outlined"
                name="modulename4"
              ></TextField> 


<Typography
            sx={{
              paddingTop: "20px",
             // paddingLeft: "50px",
              fontSize: "30px",
              textShadow: "1px 2px grey",
            }}
          >
            2nd Year
          </Typography>

          <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename5}
                onChange={handleChange}
                variant="outlined"
                name="modulename5"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename6}
                onChange={handleChange}
                variant="outlined"
                name="modulename6"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename7}
                onChange={handleChange}
                variant="outlined"
                name="modulename7"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename8}
                onChange={handleChange}
                variant="outlined"
                name="modulename8"
              ></TextField> 





<Typography
            sx={{
              paddingTop: "20px",
             // paddingLeft: "50px",
              fontSize: "30px",
              textShadow: "1px 2px grey",
            }}
          >
            3rd Year
          </Typography>

          <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename9}
                onChange={handleChange}
                variant="outlined"
                name="modulename9"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename10}
                onChange={handleChange}
                variant="outlined"
                name="modulename10"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename11}
                onChange={handleChange}
                variant="outlined"
                name="modulename11"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename12}
                onChange={handleChange}
                variant="outlined"
                name="modulename12"
              ></TextField> 



<Typography
            sx={{
              paddingTop: "20px",
             // paddingLeft: "50px",
              fontSize: "30px",
              textShadow: "1px 2px grey",
            }}
          >
            4rth Year
          </Typography>

          <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename13}
                onChange={handleChange}
                variant="outlined"
                name="modulename13"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename14}
                onChange={handleChange}
                variant="outlined"
                name="modulename14"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename15}
                onChange={handleChange}
                variant="outlined"
                name="modulename15"
              ></TextField> 
              <FormLabel
                sx={{
                  fontSize: "20px",
                  margin: "25px 0px 5px",
                  fontWeight: "bold",
                }}
              >
               Module Name 
              </FormLabel>
            <TextField
                required
                value={record.modulename16}
                onChange={handleChange}
                variant="outlined"
                name="modulename16"
              ></TextField> 







          
              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "50px",width:"50%",marginLeft:"100%" }}
              >
                Create 
              </Button>
  
              <Link to="/course" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ marginTop: "20px", width: "50%",marginLeft:"100%" }}
                >
                  Cancel
                </Button>
              </Link>
            </Box>
          </form>
        </div>
      </>
    );
  };
  
  export default CreateCourse;
  