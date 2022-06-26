import React, { useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
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
import { useParams } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";

const StudentReport = () => {
  const id = useParams().id;

  const [record, setRecord] = useState();

  useEffect(() => {
    const getOneRecord = async () => {
      await axios
        .get(`http://localhost:5000/records/student/${id}`)
        .then((res) => res.data)
        .then((data) => setRecord(data.viewRecord));
    };
    getOneRecord();
  }, [id]);

  const componentRef = useRef();
  const generate = useReactToPrint({
    content: () => componentRef.current,
  });

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
          Staff
        </Typography>
        <div ref={componentRef}>
          <Container sx={{ display: "flex" }}>
            {record && (
              <Container
                sx={{
                  margin: "25px 5% 0px",
                }}
              >
                <Typography sx={{ fontSize: "25px" }}>
                  {record.firstname} {record.middlename} {record.surname}
                </Typography>
              </Container>
            )}
            <Container
              sx={{
                margin: "25px 0% 0px 25%",
              }}
            >
              <Button variant="contained" color="primary" onClick={generate}>
                Generate Record
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
                    <TableCell>{record.id}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>{record.status}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Reason for dormancy (If)</TableCell>
                    <TableCell>{record.ifDormant}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>{record.firstname}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Middle Name</TableCell>
                    <TableCell>{record.middlename}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Surname</TableCell>
                    <TableCell>{record.lastname}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Temporary Address</TableCell>
                    <TableCell>{record.addresstemporary}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Permanent Address</TableCell>
                    <TableCell>{record.addresspermanent}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Contact</TableCell>
                    <TableCell>{record.contact}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Course</TableCell>
                    <TableCell>{record.course}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>DOB</TableCell>
                    <TableCell>{record.dob}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{record.email}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Entry Qualification</TableCell>
                    <TableCell>{record.entryqualification}</TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default StudentReport;
