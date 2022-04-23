import React, { useEffect, useState } from "react";
import "./styles/shv_rs_topic.css";
import axios from "axios";
import Shv_rs_topic from "./shv_rs_topic_student";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { withStyles, makeStyles } from '@material-ui/core/styles';

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


  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 20,
      
    },
  }))(TableCell);


  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <center>
        <h1>Research topics submitted by students</h1><br/><br/><br/>
      <ul>

      <TableRow>
          <StyledTableCell align="left">Group ID</StyledTableCell> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <StyledTableCell align="left" >Supervisor</StyledTableCell> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <StyledTableCell align="left">Research Area</StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <StyledTableCell align="left">Research Topic</StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
          <StyledTableCell align="left">Date Entered</StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
          <StyledTableCell align="left">Action</StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
        </TableRow>
      
        </ul>
        <br/>
  
        {resTopics &&
          resTopics.map((resTopic, i) => (
            <StyledTableRow key={i}>&nbsp;
              <Shv_rs_topic resTopic={resTopic} />
            </StyledTableRow>
          ))}
  </center>
    </div>
  );
};

export default Shv_rs_topics;
