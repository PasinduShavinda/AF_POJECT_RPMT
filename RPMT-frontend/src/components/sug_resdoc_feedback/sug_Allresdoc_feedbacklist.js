import React ,{ useEffect, useState }from 'react'
import axios from "axios"

import Sug_resdoc_feedback from "./sug_resdoc_feedback";
const URL = "http://localhost:5000/resdoc_feedback2";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Sug_AllResdocfeedbacks = () => {
  const [Feedbacks, setfeedbacks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setfeedbacks(data.Feedbacks));
  }, []);
  console.log(Feedbacks);


  return (
    
    <div id="sug_table"> <ul>
      <h1>All Reserch Document Feedbacks</h1>
     <td width={"200px"}>ResDocFileGroupId</td>
     <td width={"200px"}>ResDocFileSupervisor</td>
     <td width={"200px"}>ResDocFileTopic</td>
     <td width={"200px"}>Feedback</td>
     <td width={"200px"}>EvaluvatedDate</td>
    
     <td width={"200px"}>Action</td>
     <table>
      {Feedbacks && Feedbacks.map((Feedbacks, i)=>(
        
        <tr  key={i}>
         <Sug_resdoc_feedback Feedbacks={Feedbacks}/>
        </tr>
      ))}
      </table>
      </ul></div>
  )
}

export default Sug_AllResdocfeedbacks;