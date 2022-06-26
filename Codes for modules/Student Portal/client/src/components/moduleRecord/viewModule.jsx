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

const ViewModule = () => {
  const id = useParams().id;

  const redirect = useNavigate();

  const [record, setRecord] = useState();

  useEffect(() => {
    const getRecords = async () => {
      await axios
        .get(`http://localhost:5000/records/module/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setRecord(data.viewRecord);
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

                  {record.staff.map((staff, i) => (
                    <TableRow key={i}>
                      <TableCell>Staff</TableCell>
                      <TableCell>
                        <Link
                          to={`/staff/view/${staff}`}
                          style={{
                            textDecoration: "none",
                            color: "blue",
                          }}
                        >
                          {staff}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell>Resource link</TableCell>
                    <TableCell>{record.link}</TableCell>
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

export default ViewModule;
