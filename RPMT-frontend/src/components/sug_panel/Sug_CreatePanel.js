import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import "./sug_CreatePanel.css"
import { useNavigate } from "react-router-dom";





const Sug_CreatePanel = () => {
   


    const history = useNavigate();
    const [inputs, setInputs] = useState({
      
      panelID:"",
      panelmember1:"",
      panelmember2:"",
      panelmember3:"",
      panelmember4:"",
  
    });
    
    //const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/panelcreate", {
          panelID: String(inputs.panelID),
          panelmember1: String(inputs.panelmember1),
          panelmember2: String(inputs.panelmember2),
          panelmember3: String(inputs.panelmember3),
          panelmember4: String(inputs.panelmember4),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(() => history("/dashboard"));
    };
  
    
    

  return (
//     <div className='container py-5 h-100'>
//    <div id="sug_createPanel">
// <form onSubmit={handleSubmit} >
// <h1>Create Panel</h1>
// <div className='contain'>

      
// <label >Panelmember  ID</label>      
// <input type="text"
//  name="panelID" 
//  placeholder="Panel ID"
//  value={inputs.panelID}
//  onChange={handleChange}
//  />


// </div>
// <br/>
// <div className='contain'>

      
// <label >Panelmember 1</label>      
// <input type="text"
//  name="panelmember1" 
//  placeholder="Panelmember1"
//  value={inputs.panelmember1}
//  onChange={handleChange}
//  />


// </div>
// <div className='contain'>

      
// <label >Panelmember  2</label>      
// <input type="text"
//  name="panelmember2" 
//  placeholder="Panelmember2"
//  value={inputs.panelmember2}
//  onChange={handleChange}
//  />


// </div>
// <div className='contain'>

      
// <label >Panelmember 3</label>      
// <input type="text"
//  name="panelmember3" 
//  placeholder="Panelmember3"
//  value={inputs.panelmember3}
//  onChange={handleChange}
//  />


// </div>
// <div className='contain'>

      
// <label >Panelmember 4</label>      
// <input type="text"
//  name="panelmember4" 
//  placeholder="Panelmember4"
//  value={inputs.panelmember4}
//  onChange={handleChange}
//  />


// </div>





//      <br/>
//      <div class="row justify-content-center">
//      <button type="submit" className='btn btn-outline-primary  btn-lg'>submit</button>
//      </div>
//      </form>
//      </div>
//      </div>




<div>
      <div>
  
   <div >

      {inputs && (
 <form onSubmit={handleSubmit} >

<div class="container">
<div class="row">
<div class="col-md-3 sug3">
<div class="contact-info">
  <h2>Create Panel</h2>

<img src="https://cdn3.iconfinder.com/data/icons/business-icons-19/128/jury_experts-512.png" width="300" height="300"/>

</div>
</div>


<div class="col-md-9 sug9">
<div class="contact-form">



<div className="form-group"  marginBottom='15px'>
<label> panelID</label>
<div class="col-sm-10">
<input type="text" 
className="form-control"
name="panelID" 
placeholder="Panel ID"
value={inputs.panelID}
onChange={handleChange}
   
    />
 </div>


 <div className="form-group" marginBottom='15px'>     
<label >Panelmember 1</label> 
<div class="col-sm-10">      
<input type="text"
 name="panelmember1" 
 placeholder="Panelmember1"
 className="form-control"
 value={inputs.panelmember1}
 onChange={handleChange}
 />
</div>
</div>


<div className="form-group" marginBottom='15px'>      
<label >Panelmember  2</label> 
<div class="col-sm-10">      
<input type="text"
 name="panelmember2" 
 className="form-control"
 placeholder="Panelmember2"
 value={inputs.panelmember2}
 onChange={handleChange}
 />
</div>
</div>


<div className="form-group" marginBottom='15px'>     
<label >Panelmember 3</label>
<div class="col-sm-10">       
<input type="text"
 name="panelmember3"
 className="form-control" 
 placeholder="Panelmember3"
 value={inputs.panelmember3}
 onChange={handleChange}
 />
 </div>
</div>



<div className="form-group" marginBottom='15px'>     
<label >Panelmember 4</label> 
<div class="col-sm-10">     
<input type="text"
 name="panelmember4" 
 className="form-control"
 placeholder="Panelmember4"
 value={inputs.panelmember4}
 onChange={handleChange}
 />
 </div>
</div>




</div>





</div>

<button  class="btn btn-dark btn-lg" type="submit" marginBottom='15px'>

&nbsp;
Save</button>




</div>
</div>

</div>
</form>
 )}
</div>
</div>
</div>
  
  )
}

export default Sug_CreatePanel;