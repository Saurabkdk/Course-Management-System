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

const ViewPersonalTutorStudent = () => {
  const id = useParams().id;
  const redirect = useNavigate();

  const [record, setRecord] = useState();

  useEffect(() => {
    const getOneRecord = async () => {
      await axios
        .get(`http://localhost:5000/records/personalTutorStudent/${id}`)
        .then((res) => res.data)
        .then((data) => setRecord(data.viewRecord));
    };
    getOneRecord();
  }, [id]);

  const deleteRecord = async () => {
    await axios
      .delete(`http://localhost:5000/records/deletePersonalTutorStudent/${id}`)
      .then((res) => res.data)
      .then(() => redirect("/personalTutor"));
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
          View Student Data - Personal Tutor
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
                    <TableCell>{record.studentName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Level</TableCell>
                    <TableCell>{record.studentLevel}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Batch</TableCell>
                    <TableCell>{record.studentBatch}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Course</TableCell>
                    <TableCell>{record.course}</TableCell>
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

export default ViewPersonalTutorStudent;
