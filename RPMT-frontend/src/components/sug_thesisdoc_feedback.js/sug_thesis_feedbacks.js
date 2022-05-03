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
        <button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}> delete</button>
       <Button LinkComponent={Link} to={`/AllThesisFeedback/${_id}`} sx={{ mt: "auto" }}> update </Button></td>
      
       </tr>
 
        
    </div>
  )
}

export default  Sug_thesisdoc_feedback;