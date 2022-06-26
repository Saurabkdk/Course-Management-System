import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";

import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/system";

const GetEnrolledStudent = () => {
  const id = useParams().id;
  const [student, setStudent] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/student/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setStudent(data.viewRecord);
        });
    };
    getRecords();
  }, [id]);

  return (
    <>
      <div>
        <Typography
          sx={{
            paddingTop: "10px",
            paddingLeft: "50px",
            fontSize: "40px",
            textShadow: "1px 2px grey",
          }}
        >
          Student
          {/* <Link to={"/studentEnrolled"} style={{ textDecoration: "none" }}>
            <span style={{fontSize:"30px", paddingLeft:"20px"}}>Enrolled</span>
          </Link>  
          <Link to={"/studentUnEnrolled"} style={{ textDecoration: "none" }}>
            <span style={{fontSize:"30px", paddingLeft:"20px"}}>Unenrolled</span>
          </Link>   */}
        </Typography>
        {student && (
          <div>
            <div className="buttonStudent">
              <Typography
                sx={{ fontSize: "26px", padding: "15px", marginLeft: "32px" }}
              >
                {student.firstname} {student.middlename} {student.lastname}
              </Typography>

              <Link
                to={`/student/edit/${id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ marginTop: "19px", marginLeft: "600px" }}
                  variant="contained"
                  color="secondary"
                >
                  Update Password
                </Button>
              </Link>
            </div>
            <Box
              sx={{
                padding: "4%",
                maxWidth: "70%",
              }}
            >
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Student Id</TableCell>
                      <TableCell>{student.id}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Status</TableCell>
                      <TableCell>{student.status}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Reason for dormancy (If)</TableCell>
                      <TableCell>{student.ifDormant}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>First Name</TableCell>
                      <TableCell>{student.firstname}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Middle Name</TableCell>
                      <TableCell>{student.middlename}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Surname</TableCell>
                      <TableCell>{student.lastname}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Temporary Address</TableCell>
                      <TableCell>{student.addresstemporary}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Permanent Address</TableCell>
                      <TableCell>{student.addresspermanent}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Contact</TableCell>
                      <TableCell>{student.contact}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Course</TableCell>
                      <TableCell>{student.course}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Batch</TableCell>
                      <TableCell>{student.batch}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Level</TableCell>
                      <TableCell>{student.level}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Section</TableCell>
                      <TableCell>{student.section}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>DOB</TableCell>
                      <TableCell>{student.dob}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Email</TableCell>
                      <TableCell>{student.email}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Entry Qualification</TableCell>
                      <TableCell>{student.entryqualification}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </div>
        )}
      </div>
    </>
  );
};

export default GetEnrolledStudent;
