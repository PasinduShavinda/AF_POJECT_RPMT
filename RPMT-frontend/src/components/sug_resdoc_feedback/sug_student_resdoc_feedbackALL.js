import React ,{ useEffect, useState }from 'react'
import axios from "axios"
const URL = "http://localhost:5000/resdoc_feedback2";


const Sug_student_resdoc_feedbackALL = () => {

  const [Feedbacks, setfeedbacks] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => res.data).then((data) => setfeedbacks(data.Feedbacks));
  }, []);

  console.log(Feedbacks);



  const [filterText, setFilterText] = useState("");

        
  //search..........................

  const filteredItems = Feedbacks.filter((sup) =>
  sup.ResDocFileGroupId.toLocaleLowerCase().includes(filterText)
          
        );
 
   
  const Feedbacksf = filterText ? filteredItems : Feedbacks; 





  return (
    <div class="py-5 h-100">
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
      
    <h1>All Reserch Document Feedbacks</h1>
    <div className='container contact'>
    <div id="sug_table"> <ul>
      
     <th width={"200px"}>GroupId</th>
     <th width={"200px"}>Supervisor</th>
     <th width={"200px"}>Topic</th>
     <th width={"200px"}>Feedback</th>
     <th width={"200px"}>Evaluvated Date</th>
    
   
     <table>
      {Feedbacksf.map((Feedbacks, i)=>(
        
        <tr  key={i}>
         <td width={"200px"}>{Feedbacks.ResDocFileGroupId}</td>
       <td width={"200px"} >{Feedbacks.ResDocFileSupervisor}</td>
       <td width={"200px"}>{Feedbacks.ResDocFileTopic}</td>
       <td width={"200px"}>{Feedbacks.Feedback}</td>
       <td width={"200px"}>{Feedbacks.EvaluvatedDate}</td>
        </tr>
      ))}
      </table>
      </ul></div>
      </div>
      </div>
      </div>
  )
}

export default Sug_student_resdoc_feedbackALL;