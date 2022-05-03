import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import { useNavigate ,useParams} from "react-router-dom";
import { TextField } from '@material-ui/core';
const Sug_FinalMarks_Assign = () => {
  const [inputs, setInputs] = useState({});
    const id =useParams().id;
    const history = useNavigate();


    useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/group/${id}`)
        .then((res) => res.data)
        .then(data=>setInputs(data.Groups))
           
        };
        fetchHandler()
      }, [id]);

     
      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      const sendRequest = async () => {
        await axios
          .put(`http://localhost:5000/group/${id}`, {
          
            Grp_ID:String(inputs.Grp_ID),
            Panel:String(inputs.Panel),
            Finalmarks:String(inputs.Finalmarks)
          })
          .then((res) => res.data);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history("/All_groups_marks"));
      };
   


 
  
    
    

  return (
   <div id="sug_createPanel">
 {inputs && (<form  onSubmit={handleSubmit} >

<h1>Register Groups</h1>




<div className='contain'>

      
<label >Group ID</label>      
<input type="text"
 name="Grp_ID" 
 placeholder="Grp_ID"
 value={inputs.Grp_ID}
 onChange={handleChange}
 />


</div>
<div className='contain'>

      
<label >Panel</label>      
<input type="text"
 name="Panel" 
 placeholder="Panel"
 value={inputs.Panel}
 onChange={handleChange}
 />


</div>
<div className='contain'>
<label >marks</label>  
<TextField
          id="Finalmarks"
          type="number"
          name="Finalmarks"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={inputs.Finalmarks}
          onChange={handleChange}
        />

</div>








     <br/>
     <button type="submit">submit</button>
     </form>)}
     </div>

  
  )
}

export default Sug_FinalMarks_Assign ;