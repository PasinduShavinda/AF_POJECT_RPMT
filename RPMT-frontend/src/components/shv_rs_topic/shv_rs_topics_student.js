import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./styles/shv_rs_topic.css";
import axios from "axios";
import Shv_rs_topic from "./shv_rs_topic_student";

const URL = "http://localhost:5000/resTopics";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Shv_rs_topics = () => {
  
  const [resTopics, setresTopics] = useState();

  useEffect(() => {
  
    fetchHandler().then((data) => setresTopics(data.resTopics));
  
  }, []);
  
  console.log(resTopics);
  return (
    <div>
      <center>
      <br/>
      <br/>
      <h1>Students can update and delete submitted research topics</h1>
      </center>
      <br/>
      <br/>
      <Table>
      <TableHead>
          <TableRow>
          <TableCell >Group ID</TableCell>
          <TableCell >Supervisor</TableCell>
          <TableCell >Research Area</TableCell>
          <TableCell >Research Topic</TableCell>
          <TableCell >Date Entered</TableCell>
          <TableCell >Action</TableCell>
     
          </TableRow>
        </TableHead>
        <TableBody>
      <ul>
        {resTopics &&
          resTopics.map((resTopic, i) => (
            <TableRow key={i}>
              <Shv_rs_topic resTopic={resTopic} />
            </TableRow>
          ))}
      </ul>
      </TableBody>
      </Table>
  
    </div>
  );
};

export default Shv_rs_topics;
