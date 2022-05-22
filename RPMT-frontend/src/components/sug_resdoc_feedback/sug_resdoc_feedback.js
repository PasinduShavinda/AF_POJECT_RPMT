import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Sug_resdoc_feedback= (props) => {
  const history = useNavigate();
    const { _id,  ResDocFileGroupId,ResDocFileSupervisor, ResDocFileTopic,Feedback,EvaluvatedDate}=props.Feedbacks;
   
 
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/resdoc_feedback2/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/AllResDocFeedback"));
    };
   
 

  return (
    <div >
      <tr>
       <td width={"200px"}>{ResDocFileGroupId}</td>
       <td width={"200px"} >{ResDocFileSupervisor}</td>
       <td width={"200px"}>{ResDocFileTopic}</td>
       <td width={"200px"}>{Feedback}</td>
       <td width={"200px"}>{EvaluvatedDate}</td>
       <td width={"200px"}> 
       <a><button class="btn btn-danger" onClick={deleteHandler} ><i class="fa fa-trash-o" aria-hidden="true"></i>delete</button></a> 
        &nbsp;
        <a href={`/AllResDocFeedback/${_id}`}><button class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> update </button></a> </td>
      
       </tr>
 
        
    </div>
  )
}

export default  Sug_resdoc_feedback;