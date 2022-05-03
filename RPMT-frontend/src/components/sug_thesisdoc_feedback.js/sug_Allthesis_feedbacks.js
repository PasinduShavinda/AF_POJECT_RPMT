import React ,{ useEffect, useState }from 'react'
import axios from "axios"

import Sug_thesisdoc_feedback from "./sug_thesis_feedbacks";
const URL = "http://localhost:5000/thesisdoc_feedback2";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Sug_AllThesisdocfeedbacks = () => {
  const [Feedbacks, setfeedbacks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setfeedbacks(data.Feedbacks));
  }, []);
  console.log(Feedbacks);


  return (
    <div id="sug_table"> <ul>
      <h1> All feedbacks given for thesis submitions</h1>
     <td width={"200px"}>GroupId</td>
     <td width={"200px"}>Supervisor</td>
     <td width={"200px"}>Feedback</td>
     <td width={"200px"}>EvaluvatedDate</td>
    
     <td width={"200px"}>Action</td>
     <table>
      {Feedbacks && Feedbacks.map((Feedbacks, i)=>(
        
        <tr  key={i}>
         <Sug_thesisdoc_feedback  Feedbacks={Feedbacks}/>
        </tr>
      ))}
      </table>
      </ul></div>
  )
}

export default Sug_AllThesisdocfeedbacks ;