import {
    FormLabel,
    TextField,
    Typography,
    Button,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { Link, useNavigate, useParams } from "react-router-dom";
  
  const UpdateCourse = () => {
    const id = useParams().id;
  
    const redirect = useNavigate();
  
    const [record, setRecord] = useState();
  
    useEffect(() => {
      const getRecords = async () => {
        await axios
          .get(`http://localhost:5000/records/course/${id}`)
          .then((res) => res.data)
          .then((data) => {
            setRecord(data.viewRecord);
          });
      };
      getRecords();
    }, [id]);
  
    function handleChange(e) {
      setRecord((previousRecord) => {
        return {
          ...previousRecord,
          [e.target.name]: e.target.value,
        };
      });
    }
  
    const sendRecord = async () => {
      await axios
        .put(`http://localhost:5000/records/course/${id}`, {
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
          ],
          
          
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

{record && (

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
      value={record.module[0]}
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
      value={record.module[1]}
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
      value={record.module[2]}
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
      value={record.module[3]}
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
      value={record.module[4]}
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
      value={record.module[5]}
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
      value={record.module[6]}
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
      value={record.module[7]}
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
      value={record.module[8]}
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
      value={record.module[9]}
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
      value={record.module[10]}
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
      value={record.module[11]}
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
      value={record.module[12]}
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
      value={record.module[13]}
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
      value={record.module[14]}
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
      value={record.module[15]}
      onChange={handleChange}
      variant="outlined"
      name="modulename16"
    ></TextField> 





                <Button
                  variant="contained"
                  type="submit"
                  sx={{ marginTop: "50px",width:"100%"}}
                >
                  Update 
                </Button>
  
                <Link to="/course" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ marginTop: "20px", width: "100%" }}
                  >
                    Cancel
                  </Button>
                </Link>
              </Box>
            </form>
          )}
        </div> 
      </>
    );
  };
  
  export default UpdateCourse;
  