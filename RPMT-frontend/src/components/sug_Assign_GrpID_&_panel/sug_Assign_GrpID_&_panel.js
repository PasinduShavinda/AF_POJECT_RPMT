import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import { useNavigate ,useParams} from "react-router-dom";

const Sug_GroupID_and_Panel_Assign = () => {
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
            Grp_Leader: String(inputs.Grp_Leader),
            Grp_member2: String(inputs.Grp_member2),
            Grp_member3: String(inputs.Grp_member3),
            Grp_member4: String(inputs.Grp_member4),
            Grp_ID:String(inputs.Grp_ID),
            Panel:String(inputs.Panel)
          })
          .then((res) => res.data);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history("/All_groups_admin"));
      };
   


 
  
    
    

  return (
   <div id="sug_createPanel">
 {inputs && (<form  onSubmit={handleSubmit} >

<h1>Assign a Group Number and Panal</h1>
<div className='contain'>

      
<label >Group_Leader</label>      
<input type="text"
 name="Grp_Leader" 
 placeholder="Grp_Leader"
 value={inputs.Grp_Leader}
 onChange={handleChange}
 />


</div>

<div className='contain'>

      
<label >Grp_member2</label>      
<input type="text"
 name="Grp_member2" 
 placeholder="Grp_member2"
 value={inputs.Grp_member2}
 onChange={handleChange}
 />


</div>
<div className='contain'>

      
<label >Grp_member3</label>      
<input type="text"
 name="Grp_member3" 
 placeholder="Grp_member3"
 value={inputs.Grp_member3}
 onChange={handleChange}
 />


</div>
<div className='contain'>

      
<label >Grp_member4</label>      
<input type="text"
 name="Grp_member4" 
 placeholder="Grp_member4"
 value={inputs.Grp_member4}
 onChange={handleChange}
 />


</div>
<div className='contain'>

      
<label >Group_ID</label>      
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










     <br/>
     <button type="submit">submit</button>
     </form>)}
     </div>

  
  )
}

export default Sug_GroupID_and_Panel_Assign ;