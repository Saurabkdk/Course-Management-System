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

const ViewStaff = () => {
  const id = useParams().id;
  const redirect = useNavigate();

  const [record, setRecord] = useState();

  useEffect(() => {
    const getOneRecord = async () => {
      await axios
        .get(`http://localhost:5000/records/staff/${id}`)
        .then((res) => res.data)
        .then((data) => setRecord(data.viewRecord));
    };
    getOneRecord();
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
          Staff
        </Typography>
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
                    <TableCell>Staff Id</TableCell>
                    <TableCell>{record.id}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>{record.status}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Reason for dormancy (If)</TableCell>
                    <TableCell>{record.dormant}</TableCell>
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
                    <TableCell>{record.surname}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Address</TableCell>
                    <TableCell>{record.address}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Telephone</TableCell>
                    <TableCell>{record.telephone}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{record.email}</TableCell>
                  </TableRow>

                  {record.role.map((roles, i) => (
                    <TableRow key={i}>
                      <TableCell>Role(s)</TableCell>
                      <TableCell>{roles}</TableCell>
                    </TableRow>
                  ))}

                  {record.subject.map((subjects, i) => (
                    <TableRow key={i}>
                      <TableCell>Subject(s)</TableCell>
                      <TableCell>{subjects}</TableCell>
                    </TableRow>
                  ))}

                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </div>
    </>
  );
};

export default ViewStaff;
