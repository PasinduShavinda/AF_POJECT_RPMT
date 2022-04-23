
/// Retrieve Page
import { Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles/shv_rs_topic.css";

const Shv_rs_topic_supervisor = (props) => {

  const history = useNavigate();
  
  const { ResTopicgroupId, ResTopicsupervisor, ResTopicresearchArea, ResTopicResearchTopic, ResTopicdateEntered } = props.resTopic;
  

  return (

<div>
    
      <Table>

        <TableBody>
              
              <TableCell
              align="center" className="ud_order_cellColor">
              {ResTopicgroupId}
              </TableCell>

              <TableCell
                align="center" component="th"className="ud_order_cellColor">
                {ResTopicsupervisor}
              </TableCell>

              <TableCell
                align="center" className="ud_order_cellColor">
                {ResTopicresearchArea}
              </TableCell>

              <TableCell
                align="center" className="ud_order_cellColor">
                {ResTopicResearchTopic}
              </TableCell>

              <TableCell
                align="center"className="ud_order_cellColor">
                {ResTopicdateEntered}
              </TableCell>
            
        </TableBody>
      </Table>
 
      {/* <p>{ResTopicgroupId}</p>
      <p>{ResTopicsupervisor}</p>
      <p>{ResTopicresearchArea}</p>
      <p>{ResTopicResearchTopic}</p>
      <p>{ResTopicdateEntered}</p>
  
      <Button LinkComponent={Link} to={`/RsTopics/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button> */}
    </div>
  );
};

export default Shv_rs_topic_supervisor;
