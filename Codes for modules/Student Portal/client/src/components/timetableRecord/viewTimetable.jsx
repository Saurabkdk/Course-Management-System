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

const ViewTimetable = () => {
  const id = useParams().id;
  const redirect = useNavigate();

  const [record, setRecord] = useState();

  useEffect(() => {
    const getOneRecord = async () => {
      await axios
        .get(`http://localhost:5000/records/timetable/${id}`)
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
          Timetable
        </Typography>
        <Container sx={{ display: "flex" }}>
          {record && (
            <Container
              sx={{
                margin: "25px 5% 0px",
              }}
            ></Container>
          )}
          <Container
            sx={{
              margin: "25px 0% 0px 25%",
            }}
          ></Container>
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
                    <TableCell> Day \ Time </TableCell>
                    <TableCell>7:00am-8:00am </TableCell>
                    <TableCell>8:30am-10:30am </TableCell>
                    <TableCell>11:00am-12:00pm </TableCell>
                    <TableCell> 12:30pm-2:30pm </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> Sunday </TableCell>
                    <TableCell> {record.modulename1} </TableCell>
                    <TableCell> {record.modulename1} </TableCell>
                    <TableCell> {record.modulename2} </TableCell>
                    <TableCell> {record.modulename2} </TableCell>
                  </TableRow>

                  <TableRow> </TableRow>

                  {/* <TableRow>
                      <TableCell>Monday</TableCell>
                      <TableCell>7:00am-8:00am </TableCell>
                      <TableCell>8:30am-10:30am </TableCell>
                      <TableCell>11:00am-12:00pm </TableCell>
                      <TableCell> 12:30pm-2:30pm </TableCell>
                   </TableRow> */}

                  <TableRow>
                    <TableCell> Monday </TableCell>
                    <TableCell> {record.modulename3} </TableCell>
                    <TableCell> {record.modulename3} </TableCell>
                    <TableCell> {record.modulename4} </TableCell>
                    <TableCell> {record.modulename4} </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell> Tuesday </TableCell>
                    <TableCell> {record.modulename5} </TableCell>
                    <TableCell> {record.modulename5} </TableCell>
                    <TableCell> {record.modulename6} </TableCell>
                    <TableCell> {record.modulename6} </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell> Wednesday </TableCell>
                    <TableCell> {record.modulename2} </TableCell>
                    <TableCell> {record.modulename2} </TableCell>
                    <TableCell> {record.modulename3} </TableCell>
                    <TableCell> {record.modulename3} </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell> Thursday </TableCell>
                    <TableCell> {record.modulename1} </TableCell>
                    <TableCell> {record.modulename1} </TableCell>
                    <TableCell> {record.modulename4} </TableCell>
                    <TableCell> {record.modulename4} </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell> Friday </TableCell>
                    <TableCell> {record.modulename6} </TableCell>
                    <TableCell> {record.modulename6} </TableCell>
                    <TableCell> {record.modulename5} </TableCell>
                    <TableCell> {record.modulename5} </TableCell>
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

export default ViewTimetable;
