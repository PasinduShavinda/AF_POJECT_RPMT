import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Sug_topicdoc_feedback= (props) => {
  const history = useNavigate();
    const { _id,  ResTopicFileGroupId,ResTopicFilePanel,Feedback,EvaluvatedDate}=props.Feedbacks;
   
 
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/topicdoc_feedback2/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/AllTopicDocFeedback"));
    };
   
 

  return (
    <div >
      <tr>
       <td width={"200px"}>{ResTopicFileGroupId}</td>
       <td width={"200px"} >{ResTopicFilePanel}</td>
       <td width={"200px"}>{Feedback}</td>
       <td width={"200px"}>{EvaluvatedDate}</td>
       <td width={"200px"}>  
       <a><button class="btn btn-danger" onClick={deleteHandler} ><i class="fa fa-trash-o" aria-hidden="true"></i>delete</button></a> 
        &nbsp;
        <a href={`/AllTopicDocFeedback/${_id}`}><button class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> update </button></a> 
       </td>
      
       </tr>
 
        
    </div>
  )
}

export default  Sug_topicdoc_feedback;

