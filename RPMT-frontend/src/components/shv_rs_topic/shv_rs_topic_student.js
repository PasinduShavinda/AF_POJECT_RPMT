
/// Retrieve Page
import { Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles/shv_rs_topic.css";
import { withStyles, makeStyles } from '@material-ui/core/styles';

const Shv_rs_topic = (props) => {

  const history = useNavigate();
  
  const { _id, ResTopicgroupId, ResTopicsupervisor, ResTopicresearchArea, ResTopicResearchTopic, createdAt } = props.resTopic;
  
  const deleteHandler = async () => {
  
    await axios
      .delete(`http://localhost:5000/resTopics/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/RsTopics"));
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 100,
    },
  }))(TableCell);


  return (

<div>
    <center>
      <Table style = {{marginTop:'20px'}}>
              
              <StyledTableCell align="left" width="220px"
              >
              {ResTopicgroupId} 
              </StyledTableCell>         

              <StyledTableCell align="left" width="220px"
               >
                {ResTopicsupervisor}
              </StyledTableCell>         

              <StyledTableCell align="left" width="220px"
                >
                {ResTopicresearchArea}
              </StyledTableCell>         

              <StyledTableCell align="left" width="220px"
                >
                {ResTopicResearchTopic}
              </StyledTableCell>         

              <StyledTableCell align="left" width="220px"
               >
                {createdAt}
              </StyledTableCell>         

              <StyledTableCell align="right">
                <Button variant="contained" color="warning" LinkComponent={Link} to={`/RsTopics/${_id}`} sx={{ mt: "auto" }}>Update</Button>&nbsp;
                <Button variant="contained" color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>Delete</Button>
              </StyledTableCell>

      </Table>
      </center>
    </div>

  );
};

export default Shv_rs_topic;
