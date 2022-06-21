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

const ViewDiary = () => {
  const id = useParams().id;

  const redirect = useNavigate();

  const [record, setRecord] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/diary/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setRecord(data.viewRecord);
        });
    };
    getRecords();
  }, [id]);

  const deleteRecord = async () => {
    await axios
      .delete(`http://localhost:5000/records/diary/${id}`)
      .then((res) => res.data)
      .then((res) => console.log(res.data))
      .then(() => redirect("/diary"));
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
          Modules
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
                    <TableCell>Module Id</TableCell>
                    <TableCell>{record.id}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.module_name}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Set On Date</TableCell>
                    <TableCell>{record.set_on_date}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Information</TableCell>
                    <TableCell>{record.information}</TableCell>
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

export default ViewDiary;
