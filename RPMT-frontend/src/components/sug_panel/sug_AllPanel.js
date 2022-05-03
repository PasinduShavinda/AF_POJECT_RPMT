import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import Panel from "./sug_Panel";
import "./sug_AllPanel.css"

const URL = "http://localhost:5000/panelcreate";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Sug_AllPanels = () => {
  const [panels, setPanels] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setPanels(data.panels));
  }, []);
  console.log(panels);



  
  return (
    <div id="sug_table"> <ul>
     <h1>All Panels</h1>
<tr >
       <td width={"200px"}>panelID</td>
       <td width={"200px"}>panelmember1</td>
       <td width={"200px"}>panelmember2</td>
       <td width={"200px"}>panelmember3</td>
       <td width={"200px"}>panelmember4</td>
       <td width={"200px"}>Action</td>
       </tr>
       <table>
      {panels && panels.map((panel, i)=>(
        <tr  key={i}>
      <Panel panel={panel}/>
        </tr>
        
      ))}
      </table>
      </ul></div>
  )
}

export default Sug_AllPanels;

