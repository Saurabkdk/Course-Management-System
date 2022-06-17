import React, { useEffect, useState } from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Paper,
  Button,
  Container,
  TableBody,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./staffRecord.css";

const ViewAttendanceStudent = () => {
  const id = useParams().id;
  const [attendancePercent, setAttendancePercent] = useState(async ()=>{
    const percent = await axios
    .get(`http://localhost:5000/records/attendanceStudent/countAttendance/${id}`)
    // console.log(percent.data.perCount);
    setAttendancePercent(percent.data.perCount);
  });
  const redirect = useNavigate();

  const [record, setRecord] = useState();

  useEffect(() => {
    const getOneRecord = async () => {
      await axios
        .get(`http://localhost:5000/records/attendanceStudent/${id}`)
        .then((res) => res.data)
        .then((data) => setRecord(data.viewRecord));
    };
    getOneRecord();
  }, [id]);

  

  const deleteRecord = async () => {
    await axios
      .delete(`http://localhost:5000/records/deleteAttendanceStudent/${id}`)
      .then((res) => res.data)
      .then(() => redirect("/attendance"));
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
          View Student Data - Attendance
        </Typography>
        <Container sx={{ display: "flex" }}>
          {record && (
            <Container
              sx={{
                margin: "25px 5% 0px",
              }}
            >
              <Typography sx={{ fontSize: "25px" }}>
                {record.name}
              </Typography>
            </Container>
          )}
          <Container
            sx={{
              margin: "25px 0% 0px 25%",
            }}
          >
            <Button variant="contained" color="error" onClick={deleteRecord}>
              Delete Record
            </Button>
          </Container>
        </Container>

        <Box
          sx={{
            margin: "40px 10% 60px",
            width: "70%",
          }}
        >
          {record && (
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Student Name</TableCell>
                    <TableCell>{record.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Attendance Percent</TableCell>
                    <TableCell>{attendancePercent}</TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </div>
    </>
  );
};

export default ViewAttendanceStudent;
