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

const ViewAssignment = () => {
  const id = useParams().id;

  const redirect = useNavigate();

  const [record, setRecord] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/assignment/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setRecord(data.viewRecord);
        });
    };
    getRecords();
  }, [id]);

  const deleteRecord = async () => {
    await axios
      .delete(`http://localhost:5000/records/assignment/${id}`)
      .then((res) => res.data)
      .then((res) => console.log(res.data))
      .then(() => redirect("/assignment"));
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
          Assignment
        </Typography>
        <Container sx={{ display: "flex" }}>
          {record && (
            <Container
              sx={{
                margin: "25px 5% 0px",
              }}
            >
              <Typography sx={{ fontSize: "25px" }}>
                {record.module_name}
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
                    <TableCell>Assignment</TableCell>
                    <TableCell>{record.assignment}</TableCell>
                  </TableRow>

                    <TableRow>
                      <TableCell>Module</TableCell>
                      <TableCell>
                        <Link
                          to={`/module/view/${record.module}`}
                          style={{
                            textDecoration: "none",
                            color: "blue",
                          }}
                        >
                          {record.module}
                        </Link>
                      </TableCell>
                    </TableRow>

                  <TableRow>
                    <TableCell>File Link</TableCell>
                    <TableCell>{record.file_link}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>{record.desc}</TableCell>
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

export default ViewAssignment;
