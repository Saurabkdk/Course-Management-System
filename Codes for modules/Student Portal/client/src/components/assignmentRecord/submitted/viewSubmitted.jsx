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
  import { Link, useNavigate, useParams } from "react-router-dom";
  import axios from "axios";

const ViewSubmitted = () => {
  const id = useParams().id;

  const redirect = useNavigate();

  const [record, setRecord] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/submitted/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setRecord(data.viewRecord);
        });
    };
    getRecords();
  }, [id]);

  const deleteRecord = async () => {
    await axios
      .delete(`http://localhost:5000/records/submitted/${id}`)
      .then((res) => res.data)
      .then((res) => console.log(res.data))
      .then(() => redirect("/submitted"));
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
          Assignment (Submitted)
        </Typography>
        <Container sx={{ display: "flex" }}>
          {record && (
            <Container
              sx={{
                margin: "25px 5% 0px",
              }}
            >
              <Typography sx={{ fontSize: "25px" }}>
                {record.student_name}
              </Typography>
            </Container>
          )}
          <Container
            sx={{
              margin: "25px 0% 0px 19%",
            }}
          >
            <Button variant="contained" color="error" onClick={deleteRecord}>
              Delete Assignment
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
                    <TableCell>Student Id</TableCell>
                    <TableCell>{record.student_id}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Student</TableCell>
                    <TableCell>
                      <Link
                        to={`/staff/view/${record.student}`}
                        style={{
                          textDecoration: "none",
                          color: "blue",
                        }}
                      >
                        {record.student}
                      </Link>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Student Name</TableCell>
                    <TableCell>{record.student_name}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module name</TableCell>
                    <TableCell>{record.module_name}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Submitted File Link</TableCell>
                    <TableCell>{record.submission_link}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Grade</TableCell>
                    <TableCell>{record.grade}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Feedback</TableCell>
                    <TableCell>{record.feedback}</TableCell>
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

export default ViewSubmitted;