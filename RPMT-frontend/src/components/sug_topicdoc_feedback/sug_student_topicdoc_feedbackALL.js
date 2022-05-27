import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import Sug_student_topicdoc_feedback from "./sug_topicdoc_feedbacks";
const URL = `http://localhost:5000/topicdoc_feedback2`;


const  Sug_student_AllTopicdocfeedbacks= () => {

  const [Feedback, setfeedbacks] = useState([]);





  useEffect(() => {
    
     axios.get(URL).then((res) => setfeedbacks(res.data.Feedbacks));
  });
 
  const [filterText, setFilterText] = useState("");

        
          //search..........................
    
          const filteredItems = Feedback.filter((sup) =>
          sup.ResTopicFileGroupId.toLocaleLowerCase().includes(filterText)
                  
                );
         
           
              const Feedbacksf = filterText ? filteredItems : Feedback; 

  
     
  return (
    <div >
             <form action="">
                  <input
                    className="float-right"
                    type="text"
                    placeholder="Search"
                    name="search"
                    onChange={(e) =>
                      setFilterText(e.target.value.toLocaleLowerCase())
                    }/>
                    </form><br/>{" "}

    <div >
      
      <h1>All Feedbacks Given for Topic Document Submitions</h1>
      <div className='container contact'>
    <div id="sug_table"> <ul>
      
     <th width={"200px"}>GroupId</th>
     <th width={"200px"}>Panel ID</th>
     <th width={"200px"}>Feedback</th>
     <th width={"200px"}>EvaluvatedDate</th>
    
     <table>
      {Feedbacksf.map(({ _id, ResTopicFileGroupId, ResTopicFilePanel,Feedback, EvaluvatedDate }) => (
        
        <tr  key={_id}>
           <td width={"200px"}>{ResTopicFileGroupId}</td>
       <td width={"200px"} >{ResTopicFilePanel}</td>
       <td width={"200px"}>{Feedback}</td>
       <td width={"200px"}>{EvaluvatedDate}</td>
        </tr>
      ))}
      </table>
      </ul></div></div></div></div>
  )
}

export default Sug_student_AllTopicdocfeedbacks ;