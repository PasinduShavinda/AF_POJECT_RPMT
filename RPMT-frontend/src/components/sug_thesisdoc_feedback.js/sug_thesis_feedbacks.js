import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



const Sug_thesisdoc_feedback= (props) => {
  const history = useNavigate();
    const { _id,  ResThesisFileGroupId ,ResThesisFileSupervisor,Feedback,EvaluvatedDate}=props.Feedbacks;
   
 
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/thesisdoc_feedback2/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/AllThesisFeedback"));
    };
   
 

  return (
    <div >
      <tr>
       <td width={"200px"}>{ResThesisFileGroupId}</td>
       <td width={"200px"} >{ResThesisFileSupervisor}</td>
       <td width={"200px"}>{Feedback}</td>
       <td width={"200px"}>{EvaluvatedDate}</td>
       <td width={"200px"}> 
   
       <a><button class="btn btn-danger" onClick={deleteHandler} ><i class="fa fa-trash-o" aria-hidden="true"></i>delete</button></a> 
        &nbsp;
        <a href={`/AllThesisFeedback/${_id}`}><button class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> update </button></a> </td>
       </tr>
 
        
    </div>
  )
}

export default  Sug_thesisdoc_feedback;