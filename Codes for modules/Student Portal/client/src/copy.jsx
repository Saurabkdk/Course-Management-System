import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Typography } from "@mui/material";

import { Link, useParams } from "react-router-dom";

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
            paddingTop: "20px",
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
                sx={{ fontSize: "28px", padding: "15px", marginLeft: "32px" }}
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
            <div className="information">
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    marginTop: "10px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Student ID
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  {student.id}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Record Status
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.status}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Reason For Dormancy (If)
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.ifDormant}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  First Name
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.firstname}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Middle Name
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.middlename}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Surname
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.lastname}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Temporary Address
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.addresstemporary}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Permanent Address
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.addresspermanent}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.contact}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Course
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.course}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Batch
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.batch}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Level
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.level}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Section
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.section}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Date Of Birth
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.dob}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  {student.email}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}
              >
                <Typography
                  sx={{
                    width: "300px",
                    fontSize: "18px",
                    padding: "15px",
                    marginRight: "20px",
                    marginBottom: "15px",
                    backgroundColor: "#97A956",
                    border: "1px solid",
                    borderRadius: "8%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Entry Qualification(s)
                </Typography>
                <Typography
                  sx={{
                    width: "400px",
                    textAlign: " center",
                    fontSize: "18px",
                    padding: "15px",
                    marginLeft: "20px",
                    marginBottom: "15px",
                  }}
                >
                  {student.entryqualification}
                </Typography>
              </Container>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GetEnrolledStudent;
