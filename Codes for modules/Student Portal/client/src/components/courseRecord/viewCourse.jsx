import React, { useEffect, useState } from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Paper,
  Container,
  TableBody,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ViewCourse = () => {
  const id = useParams().id;
  const redirect = useNavigate();

  const [record, setRecord] = useState();

  useEffect(() => {
    const getOneRecord = async () => {
      await axios
        .get(`http://localhost:5000/records/course/${id}`)
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
          Course
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
                    <TableCell>Id</TableCell>
                    <TableCell>{record.id}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>{record.name}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Year</TableCell>
                    <TableCell>{record.year}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell> Total Module</TableCell>
                    <TableCell>{record.totalmodule}</TableCell>
                  </TableRow>

                  {/* <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename1}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename2}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename3}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename4}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename5}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename6}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename7}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename8}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename9}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename10}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename11}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename12}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename13}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename14}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename15}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>{record.modulename16}</TableCell>
                  </TableRow> */}


                  {record.module.map((module, i) => (
                    <TableRow key={i}>
                      <TableCell>Module(s)</TableCell>
                      <TableCell>{module}</TableCell>
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

export default ViewCourse;
