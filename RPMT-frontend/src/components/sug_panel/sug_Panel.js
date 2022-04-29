import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Panel= (props) => {
  const history = useNavigate();
    const { _id, panelID,panelmember1,panelmember2,panelmember3,panelmember4 }=props.panel;
   
 
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/panel/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/allPanel"));
    };
   
 

  return (
    <div >
      <tr>
       <td width={"200px"}>{panelID}</td>
       <td width={"200px"}>{panelmember1}</td>
       <td width={"200px"}>{panelmember2}</td>
       <td width={"200px"}>{panelmember3}</td>
       <td width={"200px"} >{panelmember4}</td>
       <td width={"200px"}>  <button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}> delete</button></td>
      
       </tr>
 
        
    </div>
  )
}

export default Panel;